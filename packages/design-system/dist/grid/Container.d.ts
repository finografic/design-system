import * as _$react from "react";
import { ComponentPropsWithoutRef } from "react";

//#region src/grid/Container.d.ts
interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  /** When true, removes the max-width constraint — container spans the full viewport width. */
  fluid?: boolean;
}
/**
 * **Container** — centred layout wrapper with a max-width breakpoint.
 *
 * Add `fluid` to disable the max-width and span the full viewport. Pairs with `Row` and `Col` for a 12-column
 * grid layout.
 *
 * @example
 *   ```tsx
 *   import { Container, Row, Col } from '@finografic/design-system/grid';
 *
 *   <Container>
 *     <Row>
 *       <Col md={6}>Left</Col>
 *       <Col md={6}>Right</Col>
 *     </Row>
 *   </Container>;
 *   ```;
 */
declare const Container: _$react.ForwardRefExoticComponent<ContainerProps & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Container, type ContainerProps };
//# sourceMappingURL=Container.d.ts.map