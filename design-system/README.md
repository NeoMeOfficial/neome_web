# NeoMe Design System

Source of truth for every visual decision on neome.sk.

## How to use this folder

**Reading order:**

1. `../CLAUDE.md` — the rules
2. `../DECISIONS.md` — the reasoning
3. This file
4. `tokens.css` — the variables
5. Then the topic file you need: `color.md`, `type.md`, `imagery.md`, `voice.md`, or a `components/*.md`

**Applying to the repo:**

- `src/index.css` must match `tokens.css` (HSL conversions acceptable — values must resolve identically)
- `tailwind.config.ts` must extend from `tailwind-tokens.ts` (paste-in snippet)
- Component JSX must use token names (`bg-cream`, `text-deep-brown`) — never hex literals
- Every new component must map to an entry in `components/` or be proposed as an addition there

## The system in one screen

| | |
|---|---|
| **Surface (light)** | `#F8F5F0` cream — never white |
| **Surface (dark)** | `#3D2921` deep-brown — never black |
| **Text on light** | deep-brown, secondary 72% |
| **Text on dark** | `#FFFFFF`, secondary 72% |
| **Eyebrow** | warm-brown 55%, 12px/500/0.24em UPPER |
| **CTA** | `#C1856A` terracotta — 1–2 per screen |
| **Decorative accent** | `#8B9E88` sage — never UI chrome |
| **Meditation accent** | `#89B0BC` dusty-teal — Myseľ only |
| **Warm neutral on dark** | `#D4C4B0` sandy |
| **Display** | Fraunces 500, opsz 144, tight leading |
| **Body** | DM Sans 300, 1.72 leading |
| **Italic voice** | Fraunces italic 400, terracotta |
| **Radii** | 8/12/16/24/32/48, pills for buttons |
| **Section padding** | 128px+ desktop, 80px+ mobile |
| **Motion floor** | 300ms, signature ease `cubic-bezier(0.16, 1, 0.3, 1)` |
| **Grain** | 2.8% SVG fractal-noise overlay, always on |

## Files

```
tokens.css              ← CSS custom properties (authoritative)
tailwind-tokens.ts      ← paste-in for tailwind.config.ts
color.md                ← palette, hierarchy, do/don't
type.md                 ← font system, scale, patterns
imagery.md              ← photography rules + treatments
voice.md                ← Slovak voice, phrases, rules
components/
  hero.md               ← editorial hero variants
  pain-section.md       ← italic pull + thin-rule list
  programme-card.md     ← cream-left-fade treatment
  testimonial.md        ← portrait + pull-quote
  button.md             ← pill CTA, terracotta-only
  eyebrow.md            ← the 12px/500/0.24em/UPPER rule
assets/                 ← logos, monograms, section covers
```

## Versioning

This folder is source of truth. When the user makes a design decision in conversation, update the relevant file here in the same commit and add an entry to `../DECISIONS.md`. The docs lead; the code follows.
