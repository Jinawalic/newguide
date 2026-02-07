import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const stickyHeaderSourceCode = `import React, { useState, useEffect } from 'react';

const StickyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={\`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 \${
      isScrolled 
        ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm' 
        : 'py-6 bg-transparent'
    }\`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 rounded-xl flex items-center justify-center text-white">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-black text-slate-900 uppercase tracking-tighter text-lg">Ekonty</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Products', 'Solutions', 'Pricing', 'About'].map((item) => (
            <a key={item} href="#" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <button className="px-6 py-2 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default StickyHeader;`;

// --- THE PREVIEW COMPONENT ---
const HeaderPreview = () => {
    const [scrolled, setScrolled] = useState(false);

    return (
        <div className="w-full h-full bg-slate-50 border border-slate-200 rounded-[32px] overflow-hidden relative group">
            {/* Control Panel to simulate scroll */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 bg-white p-4 rounded-2xl shadow-xl flex gap-4">
                <button
                    onClick={() => setScrolled(false)}
                    className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${!scrolled ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'}`}
                >
                    Top Position
                </button>
                <button
                    onClick={() => setScrolled(true)}
                    className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${scrolled ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'}`}
                >
                    Scrolled State
                </button>
            </div>

            <header className={`absolute top-0 left-0 right-0 z-10 transition-all duration-500 p-6 ${scrolled ? 'bg-white/70 backdrop-blur-md shadow-sm border-b border-slate-200 py-4' : 'bg-transparent py-6'
                }`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl rotate-3">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <span className="font-black text-slate-900 tracking-tighter text-xl">LGI</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />
                        <div className="w-24 h-4 rounded-full bg-slate-200 animate-pulse" />
                    </div>
                </div>
            </header>

            <div className="pt-32 p-8 space-y-6">
                <div className="h-40 bg-white rounded-3xl border border-slate-100 shadow-sm" />
                <div className="h-40 bg-white rounded-3xl border border-slate-100 shadow-sm opacity-60" />
                <div className="h-40 bg-white rounded-3xl border border-slate-100 shadow-sm opacity-30" />
            </div>
        </div>
    );
};

export const StickyHeader = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(stickyHeaderSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Sticky Header</h2>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Layout</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A smart header component that remains visible during scrolling.
                    Uses glassmorphism effects and smooth transitions to improve navigation accessibility.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[500px] bg-[#f8fafc] relative p-4 border-b border-slate-100 overflow-hidden">
                    <HeaderPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Glassmorphism Settings</span>
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
                            {stickyHeaderSourceCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('import') ? 'text-emerald-400' :
                                            line.includes('transition') || line.includes('fixed') ? 'text-amber-300' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Performance Insight</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Use <strong>backdrop-blur</strong> sparingly on mobile as it can be CPU intensive. Combining it with a semi-transparent background color ensures readable contrast across various content types.
                    </p>
                </div>
            </div>
        </div>
    );
};
