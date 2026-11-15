export type FeaturedProject = {
  slug: string;
  name: string;
  summary: string;
  repo: string;
  language?: string;
  highlight?: boolean;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "WEB_exibition",
    name: "Web Exhibition",
    summary:
      "Unity WebGL art gallery with Next.js admin CMS, catalog API, and a Three.js exhibition fallback.",
    repo: "Fox26601/WEB_exibition",
    language: "TypeScript",
    highlight: true,
  },
  {
    slug: "SYMP",
    name: "SYMP",
    summary:
      "Go backend service for catalog and checkout plumbing on a creator booking platform.",
    repo: "Fox26601/SYMP",
    language: "Go",
  },
  {
    slug: "Unity_multiplayer",
    name: "Unity Multiplayer",
    summary:
      "Photon Fusion multiplayer coursework — authority, RPCs, spawn/despawn, and synced sessions.",
    repo: "Fox26601/Unity_multiplayer",
    language: "C#",
  },
  {
    slug: "IT-asistant",
    name: "AI Sales Agent",
    summary:
      "AI sales agent that qualifies Telegram and web leads with tool boundaries and owner confirmation.",
    repo: "Fox26601/IT-asistant",
    language: "TypeScript",
  },
];