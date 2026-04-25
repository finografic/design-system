import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from '@finografic/icons';
import { css, cx } from '@styled-system/css';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import type { DataTableProps } from './data-table.types';
import type { ColumnFiltersState, RowSelectionState, SortingState, Updater } from '@tanstack/react-table';
import type { ReactNode } from 'react';

import { InputField } from '../../forms/input-field';
import { Spinner } from '../spinner';
import { tableRecipe } from './data-table.recipe';

// ── Module-level style constants ──────────────────────────────────────────────

const outerWrapperStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '3',
});

const sortHeaderStyles = css({
  display: 'flex',
  alignItems: 'center',
  gap: '1',
});

const filterInputStyles = css({
  marginTop: '2',
  width: '100%',
});

const loadingCellStyles = css({
  textAlign: 'center',
  padding: '8',
});

const paginationRowStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2',
  fontSize: 'sm',
  color: 'fg.muted',
});

const paginationButtonsStyles = css({
  display: 'flex',
  alignItems: 'center',
  gap: '1',
});

const pageIndicatorStyles = css({
  paddingInline: '2',
});

// ─────────────────────────────────────────────────────────────────────────────

interface SortIconProps {
  sorted: 'asc' | 'desc' | false;
  className?: string;
}

function SortIcon({ sorted, className }: SortIconProps): React.ReactNode {
  return (
    <span className={className} data-sort={String(sorted)}>
      {sorted === 'asc' && <ArrowUpIcon className="icon icon-sm" />}
      {sorted === 'desc' && <ArrowDownIcon className="icon icon-sm" />}
      {!sorted && <ChevronsUpDownIcon className="icon icon-sm" />}
    </span>
  );
}

interface PaginationProps {
  'className'?: string;
  'disabled'?: boolean;
  'aria-label': string;
  'onClick': () => void;
  'children': ReactNode;
}

function PaginationButton({ className, disabled, children, ...rest }: PaginationProps): React.ReactNode {
  return (
    <button className={className} disabled={disabled} type="button" {...rest}>
      {children}
    </button>
  );
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
export function DataTable<TData>({
  data,
  columns,
  classNames,
  caption,
  loading = false,
  pageSize = 20,
  emptyMessage = 'No results found.',
  getRowId,
  selectedRows,
  onSelectionChange,
}: DataTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [internalRowSelection, setInternalRowSelection] = useState<RowSelectionState>({});

  const isSelectionControlled = Boolean(selectedRows && onSelectionChange);

  const controlledRowSelection: RowSelectionState = selectedRows
    ? Object.fromEntries(
        selectedRows.map((row, index) => {
          const id = getRowId?.(row, index) ?? ((row as any).id as string | undefined) ?? String(index);
          return [id, true];
        }),
      )
    : {};

  const effectiveRowSelection = isSelectionControlled ? controlledRowSelection : internalRowSelection;

  const handleRowSelectionChange = (updater: Updater<RowSelectionState>) => {
    const next = typeof updater === 'function' ? updater(effectiveRowSelection) : updater;

    if (isSelectionControlled && onSelectionChange) {
      const nextSelected = data.filter((row, index) => {
        const id = getRowId?.(row, index) ?? ((row as any).id as string | undefined) ?? String(index);
        return Boolean(next[id]);
      });
      onSelectionChange(nextSelected);
    } else {
      setInternalRowSelection(next);
    }
  };

  const table = useReactTable<TData>({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      rowSelection: effectiveRowSelection,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: handleRowSelectionChange,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize,
      },
    },
    getRowId,
  });

  const styles = tableRecipe();
  const { filterInput, paginationButton } = classNames;

  const headerGroups = table.getHeaderGroups();
  const allColumns = table.getAllColumns();
  const rowModel = table.getRowModel();

  const hasRows = rowModel.rows.length > 0;
  const isLoading = loading;

  return (
    <div className={outerWrapperStyles}>
      <div className={styles.root}>
        <table className={styles.table}>
          {caption ? <caption className={styles.caption}>{caption}</caption> : null}

          <thead className={styles.thead}>
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id} className={styles.headerRow}>
                {headerGroup.headers.map((header) => {
                  const canSort = header.column.getCanSort();
                  const canFilter = header.column.getCanFilter();

                  return (
                    <th
                      key={header.id}
                      className={styles.th}
                      data-sortable={canSort ? 'true' : undefined}
                      style={{
                        width: header.getSize() !== 150 ? `${header.getSize()}px` : undefined,
                      }}
                    >
                      <div
                        className={sortHeaderStyles}
                        onClick={canSort ? header.column.getToggleSortingHandler() : undefined}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                        {canSort && (
                          <SortIcon
                            sorted={header.column.getIsSorted() as 'asc' | 'desc' | false}
                            className={styles.sortIcon}
                          />
                        )}
                      </div>

                      {canFilter ? (
                        <InputField.Root
                          size="sm"
                          className={cx(filterInputStyles, filterInput)}
                          value={(header.column.getFilterValue() as string) ?? ''}
                          onChange={(event) => header.column.setFilterValue(event.target.value)}
                          placeholder="Filter…"
                          onClick={(event) => event.stopPropagation()}
                        />
                      ) : null}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>

          <tbody className={styles.tbody}>
            {isLoading ? (
              <tr className={styles.tr}>
                <td
                  className={[styles.td, loadingCellStyles].filter(Boolean).join(' ')}
                  colSpan={allColumns.length || 1}
                >
                  <Spinner size={20} />
                </td>
              </tr>
            ) : !hasRows ? (
              <tr className={styles.tr}>
                <td className={styles.emptyState ?? styles.td} colSpan={allColumns.length || 1}>
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              rowModel.rows.map((row) => (
                <tr
                  key={row.id}
                  className={styles.tr}
                  data-selected={row.getIsSelected() ? 'true' : undefined}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className={styles.td}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className={paginationRowStyles}>
        <span>
          {table.getFilteredSelectedRowModel().rows.length > 0 &&
            `${table.getFilteredSelectedRowModel().rows.length} of `}
          {table.getFilteredRowModel().rows.length} row(s)
        </span>

        <div className={paginationButtonsStyles}>
          <PaginationButton
            className={paginationButton}
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            aria-label="First page"
          >
            <DoubleArrowLeftIcon className="icon icon-sm" />
          </PaginationButton>

          <PaginationButton
            className={paginationButton}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            aria-label="Previous page"
          >
            <ChevronLeftIcon className="icon icon-sm" />
          </PaginationButton>

          <span className={pageIndicatorStyles}>
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </span>

          <PaginationButton
            className={paginationButton}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            aria-label="Next page"
          >
            <ChevronRightIcon className="icon icon-sm" />
          </PaginationButton>

          <PaginationButton
            className={paginationButton}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            aria-label="Last page"
          >
            <DoubleArrowRightIcon className="icon icon-sm" />
          </PaginationButton>
        </div>
      </div>
    </div>
  );
}
