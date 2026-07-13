"use client";

import * as React from "react";

/**
 * Lightweight theme system — no inline <script>, no next-themes.
 *
 * The <html> element is server-rendered with className="dark". After hydration,
 * this hook reads localStorage and applies the saved theme. This avoids all
 * hydration mismatches because:
 *   1. No <script> exists in the React tree (browser extensions can't corrupt it)
 *   2. The server always renders "dark"; the client also starts as "dark"
 *   3. Theme switching happens in useEffect (after hydration completes)
 */

type Theme = "dark" | "light";

export function useTheme() {
  // Always start as "dark" to match the server-rendered <html className="dark">.
  // This guarantees the first client render matches the server HTML.
  const [theme, setThemeState] = React.useState<Theme>("dark");

  // After mount, read the user's saved preference and switch if different.
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("bioscope-theme") as Theme | null;
      if (stored && stored !== "dark") {
        setThemeState(stored);
        applyTheme(stored);
      }
    } catch {
      /* localStorage unavailable — stay dark */
    }
  }, []);

  const setTheme = React.useCallback((next: Theme) => {
    setThemeState(next);
    try {
      localStorage.setItem("bioscope-theme", next);
    } catch {
      /* ignore */
    }
    applyTheme(next);
  }, []);

  const toggle = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return { theme, setTheme, toggle };
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
}
