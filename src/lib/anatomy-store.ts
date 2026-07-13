"use client";

import { create } from "zustand";

type AIMode = "student" | "doctor" | "research" | "simplified";
type Tool = "none" | "measure" | "annotate";
type SliceAxis = "x" | "y" | "z";

export interface Annotation {
  id: string;
  position: [number, number, number];
  label: string;
}

export interface Measurement {
  id: string;
  from: [number, number, number];
  to: [number, number, number];
  length: number; // in scene units (≈ cm)
}

// Dissection layers — order from outside (skin) to inside (skeleton)
export const LAYER_IDS = [
  "skin",
  "fascia",
  "muscle",
  "organs",
  "skeleton",
] as const;
export type LayerId = (typeof LAYER_IDS)[number];

interface AnatomyState {
  // 3D viewport
  systemId: string | null;
  organId: string | null;
  mode: string; // viewport mode id (normal/x-ray/mri/ct/ultrasound/heat-map/disease)
  autoRotate: boolean;
  explode: number; // 0..1

  // Medical-grade rendering
  photoreal: boolean; // PBR mode vs hologram
  layerOpacity: Record<LayerId, number>; // 0..1 per layer; 0 = hidden
  activeLayer: LayerId; // the "focused" dissection depth

  // Cross-section slicing
  sliceActive: boolean;
  sliceAxis: SliceAxis;
  slicePosition: number; // 0..1 along axis

  // Tools
  tool: Tool;
  annotations: Annotation[];
  measurements: Measurement[];

  // microscope
  microscopeIndex: number;

  // panels
  aiOpen: boolean;
  aiMode: AIMode;
  searchOpen: boolean;
  infoOpen: boolean;
  quizOpen: boolean;
  diseaseId: string | null;

  // actions
  setSystem: (id: string | null) => void;
  setOrgan: (id: string | null) => void;
  setMode: (m: string) => void;
  setAutoRotate: (v: boolean) => void;
  setExplode: (v: number) => void;
  setPhotoreal: (v: boolean) => void;
  setLayerOpacity: (id: LayerId, v: number) => void;
  setActiveLayer: (id: LayerId) => void;
  isolateLayer: (id: LayerId) => void;
  resetLayers: () => void;
  setSliceActive: (v: boolean) => void;
  setSliceAxis: (a: SliceAxis) => void;
  setSlicePosition: (v: number) => void;
  setTool: (t: Tool) => void;
  addAnnotation: (a: Annotation) => void;
  addMeasurement: (m: Measurement) => void;
  clearTools: () => void;
  setMicroscopeIndex: (i: number) => void;
  setAiOpen: (v: boolean) => void;
  setAiMode: (m: AIMode) => void;
  setSearchOpen: (v: boolean) => void;
  setInfoOpen: (v: boolean) => void;
  setQuizOpen: (v: boolean) => void;
  setDiseaseId: (id: string | null) => void;
}

const DEFAULT_LAYER_OPACITY: Record<LayerId, number> = {
  skin: 0.18,
  fascia: 0.5,
  muscle: 0.85,
  organs: 1,
  skeleton: 1,
};

export const useAnatomyStore = create<AnatomyState>((set) => ({
  systemId: null,
  organId: null,
  mode: "normal",
  autoRotate: true,
  explode: 0,

  photoreal: true,
  layerOpacity: { ...DEFAULT_LAYER_OPACITY },
  activeLayer: "organs",

  sliceActive: false,
  sliceAxis: "y",
  slicePosition: 0.5,

  tool: "none",
  annotations: [],
  measurements: [],

  microscopeIndex: 0,

  aiOpen: false,
  aiMode: "student",
  searchOpen: false,
  infoOpen: false,
  quizOpen: false,
  diseaseId: null,

  setSystem: (id) => set({ systemId: id, organId: null }),
  setOrgan: (id) => set({ organId: id }),
  setMode: (m) => set({ mode: m }),
  setAutoRotate: (v) => set({ autoRotate: v }),
  setExplode: (v) => set({ explode: Math.max(0, Math.min(1, v)) }),
  setPhotoreal: (v) => set({ photoreal: v }),
  setLayerOpacity: (id, v) =>
    set((s) => ({
      layerOpacity: {
        ...s.layerOpacity,
        [id]: Math.max(0, Math.min(1, v)),
      },
    })),
  setActiveLayer: (id) => set({ activeLayer: id }),
  isolateLayer: (id) =>
    set((s) => {
      const next = { ...s.layerOpacity } as Record<LayerId, number>;
      (Object.keys(next) as LayerId[]).forEach((k) => {
        next[k] = k === id ? 1 : 0;
      });
      return { layerOpacity: next, activeLayer: id };
    }),
  resetLayers: () =>
    set({ layerOpacity: { ...DEFAULT_LAYER_OPACITY }, activeLayer: "organs" }),
  setSliceActive: (v) => set({ sliceActive: v }),
  setSliceAxis: (a) => set({ sliceAxis: a }),
  setSlicePosition: (v) => set({ slicePosition: Math.max(0, Math.min(1, v)) }),
  setTool: (t) => set({ tool: t }),
  addAnnotation: (a) =>
    set((s) => ({ annotations: [...s.annotations, a] })),
  addMeasurement: (m) =>
    set((s) => ({ measurements: [...s.measurements, m] })),
  clearTools: () => set({ annotations: [], measurements: [] }),
  setMicroscopeIndex: (i) => set({ microscopeIndex: i }),
  setAiOpen: (v) => set({ aiOpen: v }),
  setAiMode: (m) => set({ aiMode: m }),
  setSearchOpen: (v) => set({ searchOpen: v }),
  setInfoOpen: (v) => set({ infoOpen: v }),
  setQuizOpen: (v) => set({ quizOpen: v }),
  setDiseaseId: (id) => set({ diseaseId: id }),
}));
