import * as react from "react";
import { ComponentPropsWithoutRef } from "react";

//#region src/grid/Row.d.ts
interface RowProps extends ComponentPropsWithoutRef<'div'> {
  /** Cross-axis alignment of child columns. */
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  /** Main-axis distribution of child columns. */
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  /** Flex direction override. Defaults to `'row'`. */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /** Controls column wrapping behaviour. */
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  /** When true, removes the horizontal column gutters. */
  nogutter?: boolean;
  /** Override the gutter width in pixels via the `--ds-grid-gutter` CSS custom property. */
  gutterWidth?: number;
}
/**
 * **Row** — flex row that houses `Col` components in the 12-column grid.
 *
 * Layout props (`align`, `justify`, `direction`, `wrap`) map to `data-*`
 * attributes consumed by `grid.css`. Use `nogutter` to strip the column
 * padding, or `gutterWidth` to set a custom gutter via CSS custom property.
 *
 * @example
 * ```tsx
 * import { Row, Col } from '@finografic/design-system/grid';
 *
 * <Row justify="space-between" align="center">
 *   <Col md={8}>Main content</Col>
 *   <Col md={4}>Sidebar</Col>
 * </Row>
 * ```
 */
declare const Row: react.ForwardRefExoticComponent<RowProps & react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Row, type RowProps };
//# sourceMappingURL=Row.d.ts.map