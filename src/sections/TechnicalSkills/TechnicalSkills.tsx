import React, { useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { technicalSkillCategories } from "@/data/skills";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CategoryPanel } from "./CategoryPanel";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { createSkillsScrollAnimation } from "./TechnicalSkills.animation";
import {
  Info,
  ArrowRight,
  Terminal,
} from "lucide-react";
import { cn } from "@/utils/helpers";

export interface TechnicalSkillsProps {
  id?: string;
  className?: string;
}

export function TechnicalSkills({
  id = "skills",
  className = "",
}: TechnicalSkillsProps): React.JSX.Element {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const noticeRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const panelsContainerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const prefersReducedMotion = useReducedMotion();

  // Filter categories based on active tab
  const filteredCategories = useMemo(() => {
    if (selectedCategory === "all") return technicalSkillCategories;
    return technicalSkillCategories.filter((cat) => cat.id === selectedCategory);
  }, [selectedCategory]);

  const filterTabs = [
    { id: "all", label: "All Categories" },
    { id: "frameworks", label: "Frameworks" },
    { id: "databases", label: "Databases" },
    { id: "cloud", label: "Cloud" },
    { id: "tools", label: "Dev Tools" },
    { id: "apis", label: "APIs & Services" },
    { id: "ai-emerging", label: "AI & Emerging" },
  ];

  // Trigger ScrollTrigger entrance animation
  useGSAP(
    () => {
      createSkillsScrollAnimation(
        {
          container: containerRef.current,
          heading: headingRef.current,
          notice: noticeRef.current,
          filters: filtersRef.current,
          panelsContainer: panelsContainerRef.current,
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
      className={`relative py-20 md:py-28 overflow-hidden border-t border-border-subtle bg-bg-secondary/30 ${className}`}
      aria-labelledby="skills-heading"
    >
      {/* Ambient background depth */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-accent-primary/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[140px]" />
      </div>

      <Container size="7xl">
        {/* Section Heading */}
        <div ref={headingRef} className="mb-10 text-center flex flex-col items-center">
          <SectionHeading
            eyebrow="// 04. TECHNICAL SKILLS"
            title="Technologies, Frameworks & Tooling"
            subtitle="A structured ecosystem of technical frameworks, database engines, data tooling, and computational environments."
            align="center"
            as="h1"
          />
        </div>

        {/* Informational Context Card (Zero Fake Percentages Policy) */}
        <div ref={noticeRef} className="max-w-3xl mx-auto mb-10">
          <Card
            variant="glass"
            padding="md"
            className="border-accent-primary/20 bg-bg-card/70 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <div className="w-9 h-9 rounded-lg bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-primary shrink-0">
              <Info className="w-4 h-4" />
            </div>
            <div className="flex-1 text-xs leading-relaxed">
              <span className="font-semibold text-text-primary block sm:inline mr-1">
                Domain Architecture:
              </span>
              <span className="text-text-secondary">
                Technical competencies are organized strictly by functional domains rather than arbitrary percentage meters. All categories feature a decoupled data layer awaiting candidate verification.
              </span>
            </div>
          </Card>
        </div>

        {/* Category Filter Tabs */}
        <div
          ref={filtersRef}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Technical Skill Categories"
        >
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(tab.id)}
                className={cn(
                  "px-3.5 py-2 rounded-lg text-xs font-mono transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary min-h-[40px] flex items-center gap-1.5",
                  isActive
                    ? "bg-accent-primary text-bg-primary font-bold shadow-glow"
                    : "bg-bg-card/70 border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-primary/40 hover:bg-bg-card"
                )}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid of Category Panels */}
        <div
          ref={panelsContainerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {filteredCategories.map((category) => (
            <CategoryPanel key={category.id} category={category} />
          ))}
        </div>

        {/* Schema Status Callout */}
        <div className="max-w-2xl mx-auto mt-12 p-4 rounded-xl border border-dashed border-border-subtle bg-bg-secondary/40 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-text-muted font-mono">
          <div className="flex items-center gap-1.5 text-accent-primary">
            <Terminal className="w-3.5 h-3.5" />
            <span className="font-semibold">Centralized Schema:</span>
          </div>
          <span>
            18 extensible technology slots established across 6 domains in <code className="text-accent-primary">src/data/skills.ts</code>
          </span>
        </div>

        {/* Connecting CTA: Explore Projects */}
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
            Page // Verified Applied Projects
          </span>
        </div>
      </Container>
    </section>
  );
}
