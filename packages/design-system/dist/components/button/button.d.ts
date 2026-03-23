import { ButtonVariants } from "./button.types.js";
import * as react from "react";
import { ComponentPropsWithoutRef, ReactNode } from "react";

//#region src/components/button/button.d.ts
type ButtonProps = ComponentPropsWithoutRef<'button'> & ButtonVariants & {
  /** Visual size — xs · sm · md · lg · xl. Default: md */size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; /** Visual variant — solid · subtle · outline · ghost · link. Default: outline */
  variant?: 'solid' | 'subtle' | 'outline' | 'ghost' | 'link'; /** Color scheme. Default: default */
  palette?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'grey'; /** Loading state — disables the button and sets aria-busy */
  loading?: boolean; /** Icon element rendered before children (or after, see iconPosition) */
  icon?: ReactNode; /** Position of the icon relative to text content. Default: left */
  iconPosition?: 'left' | 'right';
};
declare const Button: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
  variant?: "outline" | "subtle" | "solid" | "link" | "ghost" | undefined;
  palette?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "grey" | "default" | undefined;
  iconOnly?: boolean | undefined;
} & {
  /** Visual size — xs · sm · md · lg · xl. Default: md */size?: "xs" | "sm" | "md" | "lg" | "xl"; /** Visual variant — solid · subtle · outline · ghost · link. Default: outline */
  variant?: "solid" | "subtle" | "outline" | "ghost" | "link"; /** Color scheme. Default: default */
  palette?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "grey"; /** Loading state — disables the button and sets aria-busy */
  loading?: boolean; /** Icon element rendered before children (or after, see iconPosition) */
  icon?: ReactNode; /** Position of the icon relative to text content. Default: left */
  iconPosition?: "left" | "right";
} & react.RefAttributes<HTMLButtonElement>>;
//#endregion
export { Button, ButtonProps };
//# sourceMappingURL=button.d.ts.map