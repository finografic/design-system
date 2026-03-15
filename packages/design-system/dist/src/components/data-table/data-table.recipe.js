import { sva } from "@styled-system/css";
//#region src/components/data-table/data-table.recipe.ts
/**
* Table Slot Recipe
*
* Slots:    root | table | thead | tbody | tfoot | tr | headerRow | th | td | sortIcon | emptyState | caption
* Variants: size (sm | md | lg) · striped (boolean)
*
* Headless-first — pairs with TanStack Table (or any table logic layer).
* Apply slot classNames to your own rendered markup.
* Sort state via `data-sort="asc|desc|false"` on the sortIcon slot.
* Selection state via `data-selected="true"` on tr.
*/
const tableRecipe = sva({
	className: "table",
	slots: [
		"root",
		"table",
		"thead",
		"tbody",
		"tfoot",
		"tr",
		"headerRow",
		"th",
		"td",
		"sortIcon",
		"emptyState",
		"caption"
	],
	base: {
		root: {
			width: "100%",
			overflowX: "auto",
			borderWidth: "light",
			borderStyle: "solid",
			borderColor: "border",
			borderRadius: "md"
		},
		table: {
			width: "100%",
			borderCollapse: "collapse"
		},
		thead: {
			borderBottomWidth: "light",
			borderBottomStyle: "solid",
			borderBottomColor: "border"
		},
		headerRow: { bg: "bg.muted" },
		tr: {
			borderBottomWidth: "light",
			borderBottomStyle: "solid",
			borderBottomColor: "border.subtle",
			_hover: { bg: "bg.hover" }
		},
		th: {
			textAlign: "left",
			fontWeight: "semibold",
			color: "fg.muted",
			px: "3",
			py: "2"
		},
		td: {
			px: "3",
			py: "2"
		},
		sortIcon: { opacity: .6 },
		emptyState: {
			textAlign: "center",
			py: "6",
			color: "fg.muted"
		}
	}
});
//#endregion
export { tableRecipe };

//# sourceMappingURL=data-table.recipe.js.map