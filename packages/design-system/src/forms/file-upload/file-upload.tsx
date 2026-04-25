import { UploadIcon, XIcon } from '@finografic/icons';

import { FileUpload as ArkFileUpload } from '@ark-ui/react/file-upload';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

import type { FileUploadRecipeProps } from './file-upload.recipe';
import { fileUploadRecipe } from './file-upload.recipe';

// ── Plain-element wrappers for unstyled inner dropzone parts ─────────────────

const Div = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <div {...props} ref={ref} />
));
Div.displayName = 'FileUpload.DropzoneContentDiv';

const Span = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>((props, ref) => (
  <span {...props} ref={ref} />
));
Span.displayName = 'FileUpload.DropzoneSpan';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(fileUploadRecipe);

/**
 * Styled Ark **FileUpload** compound — each part is wired to `fileUploadRecipe` via context.
 *
 * Supports a trigger-only mode (just the file-picker button) and a dropzone mode (drag-and-drop area). Ark
 * handles a11y, file validation, drag state, and the hidden input. Variant props (`size`) go on
 * **`FileUpload.Root`**.
 *
 * @example
 *   ```tsx
 *   import { FileIcon, UploadIcon, XIcon } from '@finografic/icons';
 *   import { FileUpload } from '@finografic/design-system/forms';
 *
 *   // Trigger-only (basic)
 *   <FileUpload.Root maxFiles={5} size="md">
 *     <FileUpload.Label>Attachments</FileUpload.Label>
 *     <FileUpload.Trigger>
 *       <UploadIcon /> Choose files
 *     </FileUpload.Trigger>
 *     <FileUpload.ItemGroup>
 *       <FileUpload.Context>
 *         {({ acceptedFiles }) =>
 *           acceptedFiles.map((file) => (
 *             <FileUpload.ItemCompact key={file.name} file={file}>
 *               <FileUpload.ItemName />
 *               <FileUpload.ItemDeleteTrigger><XIcon /></FileUpload.ItemDeleteTrigger>
 *             </FileUpload.ItemCompact>
 *           ))
 *         }
 *       </FileUpload.Context>
 *     </FileUpload.ItemGroup>
 *     <FileUpload.HiddenInput />
 *   </FileUpload.Root>
 *
 *   // Dropzone
 *   <FileUpload.Root maxFiles={5} size="md">
 *     <FileUpload.Label>Upload Files</FileUpload.Label>
 *     <FileUpload.Dropzone>
 *       <FileUpload.DropzoneIcon><UploadIcon /></FileUpload.DropzoneIcon>
 *       <FileUpload.DropzoneContent>
 *         <FileUpload.DropzoneTitle>Drag and drop files here</FileUpload.DropzoneTitle>
 *         <FileUpload.DropzoneDescription>or click to browse</FileUpload.DropzoneDescription>
 *       </FileUpload.DropzoneContent>
 *     </FileUpload.Dropzone>
 *     <FileUpload.ItemGroup>
 *       <FileUpload.Context>
 *         {({ acceptedFiles }) =>
 *           acceptedFiles.map((file) => (
 *             <FileUpload.Item key={file.name} file={file}>
 *               <FileUpload.ItemPreview type="image/*">
 *                 <FileUpload.ItemPreviewImage />
 *               </FileUpload.ItemPreview>
 *               <FileUpload.ItemPreview type=".*">
 *                 <FileIcon />
 *               </FileUpload.ItemPreview>
 *               <FileUpload.ItemName />
 *               <FileUpload.ItemSizeText />
 *               <FileUpload.ItemDeleteTrigger><XIcon /></FileUpload.ItemDeleteTrigger>
 *             </FileUpload.Item>
 *           ))
 *         }
 *       </FileUpload.Context>
 *     </FileUpload.ItemGroup>
 *     <FileUpload.HiddenInput />
 *   </FileUpload.Root>
 *   ```;
 */
