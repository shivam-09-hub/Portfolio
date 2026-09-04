import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/utils/helpers";

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps): React.JSX.Element {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative w-10 h-10 min-w-[40px] min-h-[40px] rounded-xl border border-border-subtle bg-bg-card hover:bg-bg-cardHover text-text-secondary hover:text-text-primary flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary shrink-0 shadow-sm active:scale-95 select-none",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="sr-only">
        {isDark ? "Activate light mode" : "Activate dark mode"}
      </span>

      {/* Sun Icon (shown in dark mode to indicate switching to light) */}
      <Sun
        className={cn(
          "w-4 h-4 text-amber-400 transition-all duration-300 absolute",
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        )}
        aria-hidden="true"
      />

      {/* Moon Icon (shown in light mode to indicate switching to dark) */}
      <Moon
        className={cn(
          "w-4 h-4 text-sky-600 transition-all duration-300 absolute",
          !isDark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        )}
        aria-hidden="true"
      />
    </button>
  );
}
