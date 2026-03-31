import { Button } from "../button/button.js";
import { Dialog } from "../dialog/dialog.js";
import { Tabs } from "../tabs/tabs.js";
import { CloseIcon } from "@finografic/icons";
import { useCallback, useMemo, useState } from "react";
import { css, cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/dialog-generic/dialog-generic.tsx
const contentStyle = css({
	display: "flex",
	flexDirection: "column",
	minHeight: "60",
	overflow: "hidden",
	pb: "0"
});
const bodyStyle = css({
	display: "flex",
	flexDirection: "column",
	flex: "1",
	height: "full",
	minHeight: "0",
	overflow: "hidden",
	px: "0",
	pb: "6"
});
const scrollableStyle = css({
	display: "flex",
	flexDirection: "column",
	flex: "1",
	height: "full",
	minHeight: "0",
	position: "relative",
	overflowY: "auto",
	overflowX: "hidden",
	scrollbarWidth: "thin",
	scrollbarColor: "fg.muted transparent"
});
const singleContentStyle = cx(scrollableStyle, css({ mt: "6" }));
const footerStyle = css({
	flexShrink: "0",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	py: "6",
	px: "0"
});
/**
* **DialogGeneric** — pre-composed dialog supporting tabs, title/subtitle, and
* optional footer buttons. Built on `Dialog.*` parts.
*
* Mirrors the consumer's `GenericDialog` API. For full composition control,
* use `Dialog.*` parts directly.
*
* @example
* ```tsx
* import { DialogGeneric } from '@finografic/design-system/components';
* import type { DialogGenericConfig } from '@finografic/design-system/components';
*
* const config: DialogGenericConfig = {
*   title: 'Settings',
*   size: 'lg',
*   tabs: [{ id: 'general', label: 'General', content: <GeneralTab /> }],
*   footer: {
*     buttons: [
*       { children: 'Cancel', variant: 'outline', onClick: handleClose },
*       { children: 'Save', variant: 'solid', palette: 'primary', onClick: handleSave },
*     ],
*   },
* };
*
* <DialogGeneric isOpen={open} onClose={() => setOpen(false)} config={config} />
* ```
*/
const DialogGeneric = ({ isOpen, onClose, config, className, defaultTab, onTabChange }) => {
	const [activeTab, setActiveTab] = useState(defaultTab || config.tabs[0]?.id || "");
	const footer = useMemo(() => {
		if (!config.footer) return null;
		return {
			isRTL: config.footer.isRTL ?? true,
			isFilled: config.footer.isFilled ?? false,
			buttons: config.footer.buttons ?? []
		};
	}, [config.footer]);
	const hasTabs = config.tabs.length > 1;
	const currentTab = config.tabs.find((tab) => tab.id === activeTab) ?? config.tabs[0];
	const hasTitle = Boolean(config.title);
	const dynamicStyle = {
		...config.maxWidth && { maxWidth: config.maxWidth },
		...config.maxHeight && { maxHeight: config.maxHeight },
		...config.minWidth && { minWidth: config.minWidth },
		...config.minHeight && { minHeight: config.minHeight }
	};
	const handleTabChange = useCallback((value) => {
		setActiveTab(value);
		onTabChange?.(value);
	}, [onTabChange]);
	return /* @__PURE__ */ jsxs(Dialog.Root, {
		open: isOpen,
		onOpenChange: (open) => !open && onClose(),
		size: config.size ?? "md",
		children: [/* @__PURE__ */ jsx(Dialog.Backdrop, {}), /* @__PURE__ */ jsx(Dialog.Positioner, { children: /* @__PURE__ */ jsxs(Dialog.Content, {
			className: cx(contentStyle, className),
			style: dynamicStyle,
			children: [
				/* @__PURE__ */ jsxs(Dialog.Header, { children: [hasTitle && /* @__PURE__ */ jsxs(Dialog.Title, { children: [config.title, config.subtitle && /* @__PURE__ */ jsx("span", {
					className: css({
						fontWeight: "normal",
						opacity: .7
					}),
					children: config.subtitle
				})] }), /* @__PURE__ */ jsx(Dialog.CloseTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						"aria-label": "Close dialog",
						children: /* @__PURE__ */ jsx(CloseIcon, {})
					})
				})] }),
				config.description && /* @__PURE__ */ jsxs(Dialog.Description, { children: [
					config.title,
					" —",
					" ",
					hasTabs ? "Navigate between tabs to access different sections" : config.description
				] }),
				/* @__PURE__ */ jsx(Dialog.Body, {
					className: bodyStyle,
					children: hasTabs ? /* @__PURE__ */ jsxs(Tabs.Root, {
						value: activeTab,
						onValueChange: ({ value }) => handleTabChange(value),
						children: [/* @__PURE__ */ jsxs(Tabs.List, { children: [config.tabs.map((tab) => /* @__PURE__ */ jsxs(Tabs.Trigger, {
							value: tab.id,
							disabled: tab.disabled,
							children: [
								tab.icon ?? null,
								" ",
								tab.label
							]
						}, tab.id)), /* @__PURE__ */ jsx(Tabs.Indicator, {})] }), /* @__PURE__ */ jsx("div", {
							className: scrollableStyle,
							children: config.tabs.map((tab) => /* @__PURE__ */ jsx(Tabs.Content, {
								value: tab.id,
								children: tab.content
							}, tab.id))
						})]
					}) : /* @__PURE__ */ jsx("div", {
						className: singleContentStyle,
						children: currentTab?.content
					})
				}),
				footer && /* @__PURE__ */ jsx(Dialog.Footer, {
					className: footerStyle,
					children: /* @__PURE__ */ jsx("div", {
						className: css({
							display: "flex",
							flexDirection: footer.isRTL ? "row-reverse" : "row",
							justifyContent: "flex-end",
							alignItems: "center",
							gap: "3",
							...footer.isFilled && { width: "full" }
						}),
						children: (footer.isRTL ? footer.buttons : [...footer.buttons].reverse()).map((props, i) => /* @__PURE__ */ jsx(Button, {
							size: "md",
							palette: "default",
							variant: "solid",
							...props
						}, i))
					})
				})
			]
		}) })]
	});
};
//#endregion
export { DialogGeneric };

//# sourceMappingURL=dialog-generic.js.map