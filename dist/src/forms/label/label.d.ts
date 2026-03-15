import { LabelVariants } from "./label.types.js";
import * as react from "react";
import { LabelHTMLAttributes } from "react";

//#region src/forms/label/label.d.ts
type LabelProps = LabelVariants & LabelHTMLAttributes<HTMLLabelElement>;
declare const Label: react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
} & LabelHTMLAttributes<HTMLLabelElement> & react.RefAttributes<HTMLLabelElement>>;
//#endregion
export { Label, LabelProps };
//# sourceMappingURL=label.d.ts.map