export const FileUpload = {
  /** Root — `maxFiles`, `accept`, `maxFileSize`, `onFileChange`, plus `size`. */
  Root: withProvider(ArkFileUpload.Root, 'root'),
  /** Root with external machine state from `useFileUpload`. */
  RootProvider: withProvider(ArkFileUpload.RootProvider, 'root'),
  /** Text label above the upload control. */
  Label: withContext(ArkFileUpload.Label, 'label'),
  /** Button that opens the native file picker. */
  Trigger: withContext(ArkFileUpload.Trigger, 'trigger'),
  /** Drag-and-drop zone. Gains `data-dragging` when a file is dragged over it. */
  Dropzone: withContext(ArkFileUpload.Dropzone, 'dropzone'),
  /** Icon wrapper inside the dropzone (no Ark part — plain div). */
  DropzoneIcon: withContext(Div, 'dropzoneIcon'),
  /** Content wrapper (title + description) inside the dropzone. */
  DropzoneContent: withContext(Div, 'dropzoneContent'),
  /** "Drag and drop files here" text inside the dropzone. */
  DropzoneTitle: withContext(Span, 'dropzoneTitle'),
  /** "or click to browse" secondary text inside the dropzone. */
  DropzoneDescription: withContext(Span, 'dropzoneDescription'),
  /** List container — renders as `<ul>` internally. */
  ItemGroup: withContext(ArkFileUpload.ItemGroup, 'itemGroup'),
  /** Full-layout file row: grid with preview area, name, size, and delete. */
  Item: withContext(ArkFileUpload.Item, 'item'),
  /** Compact file row: inline flex with just name and delete. */
  ItemCompact: withContext(ArkFileUpload.Item, 'itemCompact'),
  /** Preview area for a file item — use `type="image/*"` or `type=".*"` to target file types. */
  ItemPreview: withContext(ArkFileUpload.ItemPreview, 'itemPreview'),
  /** `<img>` rendered inside `ItemPreview` for image files. */
  ItemPreviewImage: withContext(ArkFileUpload.ItemPreviewImage, 'itemPreviewImage'),
  /** File name text — auto-populated from the `File` object. */
  ItemName: withContext(ArkFileUpload.ItemName, 'itemName'),
  /** Human-readable file size — auto-populated from the `File` object. */
  ItemSizeText: withContext(ArkFileUpload.ItemSizeText, 'itemSizeText'),
  /** Button that removes the file from the list. */
  ItemDeleteTrigger: withContext(ArkFileUpload.ItemDeleteTrigger, 'itemDeleteTrigger'),
  /** Button that clears all accepted files. No recipe slot — style via className. */
  ClearTrigger: ArkFileUpload.ClearTrigger,
  /** Render prop — exposes machine context (acceptedFiles, rejectedFiles, …) to children. */
  Context: ArkFileUpload.Context,
  /** Hidden `<input type="file">` — always include at the end of Root. */
  HiddenInput: ArkFileUpload.HiddenInput,
};

// ── FileUploadDS — convenience wrapper ────────────────────────────────────────

/** Slot class overrides for {@link FileUploadDS}. */
export interface FileUploadDSClassNames {
  root?: string;
  label?: string;
  trigger?: string;
  dropzone?: string;
  itemGroup?: string;
  item?: string;
  itemName?: string;
  itemSizeText?: string;
  itemDeleteTrigger?: string;
}

export type FileUploadDSProps = FileUploadRecipeProps & {
  /** Maximum number of files accepted. */
  maxFiles?: number;
  /** Accepted MIME types mapped to extensions, e.g. `{ 'image/*': ['.png', '.jpg'] }`. */
  accept?: Record<string, string[]>;
  /** Maximum file size in bytes. */
  maxFileSize?: number;
  /**
   * Render mode. - `'trigger'` — shows only the file-picker button (compact/inline use). - `'dropzone'` —
   * shows a dashed drag-and-drop zone (default).
   */
  variant?: 'trigger' | 'dropzone';
  /** Label displayed above the upload control. */
  label?: ReactNode;
  /** Heading text inside the dropzone. Defaults to "Drag and drop files here". */
  dropzoneTitle?: string;
  /** Secondary text inside the dropzone. Defaults to "or click to browse". */
  dropzoneDescription?: string;
  /** Called when the accepted or rejected file list changes. */
  onChange?: (details: { acceptedFiles: File[] }) => void;
  /** Per-slot class overrides. */
  classNames?: FileUploadDSClassNames;
};

