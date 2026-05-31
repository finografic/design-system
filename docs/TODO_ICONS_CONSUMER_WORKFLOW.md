# TODO — Icons picker from consumer / installed packages

> **Status:** Option **A** in use (LLAAB pilot). Options **B** / **C** deferred until upgrade wanted.

**Related (completed):** [`DONE_ICON_MANAGER.md`](./DONE_ICON_MANAGER.md) — server, consumer mode, file locations.  
**User guide:** [`LUCIDE.README.md`](./LUCIDE.README.md)

---

## Goal

Run the **icon picker** from a **host monorepo root** (or app root) that installs `@finografic/icons` — same ergonomics as this repo’s `pnpm icons`, without `pnpm --filter` workspace tricks.

---

## Data model — settled (no Phase 0)

**First run:** copy published defaults (`node_modules/@finografic/icons/src/icons.json`) → host `icons.config.json` (full snapshot seed).

**Subsequent saves:** picker replaces `icons.config.json` with the current selection. **Unselect** = remove from that file — no merge/omit schema needed.

**Non-starter:** empty initial registry only (no defaults seed).

---

## Ruled out

- **Option D** — embed picker in `@finografic/icons`
- **Option E** — workspace / link-only DS `pnpm --filter` scripts
- **Option F** — change global defaults via release only (still valid for DS maintainers, not host customization)

---

## Options A / B / C — all documented; pick one per host

| Option | Summary                                                                                                           | Complexity             | Status                                               |
| ------ | ----------------------------------------------------------------------------------------------------------------- | ---------------------- | ---------------------------------------------------- |
| **A**  | Host `package.json`: `concurrently` + `pnpm exec icons-server` + `pnpm exec lucide-manager`; devDeps on host root | **None** — works today | **✅ Chosen for now** (pilot: `/Users/justin/LLAAB`) |
| **B**  | New `@finografic/icons` bin (e.g. `icons`) spawns server + UI                                                     | Low–medium             | Future upgrade                                       |
| **C**  | `icons-server` spawns `lucide-manager` child process on startup                                                   | Medium                 | Future upgrade                                       |

### Option A — Document + host scripts (current)

```json
{
  "scripts": {
    "icons": "concurrently -n \"server,config\" -c \"cyan,green\" \"pnpm exec icons-server\" \"pnpm exec lucide-manager\""
  },
  "devDependencies": {
    "@finografic/icons": "<align with app package>",
    "@finografic/lucide-manager": "^0.6.2",
    "concurrently": "^9.2.0"
  }
}
```

Run from **repo root** (where `icons.config.json` / `icons.generated.ts` should live).  
**Pros:** No `@finografic/icons` release changes. **Cons:** Repeat setup per host; root needs direct devDeps so bins resolve under pnpm.

### Option B — Published `icons` CLI (future)

Thin bin in `@finografic/icons` starts server + lucide-manager (like A, packaged once).

- [ ] Add `bin/icons.mjs`
- [ ] peer/optional `@finografic/lucide-manager`
- [ ] Host script: `"icons": "pnpm exec icons"`

### Option C — Server spawns UI (future)

`icons-server` execs `lucide-manager` after writing `lucide-manager.config.json`. “Fork” = **child process**, not git.

- [ ] `--server-only` flag
- [ ] Lifecycle: Ctrl+C kills both

---

## Host monorepo notes (LLAAB pilot)

**Repo:** `/Users/justin/LLAAB` — `@finografic/icons` on `@llaab/client`; picker run from **workspace root** so artifacts are:

| File                         | Location                  |
| ---------------------------- | ------------------------- |
| `icons.config.json`          | LLAAB root                |
| `icons.generated.ts`         | LLAAB root                |
| `lucide-manager.config.json` | LLAAB root (gitignore OK) |

**Follow-up:** wire `apps/client` imports to `icons.generated.ts` (path alias or move config under `apps/client/` later via `--config-dir` if added in Phase 2).

**Run:** `pnpm icons` from LLAAB root.

---

## What already works (server)

| Concern     | Behavior                                                         |
| ----------- | ---------------------------------------------------------------- |
| **CWD**     | `process.cwd()` = host root when you run the script there        |
| **Seed**    | Copy package `src/icons.json` → `icons.config.json` on first run |
| **Codegen** | `icons.generated.ts` in CWD on each save                         |
| **Bin**     | `icons-server` from `@finografic/icons`                          |

---

## Open questions (non-blocking)

- [ ] `--config-dir` for `apps/client/` only (monorepo subpath)
- [ ] Configurable `icons.generated.ts` output path
- [ ] Upgrade LLAAB (or others) from **A** → **B** when bin ships

---

## References

- `packages/icons/server/icons-server.ts`
- `docs/LUCIDE.README.md`
- DS root: `"icons": "pnpm --filter @finografic/icons icons:config"` (workspace-only; not for installed hosts)
