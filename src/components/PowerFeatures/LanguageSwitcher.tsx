import { useState, useRef, useEffect } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    // GlobalIcon as LanguageIcon,
    ArrowDown01Icon as ChevronDown,
    CheckmarkCircle01Icon as Check
} from '@hugeicons/core-free-icons';

const langSwitcherCode = `import React, { useState } from 'react';

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState({ code: 'en', name: 'English', flag: '🇺🇸' });

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' }
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl font-bold text-sm shadow-sm"
      >
        <span>{lang.flag}</span>
        <span>{lang.name}</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden z-50">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l); setIsOpen(false); }}
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50 text-sm font-medium"
            >
              <div className="flex items-center gap-3">
                 <span>{l.flag}</span>
                 <span>{l.name}</span>
              </div>
              {lang.code === l.code && <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;`;

const LanguagePreview = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLang, setActiveLang] = useState({ code: 'en', name: 'English', flag: '🇺🇸' });
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸', label: 'Global' },
        { code: 'fr', name: 'Français', flag: '🇫🇷', label: 'Europe' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪', label: 'Europe' },
        { code: 'es', name: 'Español', flag: '🇪🇸', label: 'Latam' },
        { code: 'jp', name: '日本語', flag: '🇯🇵', label: 'Asia' },
        { code: 'cn', name: '中文', flag: '🇨🇳', label: 'Asia' }
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="w-full flex flex-col items-center gap-10 relative z-[100]">
            <div className="w-full max-w-sm bg-white dark:bg-zinc-900/50 backdrop-blur-md p-10 rounded-xl border border-slate-100 dark:border-zinc-800 shadow-sm relative group overflow-visible transition-colors duration-700" ref={dropdownRef}>
                <div className="mb-10 text-center">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-3 transition-colors">Localization</h3>
                    <p className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-[0.4em] transition-colors">Switch Language and Region</p>
                </div>

                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`w-full h-14 bg-white dark:bg-zinc-900 border-2 rounded-xl px-8 flex items-center justify-between transition-all duration-500 ${isOpen ? 'border-emerald-500 shadow-sm shadow-emerald-500/10' : 'border-slate-100 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700'
                            }`}
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-2xl">{activeLang.flag}</span>
                            <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest transition-colors">{activeLang.name}</span>
                        </div>
                        <HugeiconsIcon
                            icon={ChevronDown}
                            size={20}
                            className={`text-slate-400 dark:text-zinc-500 transition-transform duration-500 ${isOpen ? 'rotate-180 text-indigo-500' : ''}`}
                        />
                    </button>

                    {isOpen && (
                        <div className="absolute top-full left-0 right-0 mt-4 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-xl shadow-sm shadow-emerald-800/10 overflow-hidden animate-in fade-in zoom-in-95 duration-500 z-[110] p-4">
                            <div className="grid grid-cols-1 gap-2">
                                {languages.map((l) => (
                                    <button
                                        key={l.code}
                                        onClick={() => { setActiveLang(l); setIsOpen(false); }}
                                        className={`flex items-center justify-between px-6 py-3 rounded-xl transition-all group/lang ${activeLang.code === l.code ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600' : 'text-slate-500 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-zinc-100'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-xl group-hover/lang:scale-125 transition-transform duration-500">{l.flag}</span>
                                            <div className="text-left leading-none">
                                                <div className="text-[11px] font-black uppercase tracking-widest mb-1">{l.name}</div>
                                                <div className="text-[9px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">{l.label}</div>
                                            </div>
                                        </div>
                                        {activeLang.code === l.code && (
                                            <HugeiconsIcon icon={Check} size={18} strokeWidth={3} />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export const LanguageSwitcher = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(langSwitcherCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Language Switcher</h2>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Power Feature</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A localization gateway for multi-lingual applications. Optimized for clarity
                    with flag indicators and phonetic region labels.
                </p>
            </div>

            <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[650px] bg-[#f8fafc] dark:bg-zinc-950/50 relative flex items-center justify-center border-b border-slate-100 dark:border-zinc-800 overflow-visible transition-colors duration-700">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(var(--pattern-color, #e2e8f0) 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <style>{`
                        .dark .h-\\[650px\\] { --pattern-color: #3f3f46; }
                    `}</style>
                    <LanguagePreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>I18n Hooks</span>
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
                            {langSwitcherCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('lang') ? 'text-emerald-400' :
                                            line.includes('setLang') || line.includes('flag') ? 'text-amber-300' :
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

            <div className="mt-8 flex items-start gap-3 p-4 bg-slate-50 dark:bg-zinc-900/50 rounded-2xl border border-slate-100 dark:border-zinc-800 transition-colors">
                <div className="text-emerald-600 dark:text-emerald-400 mt-0.5 transition-colors">
                    <HugeiconsIcon icon={Info} size={20} />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 transition-colors">Accessibility Tip</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium leading-relaxed transition-colors">
                        Always include <code>aria-haspopup="listbox"</code> and <code>aria-expanded</code> on the toggle button to help screen readers understand the interaction pattern.
                    </p>
                </div>
            </div>
        </div>
    );
};
