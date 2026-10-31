# Cinematic Classical Experience — implementation evidence

## Direction review

Three first-screen structures were assessed against the existing portrait, Russian copy and Manrope identity:

| Structure | Reading and visual effect | Decision |
| --- | --- | --- |
| Centered portrait inside a ceremonial arch | Symmetric, but the large name competes with the portrait on phones. | Rejected |
| Asymmetric portrait and editorial title | Keeps the person prominent, fits two readable name lines and scales without a new image. | Selected |
| Architectural archive sheet | Supports annotations, but adds interface furniture with no factual content. | Rejected |

The selected composition draws its rules and arch before revealing the existing portrait, then the two name lines, description and project link. It has no loading gate. The project sections use static visibility so a full-page capture, failed observer or direct anchor visit never leaves blank content. The events list uses continuous rules and preserves all five descriptions. The book logo remains the original image in a separate archive frame.

## Critique, audit and polish

The main baseline problems were generic fade-up on all sections, soft floating card treatment, a portrait disconnected from the architectural linework and blank below-fold content before IntersectionObserver fired. The revised page uses one bounded hero sequence, stronger editorial hierarchy, restrained structural gold and simpler event rows. No source assets, copy or links changed.

Impeccable detector on the final 390 × 844 production preview reported one advisory: the cream page background. That color is explicitly required by `DESIGN.md` and the brief. Its functional-text warning was fixed by increasing dock labels to 11 px. A code and rendered-page review against Vercel Web Interface Guidelines and React Best Practices found no remaining actionable violation in the changed UI. The Impeccable hook reports enabled; no trust restriction was bypassed. GSAP skills informed the sequencing review, while CSS met the timing and cleanup needs without adding runtime weight.

## Verification

- `pnpm run typecheck` — pass.
- `pnpm run build` — pass; production JavaScript 220.50 KB, gzip 69.75 KB.
- Playwright CLI against local production preview — 320, 360, 375, 390, 430, 768, 1024, 1440 and 1920 px; no horizontal overflow. Portrait remained within the hero at every width. Mobile dock shown below 900 px and hidden above it.
- Accordion pointer and Enter key — single-open state and `aria-expanded` / `inert` update correctly. Dock anchor changed hash to `#books` and active state to “Книги”.
- Reduced motion — no hero animation; completed layout visible. Production preview console — 0 errors, 0 warnings.
- Lighthouse CLI, local production preview, simulated mobile run — Performance **99**, Accessibility **100**, Best Practices **100**, SEO **100**; LCP **0.9 s**, CLS **0**, TBT **100 ms**. These are local lab values, not field data.
- Impeccable detector — no blocking findings; one palette advisory explicitly pinned by the brief.

## Comparisons

| Width | Before | After |
| --- | --- | --- |
| Desktop, 1440 px | [Before](../screenshots/cinematic/before-desktop.webp) | [After](../screenshots/cinematic/after-desktop.webp) |
| Mobile, 390 px | [Before](../screenshots/cinematic/before-mobile.webp) | [After](../screenshots/cinematic/after-mobile.webp) |

Future work can validate animation pacing on physical devices and collect real-user Core Web Vitals after review. No production deployment is included in this branch.
