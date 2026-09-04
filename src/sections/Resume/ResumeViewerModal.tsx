import React, { useEffect, useRef } from "react";
import { resumeData } from "@/data/resume";
import { Badge } from "@/components/ui/Badge";
import {
  X,
  Download,
  GraduationCap,
  FolderGit2,
  Award,
  CheckCircle2,
  ShieldCheck,
  Mail,
  Phone,
  ExternalLink,
  Code2,
  Globe,
  Sparkles,
} from "lucide-react";

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadClick?: () => void;
}

export function ResumeViewerModal({
  isOpen,
  onClose,
}: ResumeViewerModalProps): React.JSX.Element | null {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Keyboard Escape listener & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    // Focus close button on mount for accessibility
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-viewer-title"
    >
      {/* Blurred Dim Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-bg-primary/85 backdrop-blur-md transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border-subtle bg-bg-card p-4 sm:p-8 shadow-card dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary custom-scrollbar"
        tabIndex={-1}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-border-subtle">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-xs font-bold text-accent-primary px-2.5 py-0.5 rounded bg-accent-primary/10 border border-accent-primary/20">
                OFFICIAL RESUME // VERIFIED
              </span>
              <Badge variant="accent" size="sm">
                Signed PDF Available
              </Badge>
            </div>
            <h2 id="resume-viewer-title" className="text-xl sm:text-2xl font-bold text-text-primary">
              {resumeData.candidateName}
            </h2>
            <p className="text-xs font-mono text-text-muted">
              {resumeData.headline} • {resumeData.location}
            </p>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono pt-1 text-text-secondary">
              <a
                href={`mailto:${resumeData.email}`}
                className="inline-flex items-center gap-1 hover:text-accent-primary transition-colors"
                title="Email Shivam"
              >
                <Mail className="w-3.5 h-3.5 text-accent-primary" />
                <span>{resumeData.email}</span>
              </a>
              <span className="text-border-subtle hidden sm:inline">•</span>
              <a
                href={`tel:${resumeData.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-1 hover:text-accent-primary transition-colors"
                title="Phone"
              >
                <Phone className="w-3.5 h-3.5 text-accent-primary" />
                <span>{resumeData.phone}</span>
              </a>
              <span className="text-border-subtle hidden sm:inline">•</span>
              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent-primary hover:underline"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-border-subtle hidden sm:inline">•</span>
              <a
                href={resumeData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent-primary hover:underline"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              {resumeData.instagram && (
                <>
                  <span className="text-border-subtle hidden sm:inline">•</span>
                  <a
                    href={resumeData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent-primary hover:underline"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Close Trigger */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="w-11 h-11 min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg text-text-secondary hover:text-text-primary hover:bg-slate-200/60 dark:hover:bg-white/5 border border-border-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary shrink-0"
            aria-label="Close resume preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Structured Resume Content */}
        <div className="mt-6 flex flex-col gap-6">
          {/* Section 1: Professional Summary */}
          <div className="p-4 rounded-xl bg-surface-card border border-border-subtle flex flex-col gap-2">
            <h3 className="text-xs font-mono font-bold text-accent-primary uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Professional Summary</span>
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {resumeData.summary}
            </p>
          </div>

          {/* Section 2: Education */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-mono font-bold text-accent-primary uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h3>

            <div className="flex flex-col gap-2.5">
              {resumeData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl bg-surface-card border ${
                    edu.score?.includes("CGPA") ? "border-accent-primary/30" : "border-border-subtle"
                  } flex flex-col gap-1`}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-text-primary">
                      {edu.degree}
                    </span>
                    <div className="flex items-center gap-2">
                      {edu.score && (
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-accent-primary/10 border border-accent-primary/30 text-accent-primary">
                          {edu.score}
                        </span>
                      )}
                      <span className="text-[11px] font-mono text-text-muted">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary">
                    {edu.institution} {edu.details ? `• ${edu.details}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Leadership & Achievements */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-mono font-bold text-accent-primary uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Leadership & Achievements</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {resumeData.leadership.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-card/60 border border-border-subtle text-xs text-text-secondary"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Technical Skills */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-mono font-bold text-accent-primary uppercase tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {resumeData.technicalSkills.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-surface-card border border-border-subtle flex flex-col gap-2"
                >
                  <span className="text-[11px] font-mono font-bold text-accent-primary uppercase">
                    {cat.category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-200/60 dark:bg-white/5 border border-border-subtle text-text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Projects */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-mono font-bold text-accent-primary uppercase tracking-wider flex items-center gap-2">
              <FolderGit2 className="w-4 h-4" />
              <span>Core Projects</span>
            </h3>

            <div className="flex flex-col gap-3">
              {resumeData.projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-surface-card border border-border-subtle flex flex-col gap-2"
                >
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <h4 className="text-xs sm:text-sm font-bold text-text-primary">
                      {proj.title}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {proj.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-accent-primary/10 text-accent-primary border border-accent-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-xs text-text-secondary space-y-1 mt-1">
                    {proj.points.map((pt, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Languages Known */}
          <div className="p-3.5 rounded-xl bg-surface-card border border-border-subtle flex items-center justify-between gap-4 flex-wrap text-xs">
            <div className="flex items-center gap-2 text-accent-primary font-mono font-bold uppercase">
              <Globe className="w-4 h-4" />
              <span>Languages Known:</span>
            </div>
            <div className="flex items-center gap-2">
              {resumeData.languages.map((lang, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-200/60 dark:bg-white/5 border border-border-subtle font-mono text-text-primary text-xs"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* File Storage Status Banner */}
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-start gap-3 text-xs text-text-secondary">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-emerald-800 dark:text-emerald-300">
                Official PDF Verified & Ready
              </p>
              <p className="mt-0.5 text-text-muted">
                Shivam&apos;s signed resume PDF is available at <code className="text-accent-primary font-mono">{resumeData.filePath}</code>.
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={resumeData.filePath}
                download={resumeData.fileName}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 min-h-[44px] rounded-xl bg-accent-primary hover:bg-accent-hover text-white dark:text-bg-primary text-xs font-bold shadow-glow transition-all duration-200 w-full sm:w-auto"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Resume PDF</span>
              </a>

              <a
                href={resumeData.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-slate-200/60 dark:bg-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 border border-border-subtle text-xs font-semibold text-text-secondary hover:text-text-primary transition-all duration-200 w-full sm:w-auto"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in New Tab</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 min-h-[44px] inline-flex items-center text-xs font-mono text-text-muted hover:text-text-primary transition-colors self-end sm:self-center"
            >
              Close [Esc]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
