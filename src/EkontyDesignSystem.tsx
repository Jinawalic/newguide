import { useState, useEffect, type ButtonHTMLAttributes } from 'react';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react';
import {
    Search01Icon as Search,
    Loading03Icon as Loader2,
    ArrowRight01Icon as ChevronRight,
    PlusSignIcon as Plus,
    Copy01Icon as Copy,
    CheckmarkCircle01Icon as Check,
    Cancel01Icon as Close,
    Moon02Icon as Moon,
    Sun01Icon as Sun,
} from '@hugeicons/core-free-icons';

import { Autocomplete } from './components/AdvancedInteraction/Autocomplete';
import { MultiSelectTags } from './components/AdvancedInteraction/Multi-SelectwithTags';
import { DragDropUpload } from './components/AdvancedInteraction/Drag&DropUpload';
import { DragDropListReorder } from './components/AdvancedInteraction/Drag&DropListReorder';
import { CommandPalette } from './components/AdvancedInteraction/CommandPalette';
import { ContextMenu } from './components/AdvancedInteraction/ContextMenu';
import { Stepper } from './components/AdvancedInteraction/Stepper';
import { Tour } from './components/AdvancedInteraction/Tour';
import { HotkeySupport } from './components/AdvancedInteraction/HotkeySupport';

// Data & Visualization
import { StatsCards } from './components/DataVisualization/StatsCards';
import { ActivityTimeline } from './components/DataVisualization/ActivityTimeline';
import { ProgressCircle } from './components/DataVisualization/ProgressCircle';
import { DonutChart } from './components/DataVisualization/DonutChart';
import { BarChart } from './components/DataVisualization/BarChart';
import { LineChart } from './components/DataVisualization/LineChart';
import { Heatmap } from './components/DataVisualization/Heatmap';
import { CalendarView } from './components/DataVisualization/CalendarView';
import { KanbanBoard } from './components/DataVisualization/KanbanBoard';

// System Feedback
import { ToastMessages } from './components/SystemFeedback/ToastMessages';
import { AlertBanners } from './components/SystemFeedback/AlertBanners';
import { ConfirmationDialog } from './components/SystemFeedback/ConfirmationDialog';
import { ErrorStatePage } from './components/SystemFeedback/ErrorStatePage';
import { EmptyStateDesign } from './components/SystemFeedback/EmptyStateDesign';
import { SuccessStateScreen } from './components/SystemFeedback/SuccessStateScreen';
import { OfflineIndicator } from './components/SystemFeedback/OfflineIndicator';

// Layout & Structure
import { StickyHeader } from './components/LayoutStructure/StickyHeader';
import { CollapsibleSidebar } from './components/LayoutStructure/CollapsibleSidebar';
import { ResizablePanels } from './components/LayoutStructure/ResizablePanels';
import { SplitViewLayout } from './components/LayoutStructure/SplitViewLayout';
import { MasonryGrid } from './components/LayoutStructure/MasonryGrid';
import { CardGridSystem } from './components/LayoutStructure/CardGridSystem';

// User & Account
import { AvatarUpload } from './components/UserAccount/AvatarUpload';
import { UserDropdownMenu } from './components/UserAccount/UserDropdownMenu';
import { RoleBadge } from './components/UserAccount/RoleBadge';
import { OnlineOfflineStatus } from './components/UserAccount/OnlineOfflineStatus';
import { ProfileCard } from './components/UserAccount/ProfileCard';
import { PermissionGate } from './components/UserAccount/PermissionGate';

// Business Features
import { StatusBadge } from './components/BusinessFeatures/StatusBadge';
import { TagLabelSystem } from './components/BusinessFeatures/TagLabelSystem';
import { RatingStars } from './components/BusinessFeatures/RatingStars';
import { BookmarkButton } from './components/BusinessFeatures/BookmarkButton';
import { ShareButton } from './components/BusinessFeatures/ShareButton';
import { CopyToClipboard } from "./components/BusinessFeatures/CopyToClipboard";
import { QRCodeGenerator } from './components/BusinessFeatures/QRCodeGenerator';
import { InvoiceView } from './components/BusinessFeatures/InvoiceView';

// UX Polish
import { Tooltips } from './components/UXPolish/Tooltips';
import { Popovers } from './components/UXPolish/Popovers';
import { HoverCards } from './components/UXPolish/HoverCards';
import { FloatingActionButton } from './components/UXPolish/FloatingActionButton';
import { BackButton } from './components/UXPolish/BackButton';
import { SmoothScroll } from './components/UXPolish/SmoothScroll';
import { ParallaxSection } from './components/UXPolish/ParallaxSection';

