import type { SkillCategory } from "@/types/skill";

/**
 * Technical Skills Data
 *
 * NOTE: The final verified list of specific technologies and frameworks is awaiting
 * candidate confirmation as documented in PRD.md §5.5 and Design.md §12.
 *
 * This data layer organizes technical skills into 6 clean, extensible categories.
 * Each entry provides structured metadata (name, context, category, icon) with zero
 * fabricated proficiency percentages.
 *
 * To update: simply replace the placeholder slots with Shivam's confirmed technologies
 * (e.g., React, Express, MongoDB, PostgreSQL, Git, Docker, Postman, Vercel) and set
 * isPlaceholder: false.
 */
export const technicalSkillCategories: SkillCategory[] = [
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    subtitle: "Component systems, UI frameworks, and application architectures",
    iconName: "Layers",
    badgeText: "Architecture",
    skills: [
      {
        id: "skill-fw-1",
        name: "Framework Slot 01",
        category: "frameworks",
        iconName: "Layers",
        context: "Modern Component Architecture",
        description: "Primary client-side component framework slot awaiting candidate's confirmed library roster.",
        isPlaceholder: true,
      },
      {
        id: "skill-fw-2",
        name: "Framework Slot 02",
        category: "frameworks",
        iconName: "Code2",
        context: "Application State & Routing",
        description: "Full-stack / server runtime or web application framework slot awaiting specification.",
        isPlaceholder: true,
      },
      {
        id: "skill-fw-3",
        name: "Framework Slot 03",
        category: "frameworks",
        iconName: "Sparkles",
        context: "Motion & User Experience",
        description: "Animation, micro-interaction, or utility styling framework slot awaiting specification.",
        isPlaceholder: true,
      },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    subtitle: "Relational persistence, document stores, and schema modeling",
    iconName: "Database",
    badgeText: "Persistence",
    skills: [
      {
        id: "skill-db-1",
        name: "Database Slot 01",
        category: "databases",
        iconName: "Database",
        context: "Relational Data Modeling",
        description: "Relational SQL database engine slot awaiting candidate's confirmed database technologies.",
        isPlaceholder: true,
      },
      {
        id: "skill-db-2",
        name: "Database Slot 02",
        category: "databases",
        iconName: "Server",
        context: "Document / NoSQL Storage",
        description: "Document-oriented or key-value storage system slot awaiting specification.",
        isPlaceholder: true,
      },
      {
        id: "skill-db-3",
        name: "Database Slot 03",
        category: "databases",
        iconName: "HardDrive",
        context: "Query Optimization & ORM",
        description: "Database abstraction, schema migration, or query tooling slot awaiting specification.",
        isPlaceholder: true,
      },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Deployment",
    subtitle: "Hosting environments, modern edge runtimes, and continuous deployment",
    iconName: "Cloud",
    badgeText: "Infrastructure",
    skills: [
      {
        id: "skill-cloud-1",
        name: "Platform Slot 01",
        category: "cloud",
        iconName: "Cloud",
        context: "Edge Deployment & Hosting",
        description: "Frontend edge hosting or cloud application platform slot awaiting candidate's input.",
        isPlaceholder: true,
      },
      {
        id: "skill-cloud-2",
        name: "Platform Slot 02",
        category: "cloud",
        iconName: "Cpu",
        context: "Containerization & Runtimes",
        description: "Cloud compute, serverless runtimes, or container ecosystem slot awaiting specification.",
        isPlaceholder: true,
      },
      {
        id: "skill-cloud-3",
        name: "Platform Slot 03",
        category: "cloud",
        iconName: "Globe",
        context: "DNS & Content Delivery",
        description: "Domain management, CDN acceleration, and SSL/TLS delivery slot awaiting specification.",
        isPlaceholder: true,
      },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools & Workflows",
    subtitle: "Version control systems, debugging environments, and command-line utilities",
    iconName: "Wrench",
    badgeText: "Tooling",
    skills: [
      {
        id: "skill-tool-1",
        name: "Dev Tool Slot 01",
        category: "tools",
        iconName: "GitBranch",
        context: "Distributed Version Control",
        description: "Version control and collaborative Git workflow tooling slot awaiting confirmation.",
        isPlaceholder: true,
      },
      {
        id: "skill-tool-2",
        name: "Dev Tool Slot 02",
        category: "tools",
        iconName: "Terminal",
        context: "IDE & Development Shell",
        description: "Modern code editor, extensions, and terminal shell environment slot awaiting input.",
        isPlaceholder: true,
      },
      {
        id: "skill-tool-3",
        name: "Dev Tool Slot 03",
        category: "tools",
        iconName: "CheckSquare",
        context: "API Testing & Inspection",
        description: "HTTP client testing, debugging, and network inspection suite slot awaiting input.",
        isPlaceholder: true,
      },
    ],
  },
  {
    id: "apis",
    title: "APIs & Web Services",
    subtitle: "REST endpoints, architectural patterns, and third-party integrations",
    iconName: "Globe",
    badgeText: "Integrations",
    skills: [
      {
        id: "skill-api-1",
        name: "Service Slot 01",
        category: "apis",
        iconName: "Globe",
        context: "RESTful Architecture",
        description: "REST API engineering and JSON data interchange protocols slot awaiting input.",
        isPlaceholder: true,
      },
      {
        id: "skill-api-2",
        name: "Service Slot 02",
        category: "apis",
        iconName: "Lock",
        context: "Authentication & Security",
        description: "Web authentication, tokens, and session authorization slot awaiting specification.",
        isPlaceholder: true,
      },
      {
        id: "skill-api-3",
        name: "Service Slot 03",
        category: "apis",
        iconName: "Zap",
        context: "Third-Party Integration",
        description: "External SaaS APIs, webhooks, and client communication protocols slot awaiting input.",
        isPlaceholder: true,
      },
    ],
  },
  {
    id: "ai-emerging",
    title: "AI & Emerging Technologies",
    subtitle: "Intelligent systems, data tooling, and modern developer workflow enhancement",
    iconName: "Sparkles",
    badgeText: "Emerging",
    skills: [
      {
        id: "skill-ai-1",
        name: "AI Slot 01",
        category: "ai-emerging",
        iconName: "Sparkles",
        context: "LLM API Integrations",
        description: "Large Language Model API orchestration and agentic workflow tooling slot awaiting input.",
        isPlaceholder: true,
      },
      {
        id: "skill-ai-2",
        name: "AI Slot 02",
        category: "ai-emerging",
        iconName: "Cpu",
        context: "Automated Developer Workflows",
        description: "AI-assisted pair programming and code evaluation tooling slot awaiting input.",
        isPlaceholder: true,
      },
      {
        id: "skill-ai-3",
        name: "AI Slot 03",
        category: "ai-emerging",
        iconName: "HardDrive",
        context: "Vector Data & Search",
        description: "Semantic search and modern data retrieval structures slot awaiting candidate's input.",
        isPlaceholder: true,
      },
    ],
  },
];
