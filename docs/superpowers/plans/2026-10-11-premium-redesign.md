# Premium Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver and publish a premium Modern Neoclassical redesign of the existing Alexandr Goras portfolio while preserving content, links, palette and functionality.

**Architecture:** Extend the current component architecture with focused SVG decoration, Hugeicons mappings and an IntersectionObserver-based mobile dock. Keep animation in CSS and existing React state to avoid a heavyweight runtime.

**Tech Stack:** React 19, TypeScript 5.9, Vite 7, Tailwind CSS 4, CSS, Hugeicons, Playwright.

**Spec:** `docs/superpowers/specs/2026-10-11-premium-redesign-design.md`

## Global Constraints

- Preserve the current factual copy, original project logos, portrait, confirmed links and warm palette.
- Use Manrope throughout at weights 400–800.
- Use only free Hugeicons packages and authored SVG decoration.
- Maintain keyboard, touch, pointer and reduced-motion support.
- Deploy only to the confirmed `goras-portfolio` project on the second Vercel account.

---

### Task 1: Dependencies, font and tokens

**Files:** `package.json`, `pnpm-lock.yaml`, `src/styles.css`, `index.html`, `public/fonts/*`

- [ ] Install the free Hugeicons React packages and local Manrope Variable font package.
- [ ] Replace incumbent font faces with locally served Manrope and declare semantic palette, spacing, radius, shadow and motion tokens.
- [ ] Update viewport metadata for safe-area support.
- [ ] Run `pnpm run typecheck` and confirm exit code 0.

### Task 2: Authored visual assets

**Files:** create `src/components/GreekDecor.tsx`, create `src/components/EventIcon.tsx`

- [ ] Implement accessible-hidden SVG hero architecture, olive/laurel branches, event frame and footer meander.
- [ ] Map each of the five event IDs to a semantically suitable free Hugeicon.
- [ ] Verify SVG scales without clipping at 320 px and 1920 px.

### Task 3: Section components and navigation

**Files:** `src/App.tsx`, `src/components/Header.tsx`, `Hero.tsx`, `Events.tsx`, `Books.tsx`, `Footer.tsx`, `SocialIcon.tsx`; create `src/components/MobileDock.tsx`, `src/hooks/useActiveSection.ts`

- [ ] Integrate decoration without changing project copy or logo assets.
- [ ] Upgrade accordion semantics, icon treatment and state animation while preserving keyboard behavior.
- [ ] Replace functional Lucide icons with Hugeicons and retain official inline brand marks where appropriate.
- [ ] Add the three-item mobile dock and active-section observer.
- [ ] Run `pnpm run typecheck` and confirm exit code 0.

### Task 4: Responsive visual implementation

**Files:** `src/styles.css`

- [ ] Implement the mobile-first composition, 44 px targets, safe-area dock clearance and 320 px overflow protection.
- [ ] Implement tablet and desktop asymmetric grids, nested archival frames and restrained premium depth.
- [ ] Add hero line drawing, reveals, hover/press states and reduced-motion alternatives.
- [ ] Run `pnpm run build` and confirm exit code 0.

### Task 5: Browser verification and correction

**Files:** `screenshots/*`, any source file implicated by defects

- [ ] Run the development server and capture required desktop and mobile screenshots.
- [ ] Test 320, 360, 375, 390, 430, 768, 1024, 1440 and 1920 px for overflow, clipping and overlap.
- [ ] Exercise accordion, anchors, external link, keyboard focus and reduced-motion paths.
- [ ] Run one batched visual correction pass and one confirmation pass.

### Task 6: Quality gates

**Files:** all changed source files

- [ ] Run animation review and correct priority findings.
- [ ] Run web-design-guidelines and React best-practice reviews.
- [ ] Run the single required Impeccable detector pass.
- [ ] Run fresh typecheck and production build, then inspect the final Git diff.

### Task 7: GitHub and Vercel publication

**Files:** Git metadata only

- [ ] Confirm `origin`, default branch and clean inclusion list; create one descriptive commit.
- [ ] Push to `Yozekkk/alexandr-goras-portfolio`.
- [ ] Re-query the second Vercel account for `goras-portfolio`, confirm scope, Project ID, repository binding and domain.
- [ ] If and only if confirmed, deploy production and verify `https://goras-portfolio.vercel.app` visually and functionally; otherwise report publication blocked without touching another project.
