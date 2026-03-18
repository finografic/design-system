import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/grid/Col.tsx
const Col = forwardRef(({ xs, sm, md, lg, xl, xxl, "2xl": xxl2, className, ...props }, ref) => {
	const xxlValue = xxl ?? xxl2;
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: [
			"ds-col",
			xs != null && `ds-col-xs-${xs}`,
			sm != null && `ds-col-sm-${sm}`,
			md != null && `ds-col-md-${md}`,
			lg != null && `ds-col-lg-${lg}`,
			xl != null && `ds-col-xl-${xl}`,
			xxlValue != null && `ds-col-xxl-${xxlValue}`,
			className
		].filter(Boolean).join(" "),
		...props
	});
});
Col.displayName = "Col";
//#endregion
export { Col };

//# sourceMappingURL=Col.js.map