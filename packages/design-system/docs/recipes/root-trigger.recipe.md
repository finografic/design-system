# root-trigger.recipe.ts

### 1. `packages/design-system/src/recipes/root-trigger.recipe.ts`

- **`rootTriggerRecipe`** — `cva` based on your `_Root.css` **`.Root`** block (semantic tokens: `border.emphasized`, `fg`, `bg.subtle`, `accent.*`).
- **`tone`** variants: `outline` (default), `surface`, `solid` — same idea as Ark’s `data-variant`.
- **Neutral hover** only on `outline` / `surface` so **`solid`** keeps its own hover.
- **`compoundVariants`** for **`solid`** focus ring (`outlineOffset: 2px` like Ark).
- **`.Group`** from `_Root.css` is **not** included (that’s for attached button groups).

### 2. `Dialog.Trigger`

- **`Dialog.Trigger`** applies `rootTriggerRecipe({ tone })` and **`cx(..., className)`**.
- **`tone="outline"`** → no `data-variant` (matches Ark).
- **`surface` / `solid`** → `data-variant` set for parity with the docs.

### 3. Exports

- **`@finografic/design-system/recipes`**: `rootTriggerRecipe`, `RootTriggerRecipeProps`.
- **Types**: `DialogTriggerPropsDS`, `DialogTriggerTone` from the dialog entry points.

### Example

```tsx
<Dialog.Root>
  <Dialog.Trigger>Open</Dialog.Trigger>
  {/* or */}
  <Dialog.Trigger tone="surface">Open</Dialog.Trigger>
  <Dialog.Trigger tone="solid">Open</Dialog.Trigger>
  ...
</Dialog.Root>;
```

`pnpm exec panda codegen` completed successfully; ESLint is clean on the touched files.

**Next steps for you:** Reuse `rootTriggerRecipe` on Popover / Menu / Select triggers when you’re ready; wire **`tone`** the same way or call `rootTriggerRecipe({ tone })` + `cx` yourself.

---

## Ark Component that use `root-trigger.recipe.ts`

Reusable for components with triggers, like: Popover, Menu, Select triggers -- guessing.. confirm and fill table bellow..

|            |                                           |
| ---------- | ----------------------------------------- |
| **Dialog** | https://ark-ui.com/docs/components/dialog |
| etc..      |                                           |
|            |                                           |
|            |                                           |
|            |                                           |
|            |                                           |
|            |                                           |

---
