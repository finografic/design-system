import { Tabs as ArkTabs } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef, type ReactNode } from 'react';

import type { TabsRecipeProps } from './tabs.recipe';
import { tabsRecipe } from './tabs.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(tabsRecipe);

/**
 * Styled Ark **Tabs** compound — each part is wired to `tabsRecipe` via context.
 *
 * Zag provides roles, roving tabindex, and keyboard navigation. Variant props (`variant`, `size`)
 * live on **`Tabs.Root`** or **`Tabs.RootProvider`** and flow to **List / Trigger / Content /
 * Indicator** via context — you do **not** thread `className={styles.list}` on each part unless
 * you are merging extra classes (use `cx` with the slot class from `tabsRecipe`).
 *
 * **`Tabs.RootProvider`** — pass `value={tabs}` from Ark's **`useTabs`** when the machine is
 * created outside the tree (e.g. to show `tabs.value` in a sibling `<output>`).
 *
 * **Orientation:** pass `orientation="horizontal" | "vertical"` on the root — styles use
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
 *   <div>
 *     <output>selected: {tabs.value}</output>
 *     <Tabs.RootProvider value={tabs} variant="line" size="md">
 *       <Tabs.List>
 *         <Tabs.Trigger value="account">Account</Tabs.Trigger>
 *         <Tabs.Trigger value="password">Password</Tabs.Trigger>
 *         <Tabs.Indicator />
 *       </Tabs.List>
 *       <Tabs.Content value="account">…</Tabs.Content>
 *       <Tabs.Content value="password">…</Tabs.Content>
 *     </Tabs.RootProvider>
 *   </div>
 * );
 * ```
 */
export const Tabs = {
  /** Root — `defaultValue` / `value` / `onValueChange`, plus `variant` and `size`. */
  Root: withProvider(ArkTabs.Root, 'root'),
  /** Same styling as Root when using external machine state from `useTabs`. */
  RootProvider: withProvider(ArkTabs.RootProvider, 'root'),
  /** Tab list — lays out triggers and hosts the indicator. */
  List: withContext(ArkTabs.List, 'list'),
  /** Tab trigger — one per panel `value`. */
  Trigger: withContext(ArkTabs.Trigger, 'trigger'),
  /** Tab panel — matches a trigger `value`. */
  Content: withContext(ArkTabs.Content, 'content'),
  /** Sliding highlight (enclosed) or underline bar (line) — place last inside `Tabs.List`. */
  Indicator: withContext(ArkTabs.Indicator, 'indicator'),
  /** Render prop — forwards machine context; no DOM, no recipe slot. */
  Context: ArkTabs.Context,
};

// ── TabsDS — convenience wrapper ──────────────────────────────────────────────

/** A single tab descriptor for {@link TabsDS}. */
export interface TabsDSTab {
  /** Unique identifier — matches `Tabs.Trigger` value and `Tabs.Content` value. */
  value: string;
  /** Label rendered inside the trigger button. */
  label: ReactNode;
  /** Content rendered inside the panel. */
  content: ReactNode;
  /** Disables the trigger and prevents selection. */
  disabled?: boolean;
}

/** Slot class overrides for {@link TabsDS}. */
export interface TabsDSClassNames {
  root?: string;
  list?: string;
  trigger?: string;
  content?: string;
  indicator?: string;
}

export type TabsDSProps = TabsRecipeProps & {
  /** Tab descriptors — each renders a trigger and a content panel. */
  tabs: TabsDSTab[];
  /** Controlled active tab value. */
  value?: string;
  /** Default active tab (uncontrolled). */
  defaultValue?: string;
  /** Called when the active tab changes. */
  onChange?: (value: string) => void;
  /** Called when keyboard focus moves between triggers. */
  onFocusChange?: (focusedValue: string | null) => void;
  /** `"horizontal"` (default) or `"vertical"`. */
  orientation?: 'horizontal' | 'vertical';
  /** Merged onto the root slot after recipe classes. */
  className?: string;
  /** Per-slot class overrides. */
  classNames?: TabsDSClassNames;
};

/**
 * Design-system convenience tabs — pass a `tabs` array and get triggers + panels automatically.
 * **`Tabs`** stays the styled compound for full composition; **`TabsDS`** = packaged DS API
 * (`onChange(value: string)` instead of Ark's `onValueChange` detail object).
 *
 * @example
 * ```tsx
 * import { TabsDS } from '@finografic/design-system/components';
 *
 * <TabsDS
 *   defaultValue="account"
 *   variant="enclosed"
 *   onChange={(value) => console.log(value)}
 *   tabs={[
 *     { value: 'account', label: 'Account', content: <AccountPanel /> },
 *     { value: 'password', label: 'Password', content: <PasswordPanel /> },
 *   ]}
 * />
 * ```
 */
export const TabsDS = forwardRef<HTMLDivElement, TabsDSProps>(
  (
    {
      tabs,
      value,
      defaultValue,
      onChange,
      onFocusChange,
      orientation,
      variant = 'enclosed',
      size = 'md',
      className,
      classNames = {},
    },
    ref,
  ) => {
    const styles = tabsRecipe({ variant, size });

    return (
      <ArkTabs.Root
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        onValueChange={({ value: v }) => onChange?.(v)}
        onFocusChange={({ focusedValue }) => onFocusChange?.(focusedValue)}
        orientation={orientation}
        className={cx(styles.root, classNames.root, className)}
      >
        <ArkTabs.List className={cx(styles.list, classNames.list)}>
          {tabs.map((tab) => (
            <ArkTabs.Trigger
              key={tab.value}
              value={tab.value}
              disabled={tab.disabled}
              className={cx(styles.trigger, classNames.trigger)}
            >
              {tab.label}
            </ArkTabs.Trigger>
          ))}
          <ArkTabs.Indicator className={cx(styles.indicator, classNames.indicator)} />
        </ArkTabs.List>

        {tabs.map((tab) => (
          <ArkTabs.Content
            key={tab.value}
            value={tab.value}
            className={cx(styles.content, classNames.content)}
          >
            {tab.content}
          </ArkTabs.Content>
        ))}
      </ArkTabs.Root>
    );
  },
);

TabsDS.displayName = 'TabsDS';

export type { TabsFocusChangeDetails, TabsValueChangeDetails } from '@ark-ui/react';
