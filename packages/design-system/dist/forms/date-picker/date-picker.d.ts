import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import "../../packages/design-system/styled-system/types/index.js";
import { DatePickerRecipeProps } from "./date-picker.recipe.js";
import { ReactNode } from "react";
import { DatePicker, DatePickerOpenChangeDetails, DatePickerValueChangeDetails, DateValue, DateValue as DateValue$1 } from "@ark-ui/react";
//#region src/forms/date-picker/date-picker.d.ts
/**
 * Styled Ark **DatePicker** compound — each part is wired to `datePickerRecipe` via context.
 *
 * Supports day, month, and year views with keyboard navigation. Handles single dates and date ranges. Ark
 * manages all a11y: `grid` role for the calendar, `button` for triggers, and `aria-selected` /
 * `aria-disabled` on cells.
 *
 * @example
 *   ```tsx
 *   import { DatePicker } from '@finografic/design-system/forms';
 *
 *   <DatePicker.Root size="md">
 *     <DatePicker.Label>Date of birth</DatePicker.Label>
 *     <DatePicker.Control>
 *       <DatePicker.Input index={0} placeholder="dd/mm/yyyy" />
 *       <DatePicker.Trigger>📅</DatePicker.Trigger>
 *       <DatePicker.ClearTrigger>✕</DatePicker.ClearTrigger>
 *     </DatePicker.Control>
 *     <DatePicker.Positioner>
 *       <DatePicker.Content>
 *         <DatePicker.View view="day">…</DatePicker.View>
 *         <DatePicker.View view="month">…</DatePicker.View>
 *         <DatePicker.View view="year">…</DatePicker.View>
 *       </DatePicker.Content>
 *     </DatePicker.Positioner>
 *   </DatePicker.Root>;
 *   ```;
 */
