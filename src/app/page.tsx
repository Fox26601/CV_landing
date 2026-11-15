import { Suspense } from "react";

import { AboutSection } from "@/components/about-section";
import { CaseStudySection } from "@/components/case-study-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { Hero } from "@/components/hero";
import { ProjectsLoader } from "@/components/projects-loader";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

function ProjectsSkeleton() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="h-4 w-28 animate-pulse rounded bg-slate-200/80" />
        <div className="mt-4 h-10 w-72 max-w-full animate-pulse rounded bg-slate-200/80" />
        <div className="mt-10 space-y-4">
          {[0, 1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-20 animate-pulse rounded-2xl bg-slate-200/60"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <Suspense fallback={<ProjectsSkeleton />}>
          <ProjectsLoader />
        </Suspense>
        <CaseStudySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
