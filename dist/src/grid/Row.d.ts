import * as react from "react";
import { ComponentPropsWithoutRef } from "react";

//#region src/grid/Row.d.ts
interface RowProps extends ComponentPropsWithoutRef<'div'> {
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  nogutter?: boolean;
  gutterWidth?: number;
}
declare const Row: react.ForwardRefExoticComponent<RowProps & react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Row, type RowProps };
//# sourceMappingURL=Row.d.ts.map