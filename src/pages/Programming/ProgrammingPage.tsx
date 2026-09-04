import React from "react";
import { ProgrammingKnowledge } from "@/sections/ProgrammingKnowledge";
import { usePageSEO } from "@/hooks/usePageSEO";

export function ProgrammingPage(): React.JSX.Element {
  usePageSEO({
    title: "Programming Knowledge — Shivam Laxman Gaikwad",
    description:
      "Core programming languages, code paradigms, and software proficiencies of Shivam Laxman Gaikwad.",
    path: "/programming",
  });

  return (
    <div className="flex-1 py-4">
      <ProgrammingKnowledge id="programming-page" />
    </div>
  );
}

export default ProgrammingPage;
