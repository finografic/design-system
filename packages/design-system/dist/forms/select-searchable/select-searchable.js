import { selectSearchableRecipe } from "./select-searchable.recipe.js";
import { CheckIcon, ChevronDownIcon, MagnifyingGlassIcon, PlusIcon, XIcon } from "@finografic/icons";
import { useMemo, useState } from "react";
import { css, cx } from "@styled-system/css";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { Combobox, Portal, createListCollection } from "@ark-ui/react";
import { matchSorter } from "match-sorter";
//#region src/forms/select-searchable/select-searchable.tsx
/**
* **SelectSearchable** — searchable single-select built on Ark UI Combobox.
*
* Filters options via `match-sorter` as the user types. Supports an optional "Add new" affordance
* (`onAddNew`) and a clear button (`onClear`).
*
* For full composition control use Ark's `Combobox.*` parts directly.
*
* @example
*   ```tsx
*   import { SelectSearchable } from '@finografic/design-system/forms';
*
*   const options = [
*     { value: 'en', label: 'English' },
*     { value: 'es', label: 'Spanish' },
*   ];
*
*   <SelectSearchable
*     options={options}
*     value={lang}
*     onSelect={setLang}
*     onClear={() => setLang('')}
*     placeholder="Search languages…"
*   />;
*   ```;
*/
/** Small de-emphasised secondary label shown under the primary item label. */
const itemSubLabelStyle = css({
	fontSize: "0.75em",
	opacity: .6
});
function SelectSearchable({ options, value = "", onSelect, onChange, onBlur, onOpenChange, onHighlightChange, onClear, onAddNew, name, placeholder = "Type to search…", disabled = false, windowSize = 20, size = "md", className }) {
	const styles = selectSearchableRecipe({ size });
	const [inputValue, setInputValue] = useState("");
	const canAddNew = typeof onAddNew === "function";
	const selectedOption = useMemo(() => options.find((o) => o.value === value), [options, value]);
	const filtered = useMemo(() => {
		if (!inputValue.trim()) return options.slice(0, windowSize);
		return matchSorter(options, inputValue, {
			keys: [
				"value",
				"label",
				"description",
				"category"
			],
			threshold: matchSorter.rankings.CONTAINS
		}).slice(0, windowSize);
	}, [
		options,
		inputValue,
		windowSize
	]);
	const collection = useMemo(() => createListCollection({
		items: filtered,
		itemToValue: (o) => o.value,
		itemToString: (o) => o.label ?? o.value
	}), [filtered]);
	const exactMatch = useMemo(() => {
		const q = inputValue.trim().toLowerCase();
		return options.some((o) => o.value.toLowerCase() === q || (o.label ?? "").toLowerCase() === q);
	}, [options, inputValue]);
	const showAddNew = canAddNew && inputValue.trim().length > 0 && !exactMatch;
	const LeadIcon = showAddNew ? PlusIcon : MagnifyingGlassIcon;
	const handleValueChange = ({ value: vals }) => {
		const next = vals[0] ?? "";
		onSelect(next);
		onChange?.(next);
		setInputValue("");
	};
	const handleAddNew = () => {
		if (showAddNew) {
			onAddNew(inputValue.trim());
			setInputValue("");
		}
	};
	return /* @__PURE__ */ jsxs(Combobox.Root, {
		name,
		collection,
		value: value ? [value] : [],
		inputValue,
		onInputValueChange: ({ inputValue: v }) => setInputValue(v),
		onValueChange: handleValueChange,
		onOpenChange: ({ open }) => {
			setInputValue("");
			onOpenChange?.(open);
			if (!open) onBlur?.();
		},
		onHighlightChange: ({ highlightedValue }) => onHighlightChange?.(highlightedValue),
		disabled,
		openOnClick: true,
		className: cx(styles.root, className),
		positioning: {
			sameWidth: true,
			placement: "bottom-start",
			strategy: "fixed"
		},
		children: [/* @__PURE__ */ jsxs(Combobox.Control, {
			className: styles.control,
			children: [
				/* @__PURE__ */ jsx("span", {
					className: styles.leadIcon,
					"data-interactive": showAddNew ? "true" : void 0,
					"aria-hidden": true,
					onClick: showAddNew ? handleAddNew : void 0,
					children: /* @__PURE__ */ jsx(LeadIcon, { className: "icon icon-sm" })
				}),
				/* @__PURE__ */ jsx(Combobox.Input, {
					className: styles.input,
					placeholder: selectedOption ? selectedOption.label ?? selectedOption.value : placeholder
				}),
				value && onClear && /* @__PURE__ */ jsx("button", {
					type: "button",
					className: styles.clearTrigger,
					onClick: (e) => {
						e.stopPropagation();
						onClear();
						setInputValue("");
					},
					"aria-label": "Clear",
					tabIndex: -1,
					children: /* @__PURE__ */ jsx(XIcon, {
						className: "icon icon-sm",
						"aria-hidden": true
					})
				}),
				/* @__PURE__ */ jsx(Combobox.Trigger, {
					className: styles.trigger,
					"aria-label": "Toggle",
					children: /* @__PURE__ */ jsx(ChevronDownIcon, {
						className: "icon icon-sm",
						"aria-hidden": true
					})
				})
			]
		}), /* @__PURE__ */ jsx(Portal, { children: /* @__PURE__ */ jsx(Combobox.Positioner, {
			className: styles.positioner,
			children: /* @__PURE__ */ jsx(Combobox.Content, {
				className: styles.content,
				children: /* @__PURE__ */ jsxs(Combobox.List, {
					className: styles.list,
					children: [
						filtered.length === 0 && !showAddNew && /* @__PURE__ */ jsx("div", {
							className: styles.emptyState,
							children: "No options found"
						}),
						filtered.map((item) => /* @__PURE__ */ jsxs(Combobox.Item, {
							item,
							className: styles.item,
							children: [/* @__PURE__ */ jsx(Combobox.ItemText, {
								className: styles.itemText,
								children: item.label && item.label !== item.value ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("span", { children: item.label }), /* @__PURE__ */ jsx("span", {
									className: itemSubLabelStyle,
									children: item.value
								})] }) : item.value
							}), /* @__PURE__ */ jsx(Combobox.ItemIndicator, {
								className: styles.itemIndicator,
								children: /* @__PURE__ */ jsx(CheckIcon, {
									className: "icon icon-sm",
									"aria-hidden": true
								})
							})]
						}, item.value)),
						showAddNew && /* @__PURE__ */ jsxs("button", {
							type: "button",
							className: styles.addNew,
							onClick: handleAddNew,
							children: [
								/* @__PURE__ */ jsx(PlusIcon, {
									className: "icon icon-sm",
									"aria-hidden": true
								}),
								"Add “",
								inputValue.trim(),
								"”"
							]
						})
					]
				})
			})
		}) })]
	});
}
SelectSearchable.displayName = "SelectSearchable";
//#endregion
export { SelectSearchable };

//# sourceMappingURL=select-searchable.js.map