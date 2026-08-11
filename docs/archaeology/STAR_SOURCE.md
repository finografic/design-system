# STAR source: @finografic/design-system

📅 Jul 30, 2026

This is source analysis for interview recall, not a polished script. Evidence labels apply to each claim.

## Stories

### S1. Dropdowns could not escape their containers

**Confidence:** EVIDENCED
**Evidence:** `4b358eec` says disabled `FieldBox` filters trapped fixed descendants; `9f522378` records Ark's inline `--z-index: auto`; `eadd126d` extends the override to Menu, DatePicker, Popover and Tooltip. Paths: `packages/design-system/src/forms/forms.css`, select and combobox components.
**Period:** [EVIDENCED] 31 March 2026.

**The problem.** [EVIDENCED] Dropdowns were clipped or trapped even after recipe z-index tokens were set, because ancestor CSS created containing blocks and Ark supplied an inline auto z-index.

**Why it mattered.** [EVIDENCED] The record names broken dropdown layering across select, combobox, menu, date picker, popover and tooltip; no user or incident impact is recorded.

**Options apparent from the history.** [EVIDENCED] The record shows recipe tokens, stylesheet `!important`, per-component positioning props, fixed positioning and portal rendering.

**What was done.** [EVIDENCED] Positioners moved into portals with fixed strategy, while data-attribute fallbacks and layered CSS overrides covered Ark and generated-class behaviour.

**What it cost.** [EVIDENCED] The fix retained global CSS overrides and named portal wrappers in addition to recipe styling, increasing the number of layering mechanisms.

**Outcome.** [PARTLY EVIDENCED] The same-day fixes reached all named overlays, but automated regression evidence is absent.

**Reusable judgement.** [PARTLY EVIDENCED] When an overlay is constrained by ancestor layout, change its rendering boundary before adding more z-index; the general rule is reconstructed from the fix sequence.

**Maps to:** front-end-performance / platform-standards

### S2. Dynamic icon ports broke a static client assumption

**Confidence:** EVIDENCED
**Evidence:** `099a5249` introduced auto-increment from port `5001`; `31f87559` reversed it because Vite baked a stale port and API calls failed with `Save failed` or `Included: 0`. Path: `packages/icons/server/icons-server.ts`.
**Period:** [EVIDENCED] 8 March to 28 April 2026.

**The problem.** [EVIDENCED] The server selected a free port and rewrote config, but the picker had already compiled the previous URL.

**Why it mattered.** [EVIDENCED] All picker API calls could fail; no frequency or affected-user count is recorded.

**Options apparent from the history.** [EVIDENCED] The implemented alternatives were dynamic port discovery with config writes, then one fixed port shared by server and committed config.

**What was done.** [EVIDENCED] Auto-increment was removed and the server was fixed to port `5001`.

**What it cost.** [PARTLY EVIDENCED] A fixed port restores determinism but can conflict with another process; the conflict risk is reconstructed, while the troubleshooting documentation is evidenced in `137af8e`.

**Outcome.** [EVIDENCED] The stale-build race was removed from the design; no measured failure reduction is recorded.

**Reusable judgement.** [PARTLY EVIDENCED] Runtime flexibility is a poor trade when a build tool snapshots configuration earlier; this principle is reconstructed from the reversal.

**Maps to:** CI-CD-IaC / front-end-performance

### S3. A custom slot abstraction became redundant

**Confidence:** EVIDENCED
**Evidence:** `2214be5a` wired five components through custom `createSlotRecipeContext`; `5c4b7cca` upgraded Panda; `21d1b187` replaced the helper with native `createStyleContext` and deleted it.
**Period:** [EVIDENCED] 14 March 2026.

**The problem.** [EVIDENCED] The repository owned a helper that Panda now supplied natively with recipe slot type checking.

**Why it mattered.** [EVIDENCED] Keeping both would duplicate framework behaviour across five components; broader maintenance impact is not recorded.

**Options apparent from the history.** [EVIDENCED] Keep the custom helper, or upgrade Panda and adopt its built-in context API.

**What was done.** [EVIDENCED] Panda was upgraded and all five consumers moved to the native abstraction, including correcting root-provider usage.

**What it cost.** [EVIDENCED] The change required a dependency upgrade and a coordinated five-component refactor.

**Outcome.** [EVIDENCED] The custom file was deleted and slot names became compile-time checked; no runtime comparison is recorded.

**Reusable judgement.** [PARTLY EVIDENCED] Retire local infrastructure when the maintained dependency reaches the required capability, provided the migration also strengthens contracts.

**Maps to:** TypeScript-boundaries / platform-standards

