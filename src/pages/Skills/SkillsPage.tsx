import React from "react";
import { TechnicalSkills } from "@/sections/TechnicalSkills";
import { usePageSEO } from "@/hooks/usePageSEO";

export function SkillsPage(): React.JSX.Element {
  usePageSEO({
    title: "Technical Skills — Shivam Laxman Gaikwad",
    description:
      "Frontend technologies, development toolchain, databases, and foundational libraries used by Shivam Laxman Gaikwad.",
    path: "/skills",
  });

  return (
    <div className="flex-1 py-4">
      <TechnicalSkills id="skills-page" />
    </div>
  );
}

export default SkillsPage;
