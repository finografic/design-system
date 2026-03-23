import { sva } from "@styled-system/css";
//#region src/forms/checkbox/checkbox.recipe.ts
/**
* Checkbox Recipe
*
* Slots:    root · control · indicator · label · description · errorText
* Variants: size (sm | md | lg)
*/
const checkboxRecipe = sva({
	className: "checkbox",
	slots: [
		"root",
		"control",
		"indicator",
		"label",
		"description",
		"errorText"
	],
	base: {
		root: {
			display: "inline-flex",
			alignItems: "flex-start",
			gap: "2",
			cursor: "pointer",
			userSelect: "none",
			_disabled: {
				opacity: .55,
				cursor: "not-allowed"
			},
			_indeterminate: {
				"& svg:not([data-indeterminate])": { display: "none" },
				"& svg[data-indeterminate]": { display: "block" }
			}
		},
		control: {
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			flexShrink: 0,
			overflow: "hidden",
			borderRadius: "xs",
			borderWidth: "light",
			borderStyle: "solid",
			borderColor: "border",
			bg: "bg",
			color: "transparent",
			transitionProperty: "background-color, border-color, color",
			transitionDuration: "normal",
			_checked: {
				bg: "{colors.success.light}",
				borderColor: "{colors.success.light}",
				color: "white"
			},
			_indeterminate: {
				bg: "{colors.success.light}",
				borderColor: "{colors.success.light}",
				color: "white"
			},
			_hover: { borderColor: "accent.emphasized" },
			_disabled: {
				bg: "bg.subtle",
				borderColor: "border.muted"
			},
			_focusVisible: {
				outline: "2px solid",
				outlineColor: "accent.focusRing",
				outlineOffset: "2px"
			},
			_invalid: { borderColor: "border.error" }
		},
		indicator: {
			"display": "flex",
			"alignItems": "center",
			"justifyContent": "center",
			"& svg[data-indeterminate]": { display: "none" }
		},
		label: {
			color: "fg",
			lineHeight: "normal",
			_disabled: { color: "fg.subtle" }
		},
		description: {
			color: "fg.muted",
			lineHeight: "normal"
		},
		errorText: {
			display: "flex",
			alignItems: "center",
			gap: "1",
			color: "fg.error",
			fontWeight: "semibold",
			lineHeight: "normal"
		}
	},
	variants: { size: {
		sm: {
			control: {
				"width": "4",
				"height": "4",
				"marginTop": "0.5",
				"& svg": {
					width: "2.5",
					height: "2.5"
				}
			},
			indicator: {
				width: "2.5",
				height: "2.5"
			},
			label: { fontSize: "sm" },
			description: { fontSize: "xs" },
			errorText: { fontSize: "xs" }
		},
		md: {
			control: {
				"width": "5",
				"height": "5",
				"marginTop": "0.5",
				"& svg": {
					width: "3",
					height: "3"
				}
			},
			indicator: {
				width: "3",
				height: "3"
			},
			label: { fontSize: "md" },
			description: { fontSize: "sm" },
			errorText: { fontSize: "sm" }
		},
		lg: {
			control: {
				"width": "6",
				"height": "6",
				"marginTop": "0.5",
				"& svg": {
					width: "4",
					height: "4"
				}
			},
			indicator: {
				width: "4",
				height: "4"
			},
			label: { fontSize: "lg" },
			description: { fontSize: "md" },
			errorText: { fontSize: "md" }
		}
	} },
	defaultVariants: { size: "md" }
});
//#endregion
export { checkboxRecipe };

//# sourceMappingURL=checkbox.recipe.js.map