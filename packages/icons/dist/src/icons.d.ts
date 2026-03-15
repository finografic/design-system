import { createIconWrapper } from "./icons.utils.js";
import * as Lucide from "lucide-react";
import * as react from "react";

//#region src/icons.d.ts
declare const ICONS: {
  readonly AddIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly ApertureIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly AppleIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly ArrowDownIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly ArrowLeftIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly ArrowRightIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly ArrowUpIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly BadgeCheckIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly CheckIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly CheckCircleIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly ChevronDownIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly ChevronLeftIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly ChevronRightIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly ChevronsUpDownIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly ChevronUpIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly ClipboardIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly CloseIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly CoffeeIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly Columns3Icon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly Columns4Icon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly CountdownTimerIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly Cross2Icon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly DeleteIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly DialogIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly DoubleArrowLeftIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly DoubleArrowRightIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly DropdownIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly EditIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly ExclamationTriangleIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly EyeOffIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly EyeOnIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly FastForwardIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly FullscreenIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly GridIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly HomeIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly InfoCircledIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly LanguageIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly ListIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly ListChecksIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly LoaderIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly LockIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly MagnifyingGlassIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly MenuIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly MinimizeIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly MinusIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly MoonIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly PanelBottomCloseIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly PanelBottomOpenIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly PanelLeftCloseIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly PanelLeftOpenIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly PlusIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly RadioIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly RefreshIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly ReloadIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly SettingsIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly ShieldCheckIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly ShuffleIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly SpeakerLoudIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly StarIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly StopIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly SunIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly TempIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly TextAlignLeftIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly TextAlignTopIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly TimerIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly TimerResetIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly TrashIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly UploadIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly UserIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly UserCircleIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly UserLockIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly UserRoundCheckIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly UserShieldIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly VolumeIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly VolumeOffIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly WindowIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly WineIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly XIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  readonly ZapIcon: react.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
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