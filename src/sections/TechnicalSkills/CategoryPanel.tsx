import React from "react";
import type { SkillCategory } from "@/types/skill";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SkillCard } from "./SkillCard";
import {
  Layers,
  Database,
  Cloud,
  Wrench,
  Globe,
  Sparkles,
} from "lucide-react";
import { cn } from "@/utils/helpers";

export interface CategoryPanelProps {
  category: SkillCategory;
  className?: string;
}

export function CategoryPanel({ category, className }: CategoryPanelProps): React.JSX.Element {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return <Layers className="w-5 h-5 text-accent-primary" />;
      case "Database":
        return <Database className="w-5 h-5 text-accent-primary" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-accent-primary" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-accent-primary" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-accent-primary" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-accent-primary" />;
      default:
        return <Layers className="w-5 h-5 text-accent-primary" />;
    }
  };

  return (
    <Card
      variant="default"
      padding="md"
      className={cn(
        "category-panel border-border-subtle bg-bg-card/40 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between hover:border-accent-primary/30",
        className
      )}
    >
      {/* Panel Header */}
      <div className="flex items-start justify-between gap-3 pb-4 mb-4 border-b border-border-subtle">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary shrink-0 shadow-sm">
            {getCategoryIcon(category.iconName)}
          </div>
          <div>
            <h3 className="text-base font-bold text-text-primary tracking-tight">
              {category.title}
            </h3>
            <p className="text-xs text-text-secondary line-clamp-1">
              {category.subtitle}
            </p>
          </div>
        </div>

        <Badge variant="accent" size="sm" className="shrink-0 font-mono text-[10px]">
          {category.badgeText}
        </Badge>
      </div>

      {/* Grid of Skill Cards within Category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {category.skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </Card>
  );
}
