import * as react from "react";
import { ComponentPropsWithoutRef } from "react";

//#region src/grid/Col.d.ts
type ColSpan = number | 'content';
interface ColProps extends ComponentPropsWithoutRef<'div'> {
  'xs'?: ColSpan;
  'sm'?: ColSpan;
  'md'?: ColSpan;
  'lg'?: ColSpan;
  'xl'?: ColSpan;
  'xxl'?: ColSpan;
  '2xl'?: ColSpan;
}
declare const Col: react.ForwardRefExoticComponent<ColProps & react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Col, type ColProps };
//# sourceMappingURL=Col.d.ts.map