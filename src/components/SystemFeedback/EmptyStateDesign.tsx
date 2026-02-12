import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const emptyStateSourceCode = `import React from 'react';

const EmptyState = ({ title, description, icon, actionLabel, onAction }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-white border border-dashed border-slate-200 rounded-[40px]">
      <div className="w-20 h-20 bg-slate-50 rounded-[32px] flex items-center justify-center text-slate-400 mb-6 border border-slate-100/50">
         {icon}
      </div>
      <h3 className="text-xl font-black text-slate-800 tracking-tight mb-2">{title}</h3>
      <p className="max-w-xs text-slate-400 font-bold text-xs leading-relaxed mb-8">{description}</p>
      {actionLabel && (
        <button 
          onClick={onAction}
          className="px-8 py-3 bg-emerald-600 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-emerald-900/10 hover:bg-emerald-700 transition-all active:scale-95 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;`;

// --- THE PREVIEW COMPONENT ---
const EmptyStatePreview = () => {
    return (
        <div className="w-full max-w-sm mx-auto flex flex-col items-center p-12 bg-white dark:bg-zinc-900/50 backdrop-blur-md rounded-xl shadow-sm shadow-slate-900/10 dark:shadow-black/50 border border-slate-100 dark:border-zinc-800 text-center relative z-[100] animate-in zoom-in-95 duration-500 transition-colors">
            <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-emerald-500/10 blur-[40px] rounded-full scale-150 group-hover:bg-emerald-500/20 transition-all duration-700" />
                <div className="w-24 h-24 bg-white dark:bg-zinc-800 rounded-[32px] flex items-center justify-center text-slate-300 dark:text-zinc-600 border border-slate-100 dark:border-zinc-700 shadow-xl shadow-slate-200/50 dark:shadow-black/20 relative z-10 transition-all duration-500 group-hover:-rotate-3 group-hover:scale-105">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9Z" /></svg>
                </div>
            </div>

            <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-3 transition-colors">No documents yet</h3>
            <p className="text-[13px] text-slate-400 dark:text-zinc-500 font-bold leading-relaxed mb-10 max-w-[220px] transition-colors">Upload your first project files to start organizing your digital workspace.</p>

            <button className="px-8 h-12 bg-emerald-800 dark:bg-emerald-500/20 text-white dark:text-emerald-400 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-emerald-900/20 dark:shadow-emerald-500/10 active:scale-[0.98] transition-all flex items-center gap-3 border border-transparent dark:border-emerald-500/20">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M12 4v16m8-8H4" /></svg>
                Create First Project
            </button>

            <div className="mt-6 flex items-center gap-1.5 grayscale opacity-50">
                <div className="w-6 h-1 rounded-full bg-slate-200 dark:bg-zinc-800" />
                <div className="w-6 h-1 rounded-full bg-slate-100 dark:bg-zinc-700" />
                <div className="w-6 h-1 rounded-full bg-slate-50 dark:bg-zinc-600" />
            </div>
        </div>
    );
};

export const EmptyStateDesign = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(emptyStateSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Empty State Design</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Onboarding</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    UI placeholders displayed when a regular content area has no data to show.
                    Crucial for preventing cold starts and guiding users toward their first action.
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
                    <EmptyStatePreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Action Layouts</span>
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
                            {emptyStateSourceCode.split('\n').map((line, i) => (
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Growth Rule</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Never leave the user hanging. Every empty state should explain <strong>why</strong> it's empty and provide a <strong>clear next step</strong> (a primary CTA).
                    </p>
                </div>
            </div>
        </div>
    );
};
