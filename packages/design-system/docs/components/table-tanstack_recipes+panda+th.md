```
# USER
Ok, perfect..  Could you show me how a filter input in header would look, when combined with the table recipe? Are the separate recipes combine in the implementation, or…?  I’m still new to panda css, recipes , etc..
```

Good question — this is exactly where the mental model matters. Let me show you concretely.

---

## How recipes compose — the mental model

A recipe just returns class name strings. `tableRecipe()` returns `{ th: "table__th ...", td: "table__td ...", ... }`. `inputRecipe()` returns a single string like `"input input--sm"`. They're completely independent — there's no Panda-specific composition API. You just apply both to whatever element needs them.

When several recipes are used together, name the bindings **`styles` + PascalCase** (DS convention), e.g. **`stylesTable`** and **`stylesInput`**:

```tsx
const stylesTable = tableRecipe({ size: 'sm' });
const stylesInput = inputRecipe({ size: 'sm' });

<th className={stylesTable.th}>
  Name
  <input className={stylesInput} ... />
</th>
```

That's it. The `th` gets the table header styles, the `input` inside it gets the input styles. No magic, no nesting API — just two independent class strings on two different elements.

---

## What a filterable header actually looks like

```tsx
// OrdersTable.tsx
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from '@tanstack/react-table';
import { tableRecipe } from '@workspace/design-system/recipes';
import { inputRecipe } from '@workspace/design-system/recipes';
import { ChevronsUpDownIcon, ArrowUpIcon, ArrowDownIcon } from '@workspace/icons';

const stylesTable = tableRecipe({ size: 'sm', stickyHeader: true });
const stylesInput = inputRecipe({ size: 'sm' });

function FilterableHeader({ column, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
      {/* Sort trigger row */}
      <div
        onClick={column.getToggleSortingHandler()}
        data-sortable="true"
        style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-1)' }}
      >
        {label}
        <span className={stylesTable.sortIcon} data-sort={String(column.getIsSorted())}>
          {{ asc: <ArrowUp />, desc: <ArrowDown /> }[column.getIsSorted()] ?? <ChevronsUpDown />}
        </span>
      </div>

      {/* Filter input — only rendered if column.getCanFilter() */}
      {column.getCanFilter() && (
        <input
          className={stylesInput}
          value={column.getFilterValue() ?? ''}
          onChange={e => column.setFilterValue(e.target.value)}
          placeholder={`Filter…`}
          onClick={e => e.stopPropagation()} // don't trigger sort on input click
        />
      )}
    </div>
  );
}
```

Then in your column definitions:

```ts
const columns = [
  {
    accessorKey: 'name',
    header: ({ column }) => <FilterableHeader column={column} label="Name" />,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => <FilterableHeader column={column} label="Status" />,
    // no filter on this column — getCanFilter() returns false → input not rendered
    enableColumnFilter: false,
  },
];
```

---

## Where the `th` padding becomes relevant

Your `tableRecipe` `th` has `py: '2'` (size sm). Once you stack a label row + an input inside the `th`, that padding is on the `th` itself — it wraps both. No adjustment needed unless the header rows feel too tight, in which case you'd either bump `size` to `md` or do a one-off Emotion override in `OrdersTable.styles.ts`:

```ts
// OrdersTable.styles.ts — only if you need to tweak for this specific table
export const tableOverrides = css`
      .table__th {
      padding-block: var(--spacing-3);
      }
  `;
```

That's the Emotion role — it's not composing recipes, it's tweaking a specific table's chrome after the fact. The recipe handles the 95%, Emotion handles the per-table 5%.

---

## The key insight for Panda newcomers

Recipes don't know about each other. There's no "slot recipe nesting" or "recipe inheritance" API. Composition is just React — you render elements inside elements and apply whatever class names are appropriate to each one. The DS gives you a vocabulary of named class strings; you assemble them in markup.

The only "Panda-specific" composition is `cx` from `@styled-system/css` — merge multiple Panda-generated class strings (`cx(stylesTable.th, someOtherClass)`). For recipes + recipes, you still put each recipe’s output on the right element.

```
# USER
Can you generate a DATATABLE.example.md instructions/ tutorial document that I will both use to make the table AND save to the DS docs?? Generate/alter any recipes missing, also..
```

Three files to drop in:

- `docs/DATATABLE.example.md` → drop into DS `docs/` folder alongside `grid.md`
- `src/icons/icons.ts` → replaces existing, adds `ArrowUpIcon`, `ArrowDownIcon`, `ArrowLeftIcon`, `ArrowRightIcon`, `ChevronsUpDownIcon`
- `src/icons/index.ts` → replaces existing, adds those same five as named exports

**After dropping these in**, run `pnpm build` in the DS package to get updated codegen and dist. The doc references the exact import paths, slot names, data attributes, and variant combinations as-built — no gaps between the tutorial and the actual recipe.

A few things the doc covers that are worth flagging:

- **Column definitions in a separate file** (`OrdersTable.columns.tsx`) — keeps the main component readable and makes the column config easy to find and extend
- **Recipe instances at module scope** — `const stylesTable = tableRecipe(...)` is outside the component, so slot maps / class strings are stable, not recomputed per render
- **`e.stopPropagation()` on filter inputs** — critical detail; without it clicking into the filter input triggers the sort handler on the `th`
- **Server-side pattern** at the bottom — `manualSorting/Filtering/Pagination` flags, for when you eventually have enough data that client-side filtering isn't viable