### S4. Raw Ark access crossed the design-system boundary twice

**Confidence:** PARTLY EVIDENCED
**Evidence:** `4ded6b0a` says the DS became the Ark dependency boundary but exposed `forms/primitives` as an escape hatch; `5640b299` later deleted that entry because raw Ark was directly importable from `@ark-ui/react`.
**Period:** [EVIDENCED] 28 February to 14 March 2026.

**The problem.** [EVIDENCED] Consumers needed both styled DS forms and occasional access to raw Ark primitives, leaving ownership of the escape hatch unclear.

**Why it mattered.** [PARTLY EVIDENCED] The first commit explicitly aimed to stop direct client imports; the later reason for reversing that boundary is not explained beyond avoiding a redundant re-export.

**Options apparent from the history.** [EVIDENCED] The record shows a DS re-export followed by direct Ark imports; no third alternative is recorded.

**What was done.** [EVIDENCED] A dedicated raw-primitives entry was added, then removed two weeks later while the styled compounds remained.

**What it cost.** [PARTLY EVIDENCED] The final boundary is simpler for the DS but exposes consumers to Ark directly; that coupling cost is reconstructed.

**Outcome.** [EVIDENCED] `forms/primitives.ts` was deleted; no consumer migration count or later stability result is recorded.

**Reusable judgement.** [PARTLY EVIDENCED] A boundary should own behaviour it intentionally adapts, not mirror a dependency without adding a stable contract.

**Maps to:** APIs-contracts / TypeScript-boundaries / platform-standards

### S5. Registry installs rendered without recipe CSS

**Confidence:** EVIDENCED
**Evidence:** `a4f1900d`, `README.md` and `packages/design-system/package.json` require consumers to scan `dist/**/*.recipe.js`; the README quote says omission produced "square avatars" and "unstyled buttons". Path: `packages/design-system/scripts/verify-dist.mjs`.
**Period:** [EVIDENCED] 24 May 2026.

**The problem.** [EVIDENCED] Published packages omitted source files, so a consumer scanning only its own source could render component markup without generated recipe CSS.

**Why it mattered.** [EVIDENCED] Installed components could appear structurally present but visibly unstyled; no affected-app count is recorded.

**Options apparent from the history.** [EVIDENCED] Registry consumers scan compiled recipe files, while linked checkouts may optionally scan source; no bundled-CSS alternative is recorded.

**What was done.** [EVIDENCED] The package published a canonical consumer include list, documented Vite aliases and added dist verification before publish.

**What it cost.** [EVIDENCED] Every consumer must carry Panda include and alias configuration and rerun codegen after relevant changes.

**Outcome.** [PARTLY EVIDENCED] The contract is documented and checked at publish time, but the dossier does not show a consumer regression test.

**Reusable judgement.** [PARTLY EVIDENCED] A source-extracting CSS system makes package scanning part of the public installation contract, not an internal build detail.

**Maps to:** APIs-contracts / CI-CD-IaC / platform-standards

### S6. Compact touch displays needed different control sizing

**Confidence:** PARTLY EVIDENCED
**Evidence:** `3e90a6a5` names `1024×600` and `800×480`, adds coarse-pointer sizing to Slider, Button, Checkbox and Switch, and records minimum `44px` touch targets for small buttons.
**Period:** [EVIDENCED] 23 March 2026.

**The problem.** [PARTLY EVIDENCED] The code needed separate sizing for coarse-pointer compact displays; the observed usability symptom is not recorded.

**Why it mattered.** [INFERRED] Small controls are harder to operate by touch, but the repository records no usability study, defect count or accessibility result.

**Options apparent from the history.** [EVIDENCED] The record shows the prior shared size scale and the selected coarse-pointer override; no other alternative is recorded.

**What was done.** [EVIDENCED] Coarse-pointer media queries increased thumbs, controls and small-button hit areas without changing fine-pointer sizing.

**What it cost.** [PARTLY EVIDENCED] Size logic became duplicated across recipe variants and must be maintained per component; the maintenance consequence is reconstructed.

**Outcome.** [EVIDENCED] Four control families received touch-specific rules; no device-test result is recorded.

**Reusable judgement.** [PARTLY EVIDENCED] Treat input modality and physical display constraints as design inputs, rather than scaling every viewport identically.

**Maps to:** front-end-performance / platform-standards

### S7. Consumer icon customisation did not belong in the DS source tree

**Confidence:** EVIDENCED
**Evidence:** `62590fab`, `137af8e` and `docs/DONE_ICON_MANAGER.md` say the original manager worked only in the DS repo, then added CWD-based consumer mode while leaving DS mode unchanged.
**Period:** [EVIDENCED] 28 April 2026.

