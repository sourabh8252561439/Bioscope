"use client";

import {
  useAnatomyStore,
  LAYER_IDS,
  type LayerId,
} from "@/lib/anatomy-store";
import { dissectionLayers } from "@/lib/anatomy-data";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Layers,
  Scissors,
  Ruler,
  Tag,
  Trash2,
  Eye,
  EyeOff,
  Sparkles,
  Ghost,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const LAYER_META: Record<LayerId, { label: string; color: string }> = {
  skin: { label: "Skin", color: "#e8b89a" },
  fascia: { label: "Fascia", color: "#d9a07a" },
  muscle: { label: "Muscle", color: "#a83232" },
  organs: { label: "Organs", color: "#c0563e" },
  skeleton: { label: "Skeleton", color: "#ece4d2" },
};

const AXES = [
  { id: "x", label: "Sagittal" },
  { id: "y", label: "Axial" },
  { id: "z", label: "Coronal" },
] as const;

export function LabControls() {
  const photoreal = useAnatomyStore((s) => s.photoreal);
  const setPhotoreal = useAnatomyStore((s) => s.setPhotoreal);
  const layerOpacity = useAnatomyStore((s) => s.layerOpacity);
  const setLayerOpacity = useAnatomyStore((s) => s.setLayerOpacity);
  const isolateLayer = useAnatomyStore((s) => s.isolateLayer);
  const resetLayers = useAnatomyStore((s) => s.resetLayers);

  const sliceActive = useAnatomyStore((s) => s.sliceActive);
  const setSliceActive = useAnatomyStore((s) => s.setSliceActive);
  const sliceAxis = useAnatomyStore((s) => s.sliceAxis);
  const setSliceAxis = useAnatomyStore((s) => s.setSliceAxis);
  const slicePosition = useAnatomyStore((s) => s.slicePosition);
  const setSlicePosition = useAnatomyStore((s) => s.setSlicePosition);

  const tool = useAnatomyStore((s) => s.tool);
  const setTool = useAnatomyStore((s) => s.setTool);
  const clearTools = useAnatomyStore((s) => s.clearTools);
  const annotationCount = useAnatomyStore((s) => s.annotations.length);
  const measurementCount = useAnatomyStore((s) => s.measurements.length);

  return (
    <TooltipProvider delayDuration={150}>
      <div className="glass-strong rounded-2xl p-2.5 shadow-2xl shadow-black/30">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5">
          {/* Render mode toggle */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPhotoreal(true)}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all",
                photoreal
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-foreground/[0.06] hover:text-foreground"
              )}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">PBR</span>
            </button>
            <button
              onClick={() => setPhotoreal(false)}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all",
                !photoreal
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-foreground/[0.06] hover:text-foreground"
              )}
            >
              <Ghost className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Holo</span>
            </button>
          </div>

          <div className="hidden h-6 w-px bg-border/60 sm:block" />

          {/* Dissection layers */}
          <div className="flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            <div className="flex items-center gap-0.5">
              {LAYER_IDS.map((id) => {
                const meta = LAYER_META[id];
                const op = layerOpacity[id];
                const visible = op > 0.01;
                return (
                  <Tooltip key={id}>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() =>
                          setLayerOpacity(id, visible ? 0 : id === "skin" || id === "fascia" ? 0.6 : 1)
                        }
                        onDoubleClick={() => isolateLayer(id)}
                        className="group relative flex items-center gap-1 rounded-md px-1.5 py-1 transition-all"
                        style={{
                          background: visible ? `${meta.color}1f` : "transparent",
                          border: `1px solid ${visible ? meta.color + "55" : "transparent"}`,
                        }}
                        aria-label={`Toggle ${meta.label} layer`}
                      >
                        <span
                          className="h-2.5 w-2.5 rounded-full transition-transform group-hover:scale-125"
                          style={{
                            background: meta.color,
                            opacity: visible ? 1 : 0.3,
                            boxShadow: visible ? `0 0 6px ${meta.color}` : "none",
                          }}
                        />
                        {visible ? (
                          <Eye className="h-3 w-3 text-foreground/70" />
                        ) : (
                          <EyeOff className="h-3 w-3 text-muted-foreground" />
                        )}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="text-xs">
                      <p className="font-semibold">{meta.label}</p>
                      <p className="text-muted-foreground">
                        {Math.round(op * 100)}% · click to toggle · dbl-click to isolate
                      </p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
            <button
              onClick={resetLayers}
              className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground"
              aria-label="Reset layers"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="hidden h-6 w-px bg-border/60 sm:block" />

          {/* Cross-section */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSliceActive(!sliceActive)}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all",
                sliceActive
                  ? "bg-primary/15 text-primary ring-1 ring-primary/40"
                  : "text-muted-foreground hover:bg-foreground/[0.06] hover:text-foreground"
              )}
            >
              <Scissors className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Slice</span>
            </button>
            {sliceActive && (
              <>
                <div className="flex items-center gap-0.5">
                  {AXES.map((ax) => (
                    <button
                      key={ax.id}
                      onClick={() => setSliceAxis(ax.id)}
                      className={cn(
                        "rounded-md px-1.5 py-1 font-mono text-[10px] uppercase transition-all",
                        sliceAxis === ax.id
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {ax.label}
                    </button>
                  ))}
                </div>
                <div className="w-20 sm:w-24">
                  <Slider
                    value={[slicePosition]}
                    onValueChange={(v) => setSlicePosition(v[0])}
                    min={0}
                    max={1}
                    step={0.01}
                  />
                </div>
              </>
            )}
          </div>

          <div className="hidden h-6 w-px bg-border/60 sm:block" />

          {/* Tools */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setTool(tool === "measure" ? "none" : "measure")}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all",
                tool === "measure"
                  ? "bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400/40"
                  : "text-muted-foreground hover:bg-foreground/[0.06] hover:text-foreground"
              )}
            >
              <Ruler className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Measure</span>
              {measurementCount > 0 && (
                <span className="rounded-full bg-cyan-500/30 px-1 text-[9px] font-bold">
                  {measurementCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setTool(tool === "annotate" ? "none" : "annotate")}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all",
                tool === "annotate"
                  ? "bg-amber-500/20 text-amber-300 ring-1 ring-amber-400/40"
                  : "text-muted-foreground hover:bg-foreground/[0.06] hover:text-foreground"
              )}
            >
              <Tag className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Annotate</span>
              {annotationCount > 0 && (
                <span className="rounded-full bg-amber-500/30 px-1 text-[9px] font-bold">
                  {annotationCount}
                </span>
              )}
            </button>
            {(annotationCount > 0 || measurementCount > 0) && (
              <button
                onClick={() => {
                  clearTools();
                  toast.success("Cleared all annotations & measurements");
                }}
                className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                aria-label="Clear tools"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Tool hint */}
        {tool !== "none" && (
          <div className="mt-2 flex items-center gap-2 rounded-lg bg-foreground/[0.04] px-3 py-1.5 text-[11px] text-muted-foreground">
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full animate-pulse",
                tool === "measure" ? "bg-cyan-400" : "bg-amber-400"
              )}
            />
            {tool === "measure"
              ? measurementCount === 0
                ? "Click two points on the model to measure distance"
                : "Click first point, then second point to measure"
              : "Click on the model to drop an annotation pin"}
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}
