"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, ArrowRight, Stethoscope } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  bodySystems,
  diseaseLibrary,
  type Disease,
} from "@/lib/anatomy-data";
import { useAnatomyStore } from "@/lib/anatomy-store";
import { cn } from "@/lib/utils";

// System lookup map
const systemMap: Record<string, (typeof bodySystems)[number]> = Object.fromEntries(
  bodySystems.map((s) => [s.id, s]),
);

// Truncate a long cause string for the card preview
function excerpt(text: string, max = 110): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

// ---------------------------------------------------------------------------
// Filter pills
// ---------------------------------------------------------------------------

function FilterPills({
  active,
  onChange,
}: {
  active: string | null;
  onChange: (id: string | null) => void;
}) {
  const pills: { id: string | null; label: string }[] = [
    { id: null, label: "All" },
    ...bodySystems
      .filter((s) => diseaseLibrary.some((d) => d.systemId === s.id))
      .map((s) => ({ id: s.id, label: s.name.replace(" System", "") })),
  ];

  return (
    <div className="scroll-slim mb-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
      {pills.map((p) => {
        const isActive = active === p.id;
        return (
          <button
            key={p.id ?? "all"}
            onClick={() => onChange(p.id)}
            aria-pressed={isActive}
            className={cn(
              "shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all sm:text-sm",
              isActive
                ? "border-primary/60 bg-primary text-primary-foreground shadow-sm"
                : "border-border/60 bg-background/40 text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            {p.label}
          </button>
        );
      })}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Disease card
// ---------------------------------------------------------------------------

function DiseaseCard({
  disease,
  onOpen,
  highlighted,
}: {
  disease: Disease;
  onOpen: () => void;
  highlighted: boolean;
}) {
  const system = systemMap[disease.systemId];
  return (
    <motion.button
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      onClick={onOpen}
      whileHover={{ y: -4 }}
      className={cn(
        "glass group relative flex h-full flex-col gap-3 rounded-2xl p-5 text-left transition-colors",
        highlighted && "ring-2 ring-primary/60",
      )}
    >
      {/* Top row: system dot + name */}
      <div className="flex items-center gap-2">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ background: system?.color, boxShadow: `0 0 8px ${system?.color}` }}
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {system?.name ?? "Unknown"}
        </span>
      </div>

      {/* Disease name */}
      <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
        {disease.name}
      </h3>

      {/* Cause excerpt */}
      <p className="flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
        {excerpt(disease.cause)}
      </p>

      {/* View affordance */}
      <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-primary opacity-80 transition-opacity group-hover:opacity-100">
        View details
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </div>
    </motion.button>
  );
}

// ---------------------------------------------------------------------------
// Detail dialog
// ---------------------------------------------------------------------------

function DiseaseDialog({
  disease,
  open,
  onOpenChange,
  onViewSystem,
}: {
  disease: Disease | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onViewSystem: (d: Disease) => void;
}) {
  const system = disease ? systemMap[disease.systemId] : null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="scroll-slim max-h-[88vh] overflow-y-auto sm:max-w-2xl">
        {disease && system && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ background: system.color, boxShadow: `0 0 10px ${system.color}` }}
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {system.name}
                </span>
              </div>
              <DialogTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
                {disease.name}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Full clinical details for {disease.name}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-5">
              {/* Cause */}
              <section>
                <h4 className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">
                  Cause
                </h4>
                <p className="text-sm leading-relaxed text-foreground/90">
                  {disease.cause}
                </p>
              </section>

              {/* Symptoms */}
              <section>
                <h4 className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">
                  Symptoms
                </h4>
                <div className="flex flex-wrap gap-2">
                  {disease.symptoms.map((s) => (
                    <Badge
                      key={s}
                      variant="secondary"
                      className="rounded-full border-primary/20 bg-primary/10 text-foreground"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>
              </section>

              {/* Diagnosis */}
              <section>
                <h4 className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">
                  Diagnosis
                </h4>
                <p className="text-sm leading-relaxed text-foreground/90">
                  {disease.diagnosis}
                </p>
              </section>

              {/* Treatment */}
              <section>
                <h4 className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">
                  Treatment
                </h4>
                <p className="text-sm leading-relaxed text-foreground/90">
                  {disease.treatment}
                </p>
              </section>

              {/* Prognosis */}
              <section>
                <h4 className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">
                  Prognosis
                </h4>
                <p className="text-sm leading-relaxed text-foreground/90">
                  {disease.prognosis}
                </p>
              </section>
            </div>

            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => onViewSystem(disease)}
                className="gap-2 rounded-xl"
              >
                <Stethoscope className="h-4 w-4" />
                View related system in 3D
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

// ---------------------------------------------------------------------------
// Main section
// ---------------------------------------------------------------------------

export function DiseaseLibrary() {
  const [filter, setFilter] = React.useState<string | null>(null);
  const [openId, setOpenId] = React.useState<string | null>(null);
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const diseaseId = useAnatomyStore((s) => s.diseaseId);
  const setDiseaseId = useAnatomyStore((s) => s.setDiseaseId);
  const setSystem = useAnatomyStore((s) => s.setSystem);

  const filtered = React.useMemo(
    () => (filter ? diseaseLibrary.filter((d) => d.systemId === filter) : diseaseLibrary),
    [filter],
  );

  const activeDisease = React.useMemo(
    () => diseaseLibrary.find((d) => d.id === openId) ?? null,
    [openId],
  );

  const handleOpen = (d: Disease) => {
    setOpenId(d.id);
    setDiseaseId(d.id);
  };

  const handleViewSystem = (d: Disease) => {
    setSystem(d.systemId);
    setOpenId(null);
    if (typeof document !== "undefined") {
      document.getElementById("atlas")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="diseases" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary/80">
            Pathology
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Disease <span className="text-primary text-glow">library</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Explore clinically reviewed conditions across every body system —
            from cause to treatment.
          </p>
        </div>

        <FilterPills active={filter} onChange={setFilter} />

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((d) => (
              <DiseaseCard
                key={d.id}
                disease={d}
                onOpen={() => handleOpen(d)}
                highlighted={d.id === diseaseId}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-3 py-16 text-muted-foreground">
            <Activity className="h-8 w-8 opacity-50" />
            <p className="text-sm">No diseases in this category.</p>
          </div>
        )}
      </div>

      {mounted && (
        <DiseaseDialog
          disease={activeDisease}
          open={openId !== null}
          onOpenChange={(v) => !v && setOpenId(null)}
          onViewSystem={handleViewSystem}
        />
      )}
    </section>
  );
}
