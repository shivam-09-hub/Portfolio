import React, { useState, useRef, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { certificatesData } from "@/data/certificates";
import type { CertificateItem } from "@/types/certificate";
import { CertificateCard } from "./CertificateCard";
import { CertificateViewer } from "./CertificateViewer";
import { createCertificatesScrollAnimation } from "./Certificates.animation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  Award,
  Search,
  X,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Info,
} from "lucide-react";

interface CertificatesProps {
  id?: string;
}

type CategoryFilter =
  | "all"
  | "Competitions & Hackathons"
  | "Sports & Fitness"
  | "Leadership & Events"
  | "Creative & Awareness";

export function Certificates({ id = "certificates" }: CertificatesProps): React.JSX.Element {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const noticeRef = useRef<HTMLDivElement>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const bottomCtaRef = useRef<HTMLDivElement>(null);

  const reducedMotion = useReducedMotion();

  // Dynamic Category Tab Options with Exact Counts
  const filterTabs: { id: CategoryFilter; label: string }[] = [
    { id: "all", label: "All Certificates" },
    { id: "Competitions & Hackathons", label: "Competitions & Hackathons" },
    { id: "Sports & Fitness", label: "Sports & Fitness" },
    { id: "Leadership & Events", label: "Leadership & Events" },
    { id: "Creative & Awareness", label: "Creative & Awareness" },
  ];

  // Filtered Certificates Logic (Category + Search Query)
  const filteredCertificates = useMemo(() => {
    return certificatesData.filter((cert) => {
      // 1. Category check
      const matchesCategory =
        selectedFilter === "all" || cert.category === selectedFilter;

      // 2. Search query check (title, issuer, or skills)
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.skills.some((s) => s.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  // Scalable Progressive Display (9 cards initial, expandable to all)
  const INITIAL_DISPLAY_LIMIT = 9;
  const displayedCertificates = useMemo(() => {
    if (showAll || filteredCertificates.length <= INITIAL_DISPLAY_LIMIT) {
      return filteredCertificates;
    }
    return filteredCertificates.slice(0, INITIAL_DISPLAY_LIMIT);
  }, [filteredCertificates, showAll]);

  // Initialize GSAP Animation
  useEffect(() => {
    const animation = createCertificatesScrollAnimation(
      {
        container: containerRef.current,
        heading: headingRef.current,
        notice: noticeRef.current,
        toolbar: toolbarRef.current,
        grid: gridRef.current,
        bottomCta: bottomCtaRef.current,
      },
      reducedMotion
    );

    return () => {
      animation?.kill();
    };
  }, [reducedMotion]);

  // Toast feedback for verified certificates
  const handleMissingLink = (title: string) => {
    setToastMessage(`"${title}" is an official awarded certificate with high-resolution scan available.`);

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
            eyebrow="// CREDENTIALS & HONORS"
            title="Certificates & Specialized Accreditations"
            subtitle="Verified national-level hackathons, technical competitions, event leadership, and personal merit milestones."
            as="h1"
          />
        </div>

        {/* Verified Credentials Notice */}
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
                  <span>Verified Credentials & Honors</span>
                  <Badge variant="accent" size="sm">
                    9 Verified Documents
                  </Badge>
                </h2>
                <p className="mt-1 text-xs text-text-secondary leading-relaxed max-w-3xl">
                  Official scanned certificates and merit honors across national hackathons, technical fests, event leadership, creative media, and athletic achievements awarded to Shivam Laxman Gaikwad.
                </p>
              </div>
            </div>

            <div className="font-mono text-xs text-accent-primary shrink-0 self-start sm:self-center px-3 py-1.5 rounded-lg bg-accent-primary/5 border border-accent-primary/20">
              Authentic Scans Available
            </div>
          </div>
        </div>

        {/* Interactive Search & Filter Toolbar */}
        <div
          ref={toolbarRef}
          className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-4 border-b border-border-subtle"
        >
          {/* Category Filter Tabs */}
          <div
            className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none"
            role="tablist"
            aria-label="Filter certificates by category"
          >
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.id;
              const count =
                tab.id === "all"
                  ? certificatesData.length
                  : certificatesData.filter((c) => c.category === tab.id).length;

              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-semibold transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary shadow-sm ${
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
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Client Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certificates or skills..."
              className="w-full pl-9 pr-8 py-2 rounded-lg bg-surface-card border border-border-subtle hover:border-accent-primary/40 focus:border-accent-primary focus:outline-none text-xs text-text-primary placeholder:text-text-muted font-sans transition-colors"
              aria-label="Search certificates"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary p-0.5"
                aria-label="Clear search input"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Counter & Status Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-text-muted -mt-4">
          <span>
            Showing <strong className="text-accent-primary">{displayedCertificates.length}</strong> of {filteredCertificates.length} credentials
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          {filteredCertificates.length > INITIAL_DISPLAY_LIMIT && (
            <span className="hidden sm:inline text-text-secondary">
              Gallery scales smoothly for large collections
            </span>
          )}
        </div>

        {/* Certificate Cards Responsive Grid */}
        {displayedCertificates.length > 0 ? (
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayedCertificates.map((certificate) => (
              <div key={certificate.id} className="certificate-card flex flex-col">
                <CertificateCard
                  certificate={certificate}
                  onInspect={(cert) => setSelectedCertificate(cert)}
                  onMissingLinkClick={handleMissingLink}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-16 text-center rounded-2xl border border-border-subtle bg-surface-card/40 flex flex-col items-center justify-center p-8">
            <Award className="w-10 h-10 text-text-muted mb-3" />
            <h4 className="text-base font-semibold text-text-primary">
              No Certificates Match Your Query
            </h4>
            <p className="mt-1 text-xs text-text-secondary max-w-sm">
              No records match "{searchQuery}" in the selected category. Try resetting the search or selecting "All Certificates".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedFilter("all");
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-mono text-xs hover:bg-accent-primary/20 transition-colors"
            >
              Reset Filters & Search
            </button>
          </div>
        )}

        {/* Progressive Loading Toggle Button ("Show More" / "Show Less") */}
        {filteredCertificates.length > INITIAL_DISPLAY_LIMIT && (
          <div className="flex justify-center -mt-2">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-surface-card hover:bg-surface-hover border border-border-subtle hover:border-accent-primary/40 font-mono text-xs font-semibold text-text-primary transition-all duration-200"
            >
              <span>
                {showAll
                  ? "Show Less"
                  : `Show All ${filteredCertificates.length} Certificates`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 text-accent-primary" />
              ) : (
                <ChevronDown className="w-4 h-4 text-accent-primary" />
              )}
            </button>
          </div>
        )}

        {/* Connecting Banner to Phase 10 */}
        <div
          ref={bottomCtaRef}
          className="relative overflow-hidden rounded-2xl border border-border-subtle bg-gradient-to-r from-surface-card via-bg-secondary to-surface-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">
                Planned Internship
              </span>
              <h4 className="text-base sm:text-lg font-bold text-text-primary mt-1">
                QSpiders Data Science Internship
              </h4>
              <p className="text-xs text-text-secondary mt-1 max-w-xl">
                Upcoming 3-Month Data Science Internship at QSpiders, Pune (Deccan Branch).
              </p>
            </div>
          </div>

          <Link
            to="/qspiders-internship"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold whitespace-nowrap transition-all duration-200 hover:translate-x-1"
          >
            <span>Explore Upcoming Internship</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox / Certificate Viewer Modal */}
      <CertificateViewer
        certificate={selectedCertificate}
        isOpen={selectedCertificate !== null}
        onClose={() => setSelectedCertificate(null)}
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
