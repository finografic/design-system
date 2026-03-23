import { SelectSearchableVariants } from "./select-searchable.recipe.js";

//#region src/forms/select-searchable/select-searchable.types.d.ts
type SelectSearchableProps = SelectSearchableVariants & {
  options: Array<{
    value: string;
    label?: string;
    description?: string;
    category?: string;
    disabled?: boolean;
  }>;
  value?: string;
  onSelect: (value: string) => void; /** Alias for onSelect — RHF Controller compatible */
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onClear?: () => void; /** Called with the typed string when user wants to add a new item */
  onAddNew?: (value: string) => void;
  name?: string;
  placeholder?: string;
  disabled?: boolean; /** Soft cap on visible items before the list scrolls. Default: 20 */
  windowSize?: number;
  className?: string;
};
//#endregion
export { SelectSearchableProps };
//# sourceMappingURL=select-searchable.types.d.ts.map