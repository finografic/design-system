# Forms

All form components live in `src/forms/`, one folder per component.
Consumers will always use these with `react-hook-form`.

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

| Component           | Recipe type      | Ark UI        | createStyleContext | Notes                                                                                      |
| ------------------- | ---------------- | ------------- | ------------------ | ------------------------------------------------------------------------------------------ |
| `checkbox`          | `sva`            | `Checkbox`    | yes                | `withProvider` + `withContext`; `CheckboxDS` wrapper                                       |
| `field-box`         | `sva`            | `Field.Root`  | —                  | RHF-aware layout wrapper; auto-wires error/warning                                         |
| `file-upload`       | `sva`            | `FileUpload`  | yes                | `withProvider` + `withContext`; `FileUploadDS` wrapper; `variant: 'trigger' \| 'dropzone'` |
| `input-field`       | `sva`            | `Field.Input` | —                  | `InputField.Root` + `InputField.Slot` compound                                             |
| `input-number`      | `sva`            | `NumberInput` | —                  | Ark NumberInput; prefix/suffix slots; `Intl` formatting                                    |
| `label`             | `cva`            | —             | —                  | Plain `<label>` wrapper; size variant                                                      |
| `listbox`           | `sva`            | `Listbox`     | yes                | `withProvider` + `withContext`; `ListboxDS` wrapper; always-visible (no dropdown)          |
| `radio-group`       | `sva`            | `RadioGroup`  | yes                | `withProvider` + `withContext`; `default` + `card` variant                                 |
| `select`            | `sva`            | `Select`      | yes                | `withProvider` + `withContext`; bare compound                                              |
| `select-default`    | _(selectRecipe)_ | `Select`      | —                  | `options[]` convenience wrapper; reuses `selectRecipe`                                     |
| `select-searchable` | `sva`            | `Combobox`    | —                  | `match-sorter` filtering; `onAddNew` callback                                              |
| `slider`            | `sva`            | `Slider`      | yes                | `withProvider` + `withContext`                                                             |
| `switch`            | `sva`            | `Switch`      | yes                | Ark + `createStyleContext`; `SwitchDS` convenience wrapper                                 |

## RHF compatibility

All components accept:

```ts
value, onChange, onBlur, name, ref, error?: FieldError | string
```

Use `FieldBox` to wrap any control with RHF-aware label/hint/error layout:

```tsx
<FieldBox name="email" label="Email" hint="We'll never share this">
  <InputField.Root {...field} />
</FieldBox>
```

`FieldBox` auto-wires to `useFormContext()` when inside a `<FormProvider>` — error
shows only after submit, warning debounced on touch.

## Patterns

### `sva` + `createStyleContext` — Ark UI compound components

Same pattern as `src/components/`. `createStyleContext` connects the slot recipe to
each Ark sub-component.

```tsx
const { withProvider, withContext } = createStyleContext(selectRecipe);
export const Select = {
  Root: withProvider(ArkSelect.Root, 'root'),
  Trigger: withContext(ArkSelect.Trigger, 'trigger'),
  // ...
};
```

### Convenience wrappers — `*Field` / `SelectDefault`

Pre-composed components that accept a flat props API. Intended for the common case;
use the bare compound (e.g. `Select.*`) when you need full layout control.

```tsx
// Convenience
<SwitchDS name="active" label="Active" checked={value} onChange={setValue} />

// Bare compound (variants on `Root`)
<Switch.Root size="md" palette="primary">
  <Switch.Control>
    <Switch.Thumb />
  </Switch.Control>
  <Switch.Label>Optional label</Switch.Label>
</Switch.Root>
```

### `select-default` — no own recipe

`SelectDefault` is a convenience wrapper that applies `selectRecipe` directly (no
separate recipe file). It builds an Ark `createListCollection` from a plain
`options: SelectOption[]` prop.

```tsx
<SelectDefault options={opts} value={val} onSelect={(v) => setValue(v)} />
```

### `select-searchable` — Ark Combobox

Uses `ArkCombobox` (not `ArkSelect`) to support keyboard filtering via `match-sorter`.

```tsx
<SelectSearchable options={opts} value={val} onSelect={onChange} onAddNew={(v) => create(v)} />
```

### `listbox` — always-visible selectable list

