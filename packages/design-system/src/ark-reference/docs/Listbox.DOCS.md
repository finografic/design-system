<ComponentPreview id="Listbox" />

## Anatomy

{/_ <Anatomy id="listbox" /> _/}

```tsx
<Listbox.Root>
  <Listbox.Label />
  <Listbox.Content>
    <Listbox.ItemGroup>
      <Listbox.ItemGroupLabel />
      <Listbox.Item>
        <Listbox.ItemText />
        <Listbox.ItemIndicator />
      </Listbox.Item>
    </Listbox.ItemGroup>
  </Listbox.Content>
  <Listbox.ValueText />
</Listbox.Root>
```

## Examples

### Basic

Here's a basic example of the Listbox component.

**Example: basic**

#### React

```tsx
import { Listbox, createListCollection } from '@ark-ui/react/listbox';
import { CheckIcon } from 'lucide-react';
import styles from 'styles/listbox.module.css';

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
```

#### Solid

```tsx
import { Listbox, createListCollection } from '@ark-ui/solid/listbox';
import { CheckIcon } from 'lucide-solid';
import { Index } from 'solid-js';
import styles from 'styles/listbox.module.css';

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
    <Listbox.Root class={styles.Root} collection={collection}>
      <Listbox.Label class={styles.Label}>Select Country</Listbox.Label>
      <Listbox.Content class={styles.Content}>
        <Index each={collection.items}>
          {(item) => (
            <Listbox.Item class={styles.Item} item={item()}>
              <Listbox.ItemText class={styles.ItemText}>{item().label}</Listbox.ItemText>
              <Listbox.ItemIndicator class={styles.ItemIndicator}>
                <CheckIcon />
              </Listbox.ItemIndicator>
            </Listbox.Item>
          )}
        </Index>
      </Listbox.Content>
    </Listbox.Root>
  );
};
```

#### Vue

```vue
<script setup lang="ts">
import { Listbox, createListCollection } from '@ark-ui/vue/listbox';
import { CheckIcon } from 'lucide-vue-next';
import styles from 'styles/listbox.module.css';

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
</script>

<template>
  <Listbox.Root :class="styles.Root" :collection="collection">
    <Listbox.Label :class="styles.Label">Select Country</Listbox.Label>
    <Listbox.Content :class="styles.Content">
      <Listbox.Item v-for="item in collection.items" :key="item.value" :class="styles.Item" :item="item">
        <Listbox.ItemText :class="styles.ItemText">{{ item.label }}</Listbox.ItemText>
        <Listbox.ItemIndicator :class="styles.ItemIndicator">
          <CheckIcon />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    </Listbox.Content>
  </Listbox.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { Listbox, createListCollection } from '@ark-ui/svelte/listbox'
  import CheckIcon from 'lucide-svelte/icons/check'
  import styles from 'styles/listbox.module.css'

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
  })
</script>

<Listbox.Root class={styles.Root} {collection}>
  <Listbox.Label class={styles.Label}>Select Country</Listbox.Label>
  <Listbox.Content class={styles.Content}>
    {#each collection.items as item (item.value)}
      <Listbox.Item class={styles.Item} {item}>
        <Listbox.ItemText class={styles.ItemText}>{item.label}</Listbox.ItemText>
        <Listbox.ItemIndicator class={styles.ItemIndicator}>
          <CheckIcon />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    {/each}
  </Listbox.Content>
</Listbox.Root>

```

### Controlled

The Listbox component can be controlled by using the `value` and `onValueChange` props. This allows you to manage the
selected value externally.

**Example: controlled**

#### React

```tsx
import { Listbox, createListCollection } from '@ark-ui/react/listbox';
import { CheckIcon } from 'lucide-react';
import { useState } from 'react';
import styles from 'styles/listbox.module.css';

export const Controlled = () => {
  const collection = createListCollection({
    items: [
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'Extra Large', value: 'xl' },
    ],
  });
  const [value, setValue] = useState(['md']);

  return (
    <Listbox.Root
      className={styles.Root}
      collection={collection}
      value={value}
      onValueChange={(e) => setValue(e.value)}
    >
      <Listbox.Label className={styles.Label}>Select Size</Listbox.Label>
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
```

#### Solid

```tsx
import { Listbox, createListCollection } from '@ark-ui/solid/listbox';
import { CheckIcon } from 'lucide-solid';
import { Index, createSignal } from 'solid-js';
import styles from 'styles/listbox.module.css';

export const Controlled = () => {
  const collection = createListCollection({
    items: [
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'Extra Large', value: 'xl' },
    ],
  });
  const [value, setValue] = createSignal(['md']);

  return (
    <Listbox.Root
      class={styles.Root}
      collection={collection}
      value={value()}
      onValueChange={(e) => setValue(e.value)}
    >
      <Listbox.Label class={styles.Label}>Select Size</Listbox.Label>
      <Listbox.Content class={styles.Content}>
        <Index each={collection.items}>
          {(item) => (
            <Listbox.Item class={styles.Item} item={item()}>
              <Listbox.ItemText class={styles.ItemText}>{item().label}</Listbox.ItemText>
              <Listbox.ItemIndicator class={styles.ItemIndicator}>
                <CheckIcon />
              </Listbox.ItemIndicator>
            </Listbox.Item>
          )}
        </Index>
      </Listbox.Content>
    </Listbox.Root>
  );
};
```

#### Vue

```vue
<script setup lang="ts">
import { Listbox, createListCollection } from '@ark-ui/vue/listbox';
import { CheckIcon } from 'lucide-vue-next';
import { ref } from 'vue';
import styles from 'styles/listbox.module.css';

const collection = createListCollection({
  items: [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Extra Large', value: 'xl' },
  ],
});

const value = ref(['md']);
</script>

<template>
  <Listbox.Root :class="styles.Root" :collection="collection" v-model="value">
    <Listbox.Label :class="styles.Label">Select Size</Listbox.Label>
    <Listbox.Content :class="styles.Content">
      <Listbox.Item v-for="item in collection.items" :key="item.value" :class="styles.Item" :item="item">
        <Listbox.ItemText :class="styles.ItemText">{{ item.label }}</Listbox.ItemText>
        <Listbox.ItemIndicator :class="styles.ItemIndicator">
          <CheckIcon />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    </Listbox.Content>
  </Listbox.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { Listbox, createListCollection } from '@ark-ui/svelte/listbox'
  import CheckIcon from 'lucide-svelte/icons/check'
  import styles from 'styles/listbox.module.css'

  const collection = createListCollection({
    items: [
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'Extra Large', value: 'xl' },
    ],
  })

  let value = $state(['md'])
</script>

<Listbox.Root class={styles.Root} {collection} {value} onValueChange={(e) => (value = e.value)}>
  <Listbox.Label class={styles.Label}>Select Size</Listbox.Label>
  <Listbox.Content class={styles.Content}>
    {#each collection.items as item (item.value)}
      <Listbox.Item class={styles.Item} {item}>
        <Listbox.ItemText class={styles.ItemText}>{item.label}</Listbox.ItemText>
        <Listbox.ItemIndicator class={styles.ItemIndicator}>
          <CheckIcon />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    {/each}
  </Listbox.Content>
</Listbox.Root>

```

### Root Provider

An alternative way to control the listbox is to use the `RootProvider` component and the `useListbox` hook. This way you
can access the state and methods from outside the component.

**Example: root-provider**

#### React

```tsx
import { Listbox, createListCollection, useListbox } from '@ark-ui/react/listbox';
import { CheckIcon } from 'lucide-react';
import button from 'styles/button.module.css';
import styles from 'styles/listbox.module.css';

export const RootProvider = () => {
  const collection = createListCollection({
    items: [
      { label: 'Low', value: 'low' },
      { label: 'Medium', value: 'medium' },
      { label: 'High', value: 'high' },
      { label: 'Critical', value: 'critical' },
    ],
  });
  const listbox = useListbox({ collection });

  return (
    <div className="stack">
      <button className={button.Root} onClick={() => listbox.setValue(['high'])}>
        Set to High
      </button>
      <Listbox.RootProvider className={styles.Root} value={listbox}>
        <Listbox.Label className={styles.Label}>Select Priority</Listbox.Label>
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
      </Listbox.RootProvider>
    </div>
  );
};
```

#### Solid

```tsx
import { Listbox, createListCollection, useListbox } from '@ark-ui/solid/listbox';
import { CheckIcon } from 'lucide-solid';
import { Index } from 'solid-js';
import button from 'styles/button.module.css';
import styles from 'styles/listbox.module.css';

export const RootProvider = () => {
  const collection = createListCollection({
    items: [
      { label: 'Low', value: 'low' },
      { label: 'Medium', value: 'medium' },
      { label: 'High', value: 'high' },
      { label: 'Critical', value: 'critical' },
    ],
  });
  const listbox = useListbox({ collection });

  return (
    <div class="stack">
      <button class={button.Root} onClick={() => listbox().setValue(['high'])}>
        Set to High
      </button>
      <Listbox.RootProvider class={styles.Root} value={listbox}>
        <Listbox.Label class={styles.Label}>Select Priority</Listbox.Label>
        <Listbox.Content class={styles.Content}>
          <Index each={collection.items}>
            {(item) => (
              <Listbox.Item class={styles.Item} item={item()}>
                <Listbox.ItemText class={styles.ItemText}>{item().label}</Listbox.ItemText>
                <Listbox.ItemIndicator class={styles.ItemIndicator}>
                  <CheckIcon />
                </Listbox.ItemIndicator>
              </Listbox.Item>
            )}
          </Index>
        </Listbox.Content>
      </Listbox.RootProvider>
    </div>
  );
};
```

#### Vue

```vue
<script setup lang="ts">
import { Listbox, createListCollection, useListbox } from '@ark-ui/vue/listbox';
import { CheckIcon } from 'lucide-vue-next';
import { computed } from 'vue';
import button from 'styles/button.module.css';
import styles from 'styles/listbox.module.css';

const collection = createListCollection({
  items: [
    { label: 'Low', value: 'low' },
    { label: 'Medium', value: 'medium' },
    { label: 'High', value: 'high' },
    { label: 'Critical', value: 'critical' },
  ],
});

const listboxValue = useListbox({ collection });
const listbox = computed(() => listboxValue.value);
</script>

<template>
  <div class="stack">
    <button :class="button.Root" @click="listbox.setValue(['high'])">Set to High</button>
    <Listbox.RootProvider :class="styles.Root" :value="listbox">
      <Listbox.Label :class="styles.Label">Select Priority</Listbox.Label>
      <Listbox.Content :class="styles.Content">
        <Listbox.Item v-for="item in collection.items" :key="item.value" :class="styles.Item" :item="item">
          <Listbox.ItemText :class="styles.ItemText">{{ item.label }}</Listbox.ItemText>
          <Listbox.ItemIndicator :class="styles.ItemIndicator">
            <CheckIcon />
          </Listbox.ItemIndicator>
        </Listbox.Item>
      </Listbox.Content>
    </Listbox.RootProvider>
  </div>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { Listbox, createListCollection, useListbox } from '@ark-ui/svelte/listbox'
  import CheckIcon from 'lucide-svelte/icons/check'
  import button from 'styles/button.module.css'
  import styles from 'styles/listbox.module.css'

  const collection = createListCollection({
    items: [
      { label: 'Low', value: 'low' },
      { label: 'Medium', value: 'medium' },
      { label: 'High', value: 'high' },
      { label: 'Critical', value: 'critical' },
    ],
  })

  const listbox = useListbox({ collection })
</script>

<div class="stack">
  <button class={button.Root} onclick={() => listbox().setValue(['high'])}>Set to High</button>
  <Listbox.RootProvider class={styles.Root} value={listbox}>
    <Listbox.Label class={styles.Label}>Select Priority</Listbox.Label>
    <Listbox.Content class={styles.Content}>
      {#each collection.items as item (item.value)}
        <Listbox.Item class={styles.Item} {item}>
          <Listbox.ItemText class={styles.ItemText}>{item.label}</Listbox.ItemText>
          <Listbox.ItemIndicator class={styles.ItemIndicator}>
            <CheckIcon />
          </Listbox.ItemIndicator>
        </Listbox.Item>
      {/each}
    </Listbox.Content>
  </Listbox.RootProvider>
</div>

```

