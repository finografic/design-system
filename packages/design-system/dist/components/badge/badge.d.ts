import { BadgeVariants } from "./badge.recipe.js";
import * as react from "react";
import { HTMLAttributes } from "react";

//#region src/components/badge/badge.d.ts
type BadgeProps = BadgeVariants & HTMLAttributes<HTMLSpanElement>;
declare const Badge: react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
  variant?: "outline" | "solid" | "soft" | undefined;
  palette?: "primary" | "success" | "warning" | "danger" | "info" | "neutral" | undefined;
} & HTMLAttributes<HTMLSpanElement> & react.RefAttributes<HTMLSpanElement>>;
//#endregion
export { Badge, BadgeProps };
//# sourceMappingURL=badge.d.ts.map