import "react";
import { jsx } from "react/jsx-runtime";
import { Dialog } from "@ark-ui/react";
//#region src/components/dialog/dialog.tsx
function Root({ onOpenChange, children, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Root, {
		onOpenChange: ({ open }) => onOpenChange?.(open),
		...props,
		children
	});
}
Root.displayName = "Dialog.Root";
function Backdrop({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Backdrop, {
		className: ["ds-dialog__backdrop", className].filter(Boolean).join(" "),
		...props
	});
}
Backdrop.displayName = "Dialog.Backdrop";
function Positioner({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Positioner, {
		className: ["ds-dialog__positioner", className].filter(Boolean).join(" "),
		...props,
		children
	});
}
Positioner.displayName = "Dialog.Positioner";
function Content({ className, size = "md", children, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Content, {
		className: ["ds-dialog__content", className].filter(Boolean).join(" "),
		"data-size": size,
		...props,
		children
	});
}
Content.displayName = "Dialog.Content";
function Header({ className, children, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: ["ds-dialog__header", className].filter(Boolean).join(" "),
		...props,
		children
	});
}
Header.displayName = "Dialog.Header";
function Title({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Title, {
		className: ["ds-dialog__title", className].filter(Boolean).join(" "),
		...props,
		children
	});
}
Title.displayName = "Dialog.Title";
function Description({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Description, {
		className: ["ds-dialog__description", className].filter(Boolean).join(" "),
		...props,
		children
	});
}
Description.displayName = "Dialog.Description";
function Body({ className, children, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: ["ds-dialog__body", className].filter(Boolean).join(" "),
		...props,
		children
	});
}
Body.displayName = "Dialog.Body";
function Footer({ className, children, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: ["ds-dialog__footer", className].filter(Boolean).join(" "),
		...props,
		children
	});
}
Footer.displayName = "Dialog.Footer";
function CloseTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.CloseTrigger, {
		className: ["ds-dialog__close-trigger", className].filter(Boolean).join(" "),
		...props,
		children
	});
}
CloseTrigger.displayName = "Dialog.CloseTrigger";
const Dialog$1 = {
	Root,
	Backdrop,
	Positioner,
	Content,
	Header,
	Title,
	Description,
	Body,
	Footer,
	CloseTrigger
};
//#endregion
export { Dialog$1 as Dialog };

//# sourceMappingURL=dialog.js.map