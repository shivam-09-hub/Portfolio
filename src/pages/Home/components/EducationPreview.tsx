import React from "react";
import { Link } from "react-router-dom";
import { educationData } from "@/data/education";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GraduationCap, ArrowRight, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export function EducationPreview(): React.JSX.Element {
  // Extract the current BCA degree milestone
  const currentMilestone = educationData.find((item) => item.status === "current") || educationData[0];

  return (
    <Section id="home-education-preview" containerSize="7xl" className="py-12 md:py-16" bordered>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeading
            eyebrow="// ACADEMIC HIGHLIGHT"
            title="Current Educational Pursuit"
            subtitle="Actively advancing computer application foundations, mathematics, and data science principles."
          />

          <Link to="/education" className="self-start sm:self-auto shrink-0">
            <Button
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="font-mono text-xs shadow-glow"
            >
              View Full Education Timeline
            </Button>
          </Link>
        </div>

        {/* Current Degree Highlight Spotlight Card */}
        <Card
          variant="interactive"
          padding="lg"
          className="relative overflow-hidden border-accent-primary/40 bg-gradient-to-br from-surface-card to-surface-card/70 shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
        >
          {/* Subtle Cybernetic Accents */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent-primary/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-primary shrink-0 shadow-glow">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="font-mono text-xs text-accent-primary font-bold">
                    PRIMARY DEGREE MILESTONE
                  </span>
                  <Badge variant="accent" size="sm" withDot pulseDot>
                    Currently Pursuing
                  </Badge>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                  {currentMilestone.level}
                </h3>

                <p className="text-sm font-semibold text-text-secondary">
                  {currentMilestone.institution}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-muted mt-2">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent-primary" />
                    <span>{currentMilestone.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent-primary" />
                    <span>{currentMilestone.location}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Active Academic Enrollment</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Campus Photo Thumbnail */}
            {currentMilestone.image && (
              <div className="relative w-full sm:w-60 h-32 rounded-xl overflow-hidden border border-border-subtle shrink-0 shadow-md group/thumb">
                <img
                  src={currentMilestone.image}
                  alt={currentMilestone.imageAlt || currentMilestone.institution}
                  className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10">
                  JDCOEM Campus
                </span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:border-l lg:border-border-subtle lg:pl-6">
              <div className="flex flex-col text-xs font-mono text-text-muted">
                <span className="text-text-primary font-semibold">Educational Journey</span>
                <span>Includes 10th, 12th, Horticulture Pivot & BCA</span>
              </div>

              <Link to="/education">
                <Button
                  variant="outline"
                  size="sm"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="w-full sm:w-auto font-mono text-xs"
                >
                  Explore Timeline
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
