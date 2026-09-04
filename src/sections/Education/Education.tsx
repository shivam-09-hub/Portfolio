import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { educationData } from "@/data/education";
import type { EducationItem } from "@/types/education";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { createEducationScrollAnimation } from "./Education.animation";
import {
  GraduationCap,
  MapPin,
  CheckCircle2,
  Sparkles,
  Compass,
  ArrowRight,
  School,
  Calendar,
} from "lucide-react";
import { cn } from "@/utils/helpers";

export interface EducationProps {
  id?: string;
  className?: string;
}

export function Education({ id = "education", className = "" }: EducationProps): React.JSX.Element {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const spineRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const ctaButtonRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();

  // Trigger ScrollTrigger entrance animation
  useGSAP(
    () => {
      createEducationScrollAnimation(
        {
          container: containerRef.current,
          heading: headingRef.current,
          spine: spineRef.current,
          timelineContainer: timelineRef.current,
          ctaButton: ctaButtonRef.current,
        },
        prefersReducedMotion
      );
    },
    { scope: containerRef }
  );

  const getNodeIcon = (item: EducationItem) => {
    switch (item.status) {
      case "current":
        return <Sparkles className="w-4 h-4 text-accent-primary" />;
      case "pivot":
        return <Compass className="w-4 h-4 text-amber-400" />;
      case "completed":
      default:
        return <CheckCircle2 className="w-4 h-4 text-status-success" />;
    }
  };

  const getStatusBadge = (item: EducationItem) => {
    switch (item.status) {
      case "current":
        return (
          <Badge variant="accent" size="sm" withDot pulseDot>
            {item.statusLabel}
          </Badge>
        );
      case "pivot":
        return (
          <Badge variant="warning" size="sm" withDot>
            {item.statusLabel}
          </Badge>
        );
      case "completed":
      default:
        return (
          <Badge variant="success" size="sm" withDot>
            {item.statusLabel}
          </Badge>
        );
    }
  };

  return (
    <section
      id={id}
      ref={containerRef}
      className={`relative py-20 md:py-28 overflow-hidden border-t border-border-subtle bg-bg-secondary/30 ${className}`}
      aria-labelledby="education-heading"
    >
      {/* Ambient background depth */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-accent-primary/5 rounded-full blur-[130px]" />
      </div>

      <Container size="7xl">
        {/* Section Heading */}
        <div ref={headingRef} className="mb-14 md:mb-20 text-center flex flex-col items-center">
          <SectionHeading
            eyebrow="// ACADEMIC MILESTONES"
            title="Academic Milestones & Technical Evolution"
            subtitle="A chronological journey from foundational schooling to active computer applications pursuit."
            align="center"
            as="h1"
          />
        </div>

        {/* Timeline Flow Container */}
        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          {/* Central Vertical Spine Line (Desktop) */}
          <div
            ref={spineRef}
            className="hidden md:block absolute left-1/2 top-6 bottom-6 -translate-x-1/2 w-0.5 bg-gradient-to-b from-accent-primary via-accent-primary/40 to-border-subtle pointer-events-none"
            aria-hidden="true"
          />

          {/* Left Vertical Spine Line (Mobile & Tablet) */}
          <div
            className="md:hidden absolute left-3.5 xs:left-4 sm:left-6 top-6 bottom-6 -translate-x-1/2 w-0.5 bg-gradient-to-b from-accent-primary via-accent-primary/40 to-border-subtle pointer-events-none"
            aria-hidden="true"
          />

          {/* Chronological Milestone Items */}
          <div className="space-y-10 md:space-y-16">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isCurrent = item.status === "current";
              const isPivot = item.status === "pivot";

              return (
                <div
                  key={item.id}
                  className="education-timeline-item relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 items-center"
                >
                  {/* Timeline Node Point (Desktop & Mobile) */}
                  <div
                    className={cn(
                      "education-node absolute z-20 flex items-center justify-center rounded-full transition-transform duration-300",
                      // Mobile positioning
                      "left-3.5 xs:left-4 sm:left-6 -translate-x-1/2 top-4",
                      // Desktop positioning
                      "md:left-1/2 md:top-8 md:-translate-x-1/2",
                      isCurrent
                        ? "w-9 h-9 sm:w-10 sm:h-10 bg-bg-primary border-2 border-accent-primary shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                        : isPivot
                        ? "w-8 h-8 sm:w-9 sm:h-9 bg-bg-primary border-2 border-amber-400/80 shadow-[0_0_10px_rgba(245,158,11,0.3)]"
                        : "w-7 h-7 sm:w-8 sm:h-8 bg-bg-primary border border-status-success/60 shadow-sm"
                    )}
                    aria-hidden="true"
                  >
                    {getNodeIcon(item)}
                    {isCurrent && (
                      <span className="absolute -inset-1 rounded-full border border-accent-primary/40 animate-ping pointer-events-none" />
                    )}
                  </div>

                  {/* Left Column Container (Desktop Even items) */}
                  <div
                    className={cn(
                      "w-full",
                      isEven ? "md:order-1" : "md:order-2",
                      // Mobile indentation
                      "pl-8 xs:pl-10 sm:pl-14 md:pl-0"
                    )}
                  >
                    <Card
                      variant="interactive"
                      padding="none"
                      className={cn(
                        "education-card overflow-hidden transition-all duration-300 border-border-subtle group",
                        isCurrent && "border-accent-primary/40 shadow-glow bg-bg-card/95",
                        isPivot && "hover:border-amber-400/40"
                      )}
                    >
                      {/* Card Header Bar */}
                      <div className="p-3.5 sm:p-5 border-b border-border-subtle flex flex-wrap items-center justify-between gap-2 bg-bg-primary/40">
                        <div className="flex items-center space-x-2 text-xs font-mono text-text-muted">
                          <Calendar className="w-3.5 h-3.5 text-accent-primary" />
                          <span className="font-semibold text-text-primary tracking-wide">
                            {item.period}
                          </span>
                        </div>
                        {getStatusBadge(item)}
                      </div>

                      {/* Institution Media Slot (Uncropped with Ambient Backdrop) */}
                      <div className="relative overflow-hidden bg-slate-950/20 dark:bg-black/40 border-b border-border-subtle aspect-video flex items-center justify-center">
                        {item.image ? (
                          <>
                            {/* Ambient blurred backdrop so square and non-16:9 photos fit seamlessly */}
                            <img
                              src={item.image}
                              alt=""
                              aria-hidden="true"
                              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-35 scale-110 pointer-events-none select-none"
                            />
                            {/* Crisp Uncropped Foreground Image */}
                            <img
                              src={item.image}
                              alt={item.imageAlt || `${item.institution} Campus`}
                              loading="lazy"
                              decoding="async"
                              className="relative z-10 max-w-full max-h-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-105 drop-shadow-md"
                            />
                          </>
                        ) : (
                          <ImagePlaceholder
                            aspectRatio="16:9"
                            label={`${item.institution} (Campus Photo to be Provided)`}
                            category={isCurrent ? "Active Campus" : "Educational Institution"}
                            className="w-full"
                          />
                        )}

                        {/* Subtle cybernetic corner accents */}
                        <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-accent-primary/60 pointer-events-none z-20" />
                        <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-accent-primary/60 pointer-events-none z-20" />
                      </div>

                      {/* Card Body Details */}
                      <div className="p-4 sm:p-6 flex flex-col gap-3">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-200">
                                {item.level}
                              </h3>
                              {item.grade && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-accent-primary/10 border border-accent-primary/30 text-accent-primary">
                                  {item.grade}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-medium text-text-secondary mt-1">
                              <School className="w-3.5 h-3.5 text-accent-primary shrink-0" />
                              <span>{item.institution}</span>
                            </div>
                          </div>
                        </div>

                        {/* Location Tag */}
                        <div className="inline-flex items-center text-xs font-mono text-text-muted">
                          <MapPin className="w-3.5 h-3.5 mr-1 text-accent-primary/80 shrink-0" />
                          <span>{item.location}</span>
                        </div>

                        {/* Authentic Description */}
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed pt-2 border-t border-border-subtle">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  </div>

                  {/* Spacer Column for Opposite Side on Desktop */}
                  <div
                    className={cn(
                      "hidden md:flex flex-col justify-center",
                      isEven ? "md:order-2 md:pl-6" : "md:order-1 md:pr-6 md:text-right"
                    )}
                    aria-hidden="true"
                  >
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-text-muted">
                      <GraduationCap className="w-4 h-4 text-accent-primary/60" />
                      <span className="tracking-wider uppercase">
                        Milestone 0{index + 1}
                      </span>
                    </div>
                    <span className="text-xs text-text-muted/70 mt-1">
                      {item.statusLabel}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Connecting Action to Next Section (Programming Knowledge) */}
        <div
          ref={ctaButtonRef}
          className="mt-16 md:mt-24 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <Button
            variant="outline"
            size="md"
            onClick={() => navigate("/programming")}
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="group"
          >
            <span>Explore Programming Knowledge</span>
          </Button>
          <span className="text-xs font-mono text-text-muted">
            Page // Core Languages & Proficiency
          </span>
        </div>
      </Container>
    </section>
  );
}
