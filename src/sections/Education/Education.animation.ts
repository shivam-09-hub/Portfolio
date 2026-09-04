import { gsap } from "@/animations/gsap";
import { motionTokens } from "@/animations/tokens";

export interface EducationAnimationScope {
  container: HTMLElement | null;
  heading: HTMLElement | null;
  spine: HTMLElement | null;
  timelineContainer: HTMLElement | null;
  ctaButton: HTMLElement | null;
}

/**
 * ScrollTrigger entrance animations for the Education Timeline section.
 */
export function createEducationScrollAnimation(
  scope: EducationAnimationScope,
  reducedMotion: boolean
): gsap.core.Timeline | null {
  const { container, heading, spine, timelineContainer, ctaButton } = scope;

  if (!container) return null;

  if (reducedMotion) {
    if (timelineContainer) {
      const items = timelineContainer.querySelectorAll(".education-timeline-item");
      const nodes = timelineContainer.querySelectorAll(".education-node");
      const cards = timelineContainer.querySelectorAll(".education-card");
      gsap.set([heading, spine, items, nodes, cards, ctaButton], {
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

  // 2. Progressive Spine Scrub (Linked directly to timeline scroll)
  if (spine && timelineContainer) {
    gsap.fromTo(
      spine,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineContainer,
          start: "top 75%",
          end: "bottom 75%",
          scrub: 0.5,
        },
      }
    );
  }

  // 3. Progressive Milestone Reveal (Each item reveals as scrolled into view)
  if (timelineContainer) {
    const items = timelineContainer.querySelectorAll(".education-timeline-item");

    items.forEach((item, index) => {
      const node = item.querySelector(".education-node");
      const card = item.querySelector(".education-card");
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      const isEven = index % 2 === 0;
      const xOffset = isMobile ? 0 : isEven ? -24 : 24;

      const itemTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          once: true,
        },
        defaults: {
          ease: motionTokens.easing.standard,
        },
      });

      if (node) {
        itemTl.fromTo(
          node,
          { opacity: 0, scale: 0.2 },
          { opacity: 1, scale: 1, duration: 0.45, ease: "back.out(1.5)" }
        );
      }

      if (card) {
        itemTl.fromTo(
          card,
          { opacity: 0, y: 20, x: xOffset },
          { opacity: 1, y: 0, x: 0, duration: 0.6 },
          "-=0.2"
        );
      }
    });
  }

  // 4. Connecting CTA Reveal
  if (ctaButton) {
    gsap.fromTo(
      ctaButton,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: motionTokens.easing.standard,
        scrollTrigger: {
          trigger: ctaButton,
          start: "top 90%",
          once: true,
        },
      }
    );
  }

  return tl;
}
