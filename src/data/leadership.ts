import type { LeadershipRole } from "@/types/leadership";

/**
 * Leadership & Campus Involvement Data
 *
 * College leadership, technical community, and student departmental roles
 * for Shivam Laxman Gaikwad at JD College of Engineering and Management.
 */
export const leadershipRolesData: LeadershipRole[] = [
  {
    id: "role-cr-bca",
    organization: "Class Representative — BCA",
    position: "Class Representative (CR)",
    program: "BCA",
    status: "Current",
    timeline: "2024 – 2027",
    description:
      "Currently serving as the Class Representative of BCA, helping coordinate communication between students and faculty and supporting student coordination.",
    focus: [
      "Leadership",
      "Communication",
      "Student Coordination",
      "Faculty Coordination",
    ],
    iconName: "Users",
  },
  {
    id: "role-gdg",
    organization: "Google Developer Groups (GDG)",
    position: "Member",
    status: "Past Member",
    timeline: "2025 – 2026",
    description:
      "Served as a member of the Google Developer Groups chapter at my college, participating in the developer community and gaining exposure to technology-focused activities.",
    focus: [
      "Developer Community",
      "Technical Learning",
      "Community Participation",
      "Technology Exposure",
    ],
    iconName: "Globe",
  },
  {
    id: "role-cec",
    organization: "CEC — Competitive Exam Cell",
    position: "Technical Member",
    status: "Past Member",
    timeline: "2025 – 2026",
    description:
      "Served as a Technical Member of the Competitive Exam Cell at my college, supporting student activities and technical initiatives.",
    focus: [
      "Technical Involvement",
      "Team Collaboration",
      "Student Activities",
      "Technical Support",
    ],
    iconName: "Target",
  },
  {
    id: "role-dept-forum",
    organization: "Department Forum",
    position: "Non-Technical Co-Head",
    status: "Past Member",
    timeline: "2025 – 2026",
    description:
      "Served as the Non-Technical Co-Head of my department forum, contributing to coordination, student engagement and departmental activities.",
    focus: [
      "Leadership",
      "Team Coordination",
      "Communication",
      "Student Engagement",
      "Activity Coordination",
    ],
    iconName: "Megaphone",
  },
];
