import { TextElement, TextVariants } from "./text.recipe.js";
import { HTMLAttributes } from "react";
import * as react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/text/text.d.ts
type TextProps = TextVariants & HTMLAttributes<HTMLElement> & {
  as?: TextElement;
};
/**
 * **Text** — semantic text element with variant-based typography scale.
 *
 * Renders the appropriate HTML tag for each variant by default (e.g. `h1–h6`,
 * `p`, `span`) — override with `as` when needed.
 *
 * @example
 * ```tsx
 * import { Text } from '@finografic/design-system/components';
 *
 * <Text variant="h2">Section heading</Text>
 * <Text variant="body-sm" color="muted">Supporting copy</Text>
 * <Text variant="overline" as="div">Category label</Text>
 * ```
 */
declare function Text({
  as,
  variant,
  color,
  truncate,
  className,
  children,
  ...props
}: TextProps): react_jsx_runtime0.JSX.Element;
//#endregion
export { Text, TextProps };
//# sourceMappingURL=text.d.ts.map