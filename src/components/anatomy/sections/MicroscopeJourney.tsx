"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Microscope, ZoomIn } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { microscopeLevels } from "@/lib/anatomy-data";
import { useAnatomyStore } from "@/lib/anatomy-store";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Parse a human scale string ("1.7 m", "20 µm", "1400 nm") into meters. */
function scaleToMeters(scale: string): number {
  const match = scale.match(/([\d.]+)\s*(m|cm|mm|µm|nm)/);
  if (!match) return 1;
  const value = parseFloat(match[1]);
  const unit = match[2];
  const factors: Record<string, number> = {
    m: 1,
    cm: 0.01,
    mm: 0.001,
    "µm": 1e-6,
    nm: 1e-9,
  };
  return value * (factors[unit] ?? 1);
}

/** Format an integer with grouped thousands / M / B suffix. */
function formatMagnification(n: number): string {
  if (n >= 1e9) return `${(n / 1e9).toFixed(2).replace(/\.00$/, "")}B`;
  if (n >= 1e6) return `${(n / 1e6).toFixed(2).replace(/\.00$/, "")}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(2).replace(/\.00$/, "")}K`;
  return Math.round(n).toLocaleString("en-US");
}

// ---------------------------------------------------------------------------
// Per-level SVG/CSS art
// ---------------------------------------------------------------------------

