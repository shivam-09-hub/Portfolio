import { gsap } from "@/animations/gsap";
import { motionTokens } from "@/animations/tokens";

export interface SkillsAnimationScope {
  container: HTMLElement | null;
  heading: HTMLElement | null;
  notice: HTMLElement | null;
  filters: HTMLElement | null;
  panelsContainer: HTMLElement | null;
  cta: HTMLElement | null;
}

/**
 * ScrollTrigger entrance animation for the Technical Skills section.
 */
export function createSkillsScrollAnimation(
  scope: SkillsAnimationScope,
  reducedMotion: boolean
): gsap.core.Timeline | null {
  const { container, heading, notice, filters, panelsContainer, cta } = scope;

  if (!container) return null;

  if (reducedMotion) {
    if (panelsContainer) {
      const panels = panelsContainer.querySelectorAll(".category-panel");
      const cards = panelsContainer.querySelectorAll(".skill-card");
      gsap.set([heading, notice, filters, panels, cards, cta], {
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

  // 2. Policy Notice Banner Reveal
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

  // 4. Staggered Category Panels Reveal
  if (panelsContainer) {
    const panels = panelsContainer.querySelectorAll(".category-panel");
    if (panels.length > 0) {
      tl.fromTo(
        panels,
        { opacity: 0, y: 24, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1 },
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
