# Components

All components live in `src/components/`, one folder per component.

## Folder convention

Each folder contains exactly four files:

```
{name}/
  {name}.recipe.ts   ← Panda CSS recipe (cva or sva)
  {name}.types.ts    ← Exported variant/prop types
  {name}.tsx         ← React component
  index.ts           ← Barrel (re-exports all three)
```

## Component inventory

| Component    | Recipe type | Ark UI       | createStyleContext | Notes                                                                                                 |
| ------------ | ----------- | ------------ | ------------------ | ----------------------------------------------------------------------------------------------------- |
| `badge`      | `cva`       | —            | —                  | `<span>` wrapper                                                                                      |
| `button`     | `cva`       | `ark.button` | —                  | Self-applies recipe                                                                                   |
| `callout`    | `cva`       | —            | —                  | `<div role="alert">` wrapper                                                                          |
| `card`       | `cva`       | —            | —                  | `<div>` wrapper                                                                                       |
| `data-table` | `sva`       | —            | —                  | TanStack Table; slot classes via `classNames` prop                                                    |
| `dialog`     | `sva`       | yes          | yes                | `withProvider` + `withContext`                                                                        |
| `menu`       | `sva`       | yes          | yes                | `withProvider` + `withContext`                                                                        |
| `popover`    | `sva`       | yes          | yes                | `withRootProvider` + `withContext`                                                                    |
| `spinner`    | `cva`       | —            | —                  | SVG; self-applies recipe via `className`                                                              |
| `tabs`       | `sva`       | yes          | yes                | `withProvider` + `withContext`                                                                        |
| `text`       | `cva`       | —            | —                  | Polymorphic; element inferred from `variant`                                                          |
| `toast`      | `sva`       | yes          | yes                | `withProvider` + `withContext`                                                                        |
| `tooltip`    | `sva`       | yes          | yes                | `withRootProvider` + `withContext`                                                                    |
| `tree-view`  | `sva`       | yes          | yes                | `withProvider` + `withContext`; `TreeViewDS` wrapper; depth-based indent from Ark's `--depth` CSS var |

## Patterns

### `cva` — single-element components

The component applies the recipe to a single HTML element. Variant props are extracted
and the rest forwarded to the element.

```tsx
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, palette, size, className, ...props }, ref) => {
    const styles = badgeRecipe({ variant, palette, size });
    return <span ref={ref} className={className ? `${styles} ${className}` : styles} {...props} />;
  },
);
```

### `sva` + `createStyleContext` — Ark UI compound components

`createStyleContext` from `@styled-system/jsx` connects a slot recipe to an Ark UI
compound component. Each sub-component automatically receives its slot's class.

**`withProvider`** — for root components that have a recipe slot:

```tsx
const { withProvider, withContext } = createStyleContext(menuRecipe);
export const Menu = {
  Root: withProvider(ArkMenu.Root, 'root'),
  Content: withContext(ArkMenu.Content, 'content'),
  // ...
};
```

**`withRootProvider`** — for root components that have NO recipe slot (Popover, Tooltip):

```tsx
const { withRootProvider, withContext } = createStyleContext(popoverRecipe);
export const Popover = {
  Root: withRootProvider(ArkPopover.Root),
  Content: withContext(ArkPopover.Content, 'content'),
  // ...
};
```

### `data-table` exception

DataTable uses `sva` but not `createStyleContext` because it wraps TanStack Table
(not Ark UI). Slot classes are applied internally via a `classNames` prop object.

### `text` — polymorphic component

`Text` infers the HTML element from `variant` (h1–h6 → matching heading, body\* → `<p>`,
caption/overline → `<span>`). Override with `as` prop.

```tsx
<Text variant="h2">Section title</Text>          // renders <h2>
<Text variant="body-sm" color="muted">hint</Text> // renders <p>
<Text as="label" variant="body-sm">Field</Text>   // override element
```

### `tree-view` — depth-based indentation via CSS custom properties

Ark injects `--depth` on every `Branch` and `Item` node at render time. The recipe derives
`--tree-offset` from it so padding scales automatically — no inline styles needed:

```css
/* computed inside branchControl and item slots */
--tree-depth: calc(var(--depth) - 1);
--tree-offset: calc(var(--tree-padding-inline) + var(--tree-indentation) * var(--tree-depth) + …);
padding-inline-start: var(--tree-offset);
```

The root slot sets the base spacing variables (`--tree-indentation`, `--tree-padding-inline`, etc.)
which the size variant overrides. The `TreeViewDS` wrapper accepts a recursive `nodes` array,
builds `createTreeCollection` internally, and renders with `ChevronRightIcon` branch indicators.

```tsx
// Bare compound — full control over icons and async loading
<TreeView.Root collection={collection} size="md">
  <TreeView.Label>Project Files</TreeView.Label>
  <TreeView.Tree>
    {collection.rootNode.children?.map((node, i) => (
      <TreeNode key={node.id} node={node} indexPath={[i]} />
    ))}
  </TreeView.Tree>
</TreeView.Root>

// DS wrapper — recursive nodes array, no manual collection setup
<TreeViewDS
  label="Project Files"
  nodes={[
    { id: 'src', label: 'src', children: [
      { id: 'src/app.tsx', label: 'app.tsx' },
    ]},
    { id: 'package.json', label: 'package.json' },
  ]}
  onSelectionChange={({ selectedValue }) => setSelected(selectedValue)}
/>
```

## Adding a new component

1. Create `src/components/{name}/` with the four files above.
2. Export from `src/components/index.ts`.
3. If it has a recipe, re-export from `src/recipes/index.ts`.
4. Update this file and `README.md`.
