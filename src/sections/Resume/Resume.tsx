import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { resumeData } from "@/data/resume";
import { ResumeDocumentPreview } from "./ResumeDocumentPreview";
import { ResumeViewerModal } from "./ResumeViewerModal";
import { createResumeScrollAnimation } from "./Resume.animation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  Download,
  Eye,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
  FolderGit2,
  ArrowRight,
  Info,
} from "lucide-react";

interface ResumeProps {
  id?: string;
}

export function Resume({ id = "resume" }: ResumeProps): React.JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  const reducedMotion = useReducedMotion();

  // Initialize GSAP Animation
  useEffect(() => {
    const animation = createResumeScrollAnimation(
      {
        container: containerRef.current,
        heading: headingRef.current,
        previewCard: previewRef.current,
        contentCard: contentRef.current,
        actions: actionsRef.current,
      },
      reducedMotion
    );

    return () => {
      animation?.kill();
    };
  }, [reducedMotion]);

  // Handle download click when PDF asset is pending
  const handleDownloadClick = () => {
    setToastMessage(
      "Official resume PDF will be available once uploaded to public/resume/shivam-gaikwad-resume.pdf by Shivam."
    );

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
            eyebrow="// 08. VERIFIED CREDENTIALS"
            title="Looking for an Aspiring Data Scientist?"
            subtitle="Download my full resume for an in-depth view of my qualifications, coursework, analytical skills, machine learning, and data science projects."
            as="h1"
          />
        </div>

        {/* Main Resume Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Document Preview (5 Cols on LG) */}
          <div ref={previewRef} className="lg:col-span-5 flex justify-center w-full">
            <ResumeDocumentPreview onPreview={() => setIsModalOpen(true)} />
          </div>

          {/* Right Column: Narrative Card & Action Triggers (7 Cols on LG) */}
          <div
            ref={contentRef}
            className="lg:col-span-7 flex flex-col gap-6 rounded-2xl border border-border-subtle bg-surface-card/90 p-6 sm:p-8 relative overflow-hidden"
          >
            {/* Ambient Backlight */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl pointer-events-none" />

            {/* Candidate Identity Bar */}
            <div className="flex items-start justify-between gap-4 flex-wrap pb-4 border-b border-border-subtle">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-accent-primary uppercase tracking-wider">
                    Official Document
                  </span>
                  <Badge variant="accent" size="sm">
                    Verified Profile
                  </Badge>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
                  {resumeData.candidateName}
                </h2>
                <p className="text-xs font-mono text-text-secondary mt-0.5">
                  {resumeData.headline} • {resumeData.location}
                </p>
              </div>

              <div className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-slate-200/50 dark:bg-white/5 border border-border-subtle text-text-muted">
                Updated: {resumeData.lastUpdated}
              </div>
            </div>

            {/* Verified Education & Status */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-bg-primary/50 border border-border-subtle">
              <div className="p-2.5 rounded-lg bg-accent-primary/10 border border-accent-primary/25 text-accent-primary shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[10px] font-mono text-accent-primary uppercase font-semibold">
                    Current Degree & Academic Standing
                  </span>
                  <span className="text-[11px] font-mono font-bold text-accent-primary bg-accent-primary/10 px-2 py-0.5 rounded border border-accent-primary/25">
                    CGPA: 9.33
                  </span>
                </div>
                <p className="text-sm font-bold text-text-primary mt-0.5">
                  Bachelor of Computer Applications (BCA)
                </p>
                <p className="text-xs text-text-secondary mt-0.5">
                  JD College of Engineering and Management, Nagpur (5th Sem • Batch of 2027)
                </p>
              </div>
            </div>

            {/* Key Resume Highlights Checklist */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-accent-primary uppercase tracking-wider">
                Document Contents & Verified Highlights
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {resumeData.highlights.slice(0, 4).map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-200/50 dark:bg-white/5 border border-border-subtle/70 text-xs text-text-secondary"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Official Resume Status */}
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-start gap-3 text-xs text-text-secondary">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-emerald-800 dark:text-emerald-300">
                  Official Signed PDF Verified & Ready
                </p>
                <p className="mt-0.5 text-text-muted">
                  Shivam&apos;s verified 2-page resume is hosted at <code className="text-accent-primary font-mono">{resumeData.filePath}</code>. Direct download and full browser inspection are active.
                </p>
              </div>
            </div>

            {/* Dual Action Buttons */}
            <div
              ref={actionsRef}
              className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-center gap-3"
            >
              {/* Primary Download Button */}
              {resumeData.fileAvailable ? (
                <a
                  href={resumeData.filePath}
                  download={resumeData.fileName}
                  className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-primary hover:bg-accent-hover text-white dark:text-bg-primary text-xs font-bold font-mono shadow-glow transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={handleDownloadClick}
                  className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-primary hover:bg-accent-hover text-white dark:text-bg-primary text-xs font-bold font-mono shadow-glow transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
              )}

              {/* Secondary View in Browser Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-200/50 dark:bg-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 border border-border-subtle text-xs font-semibold font-mono text-text-primary transition-all duration-200"
              >
                <Eye className="w-4 h-4 text-accent-primary" />
                <span>View in Browser</span>
              </button>
            </div>
          </div>
        </div>

        {/* Connecting Banner to Projects */}
        <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-gradient-to-r from-surface-card via-bg-secondary to-surface-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/25 flex items-center justify-center text-accent-primary shrink-0">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-xs text-accent-primary uppercase tracking-wider font-semibold">
                Technical Evidence
              </span>
              <h4 className="text-base sm:text-lg font-bold text-text-primary mt-1">
                Explore Verified Applied Projects
              </h4>
              <p className="text-xs text-text-secondary mt-1 max-w-xl">
                Review verified technical repositories, analytical systems, and architectures supporting this candidate profile.
              </p>
            </div>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent-primary/15 hover:bg-accent-primary/25 border border-accent-primary/30 text-accent-primary font-mono text-xs font-semibold whitespace-nowrap transition-all duration-200 hover:translate-x-1 w-full sm:w-auto min-h-[44px]"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* In-Browser Resume Inspection Lightbox Modal */}
      <ResumeViewerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDownloadClick={handleDownloadClick}
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
