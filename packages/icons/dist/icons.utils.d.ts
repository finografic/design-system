import React from "react";

//#region src/icons.utils.d.ts
type IconProps = React.SVGProps<SVGSVGElement> & {
  [key: `data-${string}`]: string | undefined;
};
/**
 * Wraps a Lucide (or any SVG) component with:
 *  - `.icon` class  (picks up global icon sizing from global.css)
 *  - `.icon-name--{kebab}` class  (useful for CSS targeting / debugging)
 *  - `data-icon-name` attribute
 *  - forwarded ref + displayName
 *
 * No external deps — className merge is done inline.
 */
declare const createIconWrapper: (IconComponent: React.ComponentType<IconProps>, exportName?: string) => React.ForwardRefExoticComponent<Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
//#endregion
export { IconProps, createIconWrapper };
//# sourceMappingURL=icons.utils.d.ts.map