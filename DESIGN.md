# Design System — Contemporary Greek Heritage

## Direction

Modern Neoclassical interpreted as a contemporary cultural portfolio: warm paper-like surfaces, disciplined architectural framing, original line-drawn Greek motifs, generous negative space and precise Manrope typography. The interface must feel authored and tactile without becoming theatrical, antiquarian or ornamental at the expense of content.

## Palette

The incumbent palette is preserved and normalized as semantic tokens:

- warm canvas `#f8f6f1`
- elevated ivory `#fffdf9`
- soft cream `#f3ecdc`
- graphite `#292823`
- muted graphite `#595751`
- antique gold `#a87836`
- light gold `#c9a66e`
- warm rule `#d9c5a4`
- pale rule `#e6dfd3`

Gold is a structural signal for rules, focus, active state and authored ornament. It is never a large saturated fill.

## Typography

Manrope Variable is the only interface family. Display headings use 650–760 weights, compact line-height and restrained negative tracking. Body copy uses 400–500. Labels and navigation use 600–700. No serif or pseudo-antique typefaces.

## Composition

- Desktop: editorial asymmetric grid, framed by thin architectural rules and controlled SVG layers.
- Mobile: purpose-built vertical composition with compact sections, full-width touch controls and a floating three-destination navigation dock.
- The portrait remains the emotional anchor. Original project logos remain intact and are presented in nested archival frames.
- Section decoration sits behind or outside reading columns and always uses `pointer-events: none`.

## Signature graphics

Four authored SVG systems carry the identity:

1. Hero temple elevation with an arch, two ionic half-columns and edge olive branches.
2. Events architectural frame with column fragments and corner meander marks.
3. Books laurel-and-page ornament using one continuous reading line.
4. Footer meander divider.

SVG strokes use `currentColor`, semantic gold tokens and non-scaling strokes. Detail is progressively reduced below 640 px.

## Interaction and motion

Motion thesis: the page assembles like a measured architectural drawing.

- Focal moment: hero frame lines draw once while portrait and copy settle into place.
- Continuity: accordion panels reveal through grid interpolation; active navigation follows the section in view.
- Feedback: controls receive fast pressed, focus and hover states; icon containers shift subtly rather than bounce.
- Budget: CSS transforms/opacity and IntersectionObserver only; no animation dependency, scroll listener or continuous parallax.
- Reduced motion keeps state/color feedback but removes drawing, travel and stagger.

## Controls

- Touch targets are at least 44 × 44 CSS px.
- Interactive icons use Hugeicons Stroke Rounded at a consistent 1.5 stroke width.
- Unknown social destinations remain `null` in configuration and are described in supporting copy without empty controls.
- Focus uses a visible antique-gold outline with adequate offset.

## Responsive behavior

- 320–639 px: mobile-first single column, simplified SVG detail, bottom dock, compact hero and accordion cards.
- 640–1023 px: tablet composition with larger media frames and two-column social controls where space allows.
- 1024 px and above: asymmetric paired project layouts, full header navigation and richer ornament.
- `viewport-fit=cover`, safe-area-aware dock spacing and bottom content clearance are mandatory.


## Cinematic classical experience (2026-10-31)

The first viewport now uses a portrait inside an architectural arch, an asymmetric editorial grid, measured guide lines and two typographic name lines. This was chosen over a centered portrait and an archival sheet composition because it preserves the person as the focal point, makes the name immediately legible and needs no heavy graphic asset. The intro runs only on the first visit of a session, with a complete static composition as the default. Mobile shortens the timing. Project sections no longer depend on scroll-triggered visibility.

The event list uses continuous architectural rules rather than five floating rounded cards. Book imagery sits in a quiet archive frame under a laurel/page ornament. Original image assets and factual copy remain unchanged. Motion timing and engineering rules are recorded in `skills/alexandr-goras-motion-direction/SKILL.md`.

## Social contact treatment

The events contact area uses one antique-gold Telegram action and a lighter Facebook companion. The books contact area presents only the three supplied destinations as equal-height archival link rows. Platform marks use the same Hugeicons size; the small external arrow is a secondary cue. A bounded entrance accent runs when a contact area enters view, while content is visible by default and reduced motion keeps it static. Unknown destinations remain in data as `null`, without empty buttons.
