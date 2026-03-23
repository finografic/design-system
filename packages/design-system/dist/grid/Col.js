import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx } from "react/jsx-runtime";
//#region src/grid/Col.tsx
/**
* **Col** — responsive column inside a `Row`.
*
* Pass breakpoint props to control the column span at each viewport width.
* Omitting a breakpoint inherits the previous breakpoint's span (mobile-first).
* Use `'content'` to size the column to its natural width.
*
* @example
* ```tsx
* import { Row, Col } from '@finografic/design-system/grid';
*
* <Row>
*   <Col xs={12} md={8}>Main</Col>
*   <Col xs={12} md={4}>Aside</Col>
* </Row>
* ```
*/
const Col = forwardRef(({ xs, sm, md, lg, xl, xxl, "2xl": xxl2, className, ...props }, ref) => {
	const xxlValue = xxl ?? xxl2;
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: cx("ds-col", xs != null && `ds-col-xs-${xs}`, sm != null && `ds-col-sm-${sm}`, md != null && `ds-col-md-${md}`, lg != null && `ds-col-lg-${lg}`, xl != null && `ds-col-xl-${xl}`, xxlValue != null && `ds-col-xxl-${xxlValue}`, className),
		...props
	});
});
Col.displayName = "Col";
//#endregion
export { Col };

//# sourceMappingURL=Col.js.map