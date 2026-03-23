import { ScreenClass } from "./viewport.types.js";

//#region src/viewport/viewport.emotion.d.ts
/** All breakpoint keys in definition order — useful for iteration. */
declare const sizes: ScreenClass[];
/**
 * `@media` min-width wrappers keyed by breakpoint name.
 *
 * Intended for CSS-in-JS libraries (Emotion, styled-components, etc.).
 *
 * @example min.md → '@media (min-width: 768px)'
 */
declare const min: Record<ScreenClass, string>;
/**
 * `@media` max-width wrappers keyed by breakpoint name.
 *
 * @example max.lg → '@media (max-width: 1024px)'
 */
declare const max: Record<ScreenClass, string>;
//#endregion
export { max, min, sizes };
//# sourceMappingURL=viewport.emotion.d.ts.map