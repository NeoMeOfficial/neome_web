# Component — Programme card

Used on the app Programy tab, the marketing site's programmes grid, and the homepage "our programmes" preview.

## The treatment: cream-left-fade

Because NeoMe's photography is **bright and soft** (not dark hero imagery), standard bottom-scrim treatment destroys the light. The canonical treatment is a **horizontal cream gradient from the left** that fades into the photo, leaving the action (hands, movement, bands, dumbbells) fully visible on the right.

## Anatomy

```
┌─────────────────────────────────────────────────┐
│                                                 │
│   EYEBROW                         ┌───────────┐ │
│                                   │           │ │
│   Programme                       │           │ │
│   title, serif                    │   photo   │ │
│                                   │   action  │ │
│   Short description,              │   visible │ │
│   DM Sans 300.                    │           │ │
│                                   │           │ │
│   ──── terracotta progress ──     └───────────┘ │
│                                                 │
│   [ Pokračuj ]                                  │
│                                                 │
└─────────────────────────────────────────────────┘
```

The photo is full-bleed inside the card; the cream gradient overlays from the left. Copy sits on the faded side, type is **deep-brown** (not white).

## Tokens

- Card: `background: var(--cream)`, `border-radius: 24px`, `overflow: hidden`, `box-shadow: var(--shadow-sm)`
- Photo: full-bleed, `object-fit: cover`, subject on the right two-thirds
- Gradient overlay: `linear-gradient(90deg, #F8F5F0 0%, rgba(248,245,240,0.72) 28%, transparent 64%)`
- Copy: `padding: 32px`, title serif h3-scale, body DM Sans 15/1.72
- Progress bar: 2px terracotta (`--accent-action`), animated fill
- CTA pill: terracotta if in-progress ("Pokračuj"), ghost-light if not started ("Začni")

## Photo category

**Practice** (see `imagery.md`) — close crops of movement, hands-on, real women, warm grade, natural light. The subject must be on the right half of the frame so the cream fade doesn't cover it.

## Do

- Use `Practice`-category photos only
- Keep copy minimal — eyebrow, title, 1-line description, state, CTA
- Use terracotta progress bar and CTA for active/in-progress programmes
- Use ghost-light CTA ("Začni") for not-started programmes

## Don't

- ❌ Use stock fitness imagery
- ❌ Put the subject on the left half (fade will cover it)
- ❌ Use white type — deep-brown only
- ❌ Use sandy for the progress bar on bright photos (disappears)
- ❌ Add duration/difficulty badges as pills on the photo — put them in the body copy if needed

## Grid

- Desktop: 2-column on marketing site, 1-column in app
- Mobile: 1-column everywhere
- Gap: `24px` card-to-card
