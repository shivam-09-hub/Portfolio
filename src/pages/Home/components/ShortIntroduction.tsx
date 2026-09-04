import React from "react";
import { Link } from "react-router-dom";
import { personalData } from "@/data/personal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { User, ArrowRight, Sparkles, Code2, Layers } from "lucide-react";

export function ShortIntroduction(): React.JSX.Element {
  return (
    <Section id="home-intro" containerSize="7xl" className="py-12 md:py-16" bordered>
      <div className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="// 01. PERSONAL OVERVIEW"
          title="Analytical Mindset & Aspirations"
          subtitle="A brief introduction to my journey toward Data Science, analytical philosophy, and academic goals."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main narrative summary */}
          <Card
            variant="interactive"
            padding="lg"
            className="lg:col-span-8 flex flex-col gap-5 border-border-subtle bg-surface-card/90"
          >
            <div className="flex items-center justify-between gap-4 flex-wrap pb-4 border-b border-border-subtle">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-accent-primary/10 border border-accent-primary/25 text-accent-primary">
                  <User className="w-4 h-4" />
                </span>
                <span className="font-mono text-xs font-bold text-accent-primary uppercase tracking-wider">
                  Candidate Profile
                </span>
              </div>
              <Badge variant="accent" size="sm">
                Active BCA Student
              </Badge>
            </div>

            <p className="text-text-primary text-sm sm:text-base leading-relaxed">
              {personalData.bio[0]}
            </p>

            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
              {personalData.bio[1]}
            </p>

            <div className="pt-2 flex flex-wrap gap-3 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" size="sm">Data Science</Badge>
                <Badge variant="outline" size="sm">Machine Learning</Badge>
                <Badge variant="outline" size="sm">Continuous Learning</Badge>
              </div>

              <Link to="/about">
                <Button
                  variant="secondary"
                  size="sm"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="font-mono text-xs"
                >
                  Read Full About Me
                </Button>
              </Link>
            </div>
          </Card>

          {/* Quick highlight cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Card
              variant="interactive"
              padding="md"
              className="flex items-start gap-3 border-border-subtle bg-surface-card/70"
            >
              <div className="p-2 rounded-lg bg-accent-primary/10 border border-accent-primary/20 text-accent-primary shrink-0 mt-0.5">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-primary">
                  Modular Architecture
                </h4>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  Decoupled data layers, typed interfaces, and clean component isolation.
                </p>
              </div>
            </Card>

            <Card
              variant="interactive"
              padding="md"
              className="flex items-start gap-3 border-border-subtle bg-surface-card/70"
            >
              <div className="p-2 rounded-lg bg-accent-primary/10 border border-accent-primary/20 text-accent-primary shrink-0 mt-0.5">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-primary">
                  Applied Analytics Drills
                </h4>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  Deepening fluency across Python, SQL, statistical modeling, and data analytics ecosystems.
                </p>
              </div>
            </Card>

            <Card
              variant="interactive"
              padding="md"
              className="flex items-start gap-3 border-border-subtle bg-surface-card/70"
            >
              <div className="p-2 rounded-lg bg-accent-primary/10 border border-accent-primary/20 text-accent-primary shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-primary">
                  High-Craft Experience
                </h4>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  Fast, accessible motion, responsive touch targets, and cybernetic styling.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
