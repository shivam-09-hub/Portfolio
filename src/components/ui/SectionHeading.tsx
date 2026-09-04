import React from "react";
import { cn } from "@/utils/helpers";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  className,
  eyebrow,
  title,
  subtitle,
  align = "left",
  as = "h2",
  ...props
}: SectionHeadingProps): React.JSX.Element {
  const HeadingTag = as;

  return (
    <div
      className={cn(
        "flex flex-col gap-2 max-w-3xl",
        align === "center" ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs text-accent-primary font-semibold tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0" />
          <span className="break-words">{eyebrow}</span>
        </div>
      )}

      <HeadingTag className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary break-words">
        {title}
      </HeadingTag>

      {subtitle && (
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
