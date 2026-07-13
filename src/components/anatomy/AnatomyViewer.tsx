"use client";

import dynamic from "next/dynamic";
import { useAnatomyStore } from "@/lib/anatomy-store";
import { bodySystems } from "@/lib/anatomy-data";

const MedicalScene = dynamic(() => import("./scene/MedicalScene3D"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin" />
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-primary/60 animate-spin [animation-direction:reverse]" />
        </div>
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground animate-pulse">
          Loading anatomical model
        </p>
      </div>
    </div>
  ),
});

export function AnatomyViewer() {
  const systemId = useAnatomyStore((s) => s.systemId);
  const mode = useAnatomyStore((s) => s.mode);
  const autoRotate = useAnatomyStore((s) => s.autoRotate);

  const system = bodySystems.find((s) => s.id === systemId) ?? null;
  const color = system?.color ?? "#22d3ee";

  return (
    <div className="absolute inset-0">
      <MedicalScene
        systemId={systemId}
        color={color}
        mode={mode}
        autoRotate={autoRotate}
      />
    </div>
  );
}
