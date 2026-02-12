import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const splitViewSourceCode = `import React from 'react';

const SplitView = ({ left, right, orientation = 'horizontal' }) => {
  return (
    <div className={\`flex w-full h-[600px] border border-slate-200 rounded-3xl overflow-hidden \${
      orientation === 'horizontal' ? 'flex-row' : 'flex-col'
    }\`}>
      <div className="flex-1 overflow-auto bg-slate-50 border-r border-slate-200">
        {left}
      </div>
      <div className="flex-1 overflow-auto bg-white">
        {right}
      </div>
    </div>
  );
};

export default SplitView;`;

// --- THE PREVIEW COMPONENT ---
const SplitViewPreview = () => {
    return (
        <div className="w-full h-full flex items-center justify-center p-8 bg-slate-50 dark:bg-zinc-950/20 rounded-xl border border-slate-200 dark:border-zinc-800 relative z-[100] transition-colors">
            <div className="w-full max-w-4xl h-[360px] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl overflow-hidden flex shadow-2xl shadow-slate-900/10 transition-colors">
                <div className="w-1/3 bg-slate-50 dark:bg-zinc-800/50 border-r border-slate-100 dark:border-zinc-800 flex flex-col transition-colors">
                    <div className="p-6 border-b border-slate-200/50 dark:border-zinc-800">
                        <h4 className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest transition-colors">Inbox</h4>
                    </div>
                    <div className="flex-1 p-4 space-y-3 overflow-y-auto custom-scrollbar">
                        {[
                            { t: 'Project Update', s: 'Status: Completed', active: true },
                            { t: 'Team Sync', s: 'Agenda items inside' },
                            { t: 'Security Alert', s: 'New login detected' }
                        ].map((item, i) => (
                            <div key={i} className={`px-4 py-2 rounded-xl border transition-all cursor-pointer ${item.active ? 'bg-white dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/5' : 'bg-transparent border-transparent hover:bg-slate-100 dark:hover:bg-zinc-800/80'}`}>
                                <p className="text-[11px] font-black text-slate-900 dark:text-white mb-1 transition-colors">{item.t}</p>
                                <p className="text-[9px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest transition-colors">{item.s}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 bg-white dark:bg-zinc-900 flex flex-col transition-colors">
                    <div className="p-6 border-b border-slate-50 dark:border-zinc-800 flex items-center justify-between transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center text-slate-400 dark:text-zinc-500 transition-colors">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-[12px] font-black text-slate-900 dark:text-white leading-none mb-1 transition-colors">Jane Thompson</h3>
                                <p className="text-[9px] font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest transition-colors">Active Now</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-8 h-8 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center text-slate-400 dark:text-zinc-500 transition-colors"><svg className="w-3.5 h-3.5" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
                            <div className="w-8 h-8 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center text-slate-400 dark:text-zinc-500 transition-colors"><svg className="w-3.5 h-3.5" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg></div>
                        </div>
                    </div>
                    <div className="flex-1 p-8 space-y-6 transition-colors">
                        <div className="space-y-2">
                            <div className="h-2 w-full bg-slate-100 dark:bg-zinc-800 rounded-full" />
                            <div className="h-2 w-5/6 bg-slate-100 dark:bg-zinc-800 rounded-full" />
                            <div className="h-2 w-4/6 bg-slate-100 dark:bg-zinc-800 rounded-full" />
                        </div>
                        <div className="h-40 w-full bg-slate-50 dark:bg-zinc-800/20 rounded-xl shadow-sm border border-slate-100 dark:border-zinc-800 p-6 flex flex-col justify-end transition-colors">
                            <div className="flex gap-2">
                                <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-zinc-700" />
                                <div className="h-8 flex-1 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-xl transition-colors" />
                                <div className="w-16 h-8 bg-slate-900 dark:bg-zinc-700 rounded-xl transition-colors" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-10 left-10 text-[10px] font-black text-slate-400 dark:text-zinc-600 uppercase tracking-[0.4em] transform -rotate-90 origin-left transition-colors">Ratio 1:2</div>
        </div>
    );
};

export const SplitViewLayout = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(splitViewSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Split View Layout</h2>
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Aesthetics</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    Classic master-detail pattern for managing lists and their corresponding content.
                    Maintains context while browsing large collections of items.
                </p>
            </div>

            <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-colors duration-700">
                <div className="h-[500px] bg-[#f8fafc] dark:bg-zinc-950/50 relative p-4 border-b border-slate-100 dark:border-zinc-800 overflow-hidden transition-colors duration-700">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(var(--pattern-color, #e2e8f0) 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <style>{`
                        .dark .h-\\[500px\\] { --pattern-color: #3f3f46; }
                    `}</style>
                    <SplitViewPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>List density</span>
                        </button>
                    </div>
                    <div className="flex items-center gap-6 text-slate-400">
                        <button
                            onClick={handleCopy}
                            className={`flex items-center gap-2 font-bold text-xs transition-all ${copied ? 'text-emerald-600' : 'hover:text-slate-900 dark:hover:text-white text-slate-500 dark:text-zinc-400'}`}
                        >
                            <HugeiconsIcon icon={copied ? Tick : Copy} size={16} />
                            <span>{copied ? 'Copied' : 'Copy code'}</span>
                        </button>
                    </div>
                </div>

                <div className="bg-[#0f172a] p-8 overflow-auto max-h-[500px] custom-scrollbar text-white">
                    <pre className="text-[13px] font-mono leading-relaxed group">
                        <code className="text-slate-200">
                            {splitViewSourceCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('import') ? 'text-emerald-400' :
                                            line.includes('orientation') || line.includes('left') ? 'text-amber-300' :
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
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 transition-colors">Mobile Strategy</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium leading-relaxed transition-colors">
                        On mobile devices, a split view should collapse into a stacked view or use a drill-down navigation pattern (showing only one panel at a time) to maintain usability.
                    </p>
                </div>
            </div>
        </div>
    );
};
