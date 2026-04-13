//#region src/viewport/viewport.types.d.ts
type ScreenClass = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type BreakpointMap<T> = { [key in ScreenClass]?: T };
interface MediaQueryProps {
  query: string;
  props: unknown;
}
interface BreakpointDefaults extends BreakpointMap<number> {
  'xs'?: number;
  'sm': number;
  'md': number;
  'lg': number;
  'xl': number;
  '2xl'?: number;
}
type MediaQueryType = 'min' | 'max';
type MediaQueryMap = { [key in MediaQueryType]: Partial<BreakpointMap<number>> };
interface ColumnSizes extends BreakpointMap<number> {}
//#endregion
export { BreakpointDefaults, BreakpointMap, ColumnSizes, MediaQueryMap, MediaQueryProps, ScreenClass };
//# sourceMappingURL=viewport.types.d.ts.map