### Disabled Item

Listbox items can be disabled using the `disabled` prop on the collection item.

**Example: disabled-item**

#### React

```tsx
import { Listbox, createListCollection } from '@ark-ui/react/listbox';
import { CheckIcon } from 'lucide-react';
import styles from 'styles/listbox.module.css';

export const DisabledItem = () => {
  const collection = createListCollection({
    items: [
      { label: 'Free', value: 'free' },
      { label: 'Pro', value: 'pro' },
      { label: 'Enterprise', value: 'enterprise', disabled: true },
      { label: 'Custom', value: 'custom' },
    ],
  });

  return (
    <Listbox.Root className={styles.Root} collection={collection}>
      <Listbox.Label className={styles.Label}>Select Plan</Listbox.Label>
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
```

#### Solid

```tsx
import { Listbox, createListCollection } from '@ark-ui/solid/listbox';
import { CheckIcon } from 'lucide-solid';
import { Index } from 'solid-js';
import styles from 'styles/listbox.module.css';

export const DisabledItem = () => {
  const collection = createListCollection({
    items: [
      { label: 'Free', value: 'free' },
      { label: 'Pro', value: 'pro' },
      { label: 'Enterprise', value: 'enterprise', disabled: true },
      { label: 'Custom', value: 'custom' },
    ],
  });

  return (
    <Listbox.Root class={styles.Root} collection={collection}>
      <Listbox.Label class={styles.Label}>Select Plan</Listbox.Label>
      <Listbox.Content class={styles.Content}>
        <Index each={collection.items}>
          {(item) => (
            <Listbox.Item class={styles.Item} item={item()}>
              <Listbox.ItemText class={styles.ItemText}>{item().label}</Listbox.ItemText>
              <Listbox.ItemIndicator class={styles.ItemIndicator}>
                <CheckIcon />
              </Listbox.ItemIndicator>
            </Listbox.Item>
          )}
        </Index>
      </Listbox.Content>
    </Listbox.Root>
  );
};
```

#### Vue

```vue
<script setup lang="ts">
import { Listbox, createListCollection } from '@ark-ui/vue/listbox';
import { CheckIcon } from 'lucide-vue-next';
import styles from 'styles/listbox.module.css';

const collection = createListCollection({
  items: [
    { label: 'Free', value: 'free' },
    { label: 'Pro', value: 'pro' },
    { label: 'Enterprise', value: 'enterprise', disabled: true },
    { label: 'Custom', value: 'custom' },
  ],
});
</script>

<template>
  <Listbox.Root :class="styles.Root" :collection="collection">
    <Listbox.Label :class="styles.Label">Select Plan</Listbox.Label>
    <Listbox.Content :class="styles.Content">
      <Listbox.Item v-for="item in collection.items" :key="item.value" :class="styles.Item" :item="item">
        <Listbox.ItemText :class="styles.ItemText">{{ item.label }}</Listbox.ItemText>
        <Listbox.ItemIndicator :class="styles.ItemIndicator">
          <CheckIcon />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    </Listbox.Content>
  </Listbox.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { Listbox, createListCollection } from '@ark-ui/svelte/listbox'
  import CheckIcon from 'lucide-svelte/icons/check'
  import styles from 'styles/listbox.module.css'

  const collection = createListCollection({
    items: [
      { label: 'Free', value: 'free' },
      { label: 'Pro', value: 'pro' },
      { label: 'Enterprise', value: 'enterprise', disabled: true },
      { label: 'Custom', value: 'custom' },
    ],
  })
</script>

<Listbox.Root class={styles.Root} {collection}>
  <Listbox.Label class={styles.Label}>Select Plan</Listbox.Label>
  <Listbox.Content class={styles.Content}>
    {#each collection.items as item (item.value)}
      <Listbox.Item class={styles.Item} {item}>
        <Listbox.ItemText class={styles.ItemText}>{item.label}</Listbox.ItemText>
        <Listbox.ItemIndicator class={styles.ItemIndicator}>
          <CheckIcon />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    {/each}
  </Listbox.Content>
</Listbox.Root>

```

> You can also use the `isItemDisabled` within the `createListCollection` to disable items based on a condition.

### Multiple

You can set the `selectionMode` property as `multiple` to allow the user to select multiple items at a time.

**Example: multiple**

#### React

```tsx
import { Listbox, createListCollection } from '@ark-ui/react/listbox';
import { CheckIcon } from 'lucide-react';
import styles from 'styles/listbox.module.css';

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
```

#### Solid

```tsx
import { Listbox, createListCollection } from '@ark-ui/solid/listbox';
import { CheckIcon } from 'lucide-solid';
import { Index } from 'solid-js';
import styles from 'styles/listbox.module.css';

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
    <Listbox.Root class={styles.Root} collection={collection} selectionMode="multiple">
      <Listbox.Label class={styles.Label}>Select Days</Listbox.Label>
      <Listbox.Content class={styles.Content}>
        <Index each={collection.items}>
          {(item) => (
            <Listbox.Item class={styles.Item} item={item()}>
              <Listbox.ItemText class={styles.ItemText}>{item().label}</Listbox.ItemText>
              <Listbox.ItemIndicator class={styles.ItemIndicator}>
                <CheckIcon />
              </Listbox.ItemIndicator>
            </Listbox.Item>
          )}
        </Index>
      </Listbox.Content>
    </Listbox.Root>
  );
};
```

#### Vue

```vue
<script setup lang="ts">
import { Listbox, createListCollection } from '@ark-ui/vue/listbox';
import { CheckIcon } from 'lucide-vue-next';
import styles from 'styles/listbox.module.css';

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
</script>

<template>
  <Listbox.Root :class="styles.Root" :collection="collection" selectionMode="multiple">
    <Listbox.Label :class="styles.Label">Select Days</Listbox.Label>
    <Listbox.Content :class="styles.Content">
      <Listbox.Item v-for="item in collection.items" :key="item.value" :class="styles.Item" :item="item">
        <Listbox.ItemText :class="styles.ItemText">{{ item.label }}</Listbox.ItemText>
        <Listbox.ItemIndicator :class="styles.ItemIndicator">
          <CheckIcon />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    </Listbox.Content>
  </Listbox.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { Listbox, createListCollection } from '@ark-ui/svelte/listbox'
  import CheckIcon from 'lucide-svelte/icons/check'
  import styles from 'styles/listbox.module.css'

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
  })
</script>

<Listbox.Root class={styles.Root} {collection} selectionMode="multiple">
  <Listbox.Label class={styles.Label}>Select Days</Listbox.Label>
  <Listbox.Content class={styles.Content}>
    {#each collection.items as item (item.value)}
      <Listbox.Item class={styles.Item} {item}>
        <Listbox.ItemText class={styles.ItemText}>{item.label}</Listbox.ItemText>
        <Listbox.ItemIndicator class={styles.ItemIndicator}>
          <CheckIcon />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    {/each}
  </Listbox.Content>
</Listbox.Root>

```

### Grouping

The Listbox component supports grouping items. You can use the `groupBy` function to group items based on a specific
property.

**Example: group**

#### React

```tsx
import { Listbox, createListCollection } from '@ark-ui/react/listbox';
import { CheckIcon } from 'lucide-react';
import styles from 'styles/listbox.module.css';

export const Group = () => {
  const collection = createListCollection({
    items: [
      { label: 'New York', value: 'nyc', region: 'North America' },
      { label: 'Los Angeles', value: 'lax', region: 'North America' },
      { label: 'Toronto', value: 'yyz', region: 'North America' },
      { label: 'London', value: 'lhr', region: 'Europe' },
      { label: 'Paris', value: 'cdg', region: 'Europe' },
      { label: 'Berlin', value: 'ber', region: 'Europe' },
      { label: 'Tokyo', value: 'nrt', region: 'Asia Pacific' },
      { label: 'Singapore', value: 'sin', region: 'Asia Pacific' },
      { label: 'Sydney', value: 'syd', region: 'Asia Pacific' },
    ],
    groupBy: (item) => item.region,
  });

  return (
    <Listbox.Root className={styles.Root} collection={collection}>
      <Listbox.Label className={styles.Label}>Select Region</Listbox.Label>
      <Listbox.Content className={styles.Content}>
        {collection.group().map(([region, items]) => (
          <Listbox.ItemGroup className={styles.ItemGroup} key={region}>
            <Listbox.ItemGroupLabel className={styles.ItemGroupLabel}>{region}</Listbox.ItemGroupLabel>
            {items.map((item) => (
              <Listbox.Item className={styles.Item} key={item.value} item={item}>
                <Listbox.ItemText className={styles.ItemText}>{item.label}</Listbox.ItemText>
                <Listbox.ItemIndicator className={styles.ItemIndicator}>
                  <CheckIcon />
                </Listbox.ItemIndicator>
              </Listbox.Item>
            ))}
          </Listbox.ItemGroup>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  );
};
```

#### Solid

```tsx
import { Listbox, createListCollection } from '@ark-ui/solid/listbox';
import { CheckIcon } from 'lucide-solid';
import { For } from 'solid-js';
import styles from 'styles/listbox.module.css';

export const Group = () => {
  const collection = createListCollection({
    items: [
      { label: 'New York', value: 'nyc', region: 'North America' },
      { label: 'Los Angeles', value: 'lax', region: 'North America' },
      { label: 'Toronto', value: 'yyz', region: 'North America' },
      { label: 'London', value: 'lhr', region: 'Europe' },
      { label: 'Paris', value: 'cdg', region: 'Europe' },
      { label: 'Berlin', value: 'ber', region: 'Europe' },
      { label: 'Tokyo', value: 'nrt', region: 'Asia Pacific' },
      { label: 'Singapore', value: 'sin', region: 'Asia Pacific' },
      { label: 'Sydney', value: 'syd', region: 'Asia Pacific' },
    ],
    groupBy: (item) => item.region,
  });

  return (
    <Listbox.Root class={styles.Root} collection={collection}>
      <Listbox.Label class={styles.Label}>Select Region</Listbox.Label>
      <Listbox.Content class={styles.Content}>
        <For each={collection.group()}>
          {([region, items]) => (
            <Listbox.ItemGroup class={styles.ItemGroup}>
              <Listbox.ItemGroupLabel class={styles.ItemGroupLabel}>{region}</Listbox.ItemGroupLabel>
              <For each={items}>
                {(item) => (
                  <Listbox.Item class={styles.Item} item={item}>
                    <Listbox.ItemText class={styles.ItemText}>{item.label}</Listbox.ItemText>
                    <Listbox.ItemIndicator class={styles.ItemIndicator}>
                      <CheckIcon />
                    </Listbox.ItemIndicator>
                  </Listbox.Item>
                )}
              </For>
            </Listbox.ItemGroup>
          )}
        </For>
      </Listbox.Content>
    </Listbox.Root>
  );
};
```

