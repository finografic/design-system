import { sva } from "@styled-system/css";
//#region src/components/menu/menu.recipe.ts
/**
* Menu Slot Recipe
*
* Port of Ark UI Menu example styles → Panda `sva` + semantic tokens.
*
* Slots:    root · positioner · content · separator · item · itemText · itemIndicator ·
*           itemGroup · itemGroupLabel · arrow · arrowTip · indicator
*
* `CheckboxItem` and `RadioItem` both share the `item` slot; `_checked` applies
* accent colour for their selected state.
*
* `Trigger` has no recipe slot — styled by the consumer (use `rootTriggerRecipe`
* or `buttonRecipe` as needed).
*/
const menuRecipe = sva({
	className: "menu",
	slots: [
		"root",
		"positioner",
		"content",
		"separator",
		"item",
		"itemText",
		"itemIndicator",
		"itemGroup",
		"itemGroupLabel",
		"arrow",
		"arrowTip",
		"indicator"
	],
	base: {
		root: {},
		positioner: { zIndex: "dropdown" },
		content: {
			position: "relative",
			display: "flex",
			flexDirection: "column",
			bg: "bg.panel",
			borderWidth: "light",
			borderStyle: "solid",
			borderColor: "border",
			borderRadius: "md",
			boxShadow: "md",
			minW: "max(var(--reference-width), 10rem)",
			maxH: "min(var(--available-height, 300px), 300px)",
			padding: "1",
			outline: "none",
			overflowY: "auto",
			transformOrigin: "var(--transform-origin)",
			_open: { animation: "scale-in 150ms ease" },
			_closed: { animation: "scale-out 100ms ease" }
		},
		separator: {
			height: "1px",
			border: "none",
			bg: "border.subtle",
			marginBlock: "1",
			marginInline: "-1"
		},
		item: {
			display: "flex",
			alignItems: "center",
			gap: "2",
			minH: "8",
			px: "3",
			py: "1.5",
			fontSize: "sm",
			lineHeight: "1.25rem",
			borderRadius: "sm",
			cursor: "pointer",
			color: "fg",
			userSelect: "none",
			outline: "none",
			textDecoration: "none",
			_highlighted: {
				bg: "accent.subtle",
				color: "accent.fg"
			},
			_checked: { color: "accent.fg" },
			_disabled: {
				opacity: .5,
				cursor: "not-allowed",
				pointerEvents: "none"
			}
		},
		itemText: {
			flex: "1",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap"
		},
		itemIndicator: {
			"display": "flex",
			"alignItems": "center",
			"justifyContent": "center",
			"flexShrink": 0,
			"width": "4",
			"height": "4",
			"color": "accent.solid",
			"& svg": {
				w: "3.5",
				h: "3.5"
			}
		},
		itemGroup: {
			"display": "flex",
			"flexDirection": "column",
			"& + &": { marginTop: "2" }
		},
		itemGroupLabel: {
			fontSize: "xs",
			fontWeight: "semibold",
			color: "fg.subtle",
			textTransform: "uppercase",
			letterSpacing: "wider",
			px: "3",
			py: "1.5"
		},
		arrow: { zIndex: -1 },
		arrowTip: {
			borderTopWidth: "light",
			borderTopStyle: "solid",
			borderTopColor: "border",
			borderLeftWidth: "light",
			borderLeftStyle: "solid",
			borderLeftColor: "border"
		},
		indicator: {
			"display": "inline-flex",
			"alignItems": "center",
			"justifyContent": "center",
			"& svg": {
				w: "4",
				h: "4"
			}
		}
	}
});
//#endregion
export { menuRecipe };

//# sourceMappingURL=menu.recipe.js.map