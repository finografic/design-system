import { Spinner } from "../spinner/spinner.js";
import "../spinner/index.js";
import { tableRecipe } from "./data-table.recipe.js";
import { ArrowDownIcon, ArrowUpIcon, ChevronLeftIcon, ChevronRightIcon, ChevronsUpDownIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@finografic/icons";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
//#region src/components/data-table/data-table.tsx
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
	const styles = tableRecipe({ size: "md" });
	const { filterInput, paginationButton } = classNames;
	const headerGroups = table.getHeaderGroups();
	const allColumns = table.getAllColumns();
	const rowModel = table.getRowModel();
	const hasRows = rowModel.rows.length > 0;
	const isLoading = loading;
	return /* @__PURE__ */ jsxs("div", {
		style: {
			display: "flex",
			flexDirection: "column",
			gap: "var(--spacing-3)"
		},
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
										style: {
											display: "flex",
											alignItems: "center",
											gap: "var(--spacing-1)"
										},
										onClick: canSort ? header.column.getToggleSortingHandler() : void 0,
										children: [header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext()), canSort && /* @__PURE__ */ jsx(SortIcon, {
											sorted: header.column.getIsSorted(),
											className: styles.sortIcon
										})]
									}), canFilter && filterInput ? /* @__PURE__ */ jsx("input", {
										className: filterInput,
										value: header.column.getFilterValue() ?? "",
										onChange: (event) => header.column.setFilterValue(event.target.value),
										placeholder: "Filter…",
										onClick: (event) => event.stopPropagation(),
										style: {
											marginTop: "var(--spacing-1)",
											width: "100%"
										}
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
								className: styles.td,
								colSpan: allColumns.length || 1,
								style: {
									textAlign: "center",
									padding: "var(--spacing-8)"
								},
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
			style: {
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				gap: "var(--spacing-2)",
				fontSize: "var(--font-sizes-sm)",
				color: "var(--colors-fg-muted)"
			},
			children: [/* @__PURE__ */ jsxs("span", { children: [
				table.getFilteredSelectedRowModel().rows.length > 0 && `${table.getFilteredSelectedRowModel().rows.length} of `,
				table.getFilteredRowModel().rows.length,
				" row(s)"
			] }), /* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: "var(--spacing-1)"
				},
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
						style: { paddingInline: "var(--spacing-2)" },
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