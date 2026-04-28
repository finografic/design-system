import { createIconWrapper } from "./icons.utils.js";
import * as Lucide from "lucide-react";
//#region src/icons.ts
/**
* Icon Registry — @finografic/icons
*
* !! GENERATED FILE — do not edit by hand.
* !! Edit src/icons.json via the picker UI, then run: pnpm icons.generate
*
* Source of truth: packages/icons/src/icons.json
*/
const ICONS = {
	AddIcon: Lucide.Plus,
	ApertureIcon: Lucide.Aperture,
	AppleIcon: Lucide.Apple,
	ArrowDownIcon: Lucide.ArrowDown,
	ArrowLeftIcon: Lucide.ArrowLeft,
	ArrowRightIcon: Lucide.ArrowRight,
	ArrowUpIcon: Lucide.ArrowUp,
	BadgeCheckIcon: Lucide.BadgeCheck,
	CheckIcon: Lucide.Check,
	CheckCircleIcon: Lucide.CheckCircle2,
	ChevronDownIcon: Lucide.ChevronDown,
	ChevronLeftIcon: Lucide.ChevronLeft,
	ChevronRightIcon: Lucide.ChevronRight,
	ChevronsUpDownIcon: Lucide.ChevronsUpDown,
	ChevronUpIcon: Lucide.ChevronUp,
	ClipboardIcon: Lucide.Clipboard,
	CloseIcon: Lucide.X,
	CoffeeIcon: Lucide.Coffee,
	Columns3Icon: Lucide.Columns3,
	Columns4Icon: Lucide.Columns4,
	CountdownTimerIcon: Lucide.Hourglass,
	Cross2Icon: Lucide.X,
	DeleteIcon: Lucide.X,
	DialogIcon: Lucide.AppWindowMac,
	DoubleArrowLeftIcon: Lucide.ChevronsLeft,
	DoubleArrowRightIcon: Lucide.ChevronsRight,
	DropdownIcon: Lucide.ChevronDown,
	EditIcon: Lucide.PencilLine,
	ExclamationTriangleIcon: Lucide.TriangleAlert,
	EyeOffIcon: Lucide.EyeOff,
	EyeOnIcon: Lucide.Eye,
	FastForwardIcon: Lucide.FastForward,
	FileIcon: Lucide.File,
	FolderIcon: Lucide.Folder,
	FolderOpenIcon: Lucide.FolderOpen,
	FullscreenIcon: Lucide.Fullscreen,
	GridIcon: Lucide.Grid3x3,
	HomeIcon: Lucide.House,
	InfoCircledIcon: Lucide.Info,
	LanguageIcon: Lucide.Languages,
	ListIcon: Lucide.List,
	ListChecksIcon: Lucide.ListChecks,
	LoaderIcon: Lucide.Loader,
	LockIcon: Lucide.Lock,
	MagnifyingGlassIcon: Lucide.Search,
	MenuIcon: Lucide.Menu,
	MinimizeIcon: Lucide.Minimize,
	MinusIcon: Lucide.Minus,
	MoonIcon: Lucide.Moon,
	PanelBottomCloseIcon: Lucide.PanelBottomClose,
	PanelBottomOpenIcon: Lucide.PanelBottomOpen,
	PanelLeftCloseIcon: Lucide.PanelLeftClose,
	PanelLeftOpenIcon: Lucide.PanelLeftOpen,
	PlusIcon: Lucide.Plus,
	RadioIcon: Lucide.Radio,
	RefreshIcon: Lucide.RefreshCcw,
	ReloadIcon: Lucide.RotateCw,
	SettingsIcon: Lucide.Cog,
	ShieldCheckIcon: Lucide.ShieldCheck,
	ShuffleIcon: Lucide.Shuffle,
	SpeakerLoudIcon: Lucide.Volume2,
	StarIcon: Lucide.Star,
	StopIcon: Lucide.CircleStop,
	SunIcon: Lucide.Sun,
	TempIcon: Lucide.Thermometer,
	TextAlignLeftIcon: Lucide.AlignLeft,
	TextAlignTopIcon: Lucide.AlignStartVertical,
	TimerIcon: Lucide.Timer,
	TimerResetIcon: Lucide.TimerReset,
	TrashIcon: Lucide.Trash2,
	UploadIcon: Lucide.Upload,
	UserIcon: Lucide.User,
	UserCircleIcon: Lucide.CircleUserRound,
	UserLockIcon: Lucide.UserLock,
	UserRoundCheckIcon: Lucide.UserRoundCheck,
	UserShieldIcon: Lucide.ShieldUser,
	VolumeIcon: Lucide.Volume2,
	VolumeOffIcon: Lucide.VolumeOff,
	WindowIcon: Lucide.AppWindowMac,
	WineIcon: Lucide.Wine,
	XIcon: Lucide.X,
	ZapIcon: Lucide.Zap
};
/** All registered icons as a strongly-typed object. Destructure at the call site. */
const icons = Object.fromEntries(Object.entries(ICONS).map(([name, icon]) => [name, createIconWrapper(icon, name)]));
/** Sorted list of all registered icon names (useful for pickers / docs). */
const ICON_NAMES = Object.keys(ICONS).sort();
//#endregion
export { ICON_NAMES, icons };

//# sourceMappingURL=icons.js.map