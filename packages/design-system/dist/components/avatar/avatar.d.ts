import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { AvatarRecipeProps } from "./avatar.recipe.js";
import * as _$react from "react";
import { ReactNode } from "react";
import { Avatar, AvatarStatusChangeDetails, AvatarStatusChangeDetails as AvatarStatusChangeDetails$1, UseAvatarProps, UseAvatarReturn, useAvatar, useAvatarContext } from "@ark-ui/react/avatar";
import * as _$_styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/avatar/avatar.d.ts
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
 *   ```
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
 *   ```
 */
declare const Avatar$1: {
  /** Root — `onStatusChange`, `ids`; accepts `size` and `variant`. */Root: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<Avatar.RootProps & _$react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "image" | "fallback", {
    size: {
      sm: {
        root: {
          width: "8";
          height: "8";
          fontSize: "xs";
        };
      };
      md: {
        root: {
          width: "12";
          height: "12";
          fontSize: "md";
        };
      };
      lg: {
        root: {
          width: "16";
          height: "16";
          fontSize: "lg";
        };
      };
    };
    variant: {
      elevated: {
        root: {
          boxShadow: "sm";
        };
      };
      outlined: {
        root: {};
      };
    };
  }>>; /** Same root styles when using external state from `useAvatar`. */
  RootProvider: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<Avatar.RootProviderProps & _$react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "image" | "fallback", {
    size: {
      sm: {
        root: {
          width: "8";
          height: "8";
          fontSize: "xs";
        };
      };
      md: {
        root: {
          width: "12";
          height: "12";
          fontSize: "md";
        };
      };
      lg: {
        root: {
          width: "16";
          height: "16";
          fontSize: "lg";
        };
      };
    };
    variant: {
      elevated: {
        root: {
          boxShadow: "sm";
        };
      };
      outlined: {
        root: {};
      };
    };
  }>>; /** Shown while the image loads or after an error — keep before `Image` in the tree. */
  Fallback: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Avatar.FallbackProps & _$react.RefAttributes<HTMLSpanElement>>>; /** Profile image — standard `src` / `alt` img props. */
  Image: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Avatar.ImageProps & _$react.RefAttributes<HTMLImageElement>>>; /** Render prop — image load API (`loaded`, `setSrc`, …); no DOM, no recipe slot. */
  Context: (props: Avatar.ContextProps) => ReactNode;
};
/** Per-slot class overrides for {@link AvatarDS}. */
interface AvatarDSClassNames {
  root?: string;
  fallback?: string;
  image?: string;
}
type AvatarDSProps = AvatarRecipeProps & {
  /** Image URL. Omit for fallback-only avatars. */src?: string; /** Accessible name for the image (required when `src` is set). */
  alt: string; /** Fallback content (e.g. initials). Used when `name` is not set. */
  fallback?: ReactNode; /** Derives up to two uppercase initials when `fallback` is omitted. */
  name?: string; /** Called when image status changes (`loading` | `loaded` | `error`). */
  onStatusChange?: (details: AvatarStatusChangeDetails) => void; /** Merged onto the root element after recipe classes. */
  className?: string; /** Per-slot class overrides. */
  classNames?: AvatarDSClassNames;
};
/**
 * Design-system convenience avatar — pass `src`, `alt`, and `fallback` or `name` for the common case.
 * **`Avatar`** stays the styled compound for full composition; **`AvatarDS`** wires root, fallback, and image.
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
 *   ```
 */
declare const AvatarDS: _$react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
  variant?: "elevated" | "outlined" | undefined;
} & {
  /** Image URL. Omit for fallback-only avatars. */src?: string; /** Accessible name for the image (required when `src` is set). */
  alt: string; /** Fallback content (e.g. initials). Used when `name` is not set. */
  fallback?: ReactNode; /** Derives up to two uppercase initials when `fallback` is omitted. */
  name?: string; /** Called when image status changes (`loading` | `loaded` | `error`). */
  onStatusChange?: (details: AvatarStatusChangeDetails) => void; /** Merged onto the root element after recipe classes. */
  className?: string; /** Per-slot class overrides. */
  classNames?: AvatarDSClassNames;
} & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Avatar$1 as Avatar, AvatarDS, AvatarDSClassNames, AvatarDSProps, type AvatarStatusChangeDetails$1 as AvatarStatusChangeDetails, type UseAvatarProps, type UseAvatarReturn, useAvatar, useAvatarContext };
//# sourceMappingURL=avatar.d.ts.map