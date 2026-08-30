import { BadgeVariants } from "./badge.recipe.js";
import { HTMLAttributes } from "react";
//#region src/components/badge/badge.d.ts
type BadgeProps = BadgeVariants & HTMLAttributes<HTMLSpanElement>;
declare const Badge: import("react").ForwardRefExoticComponent<{
  size?: "lg" | "md" | "sm" | undefined;
  variant?: "outline" | "soft" | "solid" | undefined;
  palette?: "danger" | "info" | "neutral" | "primary" | "success" | "warning" | undefined;
} & HTMLAttributes<HTMLSpanElement> & import("react").RefAttributes<HTMLSpanElement>>;
//#endregion
export { Badge, BadgeProps };
//# sourceMappingURL=badge.d.ts.map