//#region src/types/palette.types.d.ts
type ColorName = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'default' | 'grey' | 'text';
type Percentage = `${number}%`;
type NumberLike = `${number}` | number;
type OKLCH = `oklch(${Percentage} ${NumberLike} ${NumberLike})` | `oklch(${Percentage} ${NumberLike} ${NumberLike} / ${NumberLike | Percentage})`;
type ShadeScale = 'xxxlight' | 'xxlight' | 'xlight' | 'lighter' | 'light' | 'base' | 'dark' | 'darker' | 'xdark' | 'xxdark' | 'xxxdark';
//#endregion
export { ColorName, OKLCH, ShadeScale };
//# sourceMappingURL=palette.types.d.ts.map