"use client";

import { viewportModes } from "@/lib/anatomy-data";
import { useAnatomyStore } from "@/lib/anatomy-store";
import { DynamicIcon } from "./DynamicIcon";
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { RotateCw, Layers, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export function ViewportControls() {
  const mode = useAnatomyStore((s) => s.mode);
  const setMode = useAnatomyStore((s) => s.setMode);
  const autoRotate = useAnatomyStore((s) => s.autoRotate);
  const setAutoRotate = useAnatomyStore((s) => s.setAutoRotate);
  const explode = useAnatomyStore((s) => s.explode);
  const setExplode = useAnatomyStore((s) => s.setExplode);

  return (
    <div className="glass-strong rounded-2xl p-2.5 shadow-2xl shadow-black/30">
      <TooltipProvider delayDuration={150}>
        <div className="flex flex-wrap items-center gap-2">
          {/* Mode chips */}
          <div className="flex items-center gap-1 overflow-x-auto scroll-slim">
            {viewportModes.map((m) => {
              const active = mode === m.id;
              return (
                <Tooltip key={m.id}>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => setMode(active && m.id === "normal" ? "normal" : m.id)}
                      className={cn(
                        "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all whitespace-nowrap",
                        active
                          ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                          : "text-muted-foreground hover:bg-foreground/[0.06] hover:text-foreground"
                      )}
                    >
                      <DynamicIcon name={m.icon} className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">{m.name}</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs">
                    <p className="font-semibold">{m.name}</p>
                    <p className="text-muted-foreground">{m.description}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>

          <div className="hidden h-6 w-px bg-border/60 sm:block" />

          {/* Explode */}
          <div className="flex items-center gap-2 px-1">
            <Layers className="h-3.5 w-3.5 text-muted-foreground" />
            <div className="w-24 sm:w-28">
              <Slider
                value={[explode]}
                onValueChange={(v) => setExplode(v[0])}
                min={0}
                max={1}
                step={0.01}
                className="[&_[role=slider]]:h-3.5 [&_[role=slider]]:w-3.5"
              />
            </div>
            <span className="w-8 font-mono text-[10px] tabular-nums text-muted-foreground">
              {Math.round(explode * 100)}%
            </span>
          </div>

          <div className="hidden h-6 w-px bg-border/60 sm:block" />

          {/* Auto-rotate */}
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={cn(
              "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all",
              autoRotate
                ? "bg-primary/15 text-primary ring-1 ring-primary/40"
                : "text-muted-foreground hover:bg-foreground/[0.06] hover:text-foreground"
            )}
          >
            {autoRotate ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            <span className="hidden sm:inline">{autoRotate ? "Pause" : "Rotate"}</span>
            <RotateCw className={cn("h-3 w-3", autoRotate && "animate-spin [animation-duration:4s]")} />
          </button>
        </div>
      </TooltipProvider>
    </div>
  );
}
