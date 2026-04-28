import { datePickerRecipe } from "./date-picker.recipe.js";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { DatePicker } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/forms/date-picker/date-picker.tsx
const { withProvider, withContext } = createStyleContext(datePickerRecipe);
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
const DatePicker$1 = {
	/** Root — value, handlers, locale, plus `size`. */
	Root: withProvider(DatePicker.Root, "root"),
	/** Root with external machine state from `useDatePicker`. */
	RootProvider: withProvider(DatePicker.RootProvider, "root"),
	/** Text label above the control. */
	Label: withContext(DatePicker.Label, "label"),
	/** Input + trigger wrapper. */
	Control: withContext(DatePicker.Control, "control"),
	/** Text input for the date value; pass `index={0}` for start, `index={1}` for end (range). */
	Input: withContext(DatePicker.Input, "input"),
	/** Calendar icon button that opens the picker. */
	Trigger: withContext(DatePicker.Trigger, "trigger"),
	/** Clear (×) button — visible when a value is selected. */
	ClearTrigger: withContext(DatePicker.ClearTrigger, "clearTrigger"),
	/** Floating positioner that anchors the content panel. */
	Positioner: withContext(DatePicker.Positioner, "positioner"),
	/** Calendar panel container. */
	Content: withContext(DatePicker.Content, "content"),
	/** A single calendar view (day / month / year) — conditionally rendered by Zag state. */
	View: withContext(DatePicker.View, "view"),
	/** Header row of the view — contains `PrevTrigger`, `ViewTrigger`, `NextTrigger`. */
	ViewControl: withContext(DatePicker.ViewControl, "viewControl"),
	/** Button that cycles through day → month → year views. */
	ViewTrigger: withContext(DatePicker.ViewTrigger, "viewTrigger"),
	/** Previous month/year/decade navigation button. */
	PrevTrigger: withContext(DatePicker.PrevTrigger, "prevTrigger"),
	/** Next month/year/decade navigation button. */
	NextTrigger: withContext(DatePicker.NextTrigger, "nextTrigger"),
	/** Displays the current month/year range label. */
	RangeText: withContext(DatePicker.RangeText, "rangeText"),
	/** Calendar `<table>` element. */
	Table: withContext(DatePicker.Table, "table"),
	/** Weekday column heading cell (`<th>`). */
	TableHeader: withContext(DatePicker.TableHeader, "tableHeader"),
	/** Individual date cell (`<td>`). */
	TableCell: withContext(DatePicker.TableCell, "tableCell"),
	/** Clickable button inside a date cell — carries selection/range data attributes. */
	TableCellTrigger: withContext(DatePicker.TableCellTrigger, "tableCellTrigger"),
	/** Render prop — exposes machine context to children; no DOM, no recipe slot. */
	Context: DatePicker.Context
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
const DatePickerDS = forwardRef(({ value, defaultValue, onChange, onOpenChange, onViewChange, placeholder, min, max, disabled, name, label, size = "md", classNames = {} }, ref) => {
	const styles = datePickerRecipe({ size });
	return /* @__PURE__ */ jsxs(DatePicker.Root, {
		ref,
		value,
		defaultValue,
		onValueChange: ({ value: v, valueAsString }) => onChange?.(v, valueAsString),
		onOpenChange: ({ open }) => onOpenChange?.(open),
		onViewChange: ({ view }) => onViewChange?.(view),
		min,
		max,
		disabled,
		name,
		className: cx(styles.root, classNames.root),
		children: [
			label && /* @__PURE__ */ jsx(DatePicker.Label, {
				className: cx(styles.label, classNames.label),
				children: label
			}),
			/* @__PURE__ */ jsxs(DatePicker.Control, {
				className: cx(styles.control, classNames.control),
				children: [
					/* @__PURE__ */ jsx(DatePicker.Input, {
						index: 0,
						placeholder,
						className: cx(styles.input, classNames.input)
					}),
					/* @__PURE__ */ jsx(DatePicker.ClearTrigger, {
						className: cx(styles.clearTrigger, classNames.clearTrigger),
						children: "✕"
					}),
					/* @__PURE__ */ jsx(DatePicker.Trigger, {
						className: cx(styles.trigger, classNames.trigger),
						children: "📅"
					})
				]
			}),
			/* @__PURE__ */ jsx(DatePicker.Positioner, {
				className: styles.positioner,
				children: /* @__PURE__ */ jsxs(DatePicker.Content, {
					className: cx(styles.content, classNames.content),
					children: [
						/* @__PURE__ */ jsx(DatePicker.View, {
							view: "day",
							children: /* @__PURE__ */ jsx(DatePicker.Context, { children: (datePicker) => /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs(DatePicker.ViewControl, {
								className: styles.viewControl,
								children: [
									/* @__PURE__ */ jsx(DatePicker.PrevTrigger, {
										className: styles.prevTrigger,
										children: "‹"
									}),
									/* @__PURE__ */ jsx(DatePicker.ViewTrigger, {
										className: styles.viewTrigger,
										children: /* @__PURE__ */ jsx(DatePicker.RangeText, { className: styles.rangeText })
									}),
									/* @__PURE__ */ jsx(DatePicker.NextTrigger, {
										className: styles.nextTrigger,
										children: "›"
									})
								]
							}), /* @__PURE__ */ jsxs(DatePicker.Table, {
								className: styles.table,
								children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: datePicker.weekDays.map((day, i) => /* @__PURE__ */ jsx(DatePicker.TableHeader, {
									className: styles.tableHeader,
									children: day.short
								}, i)) }) }), /* @__PURE__ */ jsx("tbody", { children: datePicker.weeks.map((week, i) => /* @__PURE__ */ jsx("tr", { children: week.map((day, j) => /* @__PURE__ */ jsx(DatePicker.TableCell, {
									value: day,
									className: styles.tableCell,
									children: /* @__PURE__ */ jsx(DatePicker.TableCellTrigger, {
										className: styles.tableCellTrigger,
										children: day.day
									})
								}, j)) }, i)) })]
							})] }) })
						}),
						/* @__PURE__ */ jsx(DatePicker.View, {
							view: "month",
							children: /* @__PURE__ */ jsx(DatePicker.Context, { children: (datePicker) => /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs(DatePicker.ViewControl, {
								className: styles.viewControl,
								children: [
									/* @__PURE__ */ jsx(DatePicker.PrevTrigger, {
										className: styles.prevTrigger,
										children: "‹"
									}),
									/* @__PURE__ */ jsx(DatePicker.ViewTrigger, {
										className: styles.viewTrigger,
										children: /* @__PURE__ */ jsx(DatePicker.RangeText, { className: styles.rangeText })
									}),
									/* @__PURE__ */ jsx(DatePicker.NextTrigger, {
										className: styles.nextTrigger,
										children: "›"
									})
								]
							}), /* @__PURE__ */ jsx(DatePicker.Table, {
								className: styles.table,
								children: /* @__PURE__ */ jsx("tbody", { children: datePicker.getMonthsGrid({
									columns: 4,
									format: "short"
								}).map((months, i) => /* @__PURE__ */ jsx("tr", { children: months.map((month, j) => /* @__PURE__ */ jsx(DatePicker.TableCell, {
									value: month.value,
									className: styles.tableCell,
									children: /* @__PURE__ */ jsx(DatePicker.TableCellTrigger, {
										className: styles.tableCellTrigger,
										children: month.label
									})
								}, j)) }, i)) })
							})] }) })
						}),
						/* @__PURE__ */ jsx(DatePicker.View, {
							view: "year",
							children: /* @__PURE__ */ jsx(DatePicker.Context, { children: (datePicker) => /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs(DatePicker.ViewControl, {
								className: styles.viewControl,
								children: [
									/* @__PURE__ */ jsx(DatePicker.PrevTrigger, {
										className: styles.prevTrigger,
										children: "‹"
									}),
									/* @__PURE__ */ jsx(DatePicker.ViewTrigger, {
										className: styles.viewTrigger,
										children: /* @__PURE__ */ jsx(DatePicker.RangeText, { className: styles.rangeText })
									}),
									/* @__PURE__ */ jsx(DatePicker.NextTrigger, {
										className: styles.nextTrigger,
										children: "›"
									})
								]
							}), /* @__PURE__ */ jsx(DatePicker.Table, {
								className: styles.table,
								children: /* @__PURE__ */ jsx("tbody", { children: datePicker.getYearsGrid({ columns: 4 }).map((years, i) => /* @__PURE__ */ jsx("tr", { children: years.map((year, j) => /* @__PURE__ */ jsx(DatePicker.TableCell, {
									value: year.value,
									className: styles.tableCell,
									children: /* @__PURE__ */ jsx(DatePicker.TableCellTrigger, {
										className: styles.tableCellTrigger,
										children: year.label
									})
								}, j)) }, i)) })
							})] }) })
						})
					]
				})
			})
		]
	});
});
DatePickerDS.displayName = "DatePickerDS";
//#endregion
export { DatePicker$1 as DatePicker, DatePickerDS };

//# sourceMappingURL=date-picker.js.map