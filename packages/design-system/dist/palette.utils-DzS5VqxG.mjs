//#region src/palette/base.palette.ts
const BASE_COLORS_THEME = {
	primary: "oklch(48.8% 0.243 264.376)",
	secondary: "oklch(49.6% 0.265 301.924)",
	success: "oklch(60.4% 0.194 149.214)",
	warning: "oklch(71% 0.188 70.08)",
	danger: "oklch(55.7% 0.245 27.325)",
	info: "oklch(58.8% 0.158 241.966)",
	default: "oklch(65.3% 0.013 58.071)",
	grey: "oklch(55.2% 0.016 285.938)",
	text: "oklch(28% 0 0)"
};
const BASE_COLORS = {
	...BASE_COLORS_THEME,
	white: "#ffffff",
	black: "#000000",
	transparent: "transparent"
};
/**
* Shade scale (11 stops) — word names map to the TW/Panda/Ark numeric standard:
*
* SHADE SUFFIX → SHADE NOTES ────────────────────────────────────────────── xxxlight → 50 near-white endpoint
* xxlight → 100 xlight → 200 lighter → 300 medium-light light → 400 hover-on-light-bg base → 500 anchor
* (DEFAULT) dark → 600 hover-on-solid-bg, active states darker → 700 xdark → 800 xxdark → 900 xxxdark → 950
* near-black endpoint
*/
//#endregion
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
* Light-side percentages (% of base, remainder white): xxxlight → 15% | xxlight → 30% | xlight → 50% |
* lighter → 65% | light → 82%
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
export { BASE_COLORS_THEME as i, createColorTokens as n, BASE_COLORS as r, buildShade as t };

//# sourceMappingURL=palette.utils-DzS5VqxG.mjs.map