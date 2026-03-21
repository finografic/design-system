import { SelectDefaultProps } from "./select-default.types.js";
import * as react from "react";

//#region src/forms/select-default/select-default.d.ts
/**
 * SelectDefault — pre-composed Select with a simple `options[]` API.
 *
 * Accepts a flat array of `SelectOption` objects instead of requiring a
 * Panda collection. Uses the full `selectRecipe` for styling.
 *
 * For full composition control use `Select.*` parts directly.
 */
declare const SelectDefault: react.ForwardRefExoticComponent<SelectDefaultProps & react.RefAttributes<HTMLButtonElement>>;
//#endregion
export { SelectDefault };
//# sourceMappingURL=select-default.d.ts.map