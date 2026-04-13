import { defineTokens } from "../node_modules/.pnpm/@pandacss_dev@1.9.1_typescript@5.9.3/node_modules/@pandacss/dev/dist/index.js";
//#region src/tokens/sizes.tokens.ts
/**
* Sizes token scale for Panda CSS.
*
* Used by width, height, min-width, max-width, min-height, max-height. Keys are referenced as strings in
* recipes and css() calls: width: '9', height: '5', maxWidth: 'sidebar'
*
* Includes: - Numeric scale (rem-based, mirrors spacing scale) - Named layout sizes (structural app
* dimensions)
*
* @example
*   // In recipe: width: '9'   → var(--sizes-9)   → 2.25rem (36px)
*   // In recipe: h: 'navbar'  → var(--sizes-navbar) → 41px
*   // In css():  maxWidth: 'content' → var(--sizes-content) → 1200px
*/
const sizingTokens = defineTokens.sizes({
	"0": { value: "0" },
	"px": { value: "1px" },
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
	"11": { value: "2.75rem" },
	"12": { value: "3rem" },
	"16": { value: "4rem" },
	"20": { value: "5rem" },
	"24": { value: "6rem" },
	"navbar": { value: "41px" },
	"header": { value: "70px" },
	"footer": { value: "70px" },
	"sidebar": { value: "300px" },
	"content": { value: "1200px" }
});
//#endregion
export { sizingTokens };

//# sourceMappingURL=sizes.tokens.js.map