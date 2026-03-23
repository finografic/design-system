import { TextElement, TextVariants } from "./text.recipe.js";
import { HTMLAttributes } from "react";
import * as react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/text/text.d.ts
type TextProps = TextVariants & HTMLAttributes<HTMLElement> & {
  as?: TextElement;
};
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