/**
 * Design-system convenience file upload — renders either a trigger button or a full dropzone with a file
 * list. **`FileUpload`** stays the styled compound for full composition; **`FileUploadDS`** = packaged DS API
 * with normalized `onChange(details)` handler.
 *
 * @example
 *   ```tsx
 *   import { FileUploadDS } from '@finografic/design-system/forms';
 *
 *   // Dropzone (default)
 *   <FileUploadDS
 *     label="Upload Documents"
 *     maxFiles={3}
 *     accept={{ 'application/pdf': ['.pdf'] }}
 *     onChange={({ acceptedFiles }) => setFiles(acceptedFiles)}
 *   />
 *
 *   // Trigger button only
 *   <FileUploadDS variant="trigger" label="Attach File" onChange={...} />
 *   ```;
 */
export const FileUploadDS = forwardRef<HTMLDivElement, FileUploadDSProps>(
  (
    {
      maxFiles = 1,
      accept,
      maxFileSize,
      variant = 'dropzone',
      label,
      dropzoneTitle = 'Drag and drop files here',
      dropzoneDescription = 'or click to browse',
      onChange,
      size = 'md',
      classNames = {},
    },
    ref,
  ) => {
    const styles = fileUploadRecipe({ size });

    return (
      <ArkFileUpload.Root
        ref={ref}
        maxFiles={maxFiles}
        accept={accept}
        maxFileSize={maxFileSize}
        onFileChange={({ acceptedFiles }) => onChange?.({ acceptedFiles })}
        className={cx(styles.root, classNames.root)}
      >
        {label && (
          <ArkFileUpload.Label className={cx(styles.label, classNames.label)}>{label}</ArkFileUpload.Label>
        )}

        {variant === 'trigger' && (
          <ArkFileUpload.Trigger className={cx(styles.trigger, classNames.trigger)}>
            <UploadIcon aria-hidden /> Choose {maxFiles === 1 ? 'file' : 'files'}
          </ArkFileUpload.Trigger>
        )}

        {variant === 'dropzone' && (
          <ArkFileUpload.Dropzone className={cx(styles.dropzone, classNames.dropzone)}>
            <div className={styles.dropzoneIcon}>
              <UploadIcon aria-hidden />
            </div>
            <div className={styles.dropzoneContent}>
              <span className={styles.dropzoneTitle}>{dropzoneTitle}</span>
              <span className={styles.dropzoneDescription}>{dropzoneDescription}</span>
            </div>
          </ArkFileUpload.Dropzone>
        )}

        <ArkFileUpload.ItemGroup className={cx(styles.itemGroup, classNames.itemGroup)}>
          <ArkFileUpload.Context>
            {({ acceptedFiles }) =>
              acceptedFiles.map((file) => (
                <ArkFileUpload.Item
                  key={file.name}
                  file={file}
                  className={cx(styles.itemCompact, classNames.item)}
                >
                  <ArkFileUpload.ItemName className={cx(styles.itemName, classNames.itemName)} />
                  <ArkFileUpload.ItemDeleteTrigger
                    className={cx(styles.itemDeleteTrigger, classNames.itemDeleteTrigger)}
                  >
                    <XIcon aria-hidden />
                  </ArkFileUpload.ItemDeleteTrigger>
                </ArkFileUpload.Item>
              ))
            }
          </ArkFileUpload.Context>
        </ArkFileUpload.ItemGroup>

        <ArkFileUpload.HiddenInput />
      </ArkFileUpload.Root>
    );
  },
);

FileUploadDS.displayName = 'FileUploadDS';

export type { FileUploadFileChangeDetails } from '@ark-ui/react/file-upload';
