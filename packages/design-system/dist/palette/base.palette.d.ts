import { ColorName, OKLCH } from "./palette.types.js";
//#region src/palette/base.palette.d.ts
declare const BASE_COLORS_THEME: Record<ColorName, OKLCH>;
declare const BASE_COLORS: {
  readonly white: '#ffffff';
  readonly black: '#000000';
  readonly transparent: 'transparent';
  readonly danger: OKLCH;
  readonly default: OKLCH;
  readonly grey: OKLCH;
  readonly info: OKLCH;
  readonly primary: OKLCH;
  readonly secondary: OKLCH;
  readonly success: OKLCH;
  readonly text: OKLCH;
  readonly warning: OKLCH;
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
export { BASE_COLORS, BASE_COLORS_THEME };
//# sourceMappingURL=base.palette.d.ts.map