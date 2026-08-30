import { LucideProps } from "lucide-react";
import React from "react";
//#region src/icons.utils.d.ts
/** Lucide-compatible icon props plus DS `data-*` attributes. */
type IconProps = LucideProps & {
  /** Stroke color shorthand — same as [lucide-react `color`](https://lucide.dev/guide/react/basics/color). */
  color?: string;
  [key: `data-${string}`]: string | undefined;
};
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
declare const createIconWrapper: (IconComponent: React.ComponentType<IconProps>, exportName?: string) => React.ForwardRefExoticComponent<Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
//#endregion
export { IconProps, createIconWrapper };
//# sourceMappingURL=icons.utils.d.ts.map