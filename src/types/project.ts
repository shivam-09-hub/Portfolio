export type ProjectStatus = "Completed" | "In Progress" | "Archived";

export interface ProjectItem {
  id: string;
  projectNumber: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  problem: string;
  features: string[];
  technologies: string[];
  contribution: string;
  screenshots: string[];
  video?: string;
  githubUrl?: string;
  liveUrl?: string;
  status: ProjectStatus;
  isFeatured?: boolean;
  isPlaceholder?: boolean;
  architectureNotes?: string;
}

export type ProjectCategoryFilter = "all" | "fullstack" | "mobile" | "security";
