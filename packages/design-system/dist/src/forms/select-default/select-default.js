import { selectRecipe } from "../select/select.recipe.js";
import { CheckIcon, ChevronDownIcon } from "@finografic/icons";
import { forwardRef, useMemo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Select, createListCollection } from "@ark-ui/react";
//#region src/forms/select-default/select-default.tsx
/**
* SelectDefault — pre-composed Select with a simple `options[]` API.
*
* Accepts a flat array of `SelectOption` objects instead of requiring a
* Panda collection. Uses the full `selectRecipe` for styling.
*
* For full composition control use `Select.*` parts directly.
*/
const SelectDefault = forwardRef(({ options, value, onSelect, onChange, onBlur, name, placeholder = "Select…", disabled = false, allowEmpty = false, size = "md", id, className }, ref) => {
	const cls = selectRecipe({ size });
	const items = useMemo(() => {
		const base = options.map((o) => ({
			...o,
			label: o.label ?? o.value
		}));
		if (allowEmpty) return [{
			value: "",
			label: placeholder,
			disabled: false
		}, ...base];
		return base;
	}, [
		options,
		allowEmpty,
		placeholder
	]);
	const collection = useMemo(() => createListCollection({
		items,
		itemToValue: (o) => o.value,
		itemToString: (o) => o.label ?? o.value
	}), [items]);
	const handleValueChange = ({ value: vals }) => {
		const next = vals[0] ?? "";
		onSelect?.(next);
		onChange?.(next);
	};
	return /* @__PURE__ */ jsxs(Select.Root, {
		id,
		name,
		collection,
		value: value !== void 0 && value !== "" ? [value] : [],
		onValueChange: handleValueChange,
		onOpenChange: () => onBlur?.(),
		disabled,
		className: [cls.root, className].filter(Boolean).join(" "),
		positioning: {
			sameWidth: true,
			placement: "bottom-start"
		},
		children: [
			/* @__PURE__ */ jsx(Select.Control, {
				className: cls.control,
				children: /* @__PURE__ */ jsxs(Select.Trigger, {
					ref,
					className: cls.trigger,
					children: [/* @__PURE__ */ jsx(Select.ValueText, {
						placeholder,
						className: cls.valueText
					}), /* @__PURE__ */ jsx(Select.Indicator, {
						className: cls.indicator,
						children: /* @__PURE__ */ jsx(ChevronDownIcon, {
							className: "icon icon-sm",
							"aria-hidden": true
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx(Select.Positioner, {
				className: cls.positioner,
				children: /* @__PURE__ */ jsx(Select.Content, {
					className: cls.content,
					children: /* @__PURE__ */ jsx(Select.List, {
						className: cls.list,
						children: items.map((item) => /* @__PURE__ */ jsxs(Select.Item, {
							item,
							className: cls.item,
							children: [/* @__PURE__ */ jsx(Select.ItemText, {
								className: cls.itemText,
								children: item.label
							}), /* @__PURE__ */ jsx(Select.ItemIndicator, {
								className: cls.itemIndicator,
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