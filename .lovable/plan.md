

## Problem

The hint text "Clique no cartão para virar" appears to the **right** of the card instead of **below** it. This is because the parent `motion.div` uses `flex` without `flex-col`, so items are laid out horizontally.

## Plan

**File: `src/components/Hero.tsx`**, line 95

Change the class from `flex items-start justify-center` to `flex flex-col items-center justify-start` so the hint stacks below the card vertically.

