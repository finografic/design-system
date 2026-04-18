import { ColorName, OKLCH } from "../types/palette.types.js";

//#region src/palette/colors.base.d.ts
declare const BASE_COLORS_THEME: Record<ColorName, OKLCH>;
declare const BASE_COLORS_FIXED: {
  readonly white: "#ffffff";
  readonly black: "#000000";
  readonly transparent: "transparent";
};
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
  readonly grey: OKLCH;
  readonly default: OKLCH;
  readonly text: OKLCH;
};
//#endregion
export { BASE_COLORS, BASE_COLORS_FIXED, BASE_COLORS_THEME };
//# sourceMappingURL=colors.base.d.ts.map