#### Vue

```vue
<script setup lang="ts">
import { Listbox, createListCollection } from '@ark-ui/vue/listbox';
import { CheckIcon } from 'lucide-vue-next';
import styles from 'styles/listbox.module.css';

const collection = createListCollection({
  items: [
    { label: 'New York', value: 'nyc', region: 'North America' },
    { label: 'Los Angeles', value: 'lax', region: 'North America' },
    { label: 'Toronto', value: 'yyz', region: 'North America' },
    { label: 'London', value: 'lhr', region: 'Europe' },
    { label: 'Paris', value: 'cdg', region: 'Europe' },
    { label: 'Berlin', value: 'ber', region: 'Europe' },
    { label: 'Tokyo', value: 'nrt', region: 'Asia Pacific' },
    { label: 'Singapore', value: 'sin', region: 'Asia Pacific' },
    { label: 'Sydney', value: 'syd', region: 'Asia Pacific' },
  ],
  groupBy: (item) => item.region,
});
</script>

<template>
  <Listbox.Root :class="styles.Root" :collection="collection">
    <Listbox.Label :class="styles.Label">Select Region</Listbox.Label>
    <Listbox.Content :class="styles.Content">
      <Listbox.ItemGroup
        v-for="[region, items] in collection.group()"
        :key="region"
        :class="styles.ItemGroup"
      >
        <Listbox.ItemGroupLabel :class="styles.ItemGroupLabel">{{ region }}</Listbox.ItemGroupLabel>
        <Listbox.Item v-for="item in items" :key="item.value" :class="styles.Item" :item="item">
          <Listbox.ItemText :class="styles.ItemText">{{ item.label }}</Listbox.ItemText>
          <Listbox.ItemIndicator :class="styles.ItemIndicator">
            <CheckIcon />
          </Listbox.ItemIndicator>
        </Listbox.Item>
      </Listbox.ItemGroup>
    </Listbox.Content>
  </Listbox.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { Listbox, createListCollection } from '@ark-ui/svelte/listbox'
  import CheckIcon from 'lucide-svelte/icons/check'
  import styles from 'styles/listbox.module.css'

  const collection = createListCollection({
    items: [
      { label: 'New York', value: 'nyc', region: 'North America' },
      { label: 'Los Angeles', value: 'lax', region: 'North America' },
      { label: 'Toronto', value: 'yyz', region: 'North America' },
      { label: 'London', value: 'lhr', region: 'Europe' },
      { label: 'Paris', value: 'cdg', region: 'Europe' },
      { label: 'Berlin', value: 'ber', region: 'Europe' },
      { label: 'Tokyo', value: 'nrt', region: 'Asia Pacific' },
      { label: 'Singapore', value: 'sin', region: 'Asia Pacific' },
      { label: 'Sydney', value: 'syd', region: 'Asia Pacific' },
    ],
    groupBy: (item) => item.region,
  })
</script>

<Listbox.Root class={styles.Root} {collection}>
  <Listbox.Label class={styles.Label}>Select Region</Listbox.Label>
  <Listbox.Content class={styles.Content}>
    {#each collection.group() as [region, items]}
      <Listbox.ItemGroup class={styles.ItemGroup}>
        <Listbox.ItemGroupLabel class={styles.ItemGroupLabel}>{region}</Listbox.ItemGroupLabel>
        {#each items as item (item.value)}
          <Listbox.Item class={styles.Item} {item}>
            <Listbox.ItemText class={styles.ItemText}>{item.label}</Listbox.ItemText>
            <Listbox.ItemIndicator class={styles.ItemIndicator}>
              <CheckIcon />
            </Listbox.ItemIndicator>
          </Listbox.Item>
        {/each}
      </Listbox.ItemGroup>
    {/each}
  </Listbox.Content>
</Listbox.Root>

```

### Extended Selection

The extended selection mode allows users to select multiple items using keyboard modifiers like `Cmd` (Mac) or `Ctrl`
(Windows/Linux).

**Example: extended-select**

#### React

```tsx
import { Listbox, createListCollection } from '@ark-ui/react/listbox';
import { CheckIcon } from 'lucide-react';
import styles from 'styles/listbox.module.css';

export const ExtendedSelect = () => {
  const collection = createListCollection({
    items: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular', value: 'angular' },
      { label: 'Svelte', value: 'svelte' },
      { label: 'Solid', value: 'solid' },
      { label: 'Preact', value: 'preact' },
    ],
  });

  return (
    <Listbox.Root className={styles.Root} collection={collection} selectionMode="extended">
      <Listbox.Label className={styles.Label}>
        Hold <kbd>⌘</kbd> or <kbd>Ctrl</kbd> to select multiple
      </Listbox.Label>
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
```

#### Solid

```tsx
import { Listbox, createListCollection } from '@ark-ui/solid/listbox';
import { CheckIcon } from 'lucide-solid';
import { Index } from 'solid-js';
import styles from 'styles/listbox.module.css';

export const ExtendedSelect = () => {
  const collection = createListCollection({
    items: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular', value: 'angular' },
      { label: 'Svelte', value: 'svelte' },
      { label: 'Solid', value: 'solid' },
      { label: 'Preact', value: 'preact' },
    ],
  });

  return (
    <Listbox.Root class={styles.Root} collection={collection} selectionMode="extended">
      <Listbox.Label class={styles.Label}>
        Hold <kbd>⌘</kbd> or <kbd>Ctrl</kbd> to select multiple
      </Listbox.Label>
      <Listbox.Content class={styles.Content}>
        <Index each={collection.items}>
          {(item) => (
            <Listbox.Item class={styles.Item} item={item()}>
              <Listbox.ItemText class={styles.ItemText}>{item().label}</Listbox.ItemText>
              <Listbox.ItemIndicator class={styles.ItemIndicator}>
                <CheckIcon />
              </Listbox.ItemIndicator>
            </Listbox.Item>
          )}
        </Index>
      </Listbox.Content>
    </Listbox.Root>
  );
};
```

#### Vue

```vue
<script setup lang="ts">
import { Listbox, createListCollection } from '@ark-ui/vue/listbox';
import { CheckIcon } from 'lucide-vue-next';
import styles from 'styles/listbox.module.css';

const collection = createListCollection({
  items: [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Solid', value: 'solid' },
    { label: 'Preact', value: 'preact' },
  ],
});
</script>

<template>
  <Listbox.Root :class="styles.Root" :collection="collection" selectionMode="extended">
    <Listbox.Label :class="styles.Label">
      Hold
      <kbd>⌘</kbd>
      or
      <kbd>Ctrl</kbd>
      to select multiple
    </Listbox.Label>
    <Listbox.Content :class="styles.Content">
      <Listbox.Item v-for="item in collection.items" :key="item.value" :class="styles.Item" :item="item">
        <Listbox.ItemText :class="styles.ItemText">{{ item.label }}</Listbox.ItemText>
        <Listbox.ItemIndicator :class="styles.ItemIndicator">
          <CheckIcon />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    </Listbox.Content>
  </Listbox.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { Listbox, createListCollection } from '@ark-ui/svelte/listbox'
  import CheckIcon from 'lucide-svelte/icons/check'
  import styles from 'styles/listbox.module.css'

  const collection = createListCollection({
    items: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular', value: 'angular' },
      { label: 'Svelte', value: 'svelte' },
      { label: 'Solid', value: 'solid' },
      { label: 'Preact', value: 'preact' },
    ],
  })
</script>

<Listbox.Root class={styles.Root} {collection} selectionMode="extended">
  <Listbox.Label class={styles.Label}>
    Hold <kbd>⌘</kbd>
    or
    <kbd>Ctrl</kbd>
    to select multiple
  </Listbox.Label>
  <Listbox.Content class={styles.Content}>
    {#each collection.items as item (item.value)}
      <Listbox.Item class={styles.Item} {item}>
        <Listbox.ItemText class={styles.ItemText}>{item.label}</Listbox.ItemText>
        <Listbox.ItemIndicator class={styles.ItemIndicator}>
          <CheckIcon />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    {/each}
  </Listbox.Content>
</Listbox.Root>

```

### Horizontal

Use the `orientation` prop to display the listbox items horizontally.

**Example: horizontal**

#### React

```tsx
import { Listbox, createListCollection } from '@ark-ui/react/listbox';
import { CheckIcon } from 'lucide-react';
import styles from 'styles/listbox.module.css';

export const Horizontal = () => {
  const collection = createListCollection({
    items: [
      {
        title: 'Midnight Dreams',
        artist: 'Luna Ray',
        image: 'https://picsum.photos/seed/album1/300/300',
      },
      {
        title: 'Neon Skyline',
        artist: 'The Electric',
        image: 'https://picsum.photos/seed/album2/300/300',
      },
      {
        title: 'Acoustic Sessions',
        artist: 'Sarah Woods',
        image: 'https://picsum.photos/seed/album3/300/300',
      },
      {
        title: 'Urban Echoes',
        artist: 'Metro Collective',
        image: 'https://picsum.photos/seed/album4/300/300',
      },
      {
        title: 'Summer Vibes',
        artist: 'Coastal Waves',
        image: 'https://picsum.photos/seed/album5/300/300',
      },
    ],
    itemToValue: (item) => item.title,
    itemToString: (item) => item.title,
  });

  return (
    <Listbox.Root className={styles.Root} collection={collection} orientation="horizontal">
      <Listbox.Label className={styles.Label}>Select Album</Listbox.Label>
      <Listbox.Content className={styles.Content}>
        {collection.items.map((item) => (
          <Listbox.Item className={styles.ItemCard} key={item.title} item={item}>
            <Listbox.ItemIndicator className={styles.ItemCardIndicator}>
              <CheckIcon />
            </Listbox.ItemIndicator>
            <img className={styles.ItemCardImage} src={item.image} alt={item.title} />
            <span className={styles.ItemCardTitle}>{item.title}</span>
            <span className={styles.ItemCardArtist}>{item.artist}</span>
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  );
};
```

#### Solid

```tsx
import { Listbox, createListCollection } from '@ark-ui/solid/listbox';
import { CheckIcon } from 'lucide-solid';
import { Index } from 'solid-js';
import styles from 'styles/listbox.module.css';

export const Horizontal = () => {
  const collection = createListCollection({
    items: [
      {
        title: 'Midnight Dreams',
        artist: 'Luna Ray',
        image: 'https://picsum.photos/seed/album1/300/300',
      },
      {
        title: 'Neon Skyline',
        artist: 'The Electric',
        image: 'https://picsum.photos/seed/album2/300/300',
      },
      {
        title: 'Acoustic Sessions',
        artist: 'Sarah Woods',
        image: 'https://picsum.photos/seed/album3/300/300',
      },
      {
        title: 'Urban Echoes',
        artist: 'Metro Collective',
        image: 'https://picsum.photos/seed/album4/300/300',
      },
      {
        title: 'Summer Vibes',
        artist: 'Coastal Waves',
        image: 'https://picsum.photos/seed/album5/300/300',
      },
    ],
    itemToValue: (item) => item.title,
    itemToString: (item) => item.title,
  });

  return (
    <Listbox.Root class={styles.Root} collection={collection} orientation="horizontal">
      <Listbox.Label class={styles.Label}>Select Album</Listbox.Label>
      <Listbox.Content class={styles.Content}>
        <Index each={collection.items}>
          {(item) => (
            <Listbox.Item class={styles.ItemCard} item={item()}>
              <Listbox.ItemIndicator class={styles.ItemCardIndicator}>
                <CheckIcon />
              </Listbox.ItemIndicator>
              <img class={styles.ItemCardImage} src={item().image} alt={item().title} />
              <span class={styles.ItemCardTitle}>{item().title}</span>
              <span class={styles.ItemCardArtist}>{item().artist}</span>
            </Listbox.Item>
          )}
        </Index>
      </Listbox.Content>
    </Listbox.Root>
  );
};
```

