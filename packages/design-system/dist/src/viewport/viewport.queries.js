import { toMediaMaxWidth, toMediaMinWidth } from "./viewport.utils.js";
import { BREAKPOINTS } from "./viewport.breakpoints.js";
//#region src/viewport/viewport.queries.ts
/** Min-width media query strings for each breakpoint (no `@media` wrapper). */
const QUERIES_MIN = {
	"xs": "(min-width: 0px)",
	"sm": `(min-width: ${BREAKPOINTS.sm}px)`,
	"md": `(min-width: ${BREAKPOINTS.md}px)`,
	"lg": `(min-width: ${BREAKPOINTS.lg}px)`,
	"xl": `(min-width: ${BREAKPOINTS.xl}px)`,
	"2xl": `(min-width: ${BREAKPOINTS["2xl"]}px)`
};
/** Max-width media query strings for each breakpoint (no `@media` wrapper). */
const QUERIES_MAX = {
	"sm": `(max-width: ${BREAKPOINTS.sm}px)`,
	"md": `(max-width: ${BREAKPOINTS.md}px)`,
	"lg": `(max-width: ${BREAKPOINTS.lg}px)`,
	"xl": `(max-width: ${BREAKPOINTS.xl}px)`,
	"2xl": `(max-width: ${BREAKPOINTS["2xl"]}px)`
};
/** Generic min/max map — keyed by media query type. */
const MEDIA_QUERIES = {
	min: Object.fromEntries(Object.entries(BREAKPOINTS).map(([k, v]) => [k, toMediaMinWidth(v)])),
	max: Object.fromEntries(Object.entries(BREAKPOINTS).map(([k, v]) => [k, toMediaMaxWidth(v)]))
};
//#endregion
export { MEDIA_QUERIES, QUERIES_MAX, QUERIES_MIN };

//# sourceMappingURL=viewport.queries.js.map