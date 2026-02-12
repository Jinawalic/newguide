import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    MouseIcon as ScrollIcon,
    ArrowDown01Icon as ArrowDown
} from '@hugeicons/core-free-icons';

const smoothScrollCode = `import React from 'react';

const NavLink = ({ target, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <a href={\`#\${target}\`} onClick={handleClick} className="text-blue-600 hover:underline">
      {children}
    </a>
  );
};

export default NavLink;`;

const SmoothScrollPreview = () => {
    const scrollToId = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center gap-10 relative z-[100] transition-colors">
            <div className="w-full max-w-sm bg-white dark:bg-zinc-900 p-6 rounded-xl border border-slate-100 dark:border-zinc-800 shadow-sm relative overflow-hidden h-[450px] flex flex-col group transition-colors">
                <div className="flex justify-between items-center p-4 border-b border-slate-50 dark:border-zinc-800 relative z-20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md transition-colors">
                    <span className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest leading-none italic transition-colors">Ekonty.sys</span>
                    <div className="flex gap-4">
                        <button onClick={() => scrollToId('sec1')} className="text-[9px] font-black text-slate-400 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-white uppercase transition-colors">Intro</button>
                        <button onClick={() => scrollToId('sec2')} className="text-[9px] font-black text-slate-400 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-white uppercase transition-colors">Core</button>
                        <button onClick={() => scrollToId('sec3')} className="text-[9px] font-black text-slate-400 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-white uppercase transition-colors">End</button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-20 relative scroll-smooth transition-colors">
                    <div id="sec1" className="h-40 flex flex-col justify-center items-center text-center">
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-zinc-950 flex items-center justify-center mb-4 transition-colors">
                            <HugeiconsIcon icon={ScrollIcon} size={20} className="text-slate-400 dark:text-zinc-600 transition-colors" />
                        </div>
                        <h4 className="text-sm font-black text-slate-900 dark:text-zinc-100 uppercase tracking-widest mb-2 transition-colors">Introduction</h4>
                        <div className="h-2 w-32 bg-slate-100 dark:bg-zinc-800 rounded-full mx-auto transition-colors" />
                    </div>

                    <div id="sec2" className="h-40 flex flex-col justify-center items-center text-center">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-4 transition-colors">
                            <HugeiconsIcon icon={Styles} size={20} className="text-indigo-400 dark:text-indigo-500 transition-colors" />
                        </div>
                        <h4 className="text-sm font-black text-indigo-900 dark:text-indigo-300 uppercase tracking-widest mb-2 transition-colors">The Core System</h4>
                        <div className="h-2 w-48 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mx-auto transition-colors" />
                    </div>

                    <div id="sec3" className="h-40 flex flex-col justify-center items-center text-center transition-colors">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mb-4 transition-colors">
                            <HugeiconsIcon icon={Tick} size={20} className="text-emerald-400 dark:text-emerald-500 transition-colors" />
                        </div>
                        <h4 className="text-sm font-black text-emerald-900 dark:text-emerald-300 uppercase tracking-widest mb-2 transition-colors">Conclusion</h4>
                        <div className="h-2 w-32 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mx-auto transition-colors" />
                    </div>
                </div>

                <div className="px-6 py-4 bg-slate-50 dark:bg-zinc-950 flex justify-center transition-colors">
                    <button className="flex items-center gap-2 group cursor-default">
                        <span className="text-[9px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest transition-colors">Hover to see flow</span>
                        <HugeiconsIcon icon={ArrowDown} size={12} className="text-slate-300 dark:text-zinc-700 animate-bounce transition-colors" />
                    </button>
                </div>
            </div>

            <div className="px-6 py-2 bg-slate-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-colors">Interpolation Engine</div>
        </div>
    );
};

export const SmoothScroll = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(smoothScrollCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Smooth Scroll</h2>
                    <span className="bg-indigo-100 text-indigo-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">UX Polish</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    High-performance anchor navigation with fluid motion.
                    Replaces abrupt jumps with cinematic transitions, providing a cohesive storytelling experience on single-page layouts.
                </p>
            </div>

            <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-colors duration-700">
                <div className="h-[550px] bg-[#f8fafc] dark:bg-zinc-950/50 relative flex items-center justify-center border-b border-slate-100 dark:border-zinc-800 overflow-hidden transition-colors duration-700">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(var(--pattern-color, #e2e8f0) 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <style>{`
                        .dark .h-\\[550px\\] { --pattern-color: #3f3f46; }
                    `}</style>
                    <SmoothScrollPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Easing Options</span>
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
                            {smoothScrollCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('behavior') ? 'text-emerald-400' :
                                            line.includes('getElementById') || line.includes('scrollIntoView') ? 'text-amber-300' :
                                                line.includes('return') || line.includes('e.preventDefault') ? 'text-purple-400' :
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
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 transition-colors">Native CSS Alternative</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium leading-relaxed transition-colors">
                        For global smooth scrolling, you can simply use the CSS property <code>scroll-behavior: smooth;</code> on your <code>html</code> or <code>body</code> tags. JS implementation is preferred when you need granular control or offsets.
                    </p>
                </div>
            </div>
        </div>
    );
};
