"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, RotateCcw, Trophy, Brain, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { quizQuestions } from "@/lib/anatomy-data";
import { cn } from "@/lib/utils";

type Phase = "playing" | "finished";

interface QuizState {
  index: number;
  selected: number | null;
  answered: boolean;
  score: number;
  phase: Phase;
}

const INITIAL: QuizState = {
  index: 0,
  selected: null,
  answered: false,
  score: 0,
  phase: "playing",
};

function getResultMessage(score: number, total: number): { title: string; subtitle: string } {
  const pct = score / total;
  if (pct === 1) return { title: "Perfect score!", subtitle: "Outstanding — you know your anatomy cold." };
  if (pct >= 0.8) return { title: "Excellent work", subtitle: "You're well on your way to mastery." };
  if (pct >= 0.5) return { title: "Good effort", subtitle: "Solid foundation — review and try again." };
  return { title: "Keep studying", subtitle: "Every expert started here. Don't give up." };
}

export function QuizSection() {
  const [state, setState] = React.useState<QuizState>(INITIAL);
  const total = quizQuestions.length;
  const current = quizQuestions[state.index];

  const handleSelect = (optionIndex: number) => {
    if (state.answered) return;
    const isCorrect = optionIndex === current.correctIndex;
    setState((s) => ({
      ...s,
      selected: optionIndex,
      answered: true,
      score: s.score + (isCorrect ? 1 : 0),
    }));
  };

  const handleNext = () => {
    if (state.index + 1 >= total) {
      setState((s) => ({ ...s, phase: "finished" }));
    } else {
      setState((s) => ({
        ...s,
        index: s.index + 1,
        selected: null,
        answered: false,
      }));
    }
  };

  const handleRestart = () => setState(INITIAL);

  const progressValue = state.phase === "finished" ? 100 : (state.index / total) * 100;

  return (
    <section id="quiz" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        {/* Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary/80">
            Test yourself
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Interactive anatomy{" "}
            <span className="text-primary text-glow">quiz</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Six high-yield questions covering the skeleton, cardiology,
            neuroanatomy, and more.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {/* Progress */}
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
              <Brain className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {state.phase === "finished"
                    ? "Complete"
                    : `Question ${state.index + 1} of ${total}`}
                </span>
                <span className="font-mono text-xs text-primary">
                  Score: {state.score}
                </span>
              </div>
              <Progress value={progressValue} className="h-1.5" />
            </div>
          </div>

          {/* Card */}
          <div className="glass-strong relative overflow-hidden rounded-3xl p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {state.phase === "playing" ? (
                <motion.div
                  key={`q-${state.index}`}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <h3 className="text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
                    {current.question}
                  </h3>

                  {/* Options */}
                  <div className="mt-6 grid gap-3">
                    {current.options.map((opt, i) => {
                      const isCorrect = i === current.correctIndex;
                      const isSelected = i === state.selected;
                      const showCorrect = state.answered && isCorrect;
                      const showWrong = state.answered && isSelected && !isCorrect;

                      return (
                        <motion.button
                          key={i}
                          onClick={() => handleSelect(i)}
                          disabled={state.answered}
                          whileTap={{ scale: state.answered ? 1 : 0.98 }}
                          className={cn(
                            "group flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all",
                            !state.answered &&
                              "border-border/60 bg-background/40 hover:border-primary/50 hover:bg-primary/5",
                            showCorrect && "border-emerald-500/60 bg-emerald-500/10",
                            showWrong && "border-rose-500/60 bg-rose-500/10",
                            state.answered &&
                              !showCorrect &&
                              !showWrong &&
                              "border-border/40 bg-background/20 opacity-60",
                          )}
                        >
                          {/* Option marker */}
                          <span
                            className={cn(
                              "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border font-mono text-xs font-bold transition-colors",
                              !state.answered &&
                                "border-border/60 bg-foreground/5 text-muted-foreground group-hover:border-primary/50 group-hover:text-primary",
                              showCorrect && "border-emerald-500/60 bg-emerald-500 text-white",
                              showWrong && "border-rose-500/60 bg-rose-500 text-white",
                              state.answered &&
                                !showCorrect &&
                                !showWrong &&
                                "border-border/40 text-muted-foreground",
                            )}
                          >
                            {showCorrect ? (
                              <Check className="h-4 w-4" />
                            ) : showWrong ? (
                              <X className="h-4 w-4" />
                            ) : (
                              String.fromCharCode(65 + i)
                            )}
                          </span>
                          <span className="flex-1 text-sm text-foreground sm:text-base">
                            {opt}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  <AnimatePresence>
                    {state.answered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-4">
                          <div className="mb-1.5 flex items-center gap-2">
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">
                              Explanation
                            </span>
                            {state.selected === current.correctIndex ? (
                              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                                Correct
                              </span>
                            ) : (
                              <span className="rounded-full bg-rose-500/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-rose-400">
                                Incorrect
                              </span>
                            )}
                          </div>
                          <p className="text-sm leading-relaxed text-foreground/90">
                            {current.explanation}
                          </p>
                        </div>

                        <div className="mt-5 flex justify-end">
                          <Button
                            onClick={handleNext}
                            className="gap-2 rounded-xl"
                          >
                            {state.index + 1 >= total ? "See results" : "Next question"}
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                /* Results screen */
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center py-6 text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/40">
                    <Trophy className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                    {state.score}
                    <span className="text-muted-foreground">/{total}</span>
                  </h3>
                  {(() => {
                    const msg = getResultMessage(state.score, total);
                    return (
                      <div className="mt-3 space-y-1">
                        <p className="text-lg font-semibold text-foreground">
                          {msg.title}
                        </p>
                        <p className="text-sm text-muted-foreground">{msg.subtitle}</p>
                      </div>
                    );
                  })()}
                  <Button
                    onClick={handleRestart}
                    variant="outline"
                    className="mt-7 gap-2 rounded-xl border-primary/30 bg-primary/5 hover:bg-primary/10 hover:text-primary"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Restart quiz
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
