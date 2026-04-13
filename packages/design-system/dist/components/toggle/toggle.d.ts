import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { ToggleRecipeProps } from "./toggle.recipe.js";
import * as _$react from "react";
import { ReactNode } from "react";
import { Toggle } from "@ark-ui/react";
import * as _$_styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/toggle/toggle.d.ts
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
declare const Toggle$1: {
  /** Root — `pressed` / `defaultPressed` / `onPressedChange`, `disabled`, plus `size`. */Root: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<Toggle.RootProps & _$react.RefAttributes<HTMLButtonElement>>, SlotRecipeRuntimeFn<"root" | "indicator", {
    size: {
      sm: {
        root: {
          h: "7";
          px: "2";
          fontSize: "xs";
          gap: "1.5";
        };
      };
      md: {
        root: {
          h: "8";
          px: "3";
          fontSize: "sm";
          gap: "2";
        };
      };
      lg: {
        root: {
          h: "9";
          px: "4";
          fontSize: "md";
          gap: "2";
        };
      };
    };
  }>>; /** Optional icon/indicator slot inside the root button. */
  Indicator: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Toggle.IndicatorProps & _$react.RefAttributes<HTMLDivElement>>>;
};
type ToggleDSProps = ToggleRecipeProps & {
  /** Controlled pressed state. */pressed?: boolean; /** Default pressed state (uncontrolled). */
  defaultPressed?: boolean; /** Called when pressed state changes — receives a bare boolean (not a detail object). */
  onChange?: (pressed: boolean) => void; /** Disables the toggle. */
  disabled?: boolean; /** Content rendered inside the toggle button. */
  children?: ReactNode; /** Merged onto the root element after recipe classes. */
  className?: string;
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
declare const ToggleDS: _$react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
} & {
  /** Controlled pressed state. */pressed?: boolean; /** Default pressed state (uncontrolled). */
  defaultPressed?: boolean; /** Called when pressed state changes — receives a bare boolean (not a detail object). */
  onChange?: (pressed: boolean) => void; /** Disables the toggle. */
  disabled?: boolean; /** Content rendered inside the toggle button. */
  children?: ReactNode; /** Merged onto the root element after recipe classes. */
  className?: string;
} & _$react.RefAttributes<HTMLButtonElement>>;
//#endregion
export { Toggle$1 as Toggle, ToggleDS, ToggleDSProps };
//# sourceMappingURL=toggle.d.ts.map