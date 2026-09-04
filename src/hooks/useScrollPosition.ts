import { useState, useEffect } from "react";

export interface ScrollPosition {
  scrollY: number;
  isScrolled: boolean;
  scrollDirection: "up" | "down" | null;
}

/**
 * Highly optimized hook for components that only need to know whether the
 * window has scrolled past a specific pixel threshold (e.g. Navbar styling).
 *
 * Performance guarantee:
 * Triggers exactly ONE React re-render when threshold is crossed, and ZERO
 * re-renders during continuous scrolling.
 */
export function useIsScrolled(threshold: number = 20): boolean {
  const [isScrolled, setIsScrolled] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.scrollY > threshold;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > threshold;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}

/**
 * Hook to track window scroll position, scroll threshold, and scroll direction.
 * Uses requestAnimationFrame and delta dampening to avoid frame-by-frame re-renders.
 */
export function useScrollPosition(threshold: number = 50): ScrollPosition {
  const [scrollState, setScrollState] = useState<ScrollPosition>(() => ({
    scrollY: typeof window !== "undefined" ? window.scrollY : 0,
    isScrolled: typeof window !== "undefined" ? window.scrollY > threshold : false,
    scrollDirection: null,
  }));

  useEffect(() => {
    if (typeof window === "undefined") return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const direction =
        currentScrollY > lastScrollY
          ? "down"
          : currentScrollY < lastScrollY
          ? "up"
          : null;
      const scrolled = currentScrollY > threshold;

      setScrollState((prev) => {
        if (
          prev.isScrolled !== scrolled ||
          prev.scrollDirection !== direction ||
          Math.abs(prev.scrollY - currentScrollY) >= 25
        ) {
          return {
            scrollY: currentScrollY,
            isScrolled: scrolled,
            scrollDirection: direction,
          };
        }
        return prev;
      });

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrollState;
}
