import { gsap } from "@/animations/gsap";
import { motionTokens } from "@/animations/tokens";

export interface HeroAnimationScope {
  container: HTMLElement | null;
  eyebrow: HTMLElement | null;
  title: HTMLElement | null;
  subheading: HTMLElement | null;
  description: HTMLElement | null;
  ctaGroup: HTMLElement | null;
  socialGroup: HTMLElement | null;
  visualCard: HTMLElement | null;
  scrollIndicator: HTMLElement | null;
}

/**
 * Choreographed Hero entrance timeline.
 * Returns the GSAP timeline instance for lifecycle cleanup.
 */
export function createHeroEntranceAnimation(
  scope: HeroAnimationScope,
  reducedMotion: boolean
): gsap.core.Timeline | null {
  const {
    container,
    eyebrow,
    title,
    subheading,
    description,
    ctaGroup,
    socialGroup,
    visualCard,
    scrollIndicator,
  } = scope;

  if (!container) return null;

  // Immediate fallback when reduced motion is preferred
  if (reducedMotion) {
    gsap.set(
      [
        eyebrow,
        title,
        subheading,
        description,
        ctaGroup,
        socialGroup,
        visualCard,
        scrollIndicator,
      ],
      { opacity: 1, x: 0, y: 0, scale: 1 }
    );
    return null;
  }

  const tl = gsap.timeline({
    defaults: {
      ease: motionTokens.easing.standard,
    },
  });

  // 1. Initial state setup
  tl.set(
    [
      eyebrow,
      title,
      subheading,
      description,
      ctaGroup,
      socialGroup,
      visualCard,
      scrollIndicator,
    ],
    { opacity: 0 }
  );

  // 2. Eyebrow Tag Entrance
  if (eyebrow) {
    tl.fromTo(
      eyebrow,
      { opacity: 0, y: -12 },
      { opacity: 1, y: 0, duration: 0.5 },
      "+=0.1"
    );
  }

  // 3. Name Display Title Reveal
  if (title) {
    tl.fromTo(
      title,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.3"
    );
  }

  // 4. Subheading (BCA Student & Developer Direction)
  if (subheading) {
    tl.fromTo(
      subheading,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.5"
    );
  }

  // 5. Description Body
  if (description) {
    tl.fromTo(
      description,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.4"
    );
  }

  // 6. Action CTAs & Social Links
  if (ctaGroup) {
    tl.fromTo(
      ctaGroup,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.3"
    );
  }

  if (socialGroup) {
    tl.fromTo(
      socialGroup,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.3"
    );
  }

  // 7. Visual Showcase Card (Interactive Terminal)
  if (visualCard) {
    tl.fromTo(
      visualCard,
      { opacity: 0, scale: 0.94, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "power3.out" },
      "-=0.6"
    );
  }

  // 8. Bottom Scroll Indicator
  if (scrollIndicator) {
    tl.fromTo(
      scrollIndicator,
      { opacity: 0, y: -8 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.2"
    );
  }

  // 9. Subtle Scroll-Linked Parallax on Desktop (Phase 13)
  if (typeof window !== "undefined" && window.innerWidth >= 1024 && visualCard) {
    gsap.to(visualCard, {
      y: 35,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      },
    });
  }

  return tl;
}
