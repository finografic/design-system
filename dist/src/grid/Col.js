import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/grid/Col.tsx
const Col = forwardRef(({ xs, sm, md, lg, xl, xxl, className, ...props }, ref) => {
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: [
			"ds-col",
			xs != null && `ds-col-xs-${xs}`,
			sm != null && `ds-col-sm-${sm}`,
			md != null && `ds-col-md-${md}`,
			lg != null && `ds-col-lg-${lg}`,
			xl != null && `ds-col-xl-${xl}`,
			xxl != null && `ds-col-xxl-${xxl}`,
			className
		].filter(Boolean).join(" "),
		...props
	});
});
Col.displayName = "Col";
//#endregion
export { Col };

//# sourceMappingURL=Col.js.map