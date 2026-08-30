import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import "../../packages/design-system/styled-system/types/index.js";
import { AvatarRecipeProps } from "./avatar.recipe.js";
import { ReactNode } from "react";
import { Avatar, AvatarContextProps, AvatarFallbackBaseProps, AvatarFallbackProps, AvatarImageBaseProps, AvatarImageProps, AvatarImageProps as AvatarImageProps$1, AvatarRootBaseProps, AvatarRootProps, AvatarRootProps as AvatarRootProps$1, AvatarRootProviderBaseProps, AvatarRootProviderProps, AvatarStatusChangeDetails, UseAvatarProps, UseAvatarReturn, useAvatar, useAvatarContext } from "@ark-ui/react/avatar";
//#region src/components/avatar/avatar.d.ts
/**
 * Styled Ark **Avatar** compound — each part is wired to `avatarRecipe` via context.
 *
 * Shows a profile image with an optional initials (or custom) fallback when the image is loading or
 * unavailable. Recipe props (`size`, `shape`, `variant`) go on **`Avatar.Root`** or
 * **`Avatar.RootProvider`**.
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
declare const Avatar$1: {
  /** Root — `onStatusChange`, `ids`; accepts `size`, `shape`, and `variant`. */
  Root: import("@styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<AvatarRootProps & import("react").RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"fallback" | "image" | "root", {
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
      xl: {
        root: {
          width: "20";
          height: "20";
          fontSize: "xl";
        };
      };
      '2xl': {
        root: {
          width: "25";
          height: "25";
          fontSize: "2xl";
        };
      };
    };
    shape: {
      circle: {
        root: {
          borderRadius: "full";
        };
      };
      square: {
        root: {
          borderRadius: "none";
        };
      };
      rounded: {
        root: {
          borderRadius: "md";
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
  }>>;
  /** Same root styles when using external state from `useAvatar`. */
  RootProvider: import("@styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<Avatar.RootProviderProps & import("react").RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"fallback" | "image" | "root", {
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
      xl: {
        root: {
          width: "20";
          height: "20";
          fontSize: "xl";
        };
      };
      '2xl': {
        root: {
          width: "25";
          height: "25";
          fontSize: "2xl";
        };
      };
    };
    shape: {
      circle: {
        root: {
          borderRadius: "full";
        };
      };
      square: {
        root: {
          borderRadius: "none";
        };
      };
      rounded: {
        root: {
          borderRadius: "md";
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
  }>>;
  /** Shown while the image loads or after an error — keep before `Image` in the tree. */
  Fallback: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Avatar.FallbackProps & import("react").RefAttributes<HTMLSpanElement>>>;
  /** Profile image — standard `src` / `alt` img props. */
  Image: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<AvatarImageProps & import("react").RefAttributes<HTMLImageElement>>>;
  /** Render prop — image load API (`loaded`, `setSrc`, …); no DOM, no recipe slot. */
  Context: (props: Avatar.ContextProps) => ReactNode;
};
/** Per-slot class overrides for {@link AvatarDS}. */
interface AvatarDSClassNames {
  root?: string;
  fallback?: string;
  image?: string;
}
type AvatarDSImageProps = Partial<Pick<AvatarImageProps, 'src' | 'alt' | 'loading' | 'crossOrigin' | 'referrerPolicy' | 'sizes' | 'srcSet'>>;
/** Recipe variants + Ark root/image props used by the convenience wrapper. */
type AvatarDSProps = AvatarRecipeProps & Omit<AvatarRootProps, 'children'> & AvatarDSImageProps & {
  /** Fallback content (e.g. initials). Used when `name` is not set. */
  fallback?: ReactNode;
  /** Derives up to two uppercase initials when `fallback` is omitted. */
  name?: string;
  /** Per-slot class overrides. */
  classNames?: AvatarDSClassNames;
};
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
 *     shape="rounded"
 *     onStatusChange={({ status }) => console.log(status)}
 *   />;
 *   ```;
 */
declare const AvatarDS: import("react").ForwardRefExoticComponent<{
  size?: "2xl" | "lg" | "md" | "sm" | "xl" | undefined;
  shape?: "circle" | "rounded" | "square" | undefined;
  variant?: "elevated" | "outlined" | undefined;
} & Omit<AvatarRootProps, "children"> & Partial<Pick<AvatarImageProps, "alt" | "crossOrigin" | "loading" | "referrerPolicy" | "sizes" | "src" | "srcSet">> & {
  /** Fallback content (e.g. initials). Used when `name` is not set. */
  fallback?: ReactNode;
  /** Derives up to two uppercase initials when `fallback` is omitted. */
  name?: string;
  /** Per-slot class overrides. */
  classNames?: AvatarDSClassNames;
} & import("react").RefAttributes<HTMLDivElement>>;
//#endregion
export { Avatar$1 as Avatar, type AvatarContextProps, AvatarDS, AvatarDSClassNames, AvatarDSProps, type AvatarFallbackBaseProps, type AvatarFallbackProps, type AvatarImageBaseProps, type AvatarImageProps$1 as AvatarImageProps, type AvatarRootBaseProps, type AvatarRootProps$1 as AvatarRootProps, type AvatarRootProviderBaseProps, type AvatarRootProviderProps, type AvatarStatusChangeDetails, type UseAvatarProps, type UseAvatarReturn, useAvatar, useAvatarContext };
//# sourceMappingURL=avatar.d.ts.map