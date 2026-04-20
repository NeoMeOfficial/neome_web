# Type

## The pairing

**Fraunces** (serif display) + **DM Sans** (sans body). Nothing else. No Inter, no Roboto, no system fallback in design.

Both are loaded from Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500;1,9..144,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
```

If the repo gets licensed font files, swap to local `@font-face` and keep the Google Fonts import as fallback.

## Why Fraunces (not Bodoni)

Fraunces was chosen over Bodoni Moda because:
- **Even stroke contrast** — Bodoni's hairline serifs disappear at display sizes; Fraunces keeps weight through every stroke
- **Optical-size axis** — we use `opsz: 144` for display, which widens counters and softens terminals at large sizes
- **Better diacritics** — Slovak characters (á, č, š, ť, ž) sit cleanly above the cap-height, while Bodoni crowds them
- **Warmer feel** — closer to the brand's embodied/grounded voice than Bodoni's high-fashion coolness

See `DECISIONS.md` D8 for full history.

## The scale

### Display — Fraunces 500, opsz 144, tight leading

| Role | Size | Weight | LH | LS |
|---|---|---|---|---|
| `h1` | `clamp(58px, 10.5vw, 132px)` | 500 | 0.90 | -0.015em |
| `h2` | `clamp(38px, 5.5vw, 70px)` | 500 | 1.08 | -0.01em |
| `h3` | `clamp(24px, 2.8vw, 36px)` | 500 | 1.15 | 0 |

All display uses `font-variation-settings: "opsz" 144, "SOFT" 30;` — this is set on the root and inherited.

**Never use Fraunces at 700+.** At 700 it shouts; NeoMe doesn't shout. See `DECISIONS.md` D9.

### Display italic — the voice moment

```css
.display-italic {
  font-family: var(--serif);
  font-variation-settings: var(--serif-display-vary);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(28px, 5vw, 64px);
  line-height: 1.18;
  color: var(--terracotta);
}
```

Used for pull-phrases, confessions, and section-defining lines. **One per section, maximum.** Italic is the whisper — dilute it and the effect dies.

### Body — DM Sans 300, generous leading

| Role | Size | Weight | LH |
|---|---|---|---|
| `.body-lg` | 17px | 300 | 1.72 |
| `.body-md` | 15px | 300 | 1.72 |
| `.body-sm` | 13px | 300 | 1.72 |

Body stays at weight 300 even when it feels "light." That's the point.

### Eyebrow / label — the editorial tell

```css
.eyebrow {
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(61, 41, 33, 0.55);   /* warm-brown 55% */
}
```

On dark surfaces, use `color: var(--sandy);` instead. Never sage.

## Patterns

### The editorial list

Thin horizontal rule + generous leading + no numerals. Used in pain section, philosophy section, any "here's what this means" moment.

```
———————————————————
Unavená som už roky.
———————————————————
Na seba nemám čas.
———————————————————
Chcem sa cítiť ako ja.
———————————————————
```

Each item: h3-scale serif, deep-brown, weight 500, 1em+ vertical padding, `border-top: 1px solid rgba(61,41,33,0.16)`.

### The asymmetric editorial pair

Italic pull-phrase on the left (40% width, centered vertically), editorial list on the right (60% width). Used for pain section. See `components/pain-section.md`.

### The block quote

```html
<blockquote class="display-italic">
  „Aj krátky čas venovaný sebe je viac ako nič."
  <cite>— Gabi Drobová</cite>
</blockquote>
```

Terracotta italic, cite line in DM Sans 300 at 72% deep-brown, small sage quote-mark flourish optional.

### Numbers in copy

Numerals use Fraunces by default (`font-variant-numeric: oldstyle-nums` if available). Statistics and labels use DM Sans tabular-nums.

## Rules

### Do

- Mix Fraunces + DM Sans freely — that's the whole system
- Apply `font-variation-settings: "opsz" 144, "SOFT" 30` on all display text
- Use italic for voice moments; roman for everything else
- Use eyebrow above every section header
- Leave air — line-height 1.72 on body, section padding 128px+

### Don't

- ❌ Use Inter, Roboto, SF Pro, or any system sans
- ❌ Use Fraunces for body copy (use DM Sans)
- ❌ Use DM Sans for h1/h2 (wrong voice)
- ❌ Use ALL CAPS outside eyebrows
- ❌ Use sage as an eyebrow colour — ever
- ❌ Use italic for more than one moment per section
