import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import "../../packages/design-system/styled-system/types/index.js";
import { FileUploadRecipeProps } from "./file-upload.recipe.js";
import { HTMLAttributes, ReactNode } from "react";
import { FileUpload, FileUploadFileChangeDetails } from "@ark-ui/react/file-upload";
//#region src/forms/file-upload/file-upload.d.ts
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
declare const FileUpload$1: {
  /** Root — `maxFiles`, `accept`, `maxFileSize`, `onFileChange`, plus `size`. */
  Root: import("@styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<FileUpload.RootProps & import("react").RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"dropzone" | "dropzoneContent" | "dropzoneDescription" | "dropzoneIcon" | "dropzoneTitle" | "item" | "itemCompact" | "itemDeleteTrigger" | "itemGroup" | "itemName" | "itemPreview" | "itemPreviewImage" | "itemSizeText" | "label" | "root" | "trigger", {
    size: {
      sm: {
        trigger: {
          px: "3";
          py: "1.5";
          fontSize: "xs";
          '& svg': {
            w: "3.5";
            h: "3.5";
          };
        };
        dropzone: {
          minH: "32";
          px: "4";
          py: "4";
        };
        dropzoneIcon: {
          w: "8";
          h: "8";
        };
        item: {
          p: "2";
        };
        itemCompact: {
          px: "2.5";
          py: "1.5";
        };
        itemPreview: {
          '& svg': {
            w: "4";
            h: "4";
          };
        };
        itemPreviewImage: {
          w: "8";
          h: "8";
        };
        itemDeleteTrigger: {
          w: "5";
          h: "5";
          '& svg': {
            w: "3.5";
            h: "3.5";
          };
        };
      };
      md: {
        trigger: {
          px: "4";
          py: "2";
          fontSize: "sm";
          '& svg': {
            w: "4";
            h: "4";
          };
        };
        dropzone: {
          minH: "40";
          px: "6";
          py: "6";
        };
        dropzoneIcon: {
          w: "10";
          h: "10";
        };
        item: {
          p: "3";
        };
        itemCompact: {
          px: "3";
          py: "2";
        };
        itemPreview: {
          '& svg': {
            w: "5";
            h: "5";
          };
        };
        itemPreviewImage: {
          w: "10";
          h: "10";
        };
        itemDeleteTrigger: {
          w: "6";
          h: "6";
          '& svg': {
            w: "4";
            h: "4";
          };
        };
      };
      lg: {
        trigger: {
          px: "5";
          py: "2.5";
          fontSize: "md";
          '& svg': {
            w: "5";
            h: "5";
          };
        };
        dropzone: {
          minH: "48";
          px: "8";
          py: "8";
        };
        dropzoneIcon: {
          w: "12";
          h: "12";
        };
        item: {
          p: "4";
        };
        itemCompact: {
          px: "4";
          py: "2.5";
        };
        itemPreview: {
          '& svg': {
            w: "6";
            h: "6";
          };
        };
        itemPreviewImage: {
          w: "12";
          h: "12";
        };
        itemDeleteTrigger: {
          w: "7";
          h: "7";
          '& svg': {
            w: "4";
            h: "4";
          };
        };
      };
    };
  }>>;
  /** Root with external machine state from `useFileUpload`. */
  RootProvider: import("@styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<FileUpload.RootProviderProps & import("react").RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"dropzone" | "dropzoneContent" | "dropzoneDescription" | "dropzoneIcon" | "dropzoneTitle" | "item" | "itemCompact" | "itemDeleteTrigger" | "itemGroup" | "itemName" | "itemPreview" | "itemPreviewImage" | "itemSizeText" | "label" | "root" | "trigger", {
    size: {
      sm: {
        trigger: {
          px: "3";
          py: "1.5";
          fontSize: "xs";
          '& svg': {
            w: "3.5";
            h: "3.5";
          };
        };
        dropzone: {
          minH: "32";
          px: "4";
          py: "4";
        };
        dropzoneIcon: {
          w: "8";
          h: "8";
        };
        item: {
          p: "2";
        };
        itemCompact: {
          px: "2.5";
          py: "1.5";
        };
        itemPreview: {
          '& svg': {
            w: "4";
            h: "4";
          };
        };
        itemPreviewImage: {
          w: "8";
          h: "8";
        };
        itemDeleteTrigger: {
          w: "5";
          h: "5";
          '& svg': {
            w: "3.5";
            h: "3.5";
          };
        };
      };
      md: {
        trigger: {
          px: "4";
          py: "2";
          fontSize: "sm";
          '& svg': {
            w: "4";
            h: "4";
          };
        };
        dropzone: {
          minH: "40";
          px: "6";
          py: "6";
        };
        dropzoneIcon: {
          w: "10";
          h: "10";
        };
        item: {
          p: "3";
        };
        itemCompact: {
          px: "3";
          py: "2";
        };
        itemPreview: {
          '& svg': {
            w: "5";
            h: "5";
          };
        };
        itemPreviewImage: {
          w: "10";
          h: "10";
        };
        itemDeleteTrigger: {
          w: "6";
          h: "6";
          '& svg': {
            w: "4";
            h: "4";
          };
        };
      };
      lg: {
        trigger: {
          px: "5";
          py: "2.5";
          fontSize: "md";
          '& svg': {
            w: "5";
            h: "5";
          };
        };
        dropzone: {
          minH: "48";
          px: "8";
          py: "8";
        };
        dropzoneIcon: {
          w: "12";
          h: "12";
        };
        item: {
          p: "4";
        };
        itemCompact: {
          px: "4";
          py: "2.5";
        };
        itemPreview: {
          '& svg': {
            w: "6";
            h: "6";
          };
        };
        itemPreviewImage: {
          w: "12";
          h: "12";
        };
        itemDeleteTrigger: {
          w: "7";
          h: "7";
          '& svg': {
            w: "4";
            h: "4";
          };
        };
      };
    };
  }>>;
  /** Text label above the upload control. */
  Label: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.LabelProps & import("react").RefAttributes<HTMLLabelElement>>>;
  /** Button that opens the native file picker. */
  Trigger: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.TriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
  /** Drag-and-drop zone. Gains `data-dragging` when a file is dragged over it. */
  Dropzone: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.DropzoneProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Icon wrapper inside the dropzone (no Ark part — plain div). */
  DropzoneIcon: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>>;
  /** Content wrapper (title + description) inside the dropzone. */
  DropzoneContent: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>>;
  /** "Drag and drop files here" text inside the dropzone. */
  DropzoneTitle: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLSpanElement> & import("react").RefAttributes<HTMLSpanElement>>>;
  /** "or click to browse" secondary text inside the dropzone. */
  DropzoneDescription: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLSpanElement> & import("react").RefAttributes<HTMLSpanElement>>>;
  /** List container — renders as `<ul>` internally. */
  ItemGroup: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.ItemGroupProps & import("react").RefAttributes<HTMLUListElement>>>;
  /** Full-layout file row: grid with preview area, name, size, and delete. */
  Item: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.ItemProps & import("react").RefAttributes<HTMLLIElement>>>;
  /** Compact file row: inline flex with just name and delete. */
  ItemCompact: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.ItemProps & import("react").RefAttributes<HTMLLIElement>>>;
  /** Preview area for a file item — use `type="image/*"` or `type=".*"` to target file types. */
  ItemPreview: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.ItemPreviewProps & import("react").RefAttributes<HTMLImageElement>>>;
  /** `<img>` rendered inside `ItemPreview` for image files. */
  ItemPreviewImage: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.ItemPreviewImageProps & import("react").RefAttributes<HTMLImageElement>>>;
  /** File name text — auto-populated from the `File` object. */
  ItemName: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.ItemNameProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Human-readable file size — auto-populated from the `File` object. */
  ItemSizeText: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.ItemSizeTextProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Button that removes the file from the list. */
  ItemDeleteTrigger: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.ItemDeleteTriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
  /** Button that clears all accepted files. No recipe slot — style via className. */
  ClearTrigger: import("react").ForwardRefExoticComponent<FileUpload.ClearTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
  /** Render prop — exposes machine context (acceptedFiles, rejectedFiles, …) to children. */
  Context: (props: FileUpload.ContextProps) => ReactNode;
  /** Hidden `<input type="file">` — always include at the end of Root. */
  HiddenInput: import("react").ForwardRefExoticComponent<FileUpload.HiddenInputProps & import("react").RefAttributes<HTMLInputElement>>;
};
/** Slot class overrides for {@link FileUploadDS}. */
interface FileUploadDSClassNames {
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
type FileUploadDSProps = FileUploadRecipeProps & {
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
  onChange?: (details: {
    acceptedFiles: File[];
  }) => void;
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
declare const FileUploadDS: import("react").ForwardRefExoticComponent<{
  size?: "lg" | "md" | "sm" | undefined;
} & {
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
  onChange?: (details: {
    acceptedFiles: File[];
  }) => void;
  /** Per-slot class overrides. */
  classNames?: FileUploadDSClassNames;
} & import("react").RefAttributes<HTMLDivElement>>;
//#endregion
export { FileUpload$1 as FileUpload, FileUploadDS, FileUploadDSClassNames, FileUploadDSProps, type FileUploadFileChangeDetails };
//# sourceMappingURL=file-upload.d.ts.map