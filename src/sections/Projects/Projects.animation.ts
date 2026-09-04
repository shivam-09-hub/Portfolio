import { gsap } from "@/animations/gsap";
import { motionTokens } from "@/animations/tokens";

export interface ProjectsAnimationScope {
  container: HTMLElement | null;
  heading: HTMLElement | null;
  notice: HTMLElement | null;
  filters: HTMLElement | null;
  featuredCard: HTMLElement | null;
  projectsGrid: HTMLElement | null;
  bottomCta: HTMLElement | null;
}

/**
 * ScrollTrigger entrance animation for the Projects Showcase section.
 */
export function createProjectsScrollAnimation(
  scope: ProjectsAnimationScope,
  reducedMotion: boolean
): gsap.core.Timeline | null {
  const {
    container,
    heading,
    notice,
    filters,
    featuredCard,
    projectsGrid,
    bottomCta,
  } = scope;

  if (!container) return null;

  if (reducedMotion) {
    if (projectsGrid) {
      const cards = projectsGrid.querySelectorAll(".project-card");
      gsap.set(
        [heading, notice, filters, featuredCard, cards, bottomCta],
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        }
      );
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

  // 1. Section Heading Reveal
  if (heading) {
    tl.fromTo(
      heading,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.6 }
    );
  }

  // 2. Data Architecture Notice Reveal
  if (notice) {
    tl.fromTo(
      notice,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.4 },
      "-=0.3"
    );
  }

  // 3. Filter Tabs Cascade
  if (filters) {
    const filterButtons = filters.querySelectorAll("button");
    tl.fromTo(
      filterButtons,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.04,
      },
      "-=0.2"
    );
  }

  // 4. Featured Project Card Reveal
  if (featuredCard) {
    tl.fromTo(
      featuredCard,
      { opacity: 0, y: 30, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.1"
    );
  }

  // 5. Grid Project Cards Stagger
  if (projectsGrid) {
    const cards = projectsGrid.querySelectorAll(".project-card");
    if (cards.length > 0) {
      tl.fromTo(
        cards,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }
  }

  // 6. Bottom CTA Card
  if (bottomCta) {
    tl.fromTo(
      bottomCta,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.2"
    );
  }

  return tl;
}
