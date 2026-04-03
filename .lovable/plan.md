

## Plan: Add animated hint icon and initial flip teaser to the card

**File: `src/components/Hero.tsx`**

1. Add a `↺` hint element inside the card's front face — positioned `absolute top-2.5 right-3`, white with 70% opacity, `pointer-events-none`, with a CSS animation class.
2. Hide the hint after `hasClicked` becomes true (same logic as the text hint below).
3. Add a `useEffect` that runs on mount: after 1s delay, set `tilt.x = 25`, then after 800ms reset to 0 — giving a brief "peek" flip animation on page load.

**File: `src/index.css`**

4. Add the `hintMove` keyframe animation:
   - 0%: `rotate(0) translateY(0) opacity 0.5`
   - 50%: `rotate(20deg) translateY(-3px) opacity 1`
   - 100%: back to start
5. Add `.animate-hint-move` utility class using that keyframe (1.5s infinite).

