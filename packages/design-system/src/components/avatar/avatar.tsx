import { Avatar as ArkAvatar } from '@ark-ui/react/avatar';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef } from 'react';
import type { AvatarRecipeProps } from './avatar.recipe';
import type { AvatarImageProps, AvatarRootProps } from '@ark-ui/react/avatar';
import type { ReactNode } from 'react';

import { avatarRecipe } from './avatar.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(avatarRecipe);

/**
 * Styled Ark **Avatar** compound — each part is wired to `avatarRecipe` via context.
 *
 * Shows a profile image with an optional initials (or custom) fallback when the image is loading or
 * unavailable. Variant props (`size`, `variant`) go on **`Avatar.Root`** or **`Avatar.RootProvider`**.
 *
 * @example
 *   ```tsx
 *   import { Avatar } from '@finografic/design-system/components';
 *
 *   <Avatar.Root size="md">
 *     <Avatar.Fallback>PA</Avatar.Fallback>
 *     <Avatar.Image src="https://example.com/photo.jpg" alt="Profile" />
 *   </Avatar.Root>;
 *   ```;
 *
 * @example
 *   ```tsx
 *   import { Avatar, useAvatar } from '@finografic/design-system/components';
 *
 *   const avatar = useAvatar();
 *
 *   <Avatar.RootProvider value={avatar} size="md">
 *     <Avatar.Fallback>PA</Avatar.Fallback>
 *     <Avatar.Image src="https://example.com/photo.jpg" alt="Profile" />
 *   </Avatar.RootProvider>;
 *   ```;
 */
export const Avatar = {
  /** Root — `onStatusChange`, `ids`; accepts `size` and `variant`. */
  Root: withProvider(ArkAvatar.Root, 'root'),
  /** Same root styles when using external state from `useAvatar`. */
  RootProvider: withProvider(ArkAvatar.RootProvider, 'root'),
  /** Shown while the image loads or after an error — keep before `Image` in the tree. */
  Fallback: withContext(ArkAvatar.Fallback, 'fallback'),
  /** Profile image — standard `src` / `alt` img props. */
  Image: withContext(ArkAvatar.Image, 'image'),
  /** Render prop — image load API (`loaded`, `setSrc`, …); no DOM, no recipe slot. */
  Context: ArkAvatar.Context,
};

export type {
  AvatarContextProps,
  AvatarFallbackBaseProps,
  AvatarFallbackProps,
  AvatarImageBaseProps,
  AvatarImageProps,
  AvatarRootBaseProps,
  AvatarRootProps,
  AvatarRootProviderBaseProps,
  AvatarRootProviderProps,
  AvatarStatusChangeDetails,
  UseAvatarProps,
  UseAvatarReturn,
} from '@ark-ui/react/avatar';

export { useAvatar, useAvatarContext } from '@ark-ui/react/avatar';

// ── AvatarDS — convenience wrapper ────────────────────────────────────────────

/** Per-slot class overrides for {@link AvatarDS}. */
export interface AvatarDSClassNames {
  root?: string;
  fallback?: string;
  image?: string;
}

type AvatarDSImageProps = Partial<
  Pick<AvatarImageProps, 'src' | 'alt' | 'loading' | 'crossOrigin' | 'referrerPolicy' | 'sizes' | 'srcSet'>
>;

/** Recipe variants + Ark root/image props used by the convenience wrapper. */
export type AvatarDSProps = AvatarRecipeProps &
  Omit<AvatarRootProps, 'children'> &
  AvatarDSImageProps & {
    /** Fallback content (e.g. initials). Used when `name` is not set. */
    fallback?: ReactNode;
    /** Derives up to two uppercase initials when `fallback` is omitted. */
    name?: string;
    /** Per-slot class overrides. */
    classNames?: AvatarDSClassNames;
  };

function initialsFromName(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Design-system convenience avatar — pass `src`, `alt`, and `fallback` or `name` for the common case.
 * **`Avatar`** stays the styled compound for full composition; **`AvatarDS`** wires root, fallback, and
 * image.
 *
 * @example
 *   ```tsx
 *   import { AvatarDS } from '@finografic/design-system/components';
 *
 *   <AvatarDS
 *     src="https://i.pravatar.cc/300?u=a"
 *     alt="Jane Doe"
 *     name="Jane Doe"
 *     size="md"
 *     onStatusChange={({ status }) => console.log(status)}
 *   />;
 *   ```;
 */
export const AvatarDS = forwardRef<HTMLDivElement, AvatarDSProps>(
  (
    {
      src,
      alt,
      fallback,
      name,
      size = 'md',
      variant = 'outlined',
      className,
      classNames,
      onStatusChange,
      ids,
      asChild,
      loading,
      crossOrigin,
      referrerPolicy,
      sizes,
      srcSet,
      ...rootProps
    },
    ref,
  ) => {
    const styles = avatarRecipe({ size, variant });
    const fallbackContent = fallback ?? (name ? initialsFromName(name) : null);

    return (
      <ArkAvatar.Root
        ref={ref}
        className={cx(styles.root, className, classNames?.root)}
        onStatusChange={onStatusChange}
        ids={ids}
        asChild={asChild}
        {...rootProps}
      >
        {fallbackContent != null ? (
          <ArkAvatar.Fallback className={cx(styles.fallback, classNames?.fallback)}>
            {fallbackContent}
          </ArkAvatar.Fallback>
        ) : null}
        {src ? (
          <ArkAvatar.Image
            className={cx(styles.image, classNames?.image)}
            src={src}
            alt={alt}
            loading={loading}
            crossOrigin={crossOrigin}
            referrerPolicy={referrerPolicy}
            sizes={sizes}
            srcSet={srcSet}
          />
        ) : null}
      </ArkAvatar.Root>
    );
  },
);

AvatarDS.displayName = 'AvatarDS';
