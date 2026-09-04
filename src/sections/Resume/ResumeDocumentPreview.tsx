import React from "react";
import { cn } from "@/utils/helpers";
import { resumeData } from "@/data/resume";
import { FileText, Eye, ShieldCheck, GraduationCap, Code2, FolderGit2 } from "lucide-react";

interface ResumeDocumentPreviewProps {
  onPreview: () => void;
  className?: string;
}

export function ResumeDocumentPreview({
  onPreview,
  className,
}: ResumeDocumentPreviewProps): React.JSX.Element {
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--resume-mouse-x", `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty("--resume-mouse-y", `${e.clientY - rect.top}px`);
    }
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--resume-mouse-x", "-999px");
    e.currentTarget.style.setProperty("--resume-mouse-y", "-999px");
  };

  return (
    <div
      onClick={onPreview}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onPreview();
        }
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(
        "relative w-full max-w-md mx-auto aspect-[1/1.35] sm:aspect-[1/1.3] overflow-hidden rounded-2xl border border-border-subtle hover:border-accent-primary/50 bg-bg-secondary/95 p-5 sm:p-6 flex flex-col justify-between select-none group transition-all duration-300 shadow-card dark:shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-cardHover cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary",
        className
      )}
      aria-label="Click to preview Shivam Laxman Gaikwad's resume in browser"
    >
      {/* Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 bg-[radial-gradient(350px_circle_at_var(--resume-mouse-x,-999px)_var(--resume-mouse-y,-999px),rgba(56,189,248,0.08),transparent_80%)]"
        aria-hidden="true"
      />

      {/* Document Perimeter Line */}
      <div className="absolute inset-2.5 rounded-xl border border-border-subtle/40 pointer-events-none" />

      {/* Cybernetic Corner Accents */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-accent-primary/40 group-hover:border-accent-primary transition-colors duration-300" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-accent-primary/40 group-hover:border-accent-primary transition-colors duration-300" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-accent-primary/40 group-hover:border-accent-primary transition-colors duration-300" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-accent-primary/40 group-hover:border-accent-primary transition-colors duration-300" />

      {/* Document Watermark */}
      <div className="absolute top-4 right-5 font-mono text-[9px] font-bold text-accent-primary/50 uppercase tracking-widest pointer-events-none">
        // CURRICULUM VITAE
      </div>

      {/* Document Header */}
      <div className="relative z-10 flex flex-col gap-1 border-b border-border-subtle/80 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent-primary/10 border border-accent-primary/25 flex items-center justify-center text-accent-primary">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-text-primary tracking-tight">
              {resumeData.candidateName}
            </h4>
            <p className="text-[11px] font-mono text-accent-primary">
              {resumeData.headline}
            </p>
          </div>
        </div>
        <p className="text-[10px] text-text-muted mt-1 font-mono">
          {resumeData.location}
        </p>
      </div>

      {/* Mini Document Content Sections */}
      <div className="relative z-10 flex flex-col gap-3 my-auto py-2">
        {/* Education Highlight */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-accent-primary uppercase tracking-wider">
              <GraduationCap className="w-3 h-3" />
              <span>Education</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-accent-primary bg-accent-primary/10 px-1.5 py-0.5 rounded border border-accent-primary/25">
              CGPA: 9.33
            </span>
          </div>
          <p className="text-[11px] font-semibold text-text-primary">
            Bachelor of Computer Applications (BCA)
          </p>
          <p className="text-[10px] text-text-secondary">
            JD College of Engineering and Management, Nagpur (5th Sem • Batch of 2027)
          </p>
        </div>

        {/* Technical Focus */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-accent-primary uppercase tracking-wider">
            <Code2 className="w-3 h-3" />
            <span>Technical Foundation</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {["Python", "Java", "Flutter", "SQL / PostgreSQL", "Power BI", "JavaScript"].map(
              (tag, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-slate-200/50 dark:bg-white/5 border border-border-subtle text-text-secondary"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Projects Preview */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-accent-primary uppercase tracking-wider">
            <FolderGit2 className="w-3 h-3" />
            <span>Core Projects</span>
          </div>
          <p className="text-[10px] text-text-secondary">
            CampusHub (Flutter / Supabase), SQL Web App, Enterprise Power BI Dashboard
          </p>
        </div>
      </div>

      {/* Document Footer Status */}
      <div className="relative z-10 flex items-center justify-between pt-2.5 border-t border-border-subtle/80 text-[10px] font-mono text-text-muted">
        <div className="flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-accent-primary" />
          <span>Verified Academic Record</span>
        </div>
        <span className="text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Official PDF Verified
        </span>
      </div>

      {/* Hover Quick Preview Action */}
      <div className="absolute inset-0 bg-bg-primary/85 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPreview();
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-primary text-white dark:text-bg-primary text-xs font-semibold font-mono shadow-glow hover:bg-accent-hover transition-all duration-200 transform translate-y-2 group-hover:translate-y-0"
          aria-label="Preview full resume document"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Inspect Resume Document</span>
        </button>
      </div>
    </div>
  );
}
