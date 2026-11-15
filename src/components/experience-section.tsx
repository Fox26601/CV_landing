import { site } from "@/lib/site";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-slate-200/80 py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="text-sm font-medium tracking-[0.18em] text-teal-800 uppercase">
          Experience
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight text-slate-950 sm:text-4xl">
          Path so far
        </h2>
        <ul className="mt-8 divide-y divide-slate-200/80 border-y border-slate-200/80">
          {site.experience.map((item) => (
            <li
              key={`${item.company}-${item.period}`}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <div>
                <p className="font-medium text-slate-950">{item.role}</p>
                <p className="text-sm text-slate-600 sm:text-base">
                  {item.company}
                </p>
              </div>
              <p className="shrink-0 text-sm tracking-wide text-slate-500">
                {item.period}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
