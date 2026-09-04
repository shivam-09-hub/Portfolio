export type EducationStatus = "completed" | "current" | "pivot";

export interface EducationItem {
  id: string;
  period: string;
  level: string;
  institution: string;
  location: string;
  description: string;
  status: EducationStatus;
  statusLabel: string;
  image?: string;
  imageAlt?: string;
  grade?: string;
  batch?: string;
}
