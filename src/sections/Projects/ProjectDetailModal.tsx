import React, { useEffect, useRef } from "react";
import type { ProjectItem } from "@/types/project";
import { Badge } from "@/components/ui/Badge";
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Info,
  ShieldCheck,
} from "lucide-react";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onMissingLinkClick: (type: "github" | "live", title: string) => void;
}

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
  onMissingLinkClick,
}: ProjectDetailModalProps): React.JSX.Element | null {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Keyboard trap and Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Lock background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button on mount for accessibility
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Dimmed Blurred Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-bg-primary/80 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl border border-border-subtle bg-bg-card p-4 sm:p-8 shadow-2xl text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
        tabIndex={-1}
      >
        {/* Top Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-border-subtle">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-xs font-bold text-accent-primary px-2.5 py-0.5 rounded bg-accent-primary/10 border border-accent-primary/20">
                PROJ_{project.projectNumber}
              </span>
              <span className="font-mono text-xs text-text-muted">
                {project.category}
              </span>
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
              {project.isFeatured && (
                <Badge variant="accent" size="sm" className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30">
                  Flagship
                </Badge>
              )}
            </div>
            <h2 id="project-modal-title" className="text-xl sm:text-2xl font-extrabold text-text-primary tracking-tight">
              {project.title}
            </h2>
          </div>

          {/* Close Button */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-text-secondary hover:text-text-primary hover:bg-slate-200/60 dark:hover:bg-white/5 border border-border-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary shrink-0"
            aria-label="Close project details modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="mt-6 flex flex-col gap-6">

          {/* Overview & Description */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-mono font-bold text-accent-primary uppercase tracking-wider flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              <span>Project Overview</span>
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem Statement */}
          <div className="p-4 rounded-xl bg-surface-card border border-border-subtle flex flex-col gap-2">
            <h3 className="text-xs font-mono font-bold text-accent-primary uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>Challenge & Problem Solved</span>
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Key Features */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-mono font-bold text-accent-primary uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Highlights & Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-bg-primary/50 border border-border-subtle text-xs text-text-secondary"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Shivam's Engineering Contribution */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-mono font-bold text-accent-primary uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Key Engineering Contribution</span>
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed bg-surface-card/60 p-3.5 rounded-xl border border-border-subtle">
              {project.contribution}
            </p>
          </div>

          {/* Technology Stack Tags */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-xs font-mono font-bold text-accent-primary uppercase tracking-wider">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent-primary/10 border border-accent-primary/20 text-accent-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Candidate Notice Card if isPlaceholder */}
          {project.isPlaceholder && (
            <div className="p-3.5 rounded-xl bg-accent-primary/5 border border-accent-primary/25 flex items-start gap-3 text-xs text-text-secondary">
              <ShieldCheck className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-text-primary">
                  Structured Project Placeholder Slot
                </p>
                <p className="mt-0.5 text-text-muted">
                  This card is fully configured in the data layer (<code className="text-accent-primary font-mono">src/data/projects.ts</code>). Once Shivam's actual project repository link and screenshots are ready, replace this slot to immediately publish the verified build.
                </p>
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* GitHub Link or Notice */}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-card hover:bg-surface-hover border border-border-subtle hover:border-accent-primary/40 text-xs font-semibold text-text-primary transition-all duration-200 w-full sm:w-auto"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => onMissingLinkClick("github", project.title)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-card/60 hover:bg-surface-card border border-border-subtle hover:border-accent-primary/30 text-xs font-semibold text-text-muted hover:text-text-secondary transition-all duration-200 w-full sm:w-auto"
                  title="Click to view repository status"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository Pending</span>
                </button>
              )}

              {/* Live Demo Link or Notice */}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-accent-primary hover:bg-accent-hover text-white dark:text-bg-primary text-xs font-semibold shadow-sm dark:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-200 w-full sm:w-auto"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Deployment</span>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => onMissingLinkClick("live", project.title)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-200/50 dark:bg-white/5 border border-border-subtle text-xs font-semibold text-text-muted hover:text-text-secondary transition-all duration-200 w-full sm:w-auto"
                  title="Click to view live deployment status"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo Pending</span>
                </button>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors self-end sm:self-center"
            >
              Close [Esc]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
