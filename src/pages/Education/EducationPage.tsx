import React from "react";
import { Education } from "@/sections/Education";
import { usePageSEO } from "@/hooks/usePageSEO";

export function EducationPage(): React.JSX.Element {
  usePageSEO({
    title: "Education — Shivam Laxman Gaikwad",
    description:
      "Academic qualifications and educational journey of Shivam Laxman Gaikwad, including Bachelor of Computer Applications (BCA) and secondary education.",
    path: "/education",
  });

  return (
    <div className="flex-1 py-4">
      <Education id="education-page" />
    </div>
  );
}

export default EducationPage;
