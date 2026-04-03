

## Plan

**File: `src/components/Hero.tsx`**

1. **Make the peek animation repeat** — Change the `useEffect` from a one-shot timeout to a `setInterval` that runs the flip-peek (tilt x=25 then back to 0) every ~3 seconds. Clear the interval once `hasClicked` becomes true.

2. **Remove the "Clique no cartão para virar" text** — Delete lines 182-187 entirely. The animated ↺ icon on the card is sufficient as a hint.

