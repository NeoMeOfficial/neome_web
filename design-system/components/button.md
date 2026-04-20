# Component — Button

## Variants

### Primary — terracotta pill

The only warm CTA in the system. Used 1–2 times per view, maximum.

```css
.btn-primary {
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 15px;
  padding: 16px 40px;
  border-radius: 9999px;
  background: #C1856A;
  color: #fff;
  border: 1px solid transparent;
  transition: opacity 300ms cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-primary:hover { opacity: 0.88; }
```

**Use for:** the single primary action per page — "Začni teraz", "Pokračuj", "Prihlás sa", "Vyskúšaj zadarmo".

### Sage — alt primary (rare)

Reserved for secondary grounded-context actions when terracotta would crowd a section with an existing warm moment.

```css
.btn-sage { background: #8B9E88; color: #fff; }
```

Use sparingly. Sage is decorative per `DECISIONS.md` D3 — this is one of the few allowed button uses, and only when terracotta would create two warm moments.

### Ghost light — secondary

Transparent background, deep-brown text, deep-brown hairline border. For "Čítaj viac", secondary nav, "Nie teraz".

```css
.btn-ghost-light {
  background: transparent;
  color: #3D2921;
  border: 1px solid #3D2921;
}
.btn-ghost-light:hover { background: rgba(61, 41, 33, 0.04); }
```

### Ghost dark — secondary on dark surfaces

Same shape, white text, low-opacity white border.

```css
.btn-ghost-dark {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.28);
}
.btn-ghost-dark:hover { background: rgba(255, 255, 255, 0.08); }
```

### Text link — tertiary

Inline, deep-brown, animated chevron on hover. No underline by default; underline on `:hover` or `:focus-visible`.

## Shape

**Pill** (`border-radius: 9999px`) is the default. Never rounded-rectangle. Pills are soft and human; rounded-rects are software. See `DECISIONS.md` D19.

## Size

Single size, 16px vertical × 40px horizontal padding. Don't add small/large variants unless explicitly requested — a single button size enforces rhythm.

## Rules

### Do

- One primary (terracotta) CTA per viewport max
- Pair with a ghost or text-link secondary, never two primaries
- Keep label 1–3 words, Slovak imperative ("Začni", "Pokračuj", "Prihlás sa")
- Hover: opacity drop to 0.88 (primary/sage) or subtle bg (ghosts). Never scale, never shadow bloom.

### Don't

- ❌ Icons inside buttons unless semantically essential (external link ↗, play ▸). No chevrons, no sparkles, no emoji.
- ❌ Gradient backgrounds
- ❌ Drop shadows harder than `--shadow-sm`
- ❌ Rounded-rectangle radii
- ❌ Animation durations under 300ms (brand floor)
- ❌ "LEARN MORE" style uppercase shouty labels

## Accessibility

- Primary button text on terracotta: 3.9:1 — **bold the label to 500 weight** OR darken terracotta to `--terra-700` (`#9C6148`) to reach AA for body-size text.
- Focus ring: `outline: 2px solid var(--deep-brown); outline-offset: 3px` on light surfaces; swap to `#FFFFFF` on dark.
- Touch target: minimum 44×44. The 16/40 padding on 15px text clears this.
