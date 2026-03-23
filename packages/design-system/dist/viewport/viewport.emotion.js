import { BREAKPOINTS } from "./viewport.breakpoints.js";
//#region src/viewport/viewport.emotion.ts
/** All breakpoint keys in definition order — useful for iteration. */
const sizes = Object.keys(BREAKPOINTS);
/**
* `@media` min-width wrappers keyed by breakpoint name.
*
* Intended for CSS-in-JS libraries (Emotion, styled-components, etc.).
*
* @example min.md → '@media (min-width: 768px)'
*/
const min = Object.fromEntries(Object.entries(BREAKPOINTS).map(([k, v]) => [k, `@media (min-width: ${v}px)`]));
/**
* `@media` max-width wrappers keyed by breakpoint name.
*
* @example max.lg → '@media (max-width: 1024px)'
*/
const max = Object.fromEntries(Object.entries(BREAKPOINTS).map(([k, v]) => [k, `@media (max-width: ${v}px)`]));
//#endregion
export { max, min, sizes };

//# sourceMappingURL=viewport.emotion.js.map