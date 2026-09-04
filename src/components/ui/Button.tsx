import React, { forwardRef } from "react";
import { cn } from "@/utils/helpers";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "accent";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      isLoading = false,
      disabled,
      children,
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-button transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none";

    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        "bg-accent-primary text-white dark:text-bg-primary font-semibold hover:bg-accent-hover shadow-sm dark:shadow-glow hover:shadow-md dark:hover:shadow-[0_0_30px_-3px_rgba(56,189,248,0.45)] border border-transparent",
      accent:
        "bg-accent-primary text-white dark:text-bg-primary font-semibold hover:bg-accent-hover border border-transparent",
      secondary:
        "bg-surface-card hover:bg-surface-hover text-text-primary border border-border-subtle hover:border-accent-primary/40 shadow-sm",
      outline:
        "bg-transparent text-text-primary border border-border-subtle hover:border-accent-primary hover:text-accent-primary hover:bg-accent-primary/5",
      ghost:
        "bg-transparent text-text-secondary hover:text-text-primary hover:bg-slate-200/60 dark:hover:bg-white/5 border border-transparent",
    };

    const sizeStyles: Record<ButtonSize, string> = {
      sm: "text-xs px-3 py-1.5 min-h-[32px] gap-1.5",
      md: "text-sm px-4 py-2.5 min-h-[44px] gap-2", // 44px min touch target
      lg: "text-base px-6 py-3 min-h-[48px] gap-2.5",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : (
          leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? rel || "noopener noreferrer" : rel}
          className={combinedClassName}
          aria-disabled={disabled}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
