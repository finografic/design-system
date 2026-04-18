import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { EditableRecipeProps } from "./editable.recipe.js";
import * as _$react from "react";
import { ReactNode } from "react";
import { Editable, EditableValueChangeDetails } from "@ark-ui/react";
import * as _$_styled_system_jsx0 from "@styled-system/jsx";

//#region src/forms/editable/editable.d.ts
/**
 * Styled Ark **Editable** compound — each part is wired to `editableRecipe` via context.
 *
 * Renders as a read-only preview that switches to an input on click or trigger press. Ark handles all a11y:
 * `contenteditable` fallback, keyboard (Enter to submit, Escape to cancel). Variant props (`size`) go on
 * **`Editable.Root`**.
 *
 * @example
 *   ```tsx
 *   import { Editable } from '@finografic/design-system/forms';
 *
 *   <Editable.Root defaultValue="Hello world" size="md">
 *     <Editable.Label>Display name</Editable.Label>
 *     <Editable.Area>
 *       <Editable.Input />
 *       <Editable.Preview />
 *     </Editable.Area>
 *     <Editable.Control>
 *       <Editable.Context>
 *         {({ editing }) =>
 *           editing ? (
 *             <>
 *               <Editable.SubmitTrigger>✓</Editable.SubmitTrigger>
 *               <Editable.CancelTrigger>✕</Editable.CancelTrigger>
 *             </>
 *           ) : (
 *             <Editable.EditTrigger>✎</Editable.EditTrigger>
 *           )
 *         }
 *       </Editable.Context>
 *     </Editable.Control>
 *   </Editable.Root>;
 *   ```;
 */
