

## Problem

At the current viewport (928px), the Hero uses `lg:grid-cols-2` (triggers at 1024px), so the card stacks **below** the text instead of appearing **beside** it. The user wants the card positioned to the right side, next to the heading — even at smaller viewports.

## Plan

**File: `src/components/Hero.tsx`**

1. Change the grid breakpoint from `lg:grid-cols-2` to `md:grid-cols-2` so the two-column layout activates at 768px instead of 1024px.
2. Align the card to the **top** of the right column using `items-start` instead of `items-center`, so it sits beside the heading rather than vertically centered.
3. Reduce the gap at the `md` breakpoint for a tighter layout on mid-size screens.

This ensures the card appears **next to the text at the top** on screens 768px+, matching the reference layout.

