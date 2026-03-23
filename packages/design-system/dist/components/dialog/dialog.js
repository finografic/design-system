import { rootTriggerRecipe } from "../../recipes/root-trigger.recipe.js";
import { dialogRecipe } from "./dialog.recipe.js";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx } from "react/jsx-runtime";
import { Dialog } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/components/dialog/dialog.tsx
/**
* Dialog — styled Ark **Dialog** compound.
*
* `size` lives on `Dialog.Root` (xs | sm | md | lg | xl | cover | full).
* `onOpenChange` normalised: receives `boolean` (not Ark's `{ open }` shape).
*
* @example
* ```tsx
* import { Dialog } from '@finografic/design-system/components';
*
* <Dialog.Root size="md" open={open} onOpenChange={(open) => !open && onClose()}>
*   <Dialog.Backdrop />
*   <Dialog.Positioner>
*     <Dialog.Content role="alertdialog">
*       <Dialog.Header>
*         <Dialog.Title>Title</Dialog.Title>
*         <Dialog.CloseTrigger asChild>
*           <Button variant="ghost" size="sm"><XIcon /></Button>
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
const { withProvider, withContext } = createStyleContext(dialogRecipe);
/** Base div forwardRef — used for Header / Body / Footer slots that render as plain divs. */
const Div = forwardRef((props, ref) => /* @__PURE__ */ jsx("div", {
	...props,
	ref
}));
Div.displayName = "Div";
const _DialogRoot = withProvider(Dialog.Root, "root");
/**
* Dialog root — wraps Ark's Dialog.Root.
* Accepts `size` variant and normalises `onOpenChange` to `(open: boolean) => void`.
*/
function Root({ onOpenChange, ...props }) {
	return /* @__PURE__ */ jsx(_DialogRoot, {
		onOpenChange: onOpenChange ? ({ open }) => onOpenChange(open) : void 0,
		...props
	});
}
Root.displayName = "Dialog.Root";
function Trigger({ className, tone = "outline", ...props }) {
	const styles = rootTriggerRecipe({ tone });
	return /* @__PURE__ */ jsx(Dialog.Trigger, {
		className: cx(styles, className),
		"data-variant": tone === "outline" ? void 0 : tone,
		...props
	});
}
Trigger.displayName = "Dialog.Trigger";
const Dialog$1 = {
	Root,
	Trigger,
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
//#endregion
export { Dialog$1 as Dialog };

//# sourceMappingURL=dialog.js.map