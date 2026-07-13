"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DynamicIcon } from "@/components/anatomy/DynamicIcon";
import { educationModes, type EducationMode } from "@/lib/anatomy-data";
import { useAnatomyStore } from "@/lib/anatomy-store";
import { cn } from "@/lib/utils";

// Difficulty badge styles — emerald / amber / crimson
const DIFFICULTY_STYLES: Record<EducationMode["difficulty"], string> = {
  Beginner: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
  Intermediate: "border-amber-500/40 bg-amber-500/10 text-amber-400",
  Advanced: "border-rose-500/40 bg-rose-500/10 text-rose-400",
};

// Map education mode id -> AI tutor mode
function aiModeFor(id: string): "doctor" | "student" | "research" | "simplified" {
  switch (id) {
    case "medical-school":
      return "doctor";
    case "biology":
      return "simplified";
    case "nursing":
    default:
      return "student";
  }
}

function EducationCard({ mode, index }: { mode: EducationMode; index: number }) {
  const setSystem = useAnatomyStore((s) => s.setSystem);
  const setAiMode = useAnatomyStore((s) => s.setAiMode);
  const setAiOpen = useAnatomyStore((s) => s.setAiOpen);

  const handleEnter = () => {
    setSystem(null);
    setAiMode(aiModeFor(mode.id));
    setAiOpen(true);
    toast.success(`Entering ${mode.name} mode`, {
      description: mode.description.split(".")[0],
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
      whileHover={{ y: -4 }}
      className="glass group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-5 sm:p-6"
    >
      {/* Header: icon + difficulty */}
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 transition-transform duration-300 group-hover:scale-110">
          <DynamicIcon name={mode.icon} className="h-6 w-6" />
        </span>
        <span
          className={cn(
            "rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider",
            DIFFICULTY_STYLES[mode.difficulty],
          )}
        >
          {mode.difficulty}
        </span>
      </div>

      {/* Name + description */}
      <div className="flex-1 space-y-2">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {mode.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {mode.description}
        </p>
      </div>

      {/* CTA */}
      <Button
        onClick={handleEnter}
        variant="outline"
        className="group/btn w-full justify-between gap-2 rounded-xl border-primary/30 bg-primary/5 hover:bg-primary/10 hover:text-primary"
      >
        Enter mode
        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
      </Button>
    </motion.article>
  );
}

export function EducationModes() {
  return (
    <section id="learn" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        {/* Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary/80">
            Education
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Built for every level of{" "}
            <span className="text-primary text-glow">learning</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Choose your path — from high-school biology to specialist exam prep.
            The AI tutor adapts its depth to match.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {educationModes.map((mode, i) => (
            <EducationCard key={mode.id} mode={mode} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
