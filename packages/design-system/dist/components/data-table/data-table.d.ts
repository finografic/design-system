import { DataTableProps } from "./data-table.types.js";
import * as react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/data-table/data-table.d.ts
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