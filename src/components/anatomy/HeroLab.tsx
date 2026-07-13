"use client";

import * as React from "react";
import { AnatomyViewer } from "./AnatomyViewer";
import { SystemRail } from "./SystemRail";
import { InfoPanel } from "./InfoPanel";
import { ViewportControls } from "./ViewportControls";
import { LabControls } from "./LabControls";
import { useAnatomyStore } from "@/lib/anatomy-store";
import { bodySystems } from "@/lib/anatomy-data";
import { DynamicIcon } from "./DynamicIcon";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Sparkles, Info, ChevronDown, MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";

export function HeroLab() {
  const systemId = useAnatomyStore((s) => s.systemId);
  const setSystem = useAnatomyStore((s) => s.setSystem);
  const setAiOpen = useAnatomyStore((s) => s.setAiOpen);
  const system = bodySystems.find((s) => s.id === systemId);
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <section id="atlas" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* 3D background */}
      <AnatomyViewer />

      {/* grid + scanline ambience */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />

      {/* Top headline */}
      <div className="pointer-events-none absolute inset-x-0 top-20 z-10 flex flex-col items-center px-4 text-center sm:top-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-3 flex items-center gap-2 rounded-full glass px-3 py-1"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Holographic Anatomy Engine
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Explore the{" "}
          <span className="bg-gradient-to-r from-primary via-emerald-400 to-amber-300 bg-clip-text text-transparent">
            human body
          </span>{" "}
          to the atom
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-3 max-w-xl text-pretty text-sm text-muted-foreground sm:text-base"
        >
          11 body systems · 80+ structures · AI medical tutor · microscopic zoom
          from whole body to DNA.
        </motion.p>
      </div>

      {/* Desktop left rail */}
      <div className="absolute left-3 top-1/2 z-20 hidden w-64 -translate-y-1/2 lg:block xl:left-5 xl:w-72">
        <SystemRail />
      </div>

      {/* Desktop right info panel */}
      <div className="absolute right-3 top-1/2 z-20 hidden h-[min(70vh,560px)] w-80 -translate-y-1/2 lg:block xl:right-5 xl:w-96">
        <InfoPanel />
      </div>

      {/* Mobile system chips */}
      <div className="absolute inset-x-0 bottom-28 z-20 px-3 lg:hidden">
        <div className="glass-strong rounded-2xl p-2">
          <div className="mb-1.5 flex items-center justify-between px-1">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              Systems
            </span>
            <span className="font-mono text-[9px] text-primary/70">{bodySystems.length}</span>
          </div>
          <div className="scroll-slim flex gap-1.5 overflow-x-auto pb-1">
            {bodySystems.map((s) => {
              const active = systemId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSystem(active ? null : s.id)}
                  className="flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all"
                  style={{
                    background: active ? `${s.color}22` : "transparent",
                    border: `1px solid ${active ? s.color + "66" : "transparent"}`,
                    color: active ? s.color : "var(--muted-foreground)",
                  }}
                >
                  <DynamicIcon name={s.icon} className="h-3.5 w-3.5" />
                  {s.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile info trigger — deferred to after mount to avoid Radix useId()
          hydration mismatches in Next.js dev mode */}
      <div className="absolute bottom-3 right-3 z-30 lg:hidden">
        {mounted ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="sm"
                variant="secondary"
                disabled={!system}
                className="glass-strong gap-1.5 rounded-xl border-border/60 shadow-lg"
              >
                <Info className="h-4 w-4" />
                Details
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh] p-0">
              <SheetHeader className="px-4 pt-3">
                <SheetTitle className="sr-only">Anatomy details</SheetTitle>
              </SheetHeader>
              <div className="h-full p-3">
                <InfoPanel />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <Button
            size="sm"
            variant="secondary"
            disabled
            className="glass-strong gap-1.5 rounded-xl border-border/60 shadow-lg"
          >
            <Info className="h-4 w-4" />
            Details
          </Button>
        )}
      </div>

      {/* Bottom controls */}
      <div className="absolute inset-x-0 bottom-3 z-20 flex flex-col items-center gap-2 px-3 lg:bottom-4">
        <div className="w-full max-w-4xl">
          <LabControls />
        </div>
        <div className="w-full max-w-3xl">
          <ViewportControls />
        </div>
      </div>

      {/* Floating Ask AI (desktop) */}
      <div className="absolute right-5 top-24 z-30 hidden lg:block">
        <Button
          onClick={() => setAiOpen(true)}
          className="gap-2 rounded-2xl bg-primary px-4 text-primary-foreground shadow-xl shadow-primary/30 hover:bg-primary/90"
        >
          <Sparkles className="h-4 w-4" />
          Ask AI Tutor
        </Button>
      </div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute inset-x-0 bottom-24 z-10 hidden items-center justify-center gap-1.5 text-muted-foreground/60 lg:flex">
        <MousePointer2 className="h-3 w-3" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Drag to rotate · Scroll to zoom</span>
      </div>

      {/* Active system badge (mobile, replaces nothing) */}
      {system && (
        <div className="absolute left-1/2 top-3 z-20 -translate-x-1/2 lg:hidden">
          <div
            className="flex items-center gap-2 rounded-full px-3 py-1 glass-strong"
            style={{ borderColor: `${system.color}55` }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: system.color }} />
            <span className="text-xs font-semibold" style={{ color: system.color }}>
              {system.name}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
