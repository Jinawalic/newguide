import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    UserCircleIcon as User,
    Settings01Icon as SettingsGear,
    Logout01Icon as Logout,
    AiSecurity01Icon as Security
} from '@hugeicons/core-free-icons';

const dropdownCode = `import React, { useState } from 'react';

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Profile Settings', icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ), path: '#' },
    { label: 'Cloud Storage', icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ), path: '#' },
    { label: 'Security & Auth', icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ), path: '#' },
    { label: 'Sign Out', icon: (
      <svg className="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
    ), path: '#', color: 'text-rose-500' }
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 p-1 pr-4 bg-white border border-slate-200 rounded-full hover:shadow-lg transition-all"
      >
        <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800" />
        <span className="text-sm font-bold text-slate-700">Johnathan D.</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 bg-white border border-slate-100 rounded-3xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
           {menuItems.map((item, idx) => (
             <button key={idx} className={\`w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-slate-50 transition-colors \${item.color || 'text-slate-600'}\`}>
                {item.icon}
                <span className="text-sm font-black tracking-tight">{item.label}</span>
             </button>
           ))}
        </div>
      )}
    </div>
  );
};

export default UserDropdown;`;

const DropdownPreview = () => {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        { label: 'Account Data', icon: User, color: 'emerald' },
        { label: 'Preferences', icon: SettingsGear, color: 'blue' },
        { label: 'Two-Factor Auth', icon: Security, color: 'amber' },
        { label: 'Disconnect', icon: Logout, color: 'rose' }
    ];

    return (
        <div className="w-full h-full flex items-center justify-center relative z-[100] mb-[90px]">
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="group flex items-center gap-4 p-2 pr-6 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-xl shadow-sm hover:-translate-y-1 active:scale-95 transition-all duration-300 transition-colors"
                >
                    <div className="w-8 h-8 rounded-[22px] bg-slate-900 dark:bg-zinc-800 flex items-center justify-center text-white rotate-3 group-hover:rotate-0 transition-transform">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                    </div>
                    <div className="text-left">
                        <p className="text-[13px] font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none mb-1 transition-colors">Alex Rivier</p>
                        <p className="text-[10px] font-bold text-emerald-500 dark:text-emerald-400 capitalize tracking-widest transition-colors">Premium Member</p>
                    </div>
                    <svg className={`w-4 h-4 text-slate-400 dark:text-zinc-600 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M19 9l-7 7-7-7" /></svg>
                </button>

                {isOpen && (
                    <div className="absolute right-0 top-full w-72 bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-slate-100 dark:border-zinc-800 rounded-xl shadow-2xl dark:shadow-black/50 animate-in fade-in slide-in-from-top-4 duration-300 transition-colors">
                        <div className="p-4 mb-2">
                            <p className="text-[10px] font-black text-slate-300 dark:text-zinc-600 uppercase tracking-[0.3em] mb-4 transition-colors">Management</p>
                            <div className="space-y-1">
                                {items.map((item, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setIsOpen(false)}
                                        className="w-full flex items-center gap-4 px-4 py-2 rounded-[24px] hover:bg-slate-50 dark:hover:bg-emerald-500/10 group transition-all"
                                    >
                                        <div className={`w-7 h-7 rounded-2xl bg-${item.color}-50 dark:bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-600 dark:text-${item.color}-400 group-hover:scale-110 transition-all`}>
                                            <HugeiconsIcon icon={item.icon} size={20} />
                                        </div>
                                        <span className={`text-[13px] font-black tracking-tight transition-colors ${item.color === 'rose' ? 'text-rose-500 dark:text-rose-400' : 'text-slate-600 dark:text-zinc-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-400'}`}>{item.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {isOpen && <div className="fixed inset-0 z-[105]" onClick={() => setIsOpen(false)} />}
        </div>
    );
};

export const UserDropdownMenu = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(dropdownCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">User Dropdown Menu</h2>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Navigation</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A sophisticated account management menu with distinct visual states,
                    multi-tier categorization, and smooth entry animations.
                </p>
            </div>

            <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-colors duration-700">
                <div className="h-[500px] bg-[#f8fafc] dark:bg-zinc-950/50 relative flex items-center justify-center border-b border-slate-100 dark:border-zinc-800 overflow-hidden transition-colors duration-700">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(var(--pattern-color, #e2e8f0) 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <style>{`
                        .dark .h-\\[500px\\] { --pattern-color: #3f3f46; }
                    `}</style>
                    <DropdownPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Animation Presets</span>
                        </button>
                    </div>
                    <div className="flex items-center gap-6 text-slate-400">
                        <button
                            onClick={handleCopy}
                            className={`flex items-center gap-2 font-bold text-xs transition-all ${copied ? 'text-emerald-600' : 'hover:text-slate-900 dark:hover:text-zinc-100 text-slate-500 dark:text-zinc-400'}`}
                        >
                            <HugeiconsIcon icon={copied ? Tick : Copy} size={16} />
                            <span>{copied ? 'Copied' : 'Copy code'}</span>
                        </button>
                    </div>
                </div>

                <div className="bg-[#0f172a] p-8 overflow-auto max-h-[500px] custom-scrollbar text-white">
                    <pre className="text-[13px] font-mono leading-relaxed group">
                        <code className="text-slate-200">
                            {dropdownCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('import') ? 'text-emerald-400' :
                                            line.includes('export') || line.includes('const') ? 'text-blue-400' :
                                                line.includes('return') || line.includes('useState') ? 'text-purple-400' :
                                                    line.includes('<') || line.includes('>') || line.includes('/') ? 'text-rose-400' :
                                                        'text-slate-200'
                                    }>
                                        {line}
                                    </span>
                                </div>
                            ))}
                        </code>
                    </pre>
                </div>
            </div>

            <div className="mt-8 flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-emerald-600 mt-0.5">
                    <HugeiconsIcon icon={Info} size={20} />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Accessibility Rule</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Use <strong>aria-haspopup="true"</strong> and <strong>aria-expanded</strong> to inform assistive technologies about the dropdown state. Ensure the menu can be closed using the <code>Esc</code> key.
                    </p>
                </div>
            </div>
        </div>
    );
};
