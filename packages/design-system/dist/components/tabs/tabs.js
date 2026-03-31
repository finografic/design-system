import { tabsRecipe } from "./tabs.recipe.js";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { Tabs } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/components/tabs/tabs.tsx
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
const Tabs$1 = {
	Root: withProvider(Tabs.Root, "root"),
	RootProvider: withProvider(Tabs.RootProvider, "root"),
	List: withContext(Tabs.List, "list"),
	Trigger: withContext(Tabs.Trigger, "trigger"),
	Content: withContext(Tabs.Content, "content"),
	Indicator: withContext(Tabs.Indicator, "indicator"),
	Context: Tabs.Context
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
const TabsDS = forwardRef(({ tabs, value, defaultValue, onChange, onFocusChange, orientation, variant = "enclosed", size = "md", className, classNames = {} }, ref) => {
	const styles = tabsRecipe({
		variant,
		size
	});
	return /* @__PURE__ */ jsxs(Tabs.Root, {
		ref,
		value,
		defaultValue,
		onValueChange: ({ value: v }) => onChange?.(v),
		onFocusChange: ({ focusedValue }) => onFocusChange?.(focusedValue),
		orientation,
		className: cx(styles.root, classNames.root, className),
		children: [/* @__PURE__ */ jsxs(Tabs.List, {
			className: cx(styles.list, classNames.list),
			children: [tabs.map((tab) => /* @__PURE__ */ jsx(Tabs.Trigger, {
				value: tab.value,
				disabled: tab.disabled,
				className: cx(styles.trigger, classNames.trigger),
				children: tab.label
			}, tab.value)), /* @__PURE__ */ jsx(Tabs.Indicator, { className: cx(styles.indicator, classNames.indicator) })]
		}), tabs.map((tab) => /* @__PURE__ */ jsx(Tabs.Content, {
			value: tab.value,
			className: cx(styles.content, classNames.content),
			children: tab.content
		}, tab.value))]
	});
});
TabsDS.displayName = "TabsDS";
//#endregion
export { Tabs$1 as Tabs, TabsDS };

//# sourceMappingURL=tabs.js.map