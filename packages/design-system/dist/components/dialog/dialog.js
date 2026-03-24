import { dialogRecipe } from "./dialog.recipe.js";
import { CloseIcon } from "@finografic/icons";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { Dialog } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/components/dialog/dialog.tsx
const { withProvider, withContext } = createStyleContext(dialogRecipe);
/** Base div forwardRef — used for Header / Body / Footer slots that render as plain divs. */
const Div = forwardRef((props, ref) => /* @__PURE__ */ jsx("div", {
	...props,
	ref
}));
Div.displayName = "Div";
const _DialogRoot = withProvider(Dialog.Root, "root");
function Root({ onOpenChange, ...props }) {
	return /* @__PURE__ */ jsx(_DialogRoot, {
		onOpenChange: onOpenChange ? ({ open }) => onOpenChange(open) : void 0,
		...props
	});
}
Root.displayName = "Dialog.Root";
/**
* Styled Ark **Dialog** compound — each part is wired to `dialogRecipe` via context.
*
* Ark handles all a11y: `dialog` role, focus trap, `aria-labelledby`, `aria-describedby`,
* and Escape to close. `size` variant lives on **`Dialog.Root`**.
*
* **`Dialog.Trigger`** is unstyled — compose it with `asChild` + `<Button>`.
*
* @example
* ```tsx
* import { Dialog } from '@finografic/design-system/components';
* import { Button } from '@finografic/design-system/components';
*
* <Dialog.Root size="md" open={open} onOpenChange={(open) => !open && onClose()}>
*   <Dialog.Backdrop />
*   <Dialog.Positioner>
*     <Dialog.Content>
*       <Dialog.Header>
*         <Dialog.Title>Title</Dialog.Title>
*         <Dialog.CloseTrigger asChild>
*           <Button variant="ghost" size="sm" aria-label="Close"><CloseIcon /></Button>
*         </Dialog.CloseTrigger>
*       </Dialog.Header>
*       <Dialog.Description>Hidden by default — for screen readers.</Dialog.Description>
*       <Dialog.Body>…</Dialog.Body>
*       <Dialog.Footer>…</Dialog.Footer>
*     </Dialog.Content>
*   </Dialog.Positioner>
* </Dialog.Root>
* ```
*/
const Dialog$1 = {
	Root,
	Trigger: Dialog.Trigger,
	Backdrop: withContext(Dialog.Backdrop, "backdrop"),
	Positioner: withContext(Dialog.Positioner, "positioner"),
	Content: withContext(Dialog.Content, "content"),
	Header: withContext(Div, "header"),
	Title: withContext(Dialog.Title, "title"),
	Description: withContext(Dialog.Description, "description"),
	Body: withContext(Div, "body"),
	Footer: withContext(Div, "footer"),
	CloseTrigger: withContext(Dialog.CloseTrigger, "closeTrigger"),
	Context: Dialog.Context
};
/**
* Design-system convenience dialog — pass a `trigger`, `title`, `children`, and `footer` for the common case.
* **`Dialog`** stays the styled compound; **`DialogDS`** = packaged DS API
* with normalized `onOpenChange(open: boolean)`.
*
* @example
* ```tsx
* import { DialogDS, Dialog } from '@finografic/design-system/components';
* import { Button } from '@finografic/design-system/components';
*
* <DialogDS
*   trigger={<Button>Open dialog</Button>}
*   title="Confirm action"
*   size="sm"
*   onOpenChange={(open) => console.log(open)}
*   footer={
*     <>
*       <Dialog.CloseTrigger asChild><Button variant="ghost">Cancel</Button></Dialog.CloseTrigger>
*       <Button>Confirm</Button>
*     </>
*   }
* >
*   <p>Are you sure you want to continue?</p>
* </DialogDS>
* ```
*/
const DialogDS = forwardRef(({ trigger, title, description, children, footer, open, onOpenChange, closeButton = true, size = "md", classNames = {} }, ref) => {
	const styles = dialogRecipe({ size });
	return /* @__PURE__ */ jsxs(Dialog.Root, {
		open,
		onOpenChange: ({ open: o }) => onOpenChange?.(o),
		children: [
			trigger && /* @__PURE__ */ jsx(Dialog.Trigger, {
				ref,
				asChild: true,
				children: trigger
			}),
			/* @__PURE__ */ jsx(Dialog.Backdrop, { className: cx(styles.backdrop, classNames.backdrop) }),
			/* @__PURE__ */ jsx(Dialog.Positioner, {
				className: cx(styles.positioner, classNames.positioner),
				children: /* @__PURE__ */ jsxs(Dialog.Content, {
					className: cx(styles.content, classNames.content),
					children: [
						(title || closeButton) && /* @__PURE__ */ jsxs("div", {
							className: cx(styles.header, classNames.header),
							children: [title && /* @__PURE__ */ jsx(Dialog.Title, {
								className: cx(styles.title, classNames.title),
								children: title
							}), closeButton && /* @__PURE__ */ jsx(Dialog.CloseTrigger, {
								className: cx(styles.closeTrigger, classNames.closeTrigger),
								children: /* @__PURE__ */ jsx(CloseIcon, { "aria-hidden": true })
							})]
						}),
						description && /* @__PURE__ */ jsx(Dialog.Description, {
							className: cx(styles.description, classNames.description),
							children: description
						}),
						children && /* @__PURE__ */ jsx("div", {
							className: cx(styles.body, classNames.body),
							children
						}),
						footer && /* @__PURE__ */ jsx("div", {
							className: cx(styles.footer, classNames.footer),
							children: footer
						})
					]
				})
			})
		]
	});
});
DialogDS.displayName = "DialogDS";
//#endregion
export { Dialog$1 as Dialog, DialogDS };

//# sourceMappingURL=dialog.js.map