function LevelArt({ id, color }: { id: string; color: string }) {
  switch (id) {
    case "whole-body":
      return (
        <svg viewBox="0 0 200 320" className="h-full w-full">
          <defs>
            <radialGradient id="wb-glow" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor={color} stopOpacity="0.9" />
              <stop offset="100%" stopColor={color} stopOpacity="0.35" />
            </radialGradient>
          </defs>
          <path
            d="M100 18c14 0 25 11 25 25 0 9-5 17-12 21 4 5 18 9 24 14 8 7 12 18 12 32v44c0 6-4 10-9 10s-9-4-9-10v-40c0-3-2-5-5-5s-5 2-5 5v108c0 7-5 12-11 12s-11-5-11-12v-62c0-3-2-5-5-5s-5 2-5 5v62c0 7-5 12-11 12s-11-5-11-12V114c0-3-2-5-5-5s-5 2-5 5v40c0 6-4 10-9 10s-9-4-9-10v-44c0-14 4-25 12-32 6-5 20-9 24-14-7-4-12-12-12-21 0-14 11-25 25-25z"
            fill="url(#wb-glow)"
            stroke={color}
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
        </svg>
      );

    case "organ":
      return (
        <svg viewBox="0 0 240 200" className="h-full w-full">
          <defs>
            <radialGradient id="org-glow" cx="45%" cy="40%" r="65%">
              <stop offset="0%" stopColor={color} stopOpacity="0.95" />
              <stop offset="70%" stopColor={color} stopOpacity="0.55" />
              <stop offset="100%" stopColor={color} stopOpacity="0.2" />
            </radialGradient>
          </defs>
          <path
            d="M70 40c-25 10-40 35-40 65 0 45 35 80 80 80 20 0 38-8 52-22 8 14 22 22 38 22 25 0 40-20 40-45 0-30-22-52-50-52-10 0-20 3-28 9-6-30-32-57-62-57-12 0-22 3-30 8z"
            fill="url(#org-glow)"
            stroke={color}
            strokeWidth="2"
            strokeOpacity="0.8"
          />
          <ellipse cx="105" cy="90" rx="22" ry="14" fill={color} opacity="0.25" />
        </svg>
      );

    case "tissue":
      return (
        <svg viewBox="0 0 240 200" className="h-full w-full">
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 7 }).map((_, col) => {
              const x = 20 + col * 32 + (row % 2) * 16;
              const y = 20 + row * 36;
              return (
                <g key={`${row}-${col}`}>
                  <ellipse
                    cx={x}
                    cy={y}
                    rx="13"
                    ry="10"
                    fill={color}
                    opacity={0.18 + (row / 5) * 0.5}
                    stroke={color}
                    strokeWidth="1"
                    strokeOpacity="0.6"
                  />
                  <circle cx={x - 4} cy={y - 2} r="3.5" fill={color} opacity="0.7" />
                </g>
              );
            }),
          )}
        </svg>
      );

    case "cell":
      return (
        <svg viewBox="0 0 240 200" className="h-full w-full">
          <defs>
            <radialGradient id="cell-g" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor={color} stopOpacity="0.35" />
              <stop offset="100%" stopColor={color} stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <circle cx="120" cy="100" r="82" fill="url(#cell-g)" stroke={color} strokeWidth="2.5" strokeOpacity="0.85" />
          <circle cx="120" cy="100" r="76" fill="none" stroke={color} strokeWidth="1" strokeOpacity="0.35" />
          <circle cx="120" cy="95" r="34" fill={color} opacity="0.32" stroke={color} strokeWidth="1.5" />
          <circle cx="112" cy="88" r="8" fill={color} opacity="0.7" />
          <ellipse cx="78" cy="70" rx="12" ry="6" fill={color} opacity="0.55" />
          <ellipse cx="170" cy="80" rx="10" ry="5" fill={color} opacity="0.55" transform="rotate(25 170 80)" />
          <ellipse cx="80" cy="140" rx="11" ry="5" fill={color} opacity="0.55" transform="rotate(-20 80 140)" />
          <ellipse cx="165" cy="140" rx="9" ry="6" fill={color} opacity="0.55" transform="rotate(35 165 140)" />
          <circle cx="60" cy="105" r="4" fill={color} opacity="0.6" />
          <circle cx="180" cy="115" r="5" fill={color} opacity="0.6" />
        </svg>
      );

    case "organelle":
      return (
        <svg viewBox="0 0 280 160" className="h-full w-full">
          <defs>
            <linearGradient id="mito-g" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={color} stopOpacity="0.85" />
              <stop offset="50%" stopColor={color} stopOpacity="0.55" />
              <stop offset="100%" stopColor={color} stopOpacity="0.85" />
            </linearGradient>
          </defs>
          <ellipse cx="140" cy="80" rx="120" ry="48" fill="url(#mito-g)" stroke={color} strokeWidth="2.5" strokeOpacity="0.9" />
          <ellipse cx="140" cy="80" rx="112" ry="40" fill="none" stroke={color} strokeWidth="1.5" strokeOpacity="0.5" />
          {Array.from({ length: 9 }).map((_, i) => {
            const x = 50 + i * 22;
            return (
              <path
                key={i}
                d={`M${x} 50 Q ${x + 8} 80 ${x} 110`}
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeOpacity="0.75"
              />
            );
          })}
        </svg>
      );

    case "dna":
      return (
        <svg viewBox="0 0 200 280" className="h-full w-full">
          <defs>
            <linearGradient id="dna-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.9" />
              <stop offset="100%" stopColor={color} stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M40 10 Q 80 40 120 70 T 160 130 T 120 190 T 80 250 T 40 280"
            fill="none"
            stroke="url(#dna-g)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M160 10 Q 120 40 80 70 T 40 130 T 80 190 T 120 250 T 160 280"
            fill="none"
            stroke="url(#dna-g)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {Array.from({ length: 11 }).map((_, i) => {
            const t = i / 10;
            const y = 15 + t * 250;
            const phase = t * Math.PI * 5;
            const x1 = 100 + Math.sin(phase) * 60;
            const x2 = 100 - Math.sin(phase) * 60;
            return (
              <line
                key={i}
                x1={x1}
                y1={y}
                x2={x2}
                y2={y}
                stroke={color}
                strokeWidth="2"
                strokeOpacity="0.6"
              />
            );
          })}
        </svg>
      );

    case "chromosome":
      return (
        <svg viewBox="0 0 240 240" className="h-full w-full">
          <defs>
            <linearGradient id="chrom-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.95" />
              <stop offset="100%" stopColor={color} stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M50 40 Q 120 110 120 120 Q 120 110 190 40"
            fill="none"
            stroke="url(#chrom-g)"
            strokeWidth="22"
            strokeLinecap="round"
          />
          <path
            d="M50 200 Q 120 130 120 120 Q 120 130 190 200"
            fill="none"
            stroke="url(#chrom-g)"
            strokeWidth="22"
            strokeLinecap="round"
          />
          <circle cx="120" cy="120" r="14" fill={color} opacity="0.9" />
          <circle cx="120" cy="120" r="6" fill="white" opacity="0.4" />
        </svg>
      );

    case "protein":
      return (
        <svg viewBox="0 0 280 200" className="h-full w-full">
          <defs>
            <linearGradient id="prot-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.95" />
              <stop offset="100%" stopColor={color} stopOpacity="0.55" />
            </linearGradient>
          </defs>
          <path
            d="M20 100 Q 50 40 90 100 Q 130 160 170 100 Q 210 40 250 100"
            fill="none"
            stroke="url(#prot-g)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 100 Q 50 40 90 100 Q 130 160 170 100 Q 210 40 250 100"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeOpacity="0.4"
          />
          {[
            [20, 100],
            [55, 70],
            [90, 100],
            [130, 130],
            [170, 100],
            [210, 70],
            [250, 100],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="6" fill={color} opacity="0.85" />
          ))}
        </svg>
      );

    case "molecule":
      return (
        <svg viewBox="0 0 240 200" className="h-full w-full">
          <defs>
            <radialGradient id="mol-g" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor={color} stopOpacity="1" />
              <stop offset="100%" stopColor={color} stopOpacity="0.55" />
            </radialGradient>
          </defs>
          <g stroke={color} strokeWidth="4" strokeOpacity="0.6" strokeLinecap="round">
            <line x1="120" y1="100" x2="60" y2="60" />
            <line x1="120" y1="100" x2="180" y2="60" />
            <line x1="120" y1="100" x2="60" y2="150" />
            <line x1="120" y1="100" x2="180" y2="150" />
            <line x1="60" y1="60" x2="180" y2="60" />
          </g>
          <circle cx="120" cy="100" r="26" fill="url(#mol-g)" stroke={color} strokeWidth="1.5" />
          <circle cx="60" cy="60" r="18" fill={color} opacity="0.75" stroke={color} strokeWidth="1.5" />
          <circle cx="180" cy="60" r="18" fill={color} opacity="0.75" stroke={color} strokeWidth="1.5" />
          <circle cx="60" cy="150" r="16" fill={color} opacity="0.6" stroke={color} strokeWidth="1.5" />
          <circle cx="180" cy="150" r="16" fill={color} opacity="0.6" stroke={color} strokeWidth="1.5" />
          <circle cx="113" cy="92" r="6" fill="white" opacity="0.5" />
          <circle cx="54" cy="54" r="4" fill="white" opacity="0.4" />
        </svg>
      );

    case "atom":
      return (
        <svg viewBox="0 0 240 200" className="h-full w-full">
          <defs>
            <radialGradient id="atom-g" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={color} stopOpacity="1" />
              <stop offset="100%" stopColor={color} stopOpacity="0.4" />
            </radialGradient>
          </defs>
          <g fill="none" stroke={color} strokeWidth="1.5" strokeOpacity="0.55">
            <ellipse cx="120" cy="100" rx="90" ry="34" />
            <ellipse cx="120" cy="100" rx="90" ry="34" transform="rotate(60 120 100)" />
            <ellipse cx="120" cy="100" rx="90" ry="34" transform="rotate(120 120 100)" />
          </g>
          <circle cx="210" cy="100" r="5" fill={color} />
          <circle cx="75" cy="22" r="5" fill={color} />
          <circle cx="75" cy="178" r="5" fill={color} />
          <circle cx="120" cy="100" r="20" fill="url(#atom-g)" stroke={color} strokeWidth="1.5" />
          <circle cx="115" cy="95" r="4" fill="white" opacity="0.45" />
        </svg>
      );

    default:
      return null;
  }
}

