"use client";

import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";

/**
 * DynamicIcon — renders a Lucide icon by name string.
 * Falls back to Circle if the name doesn't exist.
 */
export function DynamicIcon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Comp = (Icons as unknown as Record<string, React.ComponentType<LucideProps>>)[name];
  const Fallback = Icons.Circle;
  const C = Comp ?? Fallback;
  return <C {...props} />;
}
