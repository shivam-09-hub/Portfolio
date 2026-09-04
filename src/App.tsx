import React, { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";

// Lazy-loaded route components for on-demand code splitting
const HomePage = lazy(() =>
  import("@/pages/Home/HomePage").then((m) => ({ default: m.HomePage }))
);

const EducationPage = lazy(() =>
  import("@/pages/Education/EducationPage").then((m) => ({ default: m.EducationPage }))
);
const ProgrammingPage = lazy(() =>
  import("@/pages/Programming/ProgrammingPage").then((m) => ({ default: m.ProgrammingPage }))
);

const ProjectsPage = lazy(() =>
  import("@/pages/Projects/ProjectsPage").then((m) => ({ default: m.ProjectsPage }))
);
const CertificatesPage = lazy(() =>
  import("@/pages/Certificates/CertificatesPage").then((m) => ({ default: m.CertificatesPage }))
);
const QSpidersInternshipPage = lazy(() =>
  import("@/pages/QSpidersInternship/QSpidersInternshipPage").then((m) => ({
    default: m.QSpidersInternshipPage,
  }))
);
const ResumePage = lazy(() =>
  import("@/pages/Resume/ResumePage").then((m) => ({ default: m.ResumePage }))
);
const NotFoundPage = lazy(() =>
  import("@/pages/NotFound/NotFoundPage").then((m) => ({ default: m.NotFoundPage }))
);

import { ThemeProvider } from "@/context/ThemeContext";

export default function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {/* 1. Home Page (Hero, Short Intro, Education Preview) */}
          <Route path="/" element={<HomePage />} />

          {/* Legacy redirect for removed About route */}
          <Route path="/about" element={<Navigate to="/" replace />} />

          {/* 3. Complete Education Timeline Page */}
          <Route path="/education" element={<EducationPage />} />

          {/* 4. Programming Knowledge Page */}
          <Route path="/programming" element={<ProgrammingPage />} />

          {/* Legacy redirect for removed Skills route */}
          <Route path="/skills" element={<Navigate to="/programming" replace />} />

          {/* 6. Projects Showcase Page */}
          <Route path="/projects" element={<ProjectsPage />} />

          {/* 7. Certificates & Accreditations Page */}
          <Route path="/certificates" element={<CertificatesPage />} />

          {/* 8. Dedicated QSpiders Industrial Internship Page */}
          <Route path="/qspiders-internship" element={<QSpidersInternshipPage />} />

          {/* 9. Candidate Resume Page */}
          <Route path="/resume" element={<ResumePage />} />

          {/* 10. Cybernetic 404 Wildcard Error Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  );
}
