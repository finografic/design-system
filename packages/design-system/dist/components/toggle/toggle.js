import { toggleRecipe } from "./toggle.recipe.js";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx } from "react/jsx-runtime";
import { Toggle } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/components/toggle/toggle.tsx
const { withProvider, withContext } = createStyleContext(toggleRecipe);
/**
* Styled Ark **Toggle** compound — each part is wired to `toggleRecipe` via context.
*
* A single on/off button. `data-state="on"` when pressed; `data-state="off"` when not. Ark handles all a11y:
* `button` role with `aria-pressed`. Variant props (`size`) go on **`Toggle.Root`**.
*
* @example
*   ```tsx
*   import { Toggle } from '@finografic/design-system/components';
*
*   <Toggle.Root defaultPressed={false} onPressedChange={(pressed) => setMuted(pressed)}>
*     <Toggle.Indicator>
*       <BoldIcon />
*     </Toggle.Indicator>
*     Bold
*   </Toggle.Root>;
*   ```;
*/
const Toggle$1 = {
	/** Root — `pressed` / `defaultPressed` / `onPressedChange`, `disabled`, plus `size`. */
	Root: withProvider(Toggle.Root, "root"),
	/** Optional icon/indicator slot inside the root button. */
	Indicator: withContext(Toggle.Indicator, "indicator")
};
/**
* Design-system convenience toggle — single on/off button with accent pressed state. **`Toggle`** stays the
* styled compound for full composition; **`ToggleDS`** = packaged DS API (`onChange(pressed: boolean)` —
* Toggle fires a bare boolean, not a detail object).
*
* @example
*   ```tsx
*   import { ToggleDS } from '@finografic/design-system/components';
*
*   <ToggleDS defaultPressed={false} onChange={(pressed) => setMuted(pressed)}>
*     Mute
*   </ToggleDS>;
*   ```;
*/
const ToggleDS = forwardRef(({ pressed, defaultPressed, onChange, disabled, children, size = "md", className }, ref) => {
	const styles = toggleRecipe({ size });
	return /* @__PURE__ */ jsx(Toggle.Root, {
		ref,
		pressed,
		defaultPressed,
		onPressedChange: (p) => onChange?.(p),
		disabled,
		className: cx(styles.root, className),
		children
	});
});
ToggleDS.displayName = "ToggleDS";
//#endregion
export { Toggle$1 as Toggle, ToggleDS };

//# sourceMappingURL=toggle.js.map