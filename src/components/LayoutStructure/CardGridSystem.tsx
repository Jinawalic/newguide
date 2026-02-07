import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const cardGridSourceCode = `import React from 'react';

const CardGrid = ({ children, columns = 3 }) => {
  return (
    <div className={\`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-\${columns} gap-3\`}>
      {children}
    </div>
  );
};

export default CardGrid;`;

// --- THE PREVIEW COMPONENT ---
const CardGridPreview = () => {
    return (
        <div className="w-full h-full flex items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-200 relative z-[100] overflow-y-auto custom-scrollbar">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full max-w-4xl">
                {[
                    { t: 'Strategic Planning', s: 'Q1 Roadmap', c: 'emerald' },
                    { t: 'User Feedback', s: 'Latest reports', c: 'blue' },
                    { t: 'Design Specs', s: 'Version 2.4', c: 'rose' },
                ].map((card, i) => (
                    <div key={i} className="group bg-white rounded-xl p-4 border border-slate-100 shadow-sm shadow-slate-900/5 hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden">
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-${card.c}-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700`} />

                        <div className={`w-8 h-8 rounded-2xl bg-${card.c}-50 flex items-center justify-center text-${card.c}-600 mb-6 group-hover:bg-${card.c}-600 group-hover:text-white transition-colors`}>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        </div>

                        <h4 className="text-sm font-bold text-slate-900 tracking-tight uppercase mb-2">{card.t}</h4>
                        <p className="text-xs font-bold text-slate-400 mb-6">{card.s}</p>

                        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-widest group-hover:gap-4 transition-all">
                            <span>Open Details</span>
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute top-10 right-10 text-right opacity-30">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">Multi-Device Scale</p>
                <div className="flex gap-1 mt-2 justify-end">
                    <div className="w-4 h-4 rounded bg-slate-200" />
                    <div className="w-4 h-4 rounded bg-slate-300" />
                    <div className="w-4 h-4 rounded bg-slate-400" />
                </div>
            </div>
        </div>
    );
};

export const CardGridSystem = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(cardGridSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Card Grid System</h2>
                    <span className="bg-rose-100 text-rose-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Layout</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A flexible grid system for displaying homogeneous content items.
                    Built-in support for different column counts and responsive breakpoints.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[500px] bg-[#f8fafc] relative p-4 border-b border-slate-100 overflow-hidden">
                    <CardGridPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={6} className="group-hover:rotate-12 transition-transform" />
                            <span>Grid Gap Config</span>
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
                            {cardGridSourceCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('grid-cols') ? 'text-emerald-400' :
                                            line.includes('children') || line.includes('columns') ? 'text-amber-300' :
                                                line.includes('return') || line.includes('const') ? 'text-purple-400' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Visual Rhythm</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Always maintain consistent padding and gap values across your application. Using a base <strong>8px grid system</strong> (gap-2, p-4, p-8) ensures a balanced and professional look.
                    </p>
                </div>
            </div>
        </div>
    );
};
