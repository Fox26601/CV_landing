"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { ResumeModal } from "@/components/resume-modal";
import { site } from "@/lib/site";

function GitHubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.537 2.865 8.382 6.839 9.738.5.095.683-.222.683-.493 0-.243-.009-.888-.014-1.743-2.782.618-3.369-1.372-3.369-1.372-.455-1.18-1.11-1.494-1.11-1.494-.908-.636.069-.623.069-.623 1.004.072 1.532 1.055 1.532 1.055.892 1.563 2.341 1.112 2.91.85.091-.662.35-1.112.636-1.367-2.22-.259-4.555-1.14-4.555-5.073 0-1.121.39-2.038 1.029-2.756-.103-.26-.446-1.303.098-2.716 0 0 .84-.275 2.75 1.052A9.35 9.35 0 0 1 12 6.844c.85.004 1.705.117 2.504.343 1.909-1.327 2.747-1.052 2.747-1.052.546 1.413.203 2.456.1 2.716.64.718 1.028 1.635 1.028 2.756 0 3.943-2.339 4.811-4.566 5.064.359.317.679.943.679 1.901 0 1.372-.012 2.477-.012 2.814 0 .273.18.593.688.492C19.138 20.632 22 16.788 22 12.253 22 6.586 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1-.004-4.125 2.062 2.062 0 0 1 .004 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialPillClassName =
  "inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/50 px-3 py-1.5 backdrop-blur transition hover:bg-white";

const navLinkClassName = "hover:text-slate-950";

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      <a href="#about" className={navLinkClassName} onClick={onNavigate}>
        About
      </a>
      <a href="#experience" className={navLinkClassName} onClick={onNavigate}>
        Experience
      </a>
      <a href="#projects" className={navLinkClassName} onClick={onNavigate}>
        Projects
      </a>
      <a href="#contact" className={navLinkClassName} onClick={onNavigate}>
        Contact
      </a>
      <ResumeModal
        triggerLabel="Resume"
        triggerSize="sm"
        triggerVariant="ghost"
        triggerClassName="h-auto px-0 py-0 text-sm font-normal text-slate-700 hover:bg-transparent hover:text-slate-950"
      />
    </>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-lg tracking-tight text-slate-950"
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-5 text-sm text-slate-700 sm:flex">
          <NavLinks />
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            className={socialPillClassName}
            aria-label="GitHub profile"
          >
            <GitHubMark className="size-4" />
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className={socialPillClassName}
            aria-label="LinkedIn profile"
          >
            <LinkedInMark className="size-4" />
            LinkedIn
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-200/80 bg-white/60 p-2 text-slate-800 backdrop-blur sm:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-b border-slate-200/80 bg-white/95 px-5 py-4 backdrop-blur sm:hidden">
          <nav className="flex flex-col gap-3 text-sm text-slate-700">
            <NavLinks onNavigate={closeMenu} />
            <div className="mt-2 flex flex-wrap gap-2 border-t border-slate-200/80 pt-3">
              <a
                href={site.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={socialPillClassName}
                onClick={closeMenu}
              >
                <GitHubMark className="size-4" />
                GitHub
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className={socialPillClassName}
                onClick={closeMenu}
              >
                <LinkedInMark className="size-4" />
                LinkedIn
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}