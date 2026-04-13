import { createIconWrapper } from "./icons.utils.js";
import * as Lucide from "lucide-react";
import * as _$react from "react";

//#region src/icons.d.ts
declare const ICONS: {
  readonly AddIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly ApertureIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly AppleIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly ArrowDownIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly ArrowLeftIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly ArrowRightIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly ArrowUpIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly BadgeCheckIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly CheckIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly CheckCircleIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly ChevronDownIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly ChevronLeftIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly ChevronRightIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly ChevronsUpDownIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly ChevronUpIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly ClipboardIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly CloseIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly CoffeeIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly Columns3Icon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly Columns4Icon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly CountdownTimerIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly Cross2Icon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly DeleteIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly DialogIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly DoubleArrowLeftIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly DoubleArrowRightIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly DropdownIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly EditIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly ExclamationTriangleIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly EyeOffIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly EyeOnIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly FastForwardIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly FullscreenIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly GridIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly HomeIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly InfoCircledIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly LanguageIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly ListIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly ListChecksIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly LoaderIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly LockIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly MagnifyingGlassIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly MenuIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly MinimizeIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly MinusIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly MoonIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly PanelBottomCloseIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly PanelBottomOpenIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly PanelLeftCloseIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly PanelLeftOpenIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly PlusIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly RadioIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly RefreshIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly ReloadIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly SettingsIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly ShieldCheckIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly ShuffleIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly SpeakerLoudIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly StarIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly StopIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly SunIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly TempIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly TextAlignLeftIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly TextAlignTopIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly TimerIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly TimerResetIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly TrashIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly UploadIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly UserIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly UserCircleIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly UserLockIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly UserRoundCheckIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly UserShieldIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly VolumeIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly VolumeOffIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly WindowIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly WineIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly XIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
  readonly ZapIcon: _$react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & _$react.RefAttributes<SVGSVGElement>>;
};
type WrappedIconMap = { [K in keyof typeof ICONS]: ReturnType<typeof createIconWrapper> };
/** All registered icons as a strongly-typed object. Destructure at the call site. */
declare const icons: WrappedIconMap;
/** Union of all registered icon export names. */
type IconName = keyof typeof ICONS;
/** Sorted list of all registered icon names (useful for pickers / docs). */
declare const ICON_NAMES: ("AddIcon" | "ApertureIcon" | "AppleIcon" | "ArrowDownIcon" | "ArrowLeftIcon" | "ArrowRightIcon" | "ArrowUpIcon" | "BadgeCheckIcon" | "CheckIcon" | "CheckCircleIcon" | "ChevronDownIcon" | "ChevronLeftIcon" | "ChevronRightIcon" | "ChevronsUpDownIcon" | "ChevronUpIcon" | "ClipboardIcon" | "CloseIcon" | "CoffeeIcon" | "Columns3Icon" | "Columns4Icon" | "CountdownTimerIcon" | "Cross2Icon" | "DeleteIcon" | "DialogIcon" | "DoubleArrowLeftIcon" | "DoubleArrowRightIcon" | "DropdownIcon" | "EditIcon" | "ExclamationTriangleIcon" | "EyeOffIcon" | "EyeOnIcon" | "FastForwardIcon" | "FullscreenIcon" | "GridIcon" | "HomeIcon" | "InfoCircledIcon" | "LanguageIcon" | "ListIcon" | "ListChecksIcon" | "LoaderIcon" | "LockIcon" | "MagnifyingGlassIcon" | "MenuIcon" | "MinimizeIcon" | "MinusIcon" | "MoonIcon" | "PanelBottomCloseIcon" | "PanelBottomOpenIcon" | "PanelLeftCloseIcon" | "PanelLeftOpenIcon" | "PlusIcon" | "RadioIcon" | "RefreshIcon" | "ReloadIcon" | "SettingsIcon" | "ShieldCheckIcon" | "ShuffleIcon" | "SpeakerLoudIcon" | "StarIcon" | "StopIcon" | "SunIcon" | "TempIcon" | "TextAlignLeftIcon" | "TextAlignTopIcon" | "TimerIcon" | "TimerResetIcon" | "TrashIcon" | "UploadIcon" | "UserIcon" | "UserCircleIcon" | "UserLockIcon" | "UserRoundCheckIcon" | "UserShieldIcon" | "VolumeIcon" | "VolumeOffIcon" | "WindowIcon" | "WineIcon" | "XIcon" | "ZapIcon")[];
/** Type of any wrapped icon component returned by `createIconWrapper`. */
type IconComponent = ReturnType<typeof createIconWrapper>;
//#endregion
export { ICON_NAMES, IconComponent, IconName, icons };
//# sourceMappingURL=icons.d.ts.map