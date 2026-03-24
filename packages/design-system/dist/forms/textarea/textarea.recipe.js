import { cva } from "@styled-system/css";
//#region src/forms/textarea/textarea.recipe.ts
/**
* Textarea Recipe
*
* Single-element CVA recipe for a styled `<textarea>` — same tokens as `InputField`.
*
* Variants: size (sm | md | lg) · resize (none | vertical | horizontal | both)
*/
const textareaRecipe = cva({
	base: {
		display: "block",
		width: "100%",
		borderWidth: "default",
		borderStyle: "solid",
		borderColor: "border",
		borderRadius: "md",
		bg: "bg",
		color: "fg",
		fontFamily: "inherit",
		fontWeight: "normal",
		lineHeight: "1.5",
		outline: 0,
		transitionProperty: "border-color, box-shadow",
		transitionDuration: "normal",
		_placeholder: { color: "fg.subtle" },
		_focusVisible: {
			borderColor: "accent.solid",
			boxShadow: "0 0 0 1px var(--colors-accent-focus-ring)"
		},
		_disabled: {
			opacity: .55,
			cursor: "not-allowed"
		},
		_readOnly: {
			bg: "bg.subtle",
			cursor: "default"
		},
		_invalid: {
			borderColor: "border.error",
			_focusVisible: { boxShadow: "0 0 0 1px var(--colors-fg-error)" }
		}
	},
	variants: {
		size: {
			sm: {
				minH: "20",
				px: "2.5",
				py: "1.5",
				fontSize: "sm"
			},
			md: {
				minH: "24",
				px: "3",
				py: "2",
				fontSize: "sm"
			},
			lg: {
				minH: "28",
				px: "4",
				py: "2.5",
				fontSize: "md"
			}
		},
		resize: {
			none: { resize: "none" },
			vertical: { resize: "vertical" },
			horizontal: { resize: "horizontal" },
			both: { resize: "both" }
		}
	},
	defaultVariants: {
		size: "md",
		resize: "vertical"
	}
});
//#endregion
export { textareaRecipe };

//# sourceMappingURL=textarea.recipe.js.map