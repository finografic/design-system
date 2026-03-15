import { ScreenClass } from "./viewport.types.js";

//#region src/viewport/viewport.breakpoints.d.ts
declare const BREAKPOINTS: Record<ScreenClass, number>;
type BpRecord<T> = Record<ScreenClass, T>;
/** All breakpoint values excluding xs=0, useful for loop-based queries. */
declare const BREAKPOINT_VALUES: number[];
/** Pixel strings — e.g. `{ sm: '640px', ... }`. Used by Panda CSS config. */
declare const BREAKPOINTS_PX: BpRecord<string>;
/** Rem values — e.g. `{ sm: 32.5, ... }`. */
declare const BREAKPOINTS_REM: BpRecord<number>;
/** Em values — same scale as REM in this context. */
declare const BREAKPOINTS_EM: BpRecord<number>;
//#endregion
export { BREAKPOINTS, BREAKPOINTS_EM, BREAKPOINTS_PX, BREAKPOINTS_REM, BREAKPOINT_VALUES };
//# sourceMappingURL=viewport.breakpoints.d.ts.map