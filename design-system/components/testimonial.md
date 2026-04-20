# Component — Testimonial

Voice moments from real NeoMe members. Used once on the homepage, and as an index/grid on `/pribehy` (or equivalent).

## Anatomy

```
┌─────────────────────────────────────────────────────────────┐
│   Deep-brown surface                                        │
│                                                             │
│   ┌───────────┐   EYEBROW (sandy)                           │
│   │           │                                             │
│   │           │   „Italic pull-quote in Fraunces,           │
│   │ portrait  │    white, clamp(28px,4vw,48px),             │
│   │  3:4      │    line-height 1.3. 2–4 lines max."         │
│   │           │                                             │
│   │           │   — Name, age, city                         │
│   │           │     (DM Sans 300, sandy, 13px)              │
│   └───────────┘                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Tokens

- Surface: `deep-brown` (`#3D2921`)
- Section padding: `128px` desktop, `80px` mobile
- Portrait: 3:4 aspect, `border-radius: 16px`, brown-wash treatment at `opacity: 0.22` for cohesion
- Portrait width: cols 1–4 in a 12-col grid; quote cols 6–12
- Eyebrow: sandy (`#D4C4B0`), not warm-brown-55% (contrast fails on dark)
- Quote: italic Fraunces 400, white, **not** terracotta (terracotta is for light-surface voice moments; on dark, white italic carries enough weight)
- Attribution: DM Sans 300, sandy, 13px, `margin-top: 32px`

## Photo category

**Portrait** — window light, warm grade, eye contact or soft candid. Real NeoMe members; never stock.

## Rules

### Do

- Use direct quotes, unedited voice
- Include age + city in attribution (grounds it)
- Keep quotes to 2–4 lines — longer = index page, not section
- Always use dark surface for testimonials (isolates the moment)

### Don't

- ❌ Add star ratings, verified badges, or review-site logos
- ❌ Use terracotta on a dark testimonial — save it for light-surface italic voice
- ❌ Carousel with auto-play — if multiple quotes needed, use a grid on `/pribehy`
- ❌ Add a decorative oversize quote-mark glyph — the italic + indentation carries it

## Grid variant (index page)

On `/pribehy`, use 3-column grid on desktop, 2 on tablet, 1 on mobile. Each card: portrait top (16:20 aspect), quote below (Fraunces italic, terracotta on this page's light surface), attribution DM Sans 300. Same tokens, light-surface treatment, grid layout.
