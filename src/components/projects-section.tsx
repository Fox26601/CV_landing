import { ArrowUpRight, Star } from "lucide-react";

import type { GithubRepo } from "@/lib/github";
import { site } from "@/lib/site";

type ProjectsSectionProps = {
  repos: GithubRepo[];
  error?: string | null;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export function ProjectsSection({ repos, error }: ProjectsSectionProps) {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-[0.18em] text-teal-800 uppercase">
            Selected work
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight text-slate-950 sm:text-4xl">
            Latest projects on GitHub
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
            Recent public repositories — tools, experiments, and study work.
          </p>
        </div>

        {error && (
          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-950">
            Couldn’t load repositories right now. Visit{" "}
            <a
              className="font-medium underline underline-offset-2"
              href={site.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              github.com/{site.githubUsername}
            </a>{" "}
            directly.
          </div>
        )}

        {!error && repos.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white/50 px-5 py-10 text-center text-slate-600">
            No public repositories to show yet.
          </div>
        )}

        {!error && repos.length > 0 && (
          <ul className="mt-10 divide-y divide-slate-200/80 border-y border-slate-200/80">
            {repos.map((repo, index) => (
              <li
                key={repo.id}
                className="group animate-rise"
                style={{ animationDelay: `${120 + index * 80}ms` }}
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col gap-3 py-6 transition-colors hover:bg-teal-50/40 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-2"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate font-[family-name:var(--font-display)] text-xl text-slate-950">
                        {repo.name}
                      </h3>
                      <ArrowUpRight className="size-4 shrink-0 text-teal-700 opacity-0 transition group-hover:opacity-100" />
                    </div>
                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                      {repo.description ?? "No description provided."}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap items-center gap-3 text-xs tracking-wide text-slate-500 uppercase">
                    {repo.language && <span>{repo.language}</span>}
                    <span>Updated {formatDate(repo.updated_at)}</span>
                    {repo.stargazers_count > 0 && (
                      <span className="inline-flex items-center gap-1">
                        <Star className="size-3.5" />
                        {repo.stargazers_count}
                      </span>
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-800 underline-offset-4 hover:underline"
          >
            See all on GitHub
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
