import type { NavItem } from "@/types/navigation";

/**
 * Route navigation items for the portfolio.
 * Ordered per PRD.md v2.0 and Architecture.md v2.0.
 */
export const navigationItems: NavItem[] = [
  { id: "home", label: "Home", path: "/" },
  { id: "education", label: "Education", path: "/education" },
  { id: "programming", label: "Programming", path: "/programming" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "certificates", label: "Certificates", path: "/certificates" },
  { id: "qspiders", label: "QSpiders Internship", path: "/qspiders-internship" },
  { id: "resume", label: "Resume", path: "/resume", isAction: true },
];