// ---------------------------------------------------------------------------
// Floating particles for ambiance
// ---------------------------------------------------------------------------

// Deterministic seeded PRNG (mulberry32) so the server-rendered particle
// layout exactly matches the client-hydrated layout — prevents React
// hydration mismatches that `Math.random()` would cause.
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function Particles({ color }: { color: string }) {
  const particles = React.useMemo(() => {
    const rand = mulberry32(20240713); // fixed seed → SSR & client identical
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: rand() * 100,
      y: rand() * 100,
      size: 1 + rand() * 3,
      delay: rand() * 4,
      duration: 4 + rand() * 6,
    }));
  }, []);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: color,
            opacity: 0.5,
            boxShadow: `0 0 ${p.size * 3}px ${color}`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section heading
// ---------------------------------------------------------------------------

function SectionHeading() {
  return (
    <div className="mb-12 text-center sm:mb-16">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary/80">
        Microscopy
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        Journey from body to{" "}
        <span className="text-primary text-glow">atom</span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
        Slide through ten orders of magnitude and watch the human body dissolve
        into its fundamental building blocks.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function MicroscopeJourney() {
  const microscopeIndex = useAnatomyStore((s) => s.microscopeIndex);
  const setMicroscopeIndex = useAnatomyStore((s) => s.setMicroscopeIndex);

  const level = microscopeLevels[microscopeIndex] ?? microscopeLevels[0];
  const baseScale = scaleToMeters(microscopeLevels[0].scale);
  const currentScale = scaleToMeters(level.scale);
  const magnification = baseScale / currentScale;

  return (
    <section id="microscope" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading />

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left: track + slider */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="glass flex flex-col gap-6 rounded-2xl p-5 sm:p-6">
              {/* Mobile slider (horizontal) */}
              <div className="lg:hidden">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Zoom level
                  </span>
                  <span className="font-mono text-xs text-primary">
                    {microscopeIndex + 1} / {microscopeLevels.length}
                  </span>
                </div>
                <Slider
                  value={[microscopeIndex]}
                  min={0}
                  max={microscopeLevels.length - 1}
                  step={1}
                  onValueChange={(v) => setMicroscopeIndex(v[0])}
                  aria-label="Microscope zoom level"
                />
              </div>

              {/* Track list — horizontal scroll on mobile, vertical on lg */}
              <div
                className="scroll-slim flex gap-2 overflow-x-auto pb-1 lg:max-h-[420px] lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden lg:pb-0"
                role="tablist"
                aria-label="Microscope levels"
              >
                {microscopeLevels.map((lvl, i) => {
                  const active = i === microscopeIndex;
                  return (
                    <button
                      key={lvl.id}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setMicroscopeIndex(i)}
                      className={cn(
                        "group relative flex min-w-[180px] shrink-0 items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all lg:min-w-0",
                        active
                          ? "border-primary/60 bg-primary/10"
                          : "border-border/50 bg-background/30 hover:border-primary/30 hover:bg-foreground/5",
                      )}
                    >
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full transition-transform group-hover:scale-125"
                        style={{
                          background: lvl.color,
                          boxShadow: active ? `0 0 10px ${lvl.color}` : "none",
                        }}
                      />
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span
                          className={cn(
                            "truncate text-sm font-medium",
                            active ? "text-foreground" : "text-muted-foreground",
                          )}
                        >
                          {lvl.name}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                          {lvl.scale}
                        </span>
                      </span>
                      {active && (
                        <motion.span
                          layoutId="micro-track-active"
                          className="absolute inset-y-1 left-0 w-0.5 rounded-full bg-primary"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Desktop vertical slider */}
              <div className="hidden lg:block">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Zoom level
                  </span>
                  <span className="font-mono text-xs text-primary">
                    {microscopeIndex + 1} / {microscopeLevels.length}
                  </span>
                </div>
                <Slider
                  orientation="vertical"
                  value={[microscopeIndex]}
                  min={0}
                  max={microscopeLevels.length - 1}
                  step={1}
                  onValueChange={(v) => setMicroscopeIndex(v[0])}
                  aria-label="Microscope zoom level"
                  className="h-40"
                />
              </div>
            </div>
          </div>

          {/* Right: visualization */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="glass-strong grid-bg relative flex min-h-[440px] flex-col overflow-hidden rounded-3xl p-6 sm:min-h-[520px] sm:p-8">
              <Particles color={level.color} />

              {/* Top readouts */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/40">
                    <Microscope className="h-4 w-4 text-primary" />
                  </span>
                  <div className="leading-tight">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Current view
                    </div>
                    <div className="font-mono text-xs text-primary">{level.scale}</div>
                  </div>
                </div>
                <div className="rounded-xl border border-primary/30 bg-primary/10 px-3 py-1.5 text-right">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">
                    Magnification
                  </div>
                  <div className="font-mono text-lg font-bold text-primary">
                    {formatMagnification(magnification)}×
                  </div>
                </div>
              </div>

              {/* Art stage */}
              <div className="relative z-10 flex flex-1 items-center justify-center py-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={level.id}
                    initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.1, rotate: 6 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-56 w-56 items-center justify-center sm:h-72 sm:w-72"
                    style={{
                      filter: `drop-shadow(0 0 32px ${level.color}55)`,
                    }}
                  >
                    <LevelArt id={level.id} color={level.color} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom info */}
              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={level.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="flex items-center gap-2">
                      <ZoomIn className="h-4 w-4 text-primary" />
                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        {level.name}
                      </h3>
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {level.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
