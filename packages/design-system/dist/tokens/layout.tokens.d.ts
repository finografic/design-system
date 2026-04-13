//#region src/tokens/layout.tokens.d.ts
/**
 * 📐 Layout Tokens
 *
 * App-level structural dimensions — header, sidebar, navbar, etc.
 *
 * IMPORTANT: These are DEFAULT values. Consuming apps are expected to override them to suit their own layout.
 * Do NOT bake these into the Panda preset — they live here as a shared reference and type contract.
 *
 * Recommended usage:
 *
 * // In your app's global CSS / theme file: :root { --layout-header-height: 70px; --layout-footer-height:
 * 70px; --layout-sidebar-width: 300px; --layout-navbar-height: 41px; --layout-content-max-width: 1200px; }
 *
 * // In Emotion templates — reference the CSS var: import { LAYOUT_VARS } from
 * '@workspace/design-system/tokens'; height: var(${LAYOUT_VARS.headerHeight});
 *
 * // In TypeScript — reference the default value directly: import { layoutTokens } from
 * '@workspace/design-system/tokens'; const h = layoutTokens.header.height; // '70px'
 */
declare const layoutTokens: {
  readonly header: {
    readonly height: "70px";
  };
  readonly footer: {
    readonly height: "70px";
  };
  readonly sidebar: {
    readonly width: "300px";
  };
  readonly navbar: {
    readonly height: "41px";
  };
  readonly drawer: {
    readonly bar: {
      readonly height: "66px";
    };
  };
  readonly content: {
    readonly maxWidth: "1200px";
  };
  readonly imagePreview: {
    readonly height: "300px";
  };
};
declare const LAYOUT_VARS: {
  readonly headerHeight: "--layout-header-height";
  readonly footerHeight: "--layout-footer-height";
  readonly sidebarWidth: "--layout-sidebar-width";
  readonly navbarHeight: "--layout-navbar-height";
  readonly drawerBarHeight: "--layout-drawer-bar-height";
  readonly contentMaxWidth: "--layout-content-max-width";
  readonly imagePreviewHeight: "--layout-image-preview-height";
};
type LayoutVarName = (typeof LAYOUT_VARS)[keyof typeof LAYOUT_VARS];
//#endregion
export { LAYOUT_VARS, LayoutVarName, layoutTokens };
//# sourceMappingURL=layout.tokens.d.ts.map