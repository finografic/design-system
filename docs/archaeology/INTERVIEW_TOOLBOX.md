# Interview toolbox: @finografic/design-system

📅 Jul 30, 2026

Use these as cue cards, not scripts. Memorise the story spine and one proof point. Keep the evidence limits in the answer.

Detailed support: [STAR source](/docs/archaeology/STAR_SOURCE.md) and [evidence dossier](/docs/archaeology/EVIDENCE.md).

## Start with these three

- Mistake or changed mind: dynamic icon ports.
- Difficult debugging: overlay positioning.
- Large migration or ambiguity: compatibility tokens.

## 1. Dynamic ports broke a static build contract

**Use for:** mistake, reversal, configuration boundaries.

- **Situation:** The icon server auto-selected a free port, but Vite had already compiled the previous URL.
- **Task:** Keep the local tool reliable without disrupting the working design-system flow.
- **Action:** Removed port auto-increment, restored fixed port `5001`, then separated repository and consumer modes.
- **Result:** Removed the known stale-URL failure path. No failure-rate or adoption data is recorded.
- **Trade-off:** Determinism can create a port conflict, so troubleshooting remained explicit.
- **Proof:** `099a5249`, `31f87559`, `62590fab`.

**Memory hook:** Runtime flexibility failed because the build had already frozen the contract.

## 2. A z-index bug was really several boundary bugs

**Use for:** hard debugging, systems thinking, layered front-end failures.

- **Situation:** Dropdowns stayed clipped despite recipe z-index changes because ancestor filters, overflow, generated selectors and Ark inline variables acted independently.
- **Task:** Fix the rendering boundary across select, combobox and other overlays.
- **Action:** Portalled positioners, used fixed positioning, added data-attribute fallbacks and kept targeted CSS overrides.
- **Result:** The named overlays received the complete fix sequence. No browser regression suite is recorded.
- **Trade-off:** The solution spans component structure, positioning configuration and global CSS.
- **Proof:** `4b358eec`, `9f522378`, `eadd126d`.

**Memory hook:** Change the rendering boundary before adding another z-index.

## 3. A compatibility layer made a broad migration reversible

**Use for:** migration, ambiguity, sequencing, technical debt.

- **Situation:** Tailwind, layout libraries and legacy tokens could not be replaced atomically.
- **Task:** Move consumers in stages without requiring one risky cutover.
- **Action:** Introduced temporary compatibility tokens, migrated layout and imports in phases, then narrowed the bridge to runtime colours and layout.
- **Result:** The old styling systems and most migration tokens were removed. Client counts and visual outcomes remain commit-message claims.
- **Trade-off:** The bridge temporarily created two styling vocabularies.
- **Proof:** `7607593e`, `4699e9e`, `42247d4c`, `637a52b1`.

**Memory hook:** A temporary bridge is useful only when its removal path is visible.

## Reserve stories

### 4. Delete local infrastructure when the platform catches up

**Use for:** build versus buy, simplification, platform standards.

- **Situation:** Five components used a custom slot-context helper.
- **Action:** After Panda added native `createStyleContext`, upgraded the dependency, migrated the components and deleted the helper.
- **Result:** Slot names became type checked and one local abstraction disappeared. No runtime comparison is recorded.
- **Trade-off:** Required a coordinated dependency and component migration.
- **Proof:** `2214be5a`, `5c4b7cca`, `21d1b187`.

### 5. Treat generated CSS discovery as a package contract

**Use for:** API boundaries, platform enablement, consumer integration.

- **Situation:** Registry consumers could render component markup without recipe CSS because package source files were absent.
- **Action:** Published a canonical `dist/**/*.recipe.js` include, documented aliases and added dist verification.
- **Result:** The installation requirement became explicit and publish-time verifiable. No consumer regression test is recorded.
- **Trade-off:** Consumers must configure Panda scanning and rerun code generation.
- **Proof:** `a4f1900d`, `README.md`, `packages/design-system/scripts/verify-dist.mjs`.

### 6. Give generated release artefacts one owner

**Use for:** CI/CD, release reliability, hidden side effects.

- **Situation:** Version and publish lifecycle hooks could rebuild or rewrite committed output outside the intended release sequence.
- **Action:** Added `--ignore-scripts`, made the release script build once and staged generated output explicitly.
- **Result:** Build ownership and ordering became explicit. No failed-release count or reliability metric is recorded.
- **Trade-off:** Releases require a clean tree, stopped watchers and committed build artefacts.
- **Proof:** `981642e5`, `scripts/release.ts`.

## Safe proof points

- `434` commits from 16 February to 7 July 2026.
- Two publishable packages, both recorded at version `1.19.2`.
- Four CI checks: code lint, Markdown lint, type checking and formatting.
- Zero test files or test configuration found in Pass A.

## Never claim

- User counts, team adoption, revenue or production reach.
- Performance percentages, time saved or bundle-size improvements.
- Test coverage, accessibility conformance or incident reduction.
- Team leadership or cross-team negotiation from repository history alone.
