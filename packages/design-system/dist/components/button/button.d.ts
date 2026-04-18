import { ButtonVariants } from "./button.recipe.js";
import * as _$react from "react";
import { ComponentPropsWithoutRef, ReactNode } from "react";

//#region src/components/button/button.d.ts
type ButtonProps = ComponentPropsWithoutRef<'button'> & Omit<ButtonVariants, 'iconOnly'> & {
  /** Shows a spinner and disables interaction. Also sets `aria-busy`. */loading?: boolean; /** Icon element rendered before or after children. Hidden while `loading`. */
  icon?: ReactNode; /** Side the icon appears on. Default: `left` */
  iconPosition?: 'left' | 'right'; /** Stretches the button to fill its container width. */
  fullWidth?: boolean;
};
declare const Button: _$react.ForwardRefExoticComponent<Omit<_$react.DetailedHTMLProps<_$react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & Omit<{
  size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
  variant?: "outline" | "solid" | "link" | "subtle" | "ghost" | undefined;
  palette?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "grey" | "default" | undefined;
  iconOnly?: boolean | undefined;
  fullWidth?: boolean | undefined;
}, "iconOnly"> & {
  /** Shows a spinner and disables interaction. Also sets `aria-busy`. */loading?: boolean; /** Icon element rendered before or after children. Hidden while `loading`. */
  icon?: ReactNode; /** Side the icon appears on. Default: `left` */
  iconPosition?: "left" | "right"; /** Stretches the button to fill its container width. */
  fullWidth?: boolean;
} & _$react.RefAttributes<HTMLButtonElement>>;
//#endregion
export { Button, ButtonProps };
//# sourceMappingURL=button.d.ts.map