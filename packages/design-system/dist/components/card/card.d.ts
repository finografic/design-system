import { CardVariants } from "./card.recipe.js";
import * as react from "react";
import { HTMLAttributes } from "react";

//#region src/components/card/card.d.ts
type CardProps = CardVariants & HTMLAttributes<HTMLDivElement>;
/**
 * **Card** — surface container with border, background, and optional elevation.
 *
 * @example
 * ```tsx
 * import { Card } from '@finografic/design-system/components';
 *
 * <Card size="md" variant="elevated">
 *   <h3>Card title</h3>
 *   <p>Card content goes here.</p>
 * </Card>
 * ```
 */
declare const Card: react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
  variant?: "elevated" | "outlined" | undefined;
} & HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Card, CardProps };
//# sourceMappingURL=card.d.ts.map