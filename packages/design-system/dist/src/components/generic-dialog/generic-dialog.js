import { Button } from "../button/button.js";
import { Dialog } from "../dialog/dialog.js";
import { Tabs } from "../tabs/tabs.js";
import { CloseIcon } from "@finografic/icons";
import { useCallback, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/generic-dialog/generic-dialog.tsx
function cx(...classes) {
	return classes.filter(Boolean).join(" ");
}
const GenericDialog = ({ isOpen, onClose, config, className, defaultTab, onTabChange }) => {
	const [activeTab, setActiveTab] = useState(defaultTab || config.tabs[0]?.id || "");
	const hasTabs = config.tabs.length > 1;
	const currentTab = config.tabs.find((tab) => tab.id === activeTab) || config.tabs[0];
	const hasTitle = Boolean(config.title);
	const dynamicStyles = {
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
		children: [/* @__PURE__ */ jsx(Dialog.Backdrop, {}), /* @__PURE__ */ jsx(Dialog.Positioner, { children: /* @__PURE__ */ jsxs(Dialog.Content, {
			size: config.size || "md",
			className: cx("ds-generic-dialog", className),
			style: dynamicStyles,
			children: [
				/* @__PURE__ */ jsxs(Dialog.Header, {
					className: cx("ds-generic-dialog__header", hasTitle && "has-title"),
					children: [/* @__PURE__ */ jsxs(Dialog.Title, {
						className: hasTitle ? void 0 : "sr-only",
						children: [config.title || "Dialog", config.subtitle && /* @__PURE__ */ jsxs("span", {
							className: "ds-generic-dialog__subtitle",
							children: [" ", config.subtitle]
						})]
					}), /* @__PURE__ */ jsx(Dialog.CloseTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "sm",
							className: "ds-generic-dialog__close",
							"aria-label": "Close dialog",
							children: /* @__PURE__ */ jsx(CloseIcon, {})
						})
					})]
				}),
				/* @__PURE__ */ jsxs(Dialog.Description, { children: [
					config.title,
					" —",
					" ",
					hasTabs ? "Navigate between tabs to access different sections" : config.description || "Dialog content"
				] }),
				/* @__PURE__ */ jsx(Dialog.Body, {
					className: "ds-generic-dialog__body",
					children: hasTabs ? /* @__PURE__ */ jsxs(Tabs.Root, {
						value: activeTab,
						onValueChange: ({ value }) => handleTabChange(value),
						children: [/* @__PURE__ */ jsx(Tabs.List, { children: config.tabs.map((tab) => /* @__PURE__ */ jsxs(Tabs.Trigger, {
							value: tab.id,
							disabled: tab.disabled,
							children: [
								tab.icon ? tab.icon : null,
								" ",
								tab.label
							]
						}, tab.id)) }), /* @__PURE__ */ jsx("div", {
							className: "ds-generic-dialog__tab-content",
							children: config.tabs.map((tab) => /* @__PURE__ */ jsx(Tabs.Content, {
								value: tab.id,
								children: tab.content
							}, tab.id))
						})]
					}) : /* @__PURE__ */ jsx("div", {
						className: "ds-generic-dialog__single-content",
						children: currentTab?.content
					})
				}),
				config.footer && /* @__PURE__ */ jsx(Dialog.Footer, {
					className: "ds-generic-dialog__footer",
					children: /* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							justifyContent: "flex-end",
							gap: "0.75rem",
							width: "100%"
						},
						children: [config.footer.secondaryButton && /* @__PURE__ */ jsx(Button, {
							variant: config.footer.secondaryButton.variant ?? "outline",
							colorScheme: config.footer.secondaryButton.colorScheme ?? "default",
							size: "lg",
							onClick: config.footer.secondaryButton.onClick,
							children: config.footer.secondaryButton.label
						}), config.footer.primaryButton && /* @__PURE__ */ jsx(Button, {
							variant: config.footer.primaryButton.variant ?? "solid",
							colorScheme: config.footer.primaryButton.colorScheme ?? "primary",
							size: "lg",
							onClick: config.footer.primaryButton.onClick,
							children: config.footer.primaryButton.label
						})]
					})
				})
			]
		}) })]
	});
};
//#endregion
export { GenericDialog };

//# sourceMappingURL=generic-dialog.js.map