import React, { forwardRef } from "react";
//#region src/icons.utils.ts
/**
* Convert PascalCase export name to kebab-case icon identifier.
* e.g. 'ChevronDownIcon' → 'chevron-down'
*/
function toIconName(exportName) {
	return exportName.replace(/Icon$/, "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
/** Inline overrides so explicit Lucide props win over global `.icon` CSS (width/height/stroke). */
function mergeLucideStyle(size, color, style) {
	if (size == null && color == null && style == null) return void 0;
	const merged = { ...style };
	if (size != null) {
		const dimension = typeof size === "number" ? `${size}px` : size;
		merged.width = dimension;
		merged.height = dimension;
	}
	if (color != null) {
		merged.color = color;
		merged.stroke = color;
	}
	return merged;
}
/**
* Wraps a Lucide (or any SVG) component with:
* - `.icon` class  (picks up global icon sizing from global.css)
* - `.icon-name--{kebab}` class  (useful for CSS targeting / debugging)
* - `data-icon-name` attribute
* - Lucide `size`, `color`, and `strokeWidth` props (typed + forwarded)
* - forwarded ref + displayName
*
* No external deps — className merge is done inline.
*/
const createIconWrapper = (IconComponent, exportName) => {
	const iconName = exportName ? toIconName(exportName) : "unknown";
	const WrappedIcon = forwardRef(({ className, size, color, strokeWidth, absoluteStrokeWidth, style, ...props }, ref) => {
		const cls = [
			"icon",
			`icon-name--${iconName}`,
			className
		].filter(Boolean).join(" ");
		return React.createElement(IconComponent, {
			ref,
			"className": cls,
			"data-icon-name": iconName,
			size,
			color,
			strokeWidth,
			absoluteStrokeWidth,
			"style": mergeLucideStyle(size, color, style),
			...props
		});
	});
	WrappedIcon.displayName = `Icon(${exportName ?? IconComponent.displayName ?? IconComponent.name ?? "Unknown"})`;
	return WrappedIcon;
};
//#endregion
export { createIconWrapper };

//# sourceMappingURL=icons.utils.js.map