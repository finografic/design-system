import type { DateValue } from '@ark-ui/react';
import { DatePicker as ArkDatePicker } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef, type ReactNode } from 'react';

import type { DatePickerRecipeProps } from './date-picker.recipe';
import { datePickerRecipe } from './date-picker.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(datePickerRecipe);

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
export const DatePicker = {
  /** Root — value, handlers, locale, plus `size`. */
  Root: withProvider(ArkDatePicker.Root, 'root'),
  /** Root with external machine state from `useDatePicker`. */
  RootProvider: withProvider(ArkDatePicker.RootProvider, 'root'),
  /** Text label above the control. */
  Label: withContext(ArkDatePicker.Label, 'label'),
  /** Input + trigger wrapper. */
  Control: withContext(ArkDatePicker.Control, 'control'),
  /** Text input for the date value; pass `index={0}` for start, `index={1}` for end (range). */
  Input: withContext(ArkDatePicker.Input, 'input'),
  /** Calendar icon button that opens the picker. */
  Trigger: withContext(ArkDatePicker.Trigger, 'trigger'),
  /** Clear (×) button — visible when a value is selected. */
  ClearTrigger: withContext(ArkDatePicker.ClearTrigger, 'clearTrigger'),
  /** Floating positioner that anchors the content panel. */
  Positioner: withContext(ArkDatePicker.Positioner, 'positioner'),
  /** Calendar panel container. */
  Content: withContext(ArkDatePicker.Content, 'content'),
  /** A single calendar view (day / month / year) — conditionally rendered by Zag state. */
  View: withContext(ArkDatePicker.View, 'view'),
  /** Header row of the view — contains `PrevTrigger`, `ViewTrigger`, `NextTrigger`. */
  ViewControl: withContext(ArkDatePicker.ViewControl, 'viewControl'),
  /** Button that cycles through day → month → year views. */
  ViewTrigger: withContext(ArkDatePicker.ViewTrigger, 'viewTrigger'),
  /** Previous month/year/decade navigation button. */
  PrevTrigger: withContext(ArkDatePicker.PrevTrigger, 'prevTrigger'),
  /** Next month/year/decade navigation button. */
  NextTrigger: withContext(ArkDatePicker.NextTrigger, 'nextTrigger'),
  /** Displays the current month/year range label. */
  RangeText: withContext(ArkDatePicker.RangeText, 'rangeText'),
  /** Calendar `<table>` element. */
  Table: withContext(ArkDatePicker.Table, 'table'),
  /** Weekday column heading cell (`<th>`). */
  TableHeader: withContext(ArkDatePicker.TableHeader, 'tableHeader'),
  /** Individual date cell (`<td>`). */
  TableCell: withContext(ArkDatePicker.TableCell, 'tableCell'),
  /** Clickable button inside a date cell — carries selection/range data attributes. */
  TableCellTrigger: withContext(ArkDatePicker.TableCellTrigger, 'tableCellTrigger'),
  /** Render prop — exposes machine context to children; no DOM, no recipe slot. */
  Context: ArkDatePicker.Context,
};

// ── DatePickerDS — convenience wrapper ────────────────────────────────────────

/** Slot class overrides for {@link DatePickerDS}. */
export interface DatePickerDSClassNames {
  root?: string;
  label?: string;
  control?: string;
  input?: string;
  trigger?: string;
  clearTrigger?: string;
  content?: string;
}

