import { avatarRecipe } from "./avatar.recipe.js";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { Avatar, useAvatar, useAvatarContext } from "@ark-ui/react/avatar";
import { createStyleContext } from "@styled-system/jsx";
//#region src/components/avatar/avatar.tsx
const { withProvider, withContext } = createStyleContext(avatarRecipe);
/**
* Styled Ark **Avatar** compound — each part is wired to `avatarRecipe` via context.
*
* Shows a profile image with an optional initials (or custom) fallback when the image is loading or
* unavailable. Recipe props (`size`, `shape`, `variant`) go on **`Avatar.Root`** or
* **`Avatar.RootProvider`**.
*
* @example
*   ```tsx
*   import { Avatar } from '@finografic/design-system/components';
*
*   <Avatar.Root size="md">
*     <Avatar.Fallback>PA</Avatar.Fallback>
*     <Avatar.Image src="https://example.com/photo.jpg" alt="Profile" />
*   </Avatar.Root>;
*   ```;
*
* @example
*   ```tsx
*   import { Avatar, useAvatar } from '@finografic/design-system/components';
*
*   const avatar = useAvatar();
*
*   <Avatar.RootProvider value={avatar} size="md">
*     <Avatar.Fallback>PA</Avatar.Fallback>
*     <Avatar.Image src="https://example.com/photo.jpg" alt="Profile" />
*   </Avatar.RootProvider>;
*   ```;
*/
const Avatar$1 = {
	/** Root — `onStatusChange`, `ids`; accepts `size`, `shape`, and `variant`. */
	Root: withProvider(Avatar.Root, "root"),
	/** Same root styles when using external state from `useAvatar`. */
	RootProvider: withProvider(Avatar.RootProvider, "root"),
	/** Shown while the image loads or after an error — keep before `Image` in the tree. */
	Fallback: withContext(Avatar.Fallback, "fallback"),
	/** Profile image — standard `src` / `alt` img props. */
	Image: withContext(Avatar.Image, "image"),
	/** Render prop — image load API (`loaded`, `setSrc`, …); no DOM, no recipe slot. */
	Context: Avatar.Context
};
function initialsFromName(name) {
	return name.trim().split(/\s+/).filter(Boolean).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}
/**
* Design-system convenience avatar — pass `src`, `alt`, and `fallback` or `name` for the common case.
* **`Avatar`** stays the styled compound for full composition; **`AvatarDS`** wires root, fallback, and
* image.
*
* @example
*   ```tsx
*   import { AvatarDS } from '@finografic/design-system/components';
*
*   <AvatarDS
*     src="https://i.pravatar.cc/300?u=a"
*     alt="Jane Doe"
*     name="Jane Doe"
*     size="md"
*     shape="rounded"
*     onStatusChange={({ status }) => console.log(status)}
*   />;
*   ```;
*/
const AvatarDS = forwardRef(({ src, alt, fallback, name, size = "md", shape = "circle", variant = "outlined", className, classNames, onStatusChange, ids, asChild, loading, crossOrigin, referrerPolicy, sizes, srcSet, ...rootProps }, ref) => {
	const styles = avatarRecipe({
		size,
		shape,
		variant
	});
	const fallbackContent = fallback ?? (name ? initialsFromName(name) : null);
	return /* @__PURE__ */ jsxs(Avatar.Root, {
		ref,
		className: cx(styles.root, className, classNames?.root),
		onStatusChange,
		ids,
		asChild,
		...rootProps,
		children: [fallbackContent != null ? /* @__PURE__ */ jsx(Avatar.Fallback, {
			className: cx(styles.fallback, classNames?.fallback),
			children: fallbackContent
		}) : null, src ? /* @__PURE__ */ jsx(Avatar.Image, {
			className: cx(styles.image, classNames?.image),
			src,
			alt,
			loading,
			crossOrigin,
			referrerPolicy,
			sizes,
			srcSet
		}) : null]
	});
});
AvatarDS.displayName = "AvatarDS";
//#endregion
export { Avatar$1 as Avatar, AvatarDS, useAvatar, useAvatarContext };

//# sourceMappingURL=avatar.js.map