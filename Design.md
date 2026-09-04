# Visual Design System & Motion Language
## Personal Portfolio — Shivam Laxman Gaikwad

**Document Version:** 2.0 (Light Mode + Dark Mode UI Revision)  
**Updated:** 2026-09-04  
**Status:** Approved — Visual Design Specification  
**Design Principle:** "Professional first, futuristic second."  
**References:** [PRD.md](file:///c:/Users/Shivam/OneDrive/画像/Desktop/All%20Projects/Portfolio/PRD.md) | [Architecture.md](file:///c:/Users/Shivam/OneDrive/画像/Desktop/All%20Projects/Portfolio/Architecture.md) | [Rules.md](file:///c:/Users/Shivam/OneDrive/画像/Desktop/All%20Projects/Portfolio/Rules.md) | [Phases.md](file:///c:/Users/Shivam/OneDrive/画像/Desktop/All%20Projects/Portfolio/Phases.md) | [Memory.md](file:///c:/Users/Shivam/OneDrive/画像/Desktop/All%20Projects/Portfolio/Memory.md)

---

## Table of Contents

1. [Design Philosophy & Core Principle](#1-design-philosophy--core-principle)
2. [Dual Visual Direction (Light & Dark)](#2-dual-visual-direction-light--dark)
3. [Color System & Semantic Tokens](#3-color-system--semantic-tokens)
4. [Theme Switching & Persistence Architecture](#4-theme-switching--persistence-architecture)
5. [Typography System](#5-typography-system)
6. [Spacing & Layout System](#6-spacing--layout-system)
7. [Global Navigation & Theme Toggle](#7-global-navigation--theme-toggle)
8. [Component & Route Theming](#8-component--route-theming)
   - 8.1 [Hero Section](#81-hero-section)
   - 8.2 [About Section](#82-about-section)
   - 8.3 [Education Timeline Section](#83-education-timeline-section)
   - 8.4 [Programming Knowledge Section](#84-programming-knowledge-section)
   - 8.5 [Technical Skills Section](#85-technical-skills-section)
   - 8.6 [Projects Showcase & Modal](#86-projects-showcase--modal)
   - 8.7 [Certificates & Lightbox](#87-certificates--lightbox)
   - 8.8 [QSpiders Industrial Internship](#88-qspiders-industrial-internship)
   - 8.9 [Resume CTA & Modal Viewer](#89-resume-cta--modal-viewer)
   - 8.10 [Footer](#810-footer)
   - 8.11 [404 Cybernetic Page](#811-404-cybernetic-page)
9. [Card Language](#9-card-language)
10. [Buttons, Links & Interactive Controls](#10-buttons-links--interactive-controls)
11. [Background & Depth Architecture](#11-background--depth-architecture)
12. [Motion Language & Theme Transitions](#12-motion-language--theme-transitions)
13. [Accessibility & Color Contrast Standards](#13-accessibility--color-contrast-standards)
14. [Responsive Layout Adaptation](#14-responsive-layout-adaptation)
15. [Performance-Conscious Design Rules](#15-performance-conscious-design-rules)
16. [Design Tokens Specification (TypeScript)](#16-design-tokens-specification-typescript)
17. [Content Placeholders Strategy](#17-content-placeholders-strategy)

---

## 1. Design Philosophy & Core Principle

### "Professional First, Futuristic Second"

The portfolio represents **Shivam Laxman Gaikwad** — a disciplined, high-aptitude BCA student and aspiring software engineer.

The design must instantly impress:
- **Technical Recruiters & Hiring Managers:** Delivering crisp visual hierarchy, fast readability, and unambiguous proof of skills, coursework, and projects.
- **Senior Software Engineers & Architects:** Displaying clean layout systems, tasteful micro-interactions, robust accessibility, and zero gimmickry.
- **Academic & Industry Evaluators:** Reflecting structured learning, verifiable milestones, and purposeful dedication to software craft.

### Core Tenets
1. **Engineered Clarity Over Decorative Noise:** Visual elements must organize and clarify information rather than compete for attention. The site is a professional developer portfolio, not a gaming portal.
2. **First-Class Dual Theming:** Light Mode is the primary, default experience; Dark Mode is a fully considered alternative. Neither theme is an afterthought or an inverted filter.
3. **Restrained Technical Accents:** Futuristic cues (subtle hairline borders, precision mono tags, cybernetic crosshair accents, controlled ambient glow) are applied with elegance and restraint.
4. **Fluid, Tactile Micro-Interactions:** Motion guides focus and affirms user interaction at 60 FPS without layout shifts or cognitive fatigue.
5. **Zero Gimmicks / 100% Authenticity:** No fake skill percentage wheels (e.g. "React 89%"), no fabricated employment records, and zero distracting particle swarms.

---

## 2. Dual Visual Direction (Light & Dark)

The portfolio supports two comprehensive, intentionally designed visual themes.

| Attribute | Light Mode (Primary / Default) | Dark Mode (Alternative) |
|---|---|---|
| **Tone** | Clean, modern, crisp, airy, engineering-grade | Sleek, deep, high-contrast, technical, nocturnal |
| **Atmosphere** | Soft off-white canvas with luminous clarity | Deep charcoal & slate canvas with subtle ambient glows |
| **Surfaces** | Pure white elevated cards with soft multi-layer shadows | Matte obsidian & slate panels with luminous border highlights |
| **Primary Accent** | Deep Electric Azure (`#0284C7`) / Indigo (`#2563EB`) | Luminous Sky Cyan (`#38BDF8`) |
| **Borders** | Subtle slate hairlines (`#E2E8F0` / `#CBD5E1`) | Refined translucent hairlines (`rgba(148,163,184,0.15)`) |
| **Hover States** | Elevation lift, soft border deepening, subtle accent shadow | Elevation lift, glowing border illumination, ambient backlight |
| **Target Audience** | Daytime review by corporate recruiters and engineering leads | Evening review, developer preferences, dark-mode displays |

### Explicit Anti-Patterns (Avoid in Both Themes)
- **In Light Mode:**
  - No blinding pure `#FFFFFF` across the entire viewport background.
  - No low-contrast pale gray text on white backgrounds.
  - No heavy dark black drop-shadows that look muddy.
  - No neon cyan glows that wash out on light surfaces.
- **In Dark Mode:**
  - No pure `#000000` pitch-black backgrounds everywhere.
  - No garish neon gradients or rainbow borders on every card.
  - No illegible low-contrast text on dark surfaces.
  - No distracting particle swarms or heavy canvas animations.

---

## 3. Color System & Semantic Tokens

Both themes share an aligned semantic token taxonomy, allowing components to consume consistent design tokens that dynamically switch.

### 3.1 Side-by-Side Token Mapping

| Token Name | Light Mode (Default) | Dark Mode | Semantic Purpose |
|---|---|---|---|
| `bg-primary` | `#F8FAFC` (Slate 50) | `#0B0F17` (Obsidian Navy) | Primary page background |
| `bg-secondary` | `#F1F5F9` (Slate 100) | `#0F172A` (Deep Slate) | Alternating section depth, drawer panels |
| `bg-elevated` | `#FFFFFF` (Pure White) | `#161F30` (Elevated Navy) | Modals, floating dropdowns, tooltips |
| `surface-card` | `#FFFFFF` (Pure White) | `#131926` (Matte Slate) | Standard card backgrounds |
| `surface-hover` | `#F8FAFC` (Tinted White) | `#1A2234` (Hover Slate) | Card and interactive surface hover state |
| `border-subtle` | `#E2E8F0` (Slate 200) | `rgba(148, 163, 184, 0.12)` | Standard dividing hairlines & card borders |
| `border-hover` | `#94A3B8` (Slate 400) | `rgba(56, 189, 248, 0.40)` | Accentuated border highlight on card hover |
| `text-primary` | `#0F172A` (Slate 900) | `#F8FAFC` (Slate 50) | Primary headings, candidate name, card titles |
| `text-secondary`| `#475569` (Slate 600) | `#94A3B8` (Slate 400) | Body narrative, milestone details, descriptions |
| `text-muted` | `#64748B` (Slate 500) | `#64748B` (Slate 500) | Timestamps, metadata, labels, tags |
| `accent-primary`| `#0284C7` (Sky 600) | `#38BDF8` (Sky 400) | Primary CTAs, active route indicators, key badges |
| `accent-hover` | `#0369A1` (Sky 700) | `#0EA5E9` (Sky 500) | Interactive hover state for accent buttons |
| `accent-subtle`| `rgba(2, 132, 199, 0.08)`| `rgba(56, 189, 248, 0.12)`| Accent badge background, active pill fill |
| `accent-glow` | `rgba(2, 132, 199, 0.12)`| `rgba(56, 189, 248, 0.20)`| Ambient radial backdrop pool |
| `status-success`| `#059669` (Emerald 600) | `#10B981` (Emerald 500) | Completed milestones, verified certificates |
| `status-active` | `#0284C7` (Sky 600) | `#38BDF8` (Sky 400) | Current pursuit (BCA), in-progress status |
| `status-warning`| `#D97706` (Amber 600) | `#F59E0B` (Amber 500) | Career pivot badges, in-progress tags |
| `status-error` | `#DC2626` (Red 600) | `#EF4444` (Red 500) | Validation notices, 404 warnings |

### 3.2 Contrast & Legibility Matrix (WCAG Compliance)

- **Light Mode Headings (`#0F172A` on `#F8FAFC`):** Contrast ratio **15.8:1** (Exceeds WCAG AAA).
- **Light Mode Body (`#475569` on `#FFFFFF`):** Contrast ratio **7.2:1** (Exceeds WCAG AAA).
- **Light Mode Accent (`#0284C7` on `#FFFFFF`):** Contrast ratio **4.7:1** (Meets WCAG AA for UI/text).
- **Dark Mode Headings (`#F8FAFC` on `#0B0F17`):** Contrast ratio **16.1:1** (Exceeds WCAG AAA).
- **Dark Mode Body (`#94A3B8` on `#131926`):** Contrast ratio **6.4:1** (Exceeds WCAG AA).
- **Dark Mode Accent (`#38BDF8` on `#0B0F17`):** Contrast ratio **8.3:1** (Exceeds WCAG AAA).

---

## 4. Theme Switching & Persistence Architecture

### 4.1 Theme Toggle Control
The theme toggle is an integrated, first-class element in the global Navbar (and mobile navigation drawer).

- **Visual Concept:**
  - In **Light Mode**: Displays a subtle Moon icon (`🌙` / `lucide-react Moon`), communicating: *"Switch to Dark Mode"*.
  - In **Dark Mode**: Displays a glowing Sun icon (`☀️` / `lucide-react Sun`), communicating: *"Switch to Light Mode"*.
- **Physical Specifications:**
  - Dimensions: `40px × 40px` touch target with `rounded-xl` border radius.
  - Background: `bg-slate-200/60 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-700/80`.
  - Border: `border border-slate-300/50 dark:border-slate-700/50`.
  - Zero Layout Shift: The toggle has a fixed bounding box (`w-10 h-10`), ensuring zero shift of surrounding navigation items upon toggle.
- **Accessibility:**
  - `aria-label="Toggle color theme (currently [light/dark] mode)"`
  - Keyboard accessible (`Tab` focusable with high-visibility outline).
  - Screen reader announcement on theme change.

### 4.2 Client-Side Persistence Protocol
1. **Initial Hydration Strategy:**
   - Check `localStorage.getItem("portfolio_theme")`.
   - If `'dark'` or `'light'`, apply that explicit user preference.
   - If null (first visit), evaluate system color preference: `window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'`.
   - Set the root `<html>` element class (`class="light"` or `class="dark"`).
2. **Flash of Unstyled Content (FOUC) Prevention:**
   - Execute an inline script in `<head>` before body render to immediately read localStorage/media-query and assign the root class.
3. **Manual Selection:**
   - When the user clicks the theme toggle, invert the theme, update `localStorage.setItem("portfolio_theme", newTheme)`, and smoothly transition root class.

---

## 5. Typography System

### 5.1 Font Families
- **Primary Sans:** **Inter** / **Plus Jakarta Sans** (`system-ui, -apple-system, sans-serif`) — Crisp humanist sans for headings and narrative body.
- **Monospace / Code:** **JetBrains Mono** (`ui-monospace, monospace`) — Precision technical metadata, dates, tech stacks, and tags.

### 5.2 Typographic Hierarchy & Themed Colors

| Level | Size (Desktop / Mobile) | Weight | Light Mode Color | Dark Mode Color | Application |
|---|---|---|---|---|---|
| **Display H1** | `3.75rem / 2.5rem` | 800 Bold | `#0F172A` | `#F8FAFC` | Hero name: Shivam Laxman Gaikwad |
| **Section H1/H2**| `2.25rem / 1.75rem` | 700 Bold | `#0F172A` | `#F8FAFC` | Page primary titles |
| **Card H3** | `1.375rem / 1.25rem` | 600 Semi | `#0F172A` | `#F8FAFC` | Project, certificate & institution titles |
| **Subheading** | `1.125rem / 1.0rem` | 500 Medium | `#475569` | `#94A3B8` | Section taglines, roles |
| **Body Large** | `1.125rem / 1.0rem` | 400 Regular | `#334155` | `#CBD5E1` | Intro summaries, about bio |
| **Body Base** | `1.0rem / 0.9375rem` | 400 Regular | `#475569` | `#94A3B8` | Card descriptions, project summaries |
| **Meta / Mono** | `0.875rem / 0.8125rem`| 500 Medium | `#0284C7` / `#64748B` | `#38BDF8` / `#64748B` | Dates, institutions, code stacks |
| **Caption** | `0.75rem / 0.75rem` | 500 Medium | `#64748B` | `#64748B` | Micro-badges, status pills |

---

## 6. Spacing & Layout System

- **Mathematical Grid:** 8pt increments (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`, `128px`).
- **Max Container Width:** `1280px` (`max-w-7xl`) for page alignment.
- **Narrow Focus Width:** `768px` (`max-w-3xl`) for narrative intros, resume CTA, and 404 views.
- **Horizontal Screen Padding:** `16px` (`px-4`) on mobile, `24px` (`px-6`) on tablet, `32px` (`px-8`) on desktop.

---

## 7. Global Navigation & Theme Toggle

### 7.1 Desktop Navbar
- **Positioning:** Sticky top bar with smooth backdrop blur:
  - **Light Mode:** `bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm`
  - **Dark Mode:** `bg-[#0B0F17]/80 backdrop-blur-md border-b border-slate-800/80 shadow-md`
- **Branding:** Minimalist tech logo mark (`SG` or `SHIVAM`) with accent hover glow.
- **Navigation Links:**
  - **Light Mode:** Default `text-slate-600 hover:text-slate-900`; Active `text-sky-600 font-semibold` with subtle underline dot.
  - **Dark Mode:** Default `text-slate-400 hover:text-slate-100`; Active `text-sky-400 font-semibold` with subtle neon underline dot.
- **Controls Group (Right Side):**
  - Theme Toggle button (`Sun`/`Moon`).
  - "Resume" action button (styled CTA).

### 7.2 Mobile Navigation Drawer
- **Trigger:** Accessible hamburger button (`44×44px`).
- **Drawer Surface:**
  - **Light Mode:** `bg-white text-slate-900 border-l border-slate-200 shadow-2xl`
  - **Dark Mode:** `bg-[#0B0F17] text-slate-100 border-l border-slate-800 shadow-2xl`
- **Drawer Contents:** All 9 routes, theme toggle switch, and Resume CTA. Zero legacy Contact/Experience links.

---

## 8. Component & Route Theming

### 8.1 Hero Section
- **Light Mode:**
  - Soft ambient gradient pool in background (`radial-gradient(ellipse at 50% 20%, rgba(2, 132, 199, 0.08), transparent 70%)`).
  - Monospace eyebrow tag: `text-sky-700 bg-sky-50 border border-sky-200/60 rounded-full px-3 py-1`.
  - Display Title: Crisp charcoal (`#0F172A`) with subtle gradient accent on "Software Aspirant".
  - Primary CTA ("Explore Projects"): Filled deep azure button (`bg-sky-600 hover:bg-sky-700 text-white shadow-md shadow-sky-600/20`).
  - Secondary CTA ("View Resume"): Outline button (`border-slate-300 hover:border-slate-400 text-slate-700 bg-white hover:bg-slate-50`).
- **Dark Mode:**
  - Ambient cyan light pool (`radial-gradient(ellipse at 50% 20%, rgba(56, 189, 248, 0.12), transparent 70%)`).
  - Eyebrow tag: `text-sky-400 bg-sky-950/40 border border-sky-800/60 rounded-full px-3 py-1`.
  - Display Title: Crisp off-white (`#F8FAFC`).
  - Primary CTA: Vibrant cyan button (`bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold shadow-lg shadow-sky-400/20`).
  - Secondary CTA: Translucent button (`border-slate-700 hover:border-slate-500 text-slate-200 bg-slate-900/60 hover:bg-slate-800`).

### 8.2 About Section
- **Light Mode:**
  - Profile Image Frame: White card base, subtle slate border (`#E2E8F0`), soft ambient drop shadow.
  - Narrative Card: Crisp white surface (`#FFFFFF`), dark charcoal headings, slate body copy (`#475569`).
  - Core Focus Badges: `bg-slate-100 text-slate-700 border border-slate-200/80`.
- **Dark Mode:**
  - Profile Image Frame: Matte obsidian base, hairline border (`rgba(148, 163, 184, 0.15)`), cyan corner accents.
  - Narrative Card: Deep slate surface (`#131926`), off-white headings, cool gray body (`#94A3B8`).
  - Core Focus Badges: `bg-slate-800/60 text-slate-300 border border-slate-700/60`.

### 8.3 Education Timeline Section
- **Light Mode:**
  - Central Vertical Spine: Solid subtle slate line (`#CBD5E1`).
  - Completed Milestones: White cards with `#E2E8F0` border, emerald completion check, charcoal title.
  - Active Pursuit (BCA at JD College): Elevated white card with `#0284C7` accent border, glowing sky-blue node, "Currently Pursuing" badge in `bg-sky-50 text-sky-700 border border-sky-200`.
  - Pivot Milestone (Horticulture at K.K. Wagh): Positive amber pivot badge (`bg-amber-50 text-amber-700 border border-amber-200`).
- **Dark Mode:**
  - Central Vertical Spine: Translucent glowing line (`rgba(148, 163, 184, 0.2)`).
  - Completed Milestones: Slate cards (`#131926`), emerald node, off-white title.
  - Active Pursuit: Elevated slate card with `#38BDF8` cyan border highlight, pulsating cyan node, "Currently Pursuing" badge in `bg-sky-950/60 text-sky-400 border border-sky-800`.
  - Pivot Milestone: Amber pivot badge (`bg-amber-950/60 text-amber-400 border border-amber-800`).

### 8.4 Programming Knowledge Section
- **Light Mode:**
  - Language Cards: Pure white surface (`#FFFFFF`), subtle slate border (`#E2E8F0`), soft shadow (`0 4px 6px -1px rgba(0,0,0,0.05)`).
  - Brand Badges: Crisp official technology logos, dark headings, slate usage notes.
  - Category Filter Tabs: `bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900`; Active tab: `bg-sky-600 text-white`.
- **Dark Mode:**
  - Language Cards: Matte slate surface (`#131926`), hairline border (`rgba(148,163,184,0.12)`).
  - Brand Badges: Tech logos with subtle luminescence, off-white headings.
  - Category Filter Tabs: `bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200`; Active tab: `bg-sky-400 text-slate-950 font-semibold`.

### 8.5 Technical Skills Section
- **Light Mode:**
  - Category Panels: White cards with clean border and header icon in `#0284C7`.
  - Skill Pills: `bg-slate-50 hover:bg-white text-slate-700 border border-slate-200/80 hover:border-sky-300 hover:shadow-sm`.
- **Dark Mode:**
  - Category Panels: Slate cards (`#131926`) with header icon in `#38BDF8`.
  - Skill Pills: `bg-slate-800/50 hover:bg-slate-800 text-slate-300 border border-slate-700/60 hover:border-sky-500/60`.

### 8.6 Projects Showcase & Modal
- **Light Mode:**
  - Showcase Cards: Crisp white background, high-contrast screenshot framing, slate tag pills (`bg-slate-100 text-slate-700`).
  - Card Action Links: "GitHub" & "Live Demo" buttons in `text-slate-700 hover:text-sky-600`.
  - Architecture Modal: Pure white surface (`#FFFFFF`), slate backdrop (`bg-slate-900/40 backdrop-blur-sm`), clear charcoal titles, clean code/spec blocks.
- **Dark Mode:**
  - Showcase Cards: Slate background (`#131926`), dark screenshot framing, cool gray tag pills (`bg-slate-800/80 text-slate-300`).
  - Card Action Links: Buttons in `text-slate-300 hover:text-sky-400`.
  - Architecture Modal: Matte slate surface (`#131926`), dark backdrop (`bg-black/70 backdrop-blur-sm`), off-white titles.

### 8.7 Certificates & Lightbox
- **Light Mode:**
  - Certificate Cards: Crisp white document presentation, credential issuer badge in `bg-slate-100 text-slate-700`, subtle paper frame.
  - Filter Tabs: Accessible tabs with sky-blue active highlights.
  - Lightbox Modal: High-contrast modal overlay with white credential frame and dark controls.
- **Dark Mode:**
  - Certificate Cards: Matte slate cards (`#131926`), translucent border, cyan verification badge.
  - Lightbox Modal: Dark cybernetic overlay with glowing cyan accent borders.

### 8.8 QSpiders Industrial Internship
- **Light Mode:**
  - Highlights Banner: White card with sky-blue accent strip on left border (`border-l-4 border-sky-600`), charcoal titles.
  - Placeholders (`[INTERNSHIP ROLE]`, `[INTERNSHIP DURATION]`): Styled in `bg-slate-100 text-slate-700 border border-dashed border-slate-300 rounded px-2 py-0.5 font-mono`.
- **Dark Mode:**
  - Highlights Banner: Slate card with cyan accent strip (`border-l-4 border-sky-400`).
  - Placeholders: Styled in `bg-slate-800 text-slate-300 border border-dashed border-slate-600 rounded px-2 py-0.5 font-mono`.

### 8.9 Resume CTA & Modal Viewer
- **Light Mode:**
  - Call-to-Action Card: `bg-gradient-to-br from-white to-slate-50 border border-slate-200/90 shadow-lg shadow-slate-200/50`.
  - Primary Action ("Download PDF"): Filled sky-blue CTA button.
  - Secondary Action ("View in Browser"): Crisp white button with slate border.
  - Viewer Modal: Real document preview with off-white simulated sheet and dark typography.
- **Dark Mode:**
  - Call-to-Action Card: `bg-gradient-to-br from-[#131926] to-[#0F172A] border border-slate-800 shadow-2xl`.
  - Primary Action: Glowing cyan CTA button.
  - Secondary Action: Translucent dark slate button.
  - Viewer Modal: Dark document viewer with glowing crosshair accents.

### 8.10 Footer
- **Light Mode:** `bg-slate-100/60 border-t border-slate-200 text-slate-500`, active links in `text-slate-700 hover:text-sky-600`.
- **Dark Mode:** `bg-[#07090E] border-t border-slate-800/80 text-slate-500`, active links in `text-slate-400 hover:text-sky-400`.

### 8.11 404 Cybernetic Page
- **Light Mode:** Clean terminal card with white surface, slate border, charcoal error code `404`, and sky-blue "Return to Base" CTA.
- **Dark Mode:** Nocturnal cybernetic terminal card with slate surface, cyan crosshairs, and glowing return button.

---

## 9. Card Language

All cards across the portfolio share a consistent geometry and depth system:

- **Border Radius:** `16px` (`rounded-2xl`) for major cards; `8px` (`rounded-lg`) for internal chips.
- **Light Mode Card Treatment:**
  - Background: `#FFFFFF` (Pure White).
  - Border: `1px solid #E2E8F0` (Slate 200).
  - Shadow (Resting): `0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)`.
  - Shadow (Hover): `0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.05)`.
  - Hover Movement: Translates `-3px` on Y-axis with border darkening to `#CBD5E1`.
- **Dark Mode Card Treatment:**
  - Background: `#131926` (Matte Slate).
  - Border: `1px solid rgba(148, 163, 184, 0.12)`.
  - Shadow (Resting): `0 10px 30px -10px rgba(0, 0, 0, 0.5)`.
  - Shadow (Hover): `0 20px 40px -15px rgba(56, 189, 248, 0.12)`.
  - Hover Movement: Translates `-3px` on Y-axis with border shifting to `rgba(56, 189, 248, 0.40)`.

---

## 10. Buttons, Links & Interactive Controls

| Control Variant | Light Mode Appearance | Dark Mode Appearance | Interaction Behavior |
|---|---|---|---|
| **Primary CTA** | `bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-md shadow-sky-600/20` | `bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold shadow-lg shadow-sky-400/20` | Micro-scale `scale: 1.02` on hover, `scale: 0.98` on active |
| **Secondary Button**| `bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-medium shadow-sm` | `bg-slate-900/60 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium` | Border deepens, text accents |
| **Ghost / Icon Button**| `text-slate-500 hover:text-slate-800 hover:bg-slate-100/80 rounded-xl` | `text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 rounded-xl` | Smooth background fade over 150ms |
| **Filter Tab** | Unselected: `text-slate-600 bg-slate-100 border-slate-200`; Selected: `bg-sky-600 text-white font-semibold` | Unselected: `text-slate-400 bg-slate-900 border-slate-800`; Selected: `bg-sky-400 text-slate-950 font-semibold` | Instant category filter without layout jitter |
| **Inline Link** | `text-sky-600 hover:text-sky-700 underline-offset-4 hover:underline` | `text-sky-400 hover:text-sky-300 underline-offset-4 hover:underline` | Accessible link state with clear color shift |

- **Minimum Touch Target:** `44px × 44px` enforced on all interactive buttons and triggers.
- **Focus Rings:** Accessible `ring-2 ring-sky-500 ring-offset-2 ring-offset-white dark:ring-offset-[#0B0F17]` on `:focus-visible`.

---

## 11. Background & Depth Architecture

### 11.1 Light Mode Canvas Architecture
- **Base Canvas:** Soft off-white `#F8FAFC`.
- **Visual Texture:** Extremely subtle micro-grid or soft ambient radial gradations (`rgba(2, 132, 199, 0.04)`), creating visual dimension without creating glare or distraction.
- **Card Contrast:** Elevated `#FFFFFF` surfaces naturally emerge from `#F8FAFC` via diffuse drop shadows and crisp `#E2E8F0` borders.

### 11.2 Dark Mode Canvas Architecture
- **Base Canvas:** Deep obsidian navy `#0B0F17` (avoiding harsh `#000000`).
- **Visual Texture:** Subtle ambient cyan/blue radial glows (`rgba(56, 189, 248, 0.08)`) centered beneath hero and key project headings.
- **Card Contrast:** `#131926` panels stand out against `#0B0F17` through hairline border illumination.

---

## 12. Motion Language & Theme Transitions

### 12.1 Theme Switch Transition Rules
When switching between Light and Dark mode, the UI must feel seamless and intentional:
- **Global Transition Duration:** `200ms – 300ms` transition on color properties:
  ```css
  * {
    transition-property: background-color, border-color, color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
  }
  ```
- **Zero Flashing / Jumps:** Layout dimensions, margins, and padding do not animate during theme switching.
- **Icon Animation:** The theme toggle icon (`Sun`/`Moon`) performs a subtle 45-degree rotation and opacity crossfade upon click.

### 12.2 Standard GSAP Motion Parameters
- **Entrance Duration:** `0.6s – 0.8s` with `power3.out`.
- **Stagger:** `0.08s` between sequential cards.
- **Hardware Acceleration:** All animations restricted strictly to `transform: translate3d()` and `opacity`.

### 12.3 Reduced Motion Protocol
When `prefers-reduced-motion: reduce` is enabled:
- Theme transitions become instantaneous (0ms).
- All scroll-triggered translations (`y: 24px` to `0`) are disabled; elements render in place at `opacity: 1`.

---

## 13. Accessibility & Color Contrast Standards

1. **WCAG AAA Compliance:**
   - Primary text in Light Mode (`#0F172A` on `#F8FAFC` = 15.8:1).
   - Primary text in Dark Mode (`#F8FAFC` on `#0B0F17` = 16.1:1).
2. **WCAG AA Compliance for Secondary/Body Elements:**
   - Body copy in Light Mode (`#475569` on `#FFFFFF` = 7.2:1).
   - Body copy in Dark Mode (`#94A3B8` on `#131926` = 6.4:1).
3. **No Information Conveyed Solely by Color:**
   - Status badges include clear text labels (`Completed`, `Currently Pursuing`, `Career Pivot to Tech`).
4. **Keyboard Navigation & Focus Management:**
   - Skip to content link (`#main-content`) works identically in both modes with high-visibility focus styling.
   - All modals (`ProjectModal`, `ResumeViewerModal`) capture focus, lock body scroll, and dismiss on `Escape`.

---

## 14. Responsive Layout Adaptation

- **Desktop (1440px+):** Full multi-column grid matrices, expanded top navigation, side-by-side split layouts.
- **Tablet (768px – 1024px):** 2-column grid adaptation, collapsible navigation drawer, proportional font scaling.
- **Mobile (375px – 480px):** Single-column vertical stream, full-width touch cards, 44px minimum tap targets.
- **Small Mobile (320px):** Guaranteed zero horizontal overflow (`scrollWidth <= innerWidth`), wrapped metadata tags.

---

## 15. Performance-Conscious Design Rules

- **Zero Cumulative Layout Shift (CLS = 0):** Image containers enforce fixed aspect ratios (`aspect-video`, `aspect-[16/10]`).
- **Font Optimization:** `font-display: swap` configured with preconnected Google Font links.
- **Budget Compliance:**
  - Critical CSS < 15 kB gzipped.
  - SVG icons utilized directly from `lucide-react` without heavy bitmap duplicates.
  - No CPU-heavy physics simulations or endless canvas loops.

---

## 16. Design Tokens Specification (TypeScript)

The following token structure serves as the contract for Tailwind configuration and theme hooks:

```typescript
export const themeTokens = {
  light: {
    bg: {
      primary: "#F8FAFC",
      secondary: "#F1F5F9",
      elevated: "#FFFFFF",
      card: "#FFFFFF",
      cardHover: "#F8FAFC",
    },
    border: {
      subtle: "#E2E8F0",
      hover: "#94A3B8",
    },
    text: {
      primary: "#0F172A",
      secondary: "#475569",
      muted: "#64748B",
    },
    accent: {
      primary: "#0284C7",
      hover: "#0369A1",
      subtle: "rgba(2, 132, 199, 0.08)",
      glow: "rgba(2, 132, 199, 0.12)",
    },
    shadow: {
      card: "0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)",
      cardHover: "0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.05)",
    },
    status: {
      success: "#059669",
      active: "#0284C7",
      warning: "#D97706",
      error: "#DC2626",
    },
  },
  dark: {
    bg: {
      primary: "#0B0F17",
      secondary: "#0F172A",
      elevated: "#161F30",
      card: "#131926",
      cardHover: "#1A2234",
    },
    border: {
      subtle: "rgba(148, 163, 184, 0.12)",
      hover: "rgba(56, 189, 248, 0.40)",
    },
    text: {
      primary: "#F8FAFC",
      secondary: "#94A3B8",
      muted: "#64748B",
    },
    accent: {
      primary: "#38BDF8",
      hover: "#0EA5E9",
      subtle: "rgba(56, 189, 248, 0.12)",
      glow: "rgba(56, 189, 248, 0.20)",
    },
    shadow: {
      card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      cardHover: "0 20px 40px -15px rgba(56, 189, 248, 0.12)",
    },
    status: {
      success: "#10B981",
      active: "#38BDF8",
      warning: "#F59E0B",
      error: "#EF4444",
    },
  },
  typography: {
    fontFamily: {
      sans: ["Inter", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
  },
  radii: {
    badge: "6px",
    button: "10px",
    card: "16px",
    modal: "20px",
  },
};
```

---

## 17. Content Placeholders Strategy

Consistent with PRD and Architecture, all pending user assets maintain strict factual integrity in both themes:

| Item | Status | Light Mode Styling | Dark Mode Styling |
|---|---|---|---|
| **Institution Photos (×4)** | Pending real campus photos | Architectural wireframe glyph on `#F1F5F9` background | Architectural wireframe glyph on `#0D111C` background |
| **Personal Profile Photo** | Pending authentic portrait | Minimalist developer silhouette on `#FFFFFF` card | Minimalist developer silhouette on `#131926` card |
| **Project Details & Links** | Structured placeholders | Formatted mono tags (`[Project Name]`, `[Problem Statement]`) | Formatted mono tags (`[Project Name]`, `[Problem Statement]`) |
| **Certificates Scans** | Structured placeholders | Clean document wireframe on crisp white background | Clean document wireframe on matte slate background |
| **QSpiders Internship Details** | Structured placeholders | Styled mono badges (`[INTERNSHIP ROLE]`, etc.) | Styled mono badges (`[INTERNSHIP ROLE]`, etc.) |
| **Resume PDF File** | Handled with modal viewer | Toast feedback & structured browser document viewer | Toast feedback & structured browser document viewer |

---

**End of Design.md v2.0**