// Security / Auth
import { OTPInput } from './components/SecurityAuth/OTPInput';
import { PasswordStrength } from './components/SecurityAuth/PasswordStrength';
import { SessionTimeout } from './components/SecurityAuth/SessionTimeout';
import { DeviceLoginHistory } from './components/SecurityAuth/DeviceLoginHistory';
import { TwoFASetup } from './components/SecurityAuth/TwoFASetup';

// Power Features
import { ThemeSwitcher } from './components/PowerFeatures/ThemeSwitcher';
import { LanguageSwitcher } from './components/PowerFeatures/LanguageSwitcher';
import { ExportCSV_PDF } from './components/PowerFeatures/ExportCSV_PDF';
import { ImportData } from './components/PowerFeatures/ImportData';
import { BulkActions } from './components/PowerFeatures/BulkActions';
import { ColumnVisibility } from './components/PowerFeatures/ColumnVisibility';
import { TableSorting } from './components/PowerFeatures/TableSorting';
import { TableActions } from './components/PowerFeatures/TableActions';

const CodeBlock = ({ code }: { code: string, onClose: () => void }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-zinc-950 p-6 rounded-b-xl relative group">
            <button
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-white/5 opacity-0 group-hover:opacity-100"
            >
                <HugeiconsIcon icon={copied ? Check : Copy} size={16} />
            </button>
            <pre className="text-sm font-mono text-emerald-500 overflow-x-auto custom-scrollbar">
                <code>{code}</code>
            </pre>
        </div>
    );
};

const CodeSnippetModal = ({ data, onClose }: { data: { title: string, code: string } | null, onClose: () => void }) => {
    if (!data) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
            <div className="w-full max-w-lg relative animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                <div className="bg-zinc-900 px-4 py-3 rounded-t-xl border-b border-white/5 flex justify-between items-center text-white">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{data.title}</span>
                    <button onClick={onClose} className="hover:bg-white/10 p-1.5 rounded-lg transition-colors">
                        <HugeiconsIcon icon={Close} size={18} />
                    </button>
                </div>
                <CodeBlock code={data.code} onClose={onClose} />
            </div>
        </div>
    );
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'icon' | 'warning';
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'xl' | 'full';
    isLoading?: boolean;
    icon?: IconSvgElement;
    fullWidth?: boolean;
}

