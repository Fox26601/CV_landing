export const site = {
  name: "Daniil Gorlov",
  title: "QA · Game Design · Forward Deployed",
  tagline:
    "QA since 2019 shipping reliable products — now building games and internal tools, moving toward Forward Deployed engineering.",
  about:
    "I'm moving toward Forward Deployed Engineer work — embedding with users, shipping tightly scoped fixes, and closing the loop from feedback to production.",
  availability:
    "Open to work — QA, Forward Deployed / product-minded engineering, and game projects · Tel Aviv / remote",
  email: "danila.foxman@gmail.com",
  phone: "+972 50 370 3405",
  linkedin: "https://www.linkedin.com/in/daniilgorlov",
  githubUsername: "Fox26601",
  githubUrl: "https://github.com/Fox26601",
  location: "Tel Aviv, Israel",
  resumePath: "/resume/Daniil_Gorlov_CV.pdf",
  resumeFileName: "Daniil_Gorlov_CV.pdf",
  experience: [
    {
      role: "Game Design student",
      company: "Tiltan College, Haifa",
      period: "Sep 2024 – Present",
      outcome:
        "Building Unity and Unreal projects with a focus on OOP and game design patterns.",
    },
    {
      role: "Game tester",
      company: "Memory Lost",
      period: "Mar – Jun 2023",
      outcome:
        "Acceptance-tested pre-release builds and filed reproducible bug reports.",
    },
    {
      role: "QA Engineer",
      company: "Pik-Arenda",
      period: "2021 – 2023",
      outcome:
        "Manual API/frontend coverage plus Selenium plans for automation cycles.",
    },
    {
      role: "QA Manager",
      company: "Ylab",
      period: "2020 – 2021",
      outcome:
        "Designed the testing workflow, hired into the team, and set delivery standards.",
    },
    {
      role: "QA Engineer",
      company: "Chestnoe slovo",
      period: "2019 – 2020",
      outcome:
        "Revived automated Python tests and helped ship release-build automation.",
    },
  ],
} as const;

export type ExperienceItem = (typeof site.experience)[number];