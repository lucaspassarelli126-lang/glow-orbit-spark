

## Plan: Fix card image right edge with smooth gradient fade

The dark line on the right edge is caused by the image's hard crop. Instead of editing the image file, we apply a CSS mask that fades the right edge to transparent, blending seamlessly with the background.

### Changes

**File: `src/components/Hero.tsx`** (line 72-76)

Add a CSS `mask-image` gradient to the `<img>` tag that fades to transparent on the right edge (and slightly on the bottom), eliminating the visible cut line:

```tsx
<img
  src={c6CardAngled}
  alt="Cartão C6 Bank no Bloco"
  className="relative z-10 w-full h-auto object-cover object-right-bottom transform translate-x-[5%] translate-y-[5%]"
  style={{
    maskImage: "linear-gradient(to right, black 70%, transparent 100%), linear-gradient(to bottom, black 70%, transparent 100%)",
    maskComposite: "intersect",
    WebkitMaskImage: "linear-gradient(to right, black 70%, transparent 100%), linear-gradient(to bottom, black 70%, transparent 100%)",
    WebkitMaskComposite: "destination-in",
  }}
/>
```

This creates a smooth feather on the right and bottom edges — no image editing needed, fully CSS-based, and the card blends continuously into the dark background.

