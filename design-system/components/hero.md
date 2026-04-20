# Component — Hero

## The default hero

**Left-aligned editorial hero with inset portrait on the right.** This is the homepage opener and the pattern most section pages inherit.

### Anatomy

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   EYEBROW                                                   │
│                                                             │
│   H1 serif, 500, tight leading.                ┌─────────┐  │
│   One or two lines max.                        │         │  │
│                                                │ portrait│  │
│   Body lead paragraph, DM Sans 300,            │ inset   │  │
│   17px, 1.72 leading, ~60ch max width.         │  3:4    │  │
│                                                │         │  │
│   [ Primary CTA ]   Secondary text link →      └─────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Tokens

- Surface: `cream` (light — the default)
- Padding: `128px` vertical desktop, `80px` mobile
- Grid: 12-column, content spans cols 1–7, portrait spans cols 8–12
- Portrait: 3:4 aspect, `border-radius: 24px`, brown-wash treatment at 0 (hero is bright)
- CTA: terracotta pill, `Začni teraz` or equivalent
- Secondary: ghost-light or text-only link with chevron

### Do

- One H1 — one message, one line where possible
- One primary CTA — the only warm moment
- Eyebrow above the H1, warm-brown-55%
- Portrait is a real woman, natural light, warm grade

### Don't

- ❌ Stacked CTAs ("Start free" + "See pricing")
- ❌ Badges, pills, or "AS SEEN IN" logos above the H1
- ❌ Full-bleed video background (use the scroll-video section below the fold instead)
- ❌ Gradient backgrounds
- ❌ Centered text alignment

## Dark hero (rejected for homepage, available for section pages)

Deep-brown surface, sage eyebrow, white H1, sandy body, terracotta CTA. See `DECISIONS.md` D28 — this was tested as the homepage opener and rejected. Still valid for:

- Programme detail pages (emotional weight)
- Final-CTA sections further down the page
- Testimonials section cover

Same anatomy as default; just swap `cream` → `deep-brown` and adjust foreground tokens.

## Variants

### Hero — long-form (default homepage)

As above. H1 ~2 lines.

### Hero — single-line statement

H1 is one line, larger (`clamp(72px, 12vw, 160px)`). No body copy. Used on mission/manifesto pages. Paragraph moves to the *next* section.

### Hero — quote hero

H1 is replaced by `.display-italic` terracotta pull-phrase. Used on founder story, testimonial index. Attribution in DM Sans below.

## Reference

See the live preview in `preview/hero.html` (this repo) or any pattern file in `ui_kits/website/index.html`. For the programme-card treatment used lower on the page, see `programme-card.md`.
