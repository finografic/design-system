//#region src/palette/colors.base.ts
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
const BASE_COLORS_FIXED = {
	white: "#ffffff",
	black: "#000000",
	transparent: "transparent"
};
const BASE_COLORS = {
	...BASE_COLORS_THEME,
	...BASE_COLORS_FIXED
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
export { BASE_COLORS, BASE_COLORS_FIXED, BASE_COLORS_THEME };

//# sourceMappingURL=colors.base.js.map