# SVA components — slot recipes & Ark compounds

Authoring guide for **`sva`** (slot recipes) + **`createStyleContext`** in
`packages/design-system/src/components/` and `src/forms/`. Use this to align new work
and refactors with **Checkbox**, **Switch**, **Select**, **Dialog**, etc.

**Pair doc:** [CVA components](cva-components.instructions.md) for single-element
recipes.

---

## Shared conventions (all Panda component work)

These apply to **both** `sva` and `cva` exports in this design system:

| Topic                             | Rule                                                                                                                                                                                                                                         |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`cx`**                          | Import only from `@styled-system/css`. **Inline** `cx(...)` in JSX when the result is used **once**; use a `const` only if reused, very long, or clarity needs a name.                                                                       |
| **Deprecated API**                | Do **not** add `@deprecated` props or backward-compat aliases. Prefer a clean break while the API is still settling.                                                                                                                         |
| **`onChange` at the DS boundary** | Where Ark uses awkward names (`onCheckedChange`, detail objects), **field-style wrappers** may expose a simpler **`onChange`** (e.g. boolean or value only) and forward internally. Bare **compound roots** stay faithful to Ark prop names. |
| **Types**                         | Export explicit variant unions where `RecipeProps<>` is insufficient (e.g. `ButtonVariant`, `ButtonPalette`). Do not index `RecipeProps` for keys that are not exposed.                                                                      |
| **Tokens**                        | Prefer semantic tokens in recipes (`fg`, `bg.muted`, `accent.solid`, `border.subtle`). Port Ark demo CSS by **mapping** demo variables to tokens, not by shipping demo CSS variables.                                                        |
| **Ark example CSS**               | Treat Ark docs stylesheets as a **spec** → implement as Panda **`sva`/`cva`** + tokens. Avoid shipping parallel **CSS modules** for the same UI long term.                                                                                   |

---

## When to use `sva` instead of `cva`

| Use **`sva`**                                                                                 | Use **`cva`**                                                                                                     |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Two or more** Ark sub-elements each need distinct styles (Root, Control, Thumb, Label, …).  | **One** rendered element gets variants (e.g. **Button**, **Badge**, **Text**, **Spinner**).                       |
| You use **`createStyleContext(recipe)`** and export a **compound object** (`Switch.Root`, …). | You call **`recipe({ variants })`** and pass the string to **`className`** (often with **`cx(..., className)`**). |

**Rule of thumb:** almost every **Ark compound** in `components/` or `forms/` should be **`sva` + `createStyleContext`**, not a lone `cva` on one slot only.

---

## File layout (per component)

| File               | Role                                                                            |
| ------------------ | ------------------------------------------------------------------------------- |
| `{name}.recipe.ts` | `sva({ className, slots, base, variants, defaultVariants, compoundVariants? })` |
| `{name}.tsx`       | Compound export + optional `*Field` / `Labeled*` wrapper                        |
| `{name}.types.ts`  | `RecipeProps`-based types; explicit unions when needed                          |
| `index.ts`         | Barrel re-exports                                                               |

---

## Slot recipe (`sva`) checklist

- **`className`:** short kebab name matching the component (e.g. `'switch'`, `'checkbox'`).
- **`slots`:** list every styled part; include **`description`** / **`errorText`** (or equivalent) on field-style recipes when copy is styled.
- **`base`:** per-slot objects; use Panda conditions (`_focusVisible`, `_checked`, `_disabled`, …) aligned with Ark **`data-*`** behavior.
- **`variants`:** size, palette, layout, etc.; use **`defaultVariants`** so consumers omit props safely.
- **Recipe JSDoc:** first line = name; list **slots** and **variant groups**; note if a slot maps to a specific Ark part.

---

## `createStyleContext` compound export

```ts
const { withProvider, withContext } = createStyleContext(switchRecipe);

export const Switch = {
  Root: withProvider(ArkSwitch.Root, 'root'),
  Control: withContext(ArkSwitch.Control, 'control'),
  Thumb: withContext(ArkSwitch.Thumb, 'thumb'),
  Label: withContext(ArkSwitch.Label, 'label'),
  HiddenInput: ArkSwitch.HiddenInput, // pass-through, no slot
};
```

- **`withProvider`:** the slot that owns **recipe variant props** (`size`, `palette`, …) — usually Ark **`Root`**.
- **`withContext`:** every other styled sub-part.
- **Unstyled pass-throughs** (`HiddenInput`, portal-only parts): attach Ark primitive **without** `withContext` when there is no recipe slot.

---

## JSDoc — compound object

1. **Block above `export const Switch`** (or equivalent):
   - What the compound is (styled Ark X, wired to `switchRecipe`).
   - **Where props go** (e.g. control state on **`Root`**).
   - **`@example`** with full **anatomy** — the snippet a consumer can copy and trim.

2. **One-line `/** ... */` immediately above each property** in the object:
   - **`Root`:** state, handlers, variant props.
   - **`Control` / `Thumb` / …:** role + that slot classes come from context.

This improves hover text in the IDE for **`Switch`**, **`Switch.Root`**, etc.

---

## Convenience wrappers (`SwitchDS`, `CheckboxField`, …)

- Call **`switchRecipe({ size, palette })`** (or equivalent) and apply **`cls.root`**, **`cls.control`**, … on the matching Ark elements (same pattern as **CheckboxField**).
- Prefer a **`classNames?: { root?, control?, … }`** object for overrides instead of many one-off `*ClassName` props.
- **Naming:** optional pattern **`{Component}DS`** for opinionated DS wrappers vs bare **`{Component}`** compounds (e.g. **`Switch`** + **`SwitchDS`**). Older components may still use **`*Field`** (`CheckboxField`) until aligned.
- **Simpler handlers:** e.g. **`onChange(checked: boolean)`** on **`SwitchDS`**, forwarding to Ark **`onCheckedChange`** internally — **do not** expose Ark’s detail object on the wrapper unless you intentionally mirror Ark.

---

## After you change a recipe

- Run **`panda codegen`** in `packages/design-system`.
- Ensure consuming apps’ **`panda.config.ts`** **`include`** covers linked DS source if they generate CSS from DS recipes.

---

## Anti-patterns

- **`cva` only on `Control`** while **Root / Label / Thumb** use ad hoc CSS modules — migrate to **one `sva`**.
- **Local `function cx(...)`** — use **`@styled-system/css`** **`cx`** only.
- **Duplicating `switchRecipe()` on both Root and Control** — each slot gets recipe classes **once**, from the correct slot definition.
