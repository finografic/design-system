import { BREAKPOINTS } from "./viewport.breakpoints.js";
//#region src/viewport/viewport.emotion.ts
const sizes = Object.keys(BREAKPOINTS);
const min = Object.fromEntries(Object.entries(BREAKPOINTS).map(([k, v]) => [k, `@media (min-width: ${v}px)`]));
const max = Object.fromEntries(Object.entries(BREAKPOINTS).map(([k, v]) => [k, `@media (max-width: ${v}px)`]));
//#endregion
export { max, min, sizes };

//# sourceMappingURL=viewport.emotion.js.map