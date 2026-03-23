import { FieldBoxVariants } from "./field-box.recipe.js";
import { ReactNode } from "react";
import * as react_jsx_runtime0 from "react/jsx-runtime";
import { FieldError } from "react-hook-form";

//#region src/forms/field-box/field-box.d.ts
type FieldBoxProps = FieldBoxVariants & {
  /** RHF field name — wires to useFormContext for auto error/warning state */name?: string;
  label?: ReactNode; /** Hint text shown below the control when no error/warning is active */
  hint?: ReactNode;
  required?: boolean;
  children: ReactNode;
  className?: string; /** Explicit error — used when not inside an RHF FormProvider */
  error?: FieldError | string;
};
/**
 * FieldBox — RHF-aware layout wrapper for a single form control.
 *
 * Renders: label · [control] · hint/warning/error text.
 *
 * When inside an RHF `<FormProvider>` and `name` is provided, field state is
 * read automatically — error shows only after submit, warning shows (debounced)
 * on touch/dirty-after-submit.
 *
 * When used outside RHF (or with `error` prop directly), pass `error` explicitly.
 *
 * If children include an Ark `Field.Input` or `Field.Textarea`, FieldBox wraps
 * them in `Field.Root` for automatic label linkage and aria-invalid wiring.
 * For all other controls (DS Select, custom), it uses a plain div.
 */
declare function FieldBox({
  name,
  label,
  hint,
  required,
  size,
  children,
  className,
  error: externalError
}: FieldBoxProps): react_jsx_runtime0.JSX.Element;
declare namespace FieldBox {
  var displayName: string;
}
//#endregion
export { FieldBox, FieldBoxProps };
//# sourceMappingURL=field-box.d.ts.map