**The problem.** [EVIDENCED] Consumers could not customise their icon set without forking the DS workflow.

**Why it mattered.** [EVIDENCED] There was no supported per-project selection path; user, bundle and adoption impacts are not recorded.

**Options apparent from the history.** [EVIDENCED] The record contrasts unsupported consumer forking with a second mode selected from the current working directory; no replacement workflow is recorded.

**What was done.** [EVIDENCED] Consumer mode owns `icons.config.json` and `icons.generated.ts`, while DS mode continues to own its existing source registry.

**What it cost.** [EVIDENCED] The package now carries two modes, two configuration concerns, a server build, a bin shim and first-run seeding.

**Outcome.** [EVIDENCED] Three phases shipped on 28 April; one-command orchestration, configurable output paths and monorepo subpaths remained open in `docs/TODO_ICONS_CONSUMER_WORKFLOW.md`.

**Reusable judgement.** [PARTLY EVIDENCED] Extend a proven local workflow by separating ownership, then defer convenience work until the core contract is stable.

**Maps to:** APIs-contracts / platform-standards

### S8. Release lifecycle hooks rewrote generated output

**Confidence:** EVIDENCED
**Evidence:** `981642e5` is titled "release scripts no longer run build side-effects"; its `scripts/release.ts` diff adds `--ignore-scripts`, makes the release own `pnpm build:all`, stages committed `dist/`, and requires watch processes to stop.
**Period:** [EVIDENCED] 23 May 2026.

**The problem.** [EVIDENCED] Version and publish lifecycle hooks could rebuild or rewrite the tree outside the release script's intended sequence.

**Why it mattered.** [PARTLY EVIDENCED] Generated registries and committed `dist/` could drift during release; the exact failed release or recovery cost is not recorded.

**Options apparent from the history.** [EVIDENCED] Let package lifecycle hooks build implicitly, prebuild manually, or make one release script own the build and suppress nested hooks.

**What was done.** [EVIDENCED] Version and publish commands ignore lifecycle scripts, while the release script performs one explicit build and commits package versions with generated output.

**What it cost.** [EVIDENCED] Releases require a clean tree, stopped watch processes and committed build artifacts.

**Outcome.** [PARTLY EVIDENCED] The sequence became explicit and later version tags exist through `v1.19.2`, but the dossier contains no release test or failure-rate evidence.

**Reusable judgement.** [PARTLY EVIDENCED] Generated artifacts need one release owner; hidden lifecycle execution makes ordering and provenance difficult to reason about.

**Maps to:** CI-CD-IaC / platform-standards

## Real numbers safe to use

- [EVIDENCED] Pass A counted `434` commits from 16 February to 7 July 2026. Source: `docs/archaeology/EVIDENCE.md`, Shape.
- [EVIDENCED] March contained `251` commits, compared with `62` in February, `80` in April, `32` in May, `7` in June and `2` in July. Source: activity histogram.
- [EVIDENCED] The workspace currently records two publishable packages, both at version `1.19.2`. Source: both package manifests in Current state.
- [EVIDENCED] Pass A found `73` commit bodies longer than 200 characters. Source: Long commit messages.
- [EVIDENCED] Pass A found `0` test files and no test configuration, although Vitest `^4.1.10` is a root dev dependency. Source: Tests.
- [EVIDENCED] CI runs four repository checks after install: code lint, Markdown lint, type checking and formatting. Source: `.github/workflows/ci.yml`.
- [EVIDENCED] The touch-sizing change names `1024×600`, `800×480` and a `44px` minimum for small touch buttons. Source: `3e90a6a5`.
- [EVIDENCED] The initial button matrix generated `40` combinations from eight colours and five variants. Source: `b284dac8`.

## Numbers not to claim

- [EVIDENCED] Do not claim user counts, team adoption, deployed application counts or revenue impact; none appears in `EVIDENCE.md`.
- [EVIDENCED] Do not claim performance percentages, bundle-size savings, latency reductions or time saved; no before-and-after measurement is recorded.
- [EVIDENCED] Do not claim test coverage or accessibility conformance percentages; there are no test files, test config or audit results in the dossier.
- [EVIDENCED] Do not claim incident counts, failure rates or mean time to recovery; commit messages record symptoms, not operational metrics.
- [EVIDENCED] Do not treat commit count, tag count or churn as productivity; the evidence includes generated `dist/` churn and a concentrated release burst.

## Honest weaknesses

