

## Plan: Replace AppSection phone with animated phone + floating card composition

**File: `src/components/AppSection.tsx`**

1. **Replace the smartphone visual** (lines 32-52) with a new composition containing:
   - A blurred orange/brown gradient background shape (`bg` element) with fade-in animation
   - A phone frame (240x480px, black with rounded corners and inner screen) with rise animation
   - A floating orange gradient credit card (300x180px) overlapping the phone at an angle, with rise + float animations
   - The card includes: glare effect, "inter" logo, chip, and Mastercard circles
   - The phone screen shows a simple UI with "Cartoes" and "R$ 50,00"

2. **Add CSS keyframes** to `src/index.css`:
   - `@keyframes float`: gentle vertical bob while maintaining `-18deg` rotation
   - `@keyframes rise`: entrance from below with scale and opacity
   - `@keyframes fadeIn`: simple opacity fade

3. **Keep everything else intact**: the right-column features grid, headings, intersection observer animation, and section layout remain unchanged.

4. **Mouse-based glare effect**: Add mouse tracking on the card to move the radial gradient glare, matching the provided code's interactive shine behavior.

