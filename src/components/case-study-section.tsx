import { ArrowUpRight } from "lucide-react";

import { webExhibitionCase } from "@/lib/case-study";

export function CaseStudySection() {
  const study = webExhibitionCase;

  return (
    <section
      id="case-study"
      className="scroll-mt-24 border-t border-slate-200/80 bg-white/40 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="text-sm font-medium tracking-[0.18em] text-teal-800 uppercase">
          {study.eyebrow}
        </p>
        <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-3xl tracking-tight text-slate-950 sm:text-4xl">
          {study.headline}
        </h2>
        <p className="mt-2 text-sm font-medium text-teal-900">{study.title}</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium tracking-[0.14em] text-slate-500 uppercase">
                Context
              </h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
                {study.context}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium tracking-[0.14em] text-slate-500 uppercase">
                What I built
              </h3>
              <ul className="mt-3 max-w-2xl space-y-2 text-base leading-relaxed text-slate-700 sm:text-lg">
                {study.built.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal-700"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium tracking-[0.14em] text-slate-500 uppercase">
                Outcome
              </h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
                {study.outcome}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-[0.14em] text-slate-500 uppercase">
              Stack
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              {study.stack.join(" · ")}
            </p>
            <a
              href={study.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-teal-800 underline-offset-4 hover:underline"
            >
              {study.repoLabel}
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
