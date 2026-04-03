

## Problem

The Hero section currently has a CSS-drawn credit card with the `animate-rotate-card` 3D rotation. The user wants to replace it with the uploaded real Inter card image, keeping the same rotation animation.

## Plan

**Step 1: Copy the uploaded image to the project**
- Copy `user-uploads://inter-lanca-cartao-de-credito-sem-anuidade-para-residentes-nos-estados-unidos-inter-2-removebg-preview.png` to `src/assets/card-inter.png`

**Step 2: Update `src/components/Hero.tsx`**
- Import the image: `import cardInter from "@/assets/card-inter.png"`
- Replace the entire inner card content (logo, chip, number, gradient background) with a single `<img>` tag using the imported image
- Keep the outer `animate-rotate-card` class and `perspective` wrapper intact so the 3D rotation continues
- Remove the `rounded-2xl` background and box-shadow on the card div since the image has its own shape (transparent PNG)
- Adjust sizing to fit the image naturally (use `max-w-[480px] w-full` with `object-contain`)

The card image will rotate in 3D exactly as before, but now showing the real Inter card photo instead of a CSS mockup.

