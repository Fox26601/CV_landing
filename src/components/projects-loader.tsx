import { ProjectsSection } from "@/components/projects-section";
import { getFeaturedProjects } from "@/lib/github";

export async function ProjectsLoader() {
  const { projects, error } = await getFeaturedProjects();
  return <ProjectsSection projects={projects} error={error} />;
}
