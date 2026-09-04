export interface FocusArea {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface PersonalInfo {
  name: string;
  age: number;
  dob?: string;
  role: string;
  status: string;
  tagline: string;
  bio: string[];
  location: string;
  avatarPlaceholder: string;
  highlights?: string[];
  focusAreas?: FocusArea[];
  quickFacts?: QuickFact[];
}