const Button = ({ variant = 'primary', size = 'md', rounded = 'xl', children, isLoading = false, icon: Icon, fullWidth = false, ...props }: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

    const variants = {
        primary: "bg-emerald-800 dark:bg-emerald-600 text-white shadow-sm hover:bg-emerald-800/90 dark:hover:bg-emerald-600/90 hover:shadow-md focus-visible:ring-brand",
        secondary: "bg-slate-200 dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-sm hover:bg-slate-300 dark:hover:bg-zinc-700 focus-visible:ring-slate-400",
        outline: "bg-transparent border-2 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-800/50 focus-visible:ring-slate-400",
        ghost: "bg-transparent text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 focus-visible:ring-slate-200",
        icon: "p-2 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:bg-slate-200 dark:hover:bg-zinc-700 focus-visible:ring-slate-400",
        warning: "bg-warning text-white shadow-sm hover:bg-warning/90 hover:shadow-md focus-visible:ring-warning"
    };

    const roundedStyles = {
        xl: "rounded-xl",
        full: "rounded-full"
    };

    const sizes = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-5 py-2.5 text-sm",
        lg: "px-8 py-3.5 text-base"
    };


    return (
        <button
            className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${variant !== 'icon' ? sizes[size] : ''} 
        ${variant !== 'icon' ? roundedStyles[rounded] : ''}
        ${fullWidth ? 'w-full' : ''}
`}
            {...props}
        >
            {isLoading ? (
                <HugeiconsIcon icon={Loader2} className="w-5 h-5 animate-spin mr-2" />
            ) : Icon && variant !== 'icon' ? (
                <HugeiconsIcon icon={Icon} className="w-5 h-5 mr-2" />
            ) : null}

            {variant === 'icon' && Icon ? <HugeiconsIcon icon={Icon} className="w-5 h-5" /> : children}
        </button>
    );
};

interface SearchResultItem {
    name: string;
    type: string;
    tab: string;
    icon?: IconSvgElement;
    detail?: string;
}

const ComponentCard = ({ title, description, onClick }: { title: string, description: string, onClick: () => void }) => {
    return (
        <div
            onClick={onClick}
            className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 group cursor-pointer flex flex-col h-full"
        >
            <div className="h-40 bg-slate-50 dark:bg-zinc-800/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent"></div>
                {/* Mock Illustration */}
                <div className="relative w-2/3 h-2/3 bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-slate-100 dark:border-zinc-800 p-4 transform group-hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-2 bg-slate-100 dark:bg-zinc-800 rounded-full mb-3"></div>
                    <div className="w-2/3 h-2 bg-slate-100/60 dark:bg-zinc-800/60 rounded-full mb-6"></div>
                    <div className="space-y-2">
                        <div className="flex gap-2">
                            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30"></div>
                            <div className="flex-1 space-y-2">
                                <div className="w-full h-2 bg-slate-50 dark:bg-zinc-800/50 rounded-full"></div>
                                <div className="w-1/2 h-2 bg-slate-50 dark:bg-zinc-800/50 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-3 right-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                        <HugeiconsIcon icon={Plus} size={12} />
                    </div>
                </div>
            </div>
            <div className="px-5 py-2 flex-1 flex flex-col">
                <h4 className="text-[11px] font-bold text-slate-800 dark:text-zinc-200 mb-1 group-hover:text-emerald-800 dark:group-hover:text-emerald-500 transition-colors uppercase tracking-tight">{title}</h4>
                <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-medium leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

const CategoryOverview = ({ title, items, onSelect }: { title: string, items: string[], onSelect: (item: string) => void }) => {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 dark:border-zinc-800 pb-12">
                <div className="max-w-2xl">
                    <h1 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight mb-4 font-heading">{title}</h1>
                    <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed font-medium">
                        Explore our collection of high-quality component designed for the {title} module.
                        Each element is crafted with modularity and accessibility in mind.
                    </p>
                </div>
                <div className="hidden md:flex items-center gap-4 bg-white dark:bg-zinc-900 p-3 rounded-2xl border border-slate-100 dark:border-zinc-800 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-500">
                        <HugeiconsIcon icon={ChevronRight} size={18} className="rotate-90" />
                    </div>
                    <div className="pr-4">
                        <p className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">Selected Module</p>
                        <p className="text-sm font-bold text-slate-900 dark:text-zinc-100">{items.length} Components</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {items.map((item) => (
                    <ComponentCard
                        key={item}
                        title={item}
                        description={`A reusable ${item.toLowerCase()} component built for modular design systems and modern web applications.`}
                        onClick={() => onSelect(item)}
                    />
                ))}
            </div>
        </div>
    );
};

// --- MAIN PAGE LAYOUT ---
const EkontyDesignSystem = () => {
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>("Advanced Interaction");
    const [codeModalData, setCodeModalData] = useState<{ title: string, code: string } | null>(null);
    const [globalSearch, setGlobalSearch] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);





    const menuGroups = [
        {
            title: "Advanced Interaction",
            items: ["Autocomplete / Typeahead", "Multi-Select with Tags", "Drag & Drop Upload", "Drag & Drop List Reorder", "Command Palette", "Context Menu", "Stepper", "Tour / Onboarding", "Hotkey Support"]
        },
        {
            title: "Data & Visualization",
            items: ["Stats Cards", "Activity Timeline", "Progress Circle", "Donut Chart", "Bar Chart", "Line Chart", "Heatmap", "Calendar View", "Kanban Board"]
        },
        {
            title: "System Feedback",
            items: ["Toast Messages", "Alert Banners", "Confirmation Dialog", "Error State Page", "Empty State Design", "Success State Screen", "Offline Indicator"]
        },
        {
            title: "Layout & Structure",
            items: ["Sticky Header", "Collapsible Sidebar", "Resizable Panels", "Split View Layout", "Masonry Grid", "Card Grid System"]
        },
        {
            title: "User & Account",
            items: ["Avatar Upload", "User Dropdown Menu", "Role Badge", "Online / Offline Status", "Profile Card", "Permission Gate"]
        },
        {
            title: "Business Features",
            items: ["Status Badge", "Tag / Label System", "Rating Stars", "Bookmark Button", "Share Button", "Copy to Clipboard", "Invoice View"]
        },
        {
            title: "UX Polish",
            items: ["Tooltips", "Popovers", "Hover Cards", "Floating Action Button", "Back Button", "Smooth Scroll", "Parallax Section"]
        },
        {
            title: "Security / Auth",
            items: ["OTP Input", "Password Strength", "Session Timeout", "Device Login History", "2FA Setup"]
        },
        {
            title: "Power Features",
            items: ["Theme Switcher", "Language Switcher", "Export CSV/PDF", "Import Data", "Bulk Actions", "Column Visibility", "Table Sorting", "Table Actions"]
        }
    ];

    const [expandedMenus, setExpandedMenus] = useState<string[]>(["Advanced Interaction"]);

    const toggleMenu = (title: string) => {
        setExpandedMenus(prev =>
            prev.includes(title)
                ? prev.filter(t => t !== title)
                : [...prev, title]
        );
        setActiveCategory(title);
        setActiveTab(null);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
            <CodeSnippetModal data={codeModalData} onClose={() => setCodeModalData(null)} />
            {/* Sidebar Navigation */}
            <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-zinc-900 border-r border-slate-100 dark:border-zinc-800 hidden lg:flex flex-col py-6 z-10 transition-colors duration-300">
                <div className="mb-6 flex items-center px-6">
                    <img src="/images/logo.png" alt="Ekonty Logo" className="h-6 w-auto object-contain" />
                </div>

                <div className="flex-1 overflow-y-auto px-4 space-y-2 custom-scrollbar">
                    {menuGroups.map((group) => (
                        <div key={group.title} className="space-y-1">
                            <button
                                onClick={() => toggleMenu(group.title)}
                                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-600 dark:text-zinc-400 hover:text-emerald-800 dark:hover:text-emerald-500 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all group"
                            >
                                <div className="flex items-center gap-3">
                                    {/* <span className="text-base">{group.icon}</span> */}
                                    <span className="text-sm font-bold">{group.title}</span>
                                </div>
                                <HugeiconsIcon
                                    icon={ChevronRight}
                                    size={14}
                                    className={`text-slate-400 dark:text-zinc-500 transition-transform duration-200 ${expandedMenus.includes(group.title) ? 'rotate-90' : ''}`}
                                />
                            </button>
                            {expandedMenus.includes(group.title) && (
                                <div className="pl-4 space-y-0.5 animate-in slide-in-from-left-2 fade-in duration-200">
                                    {group.items.map((item) => (
                                        <button
                                            key={item}
                                            onClick={() => {
                                                setActiveTab(item);
                                                setActiveCategory(group.title);
                                            }}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-[12px] font-bold transition-all flex items-center gap-2 border-l-2 ml-2
                                         ${activeTab === item
                                                    ? 'border-emerald-800 text-emerald-800 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10'
                                                    : 'border-slate-100/0 text-slate-400 dark:text-zinc-500 hover:text-slate-600 dark:hover:text-zinc-300 hover:border-slate-200 dark:hover:border-zinc-700'
                                                }
                                     `}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </aside>

            {/* Main Content */}
            <main className="lg:pl-64 min-h-screen">
                {/* Mobile Top Header */}
                <div className="lg:hidden bg-white border-b border-slate-100 px-6 py-4 flex items-center">
                    <img src="/images/logo.png" alt="Ekonty Logo" className="h-5 w-auto object-contain" />
                </div>

                <header className="sticky top-0 bg-slate-50/80 dark:bg-zinc-950/80 backdrop-blur-md z-[5] px-8 py-6 border-b border-slate-100 dark:border-zinc-800 flex justify-between items-center transition-colors duration-300">
                    <div className="flex items-center gap-2 text-slate-400 dark:text-zinc-500 text-sm">
                        <span className="text-slate-400 dark:text-zinc-400">{activeCategory}</span>
                        {activeTab && (
                            <></>
                        )}
                    </div>
                    <div className="flex gap-4 items-center">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-emerald-800 dark:hover:text-emerald-500 transition-all shadow-sm hover:shadow-md"
                            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        >
                            <HugeiconsIcon icon={isDarkMode ? Sun : Moon} size={18} />
                        </button>
                        <div className="relative group min-w-[300px] hidden md:block">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-800 transition-colors">
                                <HugeiconsIcon icon={Search} size={16} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search anything "
                                value={globalSearch}
                                onChange={(e) => setGlobalSearch(e.target.value)}
                                className="w-[300px] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl py-2 pl-11 pr-4 text-[13px] font-bold focus:outline-none focus:border-emerald-800 dark:focus:border-emerald-500 focus:ring-4 focus:ring-emerald-800/5 dark:focus:ring-emerald-500/5 transition-all placeholder:text-slate-400 dark:placeholder:text-zinc-500 dark:text-zinc-100"
                            />

                            {/* Search Results Dropdown */}
                            {globalSearch && (
                                <div className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-2xl shadow-2xl p-3 z-50 max-h-[400px] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
                                    <h4 className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest px-3 mb-2">Search Results</h4>
                                    <div className="space-y-1">
                                        {(() => {
                                            const searchItems: SearchResultItem[] = menuGroups.flatMap(group =>
                                                group.items.map(item => ({
                                                    name: item,
                                                    type: 'Component',
                                                    tab: item,
                                                    detail: group.title
                                                }))
                                            );
                                            const filtered = searchItems.filter(item => item.name.toLowerCase().includes(globalSearch.toLowerCase()));

                                            if (filtered.length === 0) {
                                                return (
                                                    <div className="p-8 text-center">
                                                        <p className="text-xs font-bold text-slate-400">No matching results found.</p>
                                                    </div>
                                                );
                                            }

                                            return filtered.map((item, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => {
                                                        setActiveTab(item.tab);
                                                        setActiveCategory(item.detail || null);
                                                        setGlobalSearch('');
                                                    }}
                                                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-800 flex items-center justify-between group transition-colors"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-zinc-800 flex items-center justify-center text-slate-400 dark:text-zinc-500 group-hover:bg-emerald-800 dark:group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                                            <HugeiconsIcon icon={item.icon || Search} size={14} />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-bold text-slate-700 dark:text-zinc-200">{item.name}</p>
                                                            <p className="text-[10px] text-slate-400 dark:text-zinc-500">{item.type} in {item.tab}</p>
                                                        </div>
                                                    </div>
                                                    <HugeiconsIcon icon={ChevronRight} size={12} className="text-slate-300 dark:text-zinc-600 opacity-0 group-hover:opacity-100 transition-all" />
                                                </button>
                                            ));
                                        })()}
                                    </div>
                                </div>
                            )}
                        </div>
                        <Button variant="primary" size="sm" icon={Plus}>Get Started</Button>
                    </div>
                </header>

                <div className="p-8 max-w-[1200px] mx-auto pb-24">
                    {activeTab === "Autocomplete / Typeahead" ? (
                        <Autocomplete />
                    ) : activeTab === "Multi-Select with Tags" ? (
                        <MultiSelectTags />
                    ) : activeTab === "Drag & Drop Upload" ? (
                        <DragDropUpload />
                    ) : activeTab === "Drag & Drop List Reorder" ? (
                        <DragDropListReorder />
                    ) : activeTab === "Command Palette" ? (
                        <CommandPalette />
                    ) : activeTab === "Context Menu" ? (
                        <ContextMenu />
                    ) : activeTab === "Stepper" ? (
                        <Stepper />
                    ) : activeTab === "Tour / Onboarding" ? (
                        <Tour />
                    ) : activeTab === "Hotkey Support" ? (
                        <HotkeySupport />
                    ) : activeTab === "Stats Cards" ? (
                        <StatsCards />
                    ) : activeTab === "Activity Timeline" ? (
                        <ActivityTimeline />
                    ) : activeTab === "Progress Circle" ? (
                        <ProgressCircle />
                    ) : activeTab === "Donut Chart" ? (
                        <DonutChart />
                    ) : activeTab === "Bar Chart" ? (
                        <BarChart />
                    ) : activeTab === "Line Chart" ? (
                        <LineChart />
                    ) : activeTab === "Heatmap" ? (
                        <Heatmap />
                    ) : activeTab === "Calendar View" ? (
                        <CalendarView />
                    ) : activeTab === "Kanban Board" ? (
                        <KanbanBoard />
                    ) : activeTab === "Toast Messages" ? (
                        <ToastMessages />
                    ) : activeTab === "Alert Banners" ? (
                        <AlertBanners />
                    ) : activeTab === "Confirmation Dialog" ? (
                        <ConfirmationDialog />
                    ) : activeTab === "Error State Page" ? (
                        <ErrorStatePage />
                    ) : activeTab === "Empty State Design" ? (
                        <EmptyStateDesign />
                    ) : activeTab === "Success State Screen" ? (
                        <SuccessStateScreen />
                    ) : activeTab === "Offline Indicator" ? (
                        <OfflineIndicator />
                    ) : activeTab === "Sticky Header" ? (
                        <StickyHeader />
                    ) : activeTab === "Collapsible Sidebar" ? (
                        <CollapsibleSidebar />
                    ) : activeTab === "Resizable Panels" ? (
                        <ResizablePanels />
                    ) : activeTab === "Split View Layout" ? (
                        <SplitViewLayout />
                    ) : activeTab === "Masonry Grid" ? (
                        <MasonryGrid />
                    ) : activeTab === "Card Grid System" ? (
                        <CardGridSystem />
                    ) : activeTab === "Avatar Upload" ? (
                        <AvatarUpload />
                    ) : activeTab === "User Dropdown Menu" ? (
                        <UserDropdownMenu />
                    ) : activeTab === "Role Badge" ? (
                        <RoleBadge />
                    ) : activeTab === "Online / Offline Status" ? (
                        <OnlineOfflineStatus />
                    ) : activeTab === "Profile Card" ? (
                        <ProfileCard />
                    ) : activeTab === "Permission Gate" ? (
                        <PermissionGate />
                    ) : activeTab === "Status Badge" ? (
                        <StatusBadge />
                    ) : activeTab === "Tag / Label System" ? (
                        <TagLabelSystem />
                    ) : activeTab === "Rating Stars" ? (
                        <RatingStars />
                    ) : activeTab === "Bookmark Button" ? (
                        <BookmarkButton />
                    ) : activeTab === "Share Button" ? (
                        <ShareButton />
                    ) : activeTab === "Copy to Clipboard" ? (
                        <CopyToClipboard />
                    ) : activeTab === "QR Code Generator" ? (
                        <QRCodeGenerator />
                    ) : activeTab === "Invoice View" ? (
                        <InvoiceView />
                    ) : activeTab === "Tooltips" ? (
                        <Tooltips />
                    ) : activeTab === "Popovers" ? (
                        <Popovers />
                    ) : activeTab === "Hover Cards" ? (
                        <HoverCards />
                    ) : activeTab === "Floating Action Button" ? (
                        <FloatingActionButton />
                    ) : activeTab === "Back Button" ? (
                        <BackButton />
                    ) : activeTab === "Smooth Scroll" ? (
                        <SmoothScroll />
                    ) : activeTab === "Parallax Section" ? (
                        <ParallaxSection />
                    ) : activeTab === "OTP Input" ? (
                        <OTPInput />
                    ) : activeTab === "Password Strength" ? (
                        <PasswordStrength />
                    ) : activeTab === "Session Timeout" ? (
                        <SessionTimeout />
                    ) : activeTab === "Device Login History" ? (
                        <DeviceLoginHistory />
                    ) : activeTab === "2FA Setup" ? (
                        <TwoFASetup />
                    ) : activeTab === "Theme Switcher" ? (
                        <ThemeSwitcher />
                    ) : activeTab === "Language Switcher" ? (
                        <LanguageSwitcher />
                    ) : activeTab === "Export CSV/PDF" ? (
                        <ExportCSV_PDF />
                    ) : activeTab === "Import Data" ? (
                        <ImportData />
                    ) : activeTab === "Bulk Actions" ? (
                        <BulkActions />
                    ) : activeTab === "Column Visibility" ? (
                        <ColumnVisibility />
                    ) : activeTab === "Table Sorting" ? (
                        <TableSorting />
                    ) : activeTab === "Table Actions" ? (
                        <TableActions />
                    ) : activeTab ? (
                        <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                            <div className="p-4 rounded-full bg-emerald-50 border border-emerald-100">
                                <span className="text-4xl">🚀</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 font-heading">{activeTab}</h3>
                                <p className="text-slate-500 max-w-md mx-auto mt-2">
                                    Documentation and code examples for the {activeTab} component are coming soon.
                                </p>
                            </div>
                            <Button variant="outline" size="sm" onClick={() => setActiveTab(null)}>Back to Overview</Button>
                        </div>
                    ) : activeCategory ? (
                        <CategoryOverview
                            title={activeCategory}
                            items={menuGroups.find(g => g.title === activeCategory)?.items || []}
                            onSelect={setActiveTab}
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
                            <div className="p-4 rounded-full bg-slate-50 border border-slate-100">
                                <span className="text-4xl">✨</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 font-heading">Select a Category</h3>
                                <p className="text-slate-500 max-w-md mx-auto mt-2">
                                    Choose a module from the sidebar to explore its components.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </main>


        </div>
    );
};

export default EkontyDesignSystem;
