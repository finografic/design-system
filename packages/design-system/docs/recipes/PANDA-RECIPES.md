# Panda CSS Recipes — Reference & Clarifications

A practical reference covering everything about Panda recipes that the
official docs either gloss over, assume you already know, or bury in
a GitHub discussion. Written in the context of `@finografic/design-system`.

---

## The two recipe systems

Panda has two distinct recipe APIs. They look similar but behave differently.

### Atomic recipes — `cva()` and `sva()`

Imported from `styled-system/css`. This is what the DS uses.

```ts
import { cva } from '@styled-system/css';

export const buttonRecipe = cva({ ... });
```

Panda generates **all variants upfront at codegen time**, regardless of
whether your code ever uses them. The entire variant matrix is emitted as
atomic CSS classes. This is intentional — `cva` recipes are scattered
across your source files, and scanning for actual usage would require
multiple parse passes, which is too slow.

**Implication for the DS:** every variant in every recipe is always in the
CSS output. This is fine for a component library — you want all variants
available for consumers to use. It would be a concern for a large app
generating megabytes of unused CSS.

### Config recipes — `defineRecipe()` / `defineSlotRecipe()`

Defined in `panda.config.ts` under `theme.recipes`. Panda scans usage and
only generates CSS for variants actually used in your source files — true
JIT. Better CSS efficiency, but worse for libraries because consumers need
to ensure variants they use are covered by their own Panda scan.

**The DS uses `cva` / `sva` — the right choice for a component library.**
Config recipes are better suited for apps, not libraries.

---

## What's reserved vs. what's yours

A common source of confusion: what names are Panda's and what names can
you freely use?

### Reserved — Panda's internal structure keys

These are the top-level keys of the `cva()` / `sva()` config object.
You cannot rename them:

| Key                | Purpose                                           |
| ------------------ | ------------------------------------------------- |
| `base`             | Styles always applied, regardless of variants     |
| `variants`         | Your variant groups (fully user-defined inside)   |
| `compoundVariants` | Styles applied when multiple conditions match     |
| `defaultVariants`  | Default values for each variant group             |
| `slots`            | (`sva` only) names of the component parts         |
| `className`        | (`sva` only) optional BEM-style base class prefix |

### Reserved — style prop names inside variant values

Inside variant style objects, Panda processes property names as CSS
properties or Panda utilities. These map to real CSS:

- `colorPalette` — special: activates the virtual color mechanism (see below)
- `color` — maps to the CSS `color` property
- `display`, `position`, `padding`, `margin`, etc. — all CSS properties

This is why naming a variant `color` risks ambiguity — if you write
`color: { primary: { color: 'blue.500' } }`, the outer `color` is your
variant group name (fine) but the inner `color` is the CSS property (also
fine, but visually confusing).

### Completely yours — variant group names

The keys inside `variants: { ... }` are entirely user-space. Panda imposes
no restrictions on naming variant groups:

```ts
variants: {
  size:    { ... },   // fine
  variant: { ... },   // fine
  palette: { ... },   // fine ← what the DS uses
  intent:  { ... },   // fine
  mood:    { ... },   // fine (if nonsensical)
}
```

### Completely yours — variant option names

The keys inside each variant group are also user-space:

```ts
variants: {
  palette: {
    primary:   { colorPalette: 'primary' },   // fine
    danger:    { colorPalette: 'danger' },    // fine
    'brand-x': { colorPalette: 'brand' },     // fine (quoted if needed)
  }
}
```

---

## `colorPalette` — how the virtual color system works

`colorPalette` is a Panda built-in mechanism, not a CSS property. It is
the _only_ reserved name inside variant style values that has special
Panda-specific behaviour.

When you write:

```ts
variants: {
  palette: {
    primary: { colorPalette: 'primary' },
    danger:  { colorPalette: 'danger'  },
  }
}
```

Panda emits a CSS custom property at runtime:

```css
/* when palette='primary' */
.cp_primary {
  --colors-color-palette: var(--colors-primary);
}

/* when palette='danger' */
.cp_danger {
  --colors-color-palette: var(--colors-danger);
}
```

Any style in the recipe that references `colorPalette.*` then resolves
through that variable:

```ts
variant: {
  solid: {
    bg:          'colorPalette.base',    // → primary.base or danger.base
    borderColor: 'colorPalette.dark',    // → primary.dark or danger.dark
    color:       'white',
  }
}
```

This is why `colorPalette.base` is not a literal token — it is a
_pointer_ to whatever shade `base` within the currently active palette.
Your token scale must have a `base` key for this to resolve. Check your
`colors.tokens.ts` — shades like `base`, `dark`, `darker`, `light`,
`lighter`, `xlight` are what map to `colorPalette.base`,
`colorPalette.dark`, etc.

**The critical insight:** variant styles using `colorPalette.*` are written
once. The `palette` variant group does nothing more than activate a
different CSS variable. No compound variants needed per color.

### Setting a default colorPalette in `base`

You can set a fallback colorPalette directly in `base` so the recipe
works without specifying a palette:

