# Design System — Draft Plan

> **Goal:** Get `@workspace/design-system` to a draft state that can be plugged into `apps/client`,
> replacing `apps/client/src/styles/` as the style source of truth.
>
> **Expect breakage.** Client will need significant edits — that's fine and expected.
> The old `styles/` folder stays as a reference during the transition.

---

## Current State

### Done

- [x] Color tokens — 11-stop word-name shade scale (`xxxlight`…`xxxdark`), semantic tokens (`bg.*`, `fg.*`, `border.*`, `accent.*`)
- [x] Typography tokens — font families, sizes, weights, line heights, text styles
- [x] Spacing tokens — scale, radii, border widths, shadows, z-index
- [x] Animation tokens — keyframes, durations, easings
- [x] Viewport module — `BREAKPOINTS`, media query helpers, conversion utils
- [x] Panda CSS preset — single import for consuming apps
- [x] Recipes — `button`, `badge`, `callout`, `input`, `switch`, `text`, `label`, `form-field` (slot), `checkbox` (slot), `dialog` (slot), `toast` (slot)
- [x] Components — `Button`, `Switch`, `SwitchField`, `Dialog`, `Checkbox`, `CheckboxField`, `Toast`, `Toaster`
- [x] Palette generator — OKLCH ramp utilities in `src/palette/`
- [x] Global CSS — reset, keyframes, base styles, icon utilities (`.icon`, `.icon-*` size variants, `.icon-spin`)
- [x] Layout tokens — `layoutTokens` JS object + `LAYOUT_VARS` CSS var name strings (`src/tokens/layout.tokens.ts`)
- [x] Global CSS preset additions — scrollbar styling, `::selection`, `:focus-visible` ring, `svg` flex-shrink
- [x] Icon system — `src/icons/` (see Phase 5.5)

### Not Yet Started

Everything below.

---

## Phase 1 — Token Completeness

The token layer needs to cover everything `styles/` currently provides before any client migration.

### 1a. Layout tokens

Reference: `styles/layout/layout.config.ts`, `styles/layout/base.constants.ts`

App-level structural values. These live in the design system as tokens but are
**consumed and overridden** per-app — they are not baked into the preset.

```
headerHeight    70px
footerHeight    70px
sidebarWidth    300px
navbarHeight    41px
contentMaxWidth 1200px
```

Add to `src/tokens/layout.tokens.ts` and export from `src/tokens/index.ts`.
Document clearly that apps are expected to override these.

### 1b. Color token audit

Reference: `styles/colors/colors.source.ts`

- Verify base OKLCH values match V1 source (primary, secondary, success, warning, danger, info, grey, default, text)
- V1 had opacity variants (`primary25`, `primary50`, `primary75`) — evaluate whether
  these belong in base tokens or as CSS utilities (lean toward utilities)
- V1 had a `useColors` hook (`styles/hooks/useColors.ts`) — not needed once Panda
  utilities are in place, but note for migration

### 1c. Typography completeness

Reference: `styles/fonts/typography.contants.ts`, `styles/constants/typography.constants.ts`

- Confirm font stacks match V1
- Add `letterSpacing` tokens if missing
- Add `textTransform` / `fontStyle` if used in client

---

## Phase 2 — Recipe Completeness

Recipes are the bridge between tokens and components. Anything that has repeated
visual variants in the client needs a recipe.

### Missing recipes (priority order)

| Recipe       | Reference in styles/                        | Notes                                 |
| ------------ | ------------------------------------------- | ------------------------------------- |
| `text`       | `styles/fonts/typography.contants.ts`       | Heading + body variants               |
| `label`      | `styles/forms/forms-placeholders.styles.ts` | Form labels                           |
| `form-field` | `styles/forms/forms.styles.ts`              | Field wrapper (label + input + error) |
| `select`     | `styles/forms/forms-select.styles.ts`       | Native select styling                 |
| `avatar`     | —                                           | Circular image/initials               |
| `spinner`⭐  | —                                           | Loading indicator                     |
| `progress`⭐ | —                                           | Progress bar                          |
| `tabs`       | —                                           | Tab strip + panel                     |
| `menu`       | —                                           | Dropdown menu items                   |
| `tooltip`    | —                                           | Tooltip bubble                        |

Each recipe follows the same CVA pattern already established in `src/recipes/`.

### Existing recipes to revisit

- `button.ts` — compound variants cover primary/danger/etc.; check against `styles/constants/button.constants.ts` for any missing states (loading, icon-only)
- `input.ts` — add error state, optional icon slot

