//#region src/tokens/decorative.tokens.d.ts
declare const radiiTokens: {
  none: {
    value: string;
  };
  xs: {
    value: string;
  };
  sm: {
    value: string;
  };
  md: {
    value: string;
  };
  lg: {
    value: string;
  };
  xl: {
    value: string;
  };
  '2xl': {
    value: string;
  };
  full: {
    value: string;
  };
};
/**
 * Border width tokens for Panda CSS.
 * Keys: 'none' | 'light' | 'default' | 'heavy'
 * Used in recipes as: borderWidth: 'default', borderWidth: 'light'
 *
 * @example
 * // In recipe: borderWidth: 'default' → border-width: 2px
 * // In recipe: borderWidth: 'light' → border-width: 1px
 */
declare const borderWidthTokens: {
  none: {
    value: string;
  };
  light: {
    value: string;
  };
  default: {
    value: string;
  };
  heavy: {
    value: string;
  };
};
/**
 * Box shadow tokens for Panda CSS.
 * Keys: 'base.sm' | 'base.md' | 'base.lg'
 * Used in recipes as: boxShadow: 'md', shadow: 'sm'
 *
 * Note: Semantic shadow tokens (with light/dark variants) are defined
 * in panda.preset.ts under semanticTokens.shadows.
 *
 * @example
 * // In recipe: boxShadow: 'md' → box-shadow: <elevation shadow>
 */
declare const shadowTokens: {
  base: {
    sm: {
      value: string;
    };
    md: {
      value: string;
    };
    lg: {
      value: string;
    };
  };
};
//#endregion
export { borderWidthTokens, radiiTokens, shadowTokens };
//# sourceMappingURL=decorative.tokens.d.ts.map