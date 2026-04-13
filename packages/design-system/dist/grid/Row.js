import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx } from "react/jsx-runtime";
//#region src/grid/Row.tsx
/**
* **Row** — flex row that houses `Col` components in the 12-column grid.
*
* Layout props (`align`, `justify`, `direction`, `wrap`) map to `data-*` attributes consumed by `grid.css`.
* Use `nogutter` to strip the column padding, or `gutterWidth` to set a custom gutter via CSS custom
* property.
*
* @example
*   ```tsx
*   import { Row, Col } from '@finografic/design-system/grid';
*
*   <Row justify="space-between" align="center">
*     <Col md={8}>Main content</Col>
*     <Col md={4}>Sidebar</Col>
*   </Row>;
*   ```;
*/
const Row = forwardRef(({ align, justify, direction, wrap, nogutter, gutterWidth, className, style, ...props }, ref) => {
	const combinedStyle = gutterWidth != null ? {
		"--ds-grid-gutter": `${gutterWidth}px`,
		...style
	} : style ?? {};
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: cx("ds-row", className),
		"data-align": align,
		"data-justify": justify,
		"data-direction": direction,
		"data-wrap": wrap,
		"data-nogutter": nogutter || void 0,
		style: combinedStyle,
		...props
	});
});
Row.displayName = "Row";
//#endregion
export { Row };

//# sourceMappingURL=Row.js.map