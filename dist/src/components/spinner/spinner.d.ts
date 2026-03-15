import * as react from "react";
import { ComponentPropsWithoutRef } from "react";

//#region src/components/spinner/spinner.d.ts
interface SpinnerProps extends ComponentPropsWithoutRef<'svg'> {
  /** Icon size in px. Default: 20 */
  size?: number;
}
declare const Spinner: react.ForwardRefExoticComponent<SpinnerProps & react.RefAttributes<SVGSVGElement>>;
//#endregion
export { Spinner, type SpinnerProps };
//# sourceMappingURL=spinner.d.ts.map