---

## Phase 3 — Component Completeness (Ark UI wrappers)

Components wrap Ark UI primitives with design system recipes. The bar is: anything
the client renders that has interactive state (focus, disabled, open/closed) needs
an Ark wrapper to get accessibility for free.

### Missing components (priority order)

| Component     | Ark primitive                | Recipe needed              |
| ------------- | ---------------------------- | -------------------------- |
| `Select`      | `@ark-ui/react/select`       | new                        |
| `Combobox`    | `@ark-ui/react/combobox`     | reuse input + new dropdown |
| `Menu`        | `@ark-ui/react/menu`         | menu recipe                |
| `Tabs`        | `@ark-ui/react/tabs`         | tabs recipe                |
| `Accordion`   | `@ark-ui/react/accordion`    | new                        |
| `Tooltip`     | `@ark-ui/react/tooltip`      | tooltip recipe             |
| `Popover`     | `@ark-ui/react/popover`      | reuse panel/card           |
| `Radio`       | `@ark-ui/react/radio-group`  | reuse checkbox pattern     |
| `NumberInput` | `@ark-ui/react/number-input` | reuse input                |
| `Slider`      | `@ark-ui/react/slider`       | new                        |

Existing component stubs in `src/components/` (`Dialog`, `Checkbox`, `Toast`) need
to be fleshed out with proper recipe wiring — they're currently re-exports.

---

## Phase 4 — Global Styles

Reference: `styles/global.styles.ts`, `styles/icons/icons.css`

Things currently in `styles/global.styles.ts` that need to land in the preset:

- **Scrollbar styling** — custom thin scrollbar, OS-aware (`::-webkit-scrollbar`)
- **Focus-visible ring** — consistent focus outline using `accent.focusRing`
- **Selection color** — `::selection` background using accent token
- **Icon normalization** — `svg` sizing, `currentColor` stroke
- **Font loading** — decide: self-hosted vs system stack (currently system stack in tokens, fine)

These go into `src/styles/global.css` and are applied via `globalCss` in the preset.

---

## Phase 5 — Build & Distribution Validation

Before plugging into client, the package must build cleanly.

- [x] Run `tsup` → migrated to `tsdown`; `dist/` output verified, exports `.mjs`/`.d.mts`
- [x] Run `panda codegen` in a test context — all token references resolve
- [x] Verify `panda.preset.ts` compiles and is importable from outside the package
- [x] Confirm `package.json` exports map covers `./panda.preset`, `./styles/global.css`, `./icons`
- [x] Check for TypeScript errors across all `src/` files

---

## Phase 5.5 — Icon System

Migrated from `apps/client/src/styles/icons/` to `packages/design-system/src/icons/`.

### What changed from V1

| V1 (client)                                   | V2 (design-system)                                          |
| --------------------------------------------- | ----------------------------------------------------------- |
| `clsx` for className merge                    | Inline `filter + join` — no dep                             |
| ICONS map **+** manual destructure block      | ICONS map only — `icons` object exported, no duplicate list |
| Named exports: `import { CloseIcon }`         | Object export: `const { CloseIcon } = icons`                |
| Radix icons could coexist                     | Lucide only                                                 |
| `icons.css` — partial overlap with global.css | Icon CSS consolidated into `styles/global.css`              |

### Files

```
src/icons/
  icons.utils.ts   createIconWrapper(), toIconName(), IconProps type
  icons.ts         ICONS registry, wrappedIcons, public API
  index.ts         barrel export
  picker.html      Standalone dev tool — search + click-to-copy (no build needed)
```

### Public API

```ts
import { icons, ICON_NAMES } from '@workspace/icons';
import type { IconName, IconComponent, IconProps } from '@workspace/icons';
import { createIconWrapper } from '@workspace/icons'; // extend app-side

const { CloseIcon, TrashIcon } = icons;
```

### Adding a new icon

1. Open `src/icons/icons.ts`
2. Add one entry to the `ICONS` object: `MyNewIcon: Lucide.SomeIcon`
3. Done — it's automatically wrapped and available via `icons.MyNewIcon`

### picker.html

Open `src/icons/picker.html` in any browser — no server needed (CDN Lucide is fetched once).

- Shows only **registered** icons (from the embedded ICONS array)
- Search by export name or Lucide icon name
- Click a card → copies the import snippet to clipboard

