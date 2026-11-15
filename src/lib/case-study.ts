export const webExhibitionCase = {
  id: "web-exhibition",
  title: "Web Exhibition",
  eyebrow: "Case study",
  headline: "WebGL art gallery with a publishable catalog",
  context:
    "Artists need a public exhibition that grows with the catalog, plus an allowlisted admin to manage artworks and site copy — without rebuilding the room by hand each time.",
  built: [
    "Next.js landing, Google-allowlist admin CMS, and catalog API backed by Vercel Blob (local file store in development).",
    "Shared room-growth formula so admin schematic, Three.js stub, and Unity WebGL stay aligned as piece count changes.",
    "Exhibition route that prefers a Unity WebGL build and falls back to Three.js using the same catalog.",
  ],
  stack: [
    "Next.js",
    "TypeScript",
    "Unity WebGL",
    "Three.js",
    "Vercel Blob",
    "Auth.js",
  ],
  outcome:
    "One pipeline from upload → draft catalog → publish → live 3D room, with media limits and multi-language bio settings.",
  repoUrl: "https://github.com/Fox26601/WEB_exibition",
  repoLabel: "View Web Exhibition on GitHub",
} as const;
