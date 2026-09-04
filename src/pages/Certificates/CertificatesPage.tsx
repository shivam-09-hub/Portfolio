import React from "react";
import { Certificates } from "@/sections/Certificates";
import { usePageSEO } from "@/hooks/usePageSEO";

export function CertificatesPage(): React.JSX.Element {
  usePageSEO({
    title: "Certificates — Shivam Laxman Gaikwad",
    description:
      "Verified certifications, course accreditations, and technical credentials earned by Shivam Laxman Gaikwad.",
    path: "/certificates",
  });

  return (
    <div className="flex-1 py-4">
      <Certificates id="certificates-page" />
    </div>
  );
}

export default CertificatesPage;
