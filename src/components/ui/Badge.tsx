import React from "react";
import { cn } from "@/utils/helpers";

export type BadgeVariant = "default" | "accent" | "success" | "warning" | "error" | "muted" | "outline";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  withDot?: boolean;
  pulseDot?: boolean;
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  withDot = false,
  pulseDot = false,
  children,
  ...props
}: BadgeProps): React.JSX.Element {
  const baseStyles =
    "inline-flex items-center font-mono rounded-badge transition-colors duration-200 select-none";

  const variantStyles: Record<BadgeVariant, { badge: string; dot: string }> = {
    default: {
      badge: "bg-slate-200/50 dark:bg-white/5 text-text-secondary border border-border-subtle",
      dot: "bg-text-secondary",
    },
    accent: {
      badge: "bg-accent-primary/10 text-accent-primary border border-accent-primary/25",
      dot: "bg-accent-primary",
    },
    success: {
      badge: "bg-status-success/10 text-status-success border border-status-success/25",
      dot: "bg-status-success",
    },
    warning: {
      badge: "bg-status-warning/10 text-status-warning border border-status-warning/25",
      dot: "bg-status-warning",
    },
    error: {
      badge: "bg-status-error/10 text-status-error border border-status-error/25",
      dot: "bg-status-error",
    },
    muted: {
      badge: "bg-bg-card text-text-muted border border-border-subtle",
      dot: "bg-text-muted",
    },
    outline: {
      badge: "bg-transparent text-text-primary border border-border-subtle",
      dot: "bg-text-primary",
    },
  };

  const sizeStyles: Record<BadgeSize, string> = {
    sm: "text-[11px] px-2 py-0.5 gap-1.5",
    md: "text-xs px-2.5 py-1 gap-2",
  };

  return (
    <span
      className={cn(baseStyles, variantStyles[variant].badge, sizeStyles[size], className)}
      {...props}
    >
      {withDot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full shrink-0",
            variantStyles[variant].dot,
            pulseDot && "animate-pulse"
          )}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
