import React, { useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { personalData } from "@/data/personal";
import { socialLinksData } from "@/data/socialLinks";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { createHeroEntranceAnimation } from "./Hero.animation";
import {
  ArrowRight,
  FileText,
  MapPin,
  Terminal,
  ChevronDown,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Code2,
  CheckCircle2,
} from "lucide-react";

export interface HeroProps {
  id?: string;
  className?: string;
}

export function Hero({ id = "home", className = "" }: HeroProps): React.JSX.Element {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const socialGroupRef = useRef<HTMLDivElement>(null);
  const visualCardRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();

  // Reference for rAF-throttled 3D mouse parallax tilt on the hero visual card
  const tiltRafRef = useRef<number | null>(null);

  // Initial Entrance Animation
  useGSAP(
    () => {
      createHeroEntranceAnimation(
        {
          container: containerRef.current,
          eyebrow: eyebrowRef.current,
          title: titleRef.current,
          subheading: subheadingRef.current,
          description: descriptionRef.current,
          ctaGroup: ctaGroupRef.current,
          socialGroup: socialGroupRef.current,
          visualCard: visualCardRef.current,
          scrollIndicator: scrollIndicatorRef.current,
        },
        prefersReducedMotion
      );
    },
    { scope: containerRef }
  );

  // Performant 3D mouse tilt handler bypassing React state reconciliation
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (
        prefersReducedMotion ||
        typeof window === "undefined" ||
        window.innerWidth < 1024 ||
        window.matchMedia("(hover: none)").matches
      ) {
        return;
      }

      const card = visualCardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      // Normalized coordinates from -1 to 1
      const normalizedX = (e.clientX - cardCenterX) / (rect.width / 2);
      const normalizedY = (e.clientY - cardCenterY) / (rect.height / 2);

      // Max tilt angles (degrees)
      const maxTilt = 8;
      const rotateY = normalizedX * maxTilt;
      const rotateX = -normalizedY * maxTilt;

      if (tiltRafRef.current) cancelAnimationFrame(tiltRafRef.current);
      tiltRafRef.current = requestAnimationFrame(() => {
        if (visualCardRef.current) {
          visualCardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
          visualCardRef.current.style.transition = "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)";
        }
      });
    },
    [prefersReducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    if (tiltRafRef.current) cancelAnimationFrame(tiltRafRef.current);
    if (visualCardRef.current) {
      visualCardRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      visualCardRef.current.style.transition = "transform 0.5s ease-out";
    }
  }, []);

  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id={id}
      ref={containerRef}
      className={`relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden ${className}`}
      aria-labelledby="hero-title"
    >
      {/* Ambient Lighting & High-Tech Background Accents */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        {/* Soft cyan pool behind the title */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-accent-primary/10 rounded-full blur-[120px]" />
        {/* Soft indigo/cyan pool behind visual card */}
        <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-accent-hover/10 rounded-full blur-[140px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_45%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <Container size="7xl" className="my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal & Technical Identity */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* 1. Monospace Eyebrow Badge */}
            <div ref={eyebrowRef} className="mb-4">
              <Badge variant="accent" size="md" withDot pulseDot className="py-1 px-3">
                <Terminal className="w-3.5 h-3.5 mr-1 text-accent-primary" />
                // ASPIRING DATA SCIENTIST
              </Badge>
            </div>

            {/* 2. Display H1: Full Name */}
            <h1
              id="hero-title"
              ref={titleRef}
              className="text-[32px] xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.12] sm:leading-[1.08] mb-4 break-words"
            >
              Shivam Laxman <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-600 dark:from-accent-primary dark:via-sky-300 dark:to-cyan-200">
                Gaikwad
              </span>
            </h1>

            {/* 3. Professional Role & BCA Student Status */}
            <div ref={subheadingRef} className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 mb-5 text-sm sm:text-base">
              <span className="font-semibold text-text-primary">
                {personalData.role}
              </span>
              <span className="text-border-subtle" aria-hidden="true">•</span>
              <span className="text-accent-primary font-medium">
                BCA Student
              </span>
              <span className="hidden xs:inline text-border-subtle" aria-hidden="true">•</span>
              <span className="inline-flex items-center text-text-muted text-xs sm:text-sm">
                <MapPin className="w-3.5 h-3.5 mr-1 text-accent-primary/70 shrink-0" />
                <span>Nagpur, IN</span>
              </span>
            </div>

            {/* 4. Narrative / Direction Description */}
            <p
              ref={descriptionRef}
              className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-8 font-normal"
            >
              Pursuing Bachelor of Computer Applications at JD College of Engineering and Management. 
              Dedicated to solving real-world challenges through Data Science, Machine Learning, statistical modeling, 
              and data analytics.
            </p>

            {/* 5. Primary Action CTAs */}
            <div
              ref={ctaGroupRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/projects")}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto min-h-[44px] justify-center shadow-glow font-semibold"
              >
                Explore Projects
              </Button>


              <Button
                variant="ghost"
                size="lg"
                onClick={() => navigate("/resume")}
                leftIcon={<FileText className="w-4 h-4" />}
                className="w-full sm:w-auto min-h-[44px] justify-center text-text-secondary hover:text-text-primary"
              >
                View Resume
              </Button>
            </div>

            {/* 6. Social Profile Links & Status Indicator */}
            <div
              ref={socialGroupRef}
              className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-border-subtle w-full"
            >
              <div className="flex items-center space-x-2.5">
                {socialLinksData.map((link) => {
                  const Icon =
                    link.platform === "GitHub"
                      ? Github
                      : link.platform === "LinkedIn"
                      ? Linkedin
                      : link.platform === "Instagram"
                      ? Instagram
                      : Mail;
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target={link.url.startsWith("http") ? "_blank" : undefined}
                      rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="w-10 h-10 rounded-lg border border-border-subtle bg-bg-card hover:bg-bg-cardHover text-text-secondary hover:text-accent-primary hover:border-accent-primary/40 flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary active:scale-95"
                      aria-label={link.ariaLabel}
                      title={link.ariaLabel}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}

                <span className="text-xs font-mono text-text-muted ml-2">
                  Social & Contact
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Craft Centerpiece */}
          <div
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={visualCardRef}
              className="w-full max-w-lg select-none will-change-transform"
            >
              {/* Terminal / Code Craft Artifact */}
              <Card
                variant="default"
                padding="none"
                className="border-border-subtle hover:border-accent-primary/40 shadow-xl overflow-hidden backdrop-blur-xl bg-bg-card"
              >
                {/* Terminal Header Bar */}
                <div className="px-4 py-3 border-b border-border-subtle flex items-center justify-between bg-bg-secondary/70">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center space-x-1.5 font-mono text-xs text-text-muted">
                    <Code2 className="w-3.5 h-3.5 text-accent-primary" />
                    <span>shivam.config.ts</span>
                  </div>
                  <Badge variant="accent" size="sm" withDot pulseDot className="text-[10px] py-0 px-2">
                    Active
                  </Badge>
                </div>

                {/* Terminal Content Body */}
                <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto">
                  <div className="flex items-center text-text-muted mb-3">
                    <span className="text-accent-primary font-bold mr-2">//</span>
                    <span>Verified Data Scientist Identity</span>
                  </div>

                  <div className="space-y-1.5 text-text-secondary">
                    <p>
                      <span className="text-sky-600 dark:text-sky-400 font-semibold">const</span>{" "}
                      <span className="text-text-primary">dataScientist</span> = &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-text-muted">name:</span>{" "}
                      <span className="text-emerald-700 dark:text-emerald-300">"{personalData.name}"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-text-muted">dob:</span>{" "}
                      <span className="text-emerald-700 dark:text-emerald-300">"{personalData.dob}"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-text-muted">age:</span>{" "}
                      <span className="text-accent-primary font-semibold">{personalData.age}</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-text-muted">degree:</span>{" "}
                      <span className="text-emerald-700 dark:text-emerald-300">"BCA (Computer Applications)"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-text-muted">college:</span>{" "}
                      <span className="text-emerald-700 dark:text-emerald-300">"JD College of Eng & Mgmt"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-text-muted">location:</span>{" "}
                      <span className="text-emerald-700 dark:text-emerald-300">"{personalData.location}"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-text-muted">currentStatus:</span>{" "}
                      <span className="text-accent-primary font-semibold">"Currently Pursuing"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-text-muted">cgpa:</span>{" "}
                      <span className="text-accent-primary font-semibold">9.33</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-text-muted">coreFocus:</span> [
                    </p>
                    <p className="pl-8 text-sky-700 dark:text-sky-200">"Data Science",</p>
                    <p className="pl-8 text-sky-700 dark:text-sky-200">"Machine Learning",</p>
                    <p className="pl-8 text-sky-700 dark:text-sky-200">"Data Analytics"</p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      <span className="text-text-muted">primaryGoal:</span>{" "}
                      <span className="text-emerald-700 dark:text-emerald-300">"Data Scientist"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-text-muted">openToOpportunities:</span>{" "}
                      <span className="text-amber-700 dark:text-amber-300 font-semibold">true</span>
                    </p>
                    <p>&#125;;</p>
                  </div>

                  {/* Highlights Bar Inside Terminal */}
                  <div className="mt-5 pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-2 text-[11px]">
                    <div className="flex items-center space-x-1.5 text-status-success font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Verified Academic Milestone</span>
                    </div>
                    <span className="text-text-muted font-mono">2024–Present</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll to Explore Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="w-full flex justify-center mt-12 mb-2 select-none"
      >
        <button
          type="button"
          onClick={() => handleScrollTo("home-intro")}
          className="flex flex-col items-center gap-1.5 text-text-muted hover:text-accent-primary transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-lg p-2"
          aria-label="Scroll down to introduction"
        >
          <span className="text-[11px] font-mono tracking-wider uppercase group-hover:text-accent-primary transition-colors">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border border-border-subtle group-hover:border-accent-primary/60 flex items-start justify-center p-1 transition-colors">
            <span className="w-1 h-2 rounded-full bg-accent-primary animate-bounce" />
          </div>
          <ChevronDown className="w-4 h-4 text-text-muted group-hover:text-accent-primary transition-colors -mt-1" />
        </button>
      </div>
    </section>
  );
}
