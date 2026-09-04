# Architecture Document
## Personal Portfolio — Shivam Laxman Gaikwad

**Document Version:** 2.0  
**Updated:** 2026-09-04  
**Architecture Paradigm:** Multi-Page / Multi-Route Static Web Application  
**Status:** Approved Architectural Specification  
**Reference Document:** [PRD.md v2.0](file:///c:/Users/Shivam/OneDrive/画像/Desktop/All%20Projects/Portfolio/PRD.md)

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Technology Stack & Routing Engine](#2-technology-stack--routing-engine)
3. [Multi-Page Route Architecture](#3-multi-page-route-architecture)
4. [Folder & Directory Structure](#4-folder--directory-structure)
5. [Application Layout & Component Hierarchy](#5-application-layout--component-hierarchy)
6. [Page-Specific Component Specifications](#6-page-specific-component-specifications)
7. [QSpiders Internship Architectural Plan](#7-qspiders-internship-architectural-plan)
8. [Data Architecture & Schemas](#8-data-architecture--schemas)
9. [Motion & Page Transition Architecture](#9-motion--page-transition-architecture)
10. [Navigation & Active State Architecture](#10-navigation--active-state-architecture)
11. [Responsive Design Architecture](#11-responsive-design-architecture)
12. [Performance & Code-Splitting Architecture](#12-performance--code-splitting-architecture)
13. [Accessibility & Focus Architecture](#13-accessibility--focus-architecture)
14. [Routing Error & Fallback Handling (404)](#14-routing-error--fallback-handling-404)
15. [SEO & Metadata Architecture](#15-seo--metadata-architecture)
16. [Explicitly Excluded Architecture & Boundaries](#16-explicitly-excluded-architecture--boundaries)
17. [Architectural Principles & Evolution](#17-architectural-principles--evolution)

---

## 1. Architecture Overview

### 1.1 High-Level Architecture
The portfolio of **Shivam Laxman Gaikwad** is architected as a **frontend-only, multi-page client-side rendered (CSR) application**.

The previous single-page vertical scroll model has been superseded by a **declarative route-based architecture**. Each major section of the portfolio lives at its own distinct URL path with dedicated views, while sharing a persistent layout shell, design system, and motion language.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                   Browser                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                             React Application                               │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                    AppLayout (Shared Shell)                           │  │
│  │  ┌─────────────────────────────────────────────────────────────────┐  │  │
│  │  │                  Global Navbar (Route-Aware)                    │  │  │
│  │  └─────────────────────────────────────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────────────────────────────────────┐  │  │
│  │  │               Page Transition & Viewport Outlet                 │  │  │
│  │  │                                                                 │  │  │
│  │  │   /                  →  HomePage (Hero, Short Intro, EduPrev)   │  │  │
│  │  │   /about             →  AboutPage (Deep Bio, Ethos, Vision)     │  │  │
│  │  │   /education         →  EducationPage (Complete Timeline)       │  │  │
│  │  │   /programming       →  ProgrammingPage (Languages & Fluency)   │  │  │
│  │  │   /skills            →  SkillsPage (Ecosystem & Tools)          │  │  │
│  │  │   /projects          →  ProjectsPage (5–6 Full Projects)        │  │  │
│  │  │   /certificates      →  CertificatesPage (Credential Catalog)   │  │  │
│  │  │   /qspiders-internship → QSpidersInternshipPage (Dedicated Hub) │  │  │
│  │  │   /resume            →  ResumePage (Viewer & Download Hub)      │  │  │
│  │  │   *                  →  NotFoundPage (404 Fallback)             │  │  │
│  │  └─────────────────────────────────────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────────────────────────────────────┐  │  │
│  │  │                  Global Footer (Shared Closure)                 │  │  │
│  │  └─────────────────────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                      │                                      │
│  ┌───────────────────────────────────▼───────────────────────────────────┐  │
│  │                               Data Layer                              │  │
│  │      Centralized TypeScript Constants (No Backend / No Database)       │  │
│  │  personal.ts  education.ts  programming.ts  skills.ts  projects.ts     │  │
│  │  certificates.ts  qspiders.ts  resume.ts  navigation.ts  social.ts   │  │
│  └───────────────────────────────────┬───────────────────────────────────┘  │
│                                      │                                      │
│  ┌───────────────────────────────────▼───────────────────────────────────┐  │
│  │                              Motion Layer                             │  │
│  │       Route Transitions (Fast Cross-Fade/Slide) + In-Page GSAP        │  │
│  └───────────────────────────────────┬───────────────────────────────────┘  │
│                                      │                                      │
│  ┌───────────────────────────────────▼───────────────────────────────────┐  │
│  │                              Asset Layer                              │  │
│  │        Images (WebP), SVG Icons, Document Artifacts (PDF)             │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────────────┤
│                       Static Edge Hosting Platform                          │
│          (Vercel / Netlify / GitHub Pages with Single-Page Fallback)        │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Core Architectural Shifts from v1.0
1. **Section Stacking $\rightarrow$ Dedicated Route Pages:** Instead of mounting all sections into `App.tsx` simultaneously, each route mounts its own dedicated page component via a client-side router.
2. **Anchor Scrolling $\rightarrow$ True URL Navigation:** Navbar links navigate to real URL routes (`/projects`, `/education`) rather than jumping to document hashes (`#projects`, `#education`).
3. **Streamlined Homepage:** The homepage is strictly scoped to an executive introduction (Navbar, Hero, Short Personal Overview, Education Preview, Footer).
4. **Permanent Removal of Legacy Sections:**
   - The generic `/experience` route is **completely removed**.
   - The `/contact` route, contact cards, and contact form are **completely removed**.
5. **Dedicated Industrial Training Hub:** Creation of a standalone, specialized `/qspiders-internship` page.

---

## 2. Technology Stack & Routing Engine

### 2.1 Technology Matrix

| Layer | Technology | Version | Purpose in Architecture |
|---|---|---|---|
| **Runtime / UI** | React | 18+ | Component hierarchy, virtual DOM, suspense boundaries |
| **Language** | TypeScript | 5+ | Static typing across data models, props, and route parameters |
| **Build & Dev** | Vite | 6+ | Instant HMR, ESM bundling, dynamic chunk code-splitting |
| **Routing** | React Router (`react-router-dom`) | 6+ | Declarative client-side routing, nested layouts, active states |
| **Styling** | Tailwind CSS | 4+ | Utility-first styling, responsive tokens, hardware acceleration |
| **Motion** | GSAP & `@gsap/react` | 3.12+ | Timeline orchestration, in-page scroll reveals, cursor glow |
| **Icons** | Lucide React | Latest | Crisp, scalable SVG vector icons |

### 2.2 Routing Strategy: Client-Side Routing with Static Fallback
The routing architecture relies on standard HTML5 History API (`BrowserRouter`):
- **Direct Link Access:** When a user enters directly via `https://domain.com/projects`, the static server routes the request to `index.html`, where React Router renders `ProjectsPage`.
- **Browser History Integration:** Native back/forward navigation triggers smooth page transitions without reloading the browser window.
- **Scroll Restoration:** Every route navigation resets viewport scroll to `(0, 0)` smoothly via an architectural scroll restoration utility (`ScrollToTopOnMount`).

---

## 3. Multi-Page Route Architecture

### 3.1 Route Registry

The application implements exactly **9 primary routes** and 1 wildcard 404 route:

| Route Path | Page Component | Scope & Purpose |
|---|---|---|
| `/` | `HomePage` | Executive intro: Hero, short personal overview, education preview |
| `/about` | `AboutPage` | In-depth professional narrative, engineering ethos, career vision |
| `/education` | `EducationPage` | Complete chronological timeline (10th $\rightarrow$ 12th $\rightarrow$ Horticulture $\rightarrow$ BCA) |
| `/programming` | `ProgrammingPage` | Programming languages, syntax fluency, and paradigm knowledge |
| `/skills` | `SkillsPage` | Ecosystem tools, web frameworks, databases, platforms |
| `/projects` | `ProjectsPage` | Portfolio of ~5–6 projects with detail inspection modals |
| `/certificates` | `CertificatesPage` | Categorized credentials and verified certification viewer |
| `/qspiders-internship` | `QSpidersInternshipPage` | Dedicated industrial training & internship showcase |
| `/resume` | `ResumePage` | Interactive digital resume viewer and verified PDF download |
| `*` | `NotFoundPage` | Cybernetic 404 screen with prompt return action |

### 3.2 Removed Routes
- **`/experience`** — Permanently eliminated.
- **`/contact`** — Permanently eliminated.

---

## 4. Folder & Directory Structure

The directory structure extends the existing project conventions, cleanly introducing a `pages/` directory while keeping shared layout and UI components modular:

```
portfolio/
├── public/
│   ├── favicon.ico
│   ├── og-image.png
│   └── resume/
│       └── shivam-gaikwad-resume.pdf       # Official downloadable resume PDF
│
├── src/
│   ├── main.tsx                            # Root DOM mounting
│   ├── App.tsx                             # App shell with Router & Layout
│   │
│   ├── pages/                              # Dedicated route pages (Multi-Page Architecture)
│   │   ├── Home/
│   │   │   ├── HomePage.tsx
│   │   │   ├── components/
│   │   │   │   ├── ShortIntroduction.tsx   # Curated personal overview
│   │   │   │   └── EducationPreview.tsx    # Current BCA milestone teaser
│   │   │   └── index.ts
│   │   │
│   │   ├── About/
│   │   │   ├── AboutPage.tsx
│   │   │   ├── components/
│   │   │   │   ├── AboutBio.tsx
│   │   │   │   ├── CareerVision.tsx
│   │   │   │   └── EngineeringEthos.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── Education/
│   │   │   ├── EducationPage.tsx
│   │   │   ├── components/
│   │   │   │   ├── EducationTimeline.tsx
│   │   │   │   ├── EducationItemCard.tsx
│   │   │   │   └── PivotNarrativeCard.tsx  # Horticulture -> BCA pivot
│   │   │   └── index.ts
│   │   │
│   │   ├── Programming/
│   │   │   ├── ProgrammingPage.tsx
│   │   │   ├── components/
│   │   │   │   ├── LanguageGrid.tsx
│   │   │   │   └── LanguageCard.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── Skills/
│   │   │   ├── SkillsPage.tsx
│   │   │   ├── components/
│   │   │   │   ├── CategoryPanel.tsx
│   │   │   │   └── SkillBadgeGrid.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── Projects/
│   │   │   ├── ProjectsPage.tsx
│   │   │   ├── components/
│   │   │   │   ├── ProjectCard.tsx
│   │   │   │   ├── ProjectDetailModal.tsx
│   │   │   │   └── ProjectFilterTabs.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── Certificates/
│   │   │   ├── CertificatesPage.tsx
│   │   │   ├── components/
│   │   │   │   ├── CertificateCard.tsx
│   │   │   │   ├── CertificateViewer.tsx
│   │   │   │   └── CertificateFilters.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── QSpidersInternship/
│   │   │   ├── QSpidersInternshipPage.tsx
│   │   │   ├── components/
│   │   │   │   ├── InternshipHero.tsx
│   │   │   │   ├── InternshipOverview.tsx
│   │   │   │   ├── TrainingModules.tsx
│   │   │   │   ├── ProjectsCompleted.tsx
│   │   │   │   ├── SkillsGained.tsx
│   │   │   │   └── InternshipCredentials.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── Resume/
│   │   │   ├── ResumePage.tsx
│   │   │   ├── components/
│   │   │   │   ├── ResumeViewerModal.tsx
│   │   │   │   ├── ResumeDocumentPreview.tsx
│   │   │   │   └── ResumeActions.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── NotFound/
│   │       ├── NotFoundPage.tsx
│   │       └── index.ts
│   │
│   ├── components/                         # Shared & Reusable Components
│   │   ├── layout/                         # Structural elements
│   │   │   ├── AppLayout.tsx               # Persistent shell (Navbar + Outlet + Footer)
│   │   │   ├── Navbar.tsx                  # Route-aware persistent header
│   │   │   ├── Footer.tsx                  # Global persistent footer
│   │   │   ├── PageContainer.tsx           # Standard max-w-7xl page wrapper
│   │   │   ├── Section.tsx                 # Standard section framing
│   │   │   └── AmbientPointerGlow.tsx      # Cybernetic cursor glow
│   │   │
│   │   ├── ui/                             # Atomic UI design system primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── ImagePlaceholder.tsx
│   │   │
│   │   └── motion/                         # Motion primitives
│   │       ├── PageTransition.tsx          # Route transition wrapper
│   │       ├── ScrollReveal.tsx            # Viewport entrance wrapper
│   │       └── ScrollToTop.tsx             # Route reset utility
│   │
│   ├── data/                               # Centralized Static Data Layer
│   │   ├── personal.ts                     # Core biographical & headline facts
│   │   ├── education.ts                    # Chronological milestone records
│   │   ├── programming.ts                  # Programming languages
│   │   ├── skills.ts                       # Categorized technical abilities
│   │   ├── projects.ts                     # Detailed ~5-6 project records
│   │   ├── certificates.ts                 # Verified certification entries
│   │   ├── qspiders.ts                     # Dedicated QSpiders internship records
│   │   ├── resume.ts                       # Resume metadata & download paths
│   │   ├── navigation.ts                   # Route links & active matchers
│   │   └── socialLinks.ts                  # External GitHub/LinkedIn URLs
│   │
│   ├── types/                              # TypeScript Domain Definitions
│   │   ├── education.ts
│   │   ├── programming.ts
│   │   ├── skill.ts
│   │   ├── project.ts
│   │   ├── certificate.ts
│   │   ├── qspiders.ts
│   │   ├── resume.ts
│   │   └── navigation.ts
│   │
│   ├── hooks/                              # Custom React Hooks
│   │   ├── useScrollReveal.ts
│   │   ├── useReducedMotion.ts
│   │   ├── useDocumentTitle.ts
│   │   └── useMediaQuery.ts
│   │
│   ├── utils/                              # Utility Functions
│   │   └── helpers.ts                      # cn() class merge, formatting
│   │
│   └── styles/
│       └── index.css                       # Design tokens, typography, glassmorphism
│
├── Architecture.md                         # This document
├── PRD.md                                  # Product requirements
├── package.json
└── vite.config.ts
```

---

## 5. Application Layout & Component Hierarchy

### 5.1 Shared Application Shell
All routes are rendered inside a unified `AppLayout` component:

```
AppLayout
├── AmbientPointerGlow (Desktop background accent)
├── Navbar (Sticky, route-aware, active page indicator)
├── <main id="main-content">
│    └── <PageTransition>
│          └── <Outlet /> (Active Route Component)
│        </PageTransition>
│   </main>
└── Footer (Persistent across all routes)
```

**Architectural Rule:** The `Navbar` and `Footer` are declared **once** in the layout. They must never be re-instantiated inside individual page components.

### 5.2 Reusable Shared Components

| Component | Category | Responsibility |
|---|---|---|
| `AppLayout` | Layout | Manages shared persistent header, main content slot, and footer |
| `PageContainer` | Layout | Enforces `max-w-7xl`, responsive horizontal padding, and vertical rhythm |
| `SectionHeading` | UI | Consistent section eyebrows, titles, subtitles, and decorative cybernetic hashes |
| `Button` | UI | Tactile 44px+ touch targets, primary/secondary/ghost variants, active compression |
| `Card` | UI | Cybernetic border highlights, glassmorphic backdrop, hover elevation |
| `Badge` | UI | Status indicators, technology chips, milestone period pills |
| `Modal` | UI | Accessible dialog backdrop, focus trap, Escape listener, 44px close button |
| `ImagePlaceholder` | UI | Styled fallback for unprovided images with explicit status labels |
| `PageTransition` | Motion | Light, fluid opacity + translation entrance for each newly mounted route |
| `ScrollToTop` | Motion | Automatically resets window scroll to `0, 0` on route change |

---

## 6. Page-Specific Component Specifications

Each route is clean and self-contained, avoiding cross-page code bleed:

### 6.1 Home Page (`/`)
- **Scope:** Short executive preview.
- **Components:**
  - `Hero`: Prominent candidate name, interactive terminal card, primary call-to-action buttons (`/projects`, `/resume`).
  - `ShortIntroduction`: 1–2 paragraph high-impact summary with teaser link to `/about`.
  - `EducationPreview`: Current milestone spotlight (BCA at JD College) with button linking to `/education`.

### 6.2 About Page (`/about`)
- **Components:**
  - `AboutBio`: Detailed personal narrative, motivation, software engineering path.
  - `EngineeringEthos`: Core developer values, problem-solving mindset, continuous learning.
  - `CareerVision`: Short-term and long-term goals in technology.
  - `PortraitCard`: Candidate image presentation with graceful placeholder support.

### 6.3 Education Page (`/education`)
- **Components:**
  - `EducationTimeline`: Full vertical timeline spanning 2021 to Present.
  - `EducationItemCard`: Detailed milestone card displaying degree, institution, dates, and campus photos.
  - `PivotNarrativeCard`: Professional framing highlighting the deliberate career pivot from Horticulture to Computer Applications.

### 6.4 Programming Knowledge Page (`/programming`)
- **Components:**
  - `LanguageGrid`: High-contrast responsive grid of programming languages.
  - `LanguageCard`: Dedicated card featuring language icon, paradigm tags, and application context.

### 6.5 Technical Skills Page (`/skills`)
- **Components:**
  - `CategoryPanel`: Grouped panels for Web Frameworks, Databases, Developer Tools, and Platforms.
  - `SkillBadgeGrid`: Modular badge layout for rapid scanning by technical recruiters.

### 6.6 Projects Page (`/projects`)
- **Components:**
  - `ProjectFilterTabs`: Filter by tech stack or category (Full-Stack, Frontend, Utilities).
  - `ProjectCard`: Responsive showcase cards with architecture highlights, tech tags, and source links.
  - `ProjectDetailModal`: Comprehensive modal displaying problem statement, architecture, features, and screenshots.

### 6.7 Certificates Page (`/certificates`)
- **Components:**
  - `CertificateFilters`: Category-based filter tabs (Programming, Web Dev, CS Fundamentals).
  - `CertificateCard`: Compact card with thumbnail, issuer, date, and credential badges.
  - `CertificateViewer`: Lightbox modal for high-resolution certificate inspection.

### 6.8 Resume Page (`/resume`)
- **Components:**
  - `ResumeDocumentPreview`: Interactive digital resume card with structured academic, technical, and project highlights.
  - `ResumeActions`: Official PDF download button (`shivam-gaikwad-resume.pdf`) and print trigger.
  - `StorageStatusBanner`: Visual indication of verified static PDF placement in `public/resume/`.

---

## 7. QSpiders Internship Architectural Plan

The `/qspiders-internship` page is architected as an **exclusive, dedicated industrial training showcase** rather than a generic resume bullet point.

### 7.1 Component Hierarchy for `/qspiders-internship`

```
QSpidersInternshipPage
├── InternshipHero
│    ├── Organization Brand & Trainee Designation
│    └── Duration & Verification Badges
│
├── InternshipOverview
│    ├── Industrial Training Narrative
│    └── Program Objectives
│
├── RoleAndDuration
│    ├── Start Date / End Date / Training Schedule
│    └── Batch & Mode of Instruction
│
├── LearningAndCurriculum
│    ├── Core Modules Covered (Java, SQL, Web, Testing)
│    └── Practical Lab Exercises
│
├── WorkAndProjects
│    ├── Practical Assignments & Capstone Applications
│    └── Sprint & Code Review Experience
│
├── SkillsGained
│    ├── Technical Competencies
│    └── Professional & Problem-Solving Capabilities
│
├── InternshipCredentials
│    ├── Course Completion Certificate (Viewer Modal)
│    └── Performance Badges
│
└── InternshipHighlights
     └── Standout Achievements & Key Takeaways
```

### 7.2 Non-Invention Rule & Placeholder Architecture
All data for this page resides in `src/data/qspiders.ts`. To ensure 100% compliance with candidate facts:
- Missing facts are encapsulated with typed placeholders:
  ```typescript
  export const qspidersInternshipData: QSpidersInternship = {
    organization: "QSpiders Software Testing & Development Training Center",
    role: "[INTERNSHIP ROLE]",
    duration: "[INTERNSHIP DURATION]",
    startDate: "[INTERNSHIP START DATE]",
    endDate: "[INTERNSHIP END DATE]",
    topicsCovered: ["[TOPICS LEARNED]"],
    projectsCompleted: [
      {
        title: "[PROJECT DETAILS]",
        description: "Hands-on project developed during QSpiders training curriculum.",
        technologies: ["Java", "SQL"],
      }
    ],
    skillsGained: ["[SKILLS GAINED]"],
    certificateAvailable: false,
    certificatePath: undefined,
  };
  ```
- Components render these placeholders cleanly with an amber `[Pending Input]` badge, making future data updates straightforward.

---

## 8. Data Architecture & Schemas

All content is managed through typed TypeScript data files in `src/data/`. There is no runtime database or server API.

### 8.1 Schema Definitions (`src/types/`)

```typescript
// src/types/navigation.ts
export interface NavItem {
  id: string;
  label: string;
  path: string;
  badge?: string;
}

// src/types/qspiders.ts
export interface QSpidersInternship {
  organization: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string;
  topicsCovered: string[];
  projectsCompleted: Array<{
    title: string;
    description: string;
    technologies: string[];
  }>;
  skillsGained: string[];
  certificateAvailable: boolean;
  certificatePath?: string;
  highlights?: string[];
}
```

### 8.2 Data Decoupling
Components never contain hardcoded personal data. When Shivam provides updated project descriptions or certificate records, updating the single data file instantly updates the corresponding page without altering component JSX or logic.

---

## 9. Motion & Page Transition Architecture

### 9.1 Multi-Page Transition Mechanics
Page transitions must feel fluid, rapid, and effortless without blocking content consumption.

```
Route Navigation Event
  ↓
1. ScrollToTop triggers window.scrollTo(0, 0)
  ↓
2. Old View Exits (Opacity: 1 → 0, Duration: 150ms)
  ↓
3. New View Enters (Opacity: 0 → 1, TranslateY: 10px → 0px, Duration: 250ms)
  ↓
4. In-Page ScrollReveal Elements Listen to Viewport
```

### 9.2 Motion Guidelines
- **Duration:** Route transitions must complete within **200ms–250ms**. Lengthy full-screen blocking animations are strictly forbidden.
- **Hardware Acceleration:** Transitions use `transform` and `opacity` with CSS `will-change: transform, opacity`.
- **Reduced Motion:** If `prefers-reduced-motion` is active:
  - Transition duration is set to `0ms`.
  - All translate offsets are removed.
  - Content appears instantaneously.

---

## 10. Navigation & Active State Architecture

### 10.1 Active Route Synchronization
The `Navbar` determines the active route using React Router's `useLocation()` hook:

```typescript
// Active matcher logic
const location = useLocation();
const isActive = (path: string) => {
  if (path === "/") return location.pathname === "/";
  return location.pathname.startsWith(path);
};
```

### 10.2 Navigation UI States
- **Desktop:** Active links feature an accent cyan underglow, cyan text, and an active pill border. Inactive links have a subtle hover transition.
- **Mobile Drawer:** Drawer links reflect the active route with a left accent bar and highlighted badge. Tapping any route automatically closes the mobile drawer and navigates to the target page.
- **Accessibility:** Active link elements explicitly receive `aria-current="page"`.

---

## 11. Responsive Design Architecture

The responsive system is built into Tailwind CSS tokens and enforced uniformly across all 9 pages:

### 11.1 Breakpoint Standards

| Token | Viewport | Target Device | Layout Adaptation |
|---|---|---|---|
| `xs` | $\ge 375\text{px}$ | Compact Phone | Single-column, stacked action buttons ($\ge 44\text{px}$) |
| `sm` | $\ge 640\text{px}$ | Large Phone / Phablet | 2-column card grids, horizontal CTA rows |
| `md` | $\ge 768\text{px}$ | Tablet Portrait | Mobile menu active, expanded timeline spacing |
| `lg` | $\ge 1024\text{px}$ | Laptop / Tablet Landscape | Desktop navbar active, 2–3 column grids |
| `xl` | $\ge 1280\text{px}$ | Standard Desktop | Full 3-column project/skill showcases |
| `2xl` | $\ge 1536\text{px}$ | Ultra-Wide Monitor | `max-w-7xl` container constraints |

### 11.2 Invariant Responsive Rules
- **No Horizontal Scroll:** `overflow-x: hidden` enforced on page wrappers; `scrollWidth <= innerWidth` verified at all breakpoints.
- **Touch-Friendly Controls:** All interactive controls enforce a minimum touch target of $44\times 44\text{px}$.
- **iOS Viewport Zoom Guard:** Input elements set font size to `16px` (`text-base sm:text-xs`) to prevent Safari auto-zoom.

---

## 12. Performance & Code-Splitting Architecture

To maintain optimal load speeds across all routes:

### 12.1 Dynamic Route Splitting (`React.lazy`)
Each page component is dynamically imported using `React.lazy` and wrapped in a lightweight `Suspense` boundary:

```typescript
// Route code-splitting pattern
const HomePage = React.lazy(() => import("@/pages/Home"));
const AboutPage = React.lazy(() => import("@/pages/About"));
const EducationPage = React.lazy(() => import("@/pages/Education"));
const ProgrammingPage = React.lazy(() => import("@/pages/Programming"));
const SkillsPage = React.lazy(() => import("@/pages/Skills"));
const ProjectsPage = React.lazy(() => import("@/pages/Projects"));
const CertificatesPage = React.lazy(() => import("@/pages/Certificates"));
const QSpidersInternshipPage = React.lazy(() => import("@/pages/QSpidersInternship"));
const ResumePage = React.lazy(() => import("@/pages/Resume"));
const NotFoundPage = React.lazy(() => import("@/pages/NotFound"));
```

### 12.2 Performance Metrics Budget
- **Initial JS Bundle (Entry):** $< 150\text{ KB}$ gzipped.
- **Individual Page Chunk:** $< 30\text{ KB}$ gzipped.
- **First Contentful Paint (FCP):** $< 1.2\text{s}$.
- **Cumulative Layout Shift (CLS):** `0.00`.

---

## 13. Accessibility & Focus Architecture

- **Unique Page Headings:** Every page renders exactly one semantic `<h1>` tag matching the page's primary title (e.g., `About Me // Background`, `Verified Projects // Showcase`).
- **Focus Management:** On route transition, focus is programmatically shifted to `#main-content` or the top heading to assist screen readers and keyboard users.
- **Skip-to-Content Link:** A visually hidden skip link at the top of `AppLayout` allows keyboard users to bypass the 9 navbar links directly to the page content.
- **Focus Indicators:** Explicit `focus-visible:ring-2 focus-visible:ring-accent-primary` applied to all buttons, links, and modal triggers.

---

## 14. Routing Error & Fallback Handling (404)

### 14.1 Wildcard Catch-All Route
A catch-all route (`path="*"`) catches any invalid URL requests:

```
https://domain.com/random-page  →  NotFoundPage
```

### 14.2 `NotFoundPage` Specification
- **Visual Design:** Cybernetic aesthetic consistent with the rest of the site (dark background, glowing accent border, monospace terminal error tag `[ERR_404_PAGE_NOT_FOUND]`).
- **User Actions:**
  - "Return to Home" primary button (`/`).
  - Quick links to `/projects` and `/resume`.
- **HTTP Behavior:** On static hosts, configured via rewrites so users are not stranded on broken web server error pages.

---

## 15. SEO & Metadata Architecture

Each page route dynamically updates browser document metadata via an architectural hook (`useDocumentTitle`):

| Route | Page Title (`document.title`) | Meta Description Focus |
|---|---|---|
| `/` | `Shivam Laxman Gaikwad | Developer Portfolio` | Introduction, BCA student, aspiring software engineer |
| `/about` | `About | Shivam Laxman Gaikwad` | Background, engineering values, and technical vision |
| `/education` | `Education | Shivam Laxman Gaikwad` | Verified academic timeline and degree milestones |
| `/programming` | `Programming Languages | Shivam Laxman Gaikwad` | Language fluency, syntax competencies, and paradigms |
| `/skills` | `Technical Skills | Shivam Laxman Gaikwad` | Frameworks, databases, developer tools, and environments |
| `/projects` | `Projects | Shivam Laxman Gaikwad` | Software engineering project portfolio and source code |
| `/certificates` | `Certificates | Shivam Laxman Gaikwad` | Verified credentials and coursework accreditations |
| `/qspiders-internship` | `QSpiders Internship | Shivam Laxman Gaikwad` | Industrial training, curriculum, and practical projects |
| `/resume` | `Resume | Shivam Laxman Gaikwad` | Formal resume document preview and PDF download |
| `*` | `404 - Page Not Found | Shivam Laxman Gaikwad` | Error fallback notification |

---

## 16. Explicitly Excluded Architecture & Boundaries

The portfolio remains strictly a **frontend-only client application**:
- **No Backend Server:** No Express, NestJS, or Node.js runtime APIs.
- **No Database:** No MongoDB, PostgreSQL, Firebase, or Supabase.
- **No Authentication:** No login portals, password fields, or JWT cookies.
- **No Headless CMS:** No external API dependency for content; static TypeScript constants serve as the single source of truth.
- **No Contact Form Backend:** No serverless mailers, Resend/Sendgrid integrations, or dummy contact endpoints.

---

## 17. Architectural Principles & Evolution

1. **Maintainability:** Adding a new project or certificate requires modifying only one typed array in `src/data/`.
2. **Predictable Routing:** Clean URL hierarchy with no reliance on fragile DOM element IDs or hash fragments.
3. **Simplicity Over Abstraction:** Pure React + React Router + Tailwind CSS without complex state machines or heavy external libraries.
4. **Phased Build Compatibility:** The application can be incrementally refactored from the existing codebase route by route without breaking functionality.

---

**End of Architecture v2.0**
