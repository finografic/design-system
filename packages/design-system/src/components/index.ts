// ── Primitive components ─────────────────────────────────────────────────────
export type { SpinnerProps } from './spinner';
export { Spinner } from './spinner';

// ── Styled wrappers (recipe-ready) ───────────────────────────────────────────
export type { BadgeProps } from './badge';
export { Badge } from './badge';
export type { ButtonProps } from './button';
export { Button } from './button';
export type { CalloutProps } from './callout';
export { Callout } from './callout';
export type { CardProps } from './card';
export { Card } from './card';
export type { TextProps } from './text';
export { Text } from './text';

// Data table — TanStack Table + tableRecipe
export type {
  DataTableClassNames,
  DataTableColumn,
  DataTableProps,
  DataTableTableClassNames,
} from './data-table';
export { DataTable } from './data-table';

// ── Pre-composed patterns ─────────────────────────────────────────────────────
export type { DialogGenericConfig, DialogGenericFooter, DialogGenericTab } from './dialog-generic';
export { DialogGeneric } from './dialog-generic';

// ── Ark UI primitives (re-exported for consistent imports) ───────────────────
// Use these when you need full composition control.
// Apply recipe classNames per slot: e.g. checkboxRecipe({ size: 'md' })
export type { DialogDSClassNames, DialogDSProps } from './dialog';
export { Dialog, DialogDS } from './dialog';
export type { DialogRootPropsDS, DialogSize } from './dialog/dialog.types';
export type {
  MenuHighlightChangeDetails,
  MenuOpenChangeDetails,
  MenuSelectionDetails,
} from './menu';
export type { MenuDSClassNames, MenuDSGroup, MenuDSItem, MenuDSProps } from './menu';
export { Menu, MenuDS } from './menu';
export type { PopoverOpenChangeDetails } from './popover';
export type { PopoverDSClassNames, PopoverDSProps } from './popover';
export { Popover, PopoverDS } from './popover';
export type { TabsFocusChangeDetails, TabsValueChangeDetails } from './tabs';
export type { TabsDSClassNames, TabsDSProps, TabsDSTab } from './tabs';
export { Tabs, TabsDS } from './tabs';
export { createToaster, Toast, Toaster } from './toast';
export type { TooltipOpenChangeDetails } from './tooltip';
export type { TooltipDSClassNames, TooltipDSProps } from './tooltip';
export { Tooltip, TooltipDS } from './tooltip';
