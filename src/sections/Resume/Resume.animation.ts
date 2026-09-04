import { gsap } from "@/animations/gsap";
import { motionTokens } from "@/animations/tokens";

export interface ResumeAnimationScope {
  container: HTMLElement | null;
  heading: HTMLElement | null;
  previewCard: HTMLElement | null;
  contentCard: HTMLElement | null;
  actions: HTMLElement | null;
}

/**
 * ScrollTrigger entrance animation for the Resume section.
 */
export function createResumeScrollAnimation(
  scope: ResumeAnimationScope,
  reducedMotion: boolean
): gsap.core.Timeline | null {
  const { container, heading, previewCard, contentCard, actions } = scope;

  if (!container) return null;

  if (reducedMotion) {
    gsap.set([heading, previewCard, contentCard, actions], {
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

  // 1. Section Heading Reveal
  if (heading) {
    tl.fromTo(
      heading,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.6 }
    );
  }

  // 2. Document Preview Card Reveal
  if (previewCard) {
    tl.fromTo(
      previewCard,
      { opacity: 0, y: 30, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power2.out" },
      "-=0.3"
    );
  }

  // 3. Content Card Reveal
  if (contentCard) {
    tl.fromTo(
      contentCard,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.4"
    );
  }

  // 4. Action Buttons Entrance
  if (actions) {
    tl.fromTo(
      actions,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.4 },
      "-=0.2"
    );
  }

  return tl;
}
