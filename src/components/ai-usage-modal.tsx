"use client";

import { ArrowUpRight, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { aiCases, aiPrinciples, aiStance } from "@/lib/ai-usage";

type AiUsageModalProps = {
  triggerClassName?: string;
};

export function AiUsageModal({ triggerClassName }: AiUsageModalProps) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(aiCases[0]?.id ?? "");
  const activeCase = aiCases.find((item) => item.id === activeId) ?? aiCases[0];

  return (
    <>
      <Button
        variant="ghost"
        size="lg"
        className={
          triggerClassName ??
          "h-10 gap-1.5 px-3 text-base text-teal-900 hover:bg-teal-50 hover:text-teal-950"
        }
        onClick={() => setOpen(true)}
      >
        <Sparkles className="size-4" />
        How I use AI in my work
        <ChevronRight className="size-4 opacity-70" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex max-h-[90vh] w-[min(92vw,52rem)] flex-col gap-0 overflow-hidden p-0 sm:max-w-3xl">
          <DialogHeader className="border-b border-border/70 px-5 py-4 text-left sm:px-6">
            <DialogTitle className="font-[family-name:var(--font-display)] text-xl">
              How I use AI
            </DialogTitle>
            <DialogDescription className="max-w-2xl text-sm leading-relaxed">
              {aiStance}
            </DialogDescription>
          </DialogHeader>

          <div className="min-h-0 flex-1 space-y-6 overflow-y-auto px-5 py-5 sm:px-6">
            <ul className="grid gap-2 sm:grid-cols-3">
              {aiPrinciples.map((principle) => (
                <li
                  key={principle.title}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/70 px-3.5 py-3"
                >
                  <p className="text-sm font-medium text-slate-950">
                    {principle.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    {principle.detail}
                  </p>
                </li>
              ))}
            </ul>

            <div>
              <p className="mb-2 text-xs font-medium tracking-[0.16em] text-teal-800 uppercase">
                Cases
              </p>
              <div
                role="tablist"
                aria-label="AI usage cases"
                className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden"
              >
                {aiCases.map((item) => {
                  const selected = item.id === activeCase.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveId(item.id)}
                      className={
                        selected
                          ? "shrink-0 rounded-full bg-teal-800 px-3.5 py-1.5 text-sm font-medium text-white"
                          : "shrink-0 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700 transition hover:border-teal-300 hover:text-teal-900"
                      }
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>
            </div>

            {activeCase && (
              <article
                role="tabpanel"
                aria-label={activeCase.title}
                className="rounded-3xl border border-slate-200/80 bg-white/90 p-4 sm:p-5"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-slate-950">
                    {activeCase.title}
                  </h3>
                  <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-900">
                    {activeCase.context}
                  </span>
                </div>

                <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                  <div>
                    <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                      Task
                    </dt>
                    <dd className="mt-0.5 text-slate-800">{activeCase.task}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                      AI does
                    </dt>
                    <dd className="mt-0.5 text-slate-800">{activeCase.ai}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                      I verify
                    </dt>
                    <dd className="mt-0.5 text-slate-800">{activeCase.me}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                      Result
                    </dt>
                    <dd className="mt-0.5 text-slate-800">
                      {activeCase.result}
                    </dd>
                  </div>
                </dl>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {activeCase.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 px-2.5 py-0.5 text-xs text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {activeCase.link && (
                    <a
                      href={activeCase.link}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-teal-800 underline-offset-4 hover:underline"
                    >
                      View on GitHub
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  )}
                </div>
              </article>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
