import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { DatePickerRecipeProps } from "./date-picker.recipe.js";
import * as react from "react";
import { ReactNode } from "react";
import { DatePicker, DatePickerOpenChangeDetails, DatePickerValueChangeDetails, DateValue, DateValue as DateValue$1 } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/forms/date-picker/date-picker.d.ts
/**
 * Styled Ark **DatePicker** compound — each part is wired to `datePickerRecipe` via context.
 *
 * Supports day, month, and year views with keyboard navigation. Handles single dates and
 * date ranges. Ark manages all a11y: `grid` role for the calendar, `button` for triggers,
 * and `aria-selected` / `aria-disabled` on cells.
 *
 * @example
 * ```tsx
 * import { DatePicker } from '@finografic/design-system/forms';
 *
 * <DatePicker.Root size="md">
 *   <DatePicker.Label>Date of birth</DatePicker.Label>
 *   <DatePicker.Control>
 *     <DatePicker.Input index={0} placeholder="dd/mm/yyyy" />
 *     <DatePicker.Trigger>📅</DatePicker.Trigger>
 *     <DatePicker.ClearTrigger>✕</DatePicker.ClearTrigger>
 *   </DatePicker.Control>
 *   <DatePicker.Positioner>
 *     <DatePicker.Content>
 *       <DatePicker.View view="day">…</DatePicker.View>
 *       <DatePicker.View view="month">…</DatePicker.View>
 *       <DatePicker.View view="year">…</DatePicker.View>
 *     </DatePicker.Content>
 *   </DatePicker.Positioner>
 * </DatePicker.Root>
 * ```
 */
