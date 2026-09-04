import { gsap } from "@/animations/gsap";
import { motionTokens } from "@/animations/tokens";

export interface ProgrammingAnimationScope {
  container: HTMLElement | null;
  heading: HTMLElement | null;
  notice?: HTMLElement | null;
  filters: HTMLElement | null;
  grid: HTMLElement | null;
  cta: HTMLElement | null;
}

/**
 * ScrollTrigger entrance animation for the Programming Knowledge section.
 */
export function createProgrammingScrollAnimation(
  scope: ProgrammingAnimationScope,
  reducedMotion: boolean
): gsap.core.Timeline | null {
  const { container, heading, notice, filters, grid, cta } = scope;

  if (!container) return null;

  if (reducedMotion) {
    if (grid) {
      const cards = grid.querySelectorAll(".language-card");
      gsap.set([heading, notice, filters, cards, cta], {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      });
    }
    return null;
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      once: true,
    },
    defaults: {
      ease: motionTokens.easing.standard,
    },
  });

  // 1. Section Header Reveal
  if (heading) {
    tl.fromTo(
      heading,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.6 }
    );
  }

  // 2. Info Notice Banner Reveal
  if (notice) {
    tl.fromTo(
      notice,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.3"
    );
  }

  // 3. Category Filter Tabs Reveal
  if (filters) {
    tl.fromTo(
      filters,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.4 },
      "-=0.2"
    );
  }

  // 4. Staggered Grid Language Cards Reveal
  if (grid) {
    const cards = grid.querySelectorAll(".language-card");
    if (cards.length > 0) {
      tl.fromTo(
        cards,
        { opacity: 0, y: 24, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08 },
        "-=0.2"
      );
    }
  }

  // 5. Connecting CTA Reveal
  if (cta) {
    tl.fromTo(
      cta,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.2"
    );
  }

  return tl;
}
