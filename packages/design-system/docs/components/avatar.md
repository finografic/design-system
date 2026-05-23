# Avatar

Profile image with optional initials fallback. Built on Ark UI Avatar + Panda `avatarRecipe` (`sva`).

## Imports

```tsx
import { Avatar, AvatarDS } from '@finografic/design-system/components';
```

## Quick start — `AvatarDS`

```tsx
<AvatarDS
  src="/photo.jpg"
  alt="Jane Doe"
  name="Jane Doe"
  size="lg"
  shape="circle"
  variant="elevated"
/>
```

## Compound — `Avatar.*`

```tsx
<Avatar.Root size="md" shape="rounded" variant="outlined">
  <Avatar.Fallback>JD</Avatar.Fallback>
  <Avatar.Image src="/photo.jpg" alt="Jane Doe" />
</Avatar.Root>
```

## Recipe props

Set on **`Avatar.Root`**, **`Avatar.RootProvider`**, or **`AvatarDS`**.

| Prop      | Values                            | Default    | Notes                                              |
| --------- | --------------------------------- | ---------- | -------------------------------------------------- |
| `size`    | `sm` · `md` · `lg` · `xl` · `2xl` | `md`       | See size table below                               |
| `shape`   | `circle` · `square` · `rounded`   | `circle`   | `rounded` uses `borderRadius: md` (`0.5rem` / 8px) |
| `variant` | `outlined` · `elevated`           | `outlined` | `elevated` adds `boxShadow: sm`                    |

### Sizes

| Size  | Dimensions |
| ----- | ---------- |
| `sm`  | 32×32px    |
| `md`  | 48×48px    |
| `lg`  | 64×64px    |
| `xl`  | 80×80px    |
| `2xl` | 100×100px  |

## Custom corner radius

Prefer `shape="rounded"` for the standard token. For one-offs, override the root slot via `classNames.root` on `AvatarDS` or `className` on `Avatar.Root`.

## Handlers

| Prop             | Signature                 | Notes                                                                   |
| ---------------- | ------------------------- | ----------------------------------------------------------------------- |
| `onStatusChange` | Ark `StatusChangeDetails` | `status`: `loading` \| `loaded` \| `error` — pass-through on `AvatarDS` |

## Sub-components

| Part           | Role                                             |
| -------------- | ------------------------------------------------ |
| `Root`         | Container; accepts recipe props                  |
| `RootProvider` | Same styles when using `useAvatar()`             |
| `Fallback`     | Initials or placeholder while loading / on error |
| `Image`        | Profile photo                                    |
| `Context`      | Render prop for image load state                 |
