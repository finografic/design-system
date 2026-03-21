# CVA components — atomic recipes & single-element components

Authoring guide for **`cva`** (class variance / atomic recipes) on **one DOM node**
in `packages/design-system/src/components/` (and rare single-node cases elsewhere).

**Pair doc:** [SVA components](sva-components.instructions.md) for multi-slot Ark
compounds and `createStyleContext`.

---

## Shared conventions (all Panda component work)

Same rules as **[sva-components.instructions.md](sva-components.instructions.md)** (section **Shared conventions**). In short:

| Topic              | Rule                                                                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`cx`**           | From `@styled-system/css`; **inline** when used once in JSX.                                                                                                             |
| **Deprecated API** | No `@deprecated` props; no long-lived compat shims.                                                                                                                      |
| **`onChange`**     | On **wrappers**, simplify handler shapes when it helps DX; **primitives** stay close to DOM/Ark (`onCheckedChange` on a raw button is N/A — buttons use `onClick`).      |
| **Types**          | Explicit variant unions where `RecipeProps<>` is weak.                                                                                                                   |
| **Tokens**         | Semantic tokens in `base` / `variants`; map third-party demo CSS to tokens.                                                                                              |
| **Recipe binding** | Bind the **`cva`** return value to **`styles`** (a class string), not `recipeClass` or `cls`. Multiple recipes in one scope: **`stylesButton`**, **`stylesBadge`**, etc. |

---

## Recipe return variable (`styles`)

**`cva`** returns a **single class string** (unlike **`sva`** slot objects). Still use
the same naming rule:

| Situation                                | Name                             | Example                                                                                         |
| ---------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------- |
| One recipe in scope                      | **`styles`**                     | `const styles = buttonRecipe({ size, variant, palette })` → `className={cx(styles, className)}` |
| Several recipes in the same file/closure | **`styles` + PascalCase suffix** | `const stylesButton = buttonRecipe(…)`, `const stylesIcon = iconRecipe(…)`                      |

---

## When to use `cva` instead of `sva`

| Use **`cva`**                                                                                             | Use **`sva`** instead                                                                                |
| --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Single** element receives all variant styles (**Button**, **Badge**, **Text**, **Spinner**, **Label**). | **Multiple** Ark (or DS) parts each need classes (**Dialog**, **Switch**, **Checkbox**, **Select**). |
| One **`className`** string from **`buttonRecipe({ ... })`**.                                              | **`recipe()`** returns an object of slot class strings, or **context** injects them per slot.        |

Do **not** wrap a lone `cva` in fake **`{ root: '...' }`** “slots” just for consistency — that obscures when **`sva`** is the real tool.

---

## File layout (per component)

| File               | Role                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------- |
| `{name}.recipe.ts` | `cva({ base, variants, compoundVariants?, defaultVariants })`                         |
| `{name}.tsx`       | `forwardRef` component; **`cx(recipe(...), className)`**                              |
| `{name}.types.ts`  | `RecipeProps<typeof xRecipe>` + exported unions (`ButtonVariant`, `ButtonPalette`, …) |
| `index.ts`         | Barrel                                                                                |

---

## Recipe (`cva`) checklist

- **`base`:** shared layout, transitions, focus rings, disabled states.
- **`variants`:** orthogonal axes (`size`, `variant`, `palette`, `iconOnly`, …).
- **`compoundVariants`:** combinations that are not a simple product of axes (e.g. warning + solid).
- **`defaultVariants`:** safe defaults for every variant group you expect consumers to omit.
- **JSDoc:** variant groups and semantics (**`palette`** sets `colorPalette` for token resolution, etc.).

---

## Component implementation

- **`forwardRef`** to the underlying element (`ark.button`, `span`, …).
- **`const styles = buttonRecipe({ ... })`** when you reference the class string more than once (e.g. `styles` + `buttonRecipe.raw`); otherwise inline **`className={cx(buttonRecipe({ ... }), className)}`** per the **`cx`** inlining rule.
- Merge consumer **`className`** last: **`cx(styles, className)`**.
- Expose **`data-*`** attributes that help debugging and style hooks (`data-size`, `data-variant`, `data-loading`, …) where useful.

---

## JSDoc

- Top-of-file or above **`export const Button`:** purpose, recipe name, **usage `import`**, minimal **`@example`** with variants.
- Keeps parity with **SVA** docs: consumers discover API from the component export, not only README.

---

## Anti-patterns

- **`cva`** for a component that is actually **multi-part** Ark UI — use **`sva` + `createStyleContext`**.
- **`clsx` / `cn`** for Panda class strings in DS code — use **`cx`** from **`@styled-system/css`** for consistency with generated classes.
