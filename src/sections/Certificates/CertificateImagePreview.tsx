import React from "react";
import { cn } from "@/utils/helpers";
import { Award, Eye, ShieldCheck } from "lucide-react";

interface CertificateImagePreviewProps {
  image?: string;
  title: string;
  certificateNumber: string;
  issuer: string;
  category: string;
  onInspect?: () => void;
  className?: string;
}

export function CertificateImagePreview({
  image,
  title,
  certificateNumber,
  issuer,
  category,
  onInspect,
  className,
}: CertificateImagePreviewProps): React.JSX.Element {
  const hasImage = Boolean(image && image.trim() !== "");

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
        "relative w-full aspect-[16/10] overflow-hidden rounded-xl border border-border-subtle bg-bg-secondary/90 flex flex-col items-center justify-center select-none group transition-all duration-300",
        onInspect && "cursor-pointer",
        className
      )}
    >
      {/* Background Document Framing with Double Hairline */}
      <div className="absolute inset-2 rounded-lg border border-border-subtle/40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Cybernetic Corner Crosshairs */}
      <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t-2 border-l-2 border-accent-primary/40 group-hover:border-accent-primary transition-colors duration-300" />
      <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t-2 border-r-2 border-accent-primary/40 group-hover:border-accent-primary transition-colors duration-300" />
      <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b-2 border-l-2 border-accent-primary/40 group-hover:border-accent-primary transition-colors duration-300" />
      <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b-2 border-r-2 border-accent-primary/40 group-hover:border-accent-primary transition-colors duration-300" />

      {/* Watermark certificate index */}
      <div className="absolute top-3 right-4 font-mono text-[10px] font-bold text-text-muted/40 tracking-widest pointer-events-none">
        // CERT_{certificateNumber}
      </div>

      {hasImage ? (
        <div className="w-full h-full flex items-center justify-center p-2 bg-slate-950/20 dark:bg-black/40 overflow-hidden">
          <img
            src={image}
            alt={`Certificate credential for ${title}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500 ease-out drop-shadow-md"
          />
        </div>
      ) : (
        /* Styled High-Fidelity Certificate Document Placeholder */
        <div className="relative z-10 flex flex-col items-center justify-center p-5 text-center max-w-[88%]">
          {/* Certificate Rosette / Seal Badge */}
          <div className="w-11 h-11 rounded-full bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-primary shadow-[0_0_15px_rgba(56,189,248,0.15)] group-hover:scale-110 group-hover:border-accent-primary/60 transition-all duration-300">
            <Award className="w-5 h-5" />
          </div>

          {/* Category Chip */}
          <div className="mt-2.5">
            <span className="font-mono text-[9px] tracking-wider text-accent-primary uppercase px-2 py-0.5 rounded bg-accent-primary/10 border border-accent-primary/20">
              {category}
            </span>
          </div>

          {/* Title and Issuer in preview */}
          <p className="mt-1.5 text-xs font-semibold text-text-primary group-hover:text-accent-primary transition-colors line-clamp-1">
            {title}
          </p>
          <p className="text-[11px] text-text-muted line-clamp-1">
            {issuer}
          </p>

          {/* Status Label */}
          <div className="mt-1.5 flex items-center gap-1 text-[10px] font-mono text-text-muted">
            <ShieldCheck className="w-3 h-3 text-accent-primary/70" />
            <span>[Pending Certificate Scan]</span>
          </div>
        </div>
      )}

      {/* Hover Quick View Overlay Button */}
      {onInspect && (
        <div className="absolute inset-0 bg-bg-primary/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onInspect();
            }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-accent-primary text-bg-primary text-xs font-semibold font-mono shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:bg-accent-hover transition-all duration-200 transform translate-y-2 group-hover:translate-y-0"
            aria-label={`Inspect certificate: ${title}`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Inspect Certificate</span>
          </button>
        </div>
      )}
    </div>
  );
}
