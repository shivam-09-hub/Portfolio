/**
 * Central Design Tokens Specification
 * Source: Design.md (§30)
 * Single source of truth for colors, typography, spacing, radii, shadows, and motion.
 */

export const designTokens = {
  colors: {
    bg: {
      primary: "#07090E", // Deep Obsidian Void
      secondary: "#0D111C", // Dark Slate Surface
      card: "#131926", // Elevated Card Surface
      cardHover: "#192338", // Elevated Card Hover
    },
    border: {
      subtle: "rgba(148, 163, 184, 0.08)",
      hover: "rgba(56, 189, 248, 0.35)",
    },
    text: {
      primary: "#F8FAFC", // Crisp Light Slate (WCAG AAA)
      secondary: "#94A3B8", // Slate 400
      muted: "#64748B", // Slate 500
    },
    accent: {
      primary: "#38BDF8", // Electric Sky Cyan 400
      hover: "#0EA5E9", // Sky Cyan 500
      glow: "rgba(56, 189, 248, 0.15)",
    },
    status: {
      success: "#10B981", // Emerald 500
      active: "#38BDF8", // Cyan 400
      warning: "#F59E0B", // Amber 500
      error: "#EF4444", // Rose 500
    },
  },
  typography: {
    fontFamily: {
      sans: ["Inter", "Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
      mono: ["JetBrains Mono", "Fira Code", "ui-monospace", "monospace"],
    },
    scale: {
      display: { fontSize: "3.75rem", lineHeight: "1.1", fontWeight: "800" }, // 60px
      h1: { fontSize: "2.5rem", lineHeight: "1.15", fontWeight: "800" }, // 40px
      h2: { fontSize: "2.25rem", lineHeight: "1.2", fontWeight: "700" }, // 36px
      h3: { fontSize: "1.375rem", lineHeight: "1.3", fontWeight: "600" }, // 22px
      subheading: { fontSize: "1.125rem", lineHeight: "1.4", fontWeight: "500" }, // 18px
      bodyLarge: { fontSize: "1.125rem", lineHeight: "1.6", fontWeight: "400" }, // 18px
      bodyBase: { fontSize: "1.0rem", lineHeight: "1.6", fontWeight: "400" }, // 16px
      small: { fontSize: "0.875rem", lineHeight: "1.5", fontWeight: "400" }, // 14px
      monoMeta: { fontSize: "0.875rem", lineHeight: "1.4", fontWeight: "500" }, // 14px
      caption: { fontSize: "0.75rem", lineHeight: "1.4", fontWeight: "400" }, // 12px
    },
  },
  radii: {
    badge: "6px",
    button: "10px",
    card: "16px",
    modal: "20px",
    full: "9999px",
  },
  shadows: {
    card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
    cardHover: "0 20px 40px -15px rgba(56, 189, 248, 0.15)",
    glow: "0 0 25px -5px rgba(56, 189, 248, 0.3)",
    innerHairline: "inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
  },
  motion: {
    duration: {
      instant: "0.1s",
      fast: "0.2s", // Micro-interactions (hover, active click)
      normal: "0.4s", // UI transitions, dropdowns, tabs
      slow: "0.8s", // Major section reveals, hero entrance
    },
    easing: {
      standard: "power3.out",
      snappy: "power2.out",
      smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
    },
    stagger: 0.08, // Stagger offset between sequential items
  },
  breakpoints: {
    mobile: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
} as const;

export type DesignTokens = typeof designTokens;
