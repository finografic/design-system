import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import * as react from "react";
import { RadioGroup, RadioGroupRootProps } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/forms/radio-group/radio-group.d.ts
/**
 * Styled Ark **RadioGroup** compound — each part is wired to `radioGroupRecipe` via context.
 *
 * Supports `size` (sm | md | lg), `variant` (default | card), and
 * `orientation` (vertical | horizontal) via `RadioGroup.Root`.
 * Ark manages keyboard navigation, focus management, and ARIA.
 *
 * @example
 * ```tsx
 * import { RadioGroup } from '@finografic/design-system/forms';
 *
 * <RadioGroup.Root name="plan" size="md" value={plan} onValueChange={({ value }) => setPlan(value)}>
 *   <RadioGroup.Label>Billing plan</RadioGroup.Label>
 *   {options.map((opt) => (
 *     <RadioGroup.Item key={opt.value} value={opt.value}>
 *       <RadioGroup.ItemControl>
 *         <RadioGroup.Indicator />
 *       </RadioGroup.ItemControl>
 *       <RadioGroup.ItemText>{opt.label}</RadioGroup.ItemText>
 *       <RadioGroup.ItemHiddenInput />
 *     </RadioGroup.Item>
 *   ))}
 * </RadioGroup.Root>
 * ```
 */
declare const RadioGroup$1: {
  /** RadioGroup root — accepts `size`, `variant`, and `orientation` variants. */Root: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<RadioGroup.RootProps & react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "item" | "itemText" | "indicator" | "label" | "itemControl" | "itemDescription", {
    size: {
      sm: {
        label: {
          fontSize: "xs";
        };
        itemControl: {
          width: "4";
          height: "4";
        };
        indicator: {
          width: "1.5";
          height: "1.5";
        };
        itemText: {
          fontSize: "sm";
        };
        itemDescription: {
          fontSize: "xs";
        };
      };
      md: {
        label: {
          fontSize: "sm";
        };
        itemControl: {
          width: "5";
          height: "5";
        };
        indicator: {
          width: "2";
          height: "2";
        };
        itemText: {
          fontSize: "md";
        };
        itemDescription: {
          fontSize: "sm";
        };
      };
      lg: {
        label: {
          fontSize: "md";
        };
        itemControl: {
          width: "6";
          height: "6";
        };
        indicator: {
          width: "2.5";
          height: "2.5";
        };
        itemText: {
          fontSize: "lg";
        };
        itemDescription: {
          fontSize: "md";
        };
      };
    };
    variant: {
      default: {};
      card: {
        item: {
          width: "full";
          padding: "3";
          borderWidth: "light";
          borderStyle: "solid";
          borderColor: "border";
          borderRadius: "md";
          bg: "bg.panel";
          _checked: {
            borderColor: "accent.solid";
            bg: "accent.subtle";
          };
          _hover: {
            bg: "bg.hover";
          };
        };
      };
    };
    orientation: {
      vertical: {
        root: {
          flexDirection: "column";
        };
      };
      horizontal: {
        root: {
          flexDirection: "row";
          flexWrap: "wrap";
        };
      };
    };
  }>>; /** Group label above the options. */
  Label: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<RadioGroup.LabelProps & react.RefAttributes<HTMLSpanElement>>>; /** Clickable row wrapping control + text. */
  Item: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<RadioGroup.ItemProps & react.RefAttributes<HTMLLabelElement>>>; /** The radio circle (border + checked fill). */
  ItemControl: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<RadioGroup.ItemControlProps & react.RefAttributes<HTMLDivElement>>>; /** Hidden native input for form submission. */
  ItemHiddenInput: react.ForwardRefExoticComponent<RadioGroup.ItemHiddenInputProps & react.RefAttributes<HTMLInputElement>>; /** The inner dot shown when checked. */
  Indicator: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<RadioGroup.IndicatorProps & react.RefAttributes<HTMLDivElement>>>; /** Primary label text for the option. */
  ItemText: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<RadioGroup.ItemTextProps & react.RefAttributes<HTMLSpanElement>>>;
};
//#endregion
export { RadioGroup$1 as RadioGroup, type RadioGroupRootProps };
//# sourceMappingURL=radio-group.d.ts.map