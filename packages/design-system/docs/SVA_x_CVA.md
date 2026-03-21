Three clear topics — let me take them separately.

---

## 1. `sva` vs `cva` — the practical rule

**Yes, `sva` is the default for Ark-based components.** But not because "it's more consistent to always use slots." Because Ark components **always have multiple parts** — that's the whole point of the compound component pattern. Root, Control, Thumb, Label, Content, Item, etc. are all DOM elements that need their own styles.

**Use `sva` when:** the component has 2+ Ark sub-components that need styling (`ArkSwitch.Root`, `ArkSwitch.Control`, etc.).

**Use `cva` when:** you're styling a **single DOM element** that doesn't use Ark sub-components:

| Component      | Why `cva`                         |
| -------------- | --------------------------------- |
| `Badge`        | It's `<span>` — one element       |
| `Text`         | It's `<p>`/`<span>` — one element |
| `Spinner`      | It's `<div>` — one element        |
| `buttonRecipe` | Applied to one `<button>`         |

Don't add a `{ root: '...' }` wrapper to `Badge` just for consistency — that's `cva` territory. The rule is the component structure, not aesthetics.

---

## 2. `Root.css` — what it actually is

Looking at the content, `Root.css` is **not** a "generic component Root wrapper." It's a **button/trigger base style** — notice `padding-inline`, `border`, `border-radius`, hover/focus/disabled/variants. This is what any clickable **trigger element** that renders as a button looks like (e.g. `Select.Trigger`, `Combobox.Trigger`).

It's NOT extending or overriding per-component `.Root` styles — it IS the starting point for those trigger elements and they would then override specific values.

**What to do with it:**

Don't put it in `global.css`. Don't make it a shared CSS class. **Absorb it into your recipes.** In Panda, this translates to the `trigger` slot (or `root` slot) in each component's `sva`. The styles are almost identical to your `buttonRecipe` base — so for any Ark trigger, you reference that same foundation inside the recipe's slot definition.

The file is your **source spec** for what a trigger slot should look like. Once translated into the recipes, the file can be archived or deleted.

---

## 3. CSS layers — what they mean for you

You already have this in `global.css`:

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

**Where does `_Root.css` content go?**

Once converted to Panda recipes (sva), it lives in **`@layer utilities`** automatically. You don't need to declare a layer — Panda handles it.

If you ever have component styles that stay as raw CSS (not Panda), wrap them in `@layer base`:

```css
@layer base {
  /* component base styles that should lose to recipe/utility overrides */
}
```

But the goal is: everything component-related → sva recipe → `@layer utilities`. Only truly global stuff (scrollbars, icon utilities) stays in `global.css`.

---

**Summary action plan:**

1. **sva** for all Ark components, **cva** for single-element components only.
2. **`_Root.css`** → translate the `trigger` / `root` slot into each component's `sva`; don't ship it as a CSS file.
3. **CSS layers** → Panda handles it; just keep the `@layer` declaration order in `global.css` as-is.