```ts
base: {
  colorPalette: 'neutral',  // fallback if no palette variant is applied
  display: 'inline-flex',
  ...
}
```

This is equivalent to `defaultVariants: { palette: 'default' }` but
expressed at the style level rather than the variant level.

### Using colorPalette with dark mode

```ts
variant: {
  solid: {
    bg: {
      base:  'colorPalette.base',
      _dark: 'colorPalette.dark',
    },
  }
}
```

Works exactly as expected — `colorPalette.*` is resolved after the
condition is evaluated.

---

## `compoundVariants` — what the docs underexplain

Compound variants apply styles when a specific combination of variant
values is active simultaneously. The DS uses exactly one:

```ts
compoundVariants: [
  {
    variant:  'solid',
    palette:  'warning',
    css: { color: 'fg' },   // warning+solid needs dark fg, not white
  },
],
```

### How CSS is generated

Compound variant styles are always generated as atomic CSS, placed in
`@layer utilities` — they are emitted regardless of usage in your code.
This is intentional and documented behaviour. The reason: Panda cannot
statically determine which combinations will be used when variant values
are dynamic, so it generates all compound variant CSS upfront.

### The `css` key is required

Inside each compound variant object, styles must be nested under a `css`
key:

```ts
// ✅ correct
{ variant: 'solid', palette: 'warning', css: { color: 'fg' } }

// ❌ wrong — styles at top level won't be processed
{ variant: 'solid', palette: 'warning', color: 'fg' }
```

### Boolean variants in compoundVariants

Boolean variant keys are matched with `true` / `false` as strings in the
condition object:

```ts
variants: {
  iconOnly: { true: { paddingInline: '0' } }
}

compoundVariants: [
  {
    iconOnly: true,   // matches when iconOnly=true
    size: 'xs',
    css: { minW: '6', h: '6' }
  }
]
```

---

## Boolean variants

Panda treats the key `true` as a valid variant option, which enables
prop-style boolean variants:

```ts
variants: {
  iconOnly: {
    true: { paddingInline: '0' },
  },
  disabled: {
    true:  { opacity: 0.5, pointerEvents: 'none' },
    false: { opacity: 1 },
  },
}
```

At the call site:

```ts
buttonRecipe({ iconOnly: true });
buttonRecipe({ iconOnly: false }); // explicitly set to false
buttonRecipe({}); // iconOnly not applied
```

No `defaultVariants` needed if you only want it applied when explicitly
set to `true`.

---

## Slot recipes — `sva()`

Used for multi-part components where different elements need to share the
same variant state. The DS uses this for `tableRecipe`, checkboxes, etc.

```ts
import { sva } from '@styled-system/css';

const checkboxRecipe = sva({
  className: 'checkbox', // optional: produces checkbox__root, checkbox__control etc.
  slots: ['root', 'control', 'label', 'indicator'],
  base: {
    root: { display: 'flex', alignItems: 'center' },
    control: { borderWidth: '1px', borderRadius: 'sm' },
  },
  variants: {
    size: {
      sm: {
        control: { w: '4', h: '4' },
        label: { fontSize: 'sm' },
      },
    },
  },
  defaultVariants: { size: 'sm' },
});
```

`sva()` returns an object of class strings, one per slot:

```ts
const classes = checkboxRecipe({ size: 'sm' });
// { root: 'css-...', control: 'css-...', label: 'css-...' }

<div className={classes.root}>
  <div className={classes.control} />
  <span className={classes.label} />
</div>;
```

### `className` and cross-slot targeting

The optional `className` property enables BEM-style slot targeting from
other slots:

```ts
const button = sva({
  className: 'btn',
  slots: ['root', 'icon'],
  base: {
    root: {
      _hover: {
        '& .btn__icon': { color: 'white' }, // target icon slot from root
      },
    },
  },
});
```

Without `className`, cross-slot targeting via CSS selectors is not
possible because slot classes are atomic hashes.

---

## Getting types from recipes

### From `cva()` (atomic recipe)

```ts
import { cva, type RecipeVariantProps } from '@styled-system/css';

export const buttonRecipe = cva({ ... });

export type ButtonVariants = RecipeVariantProps<typeof buttonRecipe>;
// → { size?: 'xs'|'sm'|'md'|'lg'|'xl', variant?: 'solid'|..., palette?: ... }
```

### From `sva()` (slot recipe)

```ts
import { sva, type RecipeVariantProps } from '@styled-system/css';

export const tableRecipe = sva({ ... });

export type TableVariants = RecipeVariantProps<typeof tableRecipe>;
```

### Splitting recipe props from component props

Useful in components that accept both recipe variants and arbitrary HTML
props. The `.splitVariantProps()` method separates them:

```ts
import { button } from 'styled-system/recipes';

function Button(props: ButtonProps) {
  const [recipeProps, htmlProps] = button.splitVariantProps(props);
  return <button className={button(recipeProps)} {...htmlProps} />;
}
```

Note: this pattern uses the **config recipe** from `styled-system/recipes`,
not the `cva` function directly. For DS atomic recipes (defined via `cva`
in source), you handle the split manually:

