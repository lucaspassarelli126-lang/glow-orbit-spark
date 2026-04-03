

## Plan: Replace Products section with Inter-style card carousel

The current `Products` section shows a grid of 5 cards. The user wants to replace it with a tabbed carousel matching the Inter website screenshots: tabs at the top (Gold, Platinum, Prime, Win), a card image on the left, and card details (name, "Sem anulidade" badge, Inter Loop info, benefits, requirements) on the right.

### Approach

Instead of using the provided `FeatureCarousel` component (which has a very different design with a vertical pill list + image cards), I will adapt its auto-play/tab-switching logic but build a custom layout that matches the Inter reference screenshots exactly.

**The `@hugeicons` dependency will NOT be used** -- the provided carousel component's design doesn't match the reference. I'll use lucide-react icons instead and build a layout faithful to the screenshots.

### Data Structure

Four card tiers, each with:
- Tab label, card name, card gradient/color, Inter Loop points ratio
- Benefits list (milhas, dolares, cashback, descontos, salas VIP, investimentos)
- Requirements ("Como ter o seu cartao")

### File Changes

**1. New file: `src/components/CardCarousel.tsx`**

- State: `activeTab` (Gold | Platinum | Prime | Win)
- Top: horizontal tab bar with orange border on active tab
- Content area (rounded white card with shadow): two-column grid
  - Left: CSS credit card visual matching each tier's color (orange for Gold, gray for Platinum, black for Prime, dark navy for Win) with Inter logo, chip, and Mastercard circles -- animated entrance on tab change
  - Right: card name + "Sem anulidade" green badge, Inter Loop yellow banner, benefits grid (2 columns, 6 items with lucide icons), requirements section with green checkmarks
- Auto-play every 4s, pause on hover
- Animate content transitions with framer-motion `AnimatePresence`

**2. Edit: `src/components/Products.tsx`**

- Keep the heading ("Escolha o cartao ideal para voce" / "Opcoes para todos os perfis...")
- Replace the card grid (lines 32-63) with `<CardCarousel />`

**3. Dependencies**: No new npm packages needed (already has framer-motion and lucide-react).

### Card tier data

| Tab | Color | Loop | Requirements |
|-----|-------|------|-------------|
| Gold | Orange gradient | R$ 10,00 | Abrir conta gratuita, 18+ com CPF |
| Platinum | Silver/gray | R$ 5,00 | Salario R$ 6 mil via portabilidade, ou R$ 5.000 em 4 faturas |
| Prime | Black | R$ 2,50 | Plano anual Duo Gourmet, ou R$ 7.000 em 4 faturas |
| Win | Dark navy | R$ 2,00 | Investimentos a partir de R$ 1 milhao |

