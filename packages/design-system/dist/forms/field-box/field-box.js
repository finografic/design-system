import { fieldBoxRecipe } from "./field-box.recipe.js";
import { Children, isValidElement, useEffect, useRef, useState } from "react";
import { cx } from "@styled-system/css";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Field } from "@ark-ui/react";
import { useFormContext } from "react-hook-form";
//#region src/forms/field-box/field-box.tsx
function deriveValidationState(opts) {
	const { error, isSubmitted, isTouched, isDirty } = opts;
	if (!error) return {
		showError: false,
		showWarning: false,
		message: ""
	};
	const modifiedAfterSubmit = isSubmitted && isDirty;
	const showError = isSubmitted && !modifiedAfterSubmit;
	return {
		showError,
		showWarning: (isTouched || modifiedAfterSubmit) && !showError,
		message: error.message ?? ""
	};
}
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
function FieldBox({ name, label, hint, required = false, size = "md", children, className, error: externalError }) {
	const styles = fieldBoxRecipe({ size });
	const formContext = useFormContext?.();
	const [showDebouncedWarning, setShowDebouncedWarning] = useState(false);
	const warningTimerRef = useRef(null);
	const fieldState = formContext && name ? formContext.getFieldState(name) : null;
	const formState = formContext?.formState;
	const resolvedError = fieldState?.error ?? (externalError ? typeof externalError === "string" ? { message: externalError } : externalError : void 0);
	const isSubmitted = formState?.isSubmitted ?? false;
	const isTouched = fieldState?.isTouched ?? false;
	const isDirty = fieldState?.isDirty ?? false;
	const { showError, showWarning, message } = deriveValidationState({
		error: resolvedError,
		isSubmitted: externalError ? true : isSubmitted,
		isTouched,
		isDirty
	});
	useEffect(() => {
		if (warningTimerRef.current) clearTimeout(warningTimerRef.current);
		if (showWarning && !showError) warningTimerRef.current = setTimeout(() => setShowDebouncedWarning(true), 300);
		else setShowDebouncedWarning(false);
		return () => {
			if (warningTimerRef.current) clearTimeout(warningTimerRef.current);
		};
	}, [showWarning, showError]);
	const handleBlur = async () => {
		if (name && formContext?.trigger) await formContext.trigger(name);
	};
	const showHint = hint && !showError && !(showDebouncedWarning && message);
	const usesArkField = hasArkFieldInput(children);
	const rootProps = {
		"className": cx(styles.root, className) || void 0,
		"data-invalid": showError ? "true" : void 0,
		"data-required": required ? "true" : void 0,
		"onBlur": handleBlur
	};
	const labelNode = label && /* @__PURE__ */ jsxs("span", {
		className: styles.label,
		children: [label, required && /* @__PURE__ */ jsx("span", {
			className: styles.requiredIndicator,
			"aria-hidden": "true",
			children: "*"
		})]
	});
	const feedbackNode = /* @__PURE__ */ jsxs(Fragment, { children: [
		showHint && /* @__PURE__ */ jsx("span", {
			className: styles.helperText,
			children: hint
		}),
		showDebouncedWarning && !showError && message && /* @__PURE__ */ jsx("span", {
			className: styles.warningText,
			children: message
		}),
		showError && message && /* @__PURE__ */ jsx("span", {
			className: styles.errorText,
			role: "alert",
			children: message
		})
	] });
	if (usesArkField) return /* @__PURE__ */ jsxs(Field.Root, {
		invalid: showError,
		required,
		...rootProps,
		children: [
			label && /* @__PURE__ */ jsxs(Field.Label, {
				className: styles.label,
				children: [label, required && /* @__PURE__ */ jsx(Field.RequiredIndicator, { className: styles.requiredIndicator })]
			}),
			children,
			showHint && /* @__PURE__ */ jsx(Field.HelperText, {
				className: styles.helperText,
				children: hint
			}),
			showDebouncedWarning && !showError && message && /* @__PURE__ */ jsx(Field.HelperText, {
				className: styles.warningText,
				children: message
			}),
			showError && message && /* @__PURE__ */ jsx(Field.ErrorText, {
				className: styles.errorText,
				children: message
			})
		]
	});
	return /* @__PURE__ */ jsxs("div", {
		...rootProps,
		children: [
			labelNode,
			children,
			feedbackNode
		]
	});
}
FieldBox.displayName = "FieldBox";
function hasArkFieldInput(children) {
	if (!children) return false;
	return Children.toArray(children).some((child) => isValidElement(child) && (child.type === Field.Input || child.type === Field.Textarea));
}
//#endregion
export { FieldBox };

//# sourceMappingURL=field-box.js.map