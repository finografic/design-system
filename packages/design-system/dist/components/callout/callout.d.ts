import { CalloutVariants } from "./callout.recipe.js";
import { HTMLAttributes } from "react";
//#region src/components/callout/callout.d.ts
type CalloutProps = CalloutVariants & HTMLAttributes<HTMLDivElement>;
/**
 * **Callout** — inline status message with coloured border and background.
 *
 * @example
 *   ```tsx
 *   import { Callout } from '@finografic/design-system/components';
 *
 *   <Callout status="warning">Please review your settings before continuing.</Callout>;
 *   ```;
 */
declare const Callout: import("react").ForwardRefExoticComponent<{
  status?: "error" | "info" | "success" | "warning" | undefined;
} & HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
//#endregion
export { Callout, CalloutProps };
//# sourceMappingURL=callout.d.ts.map