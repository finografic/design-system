import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx } from "react/jsx-runtime";
//#region src/grid/Container.tsx
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
const Container = forwardRef(({ fluid, className, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	className: cx("ds-container", className),
	"data-fluid": fluid || void 0,
	...props
}));
Container.displayName = "Container";
//#endregion
export { Container };

//# sourceMappingURL=Container.js.map