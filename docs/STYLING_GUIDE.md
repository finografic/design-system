# Styling Guide — @finografic/design-system

This guide explains how styling works in the design system (Panda CSS, recipes, cascade layers) and **what the consuming app must do** so that component styles (including recipe-based styles like the Button’s danger variant) apply correctly.

---

## 1. Overview

- **Panda CSS** is used for tokens, utilities, and **recipes** — **`cva`** (single element) and **`sva`** (slot recipes for compounds).
- Design-system components (e.g. **Button**) apply recipes **inside** the component. The client does **not** pass the recipe; it just uses props.
- The **client app** must run Panda with the design-system preset and **include the design-system source** in Panda’s scan so that recipe CSS is generated.
- The **client app** must import CSS in the correct order and use **cascade layers** so that the reset does not override recipe/utility styles.

---

## 2. Recipes inside design-system components

Recipes (e.g. `buttonRecipe` from `cva`, or `switchRecipe` from `sva`) are applied **inside** the design-system components. The client never calls the recipe directly.

### Example: Button (`cva`)

- **Recipe:** `packages/design-system/src/components/button/button.recipe.ts` defines `buttonRecipe` with `cva({ base, variants, defaultVariants })` (size, variant, palette, iconOnly).
- **Component:** `packages/design-system/src/components/button/button.tsx` binds the recipe to **`styles`** and merges with `className`:

```tsx
const styles = buttonRecipe({
  size,
  variant,
  palette,
  iconOnly: Boolean(icon && !children),
});

return (
  <ark.button
    className={cx(styles, className)}
    ...
  />
);
```

So the client only uses the component and props; the recipe is already applied:

```tsx
import { Button } from '@finografic/design-system/components';

<Button variant="solid" palette="danger" size="md">
  Delete
</Button>;
```

No `className={buttonRecipe(...)}` is required in the app. Optional overrides can still be passed via `className`, which is merged with **`styles`** using `cx()`.

### Why this matters for CSS generation

Panda generates CSS for a recipe when it **sees the recipe used** in files it scans. Because the recipe is used inside the design-system’s `button.tsx`, the **client’s** Panda must scan the design-system source (see below) so that the button recipe’s atomic classes are emitted into the client’s stylesheet.

---

## 3. Client `panda.config.ts` — include is crucial

For recipe styles (and any Panda utilities used by the design-system) to exist in the client build, the client’s Panda must **see** the design-system files where recipes are used.

Add the design-system **source** to `include` in the client’s `panda.config.ts`:

```ts
// panda.config.ts (in the client app)
import { defineConfig } from '@pandacss/dev';
import { designSystemPreset } from '@finografic/design-system/panda.preset';

export default defineConfig({
  presets: [designSystemPreset],
  include: [
    './src/**/*.{ts,tsx}',
    './node_modules/@finografic/design-system/src/**/*.{ts,tsx}',
  ],
  // ... outdir, jsxFramework, etc.
});
```

- **Why source and not only `dist`?** Panda does static extraction; it needs to parse the actual `.ts`/`.tsx` files where `buttonRecipe(...)` (and other recipes) are called. The built `dist` is not meant for Panda’s scanner.
- **If this include is missing:** Panda will not generate the button recipe’s atomic classes (e.g. `.color-palette_danger`, size/height utilities, etc.). Buttons will render without their intended background, size, or variant styles.

After adding this, run the client’s Panda (e.g. `panda codegen` or your normal PostCSS/Vite pipeline) so the generated CSS includes the recipe classes.

---

## 4. Cascade layers — why reset was overriding recipes (and the fix)

### What was going wrong

The design-system ships a **reset** (`styles/reset.css`) that normalizes form elements. It includes rules like:

```css
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}
```

Panda puts its generated styles (tokens, recipes, utilities) inside **cascade layers** (e.g. `@layer utilities`). In CSS, **unlayered styles win over layered styles**. So as long as the reset was **unlayered**, it overrode Panda’s layered utility/recipe styles — e.g. the danger button’s background only appeared when you disabled that reset rule in DevTools.

### Fix applied in the design-system

1. **Reset in a layer**\
   The entire contents of `packages/design-system/src/styles/reset.css` are wrapped in:

   ```css
   @layer reset {
     /* all reset rules */
   }
   ```

   So every reset rule (including the button rule above) is in the `reset` layer and has **lower** priority than later layers.

2. **Layer order declared in global CSS**\
   In `packages/design-system/src/styles/global.css`, the layer order is declared at the top:

   ```css
   @layer reset, base, tokens, recipes, utilities;
   ```

   Order is: `reset` (lowest) → `base` → `tokens` → `recipes` → `utilities` (highest). So Panda’s recipe/utility styles (which live in `utilities` for `cva` recipes) correctly override the reset.

3. **Client import order**\
   The client must import the design-system global CSS **before** Panda’s generated CSS so that:
   - The layer order is established first.
   - The reset is in `reset` layer; Panda’s output fills `tokens` / `recipes` / `utilities`.

See **Section 5** for the exact import order in the client.

---

## 5. Client CSS import order

Import order in the client is critical: design-system global styles (and thus the reset and layer order) must come **before** Panda’s generated styles.

**In the client app entry** (e.g. `main.tsx`, `App.tsx`, or your root CSS file that the entry imports):

```ts
// 1. Design-system global CSS first (declares layer order + reset in @layer reset)
import '@finografic/design-system/styles/global.css';

// 2. Panda’s generated CSS second (tokens, recipes, utilities)
import './styled-system/styles.css'; // or your app’s path to Panda output

// 3. Then your app entry / components
import './main';
```

If using a single root CSS file that the entry imports (e.g. `theme.css` or `index.css`):

```css
/* 1. Design-system first — layer order + reset */
@import url("@finografic/design-system/styles/global.css");

/* 2. Panda generated styles */
@import url("./styled-system/styles.css");

/* 3. App-specific overrides if any */
```

Wrong order (e.g. Panda before design-system global) can leave the reset unlayered or the layer order wrong, and the reset will again override recipe styles.

---

## 6. Quick checklist for the client

- [ ] `panda.config.ts`: use `designSystemPreset` and **include** `./node_modules/@finografic/design-system/src/**/*.{ts,tsx}`.
- [ ] Run Panda in the client (e.g. `panda codegen` or PostCSS) so generated CSS is up to date.
- [ ] Import **design-system** `styles/global.css` **before** Panda’s `styled-system/styles.css` (or equivalent).
- [ ] Do not import the design-system reset separately outside of `global.css`; use the order above so the reset stays in `@layer reset`.

---

## 7. References

- Panda cascade layers: [Cascade Layers](https://panda-css.com/docs/concepts/cascade-layers)
- Design-system reset: `packages/design-system/src/styles/reset.css`
- Design-system global CSS and layer order: `packages/design-system/src/styles/global.css`
- Button recipe and component: `packages/design-system/src/components/button/button.recipe.ts`, `button.tsx`
- Maintainer authoring (recipes, `styles` naming, `sva`/`cva`): `.github/instructions/project/sva-components.instructions.md`, `cva-components.instructions.md`, and `design-system.instructions.md`
