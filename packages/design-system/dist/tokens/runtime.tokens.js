import { borderWidthTokens, radiiTokens } from "./decorative.tokens.js";
import { spacingTokens } from "./spacing.tokens.js";
import { textStyles } from "./typography.tokens.js";
import { layoutTokens } from "./layout.tokens.js";
import { colors } from "../palette/colors.js";
//#region src/tokens/runtime.tokens.ts
/**
* @file Runtime.tokens.ts CSS-in-JS runtime values for use in Emotion `css`` ` templates. Exports only two
*   objects consumed by `*.styles.ts` files:
*
*   - `colors` — full color palette (camelCase → CSS custom property strings)
*   - `layout` — core layout defaults (spacing, radii, structural dimensions) For Panda CSS / static design
*     tokens, import directly from the specific token files (e.g. `spacingTokens`, `fontSizeTokens`)
*     instead.
*/
const _border = {
	width: { default: borderWidthTokens["default"].value },
	radius: {
		xs: radiiTokens["xs"].value,
		sm: radiiTokens["sm"].value,
		md: radiiTokens["md"].value
	}
};
const layout = {
	fontSize: textStyles.body.md.value.fontSize,
	padding: spacingTokens["4"].value,
	borderWidth: _border.width.default,
	borderRadius: _border.radius.md,
	pageColor: colors.white,
	bgColor: colors.white,
	radius: _border.radius.sm,
	radiusInner: _border.radius.xs,
	header: { height: layoutTokens.header.height },
	footer: { height: layoutTokens.footer.height },
	sidebar: { width: layoutTokens.sidebar.width },
	navbar: { height: layoutTokens.navbar.height },
	drawer: { bar: { height: layoutTokens.drawer.bar.height } },
	imagePreview: { height: layoutTokens.imagePreview.height }
};
//#endregion
export { layout };

//# sourceMappingURL=runtime.tokens.js.map