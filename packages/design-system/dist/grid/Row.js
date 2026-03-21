import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/grid/Row.tsx
const Row = forwardRef(({ align, justify, direction, wrap, nogutter, gutterWidth, className, style, ...props }, ref) => {
	const combinedStyle = gutterWidth != null ? {
		"--ds-grid-gutter": `${gutterWidth}px`,
		...style
	} : style ?? {};
	return /* @__PURE__ */ jsx("div", {
		ref,
		"data-component": "___ROW___",
		className: ["ds-row", className].filter(Boolean).join(" "),
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