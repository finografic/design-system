import { sva } from "@styled-system/css";
//#region src/forms/date-picker/date-picker.recipe.ts
/**
* DatePicker Slot Recipe
*
* Port of Ark UI DatePicker example styles → Panda `sva` + semantic tokens.
*
* Slots:    root · label · control · input · trigger · clearTrigger · positioner · content ·
*           view · viewControl · viewTrigger · prevTrigger · nextTrigger · rangeText ·
*           table · tableHeader · tableCell · tableCellTrigger
* Variants: size (sm | md | lg)
*/
const datePickerRecipe = sva({
	className: "date-picker",
	slots: [
		"root",
		"label",
		"control",
		"input",
		"trigger",
		"clearTrigger",
		"positioner",
		"content",
		"view",
		"viewControl",
		"viewTrigger",
		"prevTrigger",
		"nextTrigger",
		"rangeText",
		"table",
		"tableHeader",
		"tableCell",
		"tableCellTrigger"
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
			}
		},
		input: {
			flex: "1",
			border: "none",
			bg: "transparent",
			color: "fg",
			outline: "none",
			_placeholder: { color: "fg.subtle" },
			_disabled: { cursor: "not-allowed" }
		},
		trigger: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexShrink: 0,
			color: "fg.muted",
			cursor: "pointer",
			_hover: { color: "fg" }
		},
		clearTrigger: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexShrink: 0,
			color: "fg.muted",
			cursor: "pointer",
			borderRadius: "sm",
			_hover: { color: "fg" }
		},
		positioner: { zIndex: "dropdown" },
		content: {
			bg: "bg.panel",
			borderWidth: "light",
			borderStyle: "solid",
			borderColor: "border",
			borderRadius: "md",
			boxShadow: "md",
			padding: "4",
			outline: "none",
			transformOrigin: "var(--transform-origin)",
			_open: { animation: "scale-in 150ms ease" },
			_closed: { animation: "scale-out 100ms ease" }
		},
		view: {
			display: "flex",
			flexDirection: "column",
			gap: "3",
			width: "full"
		},
		viewControl: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			gap: "2"
		},
		viewTrigger: {
			fontFamily: "inherit",
			fontWeight: "semibold",
			fontSize: "sm",
			color: "fg",
			cursor: "pointer",
			bg: "transparent",
			border: "none",
			borderRadius: "sm",
			px: "2",
			py: "1",
			_hover: { bg: "bg.subtle" },
			_focusVisible: {
				outline: "2px solid",
				outlineColor: "accent.focusRing",
				outlineOffset: "2px"
			}
		},
		prevTrigger: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			w: "7",
			h: "7",
			borderRadius: "sm",
			cursor: "pointer",
			bg: "transparent",
			border: "none",
			color: "fg.muted",
			_hover: {
				bg: "bg.subtle",
				color: "fg"
			},
			_disabled: {
				opacity: .5,
				cursor: "not-allowed",
				pointerEvents: "none"
			},
			_focusVisible: {
				outline: "2px solid",
				outlineColor: "accent.focusRing",
				outlineOffset: "2px"
			}
		},
		nextTrigger: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			w: "7",
			h: "7",
			borderRadius: "sm",
			cursor: "pointer",
			bg: "transparent",
			border: "none",
			color: "fg.muted",
			_hover: {
				bg: "bg.subtle",
				color: "fg"
			},
			_disabled: {
				opacity: .5,
				cursor: "not-allowed",
				pointerEvents: "none"
			},
			_focusVisible: {
				outline: "2px solid",
				outlineColor: "accent.focusRing",
				outlineOffset: "2px"
			}
		},
		rangeText: {
			fontSize: "sm",
			fontWeight: "semibold",
			color: "fg",
			textAlign: "center"
		},
		table: {
			width: "full",
			borderCollapse: "collapse"
		},
		tableHeader: {
			fontSize: "xs",
			fontWeight: "medium",
			color: "fg.muted",
			textAlign: "center",
			pb: "1"
		},
		tableCell: {
			textAlign: "center",
			padding: "0"
		},
		tableCellTrigger: {
			"display": "flex",
			"alignItems": "center",
			"justifyContent": "center",
			"width": "full",
			"borderRadius": "sm",
			"cursor": "pointer",
			"fontFamily": "inherit",
			"fontSize": "sm",
			"color": "fg",
			"bg": "transparent",
			"border": "none",
			"transitionProperty": "color, background-color",
			"transitionDuration": "fast",
			"_hover": { bg: "bg.subtle" },
			"_selected": {
				bg: "accent.solid",
				color: "accent.contrast",
				fontWeight: "semibold"
			},
			"[data-today]&": {
				fontWeight: "semibold",
				color: "accent.fg"
			},
			"[data-in-range]&": {
				bg: "accent.muted",
				color: "accent.fg",
				borderRadius: "0"
			},
			"[data-range-start]&": {
				borderRadius: "sm",
				borderTopRightRadius: "0",
				borderBottomRightRadius: "0"
			},
			"[data-range-end]&": {
				borderRadius: "sm",
				borderTopLeftRadius: "0",
				borderBottomLeftRadius: "0"
			},
			"[data-outside-range]&": {
				color: "fg.subtle",
				opacity: .5
			},
			"_disabled": {
				opacity: .4,
				cursor: "not-allowed",
				pointerEvents: "none"
			},
			"[data-unavailable]&": {
				opacity: .4,
				cursor: "not-allowed",
				pointerEvents: "none",
				textDecoration: "line-through"
			},
			"_focusVisible": {
				outline: "2px solid",
				outlineColor: "accent.focusRing",
				outlineOffset: "2px"
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
			trigger: {
				w: "7",
				h: "7"
			},
			clearTrigger: {
				w: "7",
				h: "7"
			},
			tableCellTrigger: {
				h: "7",
				fontSize: "xs"
			}
		},
		md: {
			control: { h: "10" },
			input: {
				fontSize: "sm",
				pl: "3",
				pr: "1"
			},
			trigger: {
				w: "8",
				h: "8"
			},
			clearTrigger: {
				w: "8",
				h: "8"
			},
			tableCellTrigger: {
				h: "8",
				fontSize: "sm"
			}
		},
		lg: {
			control: { h: "12" },
			input: {
				fontSize: "md",
				pl: "4",
				pr: "1"
			},
			trigger: {
				w: "10",
				h: "10"
			},
			clearTrigger: {
				w: "10",
				h: "10"
			},
			tableCellTrigger: {
				h: "9",
				fontSize: "md"
			}
		}
	} },
	defaultVariants: { size: "md" }
});
//#endregion
export { datePickerRecipe };

//# sourceMappingURL=date-picker.recipe.js.map