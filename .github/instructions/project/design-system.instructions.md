# Design System Usage Rules

This project uses a custom design system (`@workspace/design-system`) built on
**Ark UI** and **Panda CSS**. Follow these rules when consuming it.

**Discovery:** DS-specific conventions (forms, Panda patterns, `cx` inlining, API
policy) live **here** — not in generic ESLint docs. Linked from repo `AGENTS.md` and
`.github/copilot-instructions.md` so assistants and Copilot can resolve this path.

## Panda MCP server

A Panda CSS MCP server is configured in `packages/design-system/` (`.mcp.json` for
Claude Code, `.cursor/mcp.json` for Cursor). Use it to query live token values,
recipe slots, and config instead of guessing from static docs. Run it with:

```bash
pnpm panda:mcp   # from packages/design-system/
```

## Source protection

- Do **not** modify any file under `packages/design-system/src/` unless the user
  explicitly asks for a DS change.
- Do **not** install competing styling libraries (Tailwind, Emotion, styled-components,
  Radix Themes, etc.). Panda CSS is the style engine.

## Import paths

```ts
import { Button, Badge, Dialog, ... }  from '@workspace/design-system/components';
import { Select, SelectDefault, SelectSearchable, InputField, InputNumber,
         Checkbox, CheckboxField, RadioGroup, Slider, Switch, SwitchDS,
         TagsInput, TagsInputDS, FieldBox, Label } from '@workspace/design-system/forms';
import { buttonRecipe, selectRecipe, ... } from '@workspace/design-system/recipes';
import { colors }                      from '@workspace/design-system/tokens';
import { Row, Col, Container }         from '@workspace/design-system/grid';
```

Raw Ark UI primitives are importable directly from `@ark-ui/react` — there is no
`forms/primitives` escape hatch.

## Panda CSS gotchas

- **Never** use `<Box css={...}>` or `<Flex css={...}>` — causes TS2590. Use
  `<div css={...}>` or `<span css={...}>` instead.
- Spacing props must be **numeric**: `gap={4}` not `gap="4"` (ESLint enforced).
- `Row` justify uses full CSS values: `"space-between"` not `"between"`.

## Tokens

- Colors follow an 11-stop shade scale: `xxxlight → xxxdark`. No alpha variants.
- Use semantic tokens in recipes (`bg.panel`, `fg.muted`, `border.subtle`).
- Use the `colors` map for inline style migration (`colors.primaryLight` →
  `var(--colors-primary-light)`).

## Form components

Most controls accept RHF-friendly props: `onBlur`, `name`, `ref`, `error?: FieldError | string`.
Text-like fields use `value` / `onChange`. **Switch** (compound `Switch.Root`) uses Ark’s
API: `checked` and **`onCheckedChange`** (`{ checked: boolean }`). **`SwitchDS`**
exposes only a boolean **`onChange(checked)`** — it forwards to Ark internally (no
`{ checked }` object at the DS boundary).

## DS component implementation (Panda / React)

- Prefer **inlining** single-use expressions in JSX — especially **`cx(...)`** from
  `@styled-system/css` for `className` — when the expression is only referenced once
  and inlining stays readable. Use a `const` when reused, very long, or you need a
  name for clarity or side effects.
- Bind recipe outputs to **`styles`** (or **`stylesComponent`** when several recipes
  share a scope) — see [SVA](sva-components.instructions.md#recipe-return-variable-styles)
  and [CVA](cva-components.instructions.md#recipe-return-variable-styles) authoring docs.

## API surface (this design system)

- **No deprecated props** — avoid `@deprecated` aliases and backward-compat shims;
  prefer clean breaking changes while the API is still settling.

Use `FieldBox` to add label/hint/error layout around any control:

```tsx
<FieldBox name="email" label="Email" hint="We'll never share this">
  <InputField.Root {...field} />
</FieldBox>;
```

`FieldBox` auto-wires to `useFormContext()` when inside a `<FormProvider>`.

Use `SelectDefault` for simple option lists; use `Select.*` compound when you need
full layout control.

## Recipe application

- `cva` recipes: call the function and pass the result as `className`.
- `sva` + `createStyleContext`: use the compound sub-components directly — they
  receive slot classes automatically.
- Do not call `sva` recipe functions directly in consuming app code.

## Authoring components (maintainers)

Detailed patterns for aligning `components/` and `forms/`:

- [SVA — slot recipes & Ark compounds](sva-components.instructions.md)
- [CVA — atomic recipes & single-element components](cva-components.instructions.md)
