import { BadgeVariants } from "./badge.recipe.js";
import * as _$react from "react";
import { HTMLAttributes } from "react";

//#region src/components/badge/badge.d.ts
type BadgeProps = BadgeVariants & HTMLAttributes<HTMLSpanElement>;
declare const Badge: _$react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
  variant?: "outline" | "solid" | "soft" | undefined;
  palette?: "primary" | "success" | "warning" | "danger" | "info" | "neutral" | undefined;
} & HTMLAttributes<HTMLSpanElement> & _$react.RefAttributes<HTMLSpanElement>>;
//#endregion
export { Badge, BadgeProps };
//# sourceMappingURL=badge.d.ts.map