declare const Editable$1: {
  /** Root — `value` / `defaultValue` / `onValueChange`, `placeholder`, `disabled`, plus `size`. */Root: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<Editable.RootProps & _$react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "textarea" | "label" | "area" | "input" | "preview" | "control" | "editTrigger" | "submitTrigger" | "cancelTrigger", {
    size: {
      sm: {
        input: {
          h: "8";
          px: "2.5";
          fontSize: "sm";
        };
        textarea: {
          minH: "16";
          px: "2.5";
          py: "1.5";
          fontSize: "sm";
        };
        preview: {
          h: "8";
          px: "2.5";
          fontSize: "sm";
        };
        editTrigger: {
          w: "7";
          h: "7";
        };
        submitTrigger: {
          w: "7";
          h: "7";
        };
        cancelTrigger: {
          w: "7";
          h: "7";
        };
      };
      md: {
        input: {
          h: "9";
          px: "3";
          fontSize: "sm";
        };
        textarea: {
          minH: "20";
          px: "3";
          py: "2";
          fontSize: "sm";
        };
        preview: {
          h: "9";
          px: "3";
          fontSize: "sm";
        };
        editTrigger: {
          w: "8";
          h: "8";
        };
        submitTrigger: {
          w: "8";
          h: "8";
        };
        cancelTrigger: {
          w: "8";
          h: "8";
        };
      };
      lg: {
        input: {
          h: "11";
          px: "4";
          fontSize: "md";
        };
        textarea: {
          minH: "24";
          px: "4";
          py: "2.5";
          fontSize: "md";
        };
        preview: {
          h: "11";
          px: "4";
          fontSize: "md";
        };
        editTrigger: {
          w: "9";
          h: "9";
        };
        submitTrigger: {
          w: "9";
          h: "9";
        };
        cancelTrigger: {
          w: "9";
          h: "9";
        };
      };
    };
  }>>; /** Root with external machine state from `useEditable`. */
  RootProvider: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<Editable.RootProviderProps & _$react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "textarea" | "label" | "area" | "input" | "preview" | "control" | "editTrigger" | "submitTrigger" | "cancelTrigger", {
    size: {
      sm: {
        input: {
          h: "8";
          px: "2.5";
          fontSize: "sm";
        };
        textarea: {
          minH: "16";
          px: "2.5";
          py: "1.5";
          fontSize: "sm";
        };
        preview: {
          h: "8";
          px: "2.5";
          fontSize: "sm";
        };
        editTrigger: {
          w: "7";
          h: "7";
        };
        submitTrigger: {
          w: "7";
          h: "7";
        };
        cancelTrigger: {
          w: "7";
          h: "7";
        };
      };
      md: {
        input: {
          h: "9";
          px: "3";
          fontSize: "sm";
        };
        textarea: {
          minH: "20";
          px: "3";
          py: "2";
          fontSize: "sm";
        };
        preview: {
          h: "9";
          px: "3";
          fontSize: "sm";
        };
        editTrigger: {
          w: "8";
          h: "8";
        };
        submitTrigger: {
          w: "8";
          h: "8";
        };
        cancelTrigger: {
          w: "8";
          h: "8";
        };
      };
      lg: {
        input: {
          h: "11";
          px: "4";
          fontSize: "md";
        };
        textarea: {
          minH: "24";
          px: "4";
          py: "2.5";
          fontSize: "md";
        };
        preview: {
          h: "11";
          px: "4";
          fontSize: "md";
        };
        editTrigger: {
          w: "9";
          h: "9";
        };
        submitTrigger: {
          w: "9";
          h: "9";
        };
        cancelTrigger: {
          w: "9";
          h: "9";
        };
      };
    };
  }>>; /** Optional text label above the editable field. */
  Label: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Editable.LabelProps & _$react.RefAttributes<HTMLLabelElement>>>; /** Wrapper that overlays `Input` and `Preview`. */
  Area: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Editable.AreaProps & _$react.RefAttributes<HTMLDivElement>>>; /** Text input — shown while editing. */
  Input: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Editable.InputProps & _$react.RefAttributes<HTMLInputElement>>>; /** Read-only display — shown while not editing. */
  Preview: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Editable.PreviewProps & _$react.RefAttributes<HTMLSpanElement>>>; /** Row of action triggers (Edit / Submit / Cancel). */
  Control: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Editable.ControlProps & _$react.RefAttributes<HTMLDivElement>>>; /** Ghost button that enters edit mode. */
  EditTrigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Editable.EditTriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Accent-filled button that commits the current value. */
  SubmitTrigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Editable.SubmitTriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Ghost button that discards changes and exits edit mode. */
  CancelTrigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Editable.CancelTriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Render prop — exposes machine context (e.g. `editing`) to children; no DOM, no recipe slot. */
  Context: (props: Editable.ContextProps) => ReactNode;
};
/** Slot class overrides for {@link EditableDS}. */
interface EditableDSClassNames {
  root?: string;
  label?: string;
  area?: string;
  input?: string;
  textarea?: string;
  preview?: string;
  control?: string;
  editTrigger?: string;
  submitTrigger?: string;
  cancelTrigger?: string;
}
type EditableDSProps = EditableRecipeProps & {
  /** Controlled value. */value?: string; /** Default value (uncontrolled). */
  defaultValue?: string; /** Placeholder shown when preview is empty. */
  placeholder?: string; /** Called as the user types. */
  onChange?: (value: string) => void; /** Called when the value is committed (Enter / submit trigger). */
  onValueCommit?: (value: string) => void; /** Called when the value is reverted (Escape / cancel trigger). */
  onValueRevert?: () => void; /** Disables the field. */
  disabled?: boolean; /** Makes the field read-only. */
  readOnly?: boolean; /** Renders a resizable textarea instead of a single-line input. */
  multiline?: boolean; /** Optional label above the field. */
  label?: ReactNode; /** Per-slot class overrides. */
  classNames?: EditableDSClassNames;
};
/**
 * Design-system convenience editable field — label, preview/input swap, and edit/submit/cancel triggers
 * included. **`Editable`** stays the styled compound for full composition; **`EditableDS`** = packaged DS API
 * with normalized handlers.
 *
 * @example
 *   ```tsx
 *   import { EditableDS } from '@finografic/design-system/forms';
 *
 *   <EditableDS label="Display name" defaultValue="John Doe" onValueCommit={(value) => updateName(value)} />;
 *   ```;
 */
declare const EditableDS: _$react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
} & {
  /** Controlled value. */value?: string; /** Default value (uncontrolled). */
  defaultValue?: string; /** Placeholder shown when preview is empty. */
  placeholder?: string; /** Called as the user types. */
  onChange?: (value: string) => void; /** Called when the value is committed (Enter / submit trigger). */
  onValueCommit?: (value: string) => void; /** Called when the value is reverted (Escape / cancel trigger). */
  onValueRevert?: () => void; /** Disables the field. */
  disabled?: boolean; /** Makes the field read-only. */
  readOnly?: boolean; /** Renders a resizable textarea instead of a single-line input. */
  multiline?: boolean; /** Optional label above the field. */
  label?: ReactNode; /** Per-slot class overrides. */
  classNames?: EditableDSClassNames;
} & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Editable$1 as Editable, EditableDS, EditableDSClassNames, EditableDSProps, type EditableValueChangeDetails };
//# sourceMappingURL=editable.d.ts.map