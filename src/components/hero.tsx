import { ArrowDownRight } from "lucide-react";

import { ResumeModal } from "@/components/resume-modal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <div className="hero-atmosphere absolute inset-0 -z-10" aria-hidden />
      <div className="hero-grid absolute inset-0 -z-10 opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-teal-300/35 blur-3xl animate-drift"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-12%] left-[-8%] h-[24rem] w-[24rem] rounded-full bg-sky-200/50 blur-3xl animate-drift-slow"
        aria-hidden
      />

      <div className="mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
        <div className="max-w-3xl">
          <p className="animate-rise text-sm font-medium tracking-[0.22em] text-teal-900/80 uppercase">
            Portfolio
          </p>
          <h1 className="animate-rise mt-4 font-[family-name:var(--font-display)] text-[clamp(2.75rem,9vw,5.75rem)] leading-[0.92] tracking-[-0.04em] text-slate-950">
            {site.name}
          </h1>
          <p
            className="animate-rise mt-5 max-w-xl text-lg leading-relaxed text-slate-700 sm:text-xl"
            style={{ animationDelay: "120ms" }}
          >
            {site.tagline}
          </p>

          <div
            className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "220ms" }}
          >
            <ResumeModal triggerClassName="h-11 px-5 text-base" />
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 px-5 text-base"
            >
              <a href="#projects">
                Recent projects
                <ArrowDownRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