```ts
const { size, variant, palette, className, ...htmlProps } = props;
const recipeClassName = buttonRecipe({ size, variant, palette });
```

---

## Merging recipe styles with the `.raw()` method

When you need to merge a recipe's styles with other `css()` calls, use
`.raw()` to get the style object instead of the class string:

```ts
import { css, cva } from '@styled-system/css';

const buttonRecipe = cva({ ... });

// merge recipe styles with one-off overrides
const className = css(
  buttonRecipe.raw({ variant: 'solid', palette: 'primary' }),
  { _hover: { opacity: 0.9 } },   // additional styles
  externalCssProp,                 // consumer-provided overrides
);
```

This is the correct pattern when building wrapper components that accept
a `css` prop for style overrides. Never use `cx()` for this — class
merging via string concatenation does not respect Panda's atomic class
specificity.

---

## Limitations the docs understate

### No responsive values in `cva` / `sva`

Responsive variant syntax (`{ base: 'sm', md: 'lg' }`) only works in
**config recipes** (defined in `panda.config.ts`). Atomic recipes (`cva`)
do not support responsive variant values because all CSS is pre-generated.

```ts
// ❌ Does NOT work with cva
buttonRecipe({ size: { base: 'sm', md: 'lg' } });

// ✅ Works with config recipes only
// (requires the recipe to be in panda.config.ts theme.recipes)
```

For responsive behaviour with atomic recipes, apply the recipe once and
use responsive token values inside the variant styles themselves.

### Static analysis limitations

Panda's parser cannot track recipe variant usage in some patterns:

```ts
// ❌ Panda cannot track — prop renamed
const Button = ({ buttonSize }) => <button className={buttonRecipe({ size: buttonSize })} />;

// ❌ Panda cannot track — component renamed
const MyThing = Button;
<MyThing size="lg" />;

// ✅ Fine — direct call with literal values
buttonRecipe({ size: 'lg', variant: 'solid' });
```

For `cva` atomic recipes this doesn't matter — all variants are generated
regardless. It only matters for config recipes.

### `cva` generates all variants even if unused

As noted above — for a DS/component library this is the right behaviour.
For an app that defines its own `cva` recipes inline, it means unused
variant CSS is always emitted. Use config recipes in apps if CSS size is
a concern.

---

## DS-specific patterns

### Recipe instances at module scope

Calling `cva()` returns a stable function — call it at module scope, not
inside the component:

```ts
// ✅ Module scope — evaluated once
const tableClasses = tableRecipe({ size: 'sm', stickyHeader: true });

export function OrdersTable() {
  return <div className={tableClasses.root}>...</div>;
}
```

```ts
// ❌ Inside component — re-evaluated on every render (not harmful, just wasteful)
export function OrdersTable() {
  const tableClasses = tableRecipe({ size: 'sm' });
  ...
}
```

### Composing multiple recipes

Recipes are independent class strings. Composition is just React — apply
whichever class strings are appropriate to whichever elements:

```tsx
const tableClasses  = tableRecipe({ size: 'sm' });
const filterClasses = inputRecipe({ size: 'sm' });
const buttonClasses = buttonRecipe({ size: 'xs', variant: 'ghost' });

<th className={tableClasses.th}>
  <input className={filterClasses} />
</th>
<button className={buttonClasses}>Next</button>
```

No Panda-specific composition API exists. Recipes don't know about each
other — they are just functions returning class name strings.

### Emotion + Panda hybrid

Emotion (`css` template literals) is used alongside Panda in the DS for:

- Scoped nested-selector styles not expressible in Panda recipes
- Runtime interpolations
- Per-component tweaks after the fact

The two systems are additive via `cx()`:

```ts
import { cx } from '@styled-system/css';
import { css } from '@emotion/css';

const overrides = css`
  .table__td:nth-child(4) { text-align: right; }
`;

<div className={cx(tableClasses.root, overrides)} />;
```

---

## Quick reference

| Question                                     | Answer                                                |
| -------------------------------------------- | ----------------------------------------------------- |
| Can I name a variant group anything?         | Yes — fully user-space                                |
| Can I name variant options anything?         | Yes — fully user-space                                |
| Is `colorPalette` special?                   | Yes — it activates Panda's virtual color system       |
| What does `colorPalette.base` mean?          | The `base` shade of the currently active palette      |
| Do I need compound variants for each color?  | No — `colorPalette` handles this without them         |
| Are all `cva` variants always generated?     | Yes — regardless of usage                             |
| Can `cva` use responsive variant values?     | No — config recipes only                              |
| How do I get TypeScript types from a recipe? | `RecipeVariantProps<typeof myRecipe>`                 |
| How do I merge recipe styles with overrides? | Use `.raw()` then pass to `css()`                     |
| Should the recipe go inside the component?   | No — call `cva()` at module scope                     |
| What's `sva` for?                            | Multi-part components where slots share variant state |
| What does `className` do in `sva`?           | Enables BEM slot class names for CSS cross-targeting  |
