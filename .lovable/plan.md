

## Plan: Create "Conta Internacional" Section

The uploaded image shows an Inter Global Account promotional visual — a phone with the Inter app showing US dollar balance, alongside an orange debit card with "GLOBAL ACCOUNT" branding. Text reads "Conta internacional com cartão físico e virtual" and "sem IOF nas transações."

### Changes

**1. Copy image asset**
- Copy `user-uploads://image-Photoroom_1.png` to `src/assets/global-account.png`

**2. New file: `src/components/GlobalAccount.tsx`**
- Light/white background section with two-column layout
- **Left column**: Heading "Conta internacional com cartão físico e virtual" in large bold text (orange accent on key words), subtext about Global Account features (sem IOF, dólar comercial, cashback internacional), and a CTA button "Abrir conta global"
- **Right column**: The uploaded image with a subtle float animation and drop shadow
- Framer Motion entrance animations with `useInView`
- Responsive: stacks vertically on mobile

**3. Edit `src/pages/Index.tsx`**
- Import `GlobalAccount` and place it between `DarkSection` and `AppFeatures`

