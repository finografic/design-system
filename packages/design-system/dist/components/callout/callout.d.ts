import { CalloutVariants } from "./callout.recipe.js";
import * as react from "react";
import { HTMLAttributes } from "react";

//#region src/components/callout/callout.d.ts
type CalloutProps = CalloutVariants & HTMLAttributes<HTMLDivElement>;
/**
 * **Callout** — inline status message with coloured border and background.
 *
 * @example
 * ```tsx
 * import { Callout } from '@finografic/design-system/components';
 *
 * <Callout status="warning">
 *   Please review your settings before continuing.
 * </Callout>
 * ```
 */
declare const Callout: react.ForwardRefExoticComponent<{
  status?: "success" | "warning" | "info" | "error" | undefined;
} & HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Callout, CalloutProps };
//# sourceMappingURL=callout.d.ts.map