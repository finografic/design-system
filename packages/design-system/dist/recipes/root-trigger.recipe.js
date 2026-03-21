import { cva } from "@styled-system/css";
//#region src/recipes/root-trigger.recipe.ts
/**
* Root trigger recipe (shared `cva`)
*
* Port of Ark UI docs’ `_Root.css` **`.Root`** block — the control that opens
* overlays (Dialog, Popover, Menu, Select, …). Ark names that class `.Root` in
* examples; here we call the recipe **`rootTrigger`** to avoid confusion with
* composition roots like `<Dialog.Root>`.
*
* Does **not** include `.Group` from the same file (button-group layout).
*
* @see https://ark-ui.com/docs/components/dialog — example trigger styling
*/
const rootTriggerRecipe = cva({
	base: {
		"display": "inline-flex",
		"alignItems": "center",
		"justifyContent": "center",
		"gap": "2",
		"paddingInline": "4",
		"paddingBlock": "2",
		"fontSize": "sm",
		"fontWeight": "medium",
		"fontFamily": "inherit",
		"lineHeight": "1.25rem",
		"borderRadius": "sm",
		"userSelect": "none",
		"whiteSpace": "nowrap",
		"cursor": "pointer",
		"transitionProperty": "background-color, border-color, color",
		"transitionDuration": "150ms",
		"& svg": {
			width: "1em",
			height: "1em"
		},
		"&:has(> svg:only-child)": { paddingInline: "0.625rem !important" },
		"bg": "transparent",
		"borderWidth": "light",
		"borderStyle": "solid",
		"borderColor": "border.emphasized",
		"color": "fg",
		"_focusVisible": {
			outline: "2px solid",
			outlineColor: "accent.focusRing",
			outlineOffset: "-1px"
		},
		"&:is(:disabled, [data-disabled])": {
			opacity: .5,
			filter: "grayscale(100%)",
			cursor: "not-allowed"
		}
	},
	variants: { tone: {
		outline: { "&:is(:hover, [aria-expanded=true]):not(:disabled, [data-disabled])": { bg: "bg.subtle" } },
		surface: {
			"borderColor": "border.emphasized",
			"color": "accent.fg",
			"&:is(:hover, [aria-expanded=true]):not(:disabled, [data-disabled])": { bg: "bg.subtle" }
		},
		solid: {
			"bg": "accent.solid",
			"borderColor": "accent.solid",
			"color": "accent.contrast",
			"&:hover:not(:disabled, [data-disabled])": {
				bg: "accent.fg",
				borderColor: "accent.fg"
			}
		}
	} },
	compoundVariants: [{
		tone: "solid",
		css: { _focusVisible: {
			outline: "2px solid",
			outlineColor: "accent.focusRing",
			outlineOffset: "2px"
		} }
	}],
	defaultVariants: { tone: "outline" }
});
//#endregion
export { rootTriggerRecipe };

//# sourceMappingURL=root-trigger.recipe.js.map