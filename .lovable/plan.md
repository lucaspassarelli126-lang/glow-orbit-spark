

## Problem

The 3D card stack on the right side shows overlapping transparent cards because the `perspective` + `rotateY` + partial opacity approach renders prev/next cards visibly on top of each other. The cards and info text are also too small.

## Plan

**File: `src/components/CardCarousel.tsx`**

1. **Remove the 3D stack approach** — Instead of showing prev/next cards with `rotateY` and `opacity: 0.5`, use `AnimatePresence` with `mode="wait"` to show only the active card at a time, with a smooth slide/fade transition.

2. **Increase card size** — Change from `w-[300px] h-[185px]` to `w-[360px] h-[220px]` for a larger, more prominent card visual.

3. **Increase info text size** — Change card name from `text-sm` to `text-lg font-bold`, loop info stays prominent, description from `text-xs` to `text-sm`, and increase `max-w` from 260px to 340px.

4. **Increase container size** — Change the right-side container from `w-[320px] h-[350px]` to a flex layout that fits the larger card + info naturally, removing the fixed perspective wrapper.

5. **Keep everything else intact** — Left pill list, auto-play, pause-on-hover, spring animations all stay the same.

