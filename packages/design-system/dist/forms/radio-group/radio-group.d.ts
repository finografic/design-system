import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RadioGroupVariants } from "./radio-group.recipe.js";
import * as react from "react";
import { ReactNode } from "react";
import { RadioGroup, RadioGroupRootProps } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";
import { FieldError } from "react-hook-form";

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
  /** Root — accepts `size`, `variant`, and `orientation` variants; value state and `onValueChange`. */Root: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<RadioGroup.RootProps & react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"label" | "description" | "root" | "item" | "itemText" | "indicator" | "itemControl" | "errorText" | "itemDescription", {
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
        description: {
          fontSize: "xs";
        };
        errorText: {
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
        description: {
          fontSize: "sm";
        };
        errorText: {
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
        description: {
          fontSize: "md";
        };
        errorText: {
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
  }>>; /** Root with external machine state from `useRadioGroup`. */
  RootProvider: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<RadioGroup.RootProviderProps & react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"label" | "description" | "root" | "item" | "itemText" | "indicator" | "itemControl" | "errorText" | "itemDescription", {
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
        description: {
          fontSize: "xs";
        };
        errorText: {
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
        description: {
          fontSize: "sm";
        };
        errorText: {
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
        description: {
          fontSize: "md";
        };
        errorText: {
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
  ItemText: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<RadioGroup.ItemTextProps & react.RefAttributes<HTMLSpanElement>>>; /** Secondary description text for the option. */
  ItemDescription: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<RadioGroup.LabelProps & react.RefAttributes<HTMLSpanElement>>>;
};
/** A single option descriptor for {@link RadioGroupDS}. */
interface RadioGroupDSOption {
  value: string;
  label: ReactNode;
  /** Secondary description rendered below the label. */
  description?: ReactNode;
  disabled?: boolean;
}
/** Slot class overrides for {@link RadioGroupDS}. */
interface RadioGroupDSClassNames {
  root?: string;
  label?: string;
  item?: string;
  itemControl?: string;
  indicator?: string;
  itemText?: string;
  itemDescription?: string;
  description?: string;
  errorText?: string;
}
type RadioGroupDSProps = RadioGroupVariants & {
  /** The selectable options. */options: RadioGroupDSOption[]; /** Controlled selected value. */
  value?: string; /** Default selected value (uncontrolled). */
  defaultValue?: string; /** Called when the selected value changes. */
  onChange?: (value: string) => void; /** Field label rendered above the options. */
  label?: ReactNode; /** Helper text rendered below the options. */
  description?: ReactNode; /** RHF FieldError or plain string. */
  error?: FieldError | string;
  name?: string;
  disabled?: boolean; /** Merged onto the root slot after recipe classes. */
  className?: string; /** Per-slot class overrides. */
  classNames?: RadioGroupDSClassNames;
};
/**
 * Design-system convenience radio group — label, options array, description, and error included.
 * **`RadioGroup`** stays the styled compound; **`RadioGroupDS`** = packaged DS API
 * (`onChange(value: string)` instead of Ark's `onValueChange` detail object).
 *
 * @example
 * ```tsx
 * import { RadioGroupDS } from '@finografic/design-system/forms';
 *
 * <RadioGroupDS
 *   label="Billing plan"
 *   value={plan}
 *   onChange={setPlan}
 *   options={[
 *     { value: 'free', label: 'Free', description: 'Up to 3 projects' },
 *     { value: 'pro', label: 'Pro', description: 'Unlimited projects' },
 *   ]}
 * />
 * ```
 */
declare const RadioGroupDS: react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
  variant?: "default" | "card" | undefined;
  orientation?: "horizontal" | "vertical" | undefined;
} & {
  /** The selectable options. */options: RadioGroupDSOption[]; /** Controlled selected value. */
  value?: string; /** Default selected value (uncontrolled). */
  defaultValue?: string; /** Called when the selected value changes. */
  onChange?: (value: string) => void; /** Field label rendered above the options. */
  label?: ReactNode; /** Helper text rendered below the options. */
  description?: ReactNode; /** RHF FieldError or plain string. */
  error?: FieldError | string;
  name?: string;
  disabled?: boolean; /** Merged onto the root slot after recipe classes. */
  className?: string; /** Per-slot class overrides. */
  classNames?: RadioGroupDSClassNames;
} & react.RefAttributes<HTMLDivElement>>;
//#endregion
export { RadioGroup$1 as RadioGroup, RadioGroupDS, RadioGroupDSClassNames, RadioGroupDSOption, RadioGroupDSProps, type RadioGroupRootProps };
//# sourceMappingURL=radio-group.d.ts.map