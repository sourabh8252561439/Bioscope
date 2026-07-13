"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnatomyStore } from "@/lib/anatomy-store";

// Floating gradient blobs for the animated background.
function Blobs() {
  const blobs = [
    { color: "#2dd4bf", size: 320, x: "-10%", y: "-20%", delay: 0, dur: 14 },
    { color: "#34d399", size: 260, x: "70%", y: "10%", delay: 2, dur: 18 },
    { color: "#f59e0b", size: 220, x: "30%", y: "60%", delay: 1, dur: 16 },
    { color: "#ef4444", size: 200, x: "80%", y: "70%", delay: 3, dur: 20 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            background: b.color,
            filter: "blur(60px)",
            opacity: 0.35,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: b.dur,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function CTASection() {
  const setAiOpen = useAnatomyStore((s) => s.setAiOpen);

  const scrollToAtlas = () => {
    if (typeof document !== "undefined") {
      document.getElementById("atlas")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="glass-strong relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          <Blobs />

          {/* Grid overlay */}
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              <Atom className="h-3 w-3" />
              Start exploring
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Begin your{" "}
              <span className="text-primary text-glow">anatomical journey</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Spin, slice, and zoom through every system of the human body. Ask
              the AI tutor anything. Take a quiz. All in your browser — no
              install required.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                onClick={scrollToAtlas}
                size="lg"
                className="w-full gap-2 rounded-xl px-6 shadow-lg shadow-primary/20 sm:w-auto"
              >
                Launch the Atlas
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => setAiOpen(true)}
                size="lg"
                variant="outline"
                className="w-full gap-2 rounded-xl border-primary/40 bg-primary/5 px-6 hover:bg-primary/10 hover:text-primary sm:w-auto"
              >
                <Sparkles className="h-4 w-4" />
                Ask the AI Tutor
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
