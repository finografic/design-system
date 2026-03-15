import { selectSearchableRecipe } from "./select-searchable.recipe.js";
import { CheckIcon, ChevronDownIcon, MagnifyingGlassIcon, PlusIcon, XIcon } from "@finografic/icons";
import { useMemo, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Combobox, createListCollection } from "@ark-ui/react";
import { matchSorter } from "match-sorter";
//#region src/forms/select-searchable/select-searchable.tsx
function SelectSearchable({ options, value = "", onSelect, onChange, onBlur, onClear, onAddNew, name, placeholder = "Type to search…", disabled = false, windowSize = 20, size = "md", className }) {
	const cls = selectSearchableRecipe({ size });
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
		onOpenChange: () => {
			setInputValue("");
			onBlur?.();
		},
		disabled,
		openOnClick: true,
		className: [cls.root, className].filter(Boolean).join(" "),
		positioning: {
			sameWidth: true,
			placement: "bottom-start"
		},
		children: [/* @__PURE__ */ jsxs(Combobox.Control, {
			className: cls.control,
			children: [
				/* @__PURE__ */ jsx("span", {
					className: cls.leadIcon,
					"data-interactive": showAddNew ? "true" : void 0,
					"aria-hidden": true,
					onClick: showAddNew ? handleAddNew : void 0,
					children: /* @__PURE__ */ jsx(LeadIcon, { className: "icon icon-sm" })
				}),
				/* @__PURE__ */ jsx(Combobox.Input, {
					className: cls.input,
					placeholder: selectedOption ? selectedOption.label ?? selectedOption.value : placeholder
				}),
				value && onClear && /* @__PURE__ */ jsx("button", {
					type: "button",
					className: cls.clearTrigger,
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
					className: cls.trigger,
					"aria-label": "Toggle",
					children: /* @__PURE__ */ jsx(ChevronDownIcon, {
						className: "icon icon-sm",
						"aria-hidden": true
					})
				})
			]
		}), /* @__PURE__ */ jsx(Combobox.Positioner, {
			className: cls.positioner,
			children: /* @__PURE__ */ jsx(Combobox.Content, {
				className: cls.content,
				children: /* @__PURE__ */ jsxs(Combobox.List, {
					className: cls.list,
					children: [
						filtered.length === 0 && !showAddNew && /* @__PURE__ */ jsx("div", {
							className: cls.emptyState,
							children: "No options found"
						}),
						filtered.map((item) => /* @__PURE__ */ jsxs(Combobox.Item, {
							item,
							className: cls.item,
							children: [/* @__PURE__ */ jsx(Combobox.ItemText, {
								className: cls.itemText,
								children: item.label && item.label !== item.value ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", { children: item.label }), /* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.75em",
										opacity: .6
									},
									children: item.value
								})] }) : item.value
							}), /* @__PURE__ */ jsx(Combobox.ItemIndicator, {
								className: cls.itemIndicator,
								children: /* @__PURE__ */ jsx(CheckIcon, {
									className: "icon icon-sm",
									"aria-hidden": true
								})
							})]
						}, item.value)),
						showAddNew && /* @__PURE__ */ jsxs("button", {
							type: "button",
							className: cls.addNew,
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
		})]
	});
}
SelectSearchable.displayName = "SelectSearchable";
//#endregion
export { SelectSearchable };

//# sourceMappingURL=select-searchable.js.map