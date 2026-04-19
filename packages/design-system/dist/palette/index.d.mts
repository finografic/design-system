//#region src/palette/palette.types.d.ts
type ColorName = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'default' | 'grey' | 'text';
type ColorShade = 'xxxlight' | 'xxlight' | 'xlight' | 'lighter' | 'light' | 'DEFAULT' | 'dark' | 'darker' | 'xdark' | 'xxdark' | 'xxxdark';
type OKLCH = `oklch(${number}% ${number} ${number})` | `oklch(${number} ${number} ${number} / ${number | `${number}%`})`;
//#endregion
//#region src/palette/base.palette.d.ts
declare const BASE_COLORS_THEME: Record<ColorName, OKLCH>;
declare const BASE_COLORS: {
  readonly white: "#ffffff";
  readonly black: "#000000";
  readonly transparent: "transparent";
  readonly primary: OKLCH;
  readonly secondary: OKLCH;
  readonly success: OKLCH;
  readonly warning: OKLCH;
  readonly danger: OKLCH;
  readonly info: OKLCH;
  readonly default: OKLCH;
  readonly grey: OKLCH;
  readonly text: OKLCH;
};
//#endregion
//#region src/palette/palette.utils.d.ts
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
declare function buildShade(base: string): Record<ColorShade, {
  value: string;
}>;
/**
 * Generate color tokens with custom base color overrides.
 *
 * Merges `overrides` with the default BASE_COLORS_THEME, then rebuilds the full shade scale for every named
 * color. Pass the result to `theme.extend.tokens.colors` in your panda.config.ts.
 *
 * @example
 *   theme: { extend: { tokens: { colors: createColorTokens({ primary: 'oklch(59% 0.234 277)' }) } } }
 */
declare function createColorTokens(overrides?: Partial<Record<ColorName, OKLCH>>): {
  primary: Record<ColorShade, {
    value: string;
  }>;
  secondary: Record<ColorShade, {
    value: string;
  }>;
  success: Record<ColorShade, {
    value: string;
  }>;
  warning: Record<ColorShade, {
    value: string;
  }>;
  danger: Record<ColorShade, {
    value: string;
  }>;
  info: Record<ColorShade, {
    value: string;
  }>;
  grey: Record<ColorShade, {
    value: string;
  }>;
  neutral: Record<ColorShade, {
    value: string;
  }>;
  white: {
    value: "#ffffff";
  };
  black: {
    value: "#000000";
  };
  transparent: {
    value: "transparent";
  };
};
//#endregion
export { BASE_COLORS, BASE_COLORS_THEME, type ColorName, type ColorShade, type OKLCH, buildShade, createColorTokens };
//# sourceMappingURL=index.d.mts.map