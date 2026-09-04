/**
 * Motion System Foundation Tokens
 * Source: Design.md (§21) & Architecture.md (§7)
 */

export const motionTokens = {
  duration: {
    instant: 0.1,
    fast: 0.2, // Button clicks, quick hover transitions
    normal: 0.4, // Modal, accordion, drawer animations
    slow: 0.8, // Section entrance, timeline line progression
    hero: 1.0, // Hero entrance sequence
  },
  easing: {
    standard: "power3.out",
    snappy: "power2.out",
    smooth: "expo.out",
    bounceSubtle: "back.out(1.2)",
  },
  stagger: {
    tight: 0.04,
    standard: 0.08,
    relaxed: 0.12,
  },
  distance: {
    sm: 12,
    md: 24,
    lg: 48,
  },
} as const;

export type MotionTokens = typeof motionTokens;
