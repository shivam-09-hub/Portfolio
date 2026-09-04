import React from "react";
import { Projects } from "@/sections/Projects";
import { usePageSEO } from "@/hooks/usePageSEO";

export function ProjectsPage(): React.JSX.Element {
  usePageSEO({
    title: "Projects — Shivam Laxman Gaikwad",
    description:
      "Applied technical projects, data security tools, and software architectures by Shivam Laxman Gaikwad.",
    path: "/projects",
  });

  return (
    <div className="flex-1 py-4">
      <Projects id="projects-page" />
    </div>
  );
}

export default ProjectsPage;
