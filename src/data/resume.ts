import type { ResumeData } from "@/types/resume";

/**
 * Resume Configuration & Content Data
 *
 * Official verified resume data extracted from Shivam Laxman Gaikwad's official signed resume PDF.
 * Physical asset: `public/resume/shivam-gaikwad-resume.pdf` (Verified & Available).
 */
export const resumeData: ResumeData = {
  fileName: "shivam-gaikwad-resume.pdf",
  filePath: "/resume/shivam-gaikwad-resume.pdf",
  fileAvailable: true,
  lastUpdated: "September 2026",
  candidateName: "Shivam Gaikwad",
  headline: "BCA Student & Aspiring Data Scientist",
  location: "Nagpur, Maharashtra, India",
  email: "shivamlgaikwad09@gmail.com",
  phone: "+91 8421140663",
  linkedin: "https://www.linkedin.com/in/shivamgaikwad09/",
  github: "https://github.com/shivam-09-hub",
  instagram: "https://www.instagram.com/__shivamgaikwad?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
  summary:
    "BCA student graduating in 2027 with hands-on experience in Python, SQL, Data Science, and Machine Learning. Driven by a career goal to become a Data Scientist, specializing in data analytics, predictive modeling, exploratory analysis, and database architecture. Consolation Prize winner at National-Level Hackathon (NIT Nagpur) and 2nd Prize winner at Open Innovation Tech Fest (YCCE Nagpur). Serving as Class Representative for 60+ students.",
  educationSummary:
    "Bachelor of Computer Applications (BCA) • JD College of Engineering and Management, Nagpur",
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "JD College of Engineering and Management, Nagpur",
      period: "2024 – 2027",
      details: "5th Semester | Batch of 2027",
      score: "CGPA: 9.33",
    },
    {
      degree: "12th Grade (HSC)",
      institution: "Shri Mathuradas Mohota College of Science, Nagpur",
      period: "2021 – 2023",
      details: "Higher Secondary Certificate (Science Stream)",
    },
    {
      degree: "10th Grade (SSC)",
      institution: "Green City High School, Nagpur",
      period: "2021",
      details: "Secondary School Certificate",
      score: "78%",
    },
  ],
  leadership: [
    "Class Representative (CR), JD College of Engineering and Management — Coordinated, managed, and served as the primary communication bridge between a batch of 60+ students and college management.",
    "Consolation Prize Winner, National Level Hackathon hosted by NIT Nagpur (NIT).",
    "2nd Prize Winner, Open Innovation Tech Fest (Inter-College Event) hosted by YCCE Nagpur.",
    "Technical Co-Head in Computer Application Forum.",
  ],
  technicalSkills: [
    {
      category: "Programming",
      skills: ["Python", "Java", "JavaScript", "C", "Dart"],
    },
    {
      category: "Development",
      skills: ["Flutter", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      category: "Backend & Database",
      skills: ["SQL", "PostgreSQL", "Supabase", "REST APIs"],
    },
    {
      category: "Data & Analytics",
      skills: ["Pandas", "NumPy", "Power BI", "Fundamental Data Science"],
    },
    {
      category: "Systems & Tools",
      skills: ["Linux", "Git", "GitHub"],
    },
  ],
  projects: [
    {
      title: "Smart Nagpur — Civic Services & Governance Platform",
      subtitle: "Flutter, Dart, Supabase, PostgreSQL",
      technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL", "REST APIs", "GPS Services"],
      points: [
        "Engineered a unified municipal governance platform featuring 3 dedicated apps: Citizen App (NGP Seva), Municipal Admin (NMC Command), and Field Staff (NMC FieldForce).",
        "Built end-to-end grievance lifecycles with GPS-located reporting, camera proofs, and native staff provisioning via secure PostgreSQL RPCs.",
        "Production-quality codebase verified with 0 flutter analyze issues and 119 automated tests.",
      ],
    },
    {
      title: "CampusHub — Offline Conflict-Free Timetable Generator",
      subtitle: "Flutter, Dart, Scheduling Algorithms, Excel Engine",
      technologies: ["Flutter", "Dart", "Algorithms", "Excel (.xlsx)", "SharedPreferences"],
      points: [
        "Built a 100% offline timetable generation mobile app for academic staff to create conflict-free schedules in 5 guided steps.",
        "Engineered a custom constraint-satisfaction scheduling algorithm preventing faculty and classroom double-booking.",
        "Integrated dual visualizations (Day Cards & Grid Table) and automated Excel (.xlsx) spreadsheet export.",
      ],
    },
    {
      title: "Phishing Shield — AI-Powered Phishing Detection Extension",
      subtitle: "JavaScript, Manifest V3, Chrome Extension APIs",
      technologies: ["JavaScript", "Manifest V3", "Chrome APIs", "HTML5/CSS3", "Cybersecurity"],
      points: [
        "Developed an AI-powered cybersecurity Chrome extension under Manifest V3 for a national-level hackathon.",
        "Engineered real-time website URL scanning, dynamic risk scoring, and multi-tab security scanning modes (Live Scan, Link Scanner, Email Guard).",
        "Crafted a responsive cyberpunk glassmorphic popup UI with instant visual threat indicators.",
      ],
    },
  ],
  languages: ["English", "Hindi", "Marathi"],
  highlights: [
    "Pursuing Bachelor of Computer Applications (BCA) at JD College of Engineering and Management, Nagpur with 9.33 CGPA (Batch of 2027).",
    "Consolation Prize Winner at National-Level Hackathon (NIT) & 2nd Prize Winner at Open Innovation Tech Fest (YCCE Nagpur).",
    "Serving as Class Representative (CR) for a batch of 60+ students and Technical Co-Head of the Computer Application Forum.",
    "Engineered CampusHub cross-platform college app with Flutter, Dart, Supabase, and PostgreSQL.",
    "Proficient in Python, Java, SQL, Flutter, and web development with strong interests in Data Science and AI.",
    "Completed 10th Grade with 78% and 12th Grade in Science at Shri Mathuradas Mohota College of Science.",
  ],
};
