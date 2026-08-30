import { LabelVariants } from "./label.recipe.js";
import { LabelHTMLAttributes } from "react";
//#region src/forms/label/label.d.ts
type LabelProps = LabelVariants & LabelHTMLAttributes<HTMLLabelElement>;
declare const Label: import("react").ForwardRefExoticComponent<{
  size?: "lg" | "md" | "sm" | undefined;
} & LabelHTMLAttributes<HTMLLabelElement> & import("react").RefAttributes<HTMLLabelElement>>;
//#endregion
export { Label, LabelProps };
//# sourceMappingURL=label.d.ts.map