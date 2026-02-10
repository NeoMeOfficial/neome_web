

## Goal
Make the category name (e.g. "Cvičenie") more prominent and visually distinct in the editorial section headers, so it doesn't get lost next to the oversized number.

## Proposed Approach: Stack Number Above Name

Instead of placing the number and name side-by-side (where the large faded number dominates), stack them vertically -- number on top as a subtle label, category name below it in a larger, bolder style, with the decorative line underneath.

```text
  01
  Cvičenie
  ─────────────────────────────

  [  Card  ]
```

## Visual Details

- **Number**: Keep `text-6xl md:text-8xl font-extralight text-primary/15` but as a top label
- **Category name**: Increase to `text-3xl md:text-5xl font-normal text-foreground` -- larger and slightly heavier weight so it clearly reads as the section title
- **Decorative line**: Moves below both elements as a full-width separator
- **Layout**: Switch from `flex items-end` (horizontal) to a vertical stack with tight spacing

## Technical Changes

**File: `src/components/AppOverview.tsx`** (lines 132-142)

Replace the current horizontal flex layout with a vertical stack:
- Change container from `flex items-end gap-4 md:gap-6` to `space-y-1`
- Move the number span above the name (keep existing styling)
- Bump the category name from `text-2xl md:text-3xl font-light` to `text-3xl md:text-5xl font-normal`
- Place the decorative `h-px` line below both, full-width (remove the inner flex wrapper)

No new files or dependencies needed. Single file change.
