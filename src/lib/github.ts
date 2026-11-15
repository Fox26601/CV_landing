import { featuredProjects } from "@/lib/featured-projects";
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

export type DisplayProject = {
  slug: string;
  name: string;
  summary: string;
  html_url: string;
  language: string | null;
  updated_at: string | null;
  stargazers_count: number;
  highlight?: boolean;
};

async function fetchUserRepos(): Promise<{
  repos: GithubRepo[];
  error?: string;
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
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=30`,
      {
        headers,
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status}`);
      return {
        repos: [],
        error: `GitHub API error: ${response.status}`,
      };
    }

    return { repos: (await response.json()) as GithubRepo[] };
  } catch (error) {
    console.error("GitHub fetch failed:", error);
    return {
      repos: [],
      error: "GitHub fetch failed",
    };
  }
}

export async function getFeaturedProjects(): Promise<{
  projects: DisplayProject[];
  error?: string;
}> {
  const { repos, error } = await fetchUserRepos();
  const byName = new Map(repos.map((repo) => [repo.name, repo]));

  const projects: DisplayProject[] = featuredProjects.map((featured) => {
    const remote = byName.get(featured.slug);
    return {
      slug: featured.slug,
      name: featured.name,
      summary: featured.summary,
      html_url: remote?.html_url ?? `https://github.com/${featured.repo}`,
      language: remote?.language ?? featured.language ?? null,
      updated_at: remote?.updated_at ?? null,
      stargazers_count: remote?.stargazers_count ?? 0,
      highlight: featured.highlight,
    };
  });

  return { projects, error };
}
