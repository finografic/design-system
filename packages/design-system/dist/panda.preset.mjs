import { r as BASE_COLORS, t as buildShade } from "./palette.utils-B1rxZTA3.mjs";
//#region ../../node_modules/.pnpm/@pandacss+dev@1.9.1_typescript@5.9.3/node_modules/@pandacss/dev/dist/index.mjs
function definePreset(preset) {
	return preset;
}
function defineKeyframes(keyframes) {
	return keyframes;
}
function createProxy() {
	const identity = (v) => v;
	return new Proxy(identity, { get() {
		return identity;
	} });
}
var defineTokens = /* @__PURE__ */ createProxy();
function defineTextStyles(definition) {
	return definition;
}
//#endregion
//#region src/tokens/animations.tokens.ts
/**
* 🎬 Animation Tokens
*
* Keyframes and transition durations for the design system.
*/
const keyframes = defineKeyframes({
	"slide-fade-in": {
		"0%": {
			opacity: "0",
			transform: "translateY(-8px)"
		},
		"100%": {
			opacity: "1",
			transform: "translateY(0)"
		}
	},
	"slide-fade-out": {
		"0%": {
			opacity: "1",
			transform: "translateY(0)"
		},
		"100%": {
			opacity: "0",
			transform: "translateY(-8px)"
		}
	},
	"fade-in": {
		"0%": { opacity: "0" },
		"100%": { opacity: "1" }
	},
	"fade-out": {
		"0%": { opacity: "1" },
		"100%": { opacity: "0" }
	},
	"scale-in": {
		"0%": {
			opacity: "0",
			transform: "scale(0.95)"
		},
		"100%": {
			opacity: "1",
			transform: "scale(1)"
		}
	},
	"scale-out": {
		"0%": {
			opacity: "1",
			transform: "scale(1)"
		},
		"100%": {
			opacity: "0",
			transform: "scale(0.95)"
		}
	},
	"slide-in-right": {
		"0%": { transform: "translateX(100%)" },
		"100%": { transform: "translateX(0)" }
	},
	"slide-out-right": {
		"0%": { transform: "translateX(0)" },
		"100%": { transform: "translateX(100%)" }
	},
	"spin": {
		"0%": { transform: "rotate(0deg)" },
		"100%": { transform: "rotate(360deg)" }
	}
});
const durationTokens = defineTokens.durations({
	fastest: { value: "50ms" },
	faster: { value: "100ms" },
	fast: { value: "150ms" },
	normal: { value: "200ms" },
	slow: { value: "300ms" },
	slower: { value: "400ms" },
	slowest: { value: "500ms" }
});
const easingTokens = defineTokens.easings({
	"default": { value: "cubic-bezier(0.4, 0, 0.2, 1)" },
	"in": { value: "cubic-bezier(0.4, 0, 1, 1)" },
	"out": { value: "cubic-bezier(0, 0, 0.2, 1)" },
	"in-out": { value: "cubic-bezier(0.4, 0, 0.2, 1)" }
});
//#endregion
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
			_dark: "oklch(15% 0.01 285)"
		} },
		muted: { value: {
			base: "{colors.grey.lighter}",
			_dark: "oklch(20% 0.01 285)"
		} },
		emphasized: { value: {
			base: "{colors.grey.light}",
			_dark: "oklch(25% 0.01 285)"
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
			_dark: "oklch(20% 0.08 27)"
		} },
		warning: { value: {
			base: "{colors.warning.xlight}",
			_dark: "oklch(20% 0.06 70)"
		} },
		success: { value: {
			base: "{colors.success.xlight}",
			_dark: "oklch(20% 0.06 149)"
		} },
		info: { value: {
			base: "{colors.info.xlight}",
			_dark: "oklch(20% 0.05 242)"
		} }
	},
	fg: {
		DEFAULT: { value: {
			base: BASE_COLORS.text,
			_dark: "oklch(93% 0 0)"
		} },
		muted: { value: {
			base: "oklch(40% 0.01 285)",
			_dark: "oklch(65% 0.01 285)"
		} },
		subtle: { value: {
			base: "{colors.grey}",
			_dark: "oklch(55% 0.01 285)"
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
			_dark: "oklch(30% 0.01 285)"
		} },
		muted: { value: {
			base: "{colors.grey.xlight}",
			_dark: "oklch(25% 0.01 285)"
		} },
		subtle: { value: {
			base: "{colors.grey.xlight}",
			_dark: "oklch(20% 0.01 285)"
		} },
		emphasized: { value: {
			base: "{colors.grey.light}",
			_dark: "oklch(40% 0.01 285)"
		} },
		inverted: { value: {
			base: BASE_COLORS.text,
			_dark: "oklch(90% 0 0)"
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
			_dark: "oklch(20% 0.08 264)"
		} },
		muted: { value: {
			base: "{colors.primary.lighter}",
			_dark: "oklch(25% 0.1 264)"
		} },
		emphasized: { value: {
			base: "{colors.primary.light}",
			_dark: "oklch(35% 0.15 264)"
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
//#region src/tokens/decorative.tokens.ts
/**
* Border radius tokens for Panda CSS. Keys: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' Used
* in recipes as: borderRadius: 'md', rounded: 'full'
*
* @example
*   // In recipe: borderRadius: 'md' → border-radius: 0.5rem (8px)
*   // In recipe: rounded: 'full' → border-radius: 9999px (pill shape)
*/
const radiiTokens = defineTokens.radii({
	"none": { value: "0" },
	"xs": { value: "0.25rem" },
	"sm": { value: "0.33rem" },
	"md": { value: "0.5rem" },
	"lg": { value: "0.66rem" },
	"xl": { value: "1rem" },
	"2xl": { value: "1.25rem" },
	"full": { value: "9999px" }
});
/**
* Border width tokens for Panda CSS. Keys: 'none' | 'light' | 'default' | 'heavy' Used in recipes as:
* borderWidth: 'default', borderWidth: 'light'
*
* @example
*   // In recipe: borderWidth: 'default' → border-width: 2px
*   // In recipe: borderWidth: 'light' → border-width: 1px
*/
const borderWidthTokens = defineTokens.borderWidths({
	none: { value: "0" },
	light: { value: "1px" },
	default: { value: "2px" },
	heavy: { value: "4px" }
});
/**
* Box shadow tokens for Panda CSS. Keys: 'base.sm' | 'base.md' | 'base.lg' Used in recipes as: boxShadow:
* 'md', shadow: 'sm'
*
* Note: Semantic shadow tokens (with light/dark variants) are defined in panda.preset.ts under
* semanticTokens.shadows.
*
* @example
*   // In recipe: boxShadow: 'md' → box-shadow: <elevation shadow>
*/
const shadowTokens = defineTokens.shadows({ base: {
	sm: { value: "0 1px 2px 0 rgba(16, 24, 40, 0.05)" },
	md: { value: "0 4px 8px -2px rgba(16, 24, 40, 0.18), 0 1.5px 4px rgba(16, 24, 40, 0.14)" },
	lg: { value: "0 8px 24px rgba(16, 24, 40, 0.18), 0 1.5px 4px rgba(16, 24, 40, 0.08)" }
} });
//#endregion
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
//#region src/tokens/spacing.tokens.ts
/**
* Spacing scale for Panda CSS. Used by margin, padding, gap. Keys are referenced as strings in recipes and
* css() calls: px: '4', gap: '2', mt: '6'
*
* Values are in rem (1rem = 16px at default). Panda resolves at codegen.
*
* @example
*   // In recipe: px: '4' → padding-inline: var(--spacing-4) → 1rem (16px)
*   // In css():  gap: '2' → gap: var(--spacing-2) → 0.5rem (8px)
*/
const spacingTokens = defineTokens.spacing({
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
	"24": { value: "6rem" }
});
/**
* Z-index scale for layered UI elements. Keys are referenced as strings in recipes and css() calls: zIndex:
* 'modal', zIndex: 'tooltip'
*
* Values use a spaced numeric scale to allow insertion without renumbering (e.g. a new layer between overlay
* and modal).
*
* **Layering:** `dropdown` must stay **above** `sticky` (e.g. sticky table headers / toolbars at 1100) so
* Select / Combobox / Menu positioners are not covered by the next row or sticky chrome.
*
* @example
*   // In recipe: zIndex: 'tooltip' → z-index: 1800
*   // In css():  zIndex: 'overlay' → z-index: 1300
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
//#region src/tokens/typography.tokens.ts
/**
* 📝 Typography Tokens
*
* Mapped from the existing client styles typography system. Font stacks, sizes, weights, and line heights.
*/
const fontTokens = defineTokens.fonts({
	sans: { value: [
		"-apple-system",
		"BlinkMacSystemFont",
		"\"Segoe UI\"",
		"Roboto",
		"\"Helvetica Neue\"",
		"Arial",
		"sans-serif",
		"ui-sans-serif",
		"system-ui",
		"\"Apple Color Emoji\"",
		"\"Segoe UI Emoji\"",
		"\"Segoe UI Symbol\"",
		"\"Noto Color Emoji\""
	].join(", ") },
	serif: { value: "ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif" },
	mono: { value: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace" }
});
const fontSizeTokens = defineTokens.fontSizes({
	"xs": { value: "0.75rem" },
	"sm": { value: "0.875rem" },
	"md": { value: "1rem" },
	"lg": { value: "1.125rem" },
	"xl": { value: "1.25rem" },
	"2xl": { value: "1.5rem" },
	"3xl": { value: "1.875rem" },
	"4xl": { value: "2.25rem" },
	"5xl": { value: "3rem" },
	"6xl": { value: "3.75rem" }
});
const fontWeightTokens = defineTokens.fontWeights({
	thin: { value: "100" },
	extralight: { value: "200" },
	light: { value: "300" },
	normal: { value: "400" },
	medium: { value: "500" },
	semibold: { value: "600" },
	bold: { value: "700" },
	extrabold: { value: "800" },
	black: { value: "900" }
});
const lineHeightTokens = defineTokens.lineHeights({
	none: { value: "1" },
	tight: { value: "1.25" },
	snug: { value: "1.375" },
	normal: { value: "1.5" },
	relaxed: { value: "1.625" },
	loose: { value: "2" }
});
const textStyles = defineTextStyles({
	h1: { value: {
		fontSize: "3.75rem",
		fontWeight: "700",
		lineHeight: "1.25"
	} },
	h2: { value: {
		fontSize: "3rem",
		fontWeight: "700",
		lineHeight: "1.25"
	} },
	h3: { value: {
		fontSize: "2.25rem",
		fontWeight: "600",
		lineHeight: "1.375"
	} },
	h4: { value: {
		fontSize: "1.875rem",
		fontWeight: "600",
		lineHeight: "1.375"
	} },
	h5: { value: {
		fontSize: "1.5rem",
		fontWeight: "600",
		lineHeight: "1.375"
	} },
	body: {
		lg: { value: {
			fontSize: "1.125rem",
			fontWeight: "400",
			lineHeight: "1.5"
		} },
		md: { value: {
			fontSize: "1rem",
			fontWeight: "400",
			lineHeight: "1.5"
		} },
		sm: { value: {
			fontSize: "0.875rem",
			fontWeight: "400",
			lineHeight: "1.5"
		} }
	},
	caption: { value: {
		fontSize: "0.75rem",
		fontWeight: "400",
		lineHeight: "1.5"
	} }
});
//#endregion
//#region src/viewport/viewport.utils.ts
/** Default pixel size of the HTML root element, used for rem/em conversions. */
const BASE_PX = 16;
/** Converts a pixel value to rem, rounded to 2 decimal places. */
const convertPxToRem = (px) => Number((1 / BASE_PX * px).toFixed(2));
/** Formats a pixel value as a `px` string — e.g. `768` → `'768px'`. */
const toPixelString = (value) => `${value}px`;
/** Converts a pixel value to a numeric rem value. Used as a `mapBreakpoints` callback. */
const toRemNumeric = (px) => convertPxToRem(px);
/**
* Converts a pixel value to a numeric em value. In this context em === rem (assumes no inherited font-size
* scaling). Used as a `mapBreakpoints` callback.
*/
const toEmNumeric = (px) => convertPxToRem(px);
//#endregion
//#region src/viewport/viewport.breakpoints.ts
const BREAKPOINTS = {
	"xs": 0,
	"sm": 640,
	"md": 768,
	"lg": 1024,
	"xl": 1280,
	"2xl": 1536
};
const mapBreakpoints = (fn) => Object.fromEntries(Object.entries(BREAKPOINTS).map(([k, v]) => [k, fn(v)]));
Object.values(BREAKPOINTS).slice(1);
/** Pixel strings — e.g. `{ sm: '640px', ... }`. Used by Panda CSS config. */
const BREAKPOINTS_PX = mapBreakpoints(toPixelString);
mapBreakpoints(toRemNumeric);
mapBreakpoints(toEmNumeric);
//#endregion
//#region src/panda.preset.ts
const designSystemPreset = definePreset({
	name: "@workspace/design-system",
	theme: {
		tokens: {
			colors: colorTokens,
			fonts: fontTokens,
			fontSizes: fontSizeTokens,
			fontWeights: fontWeightTokens,
			lineHeights: lineHeightTokens,
			spacing: spacingTokens,
			sizes: sizingTokens,
			radii: radiiTokens,
			borderWidths: borderWidthTokens,
			shadows: shadowTokens,
			zIndex: zIndexTokens,
			durations: durationTokens,
			easings: easingTokens
		},
		semanticTokens: {
			colors: semanticColorTokens,
			shadows: {
				sm: { value: {
					base: "{shadows.base.sm}",
					_dark: "0 1px 2px 0 rgba(0, 0, 0, 0.3)"
				} },
				md: { value: {
					base: "{shadows.base.md}",
					_dark: "0 4px 8px -2px rgba(0, 0, 0, 0.4), 0 1.5px 4px rgba(0, 0, 0, 0.3)"
				} },
				lg: { value: {
					base: "{shadows.base.lg}",
					_dark: "0 8px 24px rgba(0, 0, 0, 0.5), 0 1.5px 4px rgba(0, 0, 0, 0.2)"
				} }
			}
		},
		textStyles,
		extend: {
			keyframes,
			breakpoints: BREAKPOINTS_PX
		}
	},
	globalCss: {
		"*, *::before, *::after": { boxSizing: "border-box" },
		"html": {
			lineHeight: "1.5",
			WebkitTextSizeAdjust: "100%",
			WebkitFontSmoothing: "antialiased",
			MozOsxFontSmoothing: "grayscale",
			textRendering: "optimizeLegibility",
			touchAction: "manipulation",
			fontFamily: "sans"
		},
		"body": {
			minHeight: "100dvh",
			position: "relative",
			bg: "bg",
			color: "fg"
		},
		"img, svg, video, canvas, audio, iframe, embed, object": {
			display: "block",
			verticalAlign: "middle"
		},
		"img, video": {
			maxWidth: "100%",
			height: "auto"
		},
		"svg": { flexShrink: 0 },
		"svg.icon": {
			width: "2rem",
			height: "2rem",
			display: "inline-block",
			flexShrink: 0,
			color: "currentColor",
			transition: "color 200ms ease-in-out, border-color 200ms ease-in-out, background-color 200ms ease-in-out"
		},
		"svg.icon.icon-sm": {
			width: "0.875rem",
			height: "0.875rem"
		},
		"svg.icon.icon-md": {
			width: "1rem",
			height: "1rem"
		},
		"svg.icon.icon-lg": {
			width: "1.25rem",
			height: "1.25rem"
		},
		"svg.icon.icon-xl": {
			width: "1.5rem",
			height: "1.5rem"
		},
		"svg.icon.icon-contextual": {
			width: "1em",
			height: "1em"
		},
		"svg.icon.icon-loading": { animation: "spin 1s linear infinite" },
		".button:hover svg.icon": { transform: "scale(1.05)" },
		".button:disabled svg.icon": {
			opacity: .5,
			transform: "none"
		},
		"::selection": {
			bg: "accent.muted",
			color: "fg"
		},
		":focus-visible": {
			outline: "2px solid",
			outlineColor: "accent.focusRing",
			outlineOffset: "2px"
		},
		":not(body):not(html)::-webkit-scrollbar": {
			width: "6px",
			height: "6px"
		},
		":not(body):not(html)::-webkit-scrollbar-track": {
			bg: "bg.subtle",
			borderRadius: "sm"
		},
		":not(body):not(html)::-webkit-scrollbar-thumb": {
			bg: "border",
			borderRadius: "sm",
			border: "1px solid transparent",
			backgroundClip: "content-box"
		},
		":not(body):not(html)::-webkit-scrollbar-thumb:hover": { bg: "fg.subtle" },
		":not(body):not(html)::-webkit-scrollbar-corner": { bg: "bg.subtle" }
	}
});
//#endregion
export { designSystemPreset };

//# sourceMappingURL=panda.preset.mjs.map