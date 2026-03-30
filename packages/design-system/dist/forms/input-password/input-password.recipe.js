import { sva } from "@styled-system/css";
//#region src/forms/input-password/input-password.recipe.ts
/**
* InputPassword Slot Recipe
*
* Port of Ark UI PasswordInput example styles → Panda `sva` + semantic tokens.
*
* Slots:    root · label · control · input · visibilityTrigger
* Variants: size (sm | md | lg)
*/
const inputPasswordRecipe = sva({
	className: "input-password",
	slots: [
		"root",
		"label",
		"control",
		"input",
		"visibilityTrigger"
	],
	base: {
		root: {
			display: "flex",
			flexDirection: "column",
			gap: "1.5",
			width: "full"
		},
		label: {
			fontSize: "sm",
			fontWeight: "medium",
			color: "fg"
		},
		control: {
			position: "relative",
			display: "flex",
			alignItems: "center",
			width: "full",
			borderWidth: "default",
			borderStyle: "solid",
			borderColor: "border",
			borderRadius: "md",
			bg: "bg",
			transitionProperty: "border-color, box-shadow",
			transitionDuration: "fast",
			_focusWithin: {
				borderColor: "accent.solid",
				outline: "2px solid",
				outlineColor: "accent.focusRing",
				outlineOffset: "2px"
			},
			_disabled: {
				opacity: .55,
				cursor: "not-allowed"
			},
			"[data-invalid]&": { borderColor: "danger.solid" }
		},
		input: {
			flex: "1",
			border: "none",
			bg: "transparent",
			color: "fg",
			outline: "none",
			fontFamily: "inherit",
			_placeholder: { color: "fg.subtle" },
			_disabled: { cursor: "not-allowed" },
			_readOnly: { cursor: "default" }
		},
		visibilityTrigger: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexShrink: 0,
			color: "fg.muted",
			cursor: "pointer",
			bg: "transparent",
			border: "none",
			_hover: { color: "fg" },
			_focusVisible: {
				outline: "2px solid",
				outlineColor: "accent.focusRing",
				outlineOffset: "2px",
				borderRadius: "sm"
			}
		}
	},
	variants: { size: {
		sm: {
			control: { h: "9" },
			input: {
				fontSize: "sm",
				pl: "3",
				pr: "1"
			},
			visibilityTrigger: {
				w: "7",
				h: "7"
			}
		},
		md: {
			control: { h: "10" },
			input: {
				fontSize: "sm",
				pl: "3",
				pr: "1"
			},
			visibilityTrigger: {
				w: "8",
				h: "8"
			}
		},
		lg: {
			control: { h: "12" },
			input: {
				fontSize: "md",
				pl: "4",
				pr: "1"
			},
			visibilityTrigger: {
				w: "10",
				h: "10"
			}
		}
	} },
	defaultVariants: { size: "md" }
});
//#endregion
export { inputPasswordRecipe };

//# sourceMappingURL=input-password.recipe.js.map