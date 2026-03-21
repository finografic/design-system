import { CalloutVariants } from "./callout.types.js";
import * as react from "react";
import { HTMLAttributes } from "react";

//#region src/components/callout/callout.d.ts
type CalloutProps = CalloutVariants & HTMLAttributes<HTMLDivElement>;
declare const Callout: react.ForwardRefExoticComponent<{
  status?: "success" | "warning" | "info" | "error" | undefined;
} & HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Callout, CalloutProps };
//# sourceMappingURL=callout.d.ts.map