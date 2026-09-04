import type { ProjectItem } from "@/types/project";

/**
 * Projects Data Architecture — Verified Production Repositories
 *
 * Confirmed open-source GitHub repositories authored by Shivam Laxman Gaikwad:
 * 1. Smart Nagpur — Civic Services & Governance Platform (Flutter, Dart, Supabase, PostgreSQL)
 * 2. CampusHub — Offline Conflict-Free Timetable Generator (Flutter, Dart, Algorithms, Excel)
 * 3. Phishing Shield — AI-Powered Phishing Detection Extension (JavaScript, Manifest V3, Chrome APIs)
 */
export const projectsData: ProjectItem[] = [
  {
    id: "project-smart-nagpur",
    projectNumber: "01",
    title: "Smart Nagpur — Civic Services & Governance Platform",
    category: "Full-Stack & Mobile Platform",
    shortDescription:
      "Unified civic services, municipal governance, and on-ground field resolution platform for Nagpur featuring three interconnected apps backed by Supabase.",
    description:
      "A comprehensive municipal governance and citizen services platform developed for Nagpur. The architecture features three specialized applications (Citizen App 'NGP Seva', Municipal Admin App 'NMC Command', and Field Staff App 'NMC FieldForce') operating over a shared PostgreSQL database and private Supabase storage buckets. Delivers an end-to-end grievance lifecycle with GPS tagging, before/after resolution photo proofs, real-time status tracking, and native staff provisioning via PostgreSQL RPC.",
    problem:
      "Municipal civic administration frequently suffers from delays, communication gaps between citizens and field crews, lack of transparent tracking, and paper-heavy verification queues for complaints and vendor permits.",
    features: [
      "Engineered 3 dedicated application flavors: Citizen App (NGP Seva), Municipal Admin (NMC Command), and Field Staff (NMC FieldForce).",
      "Multi-tier lifecycle: GPS-located reporting with camera proofs → Admin triage & assignment → Field worker GPS dispatch with photo evidence → Admin resolution verification → Instant citizen update.",
      "Native staff provisioning via secure PostgreSQL RPC (admin_create_staff_account) with automated token normalization.",
      "Digital street vendor permitting and document upload workflows backed by private Supabase storage buckets.",
      "Universal device-local timezone formatting in IST across all domain models.",
      "Production-ready codebase verified with 0 flutter analyze issues and 119 automated tests.",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Supabase",
      "PostgreSQL",
      "REST APIs",
      "GPS & Location Services",
      "GoTrue Auth",
    ],
    contribution:
      "Architected the shared multi-app domain model, designed the relational PostgreSQL schema and security RPCs, integrated Supabase auth & private storage buckets, and built real-time grievance tracking workflows.",
    screenshots: [],
    status: "Completed",
    isFeatured: true,
    isPlaceholder: false,
    githubUrl: "https://github.com/shivam-09-hub/Smart-Nagpur",
    architectureNotes:
      "Multi-flavor Flutter architecture with shared domain layers, PostgreSQL RPC execution, and Supabase storage bucket security policies.",
  },
  {
    id: "project-campushub",
    projectNumber: "02",
    title: "CampusHub — Offline Conflict-Free Timetable Generator",
    category: "Mobile Application & Systems",
    shortDescription:
      "Flutter mobile application enabling academic staff to generate conflict-free class timetables in 5 guided steps with offline storage and Excel (.xlsx) export.",
    description:
      "An intelligent academic scheduling application engineered for non-technical school and college department coordinators to generate conflict-free class timetables without requiring technical expertise. Powered by a custom constraint-satisfaction scheduling algorithm, it prevents faculty and classroom double-booking, distributes workload evenly across working days, supports local offline persistence via SharedPreferences, and exports production-grade Excel (.xlsx) spreadsheets.",
    problem:
      "Academic institutions spend days manually drafting semester timetables, constantly struggling to balance teacher availability, subject weekly quotas, and room capacities without accidental double-booking.",
    features: [
      "100% offline timetable generation — operates completely without internet connectivity on Android devices.",
      "Custom constraint-satisfaction scheduling algorithm in timetable_generator.dart eliminating faculty and classroom double-booking.",
      "5-step guided wizard with visual progress bar (Basic Details → Subjects → Classrooms → Faculty Availability → Review & Generate).",
      "Dual timetable visualizations: intuitive Day Card View and comprehensive full Grid Table View.",
      "Direct Excel export (.xlsx) structured with days as rows and time slots as columns, ready for instant sharing via WhatsApp or Email.",
      "Local persistence with SharedPreferences allowing coordinators to save, reload, or modify schedules anytime.",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Scheduling Algorithm",
      "Excel (.xlsx) Generation",
      "SharedPreferences",
      "Android SDK",
    ],
    contribution:
      "Designed and implemented the core constraint-based scheduling algorithm, built the 5-step guided wizard interface, integrated the Excel export pipeline, and handled local data persistence.",
    screenshots: [],
    status: "Completed",
    isFeatured: false,
    isPlaceholder: false,
    githubUrl: "https://github.com/shivam-09-hub/CampusHub",
    architectureNotes:
      "Modular client architecture with decoupled models, scheduling engine, Excel generator service, and local device storage.",
  },
  {
    id: "project-phishing-shield",
    projectNumber: "03",
    title: "Phishing Shield — AI-Powered Phishing Detection Extension",
    category: "Cybersecurity & Developer Tooling",
    shortDescription:
      "AI-powered cybersecurity browser extension providing real-time URL scanning, domain risk scoring, and email threat detection built on Manifest V3.",
    description:
      "An AI-powered cybersecurity Chrome extension developed for a competitive national hackathon to protect everyday internet users against fraudulent phishing websites, spoofed domains, and credential-harvesting emails. Built strictly under Chrome's Manifest V3 architecture with activeTab scripting, dynamic risk score computation, a sleek cyberpunk glassmorphic popup UI, and multi-tab security scanning modes.",
    problem:
      "Online users and students are increasingly targeted by deceptive phishing links, cloned banking/login portals, and social engineering emails that bypass traditional browser warnings.",
    features: [
      "Manifest V3 browser extension built with activeTab and scripting permissions for real-time in-browser protection.",
      "Real-time URL and domain risk scoring engine evaluating suspicious domain patterns, deceptive characters, and structural anomalies.",
      "Multi-mode security scanning tabs: Live Scan for active web pages, Link Scanner for suspect URLs, and Email Guard for phishing emails.",
      "Cyberpunk glassmorphic popup UI designed with glowing cyber grid indicators, badge alerts, and dynamic risk meters.",
      "Instant visual threat warnings giving users immediate risk clarity before submitting sensitive credentials.",
    ],
    technologies: [
      "JavaScript (ES6+)",
      "Manifest V3",
      "Chrome Extension APIs",
      "HTML5 / CSS3",
      "Cybersecurity Heuristics",
      "Cyberpunk UI Design",
    ],
    contribution:
      "Built the Manifest V3 extension architecture, engineered URL pattern evaluation and risk scoring routines, crafted the responsive cyberpunk popup interface, and implemented active tab script injection.",
    screenshots: [],
    status: "Completed",
    isFeatured: false,
    isPlaceholder: false,
    githubUrl: "https://github.com/shivam-09-hub/Phishing-Shield",
    architectureNotes:
      "Event-driven Chrome Manifest V3 architecture with modular popup scripts, tab query APIs, and defensive security heuristics.",
  },
];
