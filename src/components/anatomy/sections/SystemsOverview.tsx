"use client";

import { bodySystems } from "@/lib/anatomy-data";
import { useAnatomyStore } from "@/lib/anatomy-store";
import { DynamicIcon } from "../DynamicIcon";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function SystemsOverview() {
  const setSystem = useAnatomyStore((s) => s.setSystem);

  const explore = (id: string) => {
    setSystem(id);
    document.getElementById("atlas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="systems" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="mb-12 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary/80">
          Complete Coverage
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Every system of the human body
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
          From the 206 bones of the skeleton to the 86 billion neurons of the
          brain — explore all eleven physiological systems in stunning
          holographic detail.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bodySystems.map((sys, i) => (
          <motion.button
            key={sys.id}
            onClick={() => explore(sys.id)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl glass p-5 text-left transition-shadow hover:shadow-2xl"
            style={{ boxShadow: "none" }}
          >
            {/* color glow */}
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
              style={{ background: sys.color }}
            />
            <div className="relative flex items-start justify-between">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-transform group-hover:scale-110"
                style={{
                  background: `${sys.color}1f`,
                  borderColor: `${sys.color}55`,
                  color: sys.color,
                }}
              >
                <DynamicIcon name={sys.icon} className="h-6 w-6" />
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <h3 className="relative mt-4 text-lg font-bold text-foreground">
              {sys.name}
            </h3>
            <p className="relative font-mono text-[11px] text-muted-foreground">
              {sys.latinName}
            </p>
            <p className="relative mt-2 line-clamp-2 text-sm text-muted-foreground">
              {sys.tagline}
            </p>
            <div className="relative mt-4 flex flex-wrap gap-1.5">
              {sys.stats.slice(0, 3).map((st) => (
                <span
                  key={st.label}
                  className="rounded-md bg-foreground/[0.05] px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                >
                  <span style={{ color: sys.color }}>{st.value}</span> {st.label}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
