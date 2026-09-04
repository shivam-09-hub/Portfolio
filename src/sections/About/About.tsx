import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { personalData } from "@/data/personal";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { createAboutScrollAnimation } from "./About.animation";
import {
  Layers,
  Code2,
  Sparkles,
  MapPin,
  GraduationCap,
  ArrowRight,
  UserCheck,
  CheckCircle2,
} from "lucide-react";

export interface AboutProps {
  id?: string;
  className?: string;
}

export function About({ id = "about", className = "" }: AboutProps): React.JSX.Element {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const bioParagraphsRef = useRef<HTMLDivElement>(null);
  const focusCardsRef = useRef<HTMLDivElement>(null);
  const factsGridRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();

  // Trigger ScrollTrigger entrance animation
  useGSAP(
    () => {
      createAboutScrollAnimation(
        {
          container: containerRef.current,
          heading: headingRef.current,
          leftCol: leftColRef.current,
          bioParagraphs: bioParagraphsRef.current,
          focusCards: focusCardsRef.current,
          factsGrid: factsGridRef.current,
        },
        prefersReducedMotion
      );
    },
    { scope: containerRef }
  );

  const getFocusIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return <Layers className="w-5 h-5 text-accent-primary" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-accent-primary" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-accent-primary" />;
      default:
        return <Code2 className="w-5 h-5 text-accent-primary" />;
    }
  };

  return (
    <section
      id={id}
      ref={containerRef}
      className={`relative py-20 md:py-28 overflow-hidden border-t border-border-subtle bg-bg-primary/80 ${className}`}
      aria-labelledby="about-heading"
    >
      {/* Ambient background illumination */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-primary/5 rounded-full blur-[120px]" />
      </div>

      <Container size="7xl">
        {/* Section Heading */}
        <div ref={headingRef} className="mb-12 md:mb-16">
          <SectionHeading
            eyebrow="// 01. ABOUT ME"
            title="Turning Complex Data into Actionable Intelligence"
            subtitle="A dedicated BCA student focused on Data Science, Machine Learning, predictive analytics, and statistical insight."
            as="h1"
          />
        </div>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Portrait Slot & Verified Identity Profile */}
          <div ref={leftColRef} className="lg:col-span-5 flex flex-col gap-6 w-full max-w-md mx-auto lg:max-w-none">
            {/* Visual Frame for Profile Portrait */}
            <div className="relative group">
              {/* Subtle ambient aura ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary/20 via-sky-500/10 to-transparent rounded-2xl blur-md group-hover:blur-lg transition-all duration-300 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-border-subtle bg-bg-card shadow-card group-hover:border-accent-primary/40 transition-colors duration-300">
                <ImagePlaceholder
                  aspectRatio="1:1"
                  label="Shivam Laxman Gaikwad (Real Portrait to be Provided)"
                  category="Profile Photograph"
                  className="w-full"
                />

                {/* Corner Geometric Accents (Cybernetic Design Language) */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-accent-primary/70 pointer-events-none" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-accent-primary/70 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-accent-primary/70 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-accent-primary/70 pointer-events-none" />
              </div>
            </div>

            {/* Quick Profile Summary Card */}
            <Card variant="interactive" padding="md" className="flex flex-col gap-4 border-border-subtle">
              <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                <div className="flex items-center space-x-2.5">
                  <span className="p-1.5 rounded-lg bg-accent-primary/10 border border-accent-primary/20 text-accent-primary">
                    <UserCheck className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-text-primary">
                      {personalData.name}
                    </h3>
                    <p className="text-[11px] font-mono text-text-muted">
                      Age {personalData.age} • Aspiring Data Scientist
                    </p>
                  </div>
                </div>
                <Badge variant="accent" size="sm" withDot pulseDot>
                  Active
                </Badge>
              </div>

              {/* Status and Location */}
              <div className="flex flex-col gap-2 text-xs">
                <div className="flex items-center space-x-2 text-text-secondary">
                  <GraduationCap className="w-4 h-4 text-accent-primary shrink-0" />
                  <span>{personalData.status}</span>
                </div>
                <div className="flex items-center space-x-2 text-text-secondary">
                  <MapPin className="w-4 h-4 text-accent-primary shrink-0" />
                  <span>{personalData.location}</span>
                </div>
              </div>

              {/* Highlight Chips */}
              {personalData.highlights && personalData.highlights.length > 0 && (
                <div className="pt-3 border-t border-border-subtle">
                  <p className="text-[11px] font-mono text-text-muted uppercase tracking-wider mb-2">
                    Core Attributes
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {personalData.highlights.map((highlight) => (
                      <Badge key={highlight} variant="default" size="sm">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Right Column: Bio Narrative, Focus Areas & Quick Facts */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Authentic Bio Narrative */}
            <div ref={bioParagraphsRef} className="space-y-4 mb-8">
              {personalData.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className={`about-bio-p leading-relaxed ${
                    index === 0
                      ? "text-text-primary text-base sm:text-lg font-medium"
                      : "text-text-secondary text-sm sm:text-base"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Technical Focus Areas (3 Cards) */}
            {personalData.focusAreas && personalData.focusAreas.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-4 flex items-center gap-2">
                  <span className="text-accent-primary">//</span> Technical Direction & Focus
                </h3>

                <div
                  ref={focusCardsRef}
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
                >
                  {personalData.focusAreas.map((area) => (
                    <Card
                      key={area.id}
                      variant="interactive"
                      padding="md"
                      className="about-focus-card flex flex-col justify-between border-border-subtle group hover:border-accent-primary/40"
                    >
                      <div className="flex flex-col gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center group-hover:bg-accent-primary/20 group-hover:border-accent-primary/40 transition-colors duration-200">
                          {getFocusIcon(area.iconName)}
                        </div>
                        <h4 className="text-sm font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-200">
                          {area.title}
                        </h4>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Verified Quick Facts Grid */}
            {personalData.quickFacts && personalData.quickFacts.length > 0 && (
              <div ref={factsGridRef} className="mb-8">
                <Card variant="glass" padding="md" className="border-border-subtle">
                  <div className="flex items-center justify-between pb-3 border-b border-border-subtle mb-4">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted flex items-center gap-2">
                      <span className="text-accent-primary">//</span> Quick Reference & Academic Background
                    </h3>
                    <div className="flex items-center space-x-1 text-[11px] text-status-success font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Record</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {personalData.quickFacts.map((fact) => (
                      <div
                        key={fact.label}
                        className="p-2.5 rounded-lg bg-bg-card/70 border border-border-subtle flex flex-col gap-1"
                      >
                        <span className="font-mono text-[11px] text-text-muted">
                          {fact.label}
                        </span>
                        <span className="font-medium text-text-primary">
                          {fact.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {/* Connecting CTA: Explore Educational Journey */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="outline"
                size="md"
                onClick={() => navigate("/education")}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="group"
              >
                <span>Explore My Academic Journey</span>
              </Button>

              <p className="text-xs font-mono text-text-muted">
                Page // Education Timeline
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
