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

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-lg tracking-tight text-slate-950"
        >
          {site.name}
        </a>
        <nav className="flex items-center gap-5 text-sm text-slate-700">
          <a href="#projects" className="hidden hover:text-slate-950 sm:inline">
            Projects
          </a>
          <a href="#contact" className="hidden hover:text-slate-950 sm:inline">
            Contact
          </a>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/50 px-3 py-1.5 backdrop-blur transition hover:bg-white"
            aria-label="GitHub profile"
          >
            <GitHubMark className="size-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
