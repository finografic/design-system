# CSS layers — DS components

## `global.css`

Should contain at the top of the file:

```css
@layer reset, base, tokens, recipes, utilities;
```

Think of each layer as a **priority shelf**. Later in the list = higher priority, wins over earlier:

```
reset       ← browser normalization (lowest — always loses to your styles)
base        ← global element defaults (a { }, body { }, etc.)
tokens      ← CSS variables (--colors-primary, --sizes-4, etc.)
recipes     ← config-based Panda recipes (defineRecipe in panda.config)
utilities   ← atomic classes + YOUR cva/sva output (highest — wins over everything)
```

**Key thing to know:** anything NOT in a layer beats anything IN a layer. That's exactly the reset bug we fixed earlier — unlayered reset rules were beating layered utility rules.

## Where does `Root.css` content go?

Once converted to Panda recipes (sva), it lives in **`@layer utilities`** automatically. You don't need to declare a layer — Panda handles it.

If you ever have component styles that stay as raw CSS (not Panda), wrap them in `@layer base`:

```css
@layer base {
  /* component base styles that should lose to recipe/utility overrides */
}
```

## The goal

#### everything component-related → sva recipe → `@layer utilities`.

#### Only truly global stuff (scrollbars, icon utilities) stays in `global.css`.

---

**Remember:**

1. **sva** for all Ark components, **cva** for single-element components only.
2. **`Root.css`** → translate the `trigger` / `root` slot into each component's `sva`; don't ship it as a CSS file.
3. **CSS layers** → Panda handles it; just keep the `@layer` declaration order in `global.css` as-is.

## Rules of thumb

**Complete picture of the transcript. Key new high-signal facts from the newer portion:**

1. `sva` confirmed as the default for Ark-based components; `cva` only for genuinely single-DOM-element components
2. Ark UI CSS example files should be translated into Panda `sva` recipes, not used as CSS modules
3. Never create local `cx` functions in components — always import from `@styled-system/css`
4. Recipe names should indicate their target slot (or use JSDoc)
5. The existing "Follow existing recipe patterns" bullet is duplicated — needs deduplication
