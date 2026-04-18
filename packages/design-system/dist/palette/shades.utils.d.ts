import { ShadeScale } from "../types/palette.types.js";

//#region src/palette/shades.utils.d.ts
/**
 * Raw color palette for Panda CSS `tokens.colors`.
 *
 * Each color exposes 11 word-named shades plus a `DEFAULT` alias (= base) so `{colors.primary}` resolves
 * without a suffix.
 *
 * All shade values are computed at runtime via CSS color-mix(in oklch, …) — zero build-time cost,
 * perceptually uniform interpolation.
 *
 * Light-side percentages (% of base, remainder white): xxxlight → 5% | xxlight → 10% | xlight → 20% | lighter
 * → 38% | light → 58%
 *
 * Dark-side percentages (% of base, remainder black): dark → 82% | darker → 65% | xdark → 47% | xxdark → 30%
 * | xxxdark → 15%
 */
declare function buildShadeScale(base: string): Record<ShadeScale | 'DEFAULT', {
  value: string;
}>;
//#endregion
export { buildShadeScale };
//# sourceMappingURL=shades.utils.d.ts.map