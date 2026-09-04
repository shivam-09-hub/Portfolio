import React from "react";
import type { ProjectItem } from "@/types/project";
import { Badge } from "@/components/ui/Badge";
import {
  FolderGit2,
  Sparkles,
  Github,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  onInspect: (project: ProjectItem) => void;
  onMissingLinkClick: (type: "github" | "live", title: string) => void;
  className?: string;
}

export function ProjectCard({
  project,
  onInspect,
  onMissingLinkClick,
  className = "",
}: ProjectCardProps): React.JSX.Element {
  const isFeatured = project.isFeatured;

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === "mouse") {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--proj-mouse-x", `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty("--proj-mouse-y", `${e.clientY - rect.top}px`);
    }
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--proj-mouse-x", "-999px");
    e.currentTarget.style.setProperty("--proj-mouse-y", "-999px");
  };

  if (isFeatured) {
    return (
      <article
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className={`group relative w-full rounded-2xl border border-border-subtle hover:border-accent-primary/50 bg-surface-card/90 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(56,189,248,0.12)] p-6 sm:p-8 flex flex-col overflow-hidden ${className}`}
        aria-label={`Featured Project: ${project.title}`}
      >
        {/* Interactive Cursor Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 bg-[radial-gradient(450px_circle_at_var(--proj-mouse-x,-999px)_var(--proj-mouse-y,-999px),rgba(56,189,248,0.08),transparent_80%)]"
          aria-hidden="true"
        />

        {/* Cybernetic Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent-primary/0 group-hover:border-accent-primary transition-colors duration-300" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent-primary/0 group-hover:border-accent-primary transition-colors duration-300" />

        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-6">
          {/* Eyebrow & Status Row */}
          <div className="flex items-center justify-between gap-3 flex-wrap pb-4 border-b border-border-subtle">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="p-2 rounded-lg bg-accent-primary/10 border border-accent-primary/25 text-accent-primary">
                <FolderGit2 className="w-4 h-4" />
              </span>
              <span className="font-mono text-xs font-bold text-accent-primary tracking-wider uppercase px-2.5 py-1 rounded bg-accent-primary/10 border border-accent-primary/20">
                FEATURED // {project.projectNumber}
              </span>
              <span className="font-mono text-xs text-text-muted">
                {project.category}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant={
                  project.status === "Completed"
                    ? "success"
                    : project.status === "In Progress"
                    ? "accent"
                    : "muted"
                }
                size="sm"
              >
                {project.status}
              </Badge>
            </div>
          </div>

          {/* Title & Short Description */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-200">
              {project.title}
            </h3>
            <p className="mt-2.5 text-sm text-text-secondary leading-relaxed max-w-4xl">
              {project.shortDescription}
            </p>
          </div>

          {/* Challenge Solved Box */}
          <div className="p-4 rounded-xl bg-bg-primary/60 border border-border-subtle">
            <span className="font-mono text-xs font-bold text-accent-primary uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-accent-primary" />
              <span>Challenge Solved:</span>
            </span>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Key Capabilities */}
          <div>
            <span className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2.5">
              Key Architectural Features:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-surface-card/60 border border-border-subtle text-xs text-text-secondary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="font-mono text-xs text-text-muted uppercase tracking-wider mr-1">
              Tech Stack:
            </span>
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="font-mono text-xs px-2.5 py-1 rounded bg-slate-200/50 dark:bg-white/5 border border-border-subtle text-text-secondary group-hover:border-accent-primary/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-border-subtle flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-3">
            <button
              onClick={() => onInspect(project)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-accent-primary hover:bg-accent-hover text-white dark:text-bg-primary font-mono text-xs font-semibold shadow-sm dark:shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all duration-200 min-h-[44px]"
              aria-label={`Inspect architecture of ${project.title}`}
            >
              <span>Inspect Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center justify-end gap-2">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-200/50 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-border-subtle text-text-secondary hover:text-text-primary transition-colors font-mono text-xs min-h-[44px]"
                  aria-label="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => onMissingLinkClick("github", project.title)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-200/50 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-border-subtle text-text-muted hover:text-text-secondary transition-colors font-mono text-xs min-h-[44px]"
                  aria-label="GitHub repository status"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository Pending</span>
                </button>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-200/50 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-border-subtle text-text-secondary hover:text-text-primary transition-colors font-mono text-xs min-h-[44px]"
                  aria-label="View Live Deployment"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Standard Project Card (Complementary Grid Items)
  return (
    <article
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`group relative flex flex-col justify-between rounded-xl border border-border-subtle hover:border-accent-primary/50 bg-surface-card/80 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden ${className}`}
      aria-label={`Project: ${project.title}`}
    >
      {/* Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 bg-[radial-gradient(350px_circle_at_var(--proj-mouse-x,-999px)_var(--proj-mouse-y,-999px),rgba(56,189,248,0.07),transparent_80%)]"
        aria-hidden="true"
      />

      {/* Cybernetic corner crosshair accents on hover */}
      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-accent-primary/0 group-hover:border-accent-primary transition-colors duration-300" />
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-accent-primary/0 group-hover:border-accent-primary transition-colors duration-300" />

      <div className="relative z-10 flex flex-col gap-4">
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-md bg-accent-primary/10 border border-accent-primary/20 text-accent-primary">
              <FolderGit2 className="w-3.5 h-3.5" />
            </span>
            <span className="font-mono text-xs font-bold text-accent-primary px-2 py-0.5 rounded bg-accent-primary/10 border border-accent-primary/20">
              //{project.projectNumber}
            </span>
            <span className="font-mono text-[11px] text-text-muted line-clamp-1 max-w-[140px] sm:max-w-[180px]">
              {project.category}
            </span>
          </div>
          <Badge
            variant={
              project.status === "Completed"
                ? "success"
                : project.status === "In Progress"
                ? "accent"
                : "muted"
            }
            size="sm"
          >
            {project.status}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-200">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Challenge Box */}
        <div className="p-3 rounded-lg bg-bg-primary/50 border border-border-subtle">
          <span className="font-mono text-[10px] font-bold text-accent-primary uppercase tracking-wider block mb-1">
            Challenge Solved:
          </span>
          <p className="text-xs text-text-secondary line-clamp-2">
            {project.problem}
          </p>
        </div>

        {/* Features Bullets (2 items) */}
        <div className="flex flex-col gap-1.5">
          {project.features.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-200/50 dark:bg-white/5 border border-border-subtle text-text-secondary group-hover:border-accent-primary/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Row */}
      <div className="relative z-10 mt-5 pt-3.5 border-t border-border-subtle flex items-center justify-between gap-2.5">
        <button
          onClick={() => onInspect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent-primary hover:text-accent-hover transition-colors min-h-[44px] py-1"
          aria-label={`Inspect ${project.title} details`}
        >
          <span>Inspect Architecture</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="flex items-center gap-1.5">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200/50 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-border-subtle text-text-secondary hover:text-text-primary transition-colors font-mono text-xs min-h-[40px]"
              aria-label="View GitHub Repository"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          ) : (
            <button
              type="button"
              onClick={() => onMissingLinkClick("github", project.title)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200/50 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-border-subtle text-text-muted hover:text-text-secondary transition-colors font-mono text-xs min-h-[40px]"
              aria-label="GitHub repository status"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Pending</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
