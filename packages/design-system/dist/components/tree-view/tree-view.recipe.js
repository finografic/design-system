import { sva } from "@styled-system/css";
//#region src/components/tree-view/tree-view.recipe.ts
/**
* TreeView Slot Recipe
*
* Port of Ark UI TreeView example styles → Panda `sva` + semantic tokens.
*
* Slots: root · label · tree · branch · branchControl · branchIndicator · branchText · branchContent ·
* branchIndentGuide · item · itemText · itemIndicator Variants: size (sm | md | lg)
*
* Depth-based indentation is driven by CSS custom properties. Ark injects `--depth` on each branch/item node;
* the recipe sets derived vars (`--tree-depth`, `--tree-offset`, …) on `branchControl` and `item` so padding
* scales automatically with nesting level.
*/
const treeViewRecipe = sva({
	className: "tree-view",
	slots: [
		"root",
		"label",
		"tree",
		"branch",
		"branchControl",
		"branchIndicator",
		"branchText",
		"branchContent",
		"branchIndentGuide",
		"item",
		"itemText",
		"itemIndicator"
	],
	base: {
		root: {
			color: "fg",
			display: "flex",
			flexDirection: "column",
			gap: "2",
			width: "full"
		},
		label: {
			fontSize: "sm",
			lineHeight: "1.25rem",
			fontWeight: "medium",
			color: "fg",
			userSelect: "none"
		},
		tree: {
			"display": "flex",
			"flexDirection": "column",
			"fontSize": "sm",
			"lineHeight": "1.25rem",
			"& svg": { flexShrink: 0 }
		},
		branch: { position: "relative" },
		branchControl: {
			"display": "flex",
			"alignItems": "center",
			"gap": "var(--tree-item-gap)",
			"borderRadius": "md",
			"userSelect": "none",
			"position": "relative",
			"cursor": "pointer",
			"width": "full",
			"border": "none",
			"bg": "transparent",
			"fontFamily": "inherit",
			"fontSize": "inherit",
			"lineHeight": "inherit",
			"color": "fg",
			"textAlign": "start",
			"--tree-depth": "calc(var(--depth) - 1)",
			"--tree-indentation-offset": "calc(var(--tree-indentation) * var(--tree-depth))",
			"--tree-icon-offset": "calc(var(--tree-icon-size) * var(--tree-depth) * 0.5)",
			"--tree-offset": "calc(var(--tree-padding-inline) + var(--tree-indentation-offset) + var(--tree-icon-offset))",
			"paddingInlineStart": "var(--tree-offset)",
			"paddingInlineEnd": "var(--tree-padding-inline)",
			"paddingBlock": "var(--tree-padding-block)",
			"_hover": { bg: "bg.muted" },
			"_focusVisible": {
				outline: "2px solid",
				outlineColor: "accent.focusRing",
				outlineOffset: "-2px"
			},
			"_selected": {
				bg: "bg.muted",
				color: "accent.fg"
			},
			"_disabled": {
				opacity: .5,
				filter: "grayscale(100%)",
				cursor: "not-allowed"
			}
		},
		branchIndicator: {
			"display": "inline-flex",
			"alignItems": "center",
			"justifyContent": "center",
			"color": "fg.muted",
			"transformOrigin": "center",
			"transitionProperty": "transform",
			"transitionDuration": "fast",
			"& svg": {
				w: "3.5",
				h: "3.5"
			},
			"_open": { transform: "rotate(90deg)" }
		},
		branchText: {
			flex: "1",
			display: "inline-flex",
			alignItems: "center",
			gap: "var(--tree-item-gap)",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap"
		},
		branchContent: {
			position: "relative",
			overflow: "hidden",
			_open: { animation: "expand-height 150ms ease-out, fade-in 150ms ease-out" },
			_closed: { animation: "collapse-height 150ms ease-out, fade-out 150ms ease-out" }
		},
		branchIndentGuide: {
			"height": "full",
			"width": "1px",
			"bg": "border",
			"position": "absolute",
			"zIndex": "1",
			"--tree-depth": "calc(var(--depth) - 1)",
			"--tree-indentation-offset": "calc(var(--tree-indentation) * var(--tree-depth))",
			"--tree-offset": "calc(var(--tree-padding-inline) + var(--tree-indentation-offset))",
			"--tree-icon-offset": "calc(var(--tree-icon-size) * 0.5 * var(--depth))",
			"insetInlineStart": "calc(var(--tree-offset) + var(--tree-icon-offset))"
		},
		item: {
			"display": "flex",
			"alignItems": "center",
			"gap": "var(--tree-item-gap)",
			"borderRadius": "md",
			"userSelect": "none",
			"position": "relative",
			"cursor": "pointer",
			"width": "full",
			"border": "none",
			"bg": "transparent",
			"fontFamily": "inherit",
			"fontSize": "inherit",
			"lineHeight": "inherit",
			"color": "fg",
			"textAlign": "start",
			"textDecoration": "none",
			"--tree-depth": "calc(var(--depth) - 1)",
			"--tree-indentation-offset": "calc(var(--tree-indentation) * var(--tree-depth))",
			"--tree-icon-offset": "calc(var(--tree-icon-size) * var(--tree-depth) * 0.5)",
			"--tree-offset": "calc(var(--tree-padding-inline) + var(--tree-indentation-offset) + var(--tree-icon-offset))",
			"paddingInlineStart": "var(--tree-offset)",
			"paddingInlineEnd": "var(--tree-padding-inline)",
			"paddingBlock": "var(--tree-padding-block)",
			"_hover": { bg: "bg.muted" },
			"_focusVisible": {
				outline: "2px solid",
				outlineColor: "accent.focusRing",
				outlineOffset: "-2px"
			},
			"_selected": {
				bg: "bg.muted",
				color: "accent.fg"
			},
			"_disabled": {
				opacity: .5,
				filter: "grayscale(100%)",
				cursor: "not-allowed"
			}
		},
		itemText: {
			flex: "1",
			display: "inline-flex",
			alignItems: "center",
			gap: "var(--tree-item-gap)",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap"
		},
		itemIndicator: {
			"display": "flex",
			"alignItems": "center",
			"justifyContent": "center",
			"color": "accent.solid",
			"flexShrink": 0,
			"& svg": {
				w: "3.5",
				h: "3.5"
			}
		}
	},
	variants: { size: {
		sm: {
			root: {
				"--tree-item-gap": "0.375rem",
				"--tree-indentation": "0.875rem",
				"--tree-padding-inline": "0.5rem",
				"--tree-padding-block": "0.25rem",
				"--tree-icon-size": "0.875rem"
			},
			tree: { fontSize: "xs" },
			branchControl: { fontSize: "xs" },
			branchIndicator: { "& svg": {
				w: "3",
				h: "3"
			} },
			item: { fontSize: "xs" }
		},
		md: {
			root: {
				"--tree-item-gap": "0.5rem",
				"--tree-indentation": "1rem",
				"--tree-padding-inline": "0.75rem",
				"--tree-padding-block": "0.375rem",
				"--tree-icon-size": "1rem"
			},
			tree: { fontSize: "sm" },
			branchControl: { fontSize: "sm" },
			item: { fontSize: "sm" }
		},
		lg: {
			root: {
				"--tree-item-gap": "0.625rem",
				"--tree-indentation": "1.25rem",
				"--tree-padding-inline": "1rem",
				"--tree-padding-block": "0.5rem",
				"--tree-icon-size": "1.125rem"
			},
			tree: { fontSize: "md" },
			branchControl: { fontSize: "md" },
			branchIndicator: { "& svg": {
				w: "4",
				h: "4"
			} },
			item: { fontSize: "md" }
		}
	} },
	defaultVariants: { size: "md" }
});
//#endregion
export { treeViewRecipe };

//# sourceMappingURL=tree-view.recipe.js.map