import React, { useState, useRef, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { projectsData } from "@/data/projects";
import type { ProjectItem } from "@/types/project";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { createProjectsScrollAnimation } from "./Projects.animation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  FolderGit2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Info,
} from "lucide-react";

interface ProjectsProps {
  id?: string;
}

type CategoryFilter = "all" | "fullstack" | "mobile" | "security";

export function Projects({ id = "projects" }: ProjectsProps): React.JSX.Element {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const noticeRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const bottomCtaRef = useRef<HTMLDivElement>(null);

  const reducedMotion = useReducedMotion();

  // Filter Categories Configuration
  const filterTabs = [
    { id: "all" as const, label: "All Projects", count: projectsData.length },
    {
      id: "fullstack" as const,
      label: "Full-Stack Platform",
      count: projectsData.filter((p) => p.category.toLowerCase().includes("full-stack")).length,
    },
    {
      id: "mobile" as const,
      label: "Mobile Apps",
      count: projectsData.filter((p) => p.category.toLowerCase().includes("mobile")).length,
    },
    {
      id: "security" as const,
      label: "Cybersecurity & Tools",
      count: projectsData.filter((p) => p.category.toLowerCase().includes("cybersecurity") || p.category.toLowerCase().includes("tool")).length,
    },
  ];

  // Filtered Projects Logic
  const filteredProjects = useMemo(() => {
    if (selectedFilter === "all") return projectsData;
    if (selectedFilter === "fullstack")
      return projectsData.filter((p) => p.category.toLowerCase().includes("full-stack"));
    if (selectedFilter === "mobile")
      return projectsData.filter((p) => p.category.toLowerCase().includes("mobile"));
    if (selectedFilter === "security")
      return projectsData.filter((p) => p.category.toLowerCase().includes("cybersecurity") || p.category.toLowerCase().includes("tool"));
    return projectsData;
  }, [selectedFilter]);

  // Distinguish featured project vs complementary projects
  const featuredProject = filteredProjects.find((p) => p.isFeatured);
  const standardProjects = filteredProjects.filter((p) => !p.isFeatured);

  // Initialize GSAP Animation
  useEffect(() => {
    const animation = createProjectsScrollAnimation(
      {
        container: containerRef.current,
        heading: headingRef.current,
        notice: noticeRef.current,
        filters: filtersRef.current,
        featuredCard: featuredRef.current,
        projectsGrid: gridRef.current,
        bottomCta: bottomCtaRef.current,
      },
      reducedMotion
    );

    return () => {
      animation?.kill();
    };
  }, [reducedMotion]);

  // Toast feedback for links awaiting confirmation
  const handleMissingLink = (type: "github" | "live", title: string) => {
    const actionLabel = type === "github" ? "Source code repository" : "Live deployment URL";
    setToastMessage(`${actionLabel} for "${title}" will be linked upon candidate confirmation.`);

    // Clear toast automatically after 3.5 seconds
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <Section
      id={id}
      containerSize="7xl"
      className="py-20 md:py-28 relative scroll-mt-20 overflow-hidden"
      bordered
    >
      <div ref={containerRef} className="flex flex-col gap-10">
        {/* Section Heading */}
        <div ref={headingRef}>
          <SectionHeading
            eyebrow="// 05. WORK & BUILDS"
            title="Featured Projects & Architecture"
            subtitle="Explore verified applied applications, data security tools, and interactive platforms engineered with precision."
            as="h1"
          />
        </div>

        {/* Data Architecture & Zero-Hallucination Policy Notice */}
        <div
          ref={noticeRef}
          className="relative overflow-hidden rounded-2xl border border-accent-primary/20 bg-surface-card/60 p-5 sm:p-6 backdrop-blur-sm"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-accent-primary/10 border border-accent-primary/20 text-accent-primary shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-text-primary flex items-center gap-2">
                  <span>Verified Project Repositories</span>
                  <Badge variant="accent" size="sm">
                    3 Active Repositories
                  </Badge>
                </h2>
                <p className="mt-1 text-xs text-text-secondary leading-relaxed max-w-3xl">
                  Each project below is an authentic open-source repository authored by Shivam Gaikwad, featuring deep architectural breakdowns, problem statements, core features, and direct links to the official GitHub source code.
                </p>
              </div>
            </div>

            <div className="font-mono text-xs text-accent-primary shrink-0 self-start sm:self-center px-3 py-1.5 rounded-lg bg-accent-primary/5 border border-accent-primary/20">
              src/data/projects.ts
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          ref={filtersRef}
          className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-border-subtle"
          role="tablist"
          aria-label="Filter projects by engineering domain"
        >
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedFilter(tab.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-semibold transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary shadow-sm ${
                  isActive
                    ? "bg-accent-primary text-white dark:text-bg-primary shadow-sm dark:shadow-[0_0_15px_rgba(56,189,248,0.35)]"
                    : "bg-surface-card hover:bg-surface-hover text-text-secondary hover:text-text-primary border border-border-subtle"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? "bg-white/20 dark:bg-bg-primary/30 text-white dark:text-bg-primary" : "bg-slate-200/60 dark:bg-white/5 text-text-muted"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Showcase Display */}
        <div className="flex flex-col gap-8">
          {/* Featured Spotlight Project (if matches filter) */}
          {featuredProject && (
            <div ref={featuredRef} className="w-full">
              <ProjectCard
                project={featuredProject}
                onInspect={(proj) => setSelectedProject(proj)}
                onMissingLinkClick={handleMissingLink}
              />
            </div>
          )}

          {/* Standard Complementary Projects Grid */}
          {standardProjects.length > 0 && (
            <div
              ref={gridRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {standardProjects.map((project) => (
                <div key={project.id} className="project-card flex flex-col">
                  <ProjectCard
                    project={project}
                    onInspect={(proj) => setSelectedProject(proj)}
                    onMissingLinkClick={handleMissingLink}
                    className="h-full"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Empty Filter State (fallback safety) */}
          {filteredProjects.length === 0 && (
            <div className="py-16 text-center rounded-2xl border border-border-subtle bg-surface-card/40 flex flex-col items-center justify-center p-8">
              <FolderGit2 className="w-10 h-10 text-text-muted mb-3" />
              <h4 className="text-base font-semibold text-text-primary">
                No Projects in this Category
              </h4>
              <p className="mt-1 text-xs text-text-secondary max-w-sm">
                Select another filter above or reset to "All Projects" to view Shivam's complete project roster.
              </p>
              <button
                onClick={() => setSelectedFilter("all")}
                className="mt-4 px-4 py-2 rounded-lg bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-mono text-xs hover:bg-accent-primary/20 transition-colors"
              >
                Reset to All Projects
              </button>
            </div>
          )}
        </div>

        {/* Bottom Connecting CTA to Phase 9 */}
        <div
          ref={bottomCtaRef}
          className="relative overflow-hidden rounded-2xl border border-border-subtle bg-gradient-to-r from-surface-card via-bg-secondary to-surface-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-xs text-purple-400 uppercase tracking-wider font-semibold">
                Continuous Validation
              </span>
              <h4 className="text-base sm:text-lg font-bold text-text-primary mt-1">
                Verified Credentials & Certifications
              </h4>
              <p className="text-xs text-text-secondary mt-1 max-w-xl">
                Every project is supported by academic coursework and accredited certifications across computer science, data analytics, and computational technologies.
              </p>
            </div>
          </div>

          <Link
            to="/certificates"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 text-purple-300 font-mono text-xs font-semibold whitespace-nowrap transition-all duration-200 hover:translate-x-1"
          >
            <span>Explore Certificates</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* In-Depth Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        onMissingLinkClick={handleMissingLink}
      />

      {/* Floating Status Feedback Toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-xl bg-surface-card/95 border border-accent-primary/40 text-text-primary shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-md flex items-center gap-3 animate-fade-in"
        >
          <Info className="w-5 h-5 text-accent-primary shrink-0" />
          <p className="text-xs text-text-secondary leading-normal">
            {toastMessage}
          </p>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-auto text-text-muted hover:text-text-primary text-xs font-mono p-1"
            aria-label="Dismiss message"
          >
            ✕
          </button>
        </div>
      )}
    </Section>
  );
}
