# Color

## The hierarchy

```
PRIMARY — the voice of the brand (present on every screen)
├── Deep-brown  #3D2921   voice + dark surface
├── Cream       #F8F5F0   canvas
└── Sage        #8B9E88   decorative/nature accent

SECONDARY — accents with one named job each (used sparingly)
├── Terracotta  #C1856A   action (CTA only, 1–2 per screen)
├── Dusty-teal  #89B0BC   mind/meditation/breath
└── Sandy       #D4C4B0   warm neutral on dark surfaces
```

## Tokens

Always use the semantic name. Never the raw hex in component code.

| Token | Value | Use |
|---|---|---|
| `--primary-ink` | `#3D2921` | body text on light, dark surfaces |
| `--primary-surface` | `#F8F5F0` | default light canvas |
| `--primary-accent` | `#8B9E88` | decorative accents |
| `--accent-action` | `#C1856A` | **CTA only** |
| `--accent-mind` | `#89B0BC` | meditation / breath contexts |
| `--accent-warm` | `#D4C4B0` | warm neutral on dark |
| `--fg-primary` | deep-brown | body text |
| `--fg-secondary` | deep-brown 72% | supporting text |
| `--fg-tertiary` | deep-brown 56% | metadata, timestamps |
| `--fg-muted` | deep-brown 40% | disabled, placeholder |
| `--label-color` | deep-brown 55% | **eyebrows / labels (warm-brown)** |
| `--fg-on-dark` | `#FFFFFF` | text on deep-brown surfaces |

## Rules

### Do

- Use **cream** as the default page background
- Use **deep-brown** for body text, headings, dark sections
- Use **terracotta** for the single primary CTA per view
- Use **sage** for decorative flourishes (dots, quote marks, cycle phases)
- Use **dusty-teal** in Myseľ / meditation / stillness contexts
- Use **sandy** as the eyebrow colour on *dark* surfaces only

### Don't

- ❌ Use pure white as a page background (cream only; white allowed on small raised cards)
- ❌ Use pure black anywhere (deep-brown is "black")
- ❌ Use sage as an eyebrow, button, or link colour
- ❌ Use terracotta for anything except the primary CTA
- ❌ Use dusty-teal as a CTA (it's cool; action is warm)
- ❌ Combine terracotta + sage + dusty-teal in the same viewport — pick one accent per section
- ❌ Add saturated colours outside this palette

## Colour moments per screen

**Maximum two.** Terracotta CTA + one decorative sage moment is the ceiling. If a screen needs more colour energy, it's a layout/typography problem, not a colour problem.

## Dark sections

Dark sections (testimonials, final CTA, footer) use `deep-brown` surface with:

- Text: `#FFFFFF` primary, `rgba(255,255,255,0.72)` secondary
- Eyebrow: `sandy` (`#D4C4B0`) — never warm-brown-55% on dark (insufficient contrast)
- CTA: terracotta still holds — warm reads even better against brown
- Decorative accents: sandy or muted sage-700

## Accessibility

- Body text on cream: deep-brown = 12.4:1 ✅
- Secondary text on cream: deep-brown 72% ≈ 8.9:1 ✅
- Terracotta CTA text (white on `#C1856A`): 3.9:1 — **AA large text only**. Body-size CTA labels must bold up or darken the terracotta to `terra-700`.
- Eyebrow warm-brown-55% on cream: ≈ 6.8:1 ✅

## Changing colours

If you think we need a new colour, **don't add one.** Talk to the user. Every colour added dilutes the ones already here. If you think a colour needs to shift, quote `../DECISIONS.md` and propose the change.