> **TODO — write-to-file picker:** A full Lucide browser (all ~1500 icons) that writes
> directly to `icons.ts` would require a local Node.js server (browsers can't write to
> the FS). Sketch: `picker-server.mjs` serves the HTML + `POST /api/add-icon` endpoint
> that edits `icons.ts` in-place. Left as a future improvement.
>
> **Note:** `picker.html` embeds the ICONS registry as a static JS array — keep it in sync
> with `icons.ts` when adding icons.

### Dependencies added

- `lucide-react ^0.564.0` added to `package.json` dependencies
- `./icons` export path added to `package.json` exports map

---

## Phase 6 — Client Migration (expect breakage)

This is not a lift-and-shift. It's a deliberate replacement pass.

### Approach

1. **Add the preset to `apps/client/panda.config.ts`** — this is the first test; Panda codegen will fail on anything that doesn't resolve
2. **Replace Emotion theme usage** — `useTheme()` / `theme.colors.*` calls in components need to become Panda utility classes or CSS variables
3. **Replace `styles/` imports** — work file-by-file through the client; `styles/colors/*`, `styles/fonts/*`, `styles/layout/*`, `styles/viewport/*` all have design-system equivalents
4. **Replace Radix UI component usage** — `@radix-ui/react-*` → Ark UI wrappers from design system (this is the largest change)
5. **Remove `styles/` folder** — only once all references are gone

### Expected breakage areas

- Every file that imports from `styles/colors/` — color names will differ (OKLCH shades vs hex theme)
- Every file using `@emotion/react` css template tag — needs Panda `css()` or utility classes
- Radix UI `<Flex>`, `<Box>`, `<Text>` layout primitives — no direct equivalent in Ark; use HTML + Panda utilities
- `useColors()` hook — remove; access colors via Panda tokens or CSS variables
- App layout dimensions (header/footer height etc.) — will move to layout tokens

### Keep `styles/` as reference while migrating

- Do NOT delete `styles/` until migration is done
- Use it to verify token values match what client currently renders
- The `styles/colors/colors.source.ts` OKLCH values are the ground truth for `baseColors` in the design system

---

## Rough Priority Order

```
✅ Phase 1a   Layout tokens
✅ Phase 2    Recipes: text, form-field, label, checkbox, dialog, toast
✅ Phase 3    Components: Button, SwitchField, CheckboxField, Dialog, Toast
✅ Phase 4    Global styles: scrollbar, focus ring, selection, svg, icon utilities
✅ Phase 5.5  Icon system: src/icons/ with Lucide wrappers + picker.html
✅ Phase 5    Build validation (tsdown + panda codegen + typecheck — all clean)
✅ Phase 1b   Color token audit (badge token gaps + shadow circular ref fixed)
✅ Phase 3+   Remaining components: Select, Menu, Tabs, Tooltip, Popover
✅ Phase 6a   Client: Panda CSS wired (panda.config.ts, codegen script, styled-system/)
✅ Phase 6b   Client: dark mode via [data-theme="dark"], globalCss via preset
✅ Phase 6c   Client: replace Radix Themes layout primitives (Flex 28×, Box 22×)
✅ Phase 6d   Client: swap Radix component imports → design-system equivalents
🤔 Phase 6e   Client: migrate Emotion .styles.ts files → Panda utilities (incremental)
🚧 Phase 6f   Client: remove styles/ folder + Radix Themes + Emotion
```

---

## Open Questions

- ~~**Emotion co-existence:**~~ Resolved — Emotion stays alongside Panda during migration; 117 `.styles.ts` files NOT rewritten in one pass (incremental, Phase 6e).
- ~~**Radix layout primitives:**~~ Resolved — Phase 6c: replace with plain divs + Panda utilities; thin local `Stack`/`Row` wrapper considered to reduce noise.
- ~~**Dark mode trigger:**~~ Resolved — `[data-theme="dark"]` condition in `panda.config.ts`, matches existing `EmotionThemeProvider`.
- **Font loading:** Currently system stack in tokens. If client moves to a custom font, update `fontTokens` in typography and add `@font-face` to global CSS.
- ~~**Icon system:**~~ Resolved — `src/icons/` in design-system, Lucide only. See Phase 5.5.
- ~~**Spinner:**~~ No design-system recipe yet. Blocking Phase 6d. Options: add recipe, keep Radix Spinner, or inline CSS.
- **Card:** 5 uses in client, no recipe. Probably inline Panda styles or local wrapper.
