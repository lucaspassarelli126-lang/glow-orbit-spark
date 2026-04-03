

## Problem

The card in the Hero section lost its 3D rotating animation. Currently it's static with `rotate(-12deg)` and a gray gradient. The original design had the `rotateCard` CSS animation (4s, infinite, with orange-to-gray color transitions).

## Plan

**File: `src/components/Hero.tsx`**

1. Replace the static `style` on the card div with the `animate-rotate-card` CSS class (already defined in `src/index.css`).
2. Wrap the card in a container with `perspective: 1000px` and `transform-style: preserve-3d` for proper 3D rendering.
3. Remove the inline `transform: rotate(-12deg)` and static gray gradient since the keyframe animation handles both transform and background transitions.
4. Keep the card size, content (logo, chip, number), shadows, and Framer Motion entrance animation (`opacity: 0, x: 60` fade-in) exactly as they are.

The card will rotate through orange/red gradients and gray gradients in a continuous 3D loop, matching the original spec.

