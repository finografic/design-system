import { ButtonVariants } from "./button.recipe.js";
import { ComponentPropsWithoutRef, ReactNode } from "react";
//#region src/components/button/button.d.ts
type ButtonProps = ComponentPropsWithoutRef<'button'> & Omit<ButtonVariants, 'iconOnly'> & {
  /** Shows a spinner and disables interaction. Also sets `aria-busy`. */
  loading?: boolean;
  /** Icon element rendered before or after children. Hidden while `loading`. */
  icon?: ReactNode;
  /** Side the icon appears on. Default: `left` */
  iconPosition?: 'left' | 'right';
  /** Stretches the button to fill its container width. */
  fullWidth?: boolean;
};
declare const Button: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & Omit<{
  size?: "lg" | "md" | "sm" | "xl" | "xs" | undefined;
  variant?: "ghost" | "link" | "outline" | "solid" | "subtle" | undefined;
  palette?: "danger" | "default" | "grey" | "info" | "primary" | "secondary" | "success" | "warning" | undefined;
  iconOnly?: boolean | undefined;
  fullWidth?: boolean | undefined;
}, "iconOnly"> & {
  /** Shows a spinner and disables interaction. Also sets `aria-busy`. */
  loading?: boolean;
  /** Icon element rendered before or after children. Hidden while `loading`. */
  icon?: ReactNode;
  /** Side the icon appears on. Default: `left` */
  iconPosition?: 'left' | 'right';
  /** Stretches the button to fill its container width. */
  fullWidth?: boolean;
} & import("react").RefAttributes<HTMLButtonElement>>;
//#endregion
export { Button, ButtonProps };
//# sourceMappingURL=button.d.ts.map