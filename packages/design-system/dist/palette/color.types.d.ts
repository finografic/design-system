//#region src/palette/color.types.d.ts
type ColorName = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'default' | 'grey' | 'text';
type ColorShade = 'xxxlight' | 'xxlight' | 'xlight' | 'lighter' | 'light' | 'DEFAULT' | 'dark' | 'darker' | 'xdark' | 'xxdark' | 'xxxdark';
type OKLCH = `oklch(${number}% ${number} ${number})` | `oklch(${number} ${number} ${number} / ${number | `${number}%`})`;
//#endregion
export { ColorName, ColorShade, OKLCH };
//# sourceMappingURL=color.types.d.ts.map