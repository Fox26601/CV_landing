import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}. Built for hiring &
          collaboration.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-slate-950"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-slate-950"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
