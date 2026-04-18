import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { TabsRecipeProps } from "./tabs.recipe.js";
import * as _$react from "react";
import { ReactNode } from "react";
import { Tabs, TabsFocusChangeDetails, TabsValueChangeDetails } from "@ark-ui/react";
import * as _$_styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/tabs/tabs.d.ts
/**
 * Styled Ark **Tabs** compound — each part is wired to `tabsRecipe` via context.
 *
 * Zag provides roles, roving tabindex, and keyboard navigation. Variant props (`variant`, `size`) live on
 * **`Tabs.Root`** or **`Tabs.RootProvider`** and flow to **List / Trigger / Content / Indicator** via context
 * — you do **not** thread `className={styles.list}` on each part unless you are merging extra classes (use
 * `cx` with the slot class from `tabsRecipe`).
 *
 * **`Tabs.RootProvider`** — pass `value={tabs}` from Ark's **`useTabs`** when the machine is created outside
 * the tree (e.g. to show `tabs.value` in a sibling `<output>`).
 *
 * **Orientation:** pass `orientation="horizontal" | "vertical"` on the root — styles use `data-orientation`
 * on each part; do not add `orientation` as a Panda recipe variant or `createStyleContext` will strip it from
 * Ark.
 *
 * @example
 *   Built-in state (`Tabs.Root`)
 *   ```tsx
 *   import { Tabs } from '@finografic/design-system/components';
 *
 *   <Tabs.Root defaultValue="account" variant="enclosed" size="md">
 *   <Tabs.List>
 *   <Tabs.Trigger value="account">Account</Tabs.Trigger>
 *   <Tabs.Trigger value="password">Password</Tabs.Trigger>
 *   <Tabs.Indicator />
 *   </Tabs.List>
 *   <Tabs.Content value="account">…</Tabs.Content>
 *   <Tabs.Content value="password">…</Tabs.Content>
 *   </Tabs.Root>
 *   ```
 *
 * @example
 *   External machine (`useTabs` + `Tabs.RootProvider`)
 *   ```tsx
 *   import { useTabs } from '@ark-ui/react';
 *   import { Tabs } from '@finografic/design-system/components';
 *
 *   const tabs = useTabs({ id: 'example', defaultValue: 'account' });
 *
 *   return (
 *   <div>
 *   <output>selected: {tabs.value}</output>
 *   <Tabs.RootProvider value={tabs} variant="line" size="md">
 *   <Tabs.List>
 *   <Tabs.Trigger value="account">Account</Tabs.Trigger>
 *   <Tabs.Trigger value="password">Password</Tabs.Trigger>
 *   <Tabs.Indicator />
 *   </Tabs.List>
 *   <Tabs.Content value="account">…</Tabs.Content>
 *   <Tabs.Content value="password">…</Tabs.Content>
 *   </Tabs.RootProvider>
 *   </div>
 *   );
 *   ```
 */
