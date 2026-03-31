import { selectRecipe } from "../select/select.recipe.js";
import { CheckIcon, ChevronDownIcon } from "@finografic/icons";
import { forwardRef, useMemo } from "react";
import { cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { Select, createListCollection } from "@ark-ui/react";
//#region src/forms/select-default/select-default.tsx
/**
* SelectDefault — pre-composed Select with a simple `options[]` API.
*
* Accepts a flat array of `SelectOption` objects instead of requiring an Ark
* collection. Uses `selectRecipe` for styling — identical appearance to the
* full `Select.*` compound.
*
* **Single-select (default):** `value?: string`, `onSelect?: (v: string) => void`.
* **Multi-select:** add `multiple` prop — `value` becomes `string[]` and
* `onSelect` receives `string[]`. Selected rows show a check via `ItemIndicator`.
*
* For full composition control (groups, custom item content, clear trigger, etc.)
* use `Select.*` parts directly.
*
* @example
* ```tsx
* import { SelectDefault } from '@finografic/design-system/forms';
*
* // Single
* <SelectDefault
*   options={[{ value: 'en', label: 'English' }, { value: 'es', label: 'Spanish' }]}
*   value={lang}
*   onSelect={setLang}
* />
*
* // Multi
* <SelectDefault
*   multiple
*   options={roles}
*   value={selectedRoles}
*   onSelect={setSelectedRoles}
* />
* ```
*/
const SelectDefault = forwardRef((props, ref) => {
	const { options, placeholder = "Select…", disabled = false, allowEmpty = false, size = "md", id, name, className, onBlur, onOpenChange, onHighlightChange, multiple } = props;
	const styles = selectRecipe({ size });
	const items = useMemo(() => {
		const base = options.map((o) => ({
			...o,
			label: o.label ?? o.value
		}));
		if (allowEmpty && !multiple) return [{
			value: "",
			label: placeholder,
			disabled: false
		}, ...base];
		return base;
	}, [
		options,
		allowEmpty,
		multiple,
		placeholder
	]);
	const collection = useMemo(() => createListCollection({
		items,
		itemToValue: (o) => o.value,
		itemToString: (o) => o.label ?? o.value
	}), [items]);
	const handleValueChange = ({ value: vals }) => {
		if (multiple) {
			props.onSelect?.(vals);
			props.onChange?.(vals);
		} else {
			const next = vals[0] ?? "";
			props.onSelect?.(next);
			props.onChange?.(next);
		}
	};
	const arkValue = multiple ? props.value ?? [] : (() => {
		const v = props.value;
		return v !== void 0 && v !== "" ? [v] : [];
	})();
	return /* @__PURE__ */ jsxs(Select.Root, {
		id,
		name,
		multiple,
		collection,
		value: arkValue,
		onValueChange: handleValueChange,
		onOpenChange: ({ open }) => {
			onOpenChange?.(open);
			if (!open) onBlur?.();
		},
		onHighlightChange: ({ highlightedValue }) => onHighlightChange?.(highlightedValue),
		disabled,
		className: cx(styles.root, className),
		positioning: {
			sameWidth: true,
			placement: "bottom-start",
			strategy: "fixed"
		},
		children: [
			/* @__PURE__ */ jsx(Select.Control, {
				className: styles.control,
				children: /* @__PURE__ */ jsxs(Select.Trigger, {
					ref,
					className: styles.trigger,
					children: [/* @__PURE__ */ jsx(Select.ValueText, {
						placeholder,
						className: styles.valueText
					}), /* @__PURE__ */ jsx(Select.Indicator, {
						className: styles.indicator,
						children: /* @__PURE__ */ jsx(ChevronDownIcon, {
							className: "icon icon-sm",
							"aria-hidden": true
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx(Select.Positioner, {
				className: styles.positioner,
				children: /* @__PURE__ */ jsx(Select.Content, {
					className: styles.content,
					children: /* @__PURE__ */ jsx(Select.List, {
						className: styles.list,
						children: items.map((item) => /* @__PURE__ */ jsxs(Select.Item, {
							item,
							className: styles.item,
							children: [/* @__PURE__ */ jsx(Select.ItemText, {
								className: styles.itemText,
								children: item.label
							}), /* @__PURE__ */ jsx(Select.ItemIndicator, {
								className: styles.itemIndicator,
								children: /* @__PURE__ */ jsx(CheckIcon, {
									className: "icon icon-sm",
									"aria-hidden": true
								})
							})]
						}, item.value))
					})
				})
			}),
			/* @__PURE__ */ jsx(Select.HiddenSelect, {})
		]
	});
});
SelectDefault.displayName = "SelectDefault";
//#endregion
export { SelectDefault };

//# sourceMappingURL=select-default.js.map