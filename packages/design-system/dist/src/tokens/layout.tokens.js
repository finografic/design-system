//#region src/tokens/layout.tokens.ts
/**
* 📐 Layout Tokens
*
* App-level structural dimensions — header, sidebar, navbar, etc.
*
* IMPORTANT: These are DEFAULT values. Consuming apps are expected to
* override them to suit their own layout. Do NOT bake these into the
* Panda preset — they live here as a shared reference and type contract.
*
* Recommended usage:
*
*   // In your app's global CSS / theme file:
*   :root {
*     --layout-header-height:    70px;
*     --layout-footer-height:    70px;
*     --layout-sidebar-width:    300px;
*     --layout-navbar-height:    41px;
*     --layout-content-max-width: 1200px;
*   }
*
*   // In Emotion templates — reference the CSS var:
*   import { LAYOUT_VARS } from '@workspace/design-system/tokens';
*   height: var(${LAYOUT_VARS.headerHeight});
*
*   // In TypeScript — reference the default value directly:
*   import { layoutTokens } from '@workspace/design-system/tokens';
*   const h = layoutTokens.header.height; // '70px'
*/
const layoutTokens = {
	header: { height: "70px" },
	footer: { height: "70px" },
	sidebar: { width: "300px" },
	navbar: { height: "41px" },
	drawer: { bar: { height: "66px" } },
	content: { maxWidth: "1200px" },
	imagePreview: { height: "300px" }
};
const LAYOUT_VARS = {
	headerHeight: "--layout-header-height",
	footerHeight: "--layout-footer-height",
	sidebarWidth: "--layout-sidebar-width",
	navbarHeight: "--layout-navbar-height",
	drawerBarHeight: "--layout-drawer-bar-height",
	contentMaxWidth: "--layout-content-max-width",
	imagePreviewHeight: "--layout-image-preview-height"
};
//#endregion
export { LAYOUT_VARS, layoutTokens };

//# sourceMappingURL=layout.tokens.js.map