#### Vue

```vue
<script setup lang="ts">
import { Listbox, createListCollection } from '@ark-ui/vue/listbox';
import { CheckIcon } from 'lucide-vue-next';
import styles from 'styles/listbox.module.css';

const collection = createListCollection({
  items: [
    {
      title: 'Midnight Dreams',
      artist: 'Luna Ray',
      image: 'https://picsum.photos/seed/album1/300/300',
    },
    {
      title: 'Neon Skyline',
      artist: 'The Electric',
      image: 'https://picsum.photos/seed/album2/300/300',
    },
    {
      title: 'Acoustic Sessions',
      artist: 'Sarah Woods',
      image: 'https://picsum.photos/seed/album3/300/300',
    },
    {
      title: 'Urban Echoes',
      artist: 'Metro Collective',
      image: 'https://picsum.photos/seed/album4/300/300',
    },
    {
      title: 'Summer Vibes',
      artist: 'Coastal Waves',
      image: 'https://picsum.photos/seed/album5/300/300',
    },
  ],
  itemToValue: (item) => item.title,
  itemToString: (item) => item.title,
});
</script>

<template>
  <Listbox.Root :class="styles.Root" :collection="collection" orientation="horizontal">
    <Listbox.Label :class="styles.Label">Select Album</Listbox.Label>
    <Listbox.Content :class="styles.Content">
      <Listbox.Item v-for="item in collection.items" :key="item.title" :class="styles.ItemCard" :item="item">
        <Listbox.ItemIndicator :class="styles.ItemCardIndicator">
          <CheckIcon />
        </Listbox.ItemIndicator>
        <img :class="styles.ItemCardImage" :src="item.image" :alt="item.title" />
        <span :class="styles.ItemCardTitle">{{ item.title }}</span>
        <span :class="styles.ItemCardArtist">{{ item.artist }}</span>
      </Listbox.Item>
    </Listbox.Content>
  </Listbox.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { Listbox, createListCollection } from '@ark-ui/svelte/listbox'
  import CheckIcon from 'lucide-svelte/icons/check'
  import styles from 'styles/listbox.module.css'

  const collection = createListCollection({
    items: [
      {
        title: 'Midnight Dreams',
        artist: 'Luna Ray',
        image: 'https://picsum.photos/seed/album1/300/300',
      },
      {
        title: 'Neon Skyline',
        artist: 'The Electric',
        image: 'https://picsum.photos/seed/album2/300/300',
      },
      {
        title: 'Acoustic Sessions',
        artist: 'Sarah Woods',
        image: 'https://picsum.photos/seed/album3/300/300',
      },
      {
        title: 'Urban Echoes',
        artist: 'Metro Collective',
        image: 'https://picsum.photos/seed/album4/300/300',
      },
      {
        title: 'Summer Vibes',
        artist: 'Coastal Waves',
        image: 'https://picsum.photos/seed/album5/300/300',
      },
    ],
    itemToValue: (item) => item.title,
    itemToString: (item) => item.title,
  })
</script>

<Listbox.Root class={styles.Root} {collection} orientation="horizontal">
  <Listbox.Label class={styles.Label}>Select Album</Listbox.Label>
  <Listbox.Content class={styles.Content}>
    {#each collection.items as item (item.title)}
      <Listbox.Item class={styles.ItemCard} {item}>
        <Listbox.ItemIndicator class={styles.ItemCardIndicator}>
          <CheckIcon />
        </Listbox.ItemIndicator>
        <img class={styles.ItemCardImage} src={item.image} alt={item.title} />
        <span class={styles.ItemCardTitle}>{item.title}</span>
        <span class={styles.ItemCardArtist}>{item.artist}</span>
      </Listbox.Item>
    {/each}
  </Listbox.Content>
</Listbox.Root>

```

### Grid Layout

Use `createGridCollection` to display items in a grid layout with keyboard navigation support.

**Example: grid**

#### React

```tsx
import { createGridCollection } from '@ark-ui/react/collection';
import { Listbox } from '@ark-ui/react/listbox';
import styles from 'styles/listbox.module.css';

export const Grid = () => {
  const collection = createGridCollection({
    items: [
      { label: '😀', value: 'grinning' },
      { label: '😍', value: 'heart-eyes' },
      { label: '🥳', value: 'partying' },
      { label: '😎', value: 'sunglasses' },
      { label: '🤩', value: 'star-struck' },
      { label: '😂', value: 'joy' },
      { label: '🥰', value: 'smiling-hearts' },
      { label: '😊', value: 'blush' },
      { label: '🤗', value: 'hugging' },
      { label: '😇', value: 'innocent' },
      { label: '🔥', value: 'fire' },
      { label: '✨', value: 'sparkles' },
      { label: '💯', value: 'hundred' },
      { label: '🎉', value: 'tada' },
      { label: '❤️', value: 'heart' },
      { label: '👍', value: 'thumbs-up' },
      { label: '👏', value: 'clap' },
      { label: '🚀', value: 'rocket' },
      { label: '⭐', value: 'star' },
      { label: '🌈', value: 'rainbow' },
    ],
    columnCount: 5,
  });

  return (
    <Listbox.Root className={styles.Root} collection={collection}>
      <Listbox.Label className={styles.Label}>Pick a reaction</Listbox.Label>
      <Listbox.Content className={styles.GridContent}>
        {collection.items.map((item) => (
          <Listbox.Item className={styles.GridItem} key={item.value} item={item}>
            <Listbox.ItemText>{item.label}</Listbox.ItemText>
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  );
};
```

#### Solid

```tsx
import { createGridCollection } from '@ark-ui/solid/collection';
import { Listbox } from '@ark-ui/solid/listbox';
import { Index } from 'solid-js';
import styles from 'styles/listbox.module.css';

export const Grid = () => {
  const collection = createGridCollection({
    items: [
      { label: '😀', value: 'grinning' },
      { label: '😍', value: 'heart-eyes' },
      { label: '🥳', value: 'partying' },
      { label: '😎', value: 'sunglasses' },
      { label: '🤩', value: 'star-struck' },
      { label: '😂', value: 'joy' },
      { label: '🥰', value: 'smiling-hearts' },
      { label: '😊', value: 'blush' },
      { label: '🤗', value: 'hugging' },
      { label: '😇', value: 'innocent' },
      { label: '🔥', value: 'fire' },
      { label: '✨', value: 'sparkles' },
      { label: '💯', value: 'hundred' },
      { label: '🎉', value: 'tada' },
      { label: '❤️', value: 'heart' },
      { label: '👍', value: 'thumbs-up' },
      { label: '👏', value: 'clap' },
      { label: '🚀', value: 'rocket' },
      { label: '⭐', value: 'star' },
      { label: '🌈', value: 'rainbow' },
    ],
    columnCount: 5,
  });

  return (
    <Listbox.Root class={styles.Root} collection={collection}>
      <Listbox.Label class={styles.Label}>Pick a reaction</Listbox.Label>
      <Listbox.Content class={styles.GridContent}>
        <Index each={collection.items}>
          {(item) => (
            <Listbox.Item class={styles.GridItem} item={item()}>
              <Listbox.ItemText>{item().label}</Listbox.ItemText>
            </Listbox.Item>
          )}
        </Index>
      </Listbox.Content>
    </Listbox.Root>
  );
};
```

#### Vue

```vue
<script setup lang="ts">
import { createGridCollection } from '@ark-ui/vue/collection';
import { Listbox } from '@ark-ui/vue/listbox';
import styles from 'styles/listbox.module.css';

const collection = createGridCollection({
  items: [
    { label: '😀', value: 'grinning' },
    { label: '😍', value: 'heart-eyes' },
    { label: '🥳', value: 'partying' },
    { label: '😎', value: 'sunglasses' },
    { label: '🤩', value: 'star-struck' },
    { label: '😂', value: 'joy' },
    { label: '🥰', value: 'smiling-hearts' },
    { label: '😊', value: 'blush' },
    { label: '🤗', value: 'hugging' },
    { label: '😇', value: 'innocent' },
    { label: '🔥', value: 'fire' },
    { label: '✨', value: 'sparkles' },
    { label: '💯', value: 'hundred' },
    { label: '🎉', value: 'tada' },
    { label: '❤️', value: 'heart' },
    { label: '👍', value: 'thumbs-up' },
    { label: '👏', value: 'clap' },
    { label: '🚀', value: 'rocket' },
    { label: '⭐', value: 'star' },
    { label: '🌈', value: 'rainbow' },
  ],
  columnCount: 5,
});
</script>

<template>
  <Listbox.Root :class="styles.Root" :collection="collection">
    <Listbox.Label :class="styles.Label">Pick a reaction</Listbox.Label>
    <Listbox.Content :class="styles.GridContent">
      <Listbox.Item v-for="item in collection.items" :key="item.value" :class="styles.GridItem" :item="item">
        <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
      </Listbox.Item>
    </Listbox.Content>
  </Listbox.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { createGridCollection } from '@ark-ui/svelte/collection'
  import { Listbox } from '@ark-ui/svelte/listbox'
  import styles from 'styles/listbox.module.css'

  const collection = createGridCollection({
    items: [
      { label: '😀', value: 'grinning' },
      { label: '😍', value: 'heart-eyes' },
      { label: '🥳', value: 'partying' },
      { label: '😎', value: 'sunglasses' },
      { label: '🤩', value: 'star-struck' },
      { label: '😂', value: 'joy' },
      { label: '🥰', value: 'smiling-hearts' },
      { label: '😊', value: 'blush' },
      { label: '🤗', value: 'hugging' },
      { label: '😇', value: 'innocent' },
      { label: '🔥', value: 'fire' },
      { label: '✨', value: 'sparkles' },
      { label: '💯', value: 'hundred' },
      { label: '🎉', value: 'tada' },
      { label: '❤️', value: 'heart' },
      { label: '👍', value: 'thumbs-up' },
      { label: '👏', value: 'clap' },
      { label: '🚀', value: 'rocket' },
      { label: '⭐', value: 'star' },
      { label: '🌈', value: 'rainbow' },
    ],
    columnCount: 5,
  })
</script>

<Listbox.Root class={styles.Root} {collection}>
  <Listbox.Label class={styles.Label}>Pick a reaction</Listbox.Label>
  <Listbox.Content class={styles.GridContent}>
    {#each collection.items as item (item.value)}
      <Listbox.Item class={styles.GridItem} {item}>
        <Listbox.ItemText>{item.label}</Listbox.ItemText>
      </Listbox.Item>
    {/each}
  </Listbox.Content>
</Listbox.Root>

```

### Filtering

Use `useListCollection` with the `filter` function to enable filtering of items.

**Example: filtering**

#### React

```tsx
import { useListCollection } from '@ark-ui/react/collection';
import { Listbox } from '@ark-ui/react/listbox';
import { CheckIcon } from 'lucide-react';
import field from 'styles/field.module.css';
import styles from 'styles/listbox.module.css';

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
```

#### Solid

