import { CardVariants } from "./card.recipe.js";
import * as react from "react";
import { HTMLAttributes } from "react";

//#region src/components/card/card.d.ts
type CardProps = CardVariants & HTMLAttributes<HTMLDivElement>;
declare const Card: react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
  variant?: "elevated" | "outlined" | undefined;
} & HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Card, CardProps };
//# sourceMappingURL=card.d.ts.map