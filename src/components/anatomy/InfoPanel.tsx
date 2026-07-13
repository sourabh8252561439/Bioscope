"use client";

import { bodySystems, quizQuestions } from "@/lib/anatomy-data";
import { useAnatomyStore } from "@/lib/anatomy-store";
import { DynamicIcon } from "./DynamicIcon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Sparkles,
  MapPin,
  Heart,
  Zap,
  Stethoscope,
  Weight,
  Microscope,
  AlertTriangle,
  BookOpen,
  Network,
  ScanLine,
  FlaskConical,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

function Field({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="rounded-xl border border-border/50 bg-background/30 p-3">
      <div className="mb-1 flex items-center gap-1.5">
        <Icon className="h-3.5 w-3.5" style={{ color: accent }} />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </span>
      </div>
      <p className="text-[13px] leading-relaxed text-foreground/90">{value}</p>
    </div>
  );
}

export function InfoPanel() {
  const systemId = useAnatomyStore((s) => s.systemId);
  const organId = useAnatomyStore((s) => s.organId);
  const setOrgan = useAnatomyStore((s) => s.setOrgan);
  const setAiOpen = useAnatomyStore((s) => s.setAiOpen);

  const system = bodySystems.find((s) => s.id === systemId) ?? null;

  if (!system) {
    return (
      <div className="glass-strong flex h-full flex-col items-center justify-center rounded-2xl p-8 text-center shadow-2xl shadow-black/30">
        <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/30">
          <BookOpen className="h-7 w-7 text-primary" />
          <span className="absolute inset-0 rounded-2xl ring-1 ring-primary/20 animate-ping [animation-duration:3s]" />
        </div>
        <h3 className="text-base font-semibold text-foreground">
          Select a body system
        </h3>
        <p className="mt-1.5 max-w-[15rem] text-sm text-muted-foreground">
          Choose a system from the left to reveal its anatomy, physiology, and
          clinical details in the hologram.
        </p>
      </div>
    );
  }

  const organ = system.organs.find((o) => o.id === organId) ?? null;

  return (
    <div className="glass-strong flex h-full flex-col overflow-hidden rounded-2xl shadow-2xl shadow-black/30">
      {/* Header */}
      <div
        className="relative shrink-0 overflow-hidden p-4"
        style={{
          background: `linear-gradient(135deg, ${system.color}22, transparent 70%)`,
        }}
      >
        <div className="flex items-start gap-3">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1"
            style={{
              background: `${system.color}1f`,
              borderColor: `${system.color}55`,
              color: system.color,
              boxShadow: `0 0 22px ${system.color}33`,
            }}
          >
            <DynamicIcon name={system.icon} className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            {organ ? (
              <button
                onClick={() => setOrgan(null)}
                className="mb-1 flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-3 w-3" />
                {system.name}
              </button>
            ) : (
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {system.latinName}
              </span>
            )}
            <h2 className="truncate text-lg font-bold tracking-tight text-foreground">
              {organ ? organ.name : system.name}
            </h2>
            <p className="truncate text-xs text-muted-foreground">
              {organ ? organ.latinName : system.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="scroll-slim flex-1 overflow-y-auto p-4 pt-2">
        {organ ? (
          <div className="space-y-3">
            {organ.weight && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Weight className="h-3.5 w-3.5" style={{ color: system.color }} />
                <span>Weight: {organ.weight}</span>
                {system.imagingModality && (
                  <>
                    <span className="mx-1 text-border">·</span>
                    <ScanLine className="h-3.5 w-3.5" style={{ color: system.color }} />
                    <span>Best seen on {system.imagingModality}</span>
                  </>
                )}
              </div>
            )}
            <Field icon={BookOpen} label="Overview" value={organ.overview} accent={system.color} />
            <Field icon={MapPin} label="Location" value={organ.location} accent={system.color} />
            <Field icon={Microscope} label="Function" value={organ.function} accent={system.color} />
            {organ.relationships && (
              <Field icon={Network} label="Relationships" value={organ.relationships} accent={system.color} />
            )}
            <Field icon={Heart} label="Blood Supply" value={organ.bloodSupply} accent={system.color} />
            <Field icon={Zap} label="Nerve Supply" value={organ.nerveSupply} accent={system.color} />
            {organ.histology && (
              <Field icon={FlaskConical} label="Histology" value={organ.histology} accent={system.color} />
            )}
            {organ.imaging && (
              <Field icon={ScanLine} label="Imaging" value={organ.imaging} accent={system.color} />
            )}
            <Field icon={Stethoscope} label="Clinical Importance" value={organ.clinicalImportance} accent={system.color} />
            {organ.clinicalNote && (
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-3">
                <div className="mb-1 flex items-center gap-1.5">
                  <Stethoscope className="h-3.5 w-3.5 text-amber-500" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-500">
                    Clinical Pearl
                  </span>
                </div>
                <p className="text-[13px] leading-relaxed text-foreground/90">{organ.clinicalNote}</p>
              </div>
            )}

            <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-3">
              <div className="mb-2 flex items-center gap-1.5">
                <AlertTriangle className="h-3.5 w-3.5 text-destructive" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-destructive">
                  Common Conditions
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {organ.commonDiseases.map((d) => (
                  <Badge
                    key={d}
                    variant="secondary"
                    className="rounded-md border border-destructive/20 bg-destructive/10 text-[11px] text-foreground"
                  >
                    {d}
                  </Badge>
                ))}
              </div>
            </div>

            {typeof organ.quizRef === "number" && quizQuestions[organ.quizRef] && (
              <button
                onClick={() => {
                  document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex w-full items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 p-3 text-left transition-colors hover:bg-primary/10"
              >
                <HelpCircle className="h-4 w-4 shrink-0 text-primary" />
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-primary/80">
                    Related quiz
                  </span>
                  <span className="block truncate text-[13px] font-medium text-foreground">
                    {quizQuestions[organ.quizRef].question}
                  </span>
                </span>
              </button>
            )}

            <Button
              onClick={() => setAiOpen(true)}
              className="w-full gap-2 rounded-xl"
              style={{
                background: `${system.color}1f`,
                border: `1px solid ${system.color}55`,
                color: system.color,
              }}
            >
              <Sparkles className="h-4 w-4" />
              Ask AI about {organ.name}
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-[13px] leading-relaxed text-foreground/90">
              {system.description}
            </p>

            <div className="grid grid-cols-2 gap-2">
              {system.stats.map((st) => (
                <div
                  key={st.label}
                  className="rounded-xl border border-border/50 bg-background/30 p-2.5 text-center"
                >
                  <div
                    className="font-mono text-lg font-bold"
                    style={{ color: system.color }}
                  >
                    {st.value}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border/50 bg-background/20 p-3">
              <p className="text-xs italic text-muted-foreground">
                <span className="font-semibold not-italic" style={{ color: system.color }}>
                  Did you know?{" "}
                </span>
                {system.funFact}
              </p>
            </div>

            {system.layers && system.layers.length > 0 && (
              <div className="rounded-xl border border-border/50 bg-background/20 p-3">
                <div className="mb-2 flex items-center gap-1.5">
                  <Network className="h-3.5 w-3.5" style={{ color: system.color }} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Dissection layers
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {system.layers.map((l, i) => (
                    <span
                      key={l}
                      className="flex items-center gap-1 rounded-md bg-foreground/[0.05] px-1.5 py-0.5 text-[10px] text-foreground/80"
                    >
                      <span className="font-mono text-[9px] text-muted-foreground">{i + 1}</span>
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Structures ({system.organs.length})
                </span>
              </div>
              <div className="space-y-1">
                {system.organs.map((o) => {
                  const sel = organId === o.id;
                  return (
                    <button
                      key={o.id}
                      onClick={() => setOrgan(o.id)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left transition-all",
                        sel ? "bg-foreground/[0.07]" : "hover:bg-foreground/[0.04]"
                      )}
                    >
                      <span className="min-w-0">
                        <span className="block truncate text-[13px] font-medium text-foreground">
                          {o.name}
                        </span>
                        <span className="block truncate font-mono text-[10px] text-muted-foreground">
                          {o.latinName}
                        </span>
                      </span>
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: system.color, opacity: sel ? 1 : 0.4 }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
