import React from "react";

/**
 * RouteLoadingFallback
 *
 * Lightweight, non-blocking loading state rendered while a dynamically
 * imported page chunk is being fetched. Designed to prevent layout shifts (CLS)
 * and provide a smooth, subtle visual cue matching the dark/cyan aesthetic.
 */
export function RouteLoadingFallback(): React.JSX.Element {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
      className="w-full min-h-[60vh] flex flex-col items-center justify-center p-8 select-none"
    >
      {/* Subtle glowing pulse ring */}
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-accent-primary/20 border-t-accent-primary animate-spin" />
        <span className="absolute w-2 h-2 rounded-full bg-accent-primary shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
      </div>

      {/* Cybernetic loading label */}
      <div className="mt-4 flex items-center gap-2">
        <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
          Loading Page
        </span>
        <span className="w-1 h-1 rounded-full bg-accent-primary animate-ping" />
      </div>
    </div>
  );
}
