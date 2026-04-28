import { tagsInputRecipe } from "./tags-input.recipe.js";
import { XIcon } from "@finografic/icons";
import { forwardRef } from "react";
import { css, cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { TagsInput } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/forms/tags-input/tags-input.tsx
const { withProvider, withContext } = createStyleContext(tagsInputRecipe);
/**
* Styled Ark **TagsInput** compound — each part is wired to `tagsInputRecipe` via context.
*
* Ark handles all a11y: keyboard navigation (arrows between tags, Backspace to delete, Enter to confirm),
* edit mode per tag, and ARIA for the tag list.
*
* Each tag goes through three states:
*
* - **Preview** (`ItemPreview`) — the visible chip with a delete button.
* - **Edit** (`ItemInput`) — an inline text field when double-clicking a tag.
* - **Input** (`Input`) — the new-tag text field at the end of the list.
*
* Use `TagsInput.Context` / `TagsInput.ItemContext` inside the render for access to machine state without
* lifting it up.
*
* @example
*   ```tsx
*   import { TagsInput } from '@finografic/design-system/forms';
*   import { XIcon } from '@finografic/icons';
*
*   <TagsInput.Root size="md" value={tags} onValueChange={({ value }) => setTags(value)}>
*     <TagsInput.Label>Topics</TagsInput.Label>
*     <TagsInput.Control>
*       <TagsInput.Context>
*         {({ value }) =>
*           value.map((tag, index) => (
*             <TagsInput.Item key={index} index={index} value={tag}>
*               <TagsInput.ItemPreview>
*                 <TagsInput.ItemText>{tag}</TagsInput.ItemText>
*                 <TagsInput.ItemDeleteTrigger>
*                   <XIcon aria-hidden />
*                 </TagsInput.ItemDeleteTrigger>
*               </TagsInput.ItemPreview>
*               <TagsInput.ItemInput />
*             </TagsInput.Item>
*           ))
*         }
*       </TagsInput.Context>
*       <TagsInput.Input placeholder="Add tag…" />
*     </TagsInput.Control>
*     <TagsInput.HiddenInput />
*   </TagsInput.Root>;
*   ```;
*/
const TagsInput$1 = {
	/** Root — value state, event handlers, max tags, delimiters, and recipe variants (`size`). */
	Root: withProvider(TagsInput.Root, "root"),
	/** Root with external machine state from `useTagsInput`. */
	RootProvider: withProvider(TagsInput.RootProvider, "root"),
	/** Text label above the control. */
	Label: withContext(TagsInput.Label, "label"),
	/** Flex-wrap container that holds tag chips and the text input. */
	Control: withContext(TagsInput.Control, "control"),
	/** Wrapper for a single tag — contains `ItemPreview` and `ItemInput`. */
	Item: withContext(TagsInput.Item, "item"),
	/** Visible chip — shown in default (non-edit) state. */
	ItemPreview: withContext(TagsInput.ItemPreview, "itemPreview"),
	/** Tag label text inside the chip. */
	ItemText: withContext(TagsInput.ItemText, "itemText"),
	/** Inline text field shown when the user double-clicks a tag to edit it. */
	ItemInput: withContext(TagsInput.ItemInput, "itemInput"),
	/** Button to remove a single tag — place inside `ItemPreview`. */
	ItemDeleteTrigger: withContext(TagsInput.ItemDeleteTrigger, "itemDeleteTrigger"),
	/** Text input at the end of the tag list for adding new tags. */
	Input: withContext(TagsInput.Input, "input"),
	/** Button to remove all tags at once — place after `Control`. */
	ClearTrigger: withContext(TagsInput.ClearTrigger, "clearTrigger"),
	/** Hidden native `<input>` for form integration — no recipe slot. */
	HiddenInput: TagsInput.HiddenInput,
	/** Render prop — exposes machine context (value, etc.) to children. */
	Context: TagsInput.Context,
	/** Render prop — exposes per-item context inside `Item`. */
	ItemContext: TagsInput.ItemContext
};
const textColumnStyle = css({
	display: "flex",
	flexDirection: "column",
	gap: "0.5"
});
/**
* Design-system convenience tags input — label, description, and error text included. **`TagsInput`** stays
* the styled compound for full composition; **`TagsInputDS`** = packaged DS API (`onChange(value: string[])`,
* tags rendered automatically from `value`).
*/
const TagsInputDS = forwardRef(({ value = [], onChange, onInputValueChange, onHighlightChange, onValueInvalid, onBlur, label, description, error, placeholder = "Add tag…", max, validate, name, disabled, size = "md", className, classNames = {} }, ref) => {
	const styles = tagsInputRecipe({ size });
	const errorMessage = typeof error === "string" ? error : error?.message;
	return /* @__PURE__ */ jsxs(TagsInput.Root, {
		ref,
		value,
		onValueChange: ({ value: vals }) => onChange?.(vals),
		onInputValueChange: ({ inputValue }) => onInputValueChange?.(inputValue),
		onHighlightChange: ({ highlightedValue }) => onHighlightChange?.(highlightedValue),
		onValueInvalid: ({ reason }) => onValueInvalid?.(reason),
		onBlur,
		max,
		validate,
		name,
		disabled,
		"data-invalid": errorMessage ? "true" : void 0,
		className: cx(styles.root, classNames.root, className),
		children: [
			label && /* @__PURE__ */ jsx(TagsInput.Label, {
				className: cx(styles.label, classNames.label),
				children: label
			}),
			/* @__PURE__ */ jsxs(TagsInput.Control, {
				className: cx(styles.control, classNames.control),
				children: [value.map((tag, index) => /* @__PURE__ */ jsxs(TagsInput.Item, {
					index,
					value: tag,
					className: cx(styles.item, classNames.item),
					children: [/* @__PURE__ */ jsxs(TagsInput.ItemPreview, {
						className: cx(styles.itemPreview, classNames.itemPreview),
						children: [/* @__PURE__ */ jsx(TagsInput.ItemText, {
							className: cx(styles.itemText, classNames.itemText),
							children: tag
						}), /* @__PURE__ */ jsx(TagsInput.ItemDeleteTrigger, {
							className: cx(styles.itemDeleteTrigger, classNames.itemDeleteTrigger),
							children: /* @__PURE__ */ jsx(XIcon, { "aria-hidden": true })
						})]
					}), /* @__PURE__ */ jsx(TagsInput.ItemInput, { className: styles.itemInput })]
				}, index)), /* @__PURE__ */ jsx(TagsInput.Input, {
					className: cx(styles.input, classNames.input),
					placeholder
				})]
			}),
			(description || errorMessage) && /* @__PURE__ */ jsxs("div", {
				className: textColumnStyle,
				children: [description && /* @__PURE__ */ jsx("span", {
					className: cx(styles.description, classNames.description),
					children: description
				}), errorMessage && /* @__PURE__ */ jsx("span", {
					className: cx(styles.errorText, classNames.errorText),
					role: "alert",
					children: errorMessage
				})]
			}),
			/* @__PURE__ */ jsx(TagsInput.HiddenInput, {})
		]
	});
});
TagsInputDS.displayName = "TagsInputDS";
//#endregion
export { TagsInput$1 as TagsInput, TagsInputDS };

//# sourceMappingURL=tags-input.js.map