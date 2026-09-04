export interface SkillItem {
  id: string;
  name: string;
  category: string;
  iconName: string;
  description?: string;
  context?: string;
  isPlaceholder?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  badgeText: string;
  skills: SkillItem[];
}
