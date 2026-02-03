import { useState, type ButtonHTMLAttributes } from 'react';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react';
import {
    Search01Icon as Search,
    Loading03Icon as Loader2,
    ArrowRight01Icon as ChevronRight,
    PlusSignIcon as Plus,
    Copy01Icon as Copy,
    CheckmarkCircle01Icon as Check,
    Cancel01Icon as Close,

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
        primary: "bg-emerald-800 text-white shadow-sm hover:bg-emerald-800/90 hover:shadow-md focus-visible:ring-brand",
        secondary: "bg-slate-200 text-slate-900 shadow-sm hover:bg-slate-300 focus-visible:ring-slate-400",
        outline: "bg-transparent border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 focus-visible:ring-slate-400",
        ghost: "bg-transparent text-slate-600 hover:bg-slate-100 focus-visible:ring-slate-200",
        icon: "p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 focus-visible:ring-slate-400",
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
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 group cursor-pointer flex flex-col h-full"
        >
            <div className="h-40 bg-slate-50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent"></div>
                {/* Mock Illustration */}
                <div className="relative w-2/3 h-2/3 bg-white rounded-xl shadow-lg border border-slate-100 p-4 transform group-hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-2 bg-slate-100 rounded-full mb-3"></div>
                    <div className="w-2/3 h-2 bg-slate-100/60 rounded-full mb-6"></div>
                    <div className="space-y-2">
                        <div className="flex gap-2">
                            <div className="w-8 h-8 rounded-lg bg-emerald-100"></div>
                            <div className="flex-1 space-y-2">
                                <div className="w-full h-2 bg-slate-50 rounded-full"></div>
                                <div className="w-1/2 h-2 bg-slate-50 rounded-full"></div>
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
                <h4 className="text-[11px] font-bold text-slate-800 mb-1 group-hover:text-emerald-800 transition-colors uppercase tracking-tight">{title}</h4>
                <p className="text-[10px] text-slate-400 font-medium leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

const CategoryOverview = ({ title, items, onSelect }: { title: string, items: string[], onSelect: (item: string) => void }) => {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-12">
                <div className="max-w-2xl">
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight mb-4 font-heading">{title}</h1>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                        Explore our collection of high-quality components designed for the {title} module.
                        Each element is crafted with modularity and accessibility in mind.
                    </p>
                </div>
                <div className="hidden md:flex items-center gap-4 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <HugeiconsIcon icon={ChevronRight} size={18} className="rotate-90" />
                    </div>
                    <div className="pr-4">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Selected Module</p>
                        <p className="text-sm font-bold text-slate-900">{items.length} Components</p>
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
            items: ["Status Badge", "Tag / Label System", "Rating Stars", "Bookmark Button", "Share Button", "Copy to Clipboard", "QR Code Generator", "Invoice View"]
        },
        {
            title: "UX Polish",
            items: ["Tooltips", "Popovers", "Hover Cards", "Floating Action Button", "Scroll to Top", "Back Button", "Smooth Scroll", "Parallax Section"]
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

    const [expandedMenus, setExpandedMenus] = useState<string[]>(["Advanced Interaction", "Data & Visualization"]);

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
        <div className="min-h-screen bg-slate-50">
            <CodeSnippetModal data={codeModalData} onClose={() => setCodeModalData(null)} />
            {/* Sidebar Navigation */}
            <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-100 hidden lg:flex flex-col py-6 z-10">
                <div className="mb-6 flex items-center px-6">
                    <img src="/images/logo.png" alt="Ekonty Logo" className="h-6 w-auto object-contain" />
                </div>

                <div className="flex-1 overflow-y-auto px-4 space-y-2 custom-scrollbar">
                    {menuGroups.map((group) => (
                        <div key={group.title} className="space-y-1">
                            <button
                                onClick={() => toggleMenu(group.title)}
                                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-600 hover:text-emerald-800 hover:bg-slate-50 transition-all group"
                            >
                                <div className="flex items-center gap-3">
                                    {/* <span className="text-base">{group.icon}</span> */}
                                    <span className="text-sm font-bold">{group.title}</span>
                                </div>
                                <HugeiconsIcon
                                    icon={ChevronRight}
                                    size={14}
                                    className={`text-slate-400 transition-transform duration-200 ${expandedMenus.includes(group.title) ? 'rotate-90' : ''}`}
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
                                                    ? 'border-emerald-800 text-emerald-800 bg-emerald-50'
                                                    : 'border-slate-100/0 text-slate-400 hover:text-slate-600 hover:border-slate-200'
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

                <header className="sticky top-0 bg-slate-50/80 backdrop-blur-md z-[5] px-8 py-6 border-b border-slate-100 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <span className="text-slate-400">{activeCategory}</span>
                        {activeTab && (
                            <></>
                        )}
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="relative group min-w-[300px] hidden md:block">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-800 transition-colors">
                                <HugeiconsIcon icon={Search} size={16} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search anything "
                                value={globalSearch}
                                onChange={(e) => setGlobalSearch(e.target.value)}
                                className="w-[300px] bg-white border border-slate-200 rounded-2xl py-2 pl-11 pr-4 text-[13px] font-bold focus:outline-none focus:border-emerald-800 focus:ring-4 focus:ring-emerald-800/5 transition-all placeholder:text-slate-400"
                            />

                            {/* Search Results Dropdown */}
                            {globalSearch && (
                                <div className="absolute top-full left-0 w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl p-3 z-50 max-h-[400px] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
                                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Search Results</h4>
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
                                                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between group transition-colors"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                                                            <HugeiconsIcon icon={item.icon || Search} size={14} />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-bold text-slate-700">{item.name}</p>
                                                            <p className="text-[10px] text-slate-400">{item.type} in {item.tab}</p>
                                                        </div>
                                                    </div>
                                                    <HugeiconsIcon icon={ChevronRight} size={12} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-all" />
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
