import { DataTableProps } from "./data-table.types.js";
import * as react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/data-table/data-table.d.ts
/**
 * **DataTable** — TanStack Table wrapper with sorting, filtering, pagination, and row selection.
 *
 * Styles applied via `tableRecipe`. Pass `classNames.filterInput` and `classNames.paginationButton`
 * to style the per-column filter input and pagination buttons respectively.
 *
 * @example
 * ```tsx
 * import { DataTable } from '@finografic/design-system/components';
 * import { createColumnHelper } from '@tanstack/react-table';
 *
 * const col = createColumnHelper<User>();
 * const columns = [
 *   col.accessor('name', { header: 'Name' }),
 *   col.accessor('email', { header: 'Email' }),
 * ];
 *
 * <DataTable
 *   data={users}
 *   columns={columns}
 *   classNames={{ table: {} }}
 * />
 * ```
 */
declare function DataTable<TData>({
  data,
  columns,
  classNames,
  caption,
  loading,
  pageSize,
  emptyMessage,
  getRowId,
  selectedRows,
  onSelectionChange
}: DataTableProps<TData>): react_jsx_runtime0.JSX.Element;
//#endregion
export { DataTable };
//# sourceMappingURL=data-table.d.ts.map