"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/anatomy/DynamicIcon";
import { viewportModes } from "@/lib/anatomy-data";

// ---------------------------------------------------------------------------
// Capability data — viewportModes supply the imaging-mode entries;
// the rest are defined manually with Lucide icons + teal/emerald/crimson/amber/gold accents.
// ---------------------------------------------------------------------------

interface Capability {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const ACCENTS = {
  teal: "#2dd4bf",
  cyan: "#22d3ee",
  emerald: "#34d399",
  amber: "#fbbf24",
  gold: "#facc15",
  crimson: "#ef4444",
  orange: "#f97316",
  lime: "#84cc16",
  white: "#e5e7eb",
};

const viewportByKey: Record<string, (typeof viewportModes)[number]> = Object.fromEntries(
  viewportModes.map((v) => [v.id, v]),
);

const capabilities: Capability[] = [
  { icon: "RotateCw", title: "Rotate", description: "Orbit 360° around any anatomical structure.", color: ACCENTS.teal },
  { icon: "ZoomIn", title: "Zoom", description: "Travel from whole body down to cellular detail.", color: ACCENTS.cyan },
  { icon: "Expand", title: "Explode View", description: "Separate layers and systems to see what lies beneath.", color: ACCENTS.emerald },
  { icon: "Scissors", title: "Cross Section", description: "Slice through any plane in real time.", color: ACCENTS.amber },
  {
    icon: viewportByKey["x-ray"].icon,
    title: "X-Ray Mode",
    description: viewportByKey["x-ray"].description,
    color: ACCENTS.white,
  },
  {
    icon: viewportByKey["mri"].icon,
    title: "MRI Mode",
    description: viewportByKey["mri"].description,
    color: ACCENTS.teal,
  },
  {
    icon: viewportByKey["ct"].icon,
    title: "CT Mode",
    description: viewportByKey["ct"].description,
    color: ACCENTS.orange,
  },
  {
    icon: viewportByKey["ultrasound"].icon,
    title: "Ultrasound Mode",
    description: viewportByKey["ultrasound"].description,
    color: ACCENTS.cyan,
  },
  { icon: "Droplets", title: "Blood Flow", description: "Visualize arterial and venous circulation in motion.", color: ACCENTS.crimson },
  {
    icon: viewportByKey["heat-map"].icon,
    title: "Heat Map",
    description: viewportByKey["heat-map"].description,
    color: ACCENTS.amber,
  },
  {
    icon: viewportByKey["disease"].icon,
    title: "Disease Comparison",
    description: viewportByKey["disease"].description,
    color: ACCENTS.crimson,
  },
  { icon: "Ruler", title: "Measurement Tool", description: "Accurate distance, angle, and volume in any unit.", color: ACCENTS.emerald },
  { icon: "Pin", title: "Annotation", description: "Pin notes, labels, and sketches onto anatomy.", color: ACCENTS.gold },
  { icon: "Sparkles", title: "AI Explanations", description: "Ask anything about a structure and get instant insight.", color: ACCENTS.teal },
  { icon: "Mic", title: "Voice Tutor", description: "Hands-free narration and conversational Q&A.", color: ACCENTS.emerald },
  { icon: "WifiOff", title: "Offline PWA", description: "Install and study anywhere — even with no internet.", color: ACCENTS.lime },
];

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function Capabilities() {
  return (
    <section id="capabilities" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        {/* Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary/80">
            Tools
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            A complete virtual{" "}
            <span className="text-primary text-glow">anatomy lab</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Every tool a clinician, student, or educator needs — from
            multi-modal imaging overlays to AI-powered explanations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {capabilities.map((cap, i) => (
            <motion.article
              key={cap.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass group relative flex flex-col gap-3 overflow-hidden rounded-2xl p-4 sm:p-5"
            >
              {/* Color glow on hover */}
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
                style={{ background: cap.color }}
              />

              {/* Icon */}
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${cap.color}1a`,
                  color: cap.color,
                  boxShadow: `inset 0 0 0 1px ${cap.color}40`,
                }}
              >
                <DynamicIcon name={cap.icon} className="h-5 w-5" />
              </span>

              {/* Title + description */}
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-foreground sm:text-base">
                  {cap.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {cap.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
