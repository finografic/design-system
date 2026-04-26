import { Spinner } from "../spinner/spinner.js";
import "../spinner/index.js";
import { InputField } from "../../forms/input-field/input-field.js";
import "../../forms/input-field/index.js";
import { tableRecipe } from "./data-table.recipe.js";
import { ArrowDownIcon, ArrowUpIcon, ChevronLeftIcon, ChevronRightIcon, ChevronsUpDownIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@finografic/icons";
import { useState } from "react";
import { css, cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
//#region src/components/data-table/data-table.tsx
const outerWrapperStyles = css({
	display: "flex",
	flexDirection: "column",
	gap: "3"
});
const sortHeaderStyles = css({
	display: "flex",
	alignItems: "center",
	gap: "1"
});
const filterInputStyles = css({
	marginTop: "2",
	width: "100%"
});
const loadingCellStyles = css({
	textAlign: "center",
	padding: "8"
});
const paginationRowStyles = css({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: "2",
	fontSize: "sm",
	color: "fg.muted"
});
const paginationButtonsStyles = css({
	display: "flex",
	alignItems: "center",
	gap: "1"
});
const pageIndicatorStyles = css({ paddingInline: "2" });
function SortIcon({ sorted, className }) {
	return /* @__PURE__ */ jsxs("span", {
		className,
		"data-sort": String(sorted),
		children: [
			sorted === "asc" && /* @__PURE__ */ jsx(ArrowUpIcon, { className: "icon icon-sm" }),
			sorted === "desc" && /* @__PURE__ */ jsx(ArrowDownIcon, { className: "icon icon-sm" }),
			!sorted && /* @__PURE__ */ jsx(ChevronsUpDownIcon, { className: "icon icon-sm" })
		]
	});
}
function PaginationButton({ className, disabled, children, ...rest }) {
	return /* @__PURE__ */ jsx("button", {
		className,
		disabled,
		type: "button",
		...rest,
		children
	});
}
/**
* **DataTable** — TanStack Table wrapper with sorting, filtering, pagination, and row selection.
*
* Styles applied via `tableRecipe`. Header filters use **`InputField.Root`** (`inputFieldRecipe`) with
* `size="sm"`. Pass optional `classNames.filterInput` for extra classes on the filter wrapper. Pass
* `classNames.paginationButton` for pagination buttons.
*
* @example
*   ```tsx
*   import { DataTable } from '@finografic/design-system/components';
*   import { createColumnHelper } from '@tanstack/react-table';
*
*   const col = createColumnHelper<User>();
*   const columns = [col.accessor('name', { header: 'Name' }), col.accessor('email', { header: 'Email' })];
*
*   <DataTable data={users} columns={columns} classNames={{ table: {} }} />;
*   ```;
*/
function DataTable({ data, columns, classNames, caption, loading = false, pageSize = 20, emptyMessage = "No results found.", getRowId, selectedRows, onSelectionChange }) {
	const [sorting, setSorting] = useState([]);
	const [columnFilters, setColumnFilters] = useState([]);
	const [internalRowSelection, setInternalRowSelection] = useState({});
	const isSelectionControlled = Boolean(selectedRows && onSelectionChange);
	const controlledRowSelection = selectedRows ? Object.fromEntries(selectedRows.map((row, index) => {
		return [getRowId?.(row, index) ?? row.id ?? String(index), true];
	})) : {};
	const effectiveRowSelection = isSelectionControlled ? controlledRowSelection : internalRowSelection;
	const handleRowSelectionChange = (updater) => {
		const next = typeof updater === "function" ? updater(effectiveRowSelection) : updater;
		if (isSelectionControlled && onSelectionChange) onSelectionChange(data.filter((row, index) => {
			const id = getRowId?.(row, index) ?? row.id ?? String(index);
			return Boolean(next[id]);
		}));
		else setInternalRowSelection(next);
	};
	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			columnFilters,
			rowSelection: effectiveRowSelection
		},
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onRowSelectionChange: handleRowSelectionChange,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: { pagination: { pageSize } },
		getRowId
	});
	const styles = tableRecipe();
	const { filterInput, paginationButton } = classNames;
	const headerGroups = table.getHeaderGroups();
	const allColumns = table.getAllColumns();
	const rowModel = table.getRowModel();
	const hasRows = rowModel.rows.length > 0;
	const isLoading = loading;
	return /* @__PURE__ */ jsxs("div", {
		className: outerWrapperStyles,
		children: [/* @__PURE__ */ jsx("div", {
			className: styles.root,
			children: /* @__PURE__ */ jsxs("table", {
				className: styles.table,
				children: [
					caption ? /* @__PURE__ */ jsx("caption", {
						className: styles.caption,
						children: caption
					}) : null,
					/* @__PURE__ */ jsx("thead", {
						className: styles.thead,
						children: headerGroups.map((headerGroup) => /* @__PURE__ */ jsx("tr", {
							className: styles.headerRow,
							children: headerGroup.headers.map((header) => {
								const canSort = header.column.getCanSort();
								const canFilter = header.column.getCanFilter();
								return /* @__PURE__ */ jsxs("th", {
									className: styles.th,
									"data-sortable": canSort ? "true" : void 0,
									style: { width: header.getSize() !== 150 ? `${header.getSize()}px` : void 0 },
									children: [/* @__PURE__ */ jsxs("div", {
										className: sortHeaderStyles,
										onClick: canSort ? header.column.getToggleSortingHandler() : void 0,
										children: [header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext()), canSort && /* @__PURE__ */ jsx(SortIcon, {
											sorted: header.column.getIsSorted(),
											className: styles.sortIcon
										})]
									}), canFilter ? /* @__PURE__ */ jsx(InputField.Root, {
										size: "sm",
										className: cx(filterInputStyles, filterInput),
										value: header.column.getFilterValue() ?? "",
										onChange: (event) => header.column.setFilterValue(event.target.value),
										placeholder: "Filter…",
										onClick: (event) => event.stopPropagation()
									}) : null]
								}, header.id);
							})
						}, headerGroup.id))
					}),
					/* @__PURE__ */ jsx("tbody", {
						className: styles.tbody,
						children: isLoading ? /* @__PURE__ */ jsx("tr", {
							className: styles.tr,
							children: /* @__PURE__ */ jsx("td", {
								className: [styles.td, loadingCellStyles].filter(Boolean).join(" "),
								colSpan: allColumns.length || 1,
								children: /* @__PURE__ */ jsx(Spinner, { size: 20 })
							})
						}) : !hasRows ? /* @__PURE__ */ jsx("tr", {
							className: styles.tr,
							children: /* @__PURE__ */ jsx("td", {
								className: styles.emptyState ?? styles.td,
								colSpan: allColumns.length || 1,
								children: emptyMessage
							})
						}) : rowModel.rows.map((row) => /* @__PURE__ */ jsx("tr", {
							className: styles.tr,
							"data-selected": row.getIsSelected() ? "true" : void 0,
							children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx("td", {
								className: styles.td,
								children: flexRender(cell.column.columnDef.cell, cell.getContext())
							}, cell.id))
						}, row.id))
					})
				]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: paginationRowStyles,
			children: [/* @__PURE__ */ jsxs("span", { children: [
				table.getFilteredSelectedRowModel().rows.length > 0 && `${table.getFilteredSelectedRowModel().rows.length} of `,
				table.getFilteredRowModel().rows.length,
				" row(s)"
			] }), /* @__PURE__ */ jsxs("div", {
				className: paginationButtonsStyles,
				children: [
					/* @__PURE__ */ jsx(PaginationButton, {
						className: paginationButton,
						onClick: () => table.setPageIndex(0),
						disabled: !table.getCanPreviousPage(),
						"aria-label": "First page",
						children: /* @__PURE__ */ jsx(DoubleArrowLeftIcon, { className: "icon icon-sm" })
					}),
					/* @__PURE__ */ jsx(PaginationButton, {
						className: paginationButton,
						onClick: () => table.previousPage(),
						disabled: !table.getCanPreviousPage(),
						"aria-label": "Previous page",
						children: /* @__PURE__ */ jsx(ChevronLeftIcon, { className: "icon icon-sm" })
					}),
					/* @__PURE__ */ jsxs("span", {
						className: pageIndicatorStyles,
						children: [
							"Page ",
							table.getState().pagination.pageIndex + 1,
							" of ",
							table.getPageCount()
						]
					}),
					/* @__PURE__ */ jsx(PaginationButton, {
						className: paginationButton,
						onClick: () => table.nextPage(),
						disabled: !table.getCanNextPage(),
						"aria-label": "Next page",
						children: /* @__PURE__ */ jsx(ChevronRightIcon, { className: "icon icon-sm" })
					}),
					/* @__PURE__ */ jsx(PaginationButton, {
						className: paginationButton,
						onClick: () => table.setPageIndex(table.getPageCount() - 1),
						disabled: !table.getCanNextPage(),
						"aria-label": "Last page",
						children: /* @__PURE__ */ jsx(DoubleArrowRightIcon, { className: "icon icon-sm" })
					})
				]
			})]
		})]
	});
}
//#endregion
export { DataTable };

//# sourceMappingURL=data-table.js.map