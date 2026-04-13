import { toEmNumeric, toPixelString, toRemNumeric } from "./viewport.utils.js";
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
/** All breakpoint values excluding xs=0, useful for loop-based queries. */
const BREAKPOINT_VALUES = Object.values(BREAKPOINTS).slice(1);
/** Pixel strings — e.g. `{ sm: '640px', ... }`. Used by Panda CSS config. */
const BREAKPOINTS_PX = mapBreakpoints(toPixelString);
/** Rem values — e.g. `{ sm: 32.5, ... }`. */
const BREAKPOINTS_REM = mapBreakpoints(toRemNumeric);
/** Em values — same scale as REM in this context. */
const BREAKPOINTS_EM = mapBreakpoints(toEmNumeric);
//#endregion
export { BREAKPOINTS, BREAKPOINTS_EM, BREAKPOINTS_PX, BREAKPOINTS_REM, BREAKPOINT_VALUES };

//# sourceMappingURL=viewport.breakpoints.js.map