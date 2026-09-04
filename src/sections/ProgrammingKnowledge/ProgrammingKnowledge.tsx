import React, { useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  programmingLanguagesData,
  programmingCategories,
} from "@/data/programming";
import type { ProgrammingLanguageCategory } from "@/types/programming";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { LanguageCard } from "./LanguageCard";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { createProgrammingScrollAnimation } from "./ProgrammingKnowledge.animation";
import {
  ArrowRight,
  Terminal,
} from "lucide-react";
import { cn } from "@/utils/helpers";

export interface ProgrammingKnowledgeProps {
  id?: string;
  className?: string;
}

export function ProgrammingKnowledge({
  id = "programming",
  className = "",
}: ProgrammingKnowledgeProps): React.JSX.Element {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const prefersReducedMotion = useReducedMotion();

  // Filter languages based on active tab
  const filteredLanguages = useMemo(() => {
    if (selectedCategory === "all") return programmingLanguagesData;
    return programmingLanguagesData.filter(
      (lang) => lang.category === (selectedCategory as ProgrammingLanguageCategory)
    );
  }, [selectedCategory]);

  // Trigger ScrollTrigger entrance animation
  useGSAP(
    () => {
      createProgrammingScrollAnimation(
        {
          container: containerRef.current,
          heading: headingRef.current,
          filters: filtersRef.current,
          grid: gridRef.current,
          cta: ctaRef.current,
        },
        prefersReducedMotion
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id={id}
      ref={containerRef}
      className={`relative py-20 md:py-28 overflow-hidden border-t border-border-subtle bg-bg-primary/90 ${className}`}
      aria-labelledby="programming-heading"
    >
      {/* Ambient background depth lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-sky-500/5 rounded-full blur-[130px]" />
      </div>

      <Container size="7xl">
        {/* Section Heading */}
        <div ref={headingRef} className="mb-10 text-center flex flex-col items-center">
          <SectionHeading
            eyebrow="// 03. PROGRAMMING KNOWLEDGE"
            title="Languages & Foundational Codebases"
            subtitle="A focused overview of core programming languages wielded for computational logic, application systems, and algorithms."
            align="center"
            as="h1"
          />
        </div>

        {/* Category Filter Tabs */}
        <div
          ref={filtersRef}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Programming Language Categories"
        >
          {programmingCategories.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "px-3.5 py-2 rounded-lg text-xs font-mono transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary min-h-[40px] flex items-center gap-1.5",
                  isActive
                    ? "bg-accent-primary text-bg-primary font-bold shadow-glow"
                    : "bg-bg-card/70 border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-primary/40 hover:bg-bg-card"
                )}
              >
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid of Language Cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {filteredLanguages.map((language) => (
            <LanguageCard key={language.id} language={language} />
          ))}
        </div>

        {/* Schema Status Callout */}
        <div className="max-w-2xl mx-auto mt-12 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-text-muted font-mono">
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
            <Terminal className="w-3.5 h-3.5" />
            <span className="font-semibold">Verified Programming Roster:</span>
          </div>
          <span className="text-text-secondary">
            6 core languages actively applied across data analytics, systems, web, and mobile builds.
          </span>
        </div>

        {/* Connecting CTA: Explore Projects Showcase */}
        <div
          ref={ctaRef}
          className="mt-14 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <Button
            variant="outline"
            size="md"
            onClick={() => navigate("/projects")}
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="group"
          >
            <span>Explore Projects Showcase</span>
          </Button>
          <span className="text-xs font-mono text-text-muted">
            Page // Featured Projects & Builds
          </span>
        </div>
      </Container>
    </section>
  );
}
