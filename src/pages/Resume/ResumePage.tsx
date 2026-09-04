import React from "react";
import { Resume } from "@/sections/Resume";
import { usePageSEO } from "@/hooks/usePageSEO";

export function ResumePage(): React.JSX.Element {
  usePageSEO({
    title: "Resume — Shivam Laxman Gaikwad",
    description:
      "Curriculum vitae, academic milestones, core strengths, and resume download for Shivam Laxman Gaikwad.",
    path: "/resume",
  });

  return (
    <div className="flex-1 py-4">
      <Resume id="resume-page" />
    </div>
  );
}

export default ResumePage;
