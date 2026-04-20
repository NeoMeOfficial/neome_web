# Component — Eyebrow

The editorial tell. Every section header has one.

## The rule

```css
.eyebrow {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(61, 41, 33, 0.55);  /* warm-brown 55% */
}
```

**On dark surfaces:**

```css
.eyebrow--on-dark { color: #D4C4B0; }   /* sandy */
```

That's the entire component.

## What an eyebrow is

A 1–3 word label that sits above a section heading. It names the section, not the content. It's the small capital smallcap above an editorial article's title.

## Do

- 1–3 words
- Slovak, UPPERCASE (via CSS)
- Warm-brown-55% on light, sandy on dark
- `margin-bottom: 20px` before the H1/H2
- Exactly one per section

## Don't

- ❌ Sage colour — ever (see `DECISIONS.md` D3, D5)
- ❌ More than 3 words
- ❌ Mixed case or sentence case
- ❌ Emoji or icons
- ❌ Punctuation
- ❌ Bold weight (500 is correct, 700 is not)
- ❌ Letter-spacing below 0.2em (loses the editorial feel)

## Good examples

- `SILA`
- `POKOJ`
- `KOMUNITA`
- `TVOJ CYKLUS`
- `PROGRAMY`
- `PREČO NEOME`
- `PRÍBEHY`

## Bad examples

- ❌ `🌿 POWERED BY SCIENCE`
- ❌ `Section 3 / Our Programmes`
- ❌ `LEARN MORE ABOUT NEOME TODAY!`
- ❌ `Programmes` (not uppercase in source — uppercase comes from CSS)

## Why

Letter-spacing 0.24em + uppercase + small size + warm-brown-55% is the single most reliable signal that a layout was *designed*, not generated. It costs almost nothing to add and holds the editorial lineage of the brand on every screen.

See `../type.md` for scale context and `../color.md` for why warm-brown, never sage.
