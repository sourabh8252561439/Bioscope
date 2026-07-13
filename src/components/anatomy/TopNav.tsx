"use client";

import * as React from "react";
import { useTheme } from "@/components/theme-provider";
import { Search, Sparkles, Sun, Moon, Activity, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnatomyStore } from "@/lib/anatomy-store";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Atlas", href: "#atlas" },
  { label: "Microscope", href: "#microscope" },
  { label: "Diseases", href: "#diseases" },
  { label: "Learn", href: "#learn" },
  { label: "Quiz", href: "#quiz" },
];

export function TopNav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const setSearchOpen = useAnatomyStore((s) => s.setSearchOpen);
  const setAiOpen = useAnatomyStore((s) => s.setAiOpen);

  React.useEffect(() => setMounted(true), []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav className="glass-strong mx-auto flex h-14 max-w-7xl items-center justify-between rounded-2xl px-3 sm:px-5 shadow-2xl shadow-black/20">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/40">
            <Activity className="h-4 w-4 text-primary" />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-primary animate-pulse-slow" />
          </span>
          <div className="leading-none">
            <span className="font-mono text-sm font-bold tracking-[0.22em] text-foreground">
              BIOSCOPE
            </span>
            <span className="ml-1.5 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80 sm:inline">
              v3.0
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(true)}
            className="group hidden items-center gap-2 rounded-xl border border-border/60 bg-background/40 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground sm:flex"
          >
            <Search className="h-3.5 w-3.5" />
            <span>Search anatomy…</span>
            <kbd className="ml-2 rounded bg-foreground/10 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              ⌘K
            </kbd>
          </button>
          <button
            onClick={() => setSearchOpen(true)}
            className="sm:hidden rounded-lg border border-border/60 p-2 text-muted-foreground hover:text-foreground"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>

          <Button
            size="sm"
            onClick={() => setAiOpen(true)}
            className="gap-1.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Ask AI</span>
          </Button>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-lg border border-border/60 p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          {/* Mobile menu — deferred to after mount to avoid Radix useId()
              hydration mismatches in Next.js dev mode */}
          {mounted && (
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="md:hidden rounded-lg border border-border/60 p-2 text-muted-foreground hover:text-foreground"
                  aria-label="Menu"
                >
                  <Menu className="h-4 w-4" />
                </button>
              </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle className="text-left font-mono tracking-[0.2em]">
                  BIOSCOPE
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-1">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </SheetContent>
            </Sheet>
          )}
        </div>
      </nav>
    </header>
  );
}
