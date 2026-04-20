# Imagery

## Voice

Warm. Soft-light. Real women. Never stock. Never over-styled. Never performative.

The lineage is **Kinfolk / Cereal magazine / editorial-luxury lifestyle** — not Instagram-fitness, not wellness-industrial, not corporate SaaS stock.

## Categories

Every on-brand photo fits one of six named categories. If it doesn't fit, it isn't on-brand.

| Category | Subject | Where it's used |
|---|---|---|
| **Hero** | Wide, atmospheric, full-bleed | Homepage hero, section covers |
| **Portrait** | One woman, eye contact or candid, window-light | Founder story, testimonials, about |
| **Practice** | Hands-on movement, close-crop on the action | Programme cards, exercise detail |
| **Stillness** | Meditation, breath, morning light, often from behind | Myseľ tab, mindfulness content |
| **Lifestyle** | Objects, food prep, home details, quiet moments | Nutrition, cycle, blog imagery |
| **Texture** | Linen, wood, ceramic, paper — no people | Dividers, empty states, backgrounds |

## Treatments

Three, named. No other treatments exist.

### 1. Bottom scrim (dark-ready photos)

For photos with enough dark mass at the bottom to carry white type.

```css
.img-scrim::after {
  content: '';
  position: absolute;
  inset: 50% 0 0 0;
  background: linear-gradient(180deg, transparent 0%, rgba(61,41,33,0.72) 100%);
}
```

### 2. Cream-left-fade (bright photos, programme cards)

For bright photos where copy needs to sit on the type-readable side without destroying the subject.

```css
.img-cream-fade::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #F8F5F0 0%, rgba(248,245,240,0.72) 28%, transparent 64%);
}
```

Copy sits in the faded left third. Subject (hands, movement, objects) stays fully visible on the right. Type is deep-brown, not white.

### 3. Brown wash (hero insets, dark sections)

Full-bleed deep-brown multiply at 20–30% opacity. Used on hero portrait insets and dark-section backgrounds.

```css
.img-brown-wash::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #3D2921;
  mix-blend-mode: multiply;
  opacity: 0.22;
}
```

## Rules

### Do

- Warm colour grade (slight orange shift, lifted shadows)
- Soft natural light — morning, overcast, window
- Real women, plausibly "her" — not models
- Close crops on hands, actions, objects
- Leave breathing room around the subject
- Apply grain overlay on top (already global)

### Don't

- ❌ Stock photography of any kind
- ❌ Harsh flash, hard shadows, clinical lighting
- ❌ Gym equipment, mirrors, performative fitness
- ❌ Faces in mid-instruction ("here's how!")
- ❌ Cold colour grade (teal shadows, blue skin)
- ❌ Black-and-white (kills the warmth)
- ❌ Heavy filters or Instagram LUTs
- ❌ Composite illustrations over photos
