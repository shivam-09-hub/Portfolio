import React, { useRef } from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { leadershipRolesData } from "@/data/leadership";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useGSAP, gsap } from "@/animations/gsap";
import {
  Users,
  Globe,
  Target,
  Megaphone,
  Sparkles,
} from "lucide-react";

export function LeadershipSection(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Icon selector mapping
  const getIcon = (name: string) => {
    switch (name) {
      case "Users":
        return <Users className="w-5 h-5 text-accent-primary" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-sky-500" />;
      case "Target":
        return <Target className="w-5 h-5 text-emerald-500" />;
      case "Megaphone":
        return <Megaphone className="w-5 h-5 text-purple-500" />;
      default:
        return <Users className="w-5 h-5 text-accent-primary" />;
    }
  };

  const getIconBg = (name: string) => {
    switch (name) {
      case "Users":
        return "bg-accent-primary/10 border-accent-primary/25";
      case "Globe":
        return "bg-sky-500/10 border-sky-500/25";
      case "Target":
        return "bg-emerald-500/10 border-emerald-500/25";
      case "Megaphone":
        return "bg-purple-500/10 border-purple-500/25";
      default:
        return "bg-accent-primary/10 border-accent-primary/25";
    }
  };

  // ScrollTrigger entrance animation with immediateRender: false for rock-solid visibility
  useGSAP(
    () => {
      if (prefersReducedMotion || !cardsRef.current) return;

      const cards = cardsRef.current.children;
      if (cards.length === 0) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <Section
      id="home-leadership"
      containerSize="7xl"
      className="py-12 md:py-16"
      bordered
    >
      <div ref={containerRef} className="flex flex-col gap-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeading
            eyebrow="// CAMPUS & COMMUNITY"
            title="Leadership & Campus Involvement"
            subtitle="Beyond academics, I actively contribute to student leadership, technical communities, and departmental activities."
          />

          <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-text-muted bg-surface-card px-3 py-1.5 rounded-lg border border-border-subtle shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-accent-primary" />
            <span>Student Leadership & Community</span>
          </div>
        </div>

        {/* 4 Responsive Cards Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {leadershipRolesData.map((role) => (
            <Card
              key={role.id}
              variant="interactive"
              padding="lg"
              className="flex flex-col justify-between group relative overflow-hidden h-full border-border-subtle hover:border-accent-primary/50 hover:shadow-cardHover transition-all duration-300"
            >
              {/* Subtle ambient accent glow in card background */}
              <div
                className="absolute -top-12 -right-12 w-28 h-28 bg-accent-primary/5 rounded-full blur-2xl pointer-events-none group-hover:bg-accent-primary/10 transition-colors duration-500"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-3.5 flex-1 relative z-10">
                {/* Top Row: Icon, Timeline and Status Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${getIconBg(
                      role.iconName
                    )}`}
                  >
                    {getIcon(role.iconName)}
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200/60 dark:bg-white/5 border border-border-subtle text-text-muted font-medium">
                      {role.timeline}
                    </span>
                    <Badge
                      variant={role.status === "Current" ? "accent" : "muted"}
                      size="sm"
                      withDot={role.status === "Current"}
                      pulseDot={role.status === "Current"}
                    >
                      {role.status}
                    </Badge>
                  </div>
                </div>

                {/* Role Header Info */}
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[11px] text-accent-primary font-semibold tracking-wide">
                    {role.organization}
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-200">
                      {role.position}
                    </h3>
                    {role.program && (
                      <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-accent-primary/10 border border-accent-primary/25 text-accent-primary">
                        {role.program}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed pt-2.5 border-t border-border-subtle flex-1">
                  {role.description}
                </p>
              </div>

              {/* Focus Area Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-border-subtle/60 mt-4 relative z-10">
                {role.focus.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-200/60 dark:bg-white/5 border border-border-subtle text-text-secondary group-hover:border-accent-primary/30 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
