

## Goal
Add a prominent, visually distinct section divider/label for each category (Cvicenie, Strava, Mysel, Komunita, etc.) so users clearly see when they scroll into a new part of the app overview.

## Design Approach: Full-Width Category Header with Number + Decorative Line

Before each card, add a full-width header strip that includes:
- A large step number (01, 02, 03...) in a light, oversized font for modern visual impact
- The category name displayed prominently
- A thin decorative horizontal line extending from the text to the edge
- Subtle scroll-reveal animation

This creates a magazine/editorial feel where each section is clearly delineated.

```text
  01 ─────────────────────────
  Cvicenie

  [  Card with image + content  ]


  02 ─────────────────────────
  Strava

  [  Card with image + content  ]
```

## Technical Details

**File: `src/components/AppOverview.tsx`**

1. Add a `number` field to each feature in `appFeatures` array (formatted as "01", "02", etc.)

2. Before each `<Card>`, render a section header inside the existing `motion.div`:
   - Large number in `text-6xl md:text-8xl font-extralight text-primary/15` (very light, oversized)
   - Category badge name in `text-2xl md:text-3xl font-light text-foreground` next to or below the number
   - A horizontal `<div>` line using `h-px bg-border flex-1` stretching to the right
   - The number and name sit on the left, the line extends right -- creating a clean editorial separator

3. The layout per feature becomes:
   - Step number + category name + decorative line (the new divider)
   - Existing Card with image/content (unchanged)

4. Add staggered animation: the divider fades in slightly before the card

No new files, no new dependencies. Only changes to `AppOverview.tsx`.

