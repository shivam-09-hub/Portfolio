export interface CertificateItem {
  id: string;
  certificateNumber: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  skills: string[];
  image: string;
  verificationUrl?: string;
  credentialId?: string;
  description?: string;
  isPlaceholder?: boolean;
}

export type CertificateCategory =
  | "Competitions & Hackathons"
  | "Leadership & Events"
  | "Creative & Awareness"
  | "Sports & Fitness";

export type CertificateCategoryFilter = "all" | CertificateCategory;
