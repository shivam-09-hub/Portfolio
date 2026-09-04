import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          elevated: "var(--bg-elevated)",
          card: "var(--surface-card)",
          cardHover: "var(--surface-hover)",
        },
        surface: {
          card: "var(--surface-card)",
          hover: "var(--surface-hover)",
          elevated: "var(--bg-elevated)",
        },
        border: {
          subtle: "var(--border-subtle)",
          hover: "var(--border-hover)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        accent: {
          primary: "var(--accent-primary)",
          hover: "var(--accent-hover)",
          subtle: "var(--accent-subtle)",
          glow: "var(--accent-glow)",
        },
        status: {
          success: "var(--status-success)",
          active: "var(--status-active)",
          warning: "var(--status-warning)",
          error: "var(--status-error)",
        },
      },
      fontFamily: {
        sans: ["Inter", "Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "ui-monospace", "monospace"],
      },
      borderRadius: {
        badge: "6px",
        button: "10px",
        card: "16px",
        modal: "20px",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        cardHover: "var(--shadow-card-hover)",
        glow: "var(--shadow-glow)",
        innerHairline: "inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
      },
      maxWidth: {
        "7xl": "1280px",
        "5xl": "1024px",
        "3xl": "768px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
        snappy: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      transitionDuration: {
        fast: "200ms",
        normal: "400ms",
        slow: "800ms",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
} satisfies Config;
