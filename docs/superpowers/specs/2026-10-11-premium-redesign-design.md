# Premium portfolio redesign specification

## Objective

Upgrade the existing Alexandr Goras portfolio without changing its factual content, original imagery, valid links or core React component architecture. The result combines modern premium minimalism with a restrained Contemporary Greek Heritage visual identity and a mobile experience that behaves like a polished native-style single-page app.

## Architecture

Keep the Vite/React/TypeScript application and existing section boundaries. Add focused decorative SVG components, a small active-section hook, a mobile navigation dock and a shared icon mapping. Keep content and link data in their existing files. CSS remains the primary styling and motion layer so the runtime stays lean.

## Files and responsibilities

- `src/components/GreekDecor.tsx`: reusable authored SVG scenes and ornaments.
- `src/components/EventIcon.tsx`: Hugeicons mapping for five event types.
- `src/components/MobileDock.tsx`: safe-area-aware mobile section navigation with active state.
- `src/hooks/useActiveSection.ts`: IntersectionObserver-based current-section state.
- Existing page components: semantic structure and placement of the new visual system.
- `src/styles.css`: palette tokens, Manrope, responsive composition, interaction states and motion.
- `src/links.ts`: remains the only authority for incomplete external destinations.

## Functional requirements

- Preserve all current Russian copy, portrait, original logos and confirmed community URL.
- Preserve the accessible single-open accordion behavior while adding thematic icons and smoother state transitions.
- Keep unconfirmed social destinations non-interactive and clearly described.
- Internal links update history-free anchor position and honor reduced motion.
- Mobile dock links to home, events and books, indicates the visible section and never obscures content.

## Visual requirements

- Use Manrope Variable everywhere at weights 400–800 with swap behavior.
- Keep the incumbent cream/ivory/graphite/gold palette as semantic CSS tokens.
- Use custom SVG architecture, laurels and meander patterns as meaningful framing, never as content-obscuring overlays.
- Preserve original project logos without recreation or visual modification.
- Standardize functional iconography on free Hugeicons.

## Motion requirements

- One authored hero drawing sequence; bounded section reveals; accordion continuity; quick hover/press/focus feedback; active dock indicator.
- Use transforms, opacity, SVG dash offset and grid interpolation only in bounded regions.
- Avoid perpetual motion, bounce, strong rotation, heavy blur and scroll-event animation.
- Under `prefers-reduced-motion`, remove travel/stagger/drawing while preserving visible state changes.

## Accessibility and performance

- Semantic landmarks, skip link, heading order, meaningful image alternatives and keyboard-operable controls.
- Visible `:focus-visible`, minimum 44 px touch targets, no hover-only content and no horizontal overflow from 320 px upward.
- Self-host the font and reserve image dimensions to prevent layout shift.
- Lazy-load below-fold logos, keep the portrait eager, and avoid new animation libraries.

## Verification

- TypeScript and production build.
- Browser checks at 320, 360, 375, 390, 430, 768, 1024, 1440 and 1920 px.
- Screenshots: desktop hero, events and full page; mobile hero, open accordion and full page.
- Keyboard path, focus visibility, internal/external links, reduced motion, console errors and horizontal overflow.
- Run animation review, web-design-guidelines audit, Impeccable detector and React performance checklist before publication.

## Publication guard

Historical note corrected on 2026-10-31: push only to `Yozekkk/alexandr-goras-portfolio`. The production domain `goras-portfolio.vercel.app` belongs to the existing Vercel project `alexandr-goras-portfolio` (Project ID `prj_MaJsZmw02c6ER765ZGYuVNRxLeCt`, team `yozekkk1`). Recheck the ID, team and domain before deployment. Do not create a project named after the domain.

