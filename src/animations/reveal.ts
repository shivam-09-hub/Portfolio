import { gsap } from "./gsap";
import { motionTokens } from "./tokens";

/**
 * Checks if the user has requested reduced motion.
 */
export function isReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export interface RevealOptions {
  duration?: number;
  delay?: number;
  stagger?: number;
  distance?: number;
  ease?: string;
  scrollTrigger?: gsap.DOMTarget | ScrollTrigger.Vars;
  once?: boolean;
}

/**
 * Reusable fadeInUp animation preset.
 * Respects prefers-reduced-motion by falling back to instant opacity.
 */
export function fadeInUp(
  targets: gsap.DOMTarget,
  options: RevealOptions = {}
): gsap.core.Tween {
  if (isReducedMotion()) {
    return gsap.set(targets, { opacity: 1, y: 0 });
  }

  const {
    duration = motionTokens.duration.slow,
    delay = 0,
    stagger = motionTokens.stagger.standard,
    distance = motionTokens.distance.md,
    ease = motionTokens.easing.standard,
    scrollTrigger,
  } = options;

  return gsap.fromTo(
    targets,
    { opacity: 0, y: distance },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease,
      scrollTrigger,
    }
  );
}

/**
 * Reusable fadeIn animation preset.
 */
export function fadeIn(
  targets: gsap.DOMTarget,
  options: RevealOptions = {}
): gsap.core.Tween {
  if (isReducedMotion()) {
    return gsap.set(targets, { opacity: 1 });
  }

  const {
    duration = motionTokens.duration.normal,
    delay = 0,
    stagger = motionTokens.stagger.tight,
    ease = motionTokens.easing.standard,
    scrollTrigger,
  } = options;

  return gsap.fromTo(
    targets,
    { opacity: 0 },
    {
      opacity: 1,
      duration,
      delay,
      stagger,
      ease,
      scrollTrigger,
    }
  );
}

/**
 * Directional slide-in animation preset.
 */
export function slideIn(
  targets: gsap.DOMTarget,
  direction: "left" | "right" | "up" | "down" = "up",
  options: RevealOptions = {}
): gsap.core.Tween {
  if (isReducedMotion()) {
    return gsap.set(targets, { opacity: 1, x: 0, y: 0 });
  }

  const {
    duration = motionTokens.duration.normal,
    delay = 0,
    stagger = motionTokens.stagger.standard,
    distance = motionTokens.distance.md,
    ease = motionTokens.easing.standard,
    scrollTrigger,
  } = options;

  const xFrom =
    direction === "left" ? -distance : direction === "right" ? distance : 0;
  const yFrom =
    direction === "up" ? distance : direction === "down" ? -distance : 0;

  return gsap.fromTo(
    targets,
    { opacity: 0, x: xFrom, y: yFrom },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      stagger,
      ease,
      scrollTrigger,
    }
  );
}

/**
 * Subtle scale-in animation preset (e.g. for badges, cards, modals).
 */
export function scaleIn(
  targets: gsap.DOMTarget,
  options: RevealOptions = {}
): gsap.core.Tween {
  if (isReducedMotion()) {
    return gsap.set(targets, { opacity: 1, scale: 1 });
  }

  const {
    duration = motionTokens.duration.normal,
    delay = 0,
    ease = motionTokens.easing.standard,
    scrollTrigger,
  } = options;

  return gsap.fromTo(
    targets,
    { opacity: 0, scale: 0.95 },
    {
      opacity: 1,
      scale: 1,
      duration,
      delay,
      ease,
      scrollTrigger,
    }
  );
}

/**
 * Reusable card entrance stagger preset.
 */
export function staggerCards(
  targets: gsap.DOMTarget,
  options: RevealOptions = {}
): gsap.core.Tween {
  return fadeInUp(targets, {
    distance: motionTokens.distance.md,
    stagger: motionTokens.stagger.standard,
    ease: motionTokens.easing.standard,
    ...options,
  });
}

/**
 * Standard section entrance configuration for future section components.
 */
export function sectionReveal(
  container: HTMLElement | null,
  options: RevealOptions = {}
): gsap.core.Tween | null {
  if (!container) return null;

  if (isReducedMotion()) {
    return gsap.set(container, { opacity: 1, y: 0 });
  }

  const {
    duration = motionTokens.duration.slow,
    distance = motionTokens.distance.md,
    ease = motionTokens.easing.standard,
    delay = 0,
  } = options;

  return gsap.fromTo(
    container,
    { opacity: 0, y: distance },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        once: true,
      },
    }
  );
}
