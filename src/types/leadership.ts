export interface LeadershipRole {
  id: string;
  organization: string;
  position: string;
  program?: string;
  status: "Current" | "Past Member";
  timeline: string;
  description: string;
  focus: string[];
  iconName: "Users" | "Globe" | "Target" | "Megaphone";
}
