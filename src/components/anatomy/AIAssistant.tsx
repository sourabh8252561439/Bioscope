"use client";

import * as React from "react";
import { useAnatomyStore } from "@/lib/anatomy-store";
import { bodySystems } from "@/lib/anatomy-data";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sparkles,
  Send,
  GraduationCap,
  Stethoscope,
  FlaskConical,
  Baby,
  Loader2,
  X,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type Msg = { role: "user" | "assistant"; content: string };

const MODES = [
  { id: "student", label: "Student", icon: GraduationCap },
  { id: "doctor", label: "Doctor", icon: Stethoscope },
  { id: "research", label: "Research", icon: FlaskConical },
  { id: "simplified", label: "Simple", icon: Baby },
] as const;

const SUGGESTIONS = [
  "Explain the flow of blood through the heart",
  "What are the functions of the cerebellum?",
  "Compare sympathetic vs parasympathetic nervous systems",
  "How do alveoli perform gas exchange?",
  "List the bones of the axial skeleton",
];

export function AIAssistant() {
  const open = useAnatomyStore((s) => s.aiOpen);
  const setOpen = useAnatomyStore((s) => s.setAiOpen);
  const aiMode = useAnatomyStore((s) => s.aiMode);
  const setAiMode = useAnatomyStore((s) => s.setAiMode);
  const systemId = useAnatomyStore((s) => s.systemId);
  const organId = useAnatomyStore((s) => s.organId);

  const [messages, setMessages] = React.useState<Msg[]>([]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => setMounted(true), []);

  const system = bodySystems.find((s) => s.id === systemId);
  const organ = system?.organs.find((o) => o.id === organId);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;
    const userMsg: Msg = { role: "user", content };
    const history = messages.slice(-8);
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/ai-tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: content,
          mode: aiMode,
          systemId,
          organId,
          history,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Something went wrong";
      toast.error(msg);
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "⚠️ I couldn't reach the medical knowledge service. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  // Defer Sheet rendering to after mount to avoid Radix useId() hydration
  // mismatches in Next.js dev mode.
  if (!mounted) return null;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        className="w-full gap-0 p-0 sm:max-w-md [&>button]:hidden"
      >
        <SheetHeader className="border-b border-border/60 px-4 py-3 text-left">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/40">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-400 animate-pulse-slow" />
              </span>
              <div>
                <SheetTitle className="text-sm font-bold tracking-tight">
                  AI Medical Assistant
                </SheetTitle>
                <SheetDescription className="text-[11px]">
                  {system
                    ? `Context: ${system.name}${organ ? ` · ${organ.name}` : ""}`
                    : "Scientifically grounded · Educational"}
                </SheetDescription>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-1.5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Mode switcher */}
          <div className="mt-3 flex gap-1 rounded-lg bg-background/40 p-1">
            {MODES.map((m) => {
              const active = aiMode === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setAiMode(m.id)}
                  className={cn(
                    "flex flex-1 items-center justify-center gap-1 rounded-md px-1 py-1.5 text-[11px] font-medium transition-all",
                    active
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <m.icon className="h-3 w-3" />
                  {m.label}
                </button>
              );
            })}
          </div>
        </SheetHeader>

        {/* Messages */}
        <ScrollArea className="flex-1" ref={scrollRef as never}>
          <div className="min-h-full p-4">
            {messages.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <div className="relative mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/30">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-sm font-semibold">
                  Ask anything about the human body
                </h3>
                <p className="mt-1 max-w-[16rem] text-xs text-muted-foreground">
                  I explain anatomy, physiology, histology, and clinical relevance —
                  adapted to your learning level.
                </p>
                <div className="mt-5 w-full space-y-1.5">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="w-full rounded-lg border border-border/50 bg-background/40 px-3 py-2 text-left text-xs text-foreground/90 transition-colors hover:border-primary/40 hover:bg-primary/5"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex",
                      m.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed",
                        m.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "glass-light text-foreground/90"
                      )}
                    >
                      {m.role === "assistant" ? (
                        <div className="prose prose-sm dark:prose-invert max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&_li]:my-0.5 [&_ul]:my-1 [&_ol]:my-1 [&_strong]:text-foreground">
                          <ReactMarkdown>{m.content}</ReactMarkdown>
                        </div>
                      ) : (
                        m.content
                      )}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="glass-light flex items-center gap-2 rounded-2xl px-3.5 py-3 text-[13px] text-muted-foreground">
                      <Loader2 className="h-3.5 w-3.5 animate-spin text-primary" />
                      Analyzing…
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="border-t border-border/60 p-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-end gap-2"
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              rows={1}
              placeholder="Ask about anatomy, physiology, diseases…"
              className="max-h-32 flex-1 resize-none rounded-xl border border-border/60 bg-background/40 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            />
            <Button
              type="submit"
              size="icon"
              disabled={loading || !input.trim()}
              className="h-10 w-10 shrink-0 rounded-xl"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
          <p className="mt-1.5 text-center text-[10px] text-muted-foreground/70">
            Educational use only · Not a substitute for professional medical advice
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
