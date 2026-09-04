import React from "react";
import { cn } from "@/utils/helpers";
import { FolderGit2, Eye, Sparkles } from "lucide-react";

interface ProjectImagePreviewProps {
  screenshots: string[];
  title: string;
  projectNumber: string;
  category: string;
  isFeatured?: boolean;
  onInspect?: () => void;
  className?: string;
}

export function ProjectImagePreview({
  screenshots,
  title,
  projectNumber,
  category,
  isFeatured = false,
  onInspect,
  className,
}: ProjectImagePreviewProps): React.JSX.Element {
  const hasImage = screenshots && screenshots.length > 0 && screenshots[0];

  return (
    <div
      onClick={onInspect}
      role={onInspect ? "button" : undefined}
      tabIndex={onInspect ? 0 : undefined}
      onKeyDown={(e) => {
        if (onInspect && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onInspect();
        }
      }}
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-border-subtle bg-bg-secondary/90 flex flex-col items-center justify-center select-none group transition-all duration-300",
        onInspect && "cursor-pointer",
        isFeatured ? "aspect-[16/10] md:aspect-[16/9]" : "aspect-[16/10]",
        className
      )}
    >
      {/* Background blueprint tech grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />

      {/* Cybernetic Corner Crosshairs */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-accent-primary/40 group-hover:border-accent-primary transition-colors duration-300" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-accent-primary/40 group-hover:border-accent-primary transition-colors duration-300" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-accent-primary/40 group-hover:border-accent-primary transition-colors duration-300" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-accent-primary/40 group-hover:border-accent-primary transition-colors duration-300" />

      {/* Watermark project index */}
      <div className="absolute top-3 right-5 font-mono text-[11px] font-bold text-text-muted/40 tracking-widest select-none pointer-events-none">
        // PROJ_{projectNumber}
      </div>

      {hasImage ? (
        <img
          src={screenshots[0]}
          alt={`Screenshot preview for ${title}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      ) : (
        /* Styled Blueprint Placeholder when real screenshot is pending */
        <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center max-w-[85%]">
          {/* Tech icon node */}
          <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/25 flex items-center justify-center text-accent-primary shadow-[0_0_15px_rgba(56,189,248,0.12)] group-hover:scale-110 group-hover:border-accent-primary/50 transition-all duration-300">
            {isFeatured ? (
              <Sparkles className="w-6 h-6 animate-pulse" />
            ) : (
              <FolderGit2 className="w-6 h-6" />
            )}
          </div>

          {/* Category Chip */}
          <div className="mt-3">
            <span className="font-mono text-[10px] tracking-wider text-accent-primary uppercase px-2 py-0.5 rounded bg-accent-primary/10 border border-accent-primary/20">
              {category}
            </span>
          </div>

          {/* Primary Label */}
          <p className="mt-2 text-xs font-semibold text-text-primary group-hover:text-accent-primary transition-colors line-clamp-1">
            {title}
          </p>

          {/* Status Label */}
          <span className="mt-1 font-mono text-[10px] text-text-muted">
            [Pending Candidate Screenshot]
          </span>
        </div>
      )}

      {/* Hover Quick Inspect Overlay Button */}
      {onInspect && (
        <div className="absolute inset-0 bg-bg-primary/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onInspect();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-primary text-bg-primary text-xs font-semibold font-mono shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:bg-accent-hover transition-all duration-200 transform translate-y-2 group-hover:translate-y-0"
            aria-label={`Inspect architecture for ${title}`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Inspect Architecture</span>
          </button>
        </div>
      )}
    </div>
  );
}
