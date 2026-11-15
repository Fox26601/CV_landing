import { site } from "@/lib/site";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-slate-200/80 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="text-sm font-medium tracking-[0.18em] text-teal-800 uppercase">
          About
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight text-slate-950 sm:text-4xl">
          What I’m after
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
          {site.about}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          {site.availability}
        </p>
      </div>
    </section>
  );
}
