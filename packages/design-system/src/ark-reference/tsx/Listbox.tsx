// ======================================================================== //
// NOTE: EXAMPLE - Basic
// https://ark-ui.com/docs/components/listbox

import { CheckIcon } from '@finografic/icons';
import { createListCollection, Listbox } from '@ark-ui/react/listbox';

import styles from './listbox.module.css';

export const Basic = () => {
  const collection = createListCollection({
    items: [
      { label: 'United States', value: 'us' },
      { label: 'United Kingdom', value: 'uk' },
      { label: 'Canada', value: 'ca' },
      { label: 'Australia', value: 'au' },
      { label: 'Germany', value: 'de' },
      { label: 'France', value: 'fr' },
      { label: 'Japan', value: 'jp' },
    ],
  });

  return (
    <Listbox.Root className={styles.Root} collection={collection}>
      <Listbox.Label className={styles.Label}>Select Country</Listbox.Label>
      <Listbox.Content className={styles.Content}>
        {collection.items.map((item) => (
          <Listbox.Item className={styles.Item} key={item.value} item={item}>
            <Listbox.ItemText className={styles.ItemText}>{item.label}</Listbox.ItemText>
            <Listbox.ItemIndicator className={styles.ItemIndicator}>
              <CheckIcon />
            </Listbox.ItemIndicator>
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  );
};

// ======================================================================== //
// NOTE: EXAMPLE - Multiple
// https://ark-ui.com/docs/components/listbox

export const Multiple = () => {
  const collection = createListCollection({
    items: [
      { label: 'Monday', value: 'mon' },
      { label: 'Tuesday', value: 'tue' },
      { label: 'Wednesday', value: 'wed' },
      { label: 'Thursday', value: 'thu' },
      { label: 'Friday', value: 'fri' },
      { label: 'Saturday', value: 'sat' },
      { label: 'Sunday', value: 'sun' },
    ],
  });

  return (
    <Listbox.Root className={styles.Root} collection={collection} selectionMode="multiple">
      <Listbox.Label className={styles.Label}>Select Days</Listbox.Label>
      <Listbox.Content className={styles.Content}>
        {collection.items.map((item) => (
          <Listbox.Item className={styles.Item} key={item.value} item={item}>
            <Listbox.ItemText className={styles.ItemText}>{item.label}</Listbox.ItemText>
            <Listbox.ItemIndicator className={styles.ItemIndicator}>
              <CheckIcon />
            </Listbox.ItemIndicator>
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  );
};

// ======================================================================== //
// NOTE: EXAMPLE - Filtering
// https://ark-ui.com/docs/components/listbox

import { useListCollection } from '@ark-ui/react/collection';

import field from './field.module.css';

export const Filtering = () => {
  const { collection, filter } = useListCollection({
    initialItems: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular', value: 'angular' },
      { label: 'Svelte', value: 'svelte' },
      { label: 'Solid', value: 'solid' },
      { label: 'Next.js', value: 'nextjs' },
      { label: 'Nuxt.js', value: 'nuxtjs' },
      { label: 'Remix', value: 'remix' },
      { label: 'Gatsby', value: 'gatsby' },
      { label: 'Preact', value: 'preact' },
    ],
    filter: (itemText, filterText) => itemText.toLowerCase().includes(filterText.toLowerCase()),
  });

  return (
    <Listbox.Root className={styles.Root} collection={collection}>
      <Listbox.Label className={styles.Label}>Select Framework</Listbox.Label>
      <Listbox.Input
        className={field.Input}
        placeholder="Search frameworks..."
        onChange={(e) => filter(e.target.value)}
      />
      <Listbox.Content className={styles.Content}>
        {collection.items.map((item) => (
          <Listbox.Item className={styles.Item} key={item.value} item={item}>
            <Listbox.ItemText className={styles.ItemText}>{item.label}</Listbox.ItemText>
            <Listbox.ItemIndicator className={styles.ItemIndicator}>
              <CheckIcon />
            </Listbox.ItemIndicator>
          </Listbox.Item>
        ))}
        <Listbox.Empty className={styles.Empty}>No frameworks found</Listbox.Empty>
      </Listbox.Content>
    </Listbox.Root>
  );
};