Unlike Select/Combobox, the list is never hidden. Ark handles `listbox` ARIA role, roving focus
(`_highlighted`), and `aria-selected`. Use `selectionMode="multiple"` for multi-select.

```tsx
// Bare compound
<Listbox.Root collection={collection} size="md" selectionMode="multiple">
  <Listbox.Label>Days</Listbox.Label>
  <Listbox.Content>
    {collection.items.map((item) => (
      <Listbox.Item key={item.value} item={item}>
        <Listbox.ItemText>{item.label}</Listbox.ItemText>
        <Listbox.ItemIndicator><CheckIcon /></Listbox.ItemIndicator>
      </Listbox.Item>
    ))}
  </Listbox.Content>
</Listbox.Root>

// DS wrapper — flat items array, normalized onChange
<ListboxDS
  label="Languages"
  items={[{ value: 'en', label: 'English' }, { value: 'es', label: 'Spanish' }]}
  multiple
  onChange={(value, items) => setSelected(value)}
/>
```

### `file-upload` — trigger button or drag-and-drop zone

Supports two layout modes via `variant`: `'trigger'` (compact inline button) and `'dropzone'`
(dashed drag-and-drop area, default). Ark handles file validation, drag state, and the hidden
input. `ItemCompact` is a second `withContext` alias of `FileUpload.Item` for the compact row layout.

```tsx
// Bare compound — dropzone with full item preview
<FileUpload.Root maxFiles={5} size="md">
  <FileUpload.Label>Upload Files</FileUpload.Label>
  <FileUpload.Dropzone>
    <FileUpload.DropzoneIcon><UploadIcon /></FileUpload.DropzoneIcon>
    <FileUpload.DropzoneContent>
      <FileUpload.DropzoneTitle>Drag and drop files here</FileUpload.DropzoneTitle>
      <FileUpload.DropzoneDescription>or click to browse</FileUpload.DropzoneDescription>
    </FileUpload.DropzoneContent>
  </FileUpload.Dropzone>
  <FileUpload.ItemGroup>
    <FileUpload.Context>
      {({ acceptedFiles }) =>
        acceptedFiles.map((file) => (
          <FileUpload.Item key={file.name} file={file}>
            <FileUpload.ItemPreview type="image/*">
              <FileUpload.ItemPreviewImage />
            </FileUpload.ItemPreview>
            <FileUpload.ItemPreview type=".*">
              <FileIcon />
            </FileUpload.ItemPreview>
            <FileUpload.ItemName />
            <FileUpload.ItemSizeText />
            <FileUpload.ItemDeleteTrigger><XIcon /></FileUpload.ItemDeleteTrigger>
          </FileUpload.Item>
        ))
      }
    </FileUpload.Context>
  </FileUpload.ItemGroup>
  <FileUpload.HiddenInput />
</FileUpload.Root>

// Bare compound — trigger button with compact item list
<FileUpload.Root maxFiles={5} size="md">
  <FileUpload.Label>Attachments</FileUpload.Label>
  <FileUpload.Trigger><UploadIcon /> Choose files</FileUpload.Trigger>
  <FileUpload.ItemGroup>
    <FileUpload.Context>
      {({ acceptedFiles }) =>
        acceptedFiles.map((file) => (
          <FileUpload.ItemCompact key={file.name} file={file}>
            <FileUpload.ItemName />
            <FileUpload.ItemDeleteTrigger><XIcon /></FileUpload.ItemDeleteTrigger>
          </FileUpload.ItemCompact>
        ))
      }
    </FileUpload.Context>
  </FileUpload.ItemGroup>
  <FileUpload.HiddenInput />
</FileUpload.Root>

// DS wrapper — dropzone (default) or trigger button
<FileUploadDS
  label="Upload Documents"
  maxFiles={3}
  accept={{ 'application/pdf': ['.pdf'] }}
  onChange={({ acceptedFiles }) => setFiles(acceptedFiles)}
/>

<FileUploadDS
  variant="trigger"
  label="Attach File"
  onChange={({ acceptedFiles }) => setFile(acceptedFiles[0])}
/>
```

## Adding a new form component

1. Create `src/forms/{name}/` with the four files above.
2. Export from `src/forms/index.ts`.
3. If it has a recipe, re-export from `src/recipes/index.ts`.
4. Update this file.
