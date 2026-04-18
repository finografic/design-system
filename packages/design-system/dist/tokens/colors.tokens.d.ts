import { ColorName, OKLCH, ShadeScale } from "../types/palette.types.js";

//#region src/tokens/colors.tokens.d.ts
/**
 * Color tokens for Panda CSS. Keys are referenced as strings in recipes: bg: 'primary', color: 'danger.dark',
 * borderColor: 'grey.lighter'
 *
 * Each color group has 11 shade stops: base + 5 lighter + 5 darker. Values use OKLCH color space for
 * perceptually uniform gradients.
 *
 * @example
 *   // In recipe: bg: 'primary' → background: oklch(48.8% 0.243 264.376)
 *   // In recipe: color: 'danger.dark' → color: <computed dark shade>
 */
declare const colorTokens: {
  readonly primary: Record<ShadeScale | "DEFAULT", {
    value: string;
  }>;
  readonly secondary: Record<ShadeScale | "DEFAULT", {
    value: string;
  }>;
  readonly success: Record<ShadeScale | "DEFAULT", {
    value: string;
  }>;
  readonly warning: Record<ShadeScale | "DEFAULT", {
    value: string;
  }>;
  readonly danger: Record<ShadeScale | "DEFAULT", {
    value: string;
  }>;
  readonly info: Record<ShadeScale | "DEFAULT", {
    value: string;
  }>;
  readonly grey: Record<ShadeScale | "DEFAULT", {
    value: string;
  }>;
  readonly neutral: Record<ShadeScale | "DEFAULT", {
    value: string;
  }>;
  readonly white: {
    readonly value: "#ffffff";
  };
  readonly black: {
    readonly value: "#000000";
  };
  readonly transparent: {
    readonly value: "transparent";
  };
};
/**
 * Semantic tokens — role-based color aliases. These define what colors MEAN in context, not what they ARE.
 *
 * References like `{colors.grey.xlight}` resolve at build time to the underlying color-mix(in oklch, …) value
 * — OKLCH throughout.
 *
 * Maps to the Ark UI blog's token structure: bg, fg, border, accent — with light/dark mode conditions.
 */
