import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    Moon02Icon as Moon,
    Sun01Icon as Sun,
    // PaintBoardIcon as ThemeIcon,
    ComputerIcon as SystemIcon
} from '@hugeicons/core-free-icons';

const themeSwitcherCode = `import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const themes = [
    { id: 'light', label: 'Light', icon: 'SunSVG' },
    { id: 'dark', label: 'Dark', icon: 'MoonSVG' },
    { id: 'system', label: 'System', icon: 'SystemSVG' }
  ];

  return (
    <div className="flex p-1 bg-slate-100 rounded-2xl w-fit">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={\`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all \${
            theme === t.id 
              ? 'bg-white text-slate-900 shadow-sm' 
              : 'text-slate-500 hover:text-slate-700'
          }\`}
        >
          {t.id === 'light' ? <SunSVG /> : t.id === 'dark' ? <MoonSVG /> : <SystemSVG />}
          {t.label}
        </button>
      ))}
    </div>
  );
};

const SunSVG = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5" /><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonSVG = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1111.213 3 7 7 0 0021 12.79z" />
  </svg>
);

const SystemSVG = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><path d="M8 21h8m-4-4v4" />
  </svg>
);

export default ThemeSwitcher;`;

const ThemePreview = () => {
    const [activeTheme, setActiveTheme] = useState('light');

    const themes = [
        { id: 'light', label: 'Light', icon: Sun, color: 'text-amber-500', bg: 'bg-amber-50' },
        { id: 'dark', label: 'Dark', icon: Moon, color: 'text-indigo-500', bg: 'bg-indigo-50' },
        { id: 'system', label: 'System', icon: SystemIcon, color: 'text-emerald-500', bg: 'bg-emerald-50' }
    ];

    return (
        <div className="w-full flex flex-col items-center gap-10 relative z-[100]">
            <div className="w-full max-w-sm bg-white p-10 rounded-xl border border-slate-100 shadow-sm relative group overflow-hidden">
                <div className="p-1.5 bg-slate-50 rounded-xl grid grid-cols-3 gap-1 shadow-inner border border-slate-100 mb-8">
                    {themes.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => setActiveTheme(t.id)}
                            className={`flex flex-col items-center gap-2 py-4 rounded-xl transition-all duration-500 relative group/btn ${activeTheme === t.id
                                ? 'bg-white text-slate-900 shadow-lg shadow-slate-200/50 scale-100'
                                : 'text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            <HugeiconsIcon
                                icon={t.icon}
                                size={20}
                                className={`transition-transform duration-500 ${activeTheme === t.id ? 'scale-110' : 'group-hover/btn:scale-110'}`}
                            />
                            <span className="text-[9px] font-black uppercase tracking-widest">{t.label}</span>
                            {activeTheme === t.id && (
                                <div className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-slate-900" />
                            )}
                        </button>
                    ))}
                </div>

                <div className={`p-6 rounded-xl border transition-all duration-500 ${activeTheme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-100'
                    }`}>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-slate-200" />
                        <div className="flex-1 space-y-2">
                            <div className={`h-2 w-24 rounded-full ${activeTheme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'}`} />
                            <div className={`h-2 w-16 rounded-full ${activeTheme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}`} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className={`h-2 w-full rounded-full ${activeTheme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}`} />
                        <div className={`h-2 w-3/4 rounded-full ${activeTheme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ThemeSwitcher = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(themeSwitcherCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Theme Switcher</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Power Feature</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A toggle system for UI personalization. Supports Light, Dark, and System Preference
                    with smooth transitions and state persistence.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[600px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <ThemePreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Theme Tokens</span>
                        </button>
                    </div>
                    <div className="flex items-center gap-6 text-slate-400">
                        <button
                            onClick={handleCopy}
                            className={`flex items-center gap-2 font-bold text-xs transition-all ${copied ? 'text-emerald-600' : 'hover:text-slate-900 text-slate-500'}`}
                        >
                            <HugeiconsIcon icon={copied ? Tick : Copy} size={16} />
                            <span>{copied ? 'Copied' : 'Copy code'}</span>
                        </button>
                    </div>
                </div>

                <div className="bg-[#0f172a] p-8 overflow-auto max-h-[500px] custom-scrollbar text-white">
                    <pre className="text-[13px] font-mono leading-relaxed group">
                        <code className="text-slate-200">
                            {themeSwitcherCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('theme') ? 'text-emerald-400' :
                                            line.includes('setTheme') || line.includes('themes') ? 'text-amber-300' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">State Sync</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Always include a <code>useEffect</code> to apply the theme class to the <code>document.documentElement</code> for consistent styling across the shadow DOM and portals.
                    </p>
                </div>
            </div>
        </div>
    );
};
