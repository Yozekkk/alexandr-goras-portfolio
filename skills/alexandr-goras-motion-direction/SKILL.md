---
name: alexandr-goras-motion-direction
description: Motion direction and performance rules for the Alexander Goras cultural portfolio.
---

# Living Classical Architecture — motion direction

Use this skill when changing motion or decorative SVG on this project.

## Brand constants

Keep Manrope Variable, the warm ivory canvas, graphite typography, antique gold rules, the original portrait and both original logos. Never alter factual copy or fabricate destinations. Draw architecture as precise geometry: arches, ionic fragments, measured rules and olive or laurel forms. Ornament supports reading and must never cover text.

## The authored moment

The first visit assembles like a measured architectural drawing: guide lines, arch, portrait, two name lines, description, then project link. Desktop total is about 1.9 seconds; mobile is about 1.5 seconds. Use a calm exponential ease out and stagger only related pieces. The completed frame is the default state. Never use a blocking loader, loop, scroll-jacking or animation needed to reveal factual content.

## Engineering

Use CSS for one-off transform, opacity and SVG stroke transitions. Add GSAP only when a future interaction requires runtime control beyond CSS; in React then use `@gsap/react`, scoped refs and `useGSAP` cleanup. Prefer compositor-friendly properties. Reserve clip-path for the one portrait reveal. Do not animate layout, apply heavy blur, or run continuous timelines.

Respect `prefers-reduced-motion`: show the final state immediately. Keep controls usable during the intro. Do not restart the sequence on every React render, resize, tab return or same-session visit. Handle storage failure by showing the complete page. Mobile has fewer drawing details and shorter delays. Test at 320–430 px and desktop widths; verify no decorative overlap, horizontal overflow or content shift.
