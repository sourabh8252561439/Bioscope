"use client";

import { useEffect, useRef, useState } from "react";
import { useAnatomyStore } from "@/lib/anatomy-store";

/**
 * MedicalScene3D — loads a pre-bundled standalone three.js scene
 * (/public/medical-scene.js) at runtime via a <script> tag. This keeps the
 * heavy `three` library OUT of the Next.js / Turbopack compile graph, which
 * would otherwise OOM the sandbox during cold compilation.
 *
 * The bundled script exposes window.__initMedicalScene(mountEl, getState),
 * which builds the full PBR medical body with dissection layers, cross-section
 * clipping, measurement & annotation tools, and syncs with the Zustand store.
 */

declare global {
  interface Window {
    __initMedicalScene?: (
      mount: HTMLDivElement,
      getState: () => ReturnType<typeof useAnatomyStore.getState>
    ) => () => void;
  }
}

export default function MedicalScene3D({
  systemId: _systemId,
  color: _color,
  mode: _mode,
  autoRotate: _autoRotate,
}: {
  systemId: string | null;
  color: string;
  mode: string;
  autoRotate: boolean;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const getState = useAnatomyStore.getState;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    function start() {
      if (cancelled || !mount || !window.__initMedicalScene) return;
      try {
        cleanup = window.__initMedicalScene(mount, getState);
        setStatus("ready");
      } catch (e) {
        console.error("Medical scene init failed:", e);
        setStatus("error");
      }
    }

    if (window.__initMedicalScene) {
      start();
    } else {
      const script = document.createElement("script");
      script.src = "/medical-scene.js";
      script.async = true;
      script.onload = () => start();
      script.onerror = () => setStatus("error");
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div className="absolute inset-0">
      <div ref={mountRef} className="absolute inset-0" />
      {status === "loading" && (
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
      )}
      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            Unable to load 3D model. Please refresh.
          </p>
        </div>
      )}
    </div>
  );
}
