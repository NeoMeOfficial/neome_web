# Component — Pain section

The emotional turn of the homepage. Sets up the problem before the programmes answer it.

## The pattern (canonical — Variant C, asymmetric editorial)

```
┌─────────────────────────────────────────────────────────────┐
│   EYEBROW                                                   │
│                                                             │
│   ┌──────────────┐     ─────────────────────────────────    │
│   │              │     Unavená som už roky.                 │
│   │   italic     │     ─────────────────────────────────    │
│   │   serif,     │     Na seba už vôbec nemám čas.          │
│   │   terracotta │     ─────────────────────────────────    │
│   │   pull-      │     Neviem, kde mám vôbec začať.         │
│   │   phrase     │     ─────────────────────────────────    │
│   │              │     Chcem sa cítiť zase ako ja.          │
│   └──────────────┘     ─────────────────────────────────    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Anatomy

- **Eyebrow** — warm-brown-55%, single line, e.g. `PREČO NEOME`
- **Pull-phrase** (left, 40% width, centered vertically) — `.display-italic`, terracotta, `clamp(28px, 5vw, 64px)`, italic Fraunces 400, line-height 1.18. One sentence.
- **List** (right, 60% width) — thin-rule separated. Each item:
  - Serif h3-scale, deep-brown, weight 500
  - `padding: 28px 0`
  - `border-top: 1px solid rgba(61,41,33,0.16)`
  - Last item: also `border-bottom`
  - **No numerals**

### Tokens

- Surface: `cream`
- Grid: 12 columns, pull-phrase cols 1–5, list cols 7–12
- Section padding: `160px` vertical desktop
- Mobile: stacks — pull-phrase top, list below

## Variants explored and rejected

- **Variant A — quotation block with quote marks.** Felt too literary, broke the editorial-list rhythm elsewhere in the page. Rejected.
- **Variant B — roman-numeral list, no pull-phrase.** Strong but felt catalogue-y. Rejected in favour of C which adds voice without losing the rhythm.
- **Variant D — two-column stanza, no pull.** Heavier per item but lost rhythm. Rejected.

See `DECISIONS.md` D15 for the full reasoning.

## Do

- Keep the list to 4 items (3 minimum, 5 maximum)
- Use second-person singular ("Som", "Nemám", "Chcem")
- Keep each item to one line on desktop
- Let the pull-phrase breathe — no subhead, no decoration

## Don't

- ❌ Add numerals (roman or arabic)
- ❌ Add icons next to each item
- ❌ Add a CTA inside the section — let the programmes below answer
- ❌ Use sage or dusty-teal for the pull-phrase — it's terracotta, full stop
- ❌ Use bullet points
