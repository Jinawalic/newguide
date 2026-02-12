import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    Layout03Icon as ColumnIcon,
    ViewIcon as ShowIcon,
    ViewOffIcon as HideIcon,
    Sorting02Icon as ReorderIcon
} from '@hugeicons/core-free-icons';

const columnVisibilityCode = `import React, { useState } from 'react';

const ColumnManager = ({ columns, onToggle }) => {
  return (
    <div className="w-64 bg-white border border-slate-100 rounded-2xl shadow-xl p-4">
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Viewable Columns</div>
      <div className="space-y-1">
        {columns.map((col) => (
          <button
            key={col.id}
            onClick={() => onToggle(col.id)}
            className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-all"
          >
            <span className="text-sm font-medium text-slate-900">{col.label}</span>
            <div className={\`w-10 h-6 rounded-full p-1 transition-all \${col.visible ? 'bg-blue-600' : 'bg-slate-200'}\`}>
              <div className={\`w-4 h-4 rounded-full bg-white transition-all \${col.visible ? 'translate-x-4' : 'translate-x-0'}\`} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColumnManager;`;

const ColumnPreview = () => {
    const [cols, setCols] = useState([
        { id: 'usr', label: 'User Profile', visible: true, locked: true },
        { id: 'eml', label: 'Email Address', visible: true, locked: false },
        { id: 'rol', label: 'Security Role', visible: true, locked: false },
        { id: 'sta', label: 'Current Status', visible: false, locked: false },
        { id: 'log', label: 'Last Login', visible: true, locked: false },
        { id: 'met', label: 'Metadata', visible: false, locked: false }
    ]);

    const toggle = (id: string) => {
        setCols(prev => prev.map(c => c.id === id && !c.locked ? { ...c, visible: !c.visible } : c));
    };

    return (
        <div className="w-full flex flex-col items-center gap-10 relative z-[100] mt-5">
            <div className="w-full max-w-sm bg-white dark:bg-zinc-900/50 backdrop-blur-md p-10 rounded-xl border border-slate-100 dark:border-zinc-800 shadow-sm relative group overflow-hidden transition-colors duration-700">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h3 className="text-[15px] font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none my-2 transition-colors">Display Mode</h3>
                    </div>
                    <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                        <HugeiconsIcon icon={ColumnIcon} size={24} />
                    </div>
                </div>

                <div className="space-y-2">
                    {cols.map((f) => (
                        <div
                            key={f.id}
                            onClick={() => toggle(f.id)}
                            className={`group/item flex items-center justify-between px-5 py-4 rounded-xl border transition-all duration-500 cursor-pointer ${f.visible
                                ? 'bg-slate-100 dark:bg-zinc-800/50 border-emerald-100 dark:border-emerald-500/20'
                                : 'bg-slate-50 dark:bg-zinc-900/30 border-slate-50 dark:border-zinc-800 opacity-60'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${f.visible
                                    ? 'bg-white dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 shadow-sm'
                                    : 'bg-white dark:bg-zinc-900 text-slate-300 dark:text-zinc-700'
                                    }`}>
                                    <HugeiconsIcon icon={f.visible ? ShowIcon : HideIcon} size={18} />
                                </div>
                                <div>
                                    <div className={`text-[11px] font-black uppercase tracking-widest leading-none mb-1 ${f.visible ? 'text-slate-900 dark:text-zinc-100' : 'text-slate-400 dark:text-zinc-500'}`}>{f.label}</div>
                                    <div className="text-[8px] font-bold text-slate-400 dark:text-zinc-600 uppercase tracking-widest">{f.locked ? 'Primary Key' : 'Variable Field'}</div>
                                </div>
                            </div>

                            {!f.locked ? (
                                <div className={`w-12 h-7 rounded-full px-1 flex items-center transition-all duration-500 ${f.visible ? 'bg-emerald-600' : 'bg-slate-200 dark:bg-zinc-700'}`}>
                                    <div className={`w-5 h-5 rounded-full bg-white shadow-sm transform transition-transform duration-500 ${f.visible ? 'translate-x-5' : 'translate-x-0'}`} />
                                </div>
                            ) : (
                                <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-200 dark:text-zinc-700">
                                    <HugeiconsIcon icon={Tick} size={16} strokeWidth={3} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex items-center gap-2 group/reorder cursor-pointer justify-center py-3 border border-dashed border-slate-200 dark:border-zinc-800 rounded-2xl hover:border-emerald-500 transition-colors">
                    <HugeiconsIcon icon={ReorderIcon} size={14} className="text-slate-300 dark:text-zinc-700 group-hover/reorder:text-emerald-500 transition-colors" />
                    <span className="text-[9px] font-black text-slate-400 dark:text-zinc-600 uppercase tracking-widest group-hover/reorder:text-emerald-500 transition-colors">Hold To Reorder</span>
                </div>
            </div>
        </div>
    );
};

export const ColumnVisibility = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(columnVisibilityCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Column Visibility</h2>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Power Feature</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A layout customizer for data-dense tables. Enables users to
                    declutter their workspace by dynamically hiding or showing specific data fields.
                </p>
            </div>

            <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-colors duration-700">
                <div className="h-[750px] bg-[#f8fafc] dark:bg-zinc-950/50 relative flex items-center justify-center border-b border-slate-100 dark:border-zinc-800 overflow-hidden transition-colors duration-700">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(var(--pattern-color, #e2e8f0) 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <style>{`
                        .dark .h-\\[750px\\] { --pattern-color: #3f3f46; }
                    `}</style>
                    <ColumnPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Persistence Hooks</span>
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
                            {columnVisibilityCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('visible') ? 'text-emerald-400' :
                                            line.includes('onToggle') || line.includes('visible') ? 'text-amber-300' :
                                                line.includes('return') || line.includes('map') ? 'text-purple-400' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Architecture Tip</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Store the visibility state in <code>localStorage</code> or a user preference database so that the table layout remains consistent across different browsing sessions.
                    </p>
                </div>
            </div>
        </div>
    );
};
