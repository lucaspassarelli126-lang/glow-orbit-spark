

## Plan

**File: `src/components/Hero.tsx`**

1. Add a `hasClicked` state (default `false`) that becomes `true` on the first card click.
2. Update the `onClick` handler to also set `hasClicked` to `true`.
3. Replace the hint text: remove the 👆 emoji, keep the text "Clique no cartão para virar", and conditionally render it only when `!hasClicked`. Add a fade-out transition.
4. Move the hint **below** the card container (it's already below, just needs the emoji removed and conditional visibility).