export type DatePickerDSProps = DatePickerRecipeProps & {
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
export const DatePickerDS = forwardRef<HTMLDivElement, DatePickerDSProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      onOpenChange,
      onViewChange,
      placeholder,
      min,
      max,
      disabled,
      name,
      label,
      size = 'md',
      classNames = {},
    },
    ref,
  ) => {
    const styles = datePickerRecipe({ size });

    return (
      <ArkDatePicker.Root
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        onValueChange={({ value: v, valueAsString }) => onChange?.(v, valueAsString)}
        onOpenChange={({ open }) => onOpenChange?.(open)}
        onViewChange={({ view }) => onViewChange?.(view)}
        min={min}
        max={max}
        disabled={disabled}
        name={name}
        className={cx(styles.root, classNames.root)}
      >
        {label && (
          <ArkDatePicker.Label className={cx(styles.label, classNames.label)}>
            {label}
          </ArkDatePicker.Label>
        )}

        <ArkDatePicker.Control className={cx(styles.control, classNames.control)}>
          <ArkDatePicker.Input
            index={0}
            placeholder={placeholder}
            className={cx(styles.input, classNames.input)}
          />
          <ArkDatePicker.ClearTrigger className={cx(styles.clearTrigger, classNames.clearTrigger)}>
            ✕
          </ArkDatePicker.ClearTrigger>
          <ArkDatePicker.Trigger className={cx(styles.trigger, classNames.trigger)}>
            📅
          </ArkDatePicker.Trigger>
        </ArkDatePicker.Control>

        <ArkDatePicker.Positioner className={styles.positioner}>
          <ArkDatePicker.Content className={cx(styles.content, classNames.content)}>
            <ArkDatePicker.View view="day">
              <ArkDatePicker.Context>
                {(datePicker) => (
                  <>
                    <ArkDatePicker.ViewControl className={styles.viewControl}>
                      <ArkDatePicker.PrevTrigger className={styles.prevTrigger}>
                        ‹
                      </ArkDatePicker.PrevTrigger>
                      <ArkDatePicker.ViewTrigger className={styles.viewTrigger}>
                        <ArkDatePicker.RangeText className={styles.rangeText} />
                      </ArkDatePicker.ViewTrigger>
                      <ArkDatePicker.NextTrigger className={styles.nextTrigger}>
                        ›
                      </ArkDatePicker.NextTrigger>
                    </ArkDatePicker.ViewControl>
                    <ArkDatePicker.Table className={styles.table}>
                      <thead>
                        <tr>
                          {datePicker.weekDays.map((day, i) => (
                            <ArkDatePicker.TableHeader key={i} className={styles.tableHeader}>
                              {day.short}
                            </ArkDatePicker.TableHeader>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {datePicker.weeks.map((week, i) => (
                          <tr key={i}>
                            {week.map((day, j) => (
                              <ArkDatePicker.TableCell
                                key={j}
                                value={day}
                                className={styles.tableCell}
                              >
                                <ArkDatePicker.TableCellTrigger className={styles.tableCellTrigger}>
                                  {day.day}
                                </ArkDatePicker.TableCellTrigger>
                              </ArkDatePicker.TableCell>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </ArkDatePicker.Table>
                  </>
                )}
              </ArkDatePicker.Context>
            </ArkDatePicker.View>

            <ArkDatePicker.View view="month">
              <ArkDatePicker.Context>
                {(datePicker) => (
                  <>
                    <ArkDatePicker.ViewControl className={styles.viewControl}>
                      <ArkDatePicker.PrevTrigger className={styles.prevTrigger}>
                        ‹
                      </ArkDatePicker.PrevTrigger>
                      <ArkDatePicker.ViewTrigger className={styles.viewTrigger}>
                        <ArkDatePicker.RangeText className={styles.rangeText} />
                      </ArkDatePicker.ViewTrigger>
                      <ArkDatePicker.NextTrigger className={styles.nextTrigger}>
                        ›
                      </ArkDatePicker.NextTrigger>
                    </ArkDatePicker.ViewControl>
                    <ArkDatePicker.Table className={styles.table}>
                      <tbody>
                        {datePicker.getMonthsGrid({ columns: 4, format: 'short' }).map((
                          months,
                          i,
                        ) => (
                          <tr key={i}>
                            {months.map((month, j) => (
                              <ArkDatePicker.TableCell
                                key={j}
                                value={month.value}
                                className={styles.tableCell}
                              >
                                <ArkDatePicker.TableCellTrigger className={styles.tableCellTrigger}>
                                  {month.label}
                                </ArkDatePicker.TableCellTrigger>
                              </ArkDatePicker.TableCell>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </ArkDatePicker.Table>
                  </>
                )}
              </ArkDatePicker.Context>
            </ArkDatePicker.View>

            <ArkDatePicker.View view="year">
              <ArkDatePicker.Context>
                {(datePicker) => (
                  <>
                    <ArkDatePicker.ViewControl className={styles.viewControl}>
                      <ArkDatePicker.PrevTrigger className={styles.prevTrigger}>
                        ‹
                      </ArkDatePicker.PrevTrigger>
                      <ArkDatePicker.ViewTrigger className={styles.viewTrigger}>
                        <ArkDatePicker.RangeText className={styles.rangeText} />
                      </ArkDatePicker.ViewTrigger>
                      <ArkDatePicker.NextTrigger className={styles.nextTrigger}>
                        ›
                      </ArkDatePicker.NextTrigger>
                    </ArkDatePicker.ViewControl>
                    <ArkDatePicker.Table className={styles.table}>
                      <tbody>
                        {datePicker.getYearsGrid({ columns: 4 }).map((years, i) => (
                          <tr key={i}>
                            {years.map((year, j) => (
                              <ArkDatePicker.TableCell
                                key={j}
                                value={year.value}
                                className={styles.tableCell}
                              >
                                <ArkDatePicker.TableCellTrigger className={styles.tableCellTrigger}>
                                  {year.label}
                                </ArkDatePicker.TableCellTrigger>
                              </ArkDatePicker.TableCell>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </ArkDatePicker.Table>
                  </>
                )}
              </ArkDatePicker.Context>
            </ArkDatePicker.View>
          </ArkDatePicker.Content>
        </ArkDatePicker.Positioner>
      </ArkDatePicker.Root>
    );
  },
);

DatePickerDS.displayName = 'DatePickerDS';

export type {
  DatePickerOpenChangeDetails,
  DatePickerValueChangeDetails,
  DateValue,
} from '@ark-ui/react';
