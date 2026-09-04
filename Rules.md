# Project Development Rules
## Personal Portfolio — Shivam Laxman Gaikwad

**Document Version:** 1.0  
**Created:** 2026-09-04  
**Status:** Active — Mandatory Compliance  
**References:** [PRD.md](file:///c:/Users/Shivam/OneDrive/画像/Desktop/All%20Projects/Portfolio/PRD.md) | [Architecture.md](file:///c:/Users/Shivam/OneDrive/画像/Desktop/All%20Projects/Portfolio/Architecture.md)

---

## Table of Contents

1. [General Development Rules](#1-general-development-rules)
2. [Technology Rules](#2-technology-rules)
3. [Code Quality Standards](#3-code-quality-standards)
4. [Component Rules](#4-component-rules)
5. [Data Architecture Rules](#5-data-architecture-rules)
6. [Personal Information Rules](#6-personal-information-rules)
7. [Content & Authenticity Rules](#7-content--authenticity-rules)
8. [Motion & Animation Rules](#8-motion--animation-rules)
9. [GSAP & ScrollTrigger Rules](#9-gsap--scrolltrigger-rules)
10. [3D & WebGL Rules](#10-3d--webgl-rules)
11. [Performance Rules](#11-performance-rules)
12. [Responsive Design Rules](#12-responsive-design-rules)
13. [Accessibility (a11y) Rules](#13-accessibility-a11y-rules)
14. [Asset & Media Rules](#14-asset--media-rules)
15. [Project Section Rules](#15-project-section-rules)
16. [Certificate Section Rules](#16-certificate-section-rules)
17. [Education Timeline Rules](#17-education-timeline-rules)
18. [Links & Social Profiles Rules](#18-links--social-profiles-rules)
19. [UI/UX & Visual Design Rules](#19-uiux--visual-design-rules)
20. [Error Handling & Debugging Rules](#20-error-handling--debugging-rules)
21. [File & Workspace Management Rules](#21-file--workspace-management-rules)
22. [Documentation Lifecycle Rules](#22-documentation-lifecycle-rules)
23. [Phased Development Workflow](#23-phased-development-workflow)
24. [Change Management Protocol](#24-change-management-protocol)
25. [Final Quality Verification Checklist](#25-final-quality-verification-checklist)

---

## 1. General Development Rules

- **Source of Truth:** Treat [PRD.md](file:///c:/Users/Shivam/OneDrive/画像/Desktop/All%20Projects/Portfolio/PRD.md) as the absolute authority on project requirements and [Architecture.md](file:///c:/Users/Shivam/OneDrive/画像/Desktop/All%20Projects/Portfolio/Architecture.md) as the technical and structural blueprint.
- **Zero Hallucination Policy:** Never invent personal information, certificates, projects, education details, achievements, links, or skills under any circumstances.
- **Placeholders Required:** When specific information or media has not yet been provided, use cleanly styled, clearly marked placeholders or typed configuration defaults.
- **Scope Discipline:** Never alter previously approved requirements without an explicit reason and direct confirmation from Shivam.
- **Code Stability:** Do not rewrite or refactor working code unnecessarily.
- **Simplicity First:** Always choose clean, maintainable, and readable solutions over clever, convoluted abstractions.
- **No Over-Engineering:** Avoid building unnecessary infrastructure, heavy abstractions, or speculative features that provide no immediate value.

---

## 2. Technology Rules

The technical stack is defined in [Architecture.md](file:///c:/Users/Shivam/OneDrive/画像/Desktop/All%20Projects/Portfolio/Architecture.md):
- **Core Stack:** React, Vite, TypeScript, Tailwind CSS, GSAP (with ScrollTrigger).
- **Optional/Conditional Stack:** Three.js / React Three Fiber, Lenis smooth scrolling.

### Strict Tooling Guidelines:
- **Purposeful Dependencies:** Never install a library simply because it is popular or trendy. Every dependency must solve a specific problem that cannot be solved cleanly with native browser capabilities.
- **Native Capabilities First:** Prefer native web APIs (e.g., CSS scroll behavior, Intersection Observer, native dialogs, Web Animations API) where they provide equivalent performance and quality without extra bundle weight.
- **Frontend Exclusivity:** Do not introduce a backend server, database, authentication provider, admin dashboard, or remote API layer unless explicitly requested for a future phase.
- **Just-in-Time Installation:** Install libraries only during the phase in which they are actively implemented, never all upfront.

---

## 3. Code Quality Standards

All written code must adhere to high professional standards:

- **Clarity & Readability:** Code must be easily understandable at a glance with clear variable, function, and component naming.
- **Modular Architecture:** Structure code into small, cohesive, and decoupled modules.
- **Avoid Anti-Patterns:**
  - No monolithic components containing hundreds of lines of mixed logic.
  - No duplicated logic or repeated copy-pasted UI blocks.
  - No premature or speculative abstraction.
  - No hardcoded content strings scattered inside UI templates.
  - No unused imports, dead variables, or commented-out debris.
  - No debugging statements (`console.log`, debugger statements) in production code.
- **Meaningful Naming Conventions:**
  - Components: PascalCase (e.g., `TimelineItem.tsx`, `ProjectCard.tsx`).
  - Hooks: camelCase starting with `use` (e.g., `useScrollReveal.ts`).
  - Utilities & Helpers: camelCase (e.g., `formatDate.ts`).
  - Types/Interfaces: PascalCase (e.g., `Project`, `Education`).
  - Constants & Data: camelCase or UPPER_SNAKE_CASE (e.g., `educationData.ts`).

---

## 4. Component Rules

- **Single Responsibility Principle:** Each component must perform exactly one function well (e.g., display a card, render a modal, wrap a section).
- **No Giant Components:** The entire portfolio must never be assembled in a single monolithic file. Major sections must reside in their own dedicated modules within `src/sections/`.
- **Reusable UI Extraction:** Extract shared UI elements (buttons, badges, headings, cards, modals) into `src/components/ui/` only when genuine reuse exists across multiple sections.
- **Clean Component Scopes:** Avoid creating dozens of micro-files for components that are only used in one place and fit naturally within their parent section.
- **Lifecycle Cleanliness:** All side effects (event listeners, GSAP instances, timers) must be cleanly cleaned up on component unmount.

---

## 5. Data Architecture Rules

- **Separation of Presentation & Data:** Personal content, copy, and structural lists must reside in `src/data/`, completely decoupled from presentation components.
- **Data Schemas via TypeScript:** Every data domain (`Project`, `Certificate`, `Education`, `Skill`, `SocialLink`) must have an enforced TypeScript interface in `src/types/`.
- **Zero Component Duplication for Content:** Adding a project, certificate, or education milestone must require adding an entry to a data array, never creating a new JSX component or duplicating markup.
- **Immutability & Predictability:** Keep static data files declarative, pure, and cleanly exported.

---

## 6. Personal Information Rules

The following facts are confirmed and strictly governed:

- **Full Name:** Shivam Laxman Gaikwad
- **Age:** 21
- **Current Academic Pursuit:** Bachelor of Computer Applications (BCA) at JD College of Engineering and Management, Nagpur
- **Complete Education History:**
  1. **2021:** 10th / Secondary Education — Green City English High School, Nagpur (Completed).
  2. **2021–2023:** 12th / Higher Secondary Education — Shree Mathura Das Mohta College of Engineering and Management, Nagpur (Completed 2023).
  3. **2023–2024:** Horticulture — K.K. Wagh College of Horticulture and Management, Nashik (Joined horticulture; departed during first year in 2024).
  4. **2024–Present:** Bachelor of Computer Applications (BCA) — JD College of Engineering and Management, Nagpur (Currently pursuing).

**Strict Constraint:** Never alter, omit, rephrase negatively, or reinterpret these verified facts without explicit instruction from Shivam.

---

## 7. Content & Authenticity Rules

To maintain high professional integrity, never create, hallucinate, or assume:
- Fake certificates or certifications.
- Invented awards or competitions.
- Fictitious work experience, job titles, or internships.
- Fabricated skills, tools, or programming languages.
- Artificial project metrics, fake user stats, or fictitious client names.
- Non-existent GitHub repositories or live URLs.
- Fabricated social profiles or fake contact numbers/emails.

If content is unavailable, designate it explicitly with a placeholder (e.g., `[To be provided]`) or await input.

---

## 8. Motion & Animation Rules

Motion is a core pillar of this portfolio, but it must be purposeful and refined:

- **Professional Tone:** Animations must feel smooth, intentional, snappy, and premium.
- **Narrative Enhancement:** Motion must guide user focus and enrich storytelling, not merely provide visual stimulation.
- **Prohibited Motion Anti-Patterns:**
  - No excessive bouncing or spring physics that feel childish or playful.
  - No constant spinning, rotating, or vibrating elements.
  - No uncontrolled particle storms or distracting background noise.
  - No long, unskippable loading screens or blocked entrance sequences.
  - No animations that compromise typography readability or visual contrast.
  - No motion that intercepts or interferes with natural page navigation and click targets.
- **Universal Comprehension:** Content and layout must remain completely readable, accessible, and structured even if all animations are paused or disabled.

---

## 9. GSAP & ScrollTrigger Rules

When utilizing GSAP for animations:

- **Scoped Lifecycles:** Always use `@gsap/react` (`useGSAP()`) or scoped contexts to bind animations strictly to component refs.
- **Mandatory Cleanup:** Always kill ScrollTriggers, revert timelines, and clear listeners when a component unmounts to prevent memory leaks and ghost triggers.
- **Selective Triggers:** Do not attach separate ScrollTriggers to hundreds of individual elements. Batch animations or trigger parent containers with staggered reveals.
- **Render Safety:** Never instantiate new GSAP tweens directly inside the render body. Always construct them inside hooks or lifecycle effects.
- **GPU-Accelerated Properties Only:** Animate `transform` (`x`, `y`, `scale`, `rotation`) and `opacity`. Never animate layout-triggering properties such as `top`, `left`, `width`, `height`, `margin`, or `padding`.

---

## 10. 3D & WebGL Rules

Three.js / React Three Fiber is strictly an **optional enhancement**:

- **Value-Driven 3D:** Do not add 3D scenes simply because this is a motion portfolio. 3D must only be integrated if it provides genuine artistic value to the narrative.
- **Performance Guardrails:** If a 3D element causes frame drops (<60 FPS on typical hardware), high GPU heating, long bundle downloads, or mobile lag, it must be simplified, made static, or removed.
- **Mobile Graceful Degradation:** On mobile and tablet devices, 3D scenes should be disabled or replaced with lightweight CSS/SVG alternatives by default.

---

## 11. Performance Rules

Performance is non-negotiable for a professional developer portfolio:

- **Core Web Vitals Budgets:** Target FCP < 1.5s, LCP < 2.5s, CLS < 0.1, and FID < 100ms.
- **Asset Optimization:** All images must be compressed, formatted in modern formats (WebP/AVIF), and sized appropriately.
- **Lazy Loading Strategy:** Implement native `loading="lazy"` on all below-the-fold media and lazy-load non-critical components or modals using `React.lazy`.
- **Render Efficiency:** Avoid unnecessary React re-renders by maintaining stable references, using `React.memo` for repeated list items, and utilizing primitive keys (never array indices).
- **DOM Restraint:** Avoid deep DOM nesting and unnecessary wrapper `div` elements.
- **Zero Junk:** Never sacrifice frame rates or page responsiveness for visual flare.

---

## 12. Responsive Design Rules

The website must be designed and built **mobile-first** across all major viewports:

- **Target Viewports:**
  - Mobile (320px – 767px)
  - Tablet (768px – 1023px)
  - Laptop (1024px – 1439px)
  - Desktop (1440px+)
- **Adaptive UX over Shrunk Desktop:** Never simply scale down desktop layouts. Reorganize content into natural vertical flows on smaller screens.
- **Mobile Interaction Parity:**
  - Replace mouse-following and cursor effects with responsive touch states.
  - Ensure all tap targets are at least 44×44px with comfortable spacing.
  - Simplify or disable heavy scroll parallax effects on low-power mobile devices.
  - Ensure text sizes, line heights, and padding adapt properly to prevent horizontal overflow.

---

## 13. Accessibility (a11y) Rules

- **Semantic Document Structure:** Use native HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Heading Hierarchy:** Exactly one `<h1>` per page. Ensure logical `<h2>` and `<h3>` nesting throughout all sections.
- **Accessible Motion:** Fully respect `prefers-reduced-motion: reduce`. When active, disable all auto-play, scroll-linked transforms, and entrance staggers, presenting content immediately.
- **Keyboard Navigation:** All interactive elements (links, buttons, cards, modals) must be fully navigable and operable via `Tab`, `Enter`, `Space`, and `Escape`.
- **Visible Focus States:** Never remove default focus outlines without replacing them with high-contrast, custom focus styles.
- **Image Text Alternatives:** Every image must include a meaningful, context-aware `alt` attribute. Purely decorative elements must explicitly use `alt=""` and `aria-hidden="true"`.
- **Color Contrast:** Maintain WCAG AA compliance (minimum 4.5:1 for standard body text, 3:0 for large text and UI borders).

---

## 14. Asset & Media Rules

- **Real Institutional Imagery Only:** Do not generate AI or pull stock campus photos for schools and colleges. Only use real photos provided or explicitly approved by Shivam.
- **Structured Asset Organization:** Store assets in their appropriate category directories in `src/assets/images/` (`education/`, `projects/`, `certificates/`, `profile/`).
- **Public Assets:** Static downloadable assets like `resume.pdf` and root metadata (`favicon.ico`, `og-image.png`) belong exclusively in `/public`.
- **Aspect Ratio Stability:** Always specify explicit aspect ratios or bounding dimensions on image containers to eliminate Cumulative Layout Shift (CLS).

---

## 15. Project Section Rules

- **Data-Driven Architecture:** Projects must be loaded entirely from `src/data/projects.ts`.
- **Standardized Schema:** Each project entry must conform to the `Project` interface (title, problem, description, features, tech stack, screenshots, contribution, status, URLs).
- **Authentic Project Work:** Highlight only authentic projects created by Shivam. Do not populate the section with generic boilerplate tutorials disguised as custom work.
- **Graceful Links:** If a project does not have a live deployment or public repository yet, handle the missing link gracefully in the UI without dead or misleading buttons.

---

## 16. Certificate Section Rules

- **Data-Driven Architecture:** Certificates must be loaded exclusively from `src/data/certificates.ts`.
- **Authentic Credentials:** Display only real certifications awarded to Shivam.
- **Scalable UI:** Because there is a large collection of certificates, the UI must support filtering (by topic/category) or compact card layouts to avoid excessive vertical scrolling.
- **Full-Size Verification:** Support a modal or lightbox viewer allowing recruiters to examine certificates in high detail along with issuing organization details and verification links where available.

---

## 17. Education Timeline Rules

- **Chronological Narrative:** Present education as an engaging chronological story highlighting Shivam's progression into technology.
- **Professional Pivot Framing:** Frame the transition from Horticulture (K.K. Wagh College) to Computer Applications (JD College) positively and professionally as a conscious, purposeful career pivot into software development.
- **Current Milestone Highlighting:** The ongoing BCA program must be given distinctive visual prominence as Shivam's current educational focus.
- **Campus Media Placeholders:** When institution images are pending, render polished, theme-appropriate visual placeholders rather than empty broken image boxes.

---

## 18. Links & Social Profiles Rules

- **Centralized Social Configuration:** Define profile links exclusively in `src/data/socialLinks.ts`.
- **Verified URLs Only:** Use valid URLs provided by Shivam for GitHub and LinkedIn. Never invent fake handles or placeholder accounts.
- **Secure External Navigation:** All external links opening in new tabs must include `target="_blank"` and `rel="noopener noreferrer"`.
- **Explicit Accessibility Labels:** Ensure icon-only links provide explicit `aria-label` attributes (e.g., `aria-label="Visit Shivam's GitHub Profile"`).

---

## 19. UI/UX & Visual Design Rules

- **Bespoke, Premium Aesthetics:** The visual presentation must look like a high-end, custom developer portfolio, avoiding standard, recognizable boilerplate templates.
- **Information Hierarchy:** Recruiter scanning efficiency must remain front and center. Keep titles, summaries, skills, and calls to action instantly readable.
- **Typography & Spacing:** Use consistent typographic scales and intentional spacing rules defined via design tokens.
- **Micro-Interactions:** Enhance interactive components with subtle hover, active, and focus transitions that provide tactile feedback without causing distraction.

---

## 20. Error Handling & Debugging Rules

- **Root-Cause Resolution:** When an error, crash, or layout issue occurs, identify and fix the underlying cause. Never mask issues with hacky workarounds or CSS `!important` patches.
- **No Silent Removals:** Never silently delete or bypass a required feature or requirement to resolve a bug.
- **Console & Terminal Hygiene:** Actively inspect browser developer tools and terminal outputs. Zero warnings or unhandled errors are permitted in completed work.
- **Defensive Data Handling:** Guard against undefined or missing properties in data models (e.g., optional links or images) using safe optional chaining and fallback components.

---

## 21. File & Workspace Management Rules

- **Strict Adherence to Structure:** Organize all new files strictly according to the folder structure outlined in [Architecture.md](file:///c:/Users/Shivam/OneDrive/画像/Desktop/All%20Projects/Portfolio/Architecture.md).
- **Clean Workspace:** Never create arbitrary scratch files or test files in the project root.
- **No Dead Files:** Delete obsolete, replaced, or orphaned components immediately to avoid codebase confusion.
- **Synchronized Documentation:** When an architectural choice evolves during development, immediately update the relevant documentation file to keep records aligned.

---

## 22. Documentation Lifecycle Rules

The project documentation consists of the following living files:
1. `PRD.md` — Product Requirements Document (Completed).
2. `Architecture.md` — Technical & Structural Architecture (Completed).
3. `Rules.md` — Development Standards & Constraints (This Document).
4. `Phases.md` — Phased Implementation Roadmap (Upcoming).
5. `Design.md` — Visual Design System, Tokens, Typography & Motion Specs (Upcoming).
6. `Memory.md` — Project History, State & Key Decisions (Created once development begins).

**Rule:** `Memory.md` must not be created at the beginning. It will be initiated when coding begins and updated at the end of each development phase.

---

## 23. Phased Development Workflow

- **Strict Phase Discipline:** Implementation proceeds strictly in sequential, controlled phases as documented in `Phases.md`.
- **No Premature Implementation:** Never jump ahead to build components, write sections, or install libraries assigned to future phases.
- **Phase Verification & Stop:** At the completion of each phase, run all verification checks, report findings, and halt execution to await user confirmation before starting the next phase.

---

## 24. Change Management Protocol

Before introducing any major structural or architectural change during the project:
1. Review [PRD.md](file:///c:/Users/Shivam/OneDrive/画像/Desktop/All%20Projects/Portfolio/PRD.md).
2. Review [Architecture.md](file:///c:/Users/Shivam/OneDrive/画像/Desktop/All%20Projects/Portfolio/Architecture.md).
3. Review [Rules.md](file:///c:/Users/Shivam/OneDrive/画像/Desktop/All%20Projects/Portfolio/Rules.md).
4. Evaluate necessity and confirm it does not violate personal information, performance, or accessibility rules.
5. Ensure complete backwards compatibility with existing, working components.

---

## 25. Final Quality Verification Checklist

Before marking any implementation phase or section as complete, the following checklist must be satisfied:

- [ ] **Development Server:** Application starts cleanly without warnings or errors (`npm run dev`).
- [ ] **Type Safety:** TypeScript passes cleanly with zero compilation errors (`tsc --noEmit`).
- [ ] **Build Verification:** Production bundle compiles successfully (`npm run build`).
- [ ] **Console Cleanliness:** Browser developer console has zero uncaught errors or performance warnings.
- [ ] **Responsive Validation:** Layouts adapt seamlessly on Mobile (375px), Tablet (768px), Laptop (1024px), and Desktop (1440px+).
- [ ] **Motion & Performance:** Animations run at steady 60 FPS without scroll jank or layout shifts.
- [ ] **Data Integrity:** All displayed content matches confirmed data; no invented details exist.
- [ ] **Accessibility Check:** Keyboard navigation, visible focus rings, and `prefers-reduced-motion` function properly.
- [ ] **Interactive Elements:** All buttons, links, modals, and tabs trigger their expected behaviors.

---

**End of Rules v1.0**
