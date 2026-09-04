import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * AmbientPointerGlow
 *
 * Provides a subtle, hardware-accelerated radial spotlight that smoothly follows
 * the user's cursor across the viewport.
 *
 * Performance & Accessibility:
 * - Strictly pointer-events-none (never intercepts clicks, text selection, or focus).
 * - Updates coordinates via requestAnimationFrame for 60 FPS fluidity.
 * - Completely disabled on touch/mobile devices (hover: none) and when
 *   prefers-reduced-motion is active.
 */
export function AmbientPointerGlow(): React.JSX.Element | null {
  const [mounted, setMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    // Check if the primary input is touch
    const isTouch = window.matchMedia("(hover: none)").matches;
    setIsTouchDevice(isTouch);

    if (isTouch || reducedMotion) return;

    let rafId: number;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    const handlePointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updatePosition = () => {
      // Smooth linear interpolation (lerp: 0.15) for silky motion damping
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX - 300}px, ${currentY - 300}px, 0)`;
        glowRef.current.style.opacity = currentX > 0 ? "1" : "0";
      }

      rafId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  if (!mounted || isTouchDevice || reducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-[1] select-none"
    >
      <div
        ref={glowRef}
        className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05)_0%,rgba(56,189,248,0.015)_40%,transparent_70%)] blur-2xl transition-opacity duration-500 will-change-transform"
        style={{ transform: "translate3d(-1000px, -1000px, 0)", opacity: 0 }}
      />
    </div>
  );
}
