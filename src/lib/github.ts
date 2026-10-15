import { site } from "@/lib/site";

export type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
};

/** Used when the GitHub API is unavailable (rate limit / offline build). */
export const fallbackRepos: GithubRepo[] = [
  {
    id: 1,
    name: "shiki-linker",
    description: "Add button to Anime365 to Shikimori",
    html_url: "https://github.com/Jogeer/shiki-linker",
    language: "TypeScript",
    stargazers_count: 0,
    updated_at: "2026-02-02T00:00:00Z",
    fork: false,
  },
  {
    id: 2,
    name: "sa-terver",
    description: "Study lab project",
    html_url: "https://github.com/Jogeer/sa-terver",
    language: "Python",
    stargazers_count: 0,
    updated_at: "2022-03-04T00:00:00Z",
    fork: false,
  },
  {
    id: 3,
    name: "genshin_cube_solver",
    description: "Genshin matrix cubes puzzle solver",
    html_url: "https://github.com/Jogeer/genshin_cube_solver",
    language: "Python",
    stargazers_count: 0,
    updated_at: "2021-10-26T00:00:00Z",
    fork: false,
  },
  {
    id: 4,
    name: "genshin-impact-helper",
    description:
      "Automatically get Genshin Impact daily check-in rewards via GitHub Actions",
    html_url: "https://github.com/Jogeer/genshin-impact-helper",
    language: "Python",
    stargazers_count: 0,
    updated_at: "2021-06-08T00:00:00Z",
    fork: false,
  },
];

export async function getLatestRepos(limit = 4): Promise<{
  repos: GithubRepo[];
  source: "live" | "fallback";
}> {
  const username = process.env.GITHUB_USERNAME ?? site.githubUsername;
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "daniil-gorlov-portfolio",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`,
      {
        headers,
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status}`);
      return { repos: fallbackRepos.slice(0, limit), source: "fallback" };
    }

    const repos = (await response.json()) as GithubRepo[];
    const filtered = repos
      .filter((repo) => !repo.fork)
      .sort(
        (a, b) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      )
      .slice(0, limit);

    return {
      repos: filtered.length > 0 ? filtered : fallbackRepos.slice(0, limit),
      source: filtered.length > 0 ? "live" : "fallback",
    };
  } catch (error) {
    console.error("GitHub fetch failed:", error);
    return { repos: fallbackRepos.slice(0, limit), source: "fallback" };
  }
}
