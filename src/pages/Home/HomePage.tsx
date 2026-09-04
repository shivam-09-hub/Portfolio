import React from "react";
import { Hero } from "@/sections/Hero";
import { EducationPreview } from "./components/EducationPreview";
import { LeadershipSection } from "./components/LeadershipSection";
import { usePageSEO } from "@/hooks/usePageSEO";

export function HomePage(): React.JSX.Element {
  usePageSEO({
    title: "Shivam Laxman Gaikwad | Aspiring Data Scientist",
    description:
      "Portfolio of Shivam Laxman Gaikwad — BCA student and Aspiring Data Scientist. Showcasing Data Science, Machine Learning, Data Analytics, and academic milestones.",
    path: "/",
  });

  return (
    <div className="flex flex-col">
      {/* 1. Hero / Landing Section */}
      <Hero id="home" />

      {/* 2. Education Preview with CTA to /education */}
      <EducationPreview />

      {/* 3. Leadership & Campus Involvement */}
      <LeadershipSection />
    </div>
  );
}

export default HomePage;
