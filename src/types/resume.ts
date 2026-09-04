export interface ResumeEducation {
  degree: string;
  institution: string;
  period: string;
  details?: string;
  score?: string;
}

export interface ResumeSkillCategory {
  category: string;
  skills: string[];
}

export interface ResumeProject {
  title: string;
  subtitle?: string;
  technologies: string[];
  points: string[];
}

export interface ResumeData {
  fileName: string;
  filePath: string;
  fileAvailable: boolean;
  lastUpdated: string;
  candidateName: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  instagram?: string;
  summary: string;
  educationSummary: string;
  education: ResumeEducation[];
  leadership: string[];
  technicalSkills: ResumeSkillCategory[];
  projects: ResumeProject[];
  languages: string[];
  highlights: string[];
}
