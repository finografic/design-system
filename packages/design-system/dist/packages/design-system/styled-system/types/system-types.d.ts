import { Globals, PropertiesFallback } from "./csstype.js";
import { Nested } from "./conditions.js";
import { CssVarProperties, SystemProperties } from "./style-props.js";
//#region styled-system/types/system-types.d.ts
type String = string & {};
type Number = number & {};
type Pretty<T> = { [K in keyof T]: T[K]; } & {};
type DistributiveOmit<T, K extends keyof any> = T extends unknown ? Omit<T, K> : never;
/* -----------------------------------------------------------------------------
 * Native css properties
 * -----------------------------------------------------------------------------*/
type CornerShapeValue = 'round' | 'square' | 'bevel' | 'scoop' | 'notch' | 'squircle' | `superellipse(${number})`;
interface ModernCssProperties {
  /**
   * Controls whether the entire element should be draggable instead of its contents.
   */
  WebkitUserDrag?: Globals | 'auto' | 'element' | 'none';
  /**
   * Specifies whether an element can be used to drag the entire app window (Electron).
   */
  WebkitAppRegion?: Globals | 'drag' | 'no-drag';
  /**
   * Sets the horizontal spacing between table borders.
   */
  WebkitBorderHorizontalSpacing?: Globals | String | Number;
  /**
   * Sets the vertical spacing between table borders.
   */
  WebkitBorderVerticalSpacing?: Globals | String | Number;
  /**
   * Controls the display of text content for security purposes (e.g., password fields).
   */
  WebkitTextSecurity?: Globals | 'none' | 'circle' | 'disc' | 'square';
  /**
   * Specifies the shape of a box's corners within the area defined by the border-radius property.
   * @experimental
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/corner-shape
   */
  cornerShape?: Globals | CornerShapeValue | `${CornerShapeValue} ${CornerShapeValue}` | `${CornerShapeValue} ${CornerShapeValue} ${CornerShapeValue}` | `${CornerShapeValue} ${CornerShapeValue} ${CornerShapeValue} ${CornerShapeValue}` | String;
}
type CssProperty = keyof PropertiesFallback;
interface CssProperties extends PropertiesFallback<String | Number>, CssVarProperties, ModernCssProperties {}
type SystemStyleObject = Omit<Nested<SystemProperties & CssVarProperties>, 'base'>;
interface GlobalStyleObject {
  [selector: string]: SystemStyleObject;
}
/* -----------------------------------------------------------------------------
 * Composition (text styles, layer styles)
 * -----------------------------------------------------------------------------*/
type FilterStyleObject<P extends string> = { [K in P]?: K extends keyof SystemStyleObject ? SystemStyleObject[K] : unknown; };
type CompositionStyleObject<Property extends string> = Nested<FilterStyleObject<Property> & CssVarProperties>;
//#endregion
export { CompositionStyleObject, CssProperties, CssProperty, DistributiveOmit, GlobalStyleObject, ModernCssProperties, Pretty, SystemStyleObject };
//# sourceMappingURL=system-types.d.ts.map