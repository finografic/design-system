/**
 * FileUpload Slot Recipe
 *
 * Port of Ark UI FileUpload example styles → Panda `sva` + semantic tokens.
 *
 * Slots: root · label · trigger · dropzone · dropzoneIcon · dropzoneContent · dropzoneTitle ·
 * dropzoneDescription · itemGroup · item · itemCompact · itemPreview · itemPreviewImage · itemName ·
 * itemSizeText · itemDeleteTrigger Variants: size (sm | md | lg)
 *
 * Trigger displays a file-picker button (basic mode). Dropzone renders a dashed drag-and-drop target. Item is
 * the full grid layout (preview + name + size + delete). ItemCompact is the inline compact row.
 */
import { sva } from '@styled-system/css';

import type { RecipeProps } from '../../recipes/recipes.types';

export const fileUploadRecipe = sva({
  className: 'file-upload',

  slots: [
    'root',
    'label',
    'trigger',
    'dropzone',
    'dropzoneIcon',
    'dropzoneContent',
    'dropzoneTitle',
    'dropzoneDescription',
    'itemGroup',
    'item',
    'itemCompact',
    'itemPreview',
    'itemPreviewImage',
    'itemName',
    'itemSizeText',
    'itemDeleteTrigger',
  ],

  base: {
    root: {
      color: 'fg',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '4',
      width: 'full',
    },

    label: {
      fontSize: 'sm',
      lineHeight: '1.25rem',
      fontWeight: 'medium',
      color: 'fg',
      _disabled: { opacity: 0.5 },
    },

    trigger: {
      'display': 'inline-flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      'gap': '2',
      'fontFamily': 'inherit',
      'fontWeight': 'medium',
      'lineHeight': '1.25rem',
      'borderRadius': 'md',
      'userSelect': 'none',
      'whiteSpace': 'nowrap',
      'cursor': 'pointer',
      'transitionProperty': 'background, border-color',
      'transitionDuration': 'fast',
      'bg': 'transparent',
      'borderWidth': 'default',
      'borderStyle': 'solid',
      'borderColor': 'border',
      'color': 'fg',
      '& svg': { flexShrink: 0 },
      '_hover': { bg: 'bg.muted' },
      '_focusVisible': {
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '-1px',
      },
      '_disabled': { opacity: 0.5, cursor: 'not-allowed' },
    },

    dropzone: {
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '3',
      borderWidth: '2px',
      borderStyle: 'dashed',
      borderColor: 'border',
      borderRadius: 'lg',
      textAlign: 'center',
      cursor: 'pointer',
      transitionProperty: 'background, border-color',
      transitionDuration: 'fast',
      _hover: { bg: 'bg.muted' },
      _dragging: {
        bg: 'accent.subtle',
        borderColor: 'accent.solid',
        borderStyle: 'solid',
      },
      _invalid: { borderColor: 'fg.error' },
      _disabled: { opacity: 0.5, cursor: 'not-allowed' },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '2px',
      },
    },

    dropzoneIcon: {
      color: 'fg.muted',
      flexShrink: 0,
    },

    dropzoneContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1',
    },

    dropzoneTitle: {
      fontSize: 'sm',
      fontWeight: 'medium',
      color: 'fg',
    },

    dropzoneDescription: {
      fontSize: 'xs',
      color: 'fg.muted',
    },

    itemGroup: {
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'column',
      gap: '3',
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },

    item: {
      'display': 'grid',
      'gridTemplateColumns': 'auto 1fr auto',
      'gridTemplateAreas': '"preview name delete" "preview size delete"',
      'alignItems': 'center',
      'columnGap': '3',
      'bg': 'bg',
      'borderWidth': 'default',
      'borderStyle': 'solid',
      'borderColor': 'border',
      'borderRadius': 'lg',
      '&[data-rejected]': {
        bg: 'accent.subtle',
        borderColor: 'accent.fg',
      },
    },

    itemCompact: {
      display: 'flex',
      alignItems: 'center',
      gap: '2',
      bg: 'bg.muted',
      borderRadius: 'md',
    },

    itemPreview: {
      'gridArea': 'preview',
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      'flexShrink': 0,
      '& svg': { color: 'fg.muted' },
    },

    itemPreviewImage: {
      objectFit: 'cover',
      borderRadius: 'sm',
    },

    itemName: {
      gridArea: 'name',
      flex: '1',
      minW: '0',
      fontSize: 'sm',
      fontWeight: 'medium',
      lineHeight: '1.25rem',
      color: 'fg',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },

    itemSizeText: {
      gridArea: 'size',
      fontSize: 'xs',
      lineHeight: '1rem',
      color: 'fg.muted',
    },

    itemDeleteTrigger: {
      gridArea: 'delete',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0',
      bg: 'transparent',
      border: 'none',
      borderRadius: 'sm',
      color: 'fg.muted',
      cursor: 'pointer',
      _hover: { color: 'fg' },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '-1px',
      },
    },
  },

  variants: {
    size: {
      sm: {
        trigger: { 'px': '3', 'py': '1.5', 'fontSize': 'xs', '& svg': { w: '3.5', h: '3.5' } },
        dropzone: { minH: '32', px: '4', py: '4' },
        dropzoneIcon: { w: '8', h: '8' },
        item: { p: '2' },
        itemCompact: { px: '2.5', py: '1.5' },
        itemPreview: { '& svg': { w: '4', h: '4' } },
        itemPreviewImage: { w: '8', h: '8' },
        itemDeleteTrigger: { 'w': '5', 'h': '5', '& svg': { w: '3.5', h: '3.5' } },
      },
      md: {
        trigger: { 'px': '4', 'py': '2', 'fontSize': 'sm', '& svg': { w: '4', h: '4' } },
        dropzone: { minH: '40', px: '6', py: '6' },
        dropzoneIcon: { w: '10', h: '10' },
        item: { p: '3' },
        itemCompact: { px: '3', py: '2' },
        itemPreview: { '& svg': { w: '5', h: '5' } },
        itemPreviewImage: { w: '10', h: '10' },
        itemDeleteTrigger: { 'w': '6', 'h': '6', '& svg': { w: '4', h: '4' } },
      },
      lg: {
        trigger: { 'px': '5', 'py': '2.5', 'fontSize': 'md', '& svg': { w: '5', h: '5' } },
        dropzone: { minH: '48', px: '8', py: '8' },
        dropzoneIcon: { w: '12', h: '12' },
        item: { p: '4' },
        itemCompact: { px: '4', py: '2.5' },
        itemPreview: { '& svg': { w: '6', h: '6' } },
        itemPreviewImage: { w: '12', h: '12' },
        itemDeleteTrigger: { 'w': '7', 'h': '7', '& svg': { w: '4', h: '4' } },
      },
    },
  },

  defaultVariants: { size: 'md' },
});

/** Props accepted by `fileUploadRecipe`. */
export type FileUploadRecipeProps = RecipeProps<typeof fileUploadRecipe>;

/** List density. */
export type FileUploadSize = 'sm' | 'md' | 'lg';
