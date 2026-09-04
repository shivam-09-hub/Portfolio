import type { ProgrammingLanguage } from "@/types/programming";

/**
 * Programming Languages Data
 *
 * Official verified programming languages from Shivam Laxman Gaikwad's resume.
 * Categorized qualitatively with zero arbitrary percentage meters.
 */
export const programmingLanguagesData: ProgrammingLanguage[] = [
  {
    id: "lang-python",
    name: "Python",
    category: "data",
    proficiency: "Experienced",
    description: "Core language used for data analytics, dataset processing with Pandas & NumPy, backend logic, and AI explorations.",
    context: "Data Science, Analytics, Automation, and Backend Logic.",
    icon: "Code2",
    isPlaceholder: false,
  },
  {
    id: "lang-java",
    name: "Java",
    category: "systems",
    proficiency: "Experienced",
    description: "Robust object-oriented language leveraged for computational algorithms, clean design patterns, and enterprise software principles.",
    context: "Object-Oriented Programming, Data Structures, and Enterprise Systems.",
    icon: "Cpu",
    isPlaceholder: false,
  },
  {
    id: "lang-javascript",
    name: "JavaScript",
    category: "web",
    proficiency: "Experienced",
    description: "Primary client-side language powering interactive web applications, responsive user interfaces, and asynchronous REST APIs.",
    context: "Modern Web Interfaces, Asynchronous APIs, and Client Applications.",
    icon: "FileCode2",
    isPlaceholder: false,
  },
  {
    id: "lang-dart",
    name: "Dart (Flutter)",
    category: "web",
    proficiency: "Experienced",
    description: "Client-optimized programming language used with Flutter to build cross-platform mobile and desktop applications like CampusHub.",
    context: "Cross-Platform Mobile Apps, Flutter Framework, State Management.",
    icon: "Terminal",
    isPlaceholder: false,
  },
  {
    id: "lang-c",
    name: "C",
    category: "core",
    proficiency: "Comfortable",
    description: "Foundational procedural programming language providing rigorous mastery of memory pointers, low-level architecture, and algorithmic complexity.",
    context: "Computer Science Foundations, Algorithmic Logic, and System Primitives.",
    icon: "Binary",
    isPlaceholder: false,
  },
  {
    id: "lang-sql",
    name: "SQL (PostgreSQL)",
    category: "data",
    proficiency: "Experienced",
    description: "Relational database querying, schema modeling, transactional integrity, and cloud backend data integration with Supabase.",
    context: "Relational Database Modeling, Schema Optimization, and Supabase.",
    icon: "Braces",
    isPlaceholder: false,
  },
];

export const programmingCategories = [
  { id: "all", label: "All Languages" },
  { id: "data", label: "Data & Analytics" },
  { id: "systems", label: "Systems & OOP" },
  { id: "web", label: "Web & Mobile" },
  { id: "core", label: "Core & Algorithms" },
] as const;
