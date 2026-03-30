import { sva } from "@styled-system/css";
//#region src/components/toast/toast.recipe.ts
/**
* Toast Slot Recipe
*
* Slots:    root | title | description | closeTrigger | actionTrigger
* Variants: status (info | success | warning | error)
*/
const toastRecipe = sva({
	className: "toast",
	slots: [
		"root",
		"title",
		"description",
		"closeTrigger",
		"actionTrigger"
	],
	base: {
		root: {
			position: "relative",
			display: "flex",
			flexDirection: "column",
			gap: "0.5",
			alignItems: "flex-start",
			paddingBlock: "4",
			paddingInlineStart: "4",
			paddingInlineEnd: "10",
			borderRadius: "md",
			borderWidth: "light",
			borderStyle: "solid",
			boxShadow: "md",
			minW: "20rem",
			maxW: "24rem",
			bg: "bg.panel",
			borderColor: "border",
			_open: {
				animation: "slide-fade-in 200ms ease",
				animationFillMode: "forwards"
			},
			_closed: {
				animation: "slide-fade-out 150ms ease",
				animationFillMode: "forwards"
			}
		},
		title: {
			display: "flex",
			alignItems: "center",
			gap: "2",
			fontWeight: "semibold",
			fontSize: "sm",
			color: "fg",
			lineHeight: "1.25rem"
		},
		description: {
			fontSize: "sm",
			color: "fg.muted",
			lineHeight: "1.25rem",
			opacity: .8
		},
		closeTrigger: {
			position: "absolute",
			top: "1",
			insetInlineEnd: "1",
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			padding: "1",
			cursor: "pointer",
			color: "inherit",
			opacity: .6,
			borderRadius: "xs",
			border: "none",
			bg: "transparent",
			transitionProperty: "background-color, opacity",
			transitionDuration: "fast",
			_hover: {
				opacity: 1,
				bg: "bg.subtle"
			},
			_focusVisible: {
				outline: "2px solid currentColor",
				outlineOffset: "-1px"
			},
			"& svg": {
				w: "4",
				h: "4",
				flexShrink: 0
			}
		},
		actionTrigger: {
			display: "inline-flex",
			alignItems: "center",
			gap: "1.5",
			px: "2.5",
			py: "1",
			marginTop: "1.5",
			fontSize: "xs",
			fontWeight: "medium",
			fontFamily: "inherit",
			lineHeight: "1rem",
			borderRadius: "xs",
			userSelect: "none",
			cursor: "pointer",
			bg: "transparent",
			color: "inherit",
			borderWidth: "default",
			borderStyle: "solid",
			borderColor: "currentColor",
			transitionProperty: "background-color, border-color",
			transitionDuration: "fast",
			_hover: { bg: "bg.subtle" },
			_focusVisible: {
				outline: "2px solid",
				outlineColor: "accent.focusRing",
				outlineOffset: "2px"
			}
		}
	},
	variants: { status: {
		info: {
			root: {
				bg: "bg.info",
				borderColor: "border.info"
			},
			title: { color: "fg.info" }
		},
		success: {
			root: {
				bg: "bg.success",
				borderColor: "border.success"
			},
			title: { color: "fg.success" }
		},
		warning: {
			root: {
				bg: "bg.warning",
				borderColor: "border.warning"
			},
			title: { color: "fg.warning" }
		},
		error: {
			root: {
				bg: "bg.error",
				borderColor: "border.error"
			},
			title: { color: "fg.error" }
		}
	} },
	defaultVariants: { status: "info" }
});
//#endregion
export { toastRecipe };

//# sourceMappingURL=toast.recipe.js.map