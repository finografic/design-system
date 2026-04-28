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
│                                  read by the picker UI — server writes this on startup
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

- Accepts all `SVGProps<SVGSVGElement>` plus any `data-*` attribute
- Always carries `.icon` and `.icon-name--{kebab}` CSS classes
- Exposes `data-icon-name="{kebab}"` for CSS targeting and debugging
- Forwards its ref to the underlying `<svg>` element
