export type ProgrammingLanguageCategory = "core" | "web" | "systems" | "data" | "general";

export type ProgrammingProficiency = "Experienced" | "Comfortable" | "Exploring" | "Foundational";

export interface ProgrammingLanguage {
  id: string;
  name: string;
  category: ProgrammingLanguageCategory;
  proficiency: ProgrammingProficiency;
  description?: string;
  context?: string;
  icon?: string;
  isPlaceholder?: boolean;
}
