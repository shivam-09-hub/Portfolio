import { gsap } from "@/animations/gsap";
import { motionTokens } from "@/animations/tokens";

export interface CertificatesAnimationScope {
  container: HTMLElement | null;
  heading: HTMLElement | null;
  notice: HTMLElement | null;
  toolbar: HTMLElement | null;
  grid: HTMLElement | null;
  bottomCta: HTMLElement | null;
}

/**
 * ScrollTrigger entrance animation for the Certificates Showcase section.
 */
export function createCertificatesScrollAnimation(
  scope: CertificatesAnimationScope,
  reducedMotion: boolean
): gsap.core.Timeline | null {
  const { container, heading, notice, toolbar, grid, bottomCta } = scope;

  if (!container) return null;

  if (reducedMotion) {
    if (grid) {
      const cards = grid.querySelectorAll(".certificate-card");
      gsap.set([heading, notice, toolbar, cards, bottomCta], {
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

  // 1. Section Heading Reveal
  if (heading) {
    tl.fromTo(
      heading,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.6 }
    );
  }

  // 2. Verified Credentials Notice Reveal
  if (notice) {
    tl.fromTo(
      notice,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.4 },
      "-=0.3"
    );
  }

  // 3. Search & Filter Toolbar Reveal
  if (toolbar) {
    tl.fromTo(
      toolbar,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.4 },
      "-=0.2"
    );
  }

  // 4. Staggered Certificate Cards Cascade
  if (grid) {
    const cards = grid.querySelectorAll(".certificate-card");
    if (cards.length > 0) {
      tl.fromTo(
        cards,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }
  }

  // 5. Bottom Connection CTA
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
