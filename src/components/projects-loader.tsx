import { ProjectsSection } from "@/components/projects-section";
import { getLatestRepos } from "@/lib/github";

export async function ProjectsLoader() {
  const { repos } = await getLatestRepos(4);
  return <ProjectsSection repos={repos} />;
}