declare const DatePicker$1: {
  /** Root — value, handlers, locale, plus `size`. */Root: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<DatePicker.RootProps & react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"content" | "table" | "root" | "positioner" | "label" | "trigger" | "input" | "control" | "clearTrigger" | "view" | "viewControl" | "viewTrigger" | "prevTrigger" | "nextTrigger" | "rangeText" | "tableHeader" | "tableCell" | "tableCellTrigger", {
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
  }>>; /** Root with external machine state from `useDatePicker`. */
  RootProvider: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<DatePicker.RootProviderProps & react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"content" | "table" | "root" | "positioner" | "label" | "trigger" | "input" | "control" | "clearTrigger" | "view" | "viewControl" | "viewTrigger" | "prevTrigger" | "nextTrigger" | "rangeText" | "tableHeader" | "tableCell" | "tableCellTrigger", {
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
  }>>; /** Text label above the control. */
  Label: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<DatePicker.LabelProps & react.RefAttributes<HTMLLabelElement>>>; /** Input + trigger wrapper. */
  Control: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<DatePicker.ControlProps & react.RefAttributes<HTMLDivElement>>>; /** Text input for the date value; pass `index={0}` for start, `index={1}` for end (range). */
  Input: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<DatePicker.InputProps & react.RefAttributes<HTMLInputElement>>>; /** Calendar icon button that opens the picker. */
  Trigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<DatePicker.TriggerProps & react.RefAttributes<HTMLButtonElement>>>; /** Clear (×) button — visible when a value is selected. */
  ClearTrigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<DatePicker.ClearTriggerProps & react.RefAttributes<HTMLButtonElement>>>; /** Floating positioner that anchors the content panel. */
  Positioner: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<DatePicker.PositionerProps & react.RefAttributes<HTMLDivElement>>>; /** Calendar panel container. */
  Content: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<DatePicker.ContentProps & react.RefAttributes<HTMLDivElement>>>; /** A single calendar view (day / month / year) — conditionally rendered by Zag state. */
  View: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<DatePicker.ViewProps & react.RefAttributes<HTMLDivElement>>>; /** Header row of the view — contains `PrevTrigger`, `ViewTrigger`, `NextTrigger`. */
  ViewControl: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<DatePicker.ViewControlProps & react.RefAttributes<HTMLDivElement>>>; /** Button that cycles through day → month → year views. */
  ViewTrigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<DatePicker.ViewTriggerProps & react.RefAttributes<HTMLButtonElement>>>; /** Previous month/year/decade navigation button. */
  PrevTrigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<DatePicker.PrevTriggerProps & react.RefAttributes<HTMLButtonElement>>>; /** Next month/year/decade navigation button. */
  NextTrigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<DatePicker.NextTriggerProps & react.RefAttributes<HTMLButtonElement>>>; /** Displays the current month/year range label. */
  RangeText: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<DatePicker.RangeTextProps & react.RefAttributes<HTMLDivElement>>>; /** Calendar `<table>` element. */
  Table: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<DatePicker.TableProps & react.RefAttributes<HTMLTableElement>>>; /** Weekday column heading cell (`<th>`). */
  TableHeader: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<DatePicker.TableHeaderProps & react.RefAttributes<HTMLTableCellElement>>>; /** Individual date cell (`<td>`). */
  TableCell: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<DatePicker.TableCellProps & react.RefAttributes<HTMLTableCellElement>>>; /** Clickable button inside a date cell — carries selection/range data attributes. */
  TableCellTrigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<DatePicker.TableCellTriggerProps & react.RefAttributes<HTMLDivElement>>>; /** Render prop — exposes machine context to children; no DOM, no recipe slot. */
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
  /** Controlled date value(s) — `DateValue` objects from `@internationalized/date`. */value?: DateValue[]; /** Default date value (uncontrolled). */
  defaultValue?: DateValue[]; /** Called when the value changes — receives `DateValue[]` and ISO string representations. */
  onChange?: (value: DateValue[], valueAsString: string[]) => void; /** Called when the picker opens or closes. */
  onOpenChange?: (open: boolean) => void; /** Called when the calendar view changes (day / month / year). */
  onViewChange?: (view: string) => void; /** Input placeholder text. */
  placeholder?: string; /** Minimum selectable date. */
  min?: DateValue; /** Maximum selectable date. */
  max?: DateValue; /** Disables the entire picker. */
  disabled?: boolean; /** Native input name for form submission. */
  name?: string; /** Label rendered above the control. */
  label?: ReactNode; /** Per-slot class overrides. */
  classNames?: DatePickerDSClassNames;
};
/**
 * Design-system convenience date picker — label, input, trigger, and calendar included.
 * **`DatePicker`** stays the styled compound for full composition; **`DatePickerDS`** =
 * packaged DS API with normalized handlers.
 *
 * @example
 * ```tsx
 * import { DatePickerDS } from '@finografic/design-system/forms';
 *
 * <DatePickerDS
 *   label="Date of birth"
 *   placeholder="dd/mm/yyyy"
 *   onChange={(value) => setDate(value[0])}
 * />
 * ```
 */
declare const DatePickerDS: react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
} & {
  /** Controlled date value(s) — `DateValue` objects from `@internationalized/date`. */value?: DateValue[]; /** Default date value (uncontrolled). */
  defaultValue?: DateValue[]; /** Called when the value changes — receives `DateValue[]` and ISO string representations. */
  onChange?: (value: DateValue[], valueAsString: string[]) => void; /** Called when the picker opens or closes. */
  onOpenChange?: (open: boolean) => void; /** Called when the calendar view changes (day / month / year). */
  onViewChange?: (view: string) => void; /** Input placeholder text. */
  placeholder?: string; /** Minimum selectable date. */
  min?: DateValue; /** Maximum selectable date. */
  max?: DateValue; /** Disables the entire picker. */
  disabled?: boolean; /** Native input name for form submission. */
  name?: string; /** Label rendered above the control. */
  label?: ReactNode; /** Per-slot class overrides. */
  classNames?: DatePickerDSClassNames;
} & react.RefAttributes<HTMLDivElement>>;
//#endregion
export { DatePicker$1 as DatePicker, DatePickerDS, DatePickerDSClassNames, DatePickerDSProps, type DatePickerOpenChangeDetails, type DatePickerValueChangeDetails, type DateValue$1 as DateValue };
//# sourceMappingURL=date-picker.d.ts.map