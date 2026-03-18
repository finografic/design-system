//#region src/tokens/spacing.tokens.d.ts
declare const spacingTokens: {
  '0': {
    value: string;
  };
  px: {
    value: string;
  };
  '0.5': {
    value: string;
  };
  '1': {
    value: string;
  };
  '1.5': {
    value: string;
  };
  '2': {
    value: string;
  };
  '3': {
    value: string;
  };
  '4': {
    value: string;
  };
  '5': {
    value: string;
  };
  '6': {
    value: string;
  };
  '7': {
    value: string;
  };
  '8': {
    value: string;
  };
  '9': {
    value: string;
  };
  '10': {
    value: string;
  };
  '12': {
    value: string;
  };
  '16': {
    value: string;
  };
  '20': {
    value: string;
  };
  '24': {
    value: string;
  };
};
/**
 * Z-index scale for layered UI elements.
 * Keys are referenced as strings in recipes and css() calls:
 *   zIndex: 'modal', zIndex: 'tooltip'
 *
 * Values use a spaced numeric scale to allow insertion without
 * renumbering (e.g. a new layer between overlay and modal).
 *
 * @example
 * // In recipe: zIndex: 'tooltip' → z-index: 1800
 * // In css():  zIndex: 'overlay' → z-index: 1300
 */
declare const zIndexTokens: {
  hide: {
    value: number;
  };
  base: {
    value: number;
  };
  docked: {
    value: number;
  };
  dropdown: {
    value: number;
  };
  sticky: {
    value: number;
  };
  banner: {
    value: number;
  };
  overlay: {
    value: number;
  };
  modal: {
    value: number;
  };
  popover: {
    value: number;
  };
  toast: {
    value: number;
  };
  tooltip: {
    value: number;
  };
};
//#endregion
export { spacingTokens, zIndexTokens };
//# sourceMappingURL=spacing.tokens.d.ts.map