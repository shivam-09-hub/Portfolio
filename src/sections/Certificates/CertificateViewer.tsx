import React, { useEffect, useRef } from "react";
import type { CertificateItem } from "@/types/certificate";
import { Badge } from "@/components/ui/Badge";
import { CertificateImagePreview } from "./CertificateImagePreview";
import {
  X,
  Award,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Building,
  CheckCircle2,
  FileCode,
} from "lucide-react";

interface CertificateViewerProps {
  certificate: CertificateItem | null;
  isOpen: boolean;
  onClose: () => void;
  onMissingLinkClick: (title: string) => void;
}

export function CertificateViewer({
  certificate,
  isOpen,
  onClose,
  onMissingLinkClick,
}: CertificateViewerProps): React.JSX.Element | null {
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
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-viewer-title"
    >
      {/* Blurred Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-bg-primary/85 backdrop-blur-md transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Modal Dialog Content Container */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-border-subtle bg-bg-card p-4 sm:p-8 shadow-2xl text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
        tabIndex={-1}
      >
        {/* Top Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-border-subtle">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-xs font-bold text-accent-primary px-2 py-0.5 rounded bg-accent-primary/10 border border-accent-primary/20">
                CERT_{certificate.certificateNumber}
              </span>
              <span className="font-mono text-xs text-text-muted">
                {certificate.issuer}
              </span>
              <Badge variant="success" size="sm">
                Verified Credential
              </Badge>
            </div>
            <h2 id="certificate-viewer-title" className="text-xl sm:text-2xl font-bold text-text-primary">
              {certificate.title}
            </h2>
          </div>

          {/* Close Trigger */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-text-secondary hover:text-text-primary hover:bg-slate-200/60 dark:hover:bg-white/5 border border-border-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary shrink-0"
            aria-label="Close certificate preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-6 flex flex-col gap-6">
          {/* Certificate Document Full View Area */}
          <div className="relative w-full rounded-xl border border-border-subtle bg-slate-950/40 dark:bg-black/40 overflow-hidden flex flex-col items-center justify-center p-3 sm:p-5">
            {certificate.image ? (
              <img
                src={certificate.image}
                alt={`Certificate document for ${certificate.title}`}
                className="max-h-[50vh] w-auto max-w-full object-contain rounded-lg shadow-xl"
              />
            ) : (
              <CertificateImagePreview
                image={certificate.image}
                title={certificate.title}
                certificateNumber={certificate.certificateNumber}
                issuer={certificate.issuer}
                category={certificate.category}
                className="w-full aspect-[16/10]"
              />
            )}

            {certificate.image && (
              <div className="mt-3 flex items-center justify-between w-full pt-2 border-t border-border-subtle/50 text-xs font-mono">
                <span className="text-text-muted">
                  Official Award Document
                </span>
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-card hover:bg-surface-hover border border-border-subtle text-accent-primary hover:text-accent-hover transition-colors font-semibold"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full Size Scan</span>
                </a>
              </div>
            )}
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-card border border-border-subtle">
              <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary shrink-0">
                <Building className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-text-muted uppercase">Issuing Organization</span>
                <span className="text-xs font-semibold text-text-primary">{certificate.issuer}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-card border border-border-subtle">
              <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-text-muted uppercase">Date / Year Issued</span>
                <span className="text-xs font-semibold text-text-primary">{certificate.date}</span>
              </div>
            </div>
          </div>

          {/* Description of Competencies */}
          {certificate.description && (
            <div className="p-4 rounded-xl bg-surface-card/60 border border-border-subtle flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-accent-primary uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Competency & Curriculum Focus</span>
              </span>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {certificate.description}
              </p>
            </div>
          )}

          {/* Skills Covered Tags */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-accent-primary uppercase tracking-wider">
              Skills & Topics Covered
            </span>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-accent-primary/10 border border-accent-primary/20 font-mono text-xs text-accent-primary"
                >
                  <CheckCircle2 className="w-3 h-3 text-accent-primary" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Structured Placeholder Callout if isPlaceholder */}
          {certificate.isPlaceholder && (
            <div className="p-3.5 rounded-xl bg-accent-primary/5 border border-accent-primary/25 flex items-start gap-3 text-xs text-text-secondary">
              <ShieldCheck className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-text-primary">
                  Structured Certificate Placeholder Slot
                </p>
                <p className="mt-0.5 text-text-muted">
                  Configured in <code className="text-accent-primary font-mono">src/data/certificates.ts</code>. When Shivam's certificate scans or verification links are ready, simply update the entry to render official verification documents.
                </p>
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
            {certificate.verificationUrl ? (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-accent-primary hover:bg-accent-hover text-white dark:text-bg-primary text-xs font-semibold shadow-sm dark:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-200 w-full sm:w-auto"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Verify Credential Online</span>
              </a>
            ) : certificate.image ? (
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-accent-primary/10 hover:bg-accent-primary/20 border border-accent-primary/30 text-xs font-semibold text-accent-primary transition-all duration-200 w-full sm:w-auto"
                title="View original high-resolution certificate"
              >
                <ShieldCheck className="w-4 h-4 text-accent-primary" />
                <span>Verified Scanned Document</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={() => onMissingLinkClick(certificate.title)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-200/50 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-border-subtle text-xs font-semibold text-text-muted hover:text-text-secondary transition-all duration-200 w-full sm:w-auto"
              >
                <FileCode className="w-4 h-4" />
                <span>Verified Document</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors self-end sm:self-center"
            >
              Close Preview [Esc]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
