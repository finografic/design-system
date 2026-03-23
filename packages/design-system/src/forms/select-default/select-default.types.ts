export interface SelectOption {
  value: string;
  label?: string;
  description?: string;
  category?: string;
  disabled?: boolean;
}

interface SelectDefaultBaseProps {
  options: SelectOption[];
  onBlur?: () => void;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  /** Prepend an empty option (value: '') with the placeholder label */
  allowEmpty?: boolean;
  size?: 'sm' | 'md' | 'lg';
  id?: string;
  className?: string;
}

/** Single-select (default) */
interface SelectDefaultSingleProps extends SelectDefaultBaseProps {
  multiple?: false;
  value?: string;
  onSelect?: (value: string) => void;
  /** RHF Controller-compatible alias for onSelect */
  onChange?: (value: string) => void;
}

/** Multi-select — pass `multiple` to enable */
interface SelectDefaultMultiProps extends SelectDefaultBaseProps {
  multiple: true;
  value?: string[];
  onSelect?: (value: string[]) => void;
  /** RHF Controller-compatible alias for onSelect */
  onChange?: (value: string[]) => void;
}

export type SelectDefaultProps = SelectDefaultSingleProps | SelectDefaultMultiProps;
