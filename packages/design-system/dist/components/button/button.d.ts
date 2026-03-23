import { ButtonVariants } from "./button.recipe.js";
import * as react from "react";
import { ComponentPropsWithoutRef, ReactNode } from "react";

//#region src/components/button/button.d.ts
type ButtonProps = ComponentPropsWithoutRef<'button'> & Omit<ButtonVariants, 'iconOnly'> & {
  /** Shows a spinner and disables interaction. Also sets `aria-busy`. */loading?: boolean; /** Icon element rendered before or after children. Hidden while `loading`. */
  icon?: ReactNode; /** Side the icon appears on. Default: `left` */
  iconPosition?: 'left' | 'right';
};
declare const Button: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & Omit<{
  size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
  variant?: "outline" | "solid" | "link" | "subtle" | "ghost" | undefined;
  palette?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "grey" | "default" | undefined;
  iconOnly?: boolean | undefined;
}, "iconOnly"> & {
  /** Shows a spinner and disables interaction. Also sets `aria-busy`. */loading?: boolean; /** Icon element rendered before or after children. Hidden while `loading`. */
  icon?: ReactNode; /** Side the icon appears on. Default: `left` */
  iconPosition?: "left" | "right";
} & react.RefAttributes<HTMLButtonElement>>;
//#endregion
export { Button, ButtonProps };
//# sourceMappingURL=button.d.ts.map