import { useEffect, useRef } from "react";
import { gsap } from "@/animations/gsap";
import { useReducedMotion } from "./useReducedMotion";
import { motionTokens } from "@/animations/tokens";

export interface ScrollRevealConfig {
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  selector?: string; // Optional child selector to animate inside the ref container
  once?: boolean;
  start?: string;
  ease?: string;
}

/**
 * Custom React hook that sets up a GSAP ScrollTrigger reveal animation.
 * Automatically cleans up ScrollTrigger instances on unmount and respects reduced motion.
 */
export function useScrollReveal<T extends HTMLElement>(
  config: ScrollRevealConfig = {}
) {
  const elementRef = useRef<T>(null);
  const prefersReducedMotion = useReducedMotion();

  const {
    direction = "up",
    distance = motionTokens.distance.md,
    duration = motionTokens.duration.slow,
    delay = 0,
    stagger = 0,
    selector,
    once = true,
    start = "top 85%",
    ease = motionTokens.easing.standard,
  } = config;

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Respect reduced motion: set final state immediately
    if (prefersReducedMotion) {
      if (selector) {
        gsap.set(el.querySelectorAll(selector), { opacity: 1, x: 0, y: 0, scale: 1 });
      } else {
        gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 });
      }
      return;
    }

    const xFrom =
      direction === "left" ? -distance : direction === "right" ? distance : 0;
    const yFrom =
      direction === "up" ? distance : direction === "down" ? -distance : 0;

    const ctx = gsap.context(() => {
      const targets = selector ? el.querySelectorAll(selector) : el;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          x: xFrom,
          y: yFrom,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          stagger: stagger > 0 ? stagger : undefined,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            once,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, [
    prefersReducedMotion,
    direction,
    distance,
    duration,
    delay,
    stagger,
    selector,
    once,
    start,
    ease,
  ]);

  return elementRef;
}