```tsx
import { useListCollection } from '@ark-ui/solid/collection';
import { Listbox } from '@ark-ui/solid/listbox';
import { CheckIcon } from 'lucide-solid';
import { Index } from 'solid-js';
import field from 'styles/field.module.css';
import styles from 'styles/listbox.module.css';

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
    <Listbox.Root class={styles.Root} collection={collection()}>
      <Listbox.Label class={styles.Label}>Select Framework</Listbox.Label>
      <Listbox.Input
        class={field.Input}
        placeholder="Search frameworks..."
        onInput={(e) => filter(e.target.value)}
      />
      <Listbox.Content class={styles.Content}>
        <Index each={collection().items}>
          {(item) => (
            <Listbox.Item class={styles.Item} item={item()}>
              <Listbox.ItemText class={styles.ItemText}>{item().label}</Listbox.ItemText>
              <Listbox.ItemIndicator class={styles.ItemIndicator}>
                <CheckIcon />
              </Listbox.ItemIndicator>
            </Listbox.Item>
          )}
        </Index>
        <Listbox.Empty class={styles.Empty}>No frameworks found</Listbox.Empty>
      </Listbox.Content>
    </Listbox.Root>
  );
};
```

#### Vue

```vue
<script setup lang="ts">
import { useListCollection } from '@ark-ui/vue/collection';
import { Listbox } from '@ark-ui/vue/listbox';
import { CheckIcon } from 'lucide-vue-next';
import field from 'styles/field.module.css';
import styles from 'styles/listbox.module.css';

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
</script>

<template>
  <Listbox.Root :class="styles.Root" :collection="collection">
    <Listbox.Label :class="styles.Label">Select Framework</Listbox.Label>
    <Listbox.Input
      :class="field.Input"
      placeholder="Search frameworks..."
      @input="(e: Event) => filter((e.target as HTMLInputElement).value)"
    />
    <Listbox.Content :class="styles.Content">
      <Listbox.Item v-for="item in collection.items" :key="item.value" :class="styles.Item" :item="item">
        <Listbox.ItemText :class="styles.ItemText">{{ item.label }}</Listbox.ItemText>
        <Listbox.ItemIndicator :class="styles.ItemIndicator">
          <CheckIcon />
        </Listbox.ItemIndicator>
      </Listbox.Item>
      <Listbox.Empty :class="styles.Empty">No frameworks found</Listbox.Empty>
    </Listbox.Content>
  </Listbox.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { useListCollection } from '@ark-ui/svelte/collection'
  import { Listbox } from '@ark-ui/svelte/listbox'
  import CheckIcon from 'lucide-svelte/icons/check'
  import field from 'styles/field.module.css'
  import styles from 'styles/listbox.module.css'

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
  })
</script>

<Listbox.Root class={styles.Root} collection={collection()}>
  <Listbox.Label class={styles.Label}>Select Framework</Listbox.Label>
  <Listbox.Input
    class={field.Input}
    placeholder="Search frameworks..."
    oninput={(e) => filter(e.currentTarget.value)}
  />
  <Listbox.Content class={styles.Content}>
    {#each collection().items as item (item.value)}
      <Listbox.Item class={styles.Item} {item}>
        <Listbox.ItemText class={styles.ItemText}>{item.label}</Listbox.ItemText>
        <Listbox.ItemIndicator class={styles.ItemIndicator}>
          <CheckIcon />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    {/each}
    <Listbox.Empty class={styles.Empty}>No frameworks found</Listbox.Empty>
  </Listbox.Content>
</Listbox.Root>

```

### Select All

Use `useListboxContext` to implement a "Select All" functionality that allows users to select or deselect all items at
once.

**Example: select-all**

#### React

```tsx
import { Listbox, createListCollection, useListboxContext } from '@ark-ui/react/listbox';
import { CheckIcon, MinusIcon } from 'lucide-react';
import styles from 'styles/listbox.module.css';

const frameworks = createListCollection({
  items: [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Next.js', value: 'nextjs' },
    { label: 'Nuxt.js', value: 'nuxtjs' },
    { label: 'Remix', value: 'remix' },
    { label: 'Gatsby', value: 'gatsby' },
  ],
});

const SelectAllHeader = () => {
  const listbox = useListboxContext();
  const isAllSelected = listbox.value.length === frameworks.items.length;
  const isSomeSelected = listbox.value.length > 0 && listbox.value.length < frameworks.items.length;

  const handleSelectAll = () => {
    if (isAllSelected) {
      listbox.setValue([]);
    } else {
      listbox.setValue(frameworks.items.map((item) => item.value));
    }
  };

  return (
    <button className={styles.SelectAllHeader} type="button" onClick={handleSelectAll}>
      <span className={styles.SelectAllHeaderIndicator}>
        {isAllSelected ? <CheckIcon /> : isSomeSelected ? <MinusIcon /> : null}
      </span>
      <span className={styles.Label}>Select All</span>
    </button>
  );
};

export const SelectAll = () => {
  return (
    <Listbox.Root className={styles.Root} collection={frameworks} selectionMode="multiple">
      <SelectAllHeader />
      <Listbox.Content className={styles.Content}>
        {frameworks.items.map((item) => (
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
```

#### Solid

```tsx
import { Listbox, createListCollection, useListboxContext } from '@ark-ui/solid/listbox';
import { CheckIcon, MinusIcon } from 'lucide-solid';
import { Index, Show } from 'solid-js';
import styles from 'styles/listbox.module.css';

const frameworks = createListCollection({
  items: [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Next.js', value: 'nextjs' },
    { label: 'Nuxt.js', value: 'nuxtjs' },
    { label: 'Remix', value: 'remix' },
    { label: 'Gatsby', value: 'gatsby' },
  ],
});

const SelectAllHeader = () => {
  const listbox = useListboxContext();
  const isAllSelected = () => listbox().value.length === frameworks.items.length;
  const isSomeSelected = () => listbox().value.length > 0 && listbox().value.length < frameworks.items.length;

  const handleSelectAll = () => {
    if (isAllSelected()) {
      listbox().setValue([]);
    } else {
      listbox().setValue(frameworks.items.map((item) => item.value));
    }
  };

  return (
    <button class={styles.SelectAllHeader} type="button" onClick={handleSelectAll}>
      <span class={styles.SelectAllHeaderIndicator}>
        <Show when={isAllSelected()}>
          <CheckIcon />
        </Show>
        <Show when={isSomeSelected()}>
          <MinusIcon />
        </Show>
      </span>
      <span class={styles.Label}>Select All</span>
    </button>
  );
};

export const SelectAll = () => {
  return (
    <Listbox.Root class={styles.Root} collection={frameworks} selectionMode="multiple">
      <SelectAllHeader />
      <Listbox.Content class={styles.Content}>
        <Index each={frameworks.items}>
          {(item) => (
            <Listbox.Item class={styles.Item} item={item()}>
              <Listbox.ItemText class={styles.ItemText}>{item().label}</Listbox.ItemText>
              <Listbox.ItemIndicator class={styles.ItemIndicator}>
                <CheckIcon />
              </Listbox.ItemIndicator>
            </Listbox.Item>
          )}
        </Index>
      </Listbox.Content>
    </Listbox.Root>
  );
};
```

#### Vue

```vue
<script setup lang="ts">
import { Listbox, createListCollection, useListboxContext } from '@ark-ui/vue/listbox';
import { CheckIcon, MinusIcon } from 'lucide-vue-next';
import { computed } from 'vue';
import styles from 'styles/listbox.module.css';

const frameworks = createListCollection({
  items: [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Next.js', value: 'nextjs' },
    { label: 'Nuxt.js', value: 'nuxtjs' },
    { label: 'Remix', value: 'remix' },
    { label: 'Gatsby', value: 'gatsby' },
  ],
});
</script>

<template>
  <Listbox.Root :class="styles.Root" :collection="frameworks" selectionMode="multiple">
    <SelectAllHeader :frameworks="frameworks" />
    <Listbox.Content :class="styles.Content">
      <Listbox.Item v-for="item in frameworks.items" :key="item.value" :class="styles.Item" :item="item">
        <Listbox.ItemText :class="styles.ItemText">{{ item.label }}</Listbox.ItemText>
        <Listbox.ItemIndicator :class="styles.ItemIndicator">
          <CheckIcon />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    </Listbox.Content>
  </Listbox.Root>
</template>

<script lang="ts">
import type { ListCollection } from '@ark-ui/vue/collection';

const SelectAllHeader = {
  props: {
    frameworks: {
      type: Object as () => ListCollection<{ label: string; value: string }>,
      required: true,
    },
  },
  setup(props: { frameworks: ListCollection<{ label: string; value: string }> }) {
    const listbox = useListboxContext();

    const isAllSelected = computed(() => listbox.value.value.length === props.frameworks.items.length);
    const isSomeSelected = computed(
      () => listbox.value.value.length > 0 && listbox.value.value.length < props.frameworks.items.length,
    );

    const handleSelectAll = () => {
      if (isAllSelected.value) {
        listbox.value.setValue([]);
      } else {
        listbox.value.setValue(props.frameworks.items.map((item) => item.value));
      }
    };

    return { isAllSelected, isSomeSelected, handleSelectAll, styles };
  },
  components: { CheckIcon, MinusIcon },
  template: `
    <button :class="styles.SelectAllHeader" type="button" @click="handleSelectAll">
      <span :class="styles.SelectAllHeaderIndicator">
        <CheckIcon v-if="isAllSelected" />
        <MinusIcon v-else-if="isSomeSelected" />
      </span>
      <span :class="styles.Label">Select All</span>
    </button>
  `,
};
</script>
```

#### Svelte

```svelte
<script lang="ts" module>
  import { createListCollection } from '@ark-ui/svelte/listbox'

  const frameworks = createListCollection({
    items: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular', value: 'angular' },
      { label: 'Svelte', value: 'svelte' },
      { label: 'Next.js', value: 'nextjs' },
      { label: 'Nuxt.js', value: 'nuxtjs' },
      { label: 'Remix', value: 'remix' },
      { label: 'Gatsby', value: 'gatsby' },
    ],
  })
</script>

<script lang="ts">
  import { Listbox, useListboxContext } from '@ark-ui/svelte/listbox'
  import CheckIcon from 'lucide-svelte/icons/check'
  import MinusIcon from 'lucide-svelte/icons/minus'
  import styles from 'styles/listbox.module.css'

  const listbox = useListboxContext()

  const isAllSelected = $derived(listbox().value.length === frameworks.items.length)
  const isSomeSelected = $derived(listbox().value.length > 0 && listbox().value.length < frameworks.items.length)

  function handleSelectAll() {
    if (isAllSelected) {
      listbox().setValue([])
    } else {
      listbox().setValue(frameworks.items.map((item) => item.value))
    }
  }
</script>

{#snippet selectAllHeader()}
  <button class={styles.SelectAllHeader} type="button" onclick={handleSelectAll}>
    <span class={styles.SelectAllHeaderIndicator}>
      {#if isAllSelected}
        <CheckIcon />
      {:else if isSomeSelected}
        <MinusIcon />
      {/if}
    </span>
    <span class={styles.Label}>Select All</span>
  </button>
{/snippet}

<Listbox.Root class={styles.Root} collection={frameworks} selectionMode="multiple">
  {@render selectAllHeader()}
  <Listbox.Content class={styles.Content}>
    {#each frameworks.items as item (item.value)}
      <Listbox.Item class={styles.Item} {item}>
        <Listbox.ItemText class={styles.ItemText}>{item.label}</Listbox.ItemText>
        <Listbox.ItemIndicator class={styles.ItemIndicator}>
          <CheckIcon />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    {/each}
  </Listbox.Content>
</Listbox.Root>

```

