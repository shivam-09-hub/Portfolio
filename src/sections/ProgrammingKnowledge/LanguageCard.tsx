import React from "react";
import type { ProgrammingLanguage } from "@/types/programming";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Code2,
  FileCode2,
  Terminal,
  Braces,
  Cpu,
  Binary,
  Layers,
  Sparkles,
} from "lucide-react";
import { cn } from "@/utils/helpers";

export interface LanguageCardProps {
  language: ProgrammingLanguage;
  className?: string;
}

export function LanguageCard({ language, className }: LanguageCardProps): React.JSX.Element {
  const getLanguageIcon = (iconName?: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-accent-primary" />;
      case "FileCode2":
        return <FileCode2 className="w-5 h-5 text-accent-primary" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-accent-primary" />;
      case "Braces":
        return <Braces className="w-5 h-5 text-accent-primary" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-accent-primary" />;
      case "Binary":
        return <Binary className="w-5 h-5 text-accent-primary" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-accent-primary" />;
      default:
        return <Code2 className="w-5 h-5 text-accent-primary" />;
    }
  };

  const getProficiencyBadge = (proficiency: string) => {
    switch (proficiency) {
      case "Experienced":
        return (
          <Badge variant="accent" size="sm" withDot>
            {proficiency}
          </Badge>
        );
      case "Comfortable":
        return (
          <Badge variant="default" size="sm" withDot>
            {proficiency}
          </Badge>
        );
      case "Exploring":
        return (
          <Badge variant="warning" size="sm" withDot>
            {proficiency}
          </Badge>
        );
      case "Foundational":
      default:
        return (
          <Badge variant="muted" size="sm">
            {proficiency}
          </Badge>
        );
    }
  };

  return (
    <Card
      variant="interactive"
      padding="none"
      className={cn(
        "language-card group relative flex flex-col justify-between border-border-subtle bg-bg-card/90 transition-all duration-300 p-4 sm:p-6",
        "hover:-translate-y-1 hover:border-accent-primary/40 hover:shadow-cardHover",
        language.isPlaceholder && "border-dashed border-border-subtle/80",
        className
      )}
      tabIndex={0}
      aria-label={`${language.name} - ${language.proficiency}`}
    >
      {/* Cybernetic corner brackets */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-accent-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-accent-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-accent-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-accent-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

      {/* Top Bar: Icon & Qualitative Proficiency Badge */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="w-11 h-11 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center group-hover:bg-accent-primary/20 group-hover:border-accent-primary/40 group-hover:scale-105 transition-all duration-200 shrink-0">
          {getLanguageIcon(language.icon)}
        </div>

        <div className="flex flex-col items-end gap-1.5">
          {getProficiencyBadge(language.proficiency)}
          {language.isPlaceholder && (
            <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted px-1.5 py-0.5 rounded bg-slate-200/50 dark:bg-white/5 border border-border-subtle">
              Pending Input
            </span>
          )}
        </div>
      </div>

      {/* Content Body: Name, Context, Description */}
      <div className="flex flex-col gap-2 flex-1">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-200 flex items-center gap-1.5">
            <span>{language.name}</span>
            {language.isPlaceholder && (
              <Sparkles className="w-3.5 h-3.5 text-accent-primary/70 opacity-60 group-hover:opacity-100 transition-opacity" />
            )}
          </h3>

          {language.context && (
            <p className="text-xs font-mono text-accent-primary/80 mt-1 leading-normal">
              {language.context}
            </p>
          )}
        </div>

        {language.description && (
          <p className="text-xs text-text-secondary leading-relaxed mt-1 line-clamp-3">
            {language.description}
          </p>
        )}
      </div>

      {/* Card Footer: Category Tag & Status */}
      <div className="pt-3 border-t border-border-subtle mt-4 flex items-center justify-between text-[11px] font-mono text-text-muted">
        <span className="uppercase tracking-wider">
          #{language.category}
        </span>
        <span className="text-[10px] text-text-muted/80">
          Qualitative Metric
        </span>
      </div>
    </Card>
  );
}
