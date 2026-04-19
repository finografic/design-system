import { BASE_COLORS, BASE_COLORS_THEME } from "./base.palette.js";
//#region src/palette/palette.utils.ts
/**
* Raw color palette for Panda CSS `tokens.colors`.
*
* Each color exposes 11 word-named shades plus a `DEFAULT` alias (= base) so `{colors.primary}` resolves
* without a suffix.
*
* All shade values are computed at runtime via CSS color-mix(in oklch, …) — zero build-time cost,
* perceptually uniform interpolation.
*
* Symmetric scale — light and dark sides mirror each other at equal intervals (~17% steps):
*
* Light-side percentages (% of base, remainder white): xxxlight → 15% | xxlight → 30% | xlight → 50% | lighter
* → 65% | light → 82%
*
* Dark-side percentages (% of base, remainder black): dark → 82% | darker → 65% | xdark → 50% | xxdark → 30%
* | xxxdark → 15%
*/
function buildShade(base) {
	return {
		xxxlight: { value: `color-mix(in oklch, ${base} 15%, white)` },
		xxlight: { value: `color-mix(in oklch, ${base} 30%, white)` },
		xlight: { value: `color-mix(in oklch, ${base} 50%, white)` },
		lighter: { value: `color-mix(in oklch, ${base} 65%, white)` },
		light: { value: `color-mix(in oklch, ${base} 82%, white)` },
		DEFAULT: { value: base },
		dark: { value: `color-mix(in oklch, ${base} 82%, black)` },
		darker: { value: `color-mix(in oklch, ${base} 65%, black)` },
		xdark: { value: `color-mix(in oklch, ${base} 50%, black)` },
		xxdark: { value: `color-mix(in oklch, ${base} 30%, black)` },
		xxxdark: { value: `color-mix(in oklch, ${base} 15%, black)` }
	};
}
/**
* Generate color tokens with custom base color overrides.
*
* Merges `overrides` with the default BASE_COLORS_THEME, then rebuilds the full shade scale for every named
* color. Pass the result to `theme.extend.tokens.colors` in your panda.config.ts.
*
* @example
*   theme: { extend: { tokens: { colors: createColorTokens({ primary: 'oklch(59% 0.234 277)' }) } } }
*/
function createColorTokens(overrides = {}) {
	const merged = {
		...BASE_COLORS_THEME,
		...overrides
	};
	return {
		primary: buildShade(merged.primary),
		secondary: buildShade(merged.secondary),
		success: buildShade(merged.success),
		warning: buildShade(merged.warning),
		danger: buildShade(merged.danger),
		info: buildShade(merged.info),
		grey: buildShade(merged.grey),
		neutral: buildShade(merged.default),
		white: { value: BASE_COLORS.white },
		black: { value: BASE_COLORS.black },
		transparent: { value: BASE_COLORS.transparent }
	};
}
//#endregion
export { buildShade, createColorTokens };

//# sourceMappingURL=palette.utils.js.map