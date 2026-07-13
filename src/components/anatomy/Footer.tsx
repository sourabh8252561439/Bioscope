"use client";

import * as React from "react";
import { Activity } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Systems", href: "#atlas" },
      { label: "Microscope", href: "#microscope" },
      { label: "Diseases", href: "#diseases" },
      { label: "Quiz", href: "#quiz" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "AI Tutor", href: "#learn" },
      { label: "Education Modes", href: "#learn" },
      { label: "Capabilities", href: "#capabilities" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#top" },
      { label: "Research", href: "#top" },
      { label: "Privacy", href: "#top" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "#top" },
      { label: "Disclaimer", href: "#top" },
      { label: "Licenses", href: "#top" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="glass-strong mt-auto border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        {/* Top: brand + link columns */}
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/40">
                <Activity className="h-4 w-4 text-primary" />
              </span>
              <span className="font-mono text-sm font-bold tracking-[0.22em] text-foreground">
                BIOSCOPE
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The world&apos;s most advanced 3D human anatomy platform.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">
                  {col.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Medical disclaimer */}
        <div className="mt-10 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3">
          <p className="text-xs leading-relaxed text-amber-200/80 dark:text-amber-300/80">
            <strong className="font-semibold">Medical disclaimer:</strong> For
            educational purposes only. Not a substitute for professional medical
            advice, diagnosis, or treatment.
          </p>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/40 pt-6 sm:flex-row">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            © 2025 BIOSCOPE
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, Three.js &amp; AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