declare const Tabs$1: {
  /** Root — `defaultValue` / `value` / `onValueChange`, plus `variant` and `size`. */Root: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<Tabs.RootProps & _$react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"content" | "trigger" | "root" | "indicator" | "list", {
    variant: {
      line: {
        list: {
          gap: "0";
          pb: "0";
          boxShadow: "inset 0 -3.4px 0 0 token(colors.border)";
          '&[data-orientation="horizontal"]': {
            alignItems: "flex-start";
          };
        };
        trigger: {
          position: "relative";
          zIndex: number;
          borderRadius: "0";
          _selected: {
            color: "accent.solid";
          };
        };
        indicator: {
          zIndex: number;
          bg: "accent.solid";
          borderRadius: "0";
          '&[data-orientation="horizontal"]': {
            left: "var(--left, 0)";
            width: "var(--width)";
            height: "3.4px";
            top: "calc(var(--top) + var(--height) - 3.4px)";
            bottom: "auto";
          };
          '&[data-orientation="vertical"]': {
            top: "var(--top, 0)";
            left: "0";
            width: "3.4px";
            height: "var(--height)";
            bottom: "auto";
          };
        };
      };
      enclosed: {
        list: {
          gap: "1";
          bg: "bg.subtle";
          borderRadius: "md";
          borderWidth: "light";
          borderStyle: "solid";
          borderColor: "border";
        };
        trigger: {
          _selected: {
            color: "accent.fg";
            bg: "transparent";
            boxShadow: "none";
          };
        };
        indicator: {
          zIndex: number;
          borderRadius: "sm";
          bg: "accent.subtle";
          '&[data-orientation="horizontal"]': {
            height: "var(--height, 2rem)";
            width: "var(--width)";
          };
          '&[data-orientation="vertical"]': {
            width: "calc(100% - 0.5rem)";
            height: "var(--height)";
          };
        };
      };
    };
    size: {
      sm: {
        trigger: {
          px: "2.5";
          py: "1";
          fontSize: "xs";
          gap: "1.5";
          '&[data-orientation="horizontal"]': {
            height: "7";
          };
        };
        content: {
          py: "3";
        };
        list: {
          pt: "0.5";
          pb: "0.5";
          px: "0.5";
        };
      };
      md: {
        trigger: {
          px: "5";
          pt: "0.625rem";
          pb: "0.625rem";
          fontSize: "md";
          gap: "2";
          '&[data-orientation="horizontal"]': {
            minHeight: "10";
            height: "auto";
          };
        };
        content: {
          py: "4";
        };
        list: {
          pt: "1";
          pb: "1";
          px: "1";
        };
      };
      lg: {
        trigger: {
          px: "4";
          py: "2";
          fontSize: "md";
          gap: "2";
          '&[data-orientation="horizontal"]': {
            height: "9";
          };
        };
        content: {
          py: "5";
        };
        list: {
          pt: "1";
          pb: "1";
          px: "1";
        };
      };
    };
  }>>; /** Same styling as Root when using external machine state from `useTabs`. */
  RootProvider: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<Tabs.RootProviderProps & _$react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"content" | "trigger" | "root" | "indicator" | "list", {
    variant: {
      line: {
        list: {
          gap: "0";
          pb: "0";
          boxShadow: "inset 0 -3.4px 0 0 token(colors.border)";
          '&[data-orientation="horizontal"]': {
            alignItems: "flex-start";
          };
        };
        trigger: {
          position: "relative";
          zIndex: number;
          borderRadius: "0";
          _selected: {
            color: "accent.solid";
          };
        };
        indicator: {
          zIndex: number;
          bg: "accent.solid";
          borderRadius: "0";
          '&[data-orientation="horizontal"]': {
            left: "var(--left, 0)";
            width: "var(--width)";
            height: "3.4px";
            top: "calc(var(--top) + var(--height) - 3.4px)";
            bottom: "auto";
          };
          '&[data-orientation="vertical"]': {
            top: "var(--top, 0)";
            left: "0";
            width: "3.4px";
            height: "var(--height)";
            bottom: "auto";
          };
        };
      };
      enclosed: {
        list: {
          gap: "1";
          bg: "bg.subtle";
          borderRadius: "md";
          borderWidth: "light";
          borderStyle: "solid";
          borderColor: "border";
        };
        trigger: {
          _selected: {
            color: "accent.fg";
            bg: "transparent";
            boxShadow: "none";
          };
        };
        indicator: {
          zIndex: number;
          borderRadius: "sm";
          bg: "accent.subtle";
          '&[data-orientation="horizontal"]': {
            height: "var(--height, 2rem)";
            width: "var(--width)";
          };
          '&[data-orientation="vertical"]': {
            width: "calc(100% - 0.5rem)";
            height: "var(--height)";
          };
        };
      };
    };
    size: {
      sm: {
        trigger: {
          px: "2.5";
          py: "1";
          fontSize: "xs";
          gap: "1.5";
          '&[data-orientation="horizontal"]': {
            height: "7";
          };
        };
        content: {
          py: "3";
        };
        list: {
          pt: "0.5";
          pb: "0.5";
          px: "0.5";
        };
      };
      md: {
        trigger: {
          px: "5";
          pt: "0.625rem";
          pb: "0.625rem";
          fontSize: "md";
          gap: "2";
          '&[data-orientation="horizontal"]': {
            minHeight: "10";
            height: "auto";
          };
        };
        content: {
          py: "4";
        };
        list: {
          pt: "1";
          pb: "1";
          px: "1";
        };
      };
      lg: {
        trigger: {
          px: "4";
          py: "2";
          fontSize: "md";
          gap: "2";
          '&[data-orientation="horizontal"]': {
            height: "9";
          };
        };
        content: {
          py: "5";
        };
        list: {
          pt: "1";
          pb: "1";
          px: "1";
        };
      };
    };
  }>>; /** Tab list — lays out triggers and hosts the indicator. */
  List: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Tabs.ListProps & _$react.RefAttributes<HTMLDivElement>>>; /** Tab trigger — one per panel `value`. */
  Trigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Tabs.TriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Tab panel — matches a trigger `value`. */
  Content: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Tabs.ContentProps & _$react.RefAttributes<HTMLDivElement>>>; /** Sliding highlight (enclosed) or underline bar (line) — place last inside `Tabs.List`. */
  Indicator: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Tabs.IndicatorProps & _$react.RefAttributes<HTMLDivElement>>>; /** Render prop — forwards machine context; no DOM, no recipe slot. */
  Context: (props: Tabs.ContextProps) => ReactNode;
};
/** A single tab descriptor for {@link TabsDS}. */
interface TabsDSTab {
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
interface TabsDSClassNames {
  root?: string;
  list?: string;
  trigger?: string;
  content?: string;
  indicator?: string;
}
type TabsDSProps = TabsRecipeProps & {
  /** Tab descriptors — each renders a trigger and a content panel. */tabs: TabsDSTab[]; /** Controlled active tab value. */
  value?: string; /** Default active tab (uncontrolled). */
  defaultValue?: string; /** Called when the active tab changes. */
  onChange?: (value: string) => void; /** Called when keyboard focus moves between triggers. */
  onFocusChange?: (focusedValue: string | null) => void; /** `"horizontal"` (default) or `"vertical"`. */
  orientation?: 'horizontal' | 'vertical'; /** Merged onto the root slot after recipe classes. */
  className?: string; /** Per-slot class overrides. */
  classNames?: TabsDSClassNames;
};
/**
 * Design-system convenience tabs — pass a `tabs` array and get triggers + panels automatically. **`Tabs`**
 * stays the styled compound for full composition; **`TabsDS`** = packaged DS API (`onChange(value: string)`
 * instead of Ark's `onValueChange` detail object).
 *
 * @example
 *   ```tsx
 *   import { TabsDS } from '@finografic/design-system/components';
 *
 *   <TabsDS
 *     defaultValue="account"
 *     variant="enclosed"
 *     onChange={(value) => console.log(value)}
 *     tabs={[
 *       { value: 'account', label: 'Account', content: <AccountPanel /> },
 *       { value: 'password', label: 'Password', content: <PasswordPanel /> },
 *     ]}
 *   />;
 *   ```;
 */
declare const TabsDS: _$react.ForwardRefExoticComponent<{
  variant?: "line" | "enclosed" | undefined;
  size?: "sm" | "md" | "lg" | undefined;
} & {
  /** Tab descriptors — each renders a trigger and a content panel. */tabs: TabsDSTab[]; /** Controlled active tab value. */
  value?: string; /** Default active tab (uncontrolled). */
  defaultValue?: string; /** Called when the active tab changes. */
  onChange?: (value: string) => void; /** Called when keyboard focus moves between triggers. */
  onFocusChange?: (focusedValue: string | null) => void; /** `"horizontal"` (default) or `"vertical"`. */
  orientation?: "horizontal" | "vertical"; /** Merged onto the root slot after recipe classes. */
  className?: string; /** Per-slot class overrides. */
  classNames?: TabsDSClassNames;
} & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Tabs$1 as Tabs, TabsDS, TabsDSClassNames, TabsDSProps, TabsDSTab, type TabsFocusChangeDetails, type TabsValueChangeDetails };
//# sourceMappingURL=tabs.d.ts.map