### Value Text

Use `Listbox.ValueText` to display the selected values as a comma-separated string.

**Example: value-text**

#### React

```tsx
import { Listbox, createListCollection } from '@ark-ui/react/listbox';
import { CheckIcon } from 'lucide-react';
import styles from 'styles/listbox.module.css';

export const ValueText = () => {
  const collection = createListCollection({
    items: [
      { label: 'Red', value: 'red' },
      { label: 'Blue', value: 'blue' },
      { label: 'Green', value: 'green' },
      { label: 'Yellow', value: 'yellow' },
      { label: 'Purple', value: 'purple' },
    ],
  });

  return (
    <Listbox.Root
      className={styles.Root}
      collection={collection}
      selectionMode="multiple"
      defaultValue={['red', 'blue']}
    >
      <Listbox.Label className={styles.Label}>
        Colors: <Listbox.ValueText className={styles.ValueText} />
      </Listbox.Label>
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
```

#### Solid

```tsx
import { Listbox, createListCollection } from '@ark-ui/solid/listbox';
import { CheckIcon } from 'lucide-solid';
import { Index } from 'solid-js';
import styles from 'styles/listbox.module.css';

export const ValueText = () => {
  const collection = createListCollection({
    items: [
      { label: 'Red', value: 'red' },
      { label: 'Blue', value: 'blue' },
      { label: 'Green', value: 'green' },
      { label: 'Yellow', value: 'yellow' },
      { label: 'Purple', value: 'purple' },
    ],
  });

  return (
    <Listbox.Root
      class={styles.Root}
      collection={collection}
      selectionMode="multiple"
      defaultValue={['red', 'blue']}
    >
      <Listbox.Label class={styles.Label}>
        Colors: <Listbox.ValueText class={styles.ValueText} />
      </Listbox.Label>
      <Listbox.Content class={styles.Content}>
        <Index each={collection.items}>
          {(item) => (
            <Listbox.Item class={styles.Item} item={item()}>
              <Listbox.ItemText class={styles.ItemText}>{item().label}</Listbox.ItemText>
              <Listbox.ItemIndicator class={styles.ItemIndicator}>
                <CheckIcon />
              </Listbox.ItemIndicator>
            </Listbox.Item>
          )}
        </Index>
      </Listbox.Content>
    </Listbox.Root>
  );
};
```

#### Vue

```vue
<script setup lang="ts">
import { Listbox, createListCollection } from '@ark-ui/vue/listbox';
import { CheckIcon } from 'lucide-vue-next';
import styles from 'styles/listbox.module.css';

const collection = createListCollection({
  items: [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Purple', value: 'purple' },
  ],
});
</script>

<template>
  <Listbox.Root
    :class="styles.Root"
    :collection="collection"
    selectionMode="multiple"
    :defaultValue="['red', 'blue']"
  >
    <Listbox.Label :class="styles.Label">
      Colors:
      <Listbox.ValueText :class="styles.ValueText" />
    </Listbox.Label>
    <Listbox.Content :class="styles.Content">
      <Listbox.Item v-for="item in collection.items" :key="item.value" :class="styles.Item" :item="item">
        <Listbox.ItemText :class="styles.ItemText">{{ item.label }}</Listbox.ItemText>
        <Listbox.ItemIndicator :class="styles.ItemIndicator">
          <CheckIcon />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    </Listbox.Content>
  </Listbox.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { Listbox, createListCollection } from '@ark-ui/svelte/listbox'
  import CheckIcon from 'lucide-svelte/icons/check'
  import styles from 'styles/listbox.module.css'

  const collection = createListCollection({
    items: [
      { label: 'Red', value: 'red' },
      { label: 'Blue', value: 'blue' },
      { label: 'Green', value: 'green' },
      { label: 'Yellow', value: 'yellow' },
      { label: 'Purple', value: 'purple' },
    ],
  })
</script>

<Listbox.Root class={styles.Root} {collection} selectionMode="multiple" defaultValue={['red', 'blue']}>
  <Listbox.Label class={styles.Label}>
    Colors: <Listbox.ValueText class={styles.ValueText} />
  </Listbox.Label>
  <Listbox.Content class={styles.Content}>
    {#each collection.items as item (item.value)}
      <Listbox.Item class={styles.Item} {item}>
        <Listbox.ItemText class={styles.ItemText}>{item.label}</Listbox.ItemText>
        <Listbox.ItemIndicator class={styles.ItemIndicator}>
          <CheckIcon />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    {/each}
  </Listbox.Content>
</Listbox.Root>

```

## Guides

### Type Safety

The `Listbox.RootComponent` type enables you to create typed wrapper components that maintain full type safety for
collection items.

```tsx
const Listbox: ArkListbox.RootComponent = (props) => {
  return <ArkListbox.Root {...props}>{/* ... */}</ArkListbox.Root>;
};
```

Use the wrapper with full type inference on `onValueChange` and other callbacks:

```tsx
const App = () => {
  const collection = createListCollection({
    initialItems: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
    ],
  });
  return (
    <Listbox
      collection={collection}
      onValueChange={(e) => {
        // e.items is typed as Array<{ label: string, value: string }>
        console.log(e.items);
      }}
    >
      {/* ... */}
    </Listbox>
  );
};
```

## API Reference

### Props

**Component API Reference**

#### React

**Root Props:**

| Prop                                                                     | Type                | Required | Description                                                                                         |
| ------------------------------------------------------------------------ | ------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `collection`                                                             | `ListCollection<T>` | Yes      | The collection of items                                                                             |
| `asChild`                                                                | `boolean`           | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `defaultHighlightedValue`                                                | `string`            | No       | The initial value of the highlighted item when opened.                                              |
| Use when you don't need to control the highlighted value of the listbox. |
| `defaultValue`                                                           | `string[]`          | No       | The initial default value of the listbox when rendered.                                             |
| Use when you don't need to control the value of the listbox.             |
| `deselectable`                                                           | `boolean`           | No       | Whether to disallow empty selection                                                                 |
| `disabled`                                                               | `boolean`           | No       | Whether the listbox is disabled                                                                     |
| `disallowSelectAll`                                                      | `boolean`           | No       | Whether to disallow selecting all items when `meta+a` is pressed                                    |
| `highlightedValue`                                                       | `string`            | No       | The controlled key of the highlighted item                                                          |
| `id`                                                                     | `string`            | No       | The unique identifier of the machine.                                                               |
| `ids`                                                                    | `Partial<{          |

root: string
content: string
label: string
item: (id: string | number) => string
itemGroup: (id: string | number) => string
itemGroupLabel: (id: string | number) => string
}>`| No | The ids of the elements in the listbox. Useful for composition. |
|`loopFocus`|`boolean`| No | Whether to loop the keyboard navigation through the options |
|`onHighlightChange`|`(details: HighlightChangeDetails<T>) => void`| No | The callback fired when the highlighted item changes. |
|`onSelect`|`(details: SelectionDetails) => void`| No | Function called when an item is selected |
|`onValueChange`|`(details: ValueChangeDetails<T>) => void`| No | The callback fired when the selected item changes. |
|`orientation`|`'horizontal' | 'vertical'`| No | The orientation of the listbox. |
|`scrollToIndexFn`|`(details: ScrollToIndexDetails) => void`| No | Function to scroll to a specific index |
|`selectionMode`|`SelectionMode` | No | How multiple selection should behave in the listbox.

- `single`: The user can select a single item.
- `multiple`: The user can select multiple items without using modifier keys.
- `extended`: The user can select multiple items by using modifier keys. |
  | `selectOnHighlight` | `boolean` | No | Whether to select the item when it is highlighted |
  | `typeahead` | `boolean` | No | Whether to enable typeahead on the listbox |
  | `value` | `string[]` | No | The controlled keys of the selected items |

**Root Data Attributes:**

| Attribute            | Value                          |
| -------------------- | ------------------------------ |
| `[data-scope]`       | listbox                        |
| `[data-part]`        | root                           |
| `[data-orientation]` | The orientation of the listbox |
| `[data-disabled]`    | Present when disabled          |

**Content Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Content Data Attributes:**

| Attribute                 | Value                                       |
| ------------------------- | ------------------------------------------- |
| `[data-scope]`            | listbox                                     |
| `[data-part]`             | content                                     |
| `[data-activedescendant]` | The id the active descendant of the content |
| `[data-orientation]`      | The orientation of the content              |
| `[data-layout]`           |                                             |
| `[data-empty]`            | Present when the content is empty           |

**Content CSS Variables:**

| Variable         | Description                            |
| ---------------- | -------------------------------------- |
| `--column-count` | The column count value for the Content |

**Empty Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Input Props:**

| Prop            | Type      | Required | Description                                                                                         |
| --------------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild`       | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `autoHighlight` | `boolean` | No       | Whether to automatically highlight the item when typing                                             |

**Input Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | listbox               |
| `[data-part]`     | input                 |
| `[data-disabled]` | Present when disabled |

**ItemGroupLabel Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemGroup Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemGroup Data Attributes:**

| Attribute            | Value                             |
| -------------------- | --------------------------------- |
| `[data-scope]`       | listbox                           |
| `[data-part]`        | item-group                        |
| `[data-disabled]`    | Present when disabled             |
| `[data-orientation]` | The orientation of the item       |
| `[data-empty]`       | Present when the content is empty |

**ItemIndicator Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemIndicator Data Attributes:**

| Attribute      | Value          |
| -------------- | -------------- | ----------- |
| `[data-scope]` | listbox        |
| `[data-part]`  | item-indicator |
| `[data-state]` | "checked"      | "unchecked" |

**Item Props:**

| Prop               | Type      | Required | Description                                                                                         |
| ------------------ | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild`          | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `highlightOnHover` | `boolean` | No       | Whether to highlight the item on hover                                                              |
| `item`             | `any`     | No       | The item to render                                                                                  |

**Item Data Attributes:**

| Attribute            | Value                       |
| -------------------- | --------------------------- | ----------- |
| `[data-scope]`       | listbox                     |
| `[data-part]`        | item                        |
| `[data-value]`       | The value of the item       |
| `[data-selected]`    | Present when selected       |
| `[data-layout]`      |                             |
| `[data-state]`       | "checked"                   | "unchecked" |
| `[data-orientation]` | The orientation of the item |
| `[data-highlighted]` | Present when highlighted    |
| `[data-disabled]`    | Present when disabled       |

**ItemText Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemText Data Attributes:**

| Attribute            | Value                    |
| -------------------- | ------------------------ | ----------- |
| `[data-scope]`       | listbox                  |
| `[data-part]`        | item-text                |
| `[data-state]`       | "checked"                | "unchecked" |
| `[data-disabled]`    | Present when disabled    |
| `[data-highlighted]` | Present when highlighted |

**Label Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Label Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | listbox               |
| `[data-part]`     | label                 |
| `[data-disabled]` | Present when disabled |

**RootProvider Props:**

| Prop      | Type                  | Required | Description                                                                                         |
| --------- | --------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `value`   | `UseListboxReturn<T>` | Yes      |                                                                                                     |
| `asChild` | `boolean`             | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ValueText Props:**

