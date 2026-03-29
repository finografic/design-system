import { CheckIcon, EditIcon, XIcon } from '@finografic/icons';

import { Editable as ArkEditable } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef, type ReactNode } from 'react';

import type { EditableRecipeProps } from './editable.recipe';
import { editableRecipe } from './editable.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(editableRecipe);

/**
 * Styled Ark **Editable** compound — each part is wired to `editableRecipe` via context.
 *
 * Renders as a read-only preview that switches to an input on click or trigger press.
 * Ark handles all a11y: `contenteditable` fallback, keyboard (Enter to submit, Escape to cancel).
 * Variant props (`size`) go on **`Editable.Root`**.
 *
 * @example
 * ```tsx
 * import { Editable } from '@finografic/design-system/forms';
 *
 * <Editable.Root defaultValue="Hello world" size="md">
 *   <Editable.Label>Display name</Editable.Label>
 *   <Editable.Area>
 *     <Editable.Input />
 *     <Editable.Preview />
 *   </Editable.Area>
 *   <Editable.Control>
 *     <Editable.Context>
 *       {({ editing }) => editing ? (
 *         <>
 *           <Editable.SubmitTrigger>✓</Editable.SubmitTrigger>
 *           <Editable.CancelTrigger>✕</Editable.CancelTrigger>
 *         </>
 *       ) : (
 *         <Editable.EditTrigger>✎</Editable.EditTrigger>
 *       )}
 *     </Editable.Context>
 *   </Editable.Control>
 * </Editable.Root>
 * ```
 */
export const Editable = {
  /** Root — `value` / `defaultValue` / `onValueChange`, `placeholder`, `disabled`, plus `size`. */
  Root: withProvider(ArkEditable.Root, 'root'),
  /** Root with external machine state from `useEditable`. */
  RootProvider: withProvider(ArkEditable.RootProvider, 'root'),
  /** Optional text label above the editable field. */
  Label: withContext(ArkEditable.Label, 'label'),
  /** Wrapper that overlays `Input` and `Preview`. */
  Area: withContext(ArkEditable.Area, 'area'),
  /** Text input — shown while editing. */
  Input: withContext(ArkEditable.Input, 'input'),
  /** Read-only display — shown while not editing. */
  Preview: withContext(ArkEditable.Preview, 'preview'),
  /** Row of action triggers (Edit / Submit / Cancel). */
  Control: withContext(ArkEditable.Control, 'control'),
  /** Ghost button that enters edit mode. */
  EditTrigger: withContext(ArkEditable.EditTrigger, 'editTrigger'),
  /** Accent-filled button that commits the current value. */
  SubmitTrigger: withContext(ArkEditable.SubmitTrigger, 'submitTrigger'),
  /** Ghost button that discards changes and exits edit mode. */
  CancelTrigger: withContext(ArkEditable.CancelTrigger, 'cancelTrigger'),
  /** Render prop — exposes machine context (e.g. `editing`) to children; no DOM, no recipe slot. */
  Context: ArkEditable.Context,
};

// ── EditableDS — convenience wrapper ──────────────────────────────────────────

/** Slot class overrides for {@link EditableDS}. */
export interface EditableDSClassNames {
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

export type EditableDSProps = EditableRecipeProps & {
  /** Controlled value. */
  value?: string;
  /** Default value (uncontrolled). */
  defaultValue?: string;
  /** Placeholder shown when preview is empty. */
  placeholder?: string;
  /** Called as the user types. */
  onChange?: (value: string) => void;
  /** Called when the value is committed (Enter / submit trigger). */
  onValueCommit?: (value: string) => void;
  /** Called when the value is reverted (Escape / cancel trigger). */
  onValueRevert?: () => void;
  /** Disables the field. */
  disabled?: boolean;
  /** Makes the field read-only. */
  readOnly?: boolean;
  /** Renders a resizable textarea instead of a single-line input. */
  multiline?: boolean;
  /** Optional label above the field. */
  label?: ReactNode;
  /** Per-slot class overrides. */
  classNames?: EditableDSClassNames;
};

/**
 * Design-system convenience editable field — label, preview/input swap, and edit/submit/cancel
 * triggers included. **`Editable`** stays the styled compound for full composition;
 * **`EditableDS`** = packaged DS API with normalized handlers.
 *
 * @example
 * ```tsx
 * import { EditableDS } from '@finografic/design-system/forms';
 *
 * <EditableDS
 *   label="Display name"
 *   defaultValue="John Doe"
 *   onValueCommit={(value) => updateName(value)}
 * />
 * ```
 */
export const EditableDS = forwardRef<HTMLDivElement, EditableDSProps>(
  (
    {
      value,
      defaultValue,
      placeholder,
      onChange,
      onValueCommit,
      onValueRevert,
      disabled,
      readOnly,
      multiline,
      label,
      size = 'md',
      classNames = {},
    },
    ref,
  ) => {
    const styles = editableRecipe({ size });

    return (
      <ArkEditable.Root
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onValueChange={({ value: v }) => onChange?.(v)}
        onValueCommit={({ value: v }) => onValueCommit?.(v)}
        onValueRevert={() => onValueRevert?.()}
        disabled={disabled}
        readOnly={readOnly}
        className={cx(styles.root, classNames.root)}
      >
        {label && (
          <ArkEditable.Label className={cx(styles.label, classNames.label)}>{label}</ArkEditable.Label>
        )}

        <ArkEditable.Area className={cx(styles.area, classNames.area)}>
          {multiline ? (
            <ArkEditable.Input asChild>
              <textarea className={cx(styles.textarea, classNames.textarea)} />
            </ArkEditable.Input>
          ) : (
            <ArkEditable.Input className={cx(styles.input, classNames.input)} />
          )}
          <ArkEditable.Preview className={cx(styles.preview, classNames.preview)} />
        </ArkEditable.Area>

        <ArkEditable.Control className={cx(styles.control, classNames.control)}>
          <ArkEditable.Context>
            {({ editing }) =>
              editing ? (
                <>
                  <ArkEditable.SubmitTrigger
                    className={cx(styles.submitTrigger, classNames.submitTrigger)}
                    aria-label="Submit"
                  >
                    <CheckIcon aria-hidden />
                  </ArkEditable.SubmitTrigger>
                  <ArkEditable.CancelTrigger
                    className={cx(styles.cancelTrigger, classNames.cancelTrigger)}
                    aria-label="Cancel"
                  >
                    <XIcon aria-hidden />
                  </ArkEditable.CancelTrigger>
                </>
              ) : (
                <ArkEditable.EditTrigger
                  className={cx(styles.editTrigger, classNames.editTrigger)}
                  aria-label="Edit"
                >
                  <EditIcon aria-hidden />
                </ArkEditable.EditTrigger>
              )
            }
          </ArkEditable.Context>
        </ArkEditable.Control>
      </ArkEditable.Root>
    );
  },
);

EditableDS.displayName = 'EditableDS';

export type { EditableValueChangeDetails } from '@ark-ui/react';
