import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { qspidersData } from "@/data/qspiders";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { usePageSEO } from "@/hooks/usePageSEO";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import gsap from "gsap";
import {
  Briefcase,
  Building2,
  Clock,
  MapPin,
  CalendarClock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  FileText,
  Compass,
} from "lucide-react";

export function QSpidersInternshipPage(): React.JSX.Element {
  usePageSEO({
    title: "QSpiders Internship — Shivam Laxman Gaikwad",
    description:
      "Upcoming 3-Month Data Science Internship at QSpiders, Pune (Deccan Branch).",
    path: "/qspiders-internship",
  });

  const prefersReducedMotion = useReducedMotion();
  const pageContainerRef = useRef<HTMLDivElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const detailsGridRef = useRef<HTMLDivElement>(null);
  const noticeCardRef = useRef<HTMLDivElement>(null);
  const ctaCardRef = useRef<HTMLDivElement>(null);

  // Subtle GSAP entrance animation honoring reduced motion
  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        heroCardRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, immediateRender: false }
      )
        .fromTo(
          detailsGridRef.current ? detailsGridRef.current.children : [],
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, immediateRender: false },
          "-=0.2"
        )
        .fromTo(
          noticeCardRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.4, immediateRender: false },
          "-=0.15"
        )
        .fromTo(
          ctaCardRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.35, immediateRender: false },
          "-=0.1"
        );
    }, pageContainerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div ref={pageContainerRef} className="flex-1 py-8 md:py-12">
      <Container size="7xl">
        {/* 1. Page Header */}
        <div className="flex flex-col gap-6 mb-10">
          <SectionHeading
            eyebrow="// UPCOMING INTERNSHIP"
            title="QSpiders Internship"
            subtitle="Upcoming 3-Month Data Science Internship at QSpiders, Pune (Deccan Branch)."
            as="h1"
          />

          {/* 2. Primary Showcase Hero Card */}
          <div ref={heroCardRef}>
            <Card
              variant="interactive"
              padding="lg"
              className="relative overflow-hidden border-accent-primary/40 bg-gradient-to-br from-surface-card via-surface-card/90 to-surface-card/70 shadow-[0_10px_35px_rgba(0,0,0,0.4)]"
            >
              {/* Ambient cybernetic background glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-primary shrink-0 shadow-glow">
                    <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
                  </div>

                  <div className="flex flex-col gap-2">
                    {/* Status & Category Eyebrow Badges */}
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-mono text-xs font-bold text-accent-primary px-2.5 py-0.5 rounded bg-accent-primary/10 border border-accent-primary/20">
                        {qspidersData.organization.toUpperCase()}
                      </span>
                      <Badge variant="accent" size="sm" withDot pulseDot>
                        {qspidersData.status} Internship
                      </Badge>
                    </div>

                    {/* Main Title: Data Science Internship */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight">
                      {qspidersData.program}
                    </h2>

                    {/* Metadata Subheading: 3 Months • Pune • Deccan Branch */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-text-secondary">
                      <span className="text-accent-primary font-mono font-bold">
                        {qspidersData.duration}
                      </span>
                      <span className="text-border-subtle" aria-hidden="true">
                        •
                      </span>
                      <span>
                        {qspidersData.location} • {qspidersData.branch}
                      </span>
                    </div>

                    {/* Direct Authentic Summary */}
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-2xl mt-1">
                      {qspidersData.headline}
                    </p>
                  </div>
                </div>

                {/* Quick Navigation Action */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:border-l lg:border-border-subtle lg:pl-8">
                  <div className="p-3 rounded-xl bg-accent-primary/5 border border-accent-primary/20 flex items-start gap-2.5 text-xs text-text-muted">
                    <ShieldCheck className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-text-primary block">
                        Verified Record
                      </span>
                      <span>Upcoming industrial training program</span>
                    </div>
                  </div>

                  <Link to="/resume">
                    <Button
                      variant="outline"
                      size="md"
                      leftIcon={<FileText className="w-4 h-4" />}
                      className="w-full justify-center text-xs font-mono min-h-[44px]"
                    >
                      View in Resume
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* 3. Program Information Grid */}
        <div
          ref={detailsGridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {/* Organization */}
          <Card
            variant="interactive"
            padding="md"
            className="flex items-center gap-3.5 border-border-subtle bg-surface-card/80 hover:border-accent-primary/40 transition-all"
          >
            <div className="p-2.5 rounded-xl bg-accent-primary/10 border border-accent-primary/20 text-accent-primary shrink-0">
              <Building2 className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-mono text-text-muted uppercase block">
                Organization
              </span>
              <span className="text-sm font-bold text-text-primary truncate block">
                {qspidersData.organization}
              </span>
            </div>
          </Card>

          {/* Program */}
          <Card
            variant="interactive"
            padding="md"
            className="flex items-center gap-3.5 border-border-subtle bg-surface-card/80 hover:border-accent-primary/40 transition-all"
          >
            <div className="p-2.5 rounded-xl bg-accent-primary/10 border border-accent-primary/20 text-accent-primary shrink-0">
              <Compass className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-mono text-text-muted uppercase block">
                Program
              </span>
              <span className="text-sm font-bold text-text-primary truncate block">
                {qspidersData.program}
              </span>
            </div>
          </Card>

          {/* Duration */}
          <Card
            variant="interactive"
            padding="md"
            className="flex items-center gap-3.5 border-border-subtle bg-surface-card/80 hover:border-accent-primary/40 transition-all"
          >
            <div className="p-2.5 rounded-xl bg-accent-primary/10 border border-accent-primary/20 text-accent-primary shrink-0">
              <Clock className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-mono text-text-muted uppercase block">
                Duration
              </span>
              <span className="text-sm font-bold text-text-primary truncate block">
                {qspidersData.duration}
              </span>
            </div>
          </Card>

          {/* Location & Branch */}
          <Card
            variant="interactive"
            padding="md"
            className="flex items-center gap-3.5 border-border-subtle bg-surface-card/80 hover:border-accent-primary/40 transition-all"
          >
            <div className="p-2.5 rounded-xl bg-accent-primary/10 border border-accent-primary/20 text-accent-primary shrink-0">
              <MapPin className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-mono text-text-muted uppercase block">
                Location & Branch
              </span>
              <span className="text-sm font-bold text-text-primary truncate block">
                {qspidersData.location} • {qspidersData.branch}
              </span>
            </div>
          </Card>
        </div>

        {/* 4. Upcoming Opportunity Information Notice */}
        <div ref={noticeCardRef} className="mb-10">
          <Card variant="glass" padding="lg" className="border-border-subtle">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/25 flex items-center justify-center text-accent-primary shrink-0">
                  <CalendarClock className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-accent-primary uppercase tracking-wider font-semibold">
                      Planned Internship
                    </span>
                    <Badge variant="accent" size="sm">
                      {qspidersData.status}
                    </Badge>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-text-primary">
                    Upcoming 3-Month Data Science Internship
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary mt-1 max-w-2xl leading-relaxed">
                    This program at QSpiders, Pune (Deccan Branch) is scheduled as an upcoming internship. 
                    Detailed milestones, curriculum components, and project outcomes will be updated once the program commences.
                  </p>
                </div>
              </div>

              <div className="font-mono text-xs px-3.5 py-2 rounded-lg bg-surface-card border border-border-subtle text-text-muted shrink-0">
                Location: <span className="text-text-primary font-semibold">Pune (Deccan Branch)</span>
              </div>
            </div>
          </Card>
        </div>

        {/* 5. Bottom Navigation Connecting Action */}
        <div
          ref={ctaCardRef}
          className="p-6 sm:p-8 rounded-2xl border border-border-subtle bg-gradient-to-r from-surface-card via-bg-secondary to-surface-card flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/25 flex items-center justify-center text-accent-primary shrink-0">
              <Sparkles className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <span className="font-mono text-xs text-accent-primary uppercase tracking-wider font-semibold">
                Explore Portfolio
              </span>
              <h4 className="text-base sm:text-lg font-bold text-text-primary mt-1">
                Verified Projects & Codebases
              </h4>
              <p className="text-xs text-text-secondary mt-1 max-w-xl">
                Explore Shivam's open-source projects including Smart Nagpur, CampusHub, and Phishing Shield on GitHub.
              </p>
            </div>
          </div>

          <Link to="/projects">
            <Button
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="font-mono text-xs shadow-glow whitespace-nowrap min-h-[44px]"
            >
              <span>Explore Projects</span>
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default QSpidersInternshipPage;
