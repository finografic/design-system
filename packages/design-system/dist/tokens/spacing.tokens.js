import { defineTokens } from "../node_modules/.pnpm/@pandacss_dev@1.9.0_typescript@5.9.3/node_modules/@pandacss/dev/dist/index.js";
//#region src/tokens/spacing.tokens.ts
/**
* Spacing scale for Panda CSS. Used by margin, padding, gap.
* Keys are referenced as strings in recipes and css() calls:
*   px: '4', gap: '2', mt: '6'
*
* Values are in rem (1rem = 16px at default). Panda resolves at codegen.
*
* @example
* // In recipe: px: '4' → padding-inline: var(--spacing-4) → 1rem (16px)
* // In css():  gap: '2' → gap: var(--spacing-2) → 0.5rem (8px)
*/
const spacingTokens = defineTokens.spacing({
	"0": { value: "0" },
	px: { value: "1px" },
	"0.5": { value: "0.125rem" },
	"1": { value: "0.25rem" },
	"1.5": { value: "0.375rem" },
	"2": { value: "0.5rem" },
	"3": { value: "0.75rem" },
	"4": { value: "1rem" },
	"5": { value: "1.25rem" },
	"6": { value: "1.5rem" },
	"7": { value: "1.75rem" },
	"8": { value: "2rem" },
	"9": { value: "2.25rem" },
	"10": { value: "2.5rem" },
	"12": { value: "3rem" },
	"16": { value: "4rem" },
	"20": { value: "5rem" },
	"24": { value: "6rem" }
});
/**
* Z-index scale for layered UI elements.
* Keys are referenced as strings in recipes and css() calls:
*   zIndex: 'modal', zIndex: 'tooltip'
*
* Values use a spaced numeric scale to allow insertion without
* renumbering (e.g. a new layer between overlay and modal).
*
* **Layering:** `dropdown` must stay **above** `sticky` (e.g. sticky table headers /
* toolbars at 1100) so Select / Combobox / Menu positioners are not covered by the
* next row or sticky chrome.
*
* @example
* // In recipe: zIndex: 'tooltip' → z-index: 1800
* // In css():  zIndex: 'overlay' → z-index: 1300
*/
const zIndexTokens = defineTokens.zIndex({
	hide: { value: -1 },
	base: { value: 0 },
	docked: { value: 10 },
	sticky: { value: 1100 },
	dropdown: { value: 1150 },
	banner: { value: 1200 },
	overlay: { value: 1300 },
	modal: { value: 1400 },
	popover: { value: 1500 },
	toast: { value: 1700 },
	tooltip: { value: 1800 }
});
//#endregion
export { spacingTokens, zIndexTokens };

//# sourceMappingURL=spacing.tokens.js.map