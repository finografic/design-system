import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/grid/Container.tsx
const Container = forwardRef(({ fluid, className, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	className: ["ds-container", className].filter(Boolean).join(" "),
	"data-fluid": fluid || void 0,
	...props
}));
Container.displayName = "Container";
//#endregion
export { Container };

//# sourceMappingURL=Container.js.map