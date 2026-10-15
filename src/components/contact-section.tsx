import { Mail } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-slate-200/80 bg-white/40 py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <p className="text-sm font-medium tracking-[0.18em] text-teal-800 uppercase">
            Contact
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight text-slate-950 sm:text-4xl">
            Let’s talk
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
            Open to QA roles, game projects, and collaboration. Send a note and
            I’ll reply as soon as I can.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-teal-900 hover:underline"
          >
            <Mail className="size-4" />
            {site.email}
          </a>
        </div>

        <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
