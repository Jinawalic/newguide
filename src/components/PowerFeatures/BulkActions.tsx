import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    Delete02Icon as DeleteIcon,
    ArchiveIcon as Archive,
    Mail01Icon as MarkRead,
    Tag01Icon as LabelIcon
} from '@hugeicons/core-free-icons';

const bulkActionsCode = `import React, { useState } from 'react';

const BulkActions = ({ selectedCount, onAction }) => {
  if (selectedCount === 0) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 px-8 py-4 bg-slate-900 text-white rounded-[24px] shadow-2xl animate-in slide-in-from-bottom-8 duration-500 z-50">
      <div className="flex items-center gap-3 pr-6 border-r border-slate-700">
        <span className="bg-blue-500 text-white w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold">{selectedCount}</span>
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Selected</span>
      </div>
      
      <div className="flex items-center gap-4">
        <button onClick={() => onAction('delete')} className="flex items-center gap-2 hover:text-rose-400 font-bold text-xs transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Delete
        </button>
        <button className="flex items-center gap-2 hover:text-blue-400 font-bold text-xs transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Archive
        </button>
      </div>
    </div>
  );
};

export default BulkActions;`;

const BulkPreview = () => {
    const [selected, setSelected] = useState<number[]>([]);
    const total = 5;

    const toggle = (id: number) => {
        setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    const toggleAll = () => {
        setSelected(prev => prev.length === total ? [] : [1, 2, 3, 4, 5]);
    };

    return (
        <div className="w-full flex flex-col items-center gap-10 relative z-[100]">
            <div className="w-full max-w-md bg-white dark:bg-zinc-900/50 backdrop-blur-md p-10 rounded-xl border border-slate-100 dark:border-zinc-800 shadow-sm relative group overflow-hidden transition-colors duration-700">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-50 dark:border-zinc-800 transition-colors">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none mb-2">Customer List</h3>
                    <button
                        onClick={toggleAll}
                        className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest px-4 py-2 bg-blue-50 dark:bg-blue-500/10 rounded-xl transition-colors"
                    >
                        {selected.length === total ? 'Deselect All' : 'Select All'}
                    </button>
                </div>

                <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div
                            key={i}
                            onClick={() => toggle(i)}
                            className={`p-5 rounded-xl border transition-all duration-500 cursor-pointer flex items-center justify-between ${selected.includes(i)
                                ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30 shadow-sm shadow-emerald-500/5'
                                : 'bg-slate-50 dark:bg-zinc-800/30 border-slate-50 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 hover:border-slate-200 dark:hover:border-zinc-700'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-8 h-8 rounded-xl border-2 transition-all flex items-center justify-center ${selected.includes(i)
                                    ? 'bg-emerald-500 border-emerald-500 text-white'
                                    : 'bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800'
                                    }`}>
                                    {selected.includes(i) && <HugeiconsIcon icon={Tick} size={14} strokeWidth={4} />}
                                </div>
                                <div className="space-y-1">
                                    <div className="h-2.5 w-24 bg-slate-900/10 dark:bg-zinc-100/10 rounded-full" />
                                    <div className="h-1.5 w-16 bg-slate-400/20 dark:bg-zinc-500/20 rounded-full" />
                                </div>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-zinc-800" />
                        </div>
                    ))}
                </div>

                {selected.length > 0 && (
                    <div className="absolute inset-x-6 bottom-6 flex items-center justify-between bg-slate-100 dark:bg-zinc-800 px-6 py-4 rounded-xl shadow-sm animate-in slide-in-from-bottom-full duration-500 ring-4 ring-white dark:ring-zinc-900 transition-all">
                        <div className="flex items-center gap-3 pr-6 border-r border-slate-200 dark:border-zinc-700">
                            <div className="w-8 h-8 bg-emerald-500 text-white rounded-xl flex items-center justify-center text-xs font-black shadow-lg shadow-emerald-500/30">
                                {selected.length}
                            </div>
                            <span className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-[0.2em] leading-none">Selected</span>
                        </div>

                        <div className="flex-1 flex justify-around items-center px-4 gap-2">
                            {[
                                { icon: MarkRead, label: 'Read', color: 'hover:text-blue-400' },
                                { icon: LabelIcon, label: 'Label', color: 'hover:text-emerald-400' },
                                { icon: Archive, label: 'Archive', color: 'hover:text-amber-400' },
                                { icon: DeleteIcon, label: 'Delete', color: 'hover:text-rose-400' }
                            ].map((action, i) => (
                                <button key={i} className={`flex flex-col items-center gap-1.5 group/action transition-colors ${action.color}`}>
                                    <HugeiconsIcon icon={action.icon} size={20} className="text-slate-400 dark:text-zinc-500 group-hover/action:text-inherit transition-colors" />
                                    <span className="text-[7px] font-black uppercase tracking-widest text-slate-500 dark:text-zinc-600 group-hover/action:text-inherit transition-colors">{action.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export const BulkActions = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(bulkActionsCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Bulk Actions</h2>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Power Feature</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A multi-select interaction layer for intensive data management.
                    Uses a floating command bar to reduce UI clutter while enabling rapid batch processing.
                </p>
            </div>

            <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-colors duration-700">
                <div className="h-[650px] bg-[#f8fafc] dark:bg-zinc-950/50 relative flex items-center justify-center border-b border-slate-100 dark:border-zinc-800 overflow-hidden transition-colors duration-700">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(var(--pattern-color, #e2e8f0) 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <style>{`
                        .dark .h-\\[650px\\] { --pattern-color: #3f3f46; }
                    `}</style>
                    <BulkPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Pivot States</span>
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
                            {bulkActionsCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('selectedCount') ? 'text-emerald-400' :
                                            line.includes('onAction') || line.includes('selected') ? 'text-amber-300' :
                                                line.includes('return') || line.includes('null') ? 'text-purple-400' :
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
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 transition-colors">UX Pattern</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium leading-relaxed transition-colors">
                        Always include a <strong>"Deselect All"</strong> option when the action bar is active. The floating bar should use <code>z-index</code> layering to stay above all other content.
                    </p>
                </div>
            </div>
        </div>
    );
};