declare const DatePicker$1: {
  /** Root — value, handlers, locale, plus `size`. */
  Root: import("@styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<DatePicker.RootProps & import("react").RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"clearTrigger" | "content" | "control" | "input" | "label" | "nextTrigger" | "positioner" | "prevTrigger" | "rangeText" | "root" | "table" | "tableCell" | "tableCellTrigger" | "tableHeader" | "trigger" | "view" | "viewControl" | "viewTrigger", {
    size: {
      sm: {
        control: {
          h: "9";
        };
        input: {
          fontSize: "sm";
          pl: "3";
          pr: "1";
        };
        trigger: {
          w: "7";
          h: "7";
        };
        clearTrigger: {
          w: "7";
          h: "7";
        };
        tableCellTrigger: {
          h: "7";
          fontSize: "xs";
        };
      };
      md: {
        control: {
          h: "10";
        };
        input: {
          fontSize: "sm";
          pl: "3";
          pr: "1";
        };
        trigger: {
          w: "8";
          h: "8";
        };
        clearTrigger: {
          w: "8";
          h: "8";
        };
        tableCellTrigger: {
          h: "8";
          fontSize: "sm";
        };
      };
      lg: {
        control: {
          h: "12";
        };
        input: {
          fontSize: "md";
          pl: "4";
          pr: "1";
        };
        trigger: {
          w: "10";
          h: "10";
        };
        clearTrigger: {
          w: "10";
          h: "10";
        };
        tableCellTrigger: {
          h: "9";
          fontSize: "md";
        };
      };
    };
  }>>;
  /** Root with external machine state from `useDatePicker`. */
  RootProvider: import("@styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<DatePicker.RootProviderProps & import("react").RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"clearTrigger" | "content" | "control" | "input" | "label" | "nextTrigger" | "positioner" | "prevTrigger" | "rangeText" | "root" | "table" | "tableCell" | "tableCellTrigger" | "tableHeader" | "trigger" | "view" | "viewControl" | "viewTrigger", {
    size: {
      sm: {
        control: {
          h: "9";
        };
        input: {
          fontSize: "sm";
          pl: "3";
          pr: "1";
        };
        trigger: {
          w: "7";
          h: "7";
        };
        clearTrigger: {
          w: "7";
          h: "7";
        };
        tableCellTrigger: {
          h: "7";
          fontSize: "xs";
        };
      };
      md: {
        control: {
          h: "10";
        };
        input: {
          fontSize: "sm";
          pl: "3";
          pr: "1";
        };
        trigger: {
          w: "8";
          h: "8";
        };
        clearTrigger: {
          w: "8";
          h: "8";
        };
        tableCellTrigger: {
          h: "8";
          fontSize: "sm";
        };
      };
      lg: {
        control: {
          h: "12";
        };
        input: {
          fontSize: "md";
          pl: "4";
          pr: "1";
        };
        trigger: {
          w: "10";
          h: "10";
        };
        clearTrigger: {
          w: "10";
          h: "10";
        };
        tableCellTrigger: {
          h: "9";
          fontSize: "md";
        };
      };
    };
  }>>;
  /** Text label above the control. */
  Label: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<DatePicker.LabelProps & import("react").RefAttributes<HTMLLabelElement>>>;
  /** Input + trigger wrapper. */
  Control: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<DatePicker.ControlProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Text input for the date value; pass `index={0}` for start, `index={1}` for end (range). */
  Input: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<DatePicker.InputProps & import("react").RefAttributes<HTMLInputElement>>>;
  /** Calendar icon button that opens the picker. */
  Trigger: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<DatePicker.TriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
  /** Clear (×) button — visible when a value is selected. */
  ClearTrigger: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<DatePicker.ClearTriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
  /** Floating positioner that anchors the content panel. */
  Positioner: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<DatePicker.PositionerProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Calendar panel container. */
  Content: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<DatePicker.ContentProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** A single calendar view (day / month / year) — conditionally rendered by Zag state. */
  View: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<DatePicker.ViewProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Header row of the view — contains `PrevTrigger`, `ViewTrigger`, `NextTrigger`. */
  ViewControl: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<DatePicker.ViewControlProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Button that cycles through day → month → year views. */
  ViewTrigger: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<DatePicker.ViewTriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
  /** Previous month/year/decade navigation button. */
  PrevTrigger: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<DatePicker.PrevTriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
  /** Next month/year/decade navigation button. */
  NextTrigger: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<DatePicker.NextTriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
  /** Displays the current month/year range label. */
  RangeText: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<DatePicker.RangeTextProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Calendar `<table>` element. */
  Table: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<DatePicker.TableProps & import("react").RefAttributes<HTMLTableElement>>>;
  /** Weekday column heading cell (`<th>`). */
  TableHeader: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<DatePicker.TableHeaderProps & import("react").RefAttributes<HTMLTableCellElement>>>;
  /** Individual date cell (`<td>`). */
  TableCell: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<DatePicker.TableCellProps & import("react").RefAttributes<HTMLTableCellElement>>>;
  /** Clickable button inside a date cell — carries selection/range data attributes. */
  TableCellTrigger: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<DatePicker.TableCellTriggerProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Render prop — exposes machine context to children; no DOM, no recipe slot. */
  Context: (props: DatePicker.ContextProps) => ReactNode;
};
/** Slot class overrides for {@link DatePickerDS}. */
interface DatePickerDSClassNames {
  root?: string;
  label?: string;
  control?: string;
  input?: string;
  trigger?: string;
  clearTrigger?: string;
  content?: string;
}
type DatePickerDSProps = DatePickerRecipeProps & {
  /** Controlled date value(s) — `DateValue` objects from `@internationalized/date`. */
  value?: DateValue[];
  /** Default date value (uncontrolled). */
  defaultValue?: DateValue[];
  /** Called when the value changes — receives `DateValue[]` and ISO string representations. */
  onChange?: (value: DateValue[], valueAsString: string[]) => void;
  /** Called when the picker opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /** Called when the calendar view changes (day / month / year). */
  onViewChange?: (view: string) => void;
  /** Input placeholder text. */
  placeholder?: string;
  /** Minimum selectable date. */
  min?: DateValue;
  /** Maximum selectable date. */
  max?: DateValue;
  /** Disables the entire picker. */
  disabled?: boolean;
  /** Native input name for form submission. */
  name?: string;
  /** Label rendered above the control. */
  label?: ReactNode;
  /** Per-slot class overrides. */
  classNames?: DatePickerDSClassNames;
};
/**
 * Design-system convenience date picker — label, input, trigger, and calendar included. **`DatePicker`**
 * stays the styled compound for full composition; **`DatePickerDS`** = packaged DS API with normalized
 * handlers.
 *
 * @example
 *   ```tsx
 *   import { DatePickerDS } from '@finografic/design-system/forms';
 *
 *   <DatePickerDS label="Date of birth" placeholder="dd/mm/yyyy" onChange={(value) => setDate(value[0])} />;
 *   ```;
 */
declare const DatePickerDS: import("react").ForwardRefExoticComponent<{
  size?: "lg" | "md" | "sm" | undefined;
} & {
  /** Controlled date value(s) — `DateValue` objects from `@internationalized/date`. */
  value?: DateValue[];
  /** Default date value (uncontrolled). */
  defaultValue?: DateValue[];
  /** Called when the value changes — receives `DateValue[]` and ISO string representations. */
  onChange?: (value: DateValue[], valueAsString: string[]) => void;
  /** Called when the picker opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /** Called when the calendar view changes (day / month / year). */
  onViewChange?: (view: string) => void;
  /** Input placeholder text. */
  placeholder?: string;
  /** Minimum selectable date. */
  min?: DateValue;
  /** Maximum selectable date. */
  max?: DateValue;
  /** Disables the entire picker. */
  disabled?: boolean;
  /** Native input name for form submission. */
  name?: string;
  /** Label rendered above the control. */
  label?: ReactNode;
  /** Per-slot class overrides. */
  classNames?: DatePickerDSClassNames;
} & import("react").RefAttributes<HTMLDivElement>>;
//#endregion
export { DatePicker$1 as DatePicker, DatePickerDS, DatePickerDSClassNames, DatePickerDSProps, type DatePickerOpenChangeDetails, type DatePickerValueChangeDetails, type DateValue$1 as DateValue };
//# sourceMappingURL=date-picker.d.ts.map