| Prop          | Type      | Required | Description                                                                                         |
| ------------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild`     | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `placeholder` | `string`  | No       | Text to display when no value is listboxed.                                                         |

**ValueText Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | listbox               |
| `[data-part]`     | value-text            |
| `[data-disabled]` | Present when disabled |

#### Solid

**Root Props:**

| Prop                                                                     | Type                                     | Required | Description                                                                                         |
| ------------------------------------------------------------------------ | ---------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `collection`                                                             | `ListCollection<T>`                      | Yes      | The collection of items                                                                             |
| `asChild`                                                                | `(props: ParentProps<'div'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `defaultHighlightedValue`                                                | `string`                                 | No       | The initial value of the highlighted item when opened.                                              |
| Use when you don't need to control the highlighted value of the listbox. |
| `defaultValue`                                                           | `string[]`                               | No       | The initial default value of the listbox when rendered.                                             |
| Use when you don't need to control the value of the listbox.             |
| `deselectable`                                                           | `boolean`                                | No       | Whether to disallow empty selection                                                                 |
| `disabled`                                                               | `boolean`                                | No       | Whether the listbox is disabled                                                                     |
| `disallowSelectAll`                                                      | `boolean`                                | No       | Whether to disallow selecting all items when `meta+a` is pressed                                    |
| `highlightedValue`                                                       | `string`                                 | No       | The controlled key of the highlighted item                                                          |
| `id`                                                                     | `string`                                 | No       | The unique identifier of the machine.                                                               |
| `ids`                                                                    | `Partial<{                               |

root: string
content: string
label: string
item: (id: string | number) => string
itemGroup: (id: string | number) => string
itemGroupLabel: (id: string | number) => string
}>`| No | The ids of the elements in the listbox. Useful for composition. |
|`loopFocus`|`boolean`| No | Whether to loop the keyboard navigation through the options |
|`onHighlightChange`|`(details: HighlightChangeDetails<T>) => void`| No | The callback fired when the highlighted item changes. |
|`onSelect`|`(details: SelectionDetails) => void`| No | Function called when an item is selected |
|`onValueChange`|`(details: ValueChangeDetails<T>) => void`| No | The callback fired when the selected item changes. |
|`orientation`|`'horizontal' | 'vertical'`| No | The orientation of the listbox. |
|`scrollToIndexFn`|`(details: ScrollToIndexDetails) => void`| No | Function to scroll to a specific index |
|`selectionMode`|`SelectionMode` | No | How multiple selection should behave in the listbox.

- `single`: The user can select a single item.
- `multiple`: The user can select multiple items without using modifier keys.
- `extended`: The user can select multiple items by using modifier keys. |
  | `selectOnHighlight` | `boolean` | No | Whether to select the item when it is highlighted |
  | `typeahead` | `boolean` | No | Whether to enable typeahead on the listbox |
  | `value` | `string[]` | No | The controlled keys of the selected items |

**Root Data Attributes:**

| Attribute            | Value                          |
| -------------------- | ------------------------------ |
| `[data-scope]`       | listbox                        |
| `[data-part]`        | root                           |
| `[data-orientation]` | The orientation of the listbox |
| `[data-disabled]`    | Present when disabled          |

**Content Props:**

| Prop      | Type                                     | Required | Description                                                                                         |
| --------- | ---------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `(props: ParentProps<'div'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Content Data Attributes:**

| Attribute                 | Value                                       |
| ------------------------- | ------------------------------------------- |
| `[data-scope]`            | listbox                                     |
| `[data-part]`             | content                                     |
| `[data-activedescendant]` | The id the active descendant of the content |
| `[data-orientation]`      | The orientation of the content              |
| `[data-layout]`           |                                             |
| `[data-empty]`            | Present when the content is empty           |

**Content CSS Variables:**

| Variable         | Description                            |
| ---------------- | -------------------------------------- |
| `--column-count` | The column count value for the Content |

**Empty Props:**

| Prop      | Type                                     | Required | Description                                                                                         |
| --------- | ---------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `(props: ParentProps<'div'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Input Props:**

| Prop            | Type                                       | Required | Description                                                                                         |
| --------------- | ------------------------------------------ | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild`       | `(props: ParentProps<'input'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `autoHighlight` | `boolean`                                  | No       | Whether to automatically highlight the item when typing                                             |

**Input Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | listbox               |
| `[data-part]`     | input                 |
| `[data-disabled]` | Present when disabled |

**ItemGroupLabel Props:**

| Prop      | Type                                     | Required | Description                                                                                         |
| --------- | ---------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `(props: ParentProps<'div'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemGroup Props:**

| Prop      | Type                                     | Required | Description                                                                                         |
| --------- | ---------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `(props: ParentProps<'div'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemGroup Data Attributes:**

| Attribute            | Value                             |
| -------------------- | --------------------------------- |
| `[data-scope]`       | listbox                           |
| `[data-part]`        | item-group                        |
| `[data-disabled]`    | Present when disabled             |
| `[data-orientation]` | The orientation of the item       |
| `[data-empty]`       | Present when the content is empty |

**ItemIndicator Props:**

| Prop      | Type                                     | Required | Description                                                                                         |
| --------- | ---------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `(props: ParentProps<'div'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemIndicator Data Attributes:**

| Attribute      | Value          |
| -------------- | -------------- | ----------- |
| `[data-scope]` | listbox        |
| `[data-part]`  | item-indicator |
| `[data-state]` | "checked"      | "unchecked" |

**Item Props:**

| Prop               | Type                                     | Required | Description                                                                                         |
| ------------------ | ---------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild`          | `(props: ParentProps<'div'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `highlightOnHover` | `boolean`                                | No       | Whether to highlight the item on hover                                                              |
| `item`             | `any`                                    | No       | The item to render                                                                                  |

**Item Data Attributes:**

| Attribute            | Value                       |
| -------------------- | --------------------------- | ----------- |
| `[data-scope]`       | listbox                     |
| `[data-part]`        | item                        |
| `[data-value]`       | The value of the item       |
| `[data-selected]`    | Present when selected       |
| `[data-layout]`      |                             |
| `[data-state]`       | "checked"                   | "unchecked" |
| `[data-orientation]` | The orientation of the item |
| `[data-highlighted]` | Present when highlighted    |
| `[data-disabled]`    | Present when disabled       |

**ItemText Props:**

| Prop      | Type                                     | Required | Description                                                                                         |
| --------- | ---------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `(props: ParentProps<'div'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemText Data Attributes:**

| Attribute            | Value                    |
| -------------------- | ------------------------ | ----------- |
| `[data-scope]`       | listbox                  |
| `[data-part]`        | item-text                |
| `[data-state]`       | "checked"                | "unchecked" |
| `[data-disabled]`    | Present when disabled    |
| `[data-highlighted]` | Present when highlighted |

**Label Props:**

| Prop      | Type                                       | Required | Description                                                                                         |
| --------- | ------------------------------------------ | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `(props: ParentProps<'label'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Label Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | listbox               |
| `[data-part]`     | label                 |
| `[data-disabled]` | Present when disabled |

**RootProvider Props:**

| Prop      | Type                                     | Required | Description                                                                                         |
| --------- | ---------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `value`   | `UseListboxReturn<T>`                    | Yes      |                                                                                                     |
| `asChild` | `(props: ParentProps<'div'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ValueText Props:**

| Prop          | Type                                      | Required | Description                                                                                         |
| ------------- | ----------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild`     | `(props: ParentProps<'span'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `placeholder` | `string`                                  | No       | Text to display when no value is selected.                                                          |

**ValueText Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | listbox               |
| `[data-part]`     | value-text            |
| `[data-disabled]` | Present when disabled |

#### Vue

**Root Props:**

| Prop                                                                     | Type                | Required | Description                                                                                         |
| ------------------------------------------------------------------------ | ------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `collection`                                                             | `ListCollection<T>` | Yes      | The collection of items                                                                             |
| `asChild`                                                                | `boolean`           | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `defaultHighlightedValue`                                                | `string`            | No       | The initial value of the highlighted item when opened.                                              |
| Use when you don't need to control the highlighted value of the listbox. |
| `defaultValue`                                                           | `string[]`          | No       | The initial default value of the listbox when rendered.                                             |
| Use when you don't need to control the value of the listbox.             |
| `deselectable`                                                           | `boolean`           | No       | Whether to disallow empty selection                                                                 |
| `disabled`                                                               | `boolean`           | No       | Whether the listbox is disabled                                                                     |
| `disallowSelectAll`                                                      | `boolean`           | No       | Whether to disallow selecting all items when `meta+a` is pressed                                    |
| `highlightedValue`                                                       | `string`            | No       | The controlled key of the highlighted item                                                          |
| `id`                                                                     | `string`            | No       | The unique identifier of the machine.                                                               |
| `ids`                                                                    | `Partial<{          |

root: string
content: string
label: string
item(id: string | number): string
itemGroup(id: string | number): string
itemGroupLabel(id: string | number): string
}>`| No | The ids of the elements in the listbox. Useful for composition. |
|`loopFocus`|`boolean`| No | Whether to loop the keyboard navigation through the options |
|`modelValue`|`string[]`| No | The model value of the listbox |
|`orientation`|`'horizontal' | 'vertical'`| No | The orientation of the element. |
|`scrollToIndexFn`|`(details: ScrollToIndexDetails) => void`| No | Function to scroll to a specific index |
|`selectionMode`|`SelectionMode` | No | How multiple selection should behave in the listbox.

- `single`: The user can select a single item.
- `multiple`: The user can select multiple items without using modifier keys.
- `extended`: The user can select multiple items by using modifier keys. |
  | `selectOnHighlight` | `boolean` | No | Whether to select the item when it is highlighted |
  | `typeahead` | `boolean` | No | Whether to enable typeahead on the listbox |

**Root Data Attributes:**

| Attribute            | Value                          |
| -------------------- | ------------------------------ |
| `[data-scope]`       | listbox                        |
| `[data-part]`        | root                           |
| `[data-orientation]` | The orientation of the listbox |
| `[data-disabled]`    | Present when disabled          |

**Content Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Content Data Attributes:**

| Attribute                 | Value                                       |
| ------------------------- | ------------------------------------------- |
| `[data-scope]`            | listbox                                     |
| `[data-part]`             | content                                     |
| `[data-activedescendant]` | The id the active descendant of the content |
| `[data-orientation]`      | The orientation of the content              |
| `[data-layout]`           |                                             |
| `[data-empty]`            | Present when the content is empty           |

**Content CSS Variables:**

| Variable         | Description                            |
| ---------------- | -------------------------------------- |
| `--column-count` | The column count value for the Content |

**Empty Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Input Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Input Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | listbox               |
| `[data-part]`     | input                 |
| `[data-disabled]` | Present when disabled |

**ItemGroupLabel Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemGroup Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `id`      | `string`  | No       |                                                                                                     |

**ItemGroup Data Attributes:**

| Attribute            | Value                             |
| -------------------- | --------------------------------- |
| `[data-scope]`       | listbox                           |
| `[data-part]`        | item-group                        |
| `[data-disabled]`    | Present when disabled             |
| `[data-orientation]` | The orientation of the item       |
| `[data-empty]`       | Present when the content is empty |

**ItemIndicator Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemIndicator Data Attributes:**

| Attribute      | Value          |
| -------------- | -------------- | ----------- |
| `[data-scope]` | listbox        |
| `[data-part]`  | item-indicator |
| `[data-state]` | "checked"      | "unchecked" |

**Item Props:**

| Prop               | Type      | Required | Description                                                                                         |
| ------------------ | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild`          | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `highlightOnHover` | `boolean` | No       | Whether to highlight the item on hover                                                              |
| `item`             | `any`     | No       | The item to render                                                                                  |

**Item Data Attributes:**

| Attribute            | Value                       |
| -------------------- | --------------------------- | ----------- |
| `[data-scope]`       | listbox                     |
| `[data-part]`        | item                        |
| `[data-value]`       | The value of the item       |
| `[data-selected]`    | Present when selected       |
| `[data-layout]`      |                             |
| `[data-state]`       | "checked"                   | "unchecked" |
| `[data-orientation]` | The orientation of the item |
| `[data-highlighted]` | Present when highlighted    |
| `[data-disabled]`    | Present when disabled       |

**ItemText Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemText Data Attributes:**

| Attribute            | Value                    |
| -------------------- | ------------------------ | ----------- |
| `[data-scope]`       | listbox                  |
| `[data-part]`        | item-text                |
| `[data-state]`       | "checked"                | "unchecked" |
| `[data-disabled]`    | Present when disabled    |
| `[data-highlighted]` | Present when highlighted |

**Label Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Label Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | listbox               |
| `[data-part]`     | label                 |
| `[data-disabled]` | Present when disabled |

**RootProvider Props:**

| Prop      | Type                       | Required | Description                                                                                         |
| --------- | -------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `value`   | `ListboxApi<PropTypes, T>` | Yes      |                                                                                                     |
| `asChild` | `boolean`                  | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ValueText Props:**

| Prop          | Type      | Required | Description                                                                                         |
| ------------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild`     | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `placeholder` | `string`  | No       |                                                                                                     |

**ValueText Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | listbox               |
| `[data-part]`     | value-text            |
| `[data-disabled]` | Present when disabled |

#### Svelte

**Root Props:**

| Prop                                                                     | Type                        | Required | Description                                                                                         |
| ------------------------------------------------------------------------ | --------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `collection`                                                             | `ListCollection<T>`         | Yes      | The collection of items                                                                             |
| `asChild`                                                                | `Snippet<[PropsFn<'div'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `defaultHighlightedValue`                                                | `string`                    | No       | The initial value of the highlighted item when opened.                                              |
| Use when you don't need to control the highlighted value of the listbox. |
| `defaultValue`                                                           | `string[]`                  | No       | The initial default value of the listbox when rendered.                                             |
| Use when you don't need to control the value of the listbox.             |
| `deselectable`                                                           | `boolean`                   | No       | Whether to disallow empty selection                                                                 |
| `disabled`                                                               | `boolean`                   | No       | Whether the listbox is disabled                                                                     |
| `disallowSelectAll`                                                      | `boolean`                   | No       | Whether to disallow selecting all items when `meta+a` is pressed                                    |
| `highlightedValue`                                                       | `string`                    | No       | The controlled key of the highlighted item                                                          |
| `id`                                                                     | `string`                    | No       | The unique identifier of the machine.                                                               |
| `ids`                                                                    | `Partial<{                  |

root: string
content: string
label: string
item: (id: string | number) => string
itemGroup: (id: string | number) => string
itemGroupLabel: (id: string | number) => string
}>`| No | The ids of the elements in the listbox. Useful for composition. |
|`loopFocus`|`boolean`| No | Whether to loop the keyboard navigation through the options |
|`onHighlightChange`|`(details: HighlightChangeDetails<T>) => void`| No | The callback fired when the highlighted item changes. |
|`onSelect`|`(details: SelectionDetails) => void`| No | Function called when an item is selected |
|`onValueChange`|`(details: ValueChangeDetails<T>) => void`| No | The callback fired when the selected item changes. |
|`orientation`|`'horizontal' | 'vertical'`| No | The orientation of the listbox. |
|`scrollToIndexFn`|`(details: ScrollToIndexDetails) => void`| No | Function to scroll to a specific index |
|`selectionMode`|`SelectionMode` | No | How multiple selection should behave in the listbox.

- `single`: The user can select a single item.
- `multiple`: The user can select multiple items without using modifier keys.
- `extended`: The user can select multiple items by using modifier keys. |
  | `selectOnHighlight` | `boolean` | No | Whether to select the item when it is highlighted |
  | `typeahead` | `boolean` | No | Whether to enable typeahead on the listbox |
  | `value` | `string[]` | No | The controlled keys of the selected items |

**Root Data Attributes:**

| Attribute            | Value                          |
| -------------------- | ------------------------------ |
| `[data-scope]`       | listbox                        |
| `[data-part]`        | root                           |
| `[data-orientation]` | The orientation of the listbox |
| `[data-disabled]`    | Present when disabled          |

**Content Props:**

| Prop      | Type                        | Required | Description                                                                                         |
| --------- | --------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `Snippet<[PropsFn<'div'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `ref`     | `Element`                   | No       |                                                                                                     |

**Content Data Attributes:**

| Attribute                 | Value                                       |
| ------------------------- | ------------------------------------------- |
| `[data-scope]`            | listbox                                     |
| `[data-part]`             | content                                     |
| `[data-activedescendant]` | The id the active descendant of the content |
| `[data-orientation]`      | The orientation of the content              |
| `[data-layout]`           |                                             |
| `[data-empty]`            | Present when the content is empty           |

**Content CSS Variables:**

| Variable         | Description                            |
| ---------------- | -------------------------------------- |
| `--column-count` | The column count value for the Content |

**Context Props:**

| Prop     | Type                              | Required | Description |
| -------- | --------------------------------- | -------- | ----------- |
| `render` | `Snippet<[UseListboxContext<T>]>` | Yes      |             |

**Empty Props:**

| Prop      | Type                        | Required | Description                                                                                         |
| --------- | --------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `Snippet<[PropsFn<'div'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `ref`     | `Element`                   | No       |                                                                                                     |

**Input Props:**

| Prop            | Type                          | Required | Description                                                                                         |
| --------------- | ----------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild`       | `Snippet<[PropsFn<'input'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `autoHighlight` | `boolean`                     | No       | Whether to automatically highlight the item when typing                                             |
| `ref`           | `Element`                     | No       |                                                                                                     |

**Input Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | listbox               |
| `[data-part]`     | input                 |
| `[data-disabled]` | Present when disabled |

**ItemContext Props:**

| Prop     | Type                               | Required | Description |
| -------- | ---------------------------------- | -------- | ----------- |
| `render` | `Snippet<[UseListboxItemContext]>` | Yes      |             |

**ItemGroupLabel Props:**

| Prop      | Type                        | Required | Description                                                                                         |
| --------- | --------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `Snippet<[PropsFn<'div'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `ref`     | `Element`                   | No       |                                                                                                     |

**ItemGroup Props:**

| Prop      | Type                        | Required | Description                                                                                         |
| --------- | --------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `Snippet<[PropsFn<'div'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `ref`     | `Element`                   | No       |                                                                                                     |

**ItemGroup Data Attributes:**

| Attribute            | Value                             |
| -------------------- | --------------------------------- |
| `[data-scope]`       | listbox                           |
| `[data-part]`        | item-group                        |
| `[data-disabled]`    | Present when disabled             |
| `[data-orientation]` | The orientation of the item       |
| `[data-empty]`       | Present when the content is empty |

**ItemIndicator Props:**

| Prop      | Type                        | Required | Description                                                                                         |
| --------- | --------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `Snippet<[PropsFn<'div'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `ref`     | `Element`                   | No       |                                                                                                     |

**ItemIndicator Data Attributes:**

| Attribute      | Value          |
| -------------- | -------------- | ----------- |
| `[data-scope]` | listbox        |
| `[data-part]`  | item-indicator |
| `[data-state]` | "checked"      | "unchecked" |

**Item Props:**

| Prop               | Type                        | Required | Description                                                                                         |
| ------------------ | --------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild`          | `Snippet<[PropsFn<'div'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `highlightOnHover` | `boolean`                   | No       | Whether to highlight the item on hover                                                              |
| `item`             | `any`                       | No       | The item to render                                                                                  |
| `ref`              | `Element`                   | No       |                                                                                                     |

**Item Data Attributes:**

| Attribute            | Value                       |
| -------------------- | --------------------------- | ----------- |
| `[data-scope]`       | listbox                     |
| `[data-part]`        | item                        |
| `[data-value]`       | The value of the item       |
| `[data-selected]`    | Present when selected       |
| `[data-layout]`      |                             |
| `[data-state]`       | "checked"                   | "unchecked" |
| `[data-orientation]` | The orientation of the item |
| `[data-highlighted]` | Present when highlighted    |
| `[data-disabled]`    | Present when disabled       |

**ItemText Props:**

| Prop      | Type                         | Required | Description                                                                                         |
| --------- | ---------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `Snippet<[PropsFn<'span'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `ref`     | `Element`                    | No       |                                                                                                     |

**ItemText Data Attributes:**

| Attribute            | Value                    |
| -------------------- | ------------------------ | ----------- |
| `[data-scope]`       | listbox                  |
| `[data-part]`        | item-text                |
| `[data-state]`       | "checked"                | "unchecked" |
| `[data-disabled]`    | Present when disabled    |
| `[data-highlighted]` | Present when highlighted |

**Label Props:**

| Prop      | Type                          | Required | Description                                                                                         |
| --------- | ----------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `Snippet<[PropsFn<'label'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `ref`     | `Element`                     | No       |                                                                                                     |

**Label Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | listbox               |
| `[data-part]`     | label                 |
| `[data-disabled]` | Present when disabled |

**RootProvider Props:**

| Prop      | Type                        | Required | Description                                                                                         |
| --------- | --------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `value`   | `UseListboxReturn<T>`       | Yes      |                                                                                                     |
| `asChild` | `Snippet<[PropsFn<'div'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ValueText Props:**

| Prop          | Type                         | Required | Description                                                                                         |
| ------------- | ---------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild`     | `Snippet<[PropsFn<'span'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `placeholder` | `string`                     | No       | Text to display when no value is selected.                                                          |

**ValueText Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | listbox               |
| `[data-part]`     | value-text            |
| `[data-disabled]` | Present when disabled |

### Context

**API:**

| Property                | Type                      | Description                                     |
| ----------------------- | ------------------------- | ----------------------------------------------- |
| `empty`                 | `boolean`                 | Whether the select value is empty               |
| `highlightedValue`      | `string`                  | The value of the highlighted item               |
| `highlightedItem`       | `V`                       | The highlighted item                            |
| `highlightValue`        | `(value: string) => void` | Function to highlight a value                   |
| `highlightFirst`        | `VoidFunction`            | Function to highlight the first value           |
| `highlightLast`         | `VoidFunction`            | Function to highlight the last value            |
| `highlightNext`         | `VoidFunction`            | Function to highlight the next value            |
| `highlightPrevious`     | `VoidFunction`            | Function to highlight the previous value        |
| `clearHighlightedValue` | `VoidFunction`            | Function to clear the highlighted value         |
| `selectedItems`         | `V[]`                     | The selected items                              |
| `hasSelectedItems`      | `boolean`                 | Whether there's a selected option               |
| `value`                 | `string[]`                | The selected item keys                          |
| `valueAsString`         | `string`                  | The string representation of the selected items |
| `selectValue`           | `(value: string) => void` | Function to select a value                      |
| `selectAll`             | `VoidFunction`            | Function to select all values.                  |

**Note**: This should only be called when the selectionMode is `multiple` or `extended`.
Otherwise, an exception will be thrown. |
| `setValue` | `(value: string[]) => void` | Function to set the value of the select |
| `clearValue` | `(value?: string) => void` | Function to clear the value of the select.
If a value is provided, it will only clear that value, otherwise, it will clear all values. |
| `getItemState` | `(props: ItemProps<any>) => ItemState` | Returns the state of a select item |
| `collection` | `ListCollection<V>` | Function to toggle the select |
| `disabled` | `boolean` | Whether the select is disabled |
