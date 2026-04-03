

## Plan: Replace Hero card with 3D interactive card

**File: `src/components/Hero.tsx`**

Replace lines 59-92 (the entire right column) with a React version of the provided HTML card:

1. Add `useRef` and `useState` hooks for mouse-tracking 3D tilt and flip-on-click.
2. Build a card container (`340x210px`) with `transform-style: preserve-3d` and `transition: transform 0.8s`.
3. **Front side**: Gray gradient background (`#8a8a8a → #5e5e5e`), radial shine overlay, "inter" logo, chip, card number `1234 5678 9012 3456`, name "SEU NOME", expiry "12/30", and Mastercard red/yellow circles.
4. **Back side**: Black magnetic strip + white CVV box with "123", rotated 180deg via `rotateY(180deg)`.
5. **Interactions**:
   - `onClick`: toggles flip state (`rotateY(180deg)`)
   - `onMouseMove` on the card container: calculates X/Y offset from center and applies `rotateY(x)deg rotateX(y)deg` — the parallax shine effect follows the mouse
   - `onMouseLeave`: resets transform to neutral
6. Keep the Framer Motion entrance animation (`opacity: 0, x: 60` → `opacity: 1, x: 0`).
7. All styles inline or via Tailwind — no separate CSS file needed. The existing `animate-rotate-card` class will be removed from this element.

