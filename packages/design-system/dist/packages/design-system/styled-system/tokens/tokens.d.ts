//#region styled-system/tokens/tokens.d.ts
/* eslint-disable */
type Token = `colors.${ColorToken}` | `fonts.${FontToken}` | `fontSizes.${FontSizeToken}` | `fontWeights.${FontWeightToken}` | `lineHeights.${LineHeightToken}` | `spacing.${SpacingToken}` | `sizes.${SizeToken}` | `radii.${RadiusToken}` | `borderWidths.${BorderWidthToken}` | `shadows.${ShadowToken}` | `zIndex.${ZIndexToken}` | `durations.${DurationToken}` | `easings.${EasingToken}` | `breakpoints.${BreakpointToken}`;
type ColorToken = "primary.xxxlight" | "primary.xxlight" | "primary.xlight" | "primary.lighter" | "primary.light" | "primary" | "primary.dark" | "primary.darker" | "primary.xdark" | "primary.xxdark" | "primary.xxxdark" | "secondary.xxxlight" | "secondary.xxlight" | "secondary.xlight" | "secondary.lighter" | "secondary.light" | "secondary" | "secondary.dark" | "secondary.darker" | "secondary.xdark" | "secondary.xxdark" | "secondary.xxxdark" | "success.xxxlight" | "success.xxlight" | "success.xlight" | "success.lighter" | "success.light" | "success" | "success.dark" | "success.darker" | "success.xdark" | "success.xxdark" | "success.xxxdark" | "warning.xxxlight" | "warning.xxlight" | "warning.xlight" | "warning.lighter" | "warning.light" | "warning" | "warning.dark" | "warning.darker" | "warning.xdark" | "warning.xxdark" | "warning.xxxdark" | "danger.xxxlight" | "danger.xxlight" | "danger.xlight" | "danger.lighter" | "danger.light" | "danger" | "danger.dark" | "danger.darker" | "danger.xdark" | "danger.xxdark" | "danger.xxxdark" | "info.xxxlight" | "info.xxlight" | "info.xlight" | "info.lighter" | "info.light" | "info" | "info.dark" | "info.darker" | "info.xdark" | "info.xxdark" | "info.xxxdark" | "grey.xxxlight" | "grey.xxlight" | "grey.xlight" | "grey.lighter" | "grey.light" | "grey" | "grey.dark" | "grey.darker" | "grey.xdark" | "grey.xxdark" | "grey.xxxdark" | "neutral.xxxlight" | "neutral.xxlight" | "neutral.xlight" | "neutral.lighter" | "neutral.light" | "neutral" | "neutral.dark" | "neutral.darker" | "neutral.xdark" | "neutral.xxdark" | "neutral.xxxdark" | "text" | "white" | "black" | "transparent" | "bg" | "bg.subtle" | "bg.muted" | "bg.emphasized" | "bg.inverted" | "bg.surface" | "bg.panel" | "bg.error" | "bg.warning" | "bg.success" | "bg.info" | "fg" | "fg.muted" | "fg.subtle" | "fg.inverted" | "fg.error" | "fg.warning" | "fg.success" | "fg.info" | "border" | "border.muted" | "border.subtle" | "border.emphasized" | "border.inverted" | "border.error" | "border.warning" | "border.success" | "border.info" | "accent" | "accent.contrast" | "accent.fg" | "accent.subtle" | "accent.muted" | "accent.emphasized" | "accent.solid" | "accent.focusRing" | "colorPalette.xxxlight" | "colorPalette.xxlight" | "colorPalette.xlight" | "colorPalette.lighter" | "colorPalette.light" | "colorPalette" | "colorPalette.dark" | "colorPalette.darker" | "colorPalette.xdark" | "colorPalette.xxdark" | "colorPalette.xxxdark" | "colorPalette.subtle" | "colorPalette.muted" | "colorPalette.emphasized" | "colorPalette.inverted" | "colorPalette.surface" | "colorPalette.panel" | "colorPalette.error" | "colorPalette.warning" | "colorPalette.success" | "colorPalette.info" | "colorPalette.contrast" | "colorPalette.fg" | "colorPalette.solid" | "colorPalette.focusRing";
type FontToken = "sans" | "serif" | "mono";
type FontSizeToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
type FontWeightToken = "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
type LineHeightToken = "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
type SpacingToken = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "16" | "20" | "24" | "25" | "px" | "0.5" | "1.5" | "-0" | "-1" | "-2" | "-3" | "-4" | "-5" | "-6" | "-7" | "-8" | "-9" | "-10" | "-11" | "-12" | "-16" | "-20" | "-24" | "-25" | "-px" | "-0.5" | "-1.5";
type SizeToken = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "16" | "20" | "24" | "25" | "px" | "0.5" | "1.5" | "navbar" | "header" | "footer" | "sidebar" | "content" | "breakpoint-xs" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl";
type RadiusToken = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
type BorderWidthToken = "none" | "light" | "default" | "heavy";
type ShadowToken = "base.sm" | "base.md" | "base.lg" | "sm" | "md" | "lg";
type ZIndexToken = "hide" | "base" | "docked" | "sticky" | "dropdown" | "banner" | "overlay" | "modal" | "popover" | "toast" | "tooltip";
type DurationToken = "fastest" | "faster" | "fast" | "normal" | "slow" | "slower" | "slowest";
type EasingToken = "default" | "in" | "out" | "in-out";
type BreakpointToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
type Tokens = {
  colors: ColorToken;
  fonts: FontToken;
  fontSizes: FontSizeToken;
  fontWeights: FontWeightToken;
  lineHeights: LineHeightToken;
  spacing: SpacingToken;
  sizes: SizeToken;
  radii: RadiusToken;
  borderWidths: BorderWidthToken;
  shadows: ShadowToken;
  zIndex: ZIndexToken;
  durations: DurationToken;
  easings: EasingToken;
  breakpoints: BreakpointToken;
} & {
  [token: string]: never;
};
type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "cursor" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets";
//#endregion
export { BorderWidthToken, BreakpointToken, ColorToken, DurationToken, EasingToken, FontSizeToken, FontToken, FontWeightToken, LineHeightToken, RadiusToken, ShadowToken, SizeToken, SpacingToken, Token, TokenCategory, Tokens, ZIndexToken };
//# sourceMappingURL=tokens.d.ts.map