import type { SelectSearchableVariants } from './select-searchable.recipe';

export type SelectSearchableProps = SelectSearchableVariants & {
  options: Array<{
    value: string;
    label?: string;
    description?: string;
    category?: string;
    disabled?: boolean;
  }>;
  value?: string;
  onSelect: (value: string) => void;
  /** Alias for onSelect — RHF Controller compatible */
  onChange?: (value: string) => void;
  onBlur?: () => void;
  /** Called when the dropdown opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /** Called when keyboard/pointer highlight moves between items. */
  onHighlightChange?: (value: string | null) => void;
  onClear?: () => void;
  /** Called with the typed string when user wants to add a new item */
  onAddNew?: (value: string) => void;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  /** Soft cap on visible items before the list scrolls. Default: 20 */
  windowSize?: number;
  className?: string;
};
