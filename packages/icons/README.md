# @finografic/icons

Curated icon registry for the Finografic design system.

Wraps [Lucide React](https://lucide.dev/) with a thin layer that applies
consistent class names, a `data-icon-name` attribute, and a forwarded ref —
then exports every selected icon as a named, strongly-typed component.

Icon selection is managed by a local **picker UI**
([`@finografic/lucide-manager`](https://github.com/finografic/lucide-manager))
that talks to a **Hono server** bundled in this package.

See **[docs/LUCIDE.README.md](../../docs/LUCIDE.README.md)** for the full
icon manager guide — DS workflow, consumer workflow, and troubleshooting.

---

## File tree

```
packages/icons/
├── bin/
│   └── icons-server.js     ← published bin — entry point for consumer projects
│
├── src/
│   ├── icons.json          ← source of truth — edit via picker, commit to git
│   ├── icons.ts            ← GENERATED — do not edit
│   ├── icons.utils.ts      ← createIconWrapper factory — handwritten, never overwritten
│   └── index.ts            ← GENERATED — named exports + re-exports
│
├── server/
│   └── icons-server.ts     ← Hono: GET + POST /api/icons-json
│                              DS mode: reads/writes src/icons.json
│                              Consumer mode: reads/writes icons.config.json in CWD
│
├── scripts/
│   └── generate.ts         ← DS mode: icons.json → icons.ts + index.ts
│                              Consumer mode: icons.config.json → icons.generated.ts
│
├── lucide-manager.config.json  ← { "serverUrl": "http://localhost:5001" }
│                                  read by the picker UI — written once the port is bound
├── package.json
├── tsconfig.json
└── tsdown.config.ts
```

---

## Developer workflow (DS repo)

```bash
# Start server + picker UI together
pnpm icons:config

# Manual codegen + build
pnpm build
```

### Running two pickers at once

The server listens on **5001** by default. Set `ICONS_SERVER_PORT` to run a second one:

```bash
ICONS_SERVER_PORT=5002 pnpm icons:manager
```

If the port is already taken the server **exits** rather than continuing. That matters: the picker
finds its server through `lucide-manager.config.json`, so a server that carried on after a failed
bind would leave the picker pointed at whichever project already held the port — and every icon
picked would be written into _that_ project instead. The config is only written after the bind
succeeds, for the same reason.

---

## Package API

```ts
import { AddIcon, TrashIcon, LoaderIcon } from '@finografic/icons';
import { icons, ICON_NAMES } from '@finografic/icons';
import type { IconName, IconComponent } from '@finografic/icons';

// Wrap any Lucide (or SVG) component with DS conventions
import { createIconWrapper } from '@finografic/icons';
import type { IconProps } from '@finografic/icons';
```

Every exported icon component:

- Accepts Lucide props: `size`, `color`, `strokeWidth`, `absoluteStrokeWidth`
- Also accepts all `SVGProps<SVGSVGElement>` , and `data-*` attributes
- Always carries `.icon` and `.icon-name--{kebab}` CSS classes
- Exposes `data-icon-name="{kebab}"` for CSS targeting and debugging
- Forwards its ref to the underlying `<svg>` element
- When `size` or `color` are set, applies inline styles so they override global `.icon` CSS defaults

---

## Generated files and oxfmt

`icons-server` writes lowercase file names in generated headers (`index.ts`, `icons.generated.ts`).
If oxfmt formats those files, `@finografic/oxc-config`'s `jsdoc.capitalizeDescriptions` flips them to
`Index.ts` on every run.

**Ignore generated icon outputs in `oxfmt.config.ts`.** Shared `ignorePatterns` from
`@finografic/oxc-config/oxfmt` includes `**/icons.generated.ts`, `**/icons/index.ts`, and
`**/icons/**/index.ts` (consumer barrel + DS `src/index.ts`). This repo also ignores
`packages/icons/src/icons.ts` locally (column-aligned registry padding).
