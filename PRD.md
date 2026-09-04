# Product Requirements Document (PRD)
## Personal Portfolio — Shivam Laxman Gaikwad

**Document Version:** 2.0  
**Updated:** 2026-09-04  
**Architecture Paradigm:** Multi-Page Motion Portfolio Website  
**Status:** Updated — Awaiting Review & Architectural Alignment  

---

## Table of Contents

1. [Project Overview & Core Concept](#1-project-overview--core-concept)
2. [Target Audience](#2-target-audience)
3. [Personal Information & Data Boundaries](#3-personal-information--data-boundaries)
4. [Multi-Page Site Architecture & Routes](#4-multi-page-site-architecture--routes)
5. [Page-by-Page Detailed Requirements](#5-page-by-page-detailed-requirements)
   - 5.1 [Home Page (`/`)](#51-home-page-)
   - 5.2 [About Page (`/about`)](#52-about-page-about)
   - 5.3 [Education Page (`/education`)](#53-education-page-education)
   - 5.4 [Programming Knowledge Page (`/programming`)](#54-programming-knowledge-page-programming)
   - 5.5 [Technical Skills Page (`/skills`)](#55-technical-skills-page-skills)
   - 5.6 [Projects Page (`/projects`)](#56-projects-page-projects)
   - 5.7 [Certificates Page (`/certificates`)](#57-certificates-page-certificates)
   - 5.8 [QSpiders Internship Page (`/qspiders-internship`)](#58-qspiders-internship-page-qspiders-internship)
   - 5.9 [Resume Page (`/resume`)](#59-resume-page-resume)
6. [Global Shared Layout Components](#6-global-shared-layout-components)
   - 6.1 [Global Navbar](#61-global-navbar)
   - 6.2 [Global Footer](#62-global-footer)
7. [Explicitly Removed Sections](#7-explicitly-removed-sections)
   - 7.1 [Removal of Generic Experience (`/experience`)](#71-removal-of-generic-experience-experience)
   - 7.2 [Removal of Contact Page / Form (`/contact`)](#72-removal-of-contact-page--form-contact)
8. [Unified Multi-Page Motion & Interaction System](#8-unified-multi-page-motion--interaction-system)
9. [Responsive Design Requirements](#9-responsive-design-requirements)
10. [Accessibility Requirements](#10-accessibility-requirements)
11. [Performance & Engineering Constraints](#11-performance--engineering-constraints)
12. [Content Non-Invention Rules & Placeholders](#12-content-non-invention-rules--placeholders)
13. [Pending Information Registry](#13-pending-information-registry)

---

## 1. Project Overview & Core Concept

### 1.1 Shift to a Multi-Page Architecture
The portfolio website of **Shivam Laxman Gaikwad** (21-year-old BCA student and aspiring software engineer) is transitioning from a single-page scrolling layout to a **multi-page portfolio application**.

Instead of having all sections stacked on one long continuous page where navigation links merely scroll down to anchor tags, **each major portfolio section now lives on its own dedicated route/webpage**. When a visitor interacts with the navigation bar, the application transitions to a distinct page dedicated entirely to that topic.

### 1.2 Purpose & Value of Multi-Page Structure
1. **Deep Focus:** Allows each section (such as the ~5–6 software projects, extensive certification catalog, or dedicated QSpiders internship) to have ample visual space, detailed cards, and specialized presentation without cluttering the homepage.
2. **Distinct URL Addresses:** Enables direct linking to specific aspects of Shivam's portfolio (e.g., sharing `/projects` with hiring managers or `/education` with academic reviewers).
3. **Structured Mental Model:** Gives users a clear, intentional browsing journey through dedicated, focused views rather than continuous, fatiguing vertical scroll.

### 1.3 Core Design Pillars

| Pillar | Description |
|---|---|
| **Unified Multi-Page** | Feels like one cohesive ecosystem across all routes with persistent layout, theme, and motion language |
| **Modern & Premium** | Dark cybernetic aesthetic, refined typography, and purposeful micro-interactions with zero "student template" feel |
| **Professional Credibility** | Tailored for recruiters, tech leads, and academic evaluators; emphasizes rigorous software engineering practices |
| **Smooth Page Motion** | Premium page entrance and route transitions that maintain continuity without jarring layout shifts |
| **Fast & Lightweight** | Minimal JavaScript overhead, shared reusable components, zero horizontal overflow, and rapid page loads |

---

## 2. Target Audience

The multi-page portfolio must cater directly to:

- **Technical Recruiters & Talent Acquisition:** Rapid scanning of candidate qualifications, core programming proficiencies, and direct access to resume viewing/downloading.
- **Engineering Managers & Tech Leads:** Deep inspection of project architecture, codebase structure, technology choices, and problem-solving abilities.
- **Fellow Developers & Open-Source Evaluators:** Technical depth, GitHub repositories, and developer craft.
- **Academic & College Evaluators:** Structured educational milestones, verified certifications, and institutional background.
- **Industry Network & Mentors:** Understanding Shivam's growth trajectory and technical focus.

---

## 3. Personal Information & Data Boundaries

### 3.1 Confirmed Personal Details

| Field | Value |
|---|---|
| **Full Name** | Shivam Laxman Gaikwad |
| **Age** | 21 |
| **Academic Standing** | Bachelor of Computer Applications (BCA), Currently Pursuing (2024–Present) |
| **Primary Location** | Nagpur, Maharashtra, India |

### 3.2 Professional Links Status (Placeholders Required)

| Platform | Configuration Status |
|---|---|
| GitHub | URL pending confirmation — use placeholder link `[YOUR GITHUB URL]` |
| LinkedIn | URL pending confirmation — use placeholder link `[YOUR LINKEDIN URL]` |

---

## 4. Multi-Page Site Architecture & Routes

The portfolio consists of **9 dedicated routes** structured as follows:

| Route | Page Name | Primary Objective | Scope |
|---|---|---|---|
| `/` | **Home** | First impression, introduction, and educational highlights | Hero, short personal overview, education preview, footer |
| `/about` | **About** | Deep biographical and professional narrative | Personal background, technical mission, values, career direction |
| `/education` | **Education** | Complete academic timeline | Full chronological education journey from secondary to BCA |
| `/programming` | **Programming Knowledge** | Programming languages & syntax fluency | Programming languages and core paradigm knowledge |
| `/skills` | **Technical Skills** | Ecosystem, tools, platforms, & frameworks | Developer tools, frameworks, databases, and environments |
| `/projects` | **Projects** | Showcase of completed & active software work | Detailed project cards (~5–6 projects), architecture, links |
| `/certificates` | **Certificates** | Verified credentials & accreditations | Complete certification collection with viewing capabilities |
| `/qspiders-internship` | **QSpiders Internship** | Dedicated industrial training & internship showcase | Roles, training modules, skills gained, projects, outcomes |
| `/resume` | **Resume** | Formal resume view & download hub | In-browser preview, highlights, and verified PDF download |

---

## 5. Page-by-Page Detailed Requirements

### 5.1 Home Page (`/`)

**Purpose:** The entry portal and executive summary. It introduces Shivam Laxman Gaikwad, establishes his developer identity, and invites exploration into dedicated pages.

**Mandatory Contents:**
1. **Global Navbar:** Persistent multi-page navigation header.
2. **Hero / Introduction:**
   - Prominent presentation of Shivam's name.
   - Professional identity badge (BCA Student & Aspiring Software Developer).
   - High-impact visual/terminal card reflecting modern development focus.
   - Primary Call-to-Action buttons (e.g., "Explore Projects" linking to `/projects`, "View Resume" linking to `/resume`).
3. **Short Personal Overview:**
   - Concise 1–2 paragraph introduction summarizing Shivam's technical focus and motivation.
   - Teaser link prompting the visitor to learn more on the dedicated `/about` page.
4. **Education Preview:**
   - A curated preview of Shivam's current academic milestone (BCA at JD College of Engineering and Management).
   - Call-to-action directing the user to the full `/education` journey page.
5. **Global Footer:** Clean site closure with copyright and social links.

**Strict Boundaries for Homepage:**
- The homepage **MUST NOT** include the full About section, Programming section, Technical Skills section, Projects section, Certificates section, QSpiders Internship section, or Resume section.
- The homepage **must conclude immediately following the Education preview** and transition directly to the Footer.

---

### 5.2 About Page (`/about`)

**Purpose:** Provide a rich, personal, and professional profile that contextualizes Shivam beyond bullet points.

**Requirements:**
- **Professional Narrative:** Detailed overview of Shivam's journey into software development, coding passion, problem-solving mindset, and professional ethos.
- **Career Direction:** Clear articulation of Shivam's career goals, areas of software engineering interest, and what drives his technical development.
- **Relevant Background:** Key personal milestones, technical philosophy, and approach to continuous learning.
- **Portrait/Visual Presentation:** Dedicated space for Shivam's professional photograph with styled fallback placeholder.
- **Consistency:** Uses shared section heading standards, container widths, and dark cybernetic styling.

---

### 5.3 Education Page (`/education`)

**Purpose:** Showcase Shivam's complete educational journey as an interactive chronological timeline with deep context for each milestone.

**Confirmed Chronological Milestones:**

| Period | Level / Program | Institution | Location | Status / Narrative Context |
|---|---|---|---|---|
| **2021** | 10th / Secondary Education | Green City English High School | Nagpur | Completed |
| **2021–2023** | 12th / Higher Secondary Education | Shree Mathura Das Mohta College of Engineering and Management | Nagpur | Completed in 2023 |
| **2023–2024** | Horticulture | K.K. Wagh College of Horticulture and Management | Nashik | Joined and left during first year in 2024; deliberate career realignment |
| **2024–Present** | Bachelor of Computer Applications (BCA) | JD College of Engineering and Management | Nagpur | Currently pursuing; active academic focus |

**Special Requirements:**
- **Professional Pivot Framing:** The transition from Horticulture to BCA must be framed deliberately and positively as an intentional discovery of passion for technology and computer applications.
- **Interactive Timeline Layout:** Rich vertical timeline with milestone markers, institution details, period badges, and narrative summaries.
- **Institution Visuals:** Support for institution photos with clean, high-contrast fallback placeholders where actual imagery is awaiting provision.
- Do **not** invent fake grades, GPAs, or unverified honors.

---

### 5.4 Programming Knowledge Page (`/programming`)

**Purpose:** Dedicated showcase of programming languages and language-specific competencies.

**Requirements:**
- Kept **strictly separate** from tools, frameworks, and generic technologies.
- Focus exclusively on verified programming languages.
- Visual representation using modern language cards, official technology icons, and paradigm tags (e.g., Object-Oriented, Functional, Scripting).
- Avoid arbitrary percentage bars (e.g., "Java 90%") unless verified by test scores; use qualitative tiers (e.g., Primary / Working Knowledge / Exploring) or project application context.
- **Golden Rule:** Do **not** invent or assume programming languages that have not been provided. Use structured placeholders for languages pending candidate confirmation.

---

### 5.5 Technical Skills Page (`/skills`)

**Purpose:** Dedicated presentation of Shivam's broader technical ecosystem beyond core programming languages.

**Requirements:**
- Clear categorical classification:
  - **Web & Frameworks:** Frontend and backend web libraries and frameworks.
  - **Databases & Storage:** Relational and NoSQL databases.
  - **Developer Tools & Environments:** Version control (Git/GitHub), IDEs, build systems, terminals.
  - **Platforms & Deployment:** Hosting, cloud platforms, and operating systems.
  - **Core Engineering Concepts:** Data structures, algorithms, RESTful architecture, responsive UI design.
- Interactive filtering or tabbed views allowing recruiters to isolate specific skill sets quickly.
- Must remain strictly data-driven with modular badge/card representations.

---

### 5.6 Projects Page (`/projects`)

**Purpose:** Primary evidence of engineering competency, problem-solving, and practical development skills.

**Requirements:**
- Portfolio capacity: Structured to present approximately **5–6 software projects**.
- Each project showcase item must support:
  - **Project Name & Moniker:** Clear, professional title.
  - **Executive Summary:** Concise explanation of what the application does.
  - **Problem Statement & Architecture:** Real-world problem addressed and architectural decisions.
  - **Key Features:** Bulleted breakdown of capabilities.
  - **Technology Badges:** Explicit stack list with relevant technology icons.
  - **GitHub Repository Link:** Source code link (or placeholder indicator if private/pending).
  - **Live Demo Link:** Deployment link where available.
  - **Visual Previews:** Responsive screenshot gallery or interface demonstration with styled fallbacks.
  - **Project Status:** Complete / Active Development / Maintained.
- Interactive inspection modal or dedicated view for detailed project breakdown.
- **Golden Rule:** Do **not** invent fake project names, features, or metrics. Present verified projects accurately and use structured placeholders where details are pending.

---

### 5.7 Certificates Page (`/certificates`)

**Purpose:** Structured, high-density showcase for Shivam's multiple technical certifications and coursework accreditations.

**Requirements:**
- High-capacity grid designed to display a large collection of certificates without visual chaos.
- Filterable by issuer, topic, or date.
- Each certificate card must support:
  - Certificate Title
  - Issuing Organization (e.g., University, Online Platform, Training Institute)
  - Issue Date / Period
  - Relevant Topics & Skills Covered
  - High-resolution preview image with lightbox / modal viewing support
  - Credential Verification Link / ID (if available)
- Graceful handling of certificates where images are awaiting upload via structured placeholders.
- **Golden Rule:** Do **not** invent certificate titles or organizations.

---

### 5.8 QSpiders Internship Page (`/qspiders-internship`)

**Purpose:** A **completely standalone, dedicated page** built specifically to showcase Shivam's internship experience with **QSpiders**.

> **IMPORTANT ARCHITECTURAL DISTINCTION:**  
> This page is **NOT** a generic or diluted "Experience" list. It is an exclusive, in-depth spotlight on the QSpiders industrial training and internship program.

**Requirements:**
- Prominent header establishing the affiliation with **QSpiders**.
- Structured sections for:
  - **Internship Title / Designation:** (e.g., Software Engineering Trainee / Java Full Stack Intern)
  - **Organization:** QSpiders Software Testing & Development Training Center
  - **Duration & Timeline:** Start date, end date, and total training hours
  - **Role & Responsibilities:** Day-to-day engagement, development sprints, code reviews
  - **Curriculum & Technologies Learned:** In-depth breakdown of languages, tools, frameworks, and testing methodologies covered during the program
  - **Work & Projects Completed:** Practical assignments, case studies, or capstone applications developed during the internship
  - **Skills & Competencies Gained:** Technical and professional skills acquired
  - **Internship Certificate & Credentials:** Visual certificate preview with modal verification
  - **Key Highlights & Achievements:** Standout contributions, benchmarks, or recognitions
- **Golden Rule on Placeholders:**  
  Do **not** invent any QSpiders internship details. Where exact facts have not yet been provided, the page must use clean, standardized placeholders:
  - `[INTERNSHIP ROLE]`
  - `[INTERNSHIP DURATION]`
  - `[INTERNSHIP START DATE]`
  - `[INTERNSHIP END DATE]`
  - `[TOPICS LEARNED]`
  - `[PROJECT DETAILS]`  
  The data model and components must be architected so that Shivam can easily replace these placeholders with verified facts in a single configuration file.

---

### 5.9 Resume Page (`/resume`)

**Purpose:** Dedicated hub for viewing and downloading Shivam's verified resume.

**Requirements:**
- **In-Browser Interactive Viewer:** High-fidelity embedded document viewer or responsive digital resume card summarizing education, skills, and qualifications.
- **Direct Download Action:** Prominent button to download the official PDF file (`shivam-gaikwad-resume.pdf`).
- **Storage Transparency:** Clear status indicator indicating whether the physical PDF has been placed in the public directory or is currently awaiting file upload.
- **Recruiter-Friendly Layout:** Formatted cleanly for print preview or quick executive evaluation.
- **Golden Rule:** Do not fabricate resume metrics, past job titles, or unverified achievements.

---

## 6. Global Shared Layout Components

### 6.1 Global Navbar

**Requirements:**
- Persistent across all routes at the top of the viewport.
- Contains direct navigation links to all **9 primary routes**:
  1. `Home` (`/`)
  2. `About` (`/about`)
  3. `Education` (`/education`)
  4. `Programming` (`/programming`)
  5. `Skills` (`/skills`)
  6. `Projects` (`/projects`)
  7. `Certificates` (`/certificates`)
  8. `QSpiders Internship` (`/qspiders-internship`)
  9. `Resume` (`/resume`)
- **Route-Aware Active Indicators:** Visually indicates the currently active route (e.g., glowing cyan pill, accent border, or bold typography).
- **True Page Navigation:** Must perform route transitions between pages, not anchor scrolling to DOM hashes on the same page.
- **Responsive Mobile Navigation:** Full-screen or sliding mobile drawer with touch targets $\ge 44\times 44\text{px}$, accessible close button, and body scroll lock when open.
- **Brand Mark:** Interactive `SG` logo navigating back to `/`.

---

### 6.2 Global Footer

**Requirements:**
- Persistent across all pages at the base of the layout.
- Contents:
  - Name and brand identifier: `Shivam Laxman Gaikwad`
  - Copyright statement: `© 2026 Shivam Laxman Gaikwad. All rights reserved.`
  - Quick route navigation links to primary pages.
  - Professional external links (GitHub, LinkedIn) using verified placeholders if actual URLs are pending.
  - "Back to Top" smooth scroll trigger.
- **Strict Prohibition:** The footer **MUST NOT** include a Contact section, form, or fake messaging module.

---

## 7. Explicitly Removed Sections

To align with the streamlined, highly targeted multi-page architecture, the following legacy sections are **completely removed**:

### 7.1 Removal of Generic Experience (`/experience`)
- The old generic "Experience / Achievements" section is **permanently eliminated**.
- No `/experience` route shall be created.
- All internship and training content is exclusively represented within the dedicated [`/qspiders-internship`](#58-qspiders-internship-page-qspiders-internship) route.

### 7.2 Removal of Contact Page / Form (`/contact`)
- The Contact section and form are **completely eliminated**.
- No `/contact` route shall be created.
- No "Contact" item shall appear in the Navbar or Footer.
- No contact forms, backend submission handlers, or simulated email messaging widgets shall be included anywhere on the site.

---

## 8. Unified Multi-Page Motion & Interaction System

The website maintains a premium, dynamic motion language across the multi-page structure:

### 8.1 Motion Requirements Across Routes
- **Route Transition Animations:** Smooth, choreographed page entrance and exit transitions (e.g., subtle fade and upward glide) to create continuity between page navigations.
- **Page Entrance Reveals:** Distinctive hero/header entry sequence on each route when loaded.
- **In-Page Scroll Reveals:** Staggered card, timeline, and grid reveals triggered as elements enter the viewport.
- **Interactive Micro-Interactions:** Tactile button states, active scale compressions, card elevation hover effects, and spotlight accents on pointer movement.
- **Accessible Motion Reduction:** Uncompromising compliance with `prefers-reduced-motion`. When enabled, all route transitions and scroll effects instantly default to instantaneous opacity changes with zero motion displacement.

---

## 9. Responsive Design Requirements

Every single page must provide an intentional, bespoke layout across all standard device viewports:

| Device Category | Breakpoint Range | Responsive Behavior |
|---|---|---|
| **Large Desktop** | $\ge 1440\text{px}$ | Centered max-width containers (`max-w-7xl`), rich multi-column grids |
| **Laptop** | $1024\text{px} - 1439\text{px}$ | Compact navigation padding, 2–3 column adaptive grids |
| **Tablet** | $768\text{px} - 1023\text{px}$ | Mobile navigation toggle active; cards stack gracefully |
| **Standard Mobile** | $375\text{px} - 767\text{px}$ | Single-column reflow, full-width touch buttons ($\ge 44\text{px}$) |
| **Small Mobile** | $320\text{px} - 374\text{px}$ | Scaled typography, progressive brand truncation, zero horizontal scroll |

**Universal Layout Invariant:** Under no circumstance shall any page exhibit horizontal scrolling (`scrollWidth <= innerWidth` at all times).

---

## 10. Accessibility Requirements

All pages in the multi-page application must uphold modern accessibility standards:
- **Semantic HTML5:** Native landmark elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) on every route.
- **Keyboard Navigation:** Logical tab order across all links, buttons, modals, and interactive controls with visible focus rings (`focus-visible:ring-2`).
- **Screen Reader Context:** Semantic headings (`<h1>` unique to each page, structured `<h2>` and `<h3>` tags) and descriptive `aria-label` tags for icon-only triggers.
- **Active Route Communication:** The current page link in the navigation must include `aria-current="page"`.
- **Contrast & Legibility:** High-contrast text compliance against dark backgrounds (`#0B0F17` / `#111827`).

---

## 11. Performance & Engineering Constraints

- **Static Deployability:** The application must build to static assets capable of hosting on any static cloud edge (e.g., Vercel, Netlify, GitHub Pages) without requiring a runtime Node.js server.
- **Shared Code Architecture:** Common UI components (Navbar, Footer, Buttons, Badges, Cards, Modals) must be reused across routes to prevent code duplication.
- **Optimal Bundle Size:** Code-split route bundles to ensure instant initial page loads ($< 1.5\text{s}$ FCP).
- **No Heavy 3D Bloat:** Visual depth achieved through crisp CSS gradients, SVG accents, and lightweight transforms rather than heavy 3D canvases that drain mobile batteries.

---

## 12. Content Non-Invention Rules & Placeholders

### 12.1 The Golden Rule
> **Never invent, hallucinate, or extrapolate personal information, technical proficiencies, or professional credentials.**

### 12.2 Standardized Placeholder Syntax
Where specific candidate details are pending confirmation, the codebase and documentation must utilize clear, bracketed placeholders:
- Professional URLs: `[YOUR GITHUB URL]`, `[YOUR LINKEDIN URL]`
- QSpiders Details: `[INTERNSHIP ROLE]`, `[INTERNSHIP DURATION]`, `[INTERNSHIP START DATE]`, `[INTERNSHIP END DATE]`, `[TOPICS LEARNED]`, `[PROJECT DETAILS]`
- Media Assets: Styled `ImagePlaceholder` components with explicit labels (e.g., `[Institution Photo Pending]`, `[Certificate Preview Pending]`).

---

## 13. Pending Information Registry

The following confirmed data gaps are tracked in this registry and will be populated as Shivam provides the verified information:

| Data Item | Impacted Page(s) | Status | Action Plan |
|---|---|---|---|
| Verified GitHub Profile URL | Global Navbar, Footer | Pending | Replace `[YOUR GITHUB URL]` in data layer |
| Verified LinkedIn Profile URL | Global Navbar, Footer | Pending | Replace `[YOUR LINKEDIN URL]` in data layer |
| Verified Programming Languages | `/programming` | Pending | Populate structured array in data layer |
| Categorized Technical Skills | `/skills` | Pending | Populate frameworks, tools, databases in data layer |
| Project Specifics (~5–6 projects) | `/projects` | Pending | Populate project title, stack, and descriptions in data layer |
| Official Certificate Collection | `/certificates` | Pending | Populate certificate list and image files |
| QSpiders Internship Specifics | `/qspiders-internship` | Pending | Replace `[INTERNSHIP ROLE]`, duration, and topics |
| Official Resume PDF | `/resume` | Pending | Add `shivam-gaikwad-resume.pdf` to `public/resume/` |
| Institution Photos (×4) | `/education` | Pending | Add photos to `public/images/education/` |

---

**End of PRD v2.0**
