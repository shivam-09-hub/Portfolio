import React from "react";
import type { CertificateItem } from "@/types/certificate";
import { Badge } from "@/components/ui/Badge";
import { CertificateImagePreview } from "./CertificateImagePreview";
import {
  Building,
  Calendar,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface CertificateCardProps {
  certificate: CertificateItem;
  onInspect: (certificate: CertificateItem) => void;
  onMissingLinkClick: (title: string) => void;
  className?: string;
}

export function CertificateCard({
  certificate,
  onInspect,
  onMissingLinkClick,
  className = "",
}: CertificateCardProps): React.JSX.Element {
  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === "mouse") {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--cert-mouse-x", `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty("--cert-mouse-y", `${e.clientY - rect.top}px`);
    }
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--cert-mouse-x", "-999px");
    e.currentTarget.style.setProperty("--cert-mouse-y", "-999px");
  };

  return (
    <article
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`group relative flex flex-col justify-between rounded-xl border border-border-subtle hover:border-accent-primary/50 bg-surface-card/85 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden ${className}`}
      aria-label={`Certificate: ${certificate.title}`}
    >
      {/* Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 bg-[radial-gradient(350px_circle_at_var(--cert-mouse-x,-999px)_var(--cert-mouse-y,-999px),rgba(56,189,248,0.07),transparent_80%)]"
        aria-hidden="true"
      />

      {/* Cybernetic corner accents on hover */}
      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-accent-primary/0 group-hover:border-accent-primary transition-colors duration-300" />
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-accent-primary/0 group-hover:border-accent-primary transition-colors duration-300" />

      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-accent-primary px-2 py-0.5 rounded bg-accent-primary/10 border border-accent-primary/20">
              //{certificate.certificateNumber}
            </span>
            <span className="font-mono text-[11px] text-text-muted line-clamp-1 max-w-[130px] sm:max-w-[160px]">
              {certificate.category}
            </span>
          </div>
          <Badge variant="accent" size="sm">
            Verified
          </Badge>
        </div>

        {/* Certificate Document Preview */}
        <CertificateImagePreview
          image={certificate.image}
          title={certificate.title}
          certificateNumber={certificate.certificateNumber}
          issuer={certificate.issuer}
          category={certificate.category}
          onInspect={() => onInspect(certificate)}
          className="mb-4"
        />

        {/* Title */}
        <h3 className="text-base font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-200 line-clamp-2">
          {certificate.title}
        </h3>

        {/* Issuer and Date Row */}
        <div className="mt-2.5 flex items-center justify-between gap-2 text-xs text-text-secondary">
          <div className="flex items-center gap-1.5 line-clamp-1">
            <Building className="w-3.5 h-3.5 text-accent-primary shrink-0" />
            <span className="truncate">{certificate.issuer}</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-mono text-text-muted shrink-0">
            <Calendar className="w-3 h-3 text-accent-primary/70" />
            <span>{certificate.date}</span>
          </div>
        </div>

        {/* Skills Covered Chips */}
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {certificate.skills.slice(0, 3).map((skill, idx) => (
            <span
              key={idx}
              className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-200/50 dark:bg-white/5 border border-border-subtle text-text-secondary group-hover:border-accent-primary/20 transition-colors"
            >
              {skill}
            </span>
          ))}
          {certificate.skills.length > 3 && (
            <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-accent-primary/5 text-accent-primary">
              +{certificate.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Action Row */}
      <div className="mt-5 pt-3.5 border-t border-border-subtle flex items-center justify-between gap-2">
        <button
          onClick={() => onInspect(certificate)}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent-primary hover:text-accent-hover transition-colors"
          aria-label={`Inspect ${certificate.title}`}
        >
          <span>Inspect Certificate</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </button>

        <div>
          {certificate.verificationUrl ? (
            <a
              href={certificate.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-200/50 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-border-subtle text-text-secondary hover:text-text-primary transition-colors inline-flex items-center"
              aria-label="Verify credential online"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button
              type="button"
              onClick={() => onMissingLinkClick(certificate.title)}
              className="p-1.5 rounded-lg bg-slate-200/50 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-border-subtle text-text-muted hover:text-text-secondary transition-colors inline-flex items-center"
              aria-label="Verification link status"
              title="Verification link pending candidate confirmation"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
