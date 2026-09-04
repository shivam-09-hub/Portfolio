import { gsap } from "@/animations/gsap";
import { motionTokens } from "@/animations/tokens";

export interface AboutAnimationScope {
  container: HTMLElement | null;
  heading: HTMLElement | null;
  leftCol: HTMLElement | null;
  bioParagraphs: HTMLElement | null;
  focusCards: HTMLElement | null;
  factsGrid: HTMLElement | null;
}

/**
 * ScrollTrigger entrance animation for the About section.
 */
export function createAboutScrollAnimation(
  scope: AboutAnimationScope,
  reducedMotion: boolean
): gsap.core.Timeline | null {
  const { container, heading, leftCol, bioParagraphs, focusCards, factsGrid } = scope;

  if (!container) return null;

  if (reducedMotion) {
    gsap.set([heading, leftCol, bioParagraphs, focusCards, factsGrid], {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    });
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
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 }
    );
  }

  // 2. Left Column Profile / Highlight Frame
  if (leftCol) {
    tl.fromTo(
      leftCol,
      { opacity: 0, y: 24, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7 },
      "-=0.3"
    );
  }

  // 3. Right Column Bio Narrative
  if (bioParagraphs) {
    const paragraphs = bioParagraphs.querySelectorAll(".about-bio-p");
    if (paragraphs.length > 0) {
      tl.fromTo(
        paragraphs,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        "-=0.4"
      );
    }
  }

  // 4. Focus Area Cards Stagger
  if (focusCards) {
    const cards = focusCards.querySelectorAll(".about-focus-card");
    if (cards.length > 0) {
      tl.fromTo(
        cards,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
        "-=0.3"
      );
    }
  }

  // 5. Quick Facts Grid Reveal
  if (factsGrid) {
    tl.fromTo(
      factsGrid,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.2"
    );
  }

  // 6. Subtle Left Column Parallax on Desktop (Phase 13)
  if (typeof window !== "undefined" && window.innerWidth >= 1024 && leftCol) {
    gsap.to(leftCol, {
      y: 30,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.6,
      },
    });
  }

  return tl;
}
