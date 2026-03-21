import { BreakpointMap, ScreenClass } from "./viewport.types.js";

//#region src/viewport/viewport.queries.d.ts
/** Min-width media query strings for each breakpoint (no `@media` wrapper). */
declare const QUERIES_MIN: Record<ScreenClass, string>;
/** Max-width media query strings for each breakpoint (no `@media` wrapper). */
declare const QUERIES_MAX: Omit<Record<ScreenClass, string>, 'xs'>;
/** Generic min/max map — keyed by media query type. */
declare const MEDIA_QUERIES: {
  min: Partial<BreakpointMap<string>>;
  max: Partial<BreakpointMap<string>>;
};
//#endregion
export { MEDIA_QUERIES, QUERIES_MAX, QUERIES_MIN };
//# sourceMappingURL=viewport.queries.d.ts.map