- [EVIDENCED] The repository has no test files or test configuration, and CI does not run tests or a package build.
- [EVIDENCED] CI checks lint, Markdown, types and format, but records no browser, visual regression, accessibility, security or bundle-size stage.
- [EVIDENCED] The roadmap was created on 7 July 2026 with no prioritised work, so it cannot explain most earlier non-decisions.
- [PARTLY EVIDENCED] Generated `dist/` dominates churn counts, so churn alone is weak evidence of source-design uncertainty.
- [EVIDENCED] Several outcomes stop at "implemented" or "build clean"; production behaviour, adoption and measured impact are mostly absent.

## Reversals visible in the evidence dossier

- [EVIDENCED] Palette design moved from a six-stop scale to 11 named stops, then removed alpha variants and later symmetrised the light side: `b09fa212`, `a28d7a70`, `dd5c65e3`.
- [EVIDENCED] Breakpoints started on the Radix scale and changed to Panda/Tailwind defaults one commit later: `f40a6726`, `276a6c96`.
- [EVIDENCED] Tailwind and its Vite plugin were removed in favour of DS reset and local styling: `7607593e`.
- [EVIDENCED] Temporary migration tokens were added for 101 client style files, then stripped to colours and layout: `42247d4c`, `637a52b1`.
- [EVIDENCED] Icons first moved into the design system, then into a standalone icons package with a compatibility shim, and finally client imports moved to that package: `ffcf5b40`, `3b72723a`, `099a5249`.
- [EVIDENCED] The icon server moved from fixed-port assumptions to auto-increment, then back to fixed port `5001` after the Vite race: `099a5249`, `31f87559`.
- [EVIDENCED] Five components adopted a custom slot-context helper, then replaced it with Panda's native helper after an upgrade: `2214be5a`, `5c4b7cca`, `21d1b187`.
- [EVIDENCED] Raw Ark primitives were exposed through a DS escape hatch, then that re-export was deleted in favour of direct Ark imports: `4ded6b0a`, `5640b299`.
- [EVIDENCED] `FieldWrapper` was introduced, renamed to `FieldBox`, then split into Ark-context and plain-child paths: `0c56d628`, `a59d21aa`, `0f8213fb`.
- [EVIDENCED] Per-component `*.types.ts` files were made the canonical form structure, then 20 recipe-only type files were consolidated into recipe files: `5640b299`, `304df7b6`.
- [EVIDENCED] `*Field` aliases were documented as mandatory for Switch, then removed in favour of canonical `*DS` names: `d620a7a1`, `ea981887`.
- [PARTLY EVIDENCED] `rootTriggerRecipe` was dropped in `741f3673`, while current `AGENTS.md` says Dialog composes it again; the reintroduction SHA and rationale are not in the dossier.
- [EVIDENCED] The public colour prop was globally renamed from `colorScheme` to `palette`: `41f78203`.
- [EVIDENCED] Grid alignment props changed from custom shorthand aliases to full CSS values: `86f06839`.
- [EVIDENCED] Tooling moved from tsup to tsdown, dprint to oxfmt, ESLint to Oxlint, and simple-git-hooks to Husky: `1a515eea`, `2f0b89fe`, `e2e599b0`, `a489df87`; these are not strong stories.
- [EVIDENCED] Release work moved from implicit lifecycle builds to one explicit build owner with ignored nested scripts: `981642e5`.
- [PARTLY EVIDENCED] Overlay repair progressed from recipe tokens to portal/fixed positioning plus global overrides; this is a repeated-fix sequence rather than a clean reversal: `4b358eec`, `9f522378`, `eadd126d`.

## Timeline narrative

[EVIDENCED] The repository began on 16 February 2026 as `@workspace/design-system`, carrying token, palette and migration concerns from a larger client. [EVIDENCED] By 25 February, the shade scale, breakpoint model, build tool and Tailwind dependency had already changed, showing that foundations were still being selected. [EVIDENCED] On 27 and 28 February, grid and component migrations replaced `react-grid-system`, Radix layout and component imports across recorded batches of 16, 59 and 42 client files. [EVIDENCED] March became the main consolidation phase with 251 commits, per-component structures, typed Ark wrappers and a same-day reversal from a custom slot helper to Panda's native one. [EVIDENCED] Icons moved out of the design system into a dedicated package on 7 and 8 March, separating generated assets from component styling. [EVIDENCED] Late March added compact-touch rules and exposed repeated overlay-positioning failures that required portals, fixed positioning and CSS overrides. [EVIDENCED] April extended the icon manager to consumer projects while deliberately preserving the DS-local workflow and leaving one-command orchestration open. [EVIDENCED] May hardened registry consumption and release ownership, June reached version `1.19.2`, and July added the repository's first formal roadmap and memory model.
