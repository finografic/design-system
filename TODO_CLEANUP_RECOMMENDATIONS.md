---

**source:** `packages/design-system/docs/table-tanstack-02.md`

I know there are local instructions, rules that can be saved for Claude for online use... if this is the case, please create such a doc for your use... if not, and i don't quite have that correct, don't worry about it.

Also saved your naming conventions to memory so they'll carry through to future chats in this project — no need to re-explain them.

Without actually generating the docs, can you recommend an approx structure for the docs folder for this DS package?? Again, docs that cover more detail than what is included in the root README.md

Based on what's already in the package and where it's heading, here's what I'd suggest:

```
docs/
  # Existing
  design-token-scales-reference.md
  grid.md
  DATATABLE.example.md

  # Tokens
  tokens/
    colors.md        — semantic roles (bg, fg, border, accent), dark mode, colorPalette pattern
    spacing.md       — scale reference, semantic spacing tokens (future)
    typography.md    — font scale, textStyles, usage in recipes vs raw tokens

  # Recipes
  recipes/
    overview.md      — what a recipe is, slot vs non-slot, codegen, cls pattern
    button.md        — variants table, palette × variant matrix, icon usage
    table.md         — (moved from DATATABLE.example.md)
    forms.md         — input, label, form-field, select (used together)

  # Components
  components/
    overview.md      — Ark UI relationship, recipe-first philosophy, component vs raw Ark
    forms.md         — compound components (FieldBox, InputField, SelectSearchable), form.css

  # System
  system/
    icons.md         — registry pattern, adding icons, sizing classes, picker.html
    viewport.md      — breakpoints, min/max helpers, Emotion usage, Pi display targets
    palette.md       — OKLCH generator, adding/modifying colors, shade scale
    dark-mode.md     — data-theme="dark", semantic tokens, panda.config condition
```

A few decisions baked into that structure worth calling out:

**Flat over deep for system-level docs.** `icons.md`, `viewport.md`, `palette.md`, `dark-mode.md` live at the root of `docs/` rather than in subfolders — they're cross-cutting concerns, not part of a category.

**`recipes/overview.md` first.** The mental model of how recipes work (static codegen, class strings, slot vs non-slot, no runtime) is the thing a new contributor needs before any individual recipe doc makes sense. One overview unlocks all the others.

**Forms grouped, not split.** `input`, `label`, `form-field`, `select` are rarely used in isolation — they're always composed. One doc covering them together is more useful than four thin docs. Same logic applies to the compound form components.

**`table.md` not `DATATABLE.example.md`.** Once it lives in `recipes/`, the filename should match the convention of the other recipe docs. The "example" suffix made sense as a standalone deliverable but not in a structured docs folder.

Skip documenting every recipe individually** — `badge`, `callout`, `card`, `text`, `tooltip` etc. are simple enough that the recipe source file's JSDoc is sufficient. Save dedicated docs for things with real complexity: button (palette matrix), table (TanStack integration), forms (compound component system).

---

**source:** claude.ai - https://claude.ai/chat/d2bd9ab1-47c9-45d7-96cc-5b34d5c532b8

A few things I want to flag about what's in there:

The **root `styled-system/`** showing up in the filetree at repo root alongside `packages/` is worth investigating — it shouldn't be there. Either there's a `panda.config.ts` at the workspace root running codegen there, or it's a leftover from before the restructure. It's gitignored so it's harmless, but worth cleaning up.

The **`docs/` folder at root** — I noted it as "reference docs, not shipped" but you might want to double-check that it's excluded from the `files` array in the relevant `package.json`. It contains `llms-full.txt` and `llms.txt` which are fairly large files you definitely don't want in the published artifact.

The **`Icon\015` file** visible in the filetree root — that `\015` is a carriage return character in the filename, likely a file that got created accidentally. Worth deleting before the next commit.

--

**On the root `package.json` / `files`:** Correct — the root `package.json` is the workspace root, which is `private: true` and never published. No `files` array needed there. The docs at root level are safe.

**On `packages/design-system/package.json` and docs:** Yes — if you want docs included in the published artifact, you'd add them explicitly. But honestly, for a component library, docs in `node_modules` are rarely useful to consumers — they browse the README on GitHub or npm, not files in `node_modules`. The convention is:

- **Include:** `dist/`, CSS source files, `README.md`, `LICENSE` (these are auto-included by npm/pnpm regardless of `files`)
- **Exclude:** everything else by default

So the cleanest approach when you do your docs cleanup is to not add anything to `files` beyond what's already there (`dist`, CSS files). Let the docs live in the repo for your own reference but don't ship them. If there are ever docs a consumer genuinely needs (like a `MIGRATION.md`), add it explicitly at that point.

**On the macOS icon file:** Yeah, `.gitignore` it. The pattern is:

gitignore

```gitignore
Icon?
```

The `?` matches that carriage return character — it's a wildcard for exactly one character. This is the standard way to gitignore macOS custom folder icon files across the whole repo.

---
