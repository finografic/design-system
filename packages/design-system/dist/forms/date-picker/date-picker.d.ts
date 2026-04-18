import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { DatePickerRecipeProps } from "./date-picker.recipe.js";
import * as _$react from "react";
import { ReactNode } from "react";
import { DatePicker, DatePickerOpenChangeDetails, DatePickerValueChangeDetails, DateValue, DateValue as DateValue$1 } from "@ark-ui/react";
import * as _$_styled_system_jsx0 from "@styled-system/jsx";

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
  /** Root — value, handlers, locale, plus `size`. */Root: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<DatePicker.RootProps & _$react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"content" | "table" | "root" | "label" | "input" | "control" | "trigger" | "clearTrigger" | "positioner" | "view" | "viewControl" | "viewTrigger" | "prevTrigger" | "nextTrigger" | "rangeText" | "tableHeader" | "tableCell" | "tableCellTrigger", {
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
  RootProvider: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<DatePicker.RootProviderProps & _$react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"content" | "table" | "root" | "label" | "input" | "control" | "trigger" | "clearTrigger" | "positioner" | "view" | "viewControl" | "viewTrigger" | "prevTrigger" | "nextTrigger" | "rangeText" | "tableHeader" | "tableCell" | "tableCellTrigger", {
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
  Label: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<DatePicker.LabelProps & _$react.RefAttributes<HTMLLabelElement>>>; /** Input + trigger wrapper. */
  Control: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<DatePicker.ControlProps & _$react.RefAttributes<HTMLDivElement>>>; /** Text input for the date value; pass `index={0}` for start, `index={1}` for end (range). */
  Input: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<DatePicker.InputProps & _$react.RefAttributes<HTMLInputElement>>>; /** Calendar icon button that opens the picker. */
  Trigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<DatePicker.TriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Clear (×) button — visible when a value is selected. */
  ClearTrigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<DatePicker.ClearTriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Floating positioner that anchors the content panel. */
  Positioner: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<DatePicker.PositionerProps & _$react.RefAttributes<HTMLDivElement>>>; /** Calendar panel container. */
  Content: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<DatePicker.ContentProps & _$react.RefAttributes<HTMLDivElement>>>; /** A single calendar view (day / month / year) — conditionally rendered by Zag state. */
  View: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<DatePicker.ViewProps & _$react.RefAttributes<HTMLDivElement>>>; /** Header row of the view — contains `PrevTrigger`, `ViewTrigger`, `NextTrigger`. */
  ViewControl: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<DatePicker.ViewControlProps & _$react.RefAttributes<HTMLDivElement>>>; /** Button that cycles through day → month → year views. */
  ViewTrigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<DatePicker.ViewTriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Previous month/year/decade navigation button. */
  PrevTrigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<DatePicker.PrevTriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Next month/year/decade navigation button. */
  NextTrigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<DatePicker.NextTriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Displays the current month/year range label. */
  RangeText: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<DatePicker.RangeTextProps & _$react.RefAttributes<HTMLDivElement>>>; /** Calendar `<table>` element. */
  Table: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<DatePicker.TableProps & _$react.RefAttributes<HTMLTableElement>>>; /** Weekday column heading cell (`<th>`). */
  TableHeader: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<DatePicker.TableHeaderProps & _$react.RefAttributes<HTMLTableCellElement>>>; /** Individual date cell (`<td>`). */
  TableCell: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<DatePicker.TableCellProps & _$react.RefAttributes<HTMLTableCellElement>>>; /** Clickable button inside a date cell — carries selection/range data attributes. */
  TableCellTrigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<DatePicker.TableCellTriggerProps & _$react.RefAttributes<HTMLDivElement>>>; /** Render prop — exposes machine context to children; no DOM, no recipe slot. */
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
declare const DatePickerDS: _$react.ForwardRefExoticComponent<{
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
} & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { DatePicker$1 as DatePicker, DatePickerDS, DatePickerDSClassNames, DatePickerDSProps, type DatePickerOpenChangeDetails, type DatePickerValueChangeDetails, type DateValue$1 as DateValue };
//# sourceMappingURL=date-picker.d.ts.map