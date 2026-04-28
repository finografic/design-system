import { fileUploadRecipe } from "./file-upload.recipe.js";
import { UploadIcon, XIcon } from "@finografic/icons";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { createStyleContext } from "@styled-system/jsx";
import { FileUpload } from "@ark-ui/react/file-upload";
//#region src/forms/file-upload/file-upload.tsx
const Div = forwardRef((props, ref) => /* @__PURE__ */ jsx("div", {
	...props,
	ref
}));
Div.displayName = "FileUpload.DropzoneContentDiv";
const Span = forwardRef((props, ref) => /* @__PURE__ */ jsx("span", {
	...props,
	ref
}));
Span.displayName = "FileUpload.DropzoneSpan";
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
const FileUpload$1 = {
	/** Root — `maxFiles`, `accept`, `maxFileSize`, `onFileChange`, plus `size`. */
	Root: withProvider(FileUpload.Root, "root"),
	/** Root with external machine state from `useFileUpload`. */
	RootProvider: withProvider(FileUpload.RootProvider, "root"),
	/** Text label above the upload control. */
	Label: withContext(FileUpload.Label, "label"),
	/** Button that opens the native file picker. */
	Trigger: withContext(FileUpload.Trigger, "trigger"),
	/** Drag-and-drop zone. Gains `data-dragging` when a file is dragged over it. */
	Dropzone: withContext(FileUpload.Dropzone, "dropzone"),
	/** Icon wrapper inside the dropzone (no Ark part — plain div). */
	DropzoneIcon: withContext(Div, "dropzoneIcon"),
	/** Content wrapper (title + description) inside the dropzone. */
	DropzoneContent: withContext(Div, "dropzoneContent"),
	/** "Drag and drop files here" text inside the dropzone. */
	DropzoneTitle: withContext(Span, "dropzoneTitle"),
	/** "or click to browse" secondary text inside the dropzone. */
	DropzoneDescription: withContext(Span, "dropzoneDescription"),
	/** List container — renders as `<ul>` internally. */
	ItemGroup: withContext(FileUpload.ItemGroup, "itemGroup"),
	/** Full-layout file row: grid with preview area, name, size, and delete. */
	Item: withContext(FileUpload.Item, "item"),
	/** Compact file row: inline flex with just name and delete. */
	ItemCompact: withContext(FileUpload.Item, "itemCompact"),
	/** Preview area for a file item — use `type="image/*"` or `type=".*"` to target file types. */
	ItemPreview: withContext(FileUpload.ItemPreview, "itemPreview"),
	/** `<img>` rendered inside `ItemPreview` for image files. */
	ItemPreviewImage: withContext(FileUpload.ItemPreviewImage, "itemPreviewImage"),
	/** File name text — auto-populated from the `File` object. */
	ItemName: withContext(FileUpload.ItemName, "itemName"),
	/** Human-readable file size — auto-populated from the `File` object. */
	ItemSizeText: withContext(FileUpload.ItemSizeText, "itemSizeText"),
	/** Button that removes the file from the list. */
	ItemDeleteTrigger: withContext(FileUpload.ItemDeleteTrigger, "itemDeleteTrigger"),
	/** Button that clears all accepted files. No recipe slot — style via className. */
	ClearTrigger: FileUpload.ClearTrigger,
	/** Render prop — exposes machine context (acceptedFiles, rejectedFiles, …) to children. */
	Context: FileUpload.Context,
	/** Hidden `<input type="file">` — always include at the end of Root. */
	HiddenInput: FileUpload.HiddenInput
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
const FileUploadDS = forwardRef(({ maxFiles = 1, accept, maxFileSize, variant = "dropzone", label, dropzoneTitle = "Drag and drop files here", dropzoneDescription = "or click to browse", onChange, size = "md", classNames = {} }, ref) => {
	const styles = fileUploadRecipe({ size });
	return /* @__PURE__ */ jsxs(FileUpload.Root, {
		ref,
		maxFiles,
		accept,
		maxFileSize,
		onFileChange: ({ acceptedFiles }) => onChange?.({ acceptedFiles }),
		className: cx(styles.root, classNames.root),
		children: [
			label && /* @__PURE__ */ jsx(FileUpload.Label, {
				className: cx(styles.label, classNames.label),
				children: label
			}),
			variant === "trigger" && /* @__PURE__ */ jsxs(FileUpload.Trigger, {
				className: cx(styles.trigger, classNames.trigger),
				children: [
					/* @__PURE__ */ jsx(UploadIcon, { "aria-hidden": true }),
					" Choose ",
					maxFiles === 1 ? "file" : "files"
				]
			}),
			variant === "dropzone" && /* @__PURE__ */ jsxs(FileUpload.Dropzone, {
				className: cx(styles.dropzone, classNames.dropzone),
				children: [/* @__PURE__ */ jsx("div", {
					className: styles.dropzoneIcon,
					children: /* @__PURE__ */ jsx(UploadIcon, { "aria-hidden": true })
				}), /* @__PURE__ */ jsxs("div", {
					className: styles.dropzoneContent,
					children: [/* @__PURE__ */ jsx("span", {
						className: styles.dropzoneTitle,
						children: dropzoneTitle
					}), /* @__PURE__ */ jsx("span", {
						className: styles.dropzoneDescription,
						children: dropzoneDescription
					})]
				})]
			}),
			/* @__PURE__ */ jsx(FileUpload.ItemGroup, {
				className: cx(styles.itemGroup, classNames.itemGroup),
				children: /* @__PURE__ */ jsx(FileUpload.Context, { children: ({ acceptedFiles }) => acceptedFiles.map((file) => /* @__PURE__ */ jsxs(FileUpload.Item, {
					file,
					className: cx(styles.itemCompact, classNames.item),
					children: [/* @__PURE__ */ jsx(FileUpload.ItemName, { className: cx(styles.itemName, classNames.itemName) }), /* @__PURE__ */ jsx(FileUpload.ItemDeleteTrigger, {
						className: cx(styles.itemDeleteTrigger, classNames.itemDeleteTrigger),
						children: /* @__PURE__ */ jsx(XIcon, { "aria-hidden": true })
					})]
				}, file.name)) })
			}),
			/* @__PURE__ */ jsx(FileUpload.HiddenInput, {})
		]
	});
});
FileUploadDS.displayName = "FileUploadDS";
//#endregion
export { FileUpload$1 as FileUpload, FileUploadDS };

//# sourceMappingURL=file-upload.js.map