export type AiCase = {
  id: string;
  title: string;
  context: string;
  task: string;
  ai: string;
  me: string;
  result: string;
  stack: string[];
  link?: string;
};

export type AiWorkflowStep = {
  title: string;
  detail: string;
};

export type AiWorkflowPhase = {
  title: string;
  steps: AiWorkflowStep[];
};

export const aiStance =
  "AI drafts and speeds things up. I set the context, check the output, and own the result.";

export const aiWorkflow: AiWorkflowPhase[] = [
  {
    title: "Understand",
    steps: [
      {
        title: "Context",
        detail: "I give specs, constraints, and project rules up front.",
      },
      {
        title: "Analysis",
        detail: "AI maps code, logs, and docs; I confirm findings.",
      },
      {
        title: "Clarify",
        detail: "AI asks open questions; I make the calls.",
      },
    ],
  },
  {
    title: "Plan",
    steps: [
      {
        title: "Plan",
        detail: "AI drafts files, steps, and todos.",
      },
      {
        title: "Plan review",
        detail: "I check it against requirements and cut scope.",
      },
    ],
  },
  {
    title: "Build",
    steps: [
      {
        title: "Implement",
        detail: "AI codes in small, reviewable steps.",
      },
      {
        title: "Verify",
        detail: "Lint, build, tests, then I test mobile and desktop.",
      },
      {
        title: "Code review",
        detail:
          "I read the diff; a separate pass checks bugs and security.",
      },
      {
        title: "Refine",
        detail: "Fix what review found, then re-check.",
      },
    ],
  },
  {
    title: "Ship",
    steps: [
      {
        title: "Ship",
        detail: "Commit under my name, deploy, smoke-test production.",
      },
      {
        title: "Retro",
        detail: "Lessons go into project rules so mistakes don't repeat.",
      },
    ],
  },
];

export const aiCases: AiCase[] = [
  {
    id: "qa-tests",
    title: "Test cases from requirements",
    context: "QA",
    task: "Turn a product spec or Swagger into a usable test plan.",
    ai: "Drafts checklists, edge cases, and coverage gaps from the requirements.",
    me: "Cut duplicates, set priorities, add negative and boundary cases.",
    result: "Wider coverage with less prep time before a test cycle.",
    stack: ["Swagger", "TestRail", "Jira"],
  },
  {
    id: "bug-reports",
    title: "Logs to bug report",
    context: "QA",
    task: "Turn noisy Kibana or API logs into a clear defect.",
    ai: "Summarises logs into repro steps and a suspected component.",
    me: "Reproduce manually, attach evidence, and set severity.",
    result: "Clear, reproducible reports the team can act on.",
    stack: ["Kibana", "API logs", "Bug reports"],
  },
  {
    id: "unity-fusion",
    title: "Unity + Photon Fusion",
    context: "Game multiplayer",
    task: "Keep multiplayer work aligned with course networking rules.",
    ai: "Works under project rules that flag RPC, authority, Spawn, and Despawn issues.",
    me: "Own the architecture and test with three or more clients.",
    result: "Faster iteration without breaking networking requirements.",
    stack: ["Unity", "Photon Fusion", "C#"],
    link: "https://github.com/Fox26601/Unity_multiplayer",
  },
  {
    id: "portfolio",
    title: "This portfolio site",
    context: "Web",
    task: "Ship a personal landing page with resume, projects, and contact.",
    ai: "Builds Next.js UI, resume modal, GitHub API, and Resend contact flow.",
    me: "Set scope and design direction, check mobile and desktop, set up hosting.",
    result: "Live portfolio on Vercel with a working contact form.",
    stack: ["Next.js", "Vercel", "Resend"],
    link: "https://github.com/Fox26601/CV_landing",
  },
  {
    id: "sales-agent",
    title: "AI sales agent for a creator platform",
    context: "Product",
    task: "Qualify Telegram and web leads without giving the bot free rein.",
    ai: "Reads catalog and availability via a secret read-only API, holds Calendar slots, pings the owner.",
    me: "Designed tool boundaries, webhook security, mock fallback, and Render deploy.",
    result: "Leads move forward; the owner confirms every deal.",
    stack: ["Gemini", "Telegram", "Render"],
    link: "https://github.com/Fox26601/IT-asistant",
  },
];
