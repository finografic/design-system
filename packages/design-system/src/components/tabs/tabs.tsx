/**
 * Tabs — styled Ark UI `Tabs` compound (`createStyleContext` + `tabsRecipe`).
 *
 * Zag provides roles, roving tabindex, and keyboard navigation. Variant props (`variant`, `size`)
 * live on **`Tabs.Root`** or **`Tabs.RootProvider`** and flow to **List / Trigger / Content /
 * Indicator** via context — you do **not** thread `className={styles.list}` on each part unless
 * you are merging extra classes (then use `cx` with the slot class from **`tabsRecipe`**).
 *
 * Ark docs often show `className={styles.Root}` on every sub-component because the recipe is
 * invoked once and applied by hand. Here the provider already calls `tabsRecipe` and supplies
 * slot classes; use **`Tabs.List`** etc. without repeating recipe output.
 *
 * **`Tabs.RootProvider`** — pass `value={tabs}` from Ark’s **`useTabs`** when the machine is
 * created outside the tree (e.g. to show `tabs.value` in a sibling `<output>`).
 *
 * **Orientation:** pass Ark’s `orientation="horizontal" | "vertical"` on the root — styles use
 * `data-orientation` on each part; do not add `orientation` as a Panda recipe variant or
 * `createStyleContext` will strip it from Ark.
 *
 * @example Built-in state (`Tabs.Root`)
 * ```tsx
 * import { Tabs } from '@finografic/design-system/components';
 *
 * <Tabs.Root defaultValue="account" variant="enclosed" size="md">
 *   <Tabs.List>
 *     <Tabs.Trigger value="account">Account</Tabs.Trigger>
 *     <Tabs.Trigger value="password">Password</Tabs.Trigger>
 *     <Tabs.Indicator />
 *   </Tabs.List>
 *   <Tabs.Content value="account">…</Tabs.Content>
 *   <Tabs.Content value="password">…</Tabs.Content>
 * </Tabs.Root>
 * ```
 *
 * @example External machine (`useTabs` + `Tabs.RootProvider`)
 * ```tsx
 * import { useTabs } from '@ark-ui/react';
 * import { Tabs } from '@finografic/design-system/components';
 *
 * const tabs = useTabs({ id: 'example', defaultValue: 'account' });
 *
 * return (
 *   <div className="stack">
 *     <output>selected: {tabs.value}</output>
 *     <Tabs.RootProvider value={tabs} variant="line" size="md">
 *       <Tabs.List>
 *         <Tabs.Trigger value="account">Account</Tabs.Trigger>
 *         <Tabs.Trigger value="password">Password</Tabs.Trigger>
 *         <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
 *         <Tabs.Indicator />
 *       </Tabs.List>
 *       <Tabs.Content value="account">…</Tabs.Content>
 *       <Tabs.Content value="password">…</Tabs.Content>
 *       <Tabs.Content value="billing">…</Tabs.Content>
 *     </Tabs.RootProvider>
 *   </div>
 * );
 * ```
 */
import { Tabs as ArkTabs } from '@ark-ui/react';
import { createStyleContext } from '@styled-system/jsx';

import { tabsRecipe } from './tabs.recipe';

const { withProvider, withContext } = createStyleContext(tabsRecipe);

/** Root — `defaultValue` / `value` / `onValueChange`, plus `variant` and `size`. */
const Root = withProvider(ArkTabs.Root, 'root');

/** RootProvider — same styling as Root when using external machine state. */
const RootProvider = withProvider(ArkTabs.RootProvider, 'root');

/** Tab list — lays out triggers and hosts the indicator. */
const List = withContext(ArkTabs.List, 'list');

/** Tab trigger — one per panel `value`. */
const Trigger = withContext(ArkTabs.Trigger, 'trigger');

/** Tab panel — matches a trigger `value`. */
const Content = withContext(ArkTabs.Content, 'content');

/** Sliding highlight (enclosed) or underline bar (line) — place last inside `Tabs.List`. */
const Indicator = withContext(ArkTabs.Indicator, 'indicator');

export const Tabs = {
  Root,
  RootProvider,
  List,
  Trigger,
  Content,
  Indicator,
  /** Render prop — forwards machine context; no DOM, no recipe slot. */
  Context: ArkTabs.Context,
};

export type { TabsFocusChangeDetails, TabsValueChangeDetails } from '@ark-ui/react';
