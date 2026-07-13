"use client";

import * as React from "react";
import { useAnatomyStore } from "@/lib/anatomy-store";
import { bodySystems, diseaseLibrary } from "@/lib/anatomy-data";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { DynamicIcon } from "./DynamicIcon";
import { Bone, Activity, AlertTriangle, Microscope } from "lucide-react";

type Result = {
  id: string;
  label: string;
  sub: string;
  type: "system" | "organ" | "disease";
  color?: string;
  icon?: string;
  onSelect: () => void;
};

export function GlobalSearch() {
  const open = useAnatomyStore((s) => s.searchOpen);
  const setSearchOpen = useAnatomyStore((s) => s.setSearchOpen);
  const setSystem = useAnatomyStore((s) => s.setSystem);
  const setOrgan = useAnatomyStore((s) => s.setOrgan);
  const setDiseaseId = useAnatomyStore((s) => s.setDiseaseId);
  const setAiOpen = useAnatomyStore((s) => s.setAiOpen);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  // ⌘K / Ctrl+K
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [setSearchOpen]);

  const goAtlas = () => {
    document.getElementById("atlas")?.scrollIntoView({ behavior: "smooth" });
  };

  const results: Result[] = React.useMemo(() => {
    const sys: Result[] = bodySystems.map((s) => ({
      id: `sys-${s.id}`,
      label: s.name,
      sub: s.latinName,
      type: "system",
      color: s.color,
      icon: s.icon,
      onSelect: () => {
        setSystem(s.id);
        setSearchOpen(false);
        goAtlas();
      },
    }));
    const organs: Result[] = bodySystems.flatMap((s) =>
      s.organs.map((o) => ({
        id: `org-${s.id}-${o.id}`,
        label: o.name,
        sub: `${o.latinName} · ${s.name}`,
        type: "organ",
        color: s.color,
        onSelect: () => {
          setSystem(s.id);
          setOrgan(o.id);
          setSearchOpen(false);
          goAtlas();
        },
      }))
    );
    const diseases: Result[] = diseaseLibrary.map((d) => {
      const s = bodySystems.find((x) => x.id === d.systemId);
      return {
        id: `dis-${d.id}`,
        label: d.name,
        sub: s ? `${s.name} · Disease` : "Disease",
        type: "disease",
        color: s?.color,
        onSelect: () => {
          setSystem(d.systemId);
          setDiseaseId(d.id);
          setSearchOpen(false);
          document.getElementById("diseases")?.scrollIntoView({ behavior: "smooth" });
        },
      };
    });
    return [...sys, ...organs, ...diseases];
  }, [setSystem, setOrgan, setDiseaseId, setSearchOpen]);

  // Defer CommandDialog rendering to after mount to avoid Radix useId()
  // hydration mismatches in Next.js dev mode.
  if (!mounted) return null;

  return (
    <CommandDialog open={open} onOpenChange={setSearchOpen}>
      <CommandInput placeholder="Search systems, organs, diseases, latin names…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Body Systems">
          {results
            .filter((r) => r.type === "system")
            .map((r) => (
              <CommandItem key={r.id} value={`${r.label} ${r.sub}`} onSelect={() => r.onSelect()}>
                {r.icon ? (
                  <DynamicIcon name={r.icon} className="h-4 w-4" style={{ color: r.color }} />
                ) : (
                  <Activity className="h-4 w-4" />
                )}
                <span>{r.label}</span>
                <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                  {r.sub}
                </span>
              </CommandItem>
            ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Organs & Structures">
          {results
            .filter((r) => r.type === "organ")
            .map((r) => (
              <CommandItem key={r.id} value={`${r.label} ${r.sub}`} onSelect={() => r.onSelect()}>
                <Bone className="h-4 w-4" style={{ color: r.color }} />
                <span>{r.label}</span>
                <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                  {r.sub}
                </span>
              </CommandItem>
            ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Diseases">
          {results
            .filter((r) => r.type === "disease")
            .map((r) => (
              <CommandItem key={r.id} value={`${r.label} ${r.sub}`} onSelect={() => r.onSelect()}>
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <span>{r.label}</span>
                <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                  {r.sub}
                </span>
              </CommandItem>
            ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem
            onSelect={() => {
              setSearchOpen(false);
              setAiOpen(true);
            }}
          >
            <Microscope className="h-4 w-4 text-primary" />
            <span>Ask the AI Medical Assistant</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
