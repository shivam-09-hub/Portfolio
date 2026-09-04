import React from "react";
import type { SkillItem } from "@/types/skill";
import { Card } from "@/components/ui/Card";
import {
  Layers,
  Code2,
  Sparkles,
  Database,
  Server,
  HardDrive,
  Cloud,
  Cpu,
  Globe,
  GitBranch,
  Terminal,
  CheckSquare,
  Lock,
  Zap,
} from "lucide-react";
import { cn } from "@/utils/helpers";

export interface SkillCardProps {
  skill: SkillItem;
  className?: string;
}

export function SkillCard({ skill, className }: SkillCardProps): React.JSX.Element {
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return <Layers className="w-4 h-4 text-accent-primary" />;
      case "Code2":
        return <Code2 className="w-4 h-4 text-accent-primary" />;
      case "Sparkles":
        return <Sparkles className="w-4 h-4 text-accent-primary" />;
      case "Database":
        return <Database className="w-4 h-4 text-accent-primary" />;
      case "Server":
        return <Server className="w-4 h-4 text-accent-primary" />;
      case "HardDrive":
        return <HardDrive className="w-4 h-4 text-accent-primary" />;
      case "Cloud":
        return <Cloud className="w-4 h-4 text-accent-primary" />;
      case "Cpu":
        return <Cpu className="w-4 h-4 text-accent-primary" />;
      case "Globe":
        return <Globe className="w-4 h-4 text-accent-primary" />;
      case "GitBranch":
        return <GitBranch className="w-4 h-4 text-accent-primary" />;
      case "Terminal":
        return <Terminal className="w-4 h-4 text-accent-primary" />;
      case "CheckSquare":
        return <CheckSquare className="w-4 h-4 text-accent-primary" />;
      case "Lock":
        return <Lock className="w-4 h-4 text-accent-primary" />;
      case "Zap":
        return <Zap className="w-4 h-4 text-accent-primary" />;
      default:
        return <Layers className="w-4 h-4 text-accent-primary" />;
    }
  };

  return (
    <Card
      variant="interactive"
      padding="sm"
      className={cn(
        "skill-card group relative flex flex-col justify-between border-border-subtle bg-bg-card/70 transition-all duration-300",
        "hover:-translate-y-1 hover:border-accent-primary/40 hover:bg-bg-card hover:shadow-card",
        skill.isPlaceholder && "border-dashed border-border-subtle/80",
        className
      )}
      tabIndex={0}
      aria-label={`${skill.name} - ${skill.context || skill.category}`}
    >
      {/* Cybernetic corner brackets on hover */}
      <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-accent-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
      <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-accent-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
      <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-accent-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
      <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-accent-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

      {/* Top Header: Icon & Pending Tag */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="w-8 h-8 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary/20 group-hover:border-accent-primary/40 group-hover:scale-105 transition-all duration-200 shrink-0">
          {getSkillIcon(skill.iconName)}
        </div>

        {skill.isPlaceholder && (
          <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted px-1.5 py-0.5 rounded bg-slate-200/50 dark:bg-white/5 border border-border-subtle">
            Pending Input
          </span>
        )}
      </div>

      {/* Title & Context */}
      <div className="flex flex-col gap-1 flex-1">
        <h4 className="text-sm font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-200 flex items-center gap-1.5">
          <span>{skill.name}</span>
          {skill.isPlaceholder && (
            <Sparkles className="w-3 h-3 text-accent-primary/60 opacity-60 group-hover:opacity-100 transition-opacity" />
          )}
        </h4>

        {skill.context && (
          <p className="text-[11px] font-mono text-accent-primary/80 leading-tight">
            {skill.context}
          </p>
        )}

        {skill.description && (
          <p className="text-xs text-text-secondary leading-relaxed mt-1 line-clamp-2">
            {skill.description}
          </p>
        )}
      </div>
    </Card>
  );
}
