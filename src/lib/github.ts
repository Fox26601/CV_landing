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

export async function getLatestRepos(limit = 4): Promise<{
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
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`,
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

    const repos = (await response.json()) as GithubRepo[];
    const filtered = repos
      .filter((repo) => !repo.fork)
      .sort(
        (a, b) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      )
      .slice(0, limit);

    return { repos: filtered };
  } catch (error) {
    console.error("GitHub fetch failed:", error);
    return {
      repos: [],
      error: "GitHub fetch failed",
    };
  }
}
