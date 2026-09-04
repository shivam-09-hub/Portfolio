import React, { forwardRef, useCallback, useRef } from "react";
import { cn } from "@/utils/helpers";

export type CardVariant = "default" | "interactive" | "glass" | "flat";
export type CardPadding = "none" | "sm" | "md" | "lg";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  as?: "div" | "article" | "section";
  glowEffect?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      padding = "md",
      as = "div",
      glowEffect = true,
      children,
      onPointerMove,
      onPointerLeave,
      ...props
    },
    forwardedRef
  ) => {
    const Component = as;
    const internalRef = useRef<HTMLDivElement | null>(null);

    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        internalRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      },
      [forwardedRef]
    );

    const handlePointerMove = useCallback(
      (e: React.PointerEvent<HTMLDivElement>) => {
        if (variant === "interactive" && glowEffect && internalRef.current) {
          if (e.pointerType === "mouse") {
            const rect = internalRef.current.getBoundingClientRect();
            internalRef.current.style.setProperty(
              "--card-mouse-x",
              `${e.clientX - rect.left}px`
            );
            internalRef.current.style.setProperty(
              "--card-mouse-y",
              `${e.clientY - rect.top}px`
            );
          }
        }
        onPointerMove?.(e);
      },
      [variant, glowEffect, onPointerMove]
    );

    const handlePointerLeave = useCallback(
      (e: React.PointerEvent<HTMLDivElement>) => {
        if (variant === "interactive" && glowEffect && internalRef.current) {
          internalRef.current.style.setProperty("--card-mouse-x", "-999px");
          internalRef.current.style.setProperty("--card-mouse-y", "-999px");
        }
        onPointerLeave?.(e);
      },
      [variant, glowEffect, onPointerLeave]
    );

    const baseStyles =
      "rounded-card border transition-all duration-300 relative overflow-hidden group";

    const variantStyles: Record<CardVariant, string> = {
      default:
        "bg-bg-card border-border-subtle shadow-card text-text-primary",
      interactive:
        "bg-bg-card border-border-subtle shadow-card text-text-primary hover:-translate-y-1 hover:border-accent-primary/40 hover:shadow-cardHover cursor-pointer",
      glass:
        "glass-panel text-text-primary",
      flat:
        "bg-bg-secondary border-border-subtle text-text-primary",
    };

    const paddingStyles: Record<CardPadding, string> = {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8 md:p-10",
    };

    return (
      <Component
        ref={setRefs}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className={cn(baseStyles, variantStyles[variant], paddingStyles[padding], className)}
        {...props}
      >
        {variant === "interactive" && glowEffect && (
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 bg-[radial-gradient(350px_circle_at_var(--card-mouse-x,-999px)_var(--card-mouse-y,-999px),rgba(56,189,248,0.06),transparent_80%)]"
            aria-hidden="true"
          />
        )}
        {children}
      </Component>
    );
  }
);

Card.displayName = "Card";