declare const semanticColorTokens: {
  readonly bg: {
    readonly DEFAULT: {
      readonly value: {
        readonly base: "{colors.white}";
        readonly _dark: "{colors.black}";
      };
    };
    readonly subtle: {
      readonly value: {
        readonly base: "{colors.grey.xlight}";
        readonly _dark: "oklch(15% 0.01 285)";
      };
    };
    readonly muted: {
      readonly value: {
        readonly base: "{colors.grey.lighter}";
        readonly _dark: "oklch(20% 0.01 285)";
      };
    };
    readonly emphasized: {
      readonly value: {
        readonly base: "{colors.grey.light}";
        readonly _dark: "oklch(25% 0.01 285)";
      };
    };
    readonly inverted: {
      readonly value: {
        readonly base: "{colors.black}";
        readonly _dark: "{colors.white}";
      };
    };
    readonly surface: {
      readonly value: {
        readonly base: "{colors.white}";
        readonly _dark: "oklch(14% 0.01 285)";
      };
    };
    readonly panel: {
      readonly value: {
        readonly base: "{colors.white}";
        readonly _dark: "oklch(12% 0.01 285)";
      };
    };
    readonly error: {
      readonly value: {
        readonly base: "{colors.danger.xlight}";
        readonly _dark: "oklch(20% 0.08 27)";
      };
    };
    readonly warning: {
      readonly value: {
        readonly base: "{colors.warning.xlight}";
        readonly _dark: "oklch(20% 0.06 70)";
      };
    };
    readonly success: {
      readonly value: {
        readonly base: "{colors.success.xlight}";
        readonly _dark: "oklch(20% 0.06 149)";
      };
    };
    readonly info: {
      readonly value: {
        readonly base: "{colors.info.xlight}";
        readonly _dark: "oklch(20% 0.05 242)";
      };
    };
  };
  readonly fg: {
    readonly DEFAULT: {
      readonly value: {
        readonly base: OKLCH;
        readonly _dark: "oklch(93% 0 0)";
      };
    };
    readonly muted: {
      readonly value: {
        readonly base: "oklch(40% 0.01 285)";
        readonly _dark: "oklch(65% 0.01 285)";
      };
    };
    readonly subtle: {
      readonly value: {
        readonly base: "{colors.grey}";
        readonly _dark: "oklch(55% 0.01 285)";
      };
    };
    readonly inverted: {
      readonly value: {
        readonly base: "{colors.white}";
        readonly _dark: "{colors.black}";
      };
    };
    readonly error: {
      readonly value: {
        readonly base: "{colors.danger}";
        readonly _dark: "{colors.danger.light}";
      };
    };
    readonly warning: {
      readonly value: {
        readonly base: "{colors.warning.dark}";
        readonly _dark: "{colors.warning}";
      };
    };
    readonly success: {
      readonly value: {
        readonly base: "{colors.success.dark}";
        readonly _dark: "{colors.success}";
      };
    };
    readonly info: {
      readonly value: {
        readonly base: "{colors.info.dark}";
        readonly _dark: "{colors.info}";
      };
    };
  };
  readonly border: {
    readonly DEFAULT: {
      readonly value: {
        readonly base: "{colors.grey.lighter}";
        readonly _dark: "oklch(30% 0.01 285)";
      };
    };
    readonly muted: {
      readonly value: {
        readonly base: "{colors.grey.xlight}";
        readonly _dark: "oklch(25% 0.01 285)";
      };
    };
    readonly subtle: {
      readonly value: {
        readonly base: "{colors.grey.xlight}";
        readonly _dark: "oklch(20% 0.01 285)";
      };
    };
    readonly emphasized: {
      readonly value: {
        readonly base: "{colors.grey.light}";
        readonly _dark: "oklch(40% 0.01 285)";
      };
    };
    readonly inverted: {
      readonly value: {
        readonly base: OKLCH;
        readonly _dark: "oklch(90% 0 0)";
      };
    };
    readonly error: {
      readonly value: {
        readonly base: "{colors.danger}";
        readonly _dark: "{colors.danger.light}";
      };
    };
    readonly warning: {
      readonly value: {
        readonly base: "{colors.warning}";
        readonly _dark: "{colors.warning.light}";
      };
    };
    readonly success: {
      readonly value: {
        readonly base: "{colors.success}";
        readonly _dark: "{colors.success.light}";
      };
    };
    readonly info: {
      readonly value: {
        readonly base: "{colors.info}";
        readonly _dark: "{colors.info.light}";
      };
    };
  };
  readonly accent: {
    readonly DEFAULT: {
      readonly value: {
        readonly base: "{colors.primary}";
        readonly _dark: "{colors.primary.light}";
      };
    };
    readonly contrast: {
      readonly value: {
        readonly base: "{colors.white}";
        readonly _dark: "{colors.black}";
      };
    };
    readonly fg: {
      readonly value: {
        readonly base: "{colors.primary.dark}";
        readonly _dark: "{colors.primary.light}";
      };
    };
    readonly subtle: {
      readonly value: {
        readonly base: "{colors.primary.xlight}";
        readonly _dark: "oklch(20% 0.08 264)";
      };
    };
    readonly muted: {
      readonly value: {
        readonly base: "{colors.primary.lighter}";
        readonly _dark: "oklch(25% 0.1 264)";
      };
    };
    readonly emphasized: {
      readonly value: {
        readonly base: "{colors.primary.light}";
        readonly _dark: "oklch(35% 0.15 264)";
      };
    };
    readonly solid: {
      readonly value: {
        readonly base: "{colors.primary}";
        readonly _dark: "{colors.primary}";
      };
    };
    readonly focusRing: {
      readonly value: {
        readonly base: "{colors.primary.light}";
        readonly _dark: "{colors.primary.light}";
      };
    };
  };
};
/**
 * Generate color tokens with custom base color overrides.
 *
 * Merges `overrides` with the default BASE_COLORS_THEME, then rebuilds the full shade scale for every named
 * color. Pass the result to `theme.extend.tokens.colors` in your panda.config.ts.
 *
 * @example
 *   theme: { extend: { tokens: { colors: createColorTokens({ primary: 'oklch(59% 0.234 277)' }) } } }
 */
declare function createColorTokens(overrides?: Partial<Record<ColorName, OKLCH>>): {
  primary: Record<ShadeScale | "DEFAULT", {
    value: string;
  }>;
  secondary: Record<ShadeScale | "DEFAULT", {
    value: string;
  }>;
  success: Record<ShadeScale | "DEFAULT", {
    value: string;
  }>;
  warning: Record<ShadeScale | "DEFAULT", {
    value: string;
  }>;
  danger: Record<ShadeScale | "DEFAULT", {
    value: string;
  }>;
  info: Record<ShadeScale | "DEFAULT", {
    value: string;
  }>;
  grey: Record<ShadeScale | "DEFAULT", {
    value: string;
  }>;
  neutral: Record<ShadeScale | "DEFAULT", {
    value: string;
  }>;
  white: {
    value: "#ffffff";
  };
  black: {
    value: "#000000";
  };
  transparent: {
    value: "transparent";
  };
};
//#endregion
export { colorTokens, createColorTokens, semanticColorTokens };
//# sourceMappingURL=colors.tokens.d.ts.map