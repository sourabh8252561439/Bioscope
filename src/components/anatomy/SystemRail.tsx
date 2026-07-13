"use client";

import { bodySystems } from "@/lib/anatomy-data";
import { useAnatomyStore } from "@/lib/anatomy-store";
import { DynamicIcon } from "./DynamicIcon";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function SystemRail() {
  const systemId = useAnatomyStore((s) => s.systemId);
  const setSystem = useAnatomyStore((s) => s.setSystem);

  return (
    <div className="glass-strong flex w-full flex-col rounded-2xl p-2 shadow-2xl shadow-black/30">
      <div className="flex items-center justify-between px-2 py-1.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Body Systems
        </span>
        <span className="font-mono text-[10px] text-primary/70">{bodySystems.length}</span>
      </div>
      <div className="scroll-slim max-h-[min(52vh,420px)] overflow-y-auto pr-0.5">
        {bodySystems.map((sys) => {
          const active = systemId === sys.id;
          return (
            <button
              key={sys.id}
              onClick={() => setSystem(active ? null : sys.id)}
              className={cn(
                "group relative flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left transition-all",
                active ? "bg-foreground/[0.06]" : "hover:bg-foreground/[0.04]"
              )}
            >
              {/* color bar */}
              <span
                className="absolute left-0 top-1/2 h-7 w-[3px] -translate-y-1/2 rounded-full transition-all"
                style={{
                  background: sys.color,
                  boxShadow: active ? `0 0 12px ${sys.color}` : "none",
                  opacity: active ? 1 : 0.35,
                }}
              />
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1 transition-all"
                style={{
                  background: `${sys.color}1f`,
                  borderColor: `${sys.color}55`,
                  color: sys.color,
                  boxShadow: active ? `0 0 0 1px ${sys.color}66 inset` : "none",
                }}
              >
                <DynamicIcon name={sys.icon} className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-foreground">
                  {sys.name}
                </span>
                <span className="block truncate font-mono text-[10px] text-muted-foreground">
                  {sys.latinName}
                </span>
              </span>
              {active ? (
                <Check className="h-4 w-4 shrink-0" style={{ color: sys.color }} />
              ) : (
                <span
                  className="font-mono text-[10px] text-muted-foreground/60 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  {sys.organs.length}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
