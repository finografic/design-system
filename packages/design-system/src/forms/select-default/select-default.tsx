/**
 * SelectDefault — pre-composed Select with a simple `options[]` API.
 *
 * Accepts a flat array of `SelectOption` objects instead of requiring an Ark
 * collection. Uses `selectRecipe` for styling — identical appearance to the
 * full `Select.*` compound.
 *
 * **Single-select (default):** `value?: string`, `onSelect?: (v: string) => void`.
 * **Multi-select:** add `multiple` prop — `value` becomes `string[]` and
 * `onSelect` receives `string[]`. Selected rows show a check via `ItemIndicator`.
 *
 * For full composition control (groups, custom item content, clear trigger, etc.)
 * use `Select.*` parts directly.
 *
 * @example
 * ```tsx
 * import { SelectDefault } from '@finografic/design-system/forms';
 *
 * // Single
 * <SelectDefault
 *   options={[{ value: 'en', label: 'English' }, { value: 'es', label: 'Spanish' }]}
 *   value={lang}
 *   onSelect={setLang}
 * />
 *
 * // Multi
 * <SelectDefault
 *   multiple
 *   options={roles}
 *   value={selectedRoles}
 *   onSelect={setSelectedRoles}
 * />
 * ```
 */
import { CheckIcon, ChevronDownIcon } from '@finografic/icons';

import { createListCollection, Select as ArkSelect } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import { forwardRef, useMemo } from 'react';

import { selectRecipe } from '../select/select.recipe';
import type { SelectDefaultProps } from './select-default.types';

export const SelectDefault = forwardRef<HTMLButtonElement, SelectDefaultProps>(
  (props, ref) => {
    const {
      options,
      placeholder = 'Select…',
      disabled = false,
      allowEmpty = false,
      size = 'md',
      id,
      name,
      className,
      onBlur,
      onOpenChange,
      onHighlightChange,
      multiple,
    } = props;

    const styles = selectRecipe({ size });

    const items = useMemo(() => {
      const base = options.map((o) => ({ ...o, label: o.label ?? o.value }));
      if (allowEmpty && !multiple) {
        return [{ value: '', label: placeholder, disabled: false }, ...base];
      }
      return base;
    }, [options, allowEmpty, multiple, placeholder]);

    const collection = useMemo(
      () =>
        createListCollection({
          items,
          itemToValue: (o) => o.value,
          itemToString: (o) => o.label ?? o.value,
        }),
      [items],
    );

    const handleValueChange = ({ value: vals }: { value: string[] }) => {
      if (multiple) {
        (props as Extract<SelectDefaultProps, { multiple: true }>).onSelect?.(vals);
        (props as Extract<SelectDefaultProps, { multiple: true }>).onChange?.(vals);
      } else {
        const next = vals[0] ?? '';
        (props as Extract<SelectDefaultProps, { multiple?: false }>).onSelect?.(next);
        (props as Extract<SelectDefaultProps, { multiple?: false }>).onChange?.(next);
      }
    };

    const arkValue = multiple
      ? ((props as Extract<SelectDefaultProps, { multiple: true }>).value ?? [])
      : (() => {
        const v = (props as Extract<SelectDefaultProps, { multiple?: false }>).value;
        return v !== undefined && v !== '' ? [v] : [];
      })();

    return (
      <ArkSelect.Root
        id={id}
        name={name}
        multiple={multiple}
        collection={collection}
        value={arkValue}
        onValueChange={handleValueChange}
        onOpenChange={({ open }) => {
          onOpenChange?.(open);
          if (!open) onBlur?.();
        }}
        onHighlightChange={({ highlightedValue }) => onHighlightChange?.(highlightedValue)}
        disabled={disabled}
        className={cx(styles.root, className)}
        positioning={{ sameWidth: true, placement: 'bottom-start' }}
      >
        <ArkSelect.Control className={styles.control}>
          <ArkSelect.Trigger ref={ref} className={styles.trigger}>
            <ArkSelect.ValueText placeholder={placeholder} className={styles.valueText} />
            <ArkSelect.Indicator className={styles.indicator}>
              <ChevronDownIcon className="icon icon-sm" aria-hidden />
            </ArkSelect.Indicator>
          </ArkSelect.Trigger>
        </ArkSelect.Control>

        <ArkSelect.Positioner className={styles.positioner}>
          <ArkSelect.Content className={styles.content}>
            <ArkSelect.List className={styles.list}>
              {items.map((item) => (
                <ArkSelect.Item key={item.value} item={item} className={styles.item}>
                  <ArkSelect.ItemText className={styles.itemText}>{item.label}</ArkSelect.ItemText>
                  <ArkSelect.ItemIndicator className={styles.itemIndicator}>
                    <CheckIcon className="icon icon-sm" aria-hidden />
                  </ArkSelect.ItemIndicator>
                </ArkSelect.Item>
              ))}
            </ArkSelect.List>
          </ArkSelect.Content>
        </ArkSelect.Positioner>

        <ArkSelect.HiddenSelect />
      </ArkSelect.Root>
    );
  },
);

SelectDefault.displayName = 'SelectDefault';
