import { BASE_COLORS } from "../palette/base.palette.js";
import { buildShade } from "../palette/palette.utils.js";
//#region src/tokens/colors.tokens.ts
/**
* Color tokens for Panda CSS. Keys are referenced as strings in recipes: bg: 'primary', color: 'danger.dark',
* borderColor: 'grey.lighter'
*
* Each color group has 11 shade stops: base + 5 lighter + 5 darker. Values use OKLCH color space for
* perceptually uniform gradients.
*
* @example
*   // In recipe: bg: 'primary' → background: oklch(48.8% 0.243 264.376)
*   // In recipe: color: 'danger.dark' → color: <computed dark shade>
*/
const colorTokens = {
	primary: buildShade(BASE_COLORS.primary),
	secondary: buildShade(BASE_COLORS.secondary),
	success: buildShade(BASE_COLORS.success),
	warning: buildShade(BASE_COLORS.warning),
	danger: buildShade(BASE_COLORS.danger),
	info: buildShade(BASE_COLORS.info),
	grey: buildShade(BASE_COLORS.grey),
	neutral: buildShade(BASE_COLORS.default),
	text: { value: BASE_COLORS.text },
	white: { value: BASE_COLORS.white },
	black: { value: BASE_COLORS.black },
	transparent: { value: BASE_COLORS.transparent }
};
/**
* Semantic tokens — role-based color aliases. These define what colors MEAN in context, not what they ARE.
*
* References like `{colors.grey.xlight}` resolve at build time to the underlying color-mix(in oklch, …) value
* — OKLCH throughout.
*
* Maps to the Ark UI blog's token structure: bg, fg, border, accent — with light/dark mode conditions.
*/
const semanticColorTokens = {
	bg: {
		DEFAULT: { value: {
			base: "{colors.white}",
			_dark: "{colors.black}"
		} },
		subtle: { value: {
			base: "{colors.grey.xlight}",
			_dark: "{colors.grey.xdark}"
		} },
		muted: { value: {
			base: "{colors.grey.lighter}",
			_dark: "{colors.grey.darker}"
		} },
		emphasized: { value: {
			base: "{colors.grey.light}",
			_dark: "{colors.grey.dark}"
		} },
		inverted: { value: {
			base: "{colors.black}",
			_dark: "{colors.white}"
		} },
		surface: { value: {
			base: "{colors.white}",
			_dark: "oklch(14% 0.01 285)"
		} },
		panel: { value: {
			base: "{colors.white}",
			_dark: "oklch(12% 0.01 285)"
		} },
		error: { value: {
			base: "{colors.danger.xlight}",
			_dark: "{colors.danger.xdark}"
		} },
		warning: { value: {
			base: "{colors.warning.xlight}",
			_dark: "{colors.warning.xdark}"
		} },
		success: { value: {
			base: "{colors.success.xlight}",
			_dark: "{colors.success.xdark}"
		} },
		info: { value: {
			base: "{colors.info.xlight}",
			_dark: "{colors.info.xdark}"
		} }
	},
	fg: {
		DEFAULT: { value: {
			base: "{colors.text}",
			_dark: "{colors.grey.xxlight}"
		} },
		muted: { value: {
			base: "oklch(40% 0.01 285)",
			_dark: "oklch(65% 0.01 285)"
		} },
		subtle: { value: {
			base: "{colors.grey}",
			_dark: "{colors.grey}"
		} },
		inverted: { value: {
			base: "{colors.white}",
			_dark: "{colors.black}"
		} },
		error: { value: {
			base: "{colors.danger}",
			_dark: "{colors.danger.light}"
		} },
		warning: { value: {
			base: "{colors.warning.dark}",
			_dark: "{colors.warning}"
		} },
		success: { value: {
			base: "{colors.success.dark}",
			_dark: "{colors.success}"
		} },
		info: { value: {
			base: "{colors.info.dark}",
			_dark: "{colors.info}"
		} }
	},
	border: {
		DEFAULT: { value: {
			base: "{colors.grey.lighter}",
			_dark: "{colors.grey.darker}"
		} },
		muted: { value: {
			base: "{colors.grey.xlight}",
			_dark: "{colors.grey.xdark}"
		} },
		subtle: { value: {
			base: "{colors.grey.xlight}",
			_dark: "{colors.grey.xxdark}"
		} },
		emphasized: { value: {
			base: "{colors.grey.light}",
			_dark: "{colors.grey.dark}"
		} },
		inverted: { value: {
			base: "{colors.text}",
			_dark: "{colors.grey.xlight}"
		} },
		error: { value: {
			base: "{colors.danger}",
			_dark: "{colors.danger.light}"
		} },
		warning: { value: {
			base: "{colors.warning}",
			_dark: "{colors.warning.light}"
		} },
		success: { value: {
			base: "{colors.success}",
			_dark: "{colors.success.light}"
		} },
		info: { value: {
			base: "{colors.info}",
			_dark: "{colors.info.light}"
		} }
	},
	accent: {
		DEFAULT: { value: {
			base: "{colors.primary}",
			_dark: "{colors.primary.light}"
		} },
		contrast: { value: {
			base: "{colors.white}",
			_dark: "{colors.black}"
		} },
		fg: { value: {
			base: "{colors.primary.dark}",
			_dark: "{colors.primary.light}"
		} },
		subtle: { value: {
			base: "{colors.primary.xlight}",
			_dark: "{colors.primary.xdark}"
		} },
		muted: { value: {
			base: "{colors.primary.lighter}",
			_dark: "{colors.primary.darker}"
		} },
		emphasized: { value: {
			base: "{colors.primary.light}",
			_dark: "{colors.primary.dark}"
		} },
		solid: { value: {
			base: "{colors.primary}",
			_dark: "{colors.primary}"
		} },
		focusRing: { value: {
			base: "{colors.primary.light}",
			_dark: "{colors.primary.light}"
		} }
	}
};
//#endregion
export { colorTokens, semanticColorTokens };

//# sourceMappingURL=colors.tokens.js.map