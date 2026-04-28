import { editableRecipe } from "./editable.recipe.js";
import { CheckIcon, EditIcon, XIcon } from "@finografic/icons";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { Editable } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/forms/editable/editable.tsx
const { withProvider, withContext } = createStyleContext(editableRecipe);
/**
* Styled Ark **Editable** compound — each part is wired to `editableRecipe` via context.
*
* Renders as a read-only preview that switches to an input on click or trigger press. Ark handles all a11y:
* `contenteditable` fallback, keyboard (Enter to submit, Escape to cancel). Variant props (`size`) go on
* **`Editable.Root`**.
*
* @example
*   ```tsx
*   import { Editable } from '@finografic/design-system/forms';
*
*   <Editable.Root defaultValue="Hello world" size="md">
*     <Editable.Label>Display name</Editable.Label>
*     <Editable.Area>
*       <Editable.Input />
*       <Editable.Preview />
*     </Editable.Area>
*     <Editable.Control>
*       <Editable.Context>
*         {({ editing }) =>
*           editing ? (
*             <>
*               <Editable.SubmitTrigger>✓</Editable.SubmitTrigger>
*               <Editable.CancelTrigger>✕</Editable.CancelTrigger>
*             </>
*           ) : (
*             <Editable.EditTrigger>✎</Editable.EditTrigger>
*           )
*         }
*       </Editable.Context>
*     </Editable.Control>
*   </Editable.Root>;
*   ```;
*/
const Editable$1 = {
	/** Root — `value` / `defaultValue` / `onValueChange`, `placeholder`, `disabled`, plus `size`. */
	Root: withProvider(Editable.Root, "root"),
	/** Root with external machine state from `useEditable`. */
	RootProvider: withProvider(Editable.RootProvider, "root"),
	/** Optional text label above the editable field. */
	Label: withContext(Editable.Label, "label"),
	/** Wrapper that overlays `Input` and `Preview`. */
	Area: withContext(Editable.Area, "area"),
	/** Text input — shown while editing. */
	Input: withContext(Editable.Input, "input"),
	/** Read-only display — shown while not editing. */
	Preview: withContext(Editable.Preview, "preview"),
	/** Row of action triggers (Edit / Submit / Cancel). */
	Control: withContext(Editable.Control, "control"),
	/** Ghost button that enters edit mode. */
	EditTrigger: withContext(Editable.EditTrigger, "editTrigger"),
	/** Accent-filled button that commits the current value. */
	SubmitTrigger: withContext(Editable.SubmitTrigger, "submitTrigger"),
	/** Ghost button that discards changes and exits edit mode. */
	CancelTrigger: withContext(Editable.CancelTrigger, "cancelTrigger"),
	/** Render prop — exposes machine context (e.g. `editing`) to children; no DOM, no recipe slot. */
	Context: Editable.Context
};
/**
* Design-system convenience editable field — label, preview/input swap, and edit/submit/cancel triggers
* included. **`Editable`** stays the styled compound for full composition; **`EditableDS`** = packaged DS API
* with normalized handlers.
*
* @example
*   ```tsx
*   import { EditableDS } from '@finografic/design-system/forms';
*
*   <EditableDS label="Display name" defaultValue="John Doe" onValueCommit={(value) => updateName(value)} />;
*   ```;
*/
const EditableDS = forwardRef(({ value, defaultValue, placeholder, onChange, onValueCommit, onValueRevert, disabled, readOnly, multiline, label, size = "md", classNames = {} }, ref) => {
	const styles = editableRecipe({ size });
	return /* @__PURE__ */ jsxs(Editable.Root, {
		ref,
		value,
		defaultValue,
		placeholder,
		onValueChange: ({ value: v }) => onChange?.(v),
		onValueCommit: ({ value: v }) => onValueCommit?.(v),
		onValueRevert: () => onValueRevert?.(),
		disabled,
		readOnly,
		className: cx(styles.root, classNames.root),
		children: [
			label && /* @__PURE__ */ jsx(Editable.Label, {
				className: cx(styles.label, classNames.label),
				children: label
			}),
			/* @__PURE__ */ jsxs(Editable.Area, {
				className: cx(styles.area, classNames.area),
				children: [multiline ? /* @__PURE__ */ jsx(Editable.Input, {
					asChild: true,
					children: /* @__PURE__ */ jsx("textarea", { className: cx(styles.textarea, classNames.textarea) })
				}) : /* @__PURE__ */ jsx(Editable.Input, { className: cx(styles.input, classNames.input) }), /* @__PURE__ */ jsx(Editable.Preview, { className: cx(styles.preview, classNames.preview) })]
			}),
			/* @__PURE__ */ jsx(Editable.Control, {
				className: cx(styles.control, classNames.control),
				children: /* @__PURE__ */ jsx(Editable.Context, { children: ({ editing }) => editing ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Editable.SubmitTrigger, {
					className: cx(styles.submitTrigger, classNames.submitTrigger),
					"aria-label": "Submit",
					children: /* @__PURE__ */ jsx(CheckIcon, { "aria-hidden": true })
				}), /* @__PURE__ */ jsx(Editable.CancelTrigger, {
					className: cx(styles.cancelTrigger, classNames.cancelTrigger),
					"aria-label": "Cancel",
					children: /* @__PURE__ */ jsx(XIcon, { "aria-hidden": true })
				})] }) : /* @__PURE__ */ jsx(Editable.EditTrigger, {
					className: cx(styles.editTrigger, classNames.editTrigger),
					"aria-label": "Edit",
					children: /* @__PURE__ */ jsx(EditIcon, { "aria-hidden": true })
				}) })
			})
		]
	});
});
EditableDS.displayName = "EditableDS";
//#endregion
export { Editable$1 as Editable, EditableDS };

//# sourceMappingURL=editable.js.map