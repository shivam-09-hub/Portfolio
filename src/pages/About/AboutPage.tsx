import React from "react";
import { About } from "@/sections/About";
import { usePageSEO } from "@/hooks/usePageSEO";

export function AboutPage(): React.JSX.Element {
  usePageSEO({
    title: "About — Shivam Laxman Gaikwad",
    description:
      "Explore Shivam Laxman Gaikwad's background, data science philosophy, analytical competencies, and career vision as an aspiring Data Scientist.",
    path: "/about",
  });

  return (
    <div className="flex-1 py-4">
      <About id="about-page" />
    </div>
  );
}

export default AboutPage;
