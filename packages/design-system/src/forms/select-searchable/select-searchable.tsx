/**
 * **SelectSearchable** — searchable single-select built on Ark UI Combobox.
 *
 * Filters options via `match-sorter` as the user types. Supports an optional
 * "Add new" affordance (`onAddNew`) and a clear button (`onClear`).
 *
 * For full composition control use Ark's `Combobox.*` parts directly.
 *
 * @example
 * ```tsx
 * import { SelectSearchable } from '@finografic/design-system/forms';
 *
 * const options = [
 *   { value: 'en', label: 'English' },
 *   { value: 'es', label: 'Spanish' },
 * ];
 *
 * <SelectSearchable
 *   options={options}
 *   value={lang}
 *   onSelect={setLang}
 *   onClear={() => setLang('')}
 *   placeholder="Search languages…"
 * />
 * ```
 */
import { CheckIcon, ChevronDownIcon, MagnifyingGlassIcon, PlusIcon, XIcon } from '@finografic/icons';

import { Combobox as ArkCombobox, createListCollection } from '@ark-ui/react';
import { css, cx } from '@styled-system/css';
import { matchSorter } from 'match-sorter';
import { useMemo, useState } from 'react';

import { selectSearchableRecipe } from './select-searchable.recipe';
import type { SelectSearchableProps } from './select-searchable.types';

/** Small de-emphasised secondary label shown under the primary item label. */
const itemSubLabelStyle = css({ fontSize: '0.75em', opacity: 0.6 });

export function SelectSearchable({
  options,
  value = '',
  onSelect,
  onChange,
  onBlur,
  onOpenChange,
  onHighlightChange,
  onClear,
  onAddNew,
  name,
  placeholder = 'Type to search…',
  disabled = false,
  windowSize = 20,
  size = 'md',
  className,
}: SelectSearchableProps) {
  const styles = selectSearchableRecipe({ size });
  const [inputValue, setInputValue] = useState('');
  const canAddNew = typeof onAddNew === 'function';

  const selectedOption = useMemo(() => options.find((o) => o.value === value), [options, value]);

  const filtered = useMemo(() => {
    if (!inputValue.trim()) return options.slice(0, windowSize);
    return matchSorter(options, inputValue, {
      keys: ['value', 'label', 'description', 'category'],
      threshold: matchSorter.rankings.CONTAINS,
    }).slice(0, windowSize);
  }, [options, inputValue, windowSize]);

  const collection = useMemo(
    () =>
      createListCollection({
        items: filtered,
        itemToValue: (o) => o.value,
        itemToString: (o) => o.label ?? o.value,
      }),
    [filtered],
  );

  const exactMatch = useMemo(() => {
    const q = inputValue.trim().toLowerCase();
    return options.some((o) => o.value.toLowerCase() === q || (o.label ?? '').toLowerCase() === q);
  }, [options, inputValue]);

  const showAddNew = canAddNew && inputValue.trim().length > 0 && !exactMatch;
  const LeadIcon = showAddNew ? PlusIcon : MagnifyingGlassIcon;

  const handleValueChange = ({ value: vals }: { value: string[] }) => {
    const next = vals[0] ?? '';
    onSelect(next);
    onChange?.(next);
    setInputValue('');
  };

  const handleAddNew = () => {
    if (showAddNew) {
      onAddNew!(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <ArkCombobox.Root
      name={name}
      collection={collection}
      value={value ? [value] : []}
      inputValue={inputValue}
      onInputValueChange={({ inputValue: v }) => setInputValue(v)}
      onValueChange={handleValueChange}
      onOpenChange={({ open }) => {
        setInputValue('');
        onOpenChange?.(open);
        if (!open) onBlur?.();
      }}
      onHighlightChange={({ highlightedValue }) => onHighlightChange?.(highlightedValue)}
      disabled={disabled}
      openOnClick
      className={cx(styles.root, className)}
      positioning={{ sameWidth: true, placement: 'bottom-start' }}
    >
      <ArkCombobox.Control className={styles.control}>
        <span
          className={styles.leadIcon}
          data-interactive={showAddNew ? 'true' : undefined}
          aria-hidden
          onClick={showAddNew ? handleAddNew : undefined}
        >
          <LeadIcon className="icon icon-sm" />
        </span>

        <ArkCombobox.Input
          className={styles.input}
          placeholder={selectedOption ? (selectedOption.label ?? selectedOption.value) : placeholder}
        />

        {value && onClear && (
          <button
            type="button"
            className={styles.clearTrigger}
            onClick={(e) => {
              e.stopPropagation();
              onClear();
              setInputValue('');
            }}
            aria-label="Clear"
            tabIndex={-1}
          >
            <XIcon className="icon icon-sm" aria-hidden />
          </button>
        )}

        <ArkCombobox.Trigger className={styles.trigger} aria-label="Toggle">
          <ChevronDownIcon className="icon icon-sm" aria-hidden />
        </ArkCombobox.Trigger>
      </ArkCombobox.Control>

      <ArkCombobox.Positioner className={styles.positioner}>
        <ArkCombobox.Content className={styles.content}>
          <ArkCombobox.List className={styles.list}>
            {filtered.length === 0 && !showAddNew && (
              <div className={styles.emptyState}>No options found</div>
            )}

            {filtered.map((item) => (
              <ArkCombobox.Item key={item.value} item={item} className={styles.item}>
                <ArkCombobox.ItemText className={styles.itemText}>
                  {item.label && item.label !== item.value ? (
                    <>
                      <span>{item.label}</span>
                      <span className={itemSubLabelStyle}>{item.value}</span>
                    </>
                  ) : (
                    item.value
                  )}
                </ArkCombobox.ItemText>
                <ArkCombobox.ItemIndicator className={styles.itemIndicator}>
                  <CheckIcon className="icon icon-sm" aria-hidden />
                </ArkCombobox.ItemIndicator>
              </ArkCombobox.Item>
            ))}

            {showAddNew && (
              <button type="button" className={styles.addNew} onClick={handleAddNew}>
                <PlusIcon className="icon icon-sm" aria-hidden />
                Add &ldquo;{inputValue.trim()}&rdquo;
              </button>
            )}
          </ArkCombobox.List>
        </ArkCombobox.Content>
      </ArkCombobox.Positioner>
    </ArkCombobox.Root>
  );
}

SelectSearchable.displayName = 'SelectSearchable';
