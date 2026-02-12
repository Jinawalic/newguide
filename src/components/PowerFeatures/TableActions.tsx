import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    MoreHorizontalIcon as MoreIcon,
    PencilEdit02Icon as EditIcon,
    Delete02Icon as TrashIcon,
    Share01Icon as ShareIcon,
    EyeIcon as ViewIcon
} from '@hugeicons/core-free-icons';

const tableActionsCode = `import React, { useState } from 'react';

const TableActionMenu = ({ id, onAction }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
      >
        <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path d="M12 5h.01M12 12h.01M12 19h.01" strokeLinecap="round" strokeWidth={2} />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-xl z-50 p-1">
          <button onClick={() => onAction('view', id)} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-sm font-medium rounded-lg flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            View Details
          </button>
          <button onClick={() => onAction('edit', id)} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-sm font-medium rounded-lg flex items-center gap-2">
             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
             Edit Entry
          </button>
          <div className="h-px bg-slate-100 my-1" />
          <button onClick={() => onAction('delete', id)} className="w-full text-left px-4 py-2 hover:bg-rose-50 text-rose-600 text-sm font-medium rounded-lg flex items-center gap-2">
             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
             Delete Record
          </button>
        </div>
      )}
    </div>
  );
};

export default TableActionMenu;`;

const ActionsPreview = () => {
    const [openId, setOpenId] = useState<number | null>(null);

    const actions = [
        { icon: ViewIcon, label: 'Inspect', color: 'hover:text-blue-600 dark:hover:text-blue-400', tip: 'Audit Trail' },
        { icon: EditIcon, label: 'Modify', color: 'hover:text-amber-600 dark:hover:text-amber-400', tip: 'Meta Patch' },
        { icon: ShareIcon, label: 'Relay', color: 'hover:text-indigo-600 dark:hover:text-indigo-400', tip: 'Public Link' },
        { icon: TrashIcon, label: 'Purge', color: 'hover:text-rose-600 dark:hover:text-rose-400', tip: 'Hard Delete' }
    ];

    const rows = [
        { id: 1, type: 'Internal', hash: 'fb-902-1a' },
        { id: 2, type: 'External', hash: 'ax-112-9c' }
    ];

    return (
        <div className="w-full flex flex-col items-center gap-10 relative z-[100]">
            <div className="w-full max-w-sm bg-white dark:bg-zinc-900/50 backdrop-blur-md p-10 rounded-xl border border-slate-100 dark:border-zinc-800 shadow-sm relative group overflow-visible transition-colors duration-700">
                <div className="mb-10 text-center">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none mb-2 transition-colors">Record Pivot</h3>
                    <p className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest transition-colors">In-line controls</p>
                </div>

                <div className="space-y-4">
                    {rows.map(row => (
                        <div key={row.id} className="px-5 py-3 bg-slate-50 dark:bg-zinc-800/50 rounded-xl border border-slate-100 dark:border-zinc-800 transition-colors flex items-center justify-between relative">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white dark:bg-zinc-900 rounded-xl border border-slate-100 dark:border-zinc-800 flex items-center justify-center text-slate-400 dark:text-zinc-500 font-bold text-[10px] transition-colors">
                                    #{row.id}
                                </div>
                                <div className="leading-none">
                                    <div className="text-[11px] font-black text-slate-900 dark:text-zinc-100 uppercase tracking-widest mb-1 transition-colors">{row.type}</div>
                                    <div className="text-[9px] font-mono text-slate-400 dark:text-zinc-500 transition-colors">{row.hash}</div>
                                </div>
                            </div>

                            <div className="relative">
                                <button
                                    onClick={() => setOpenId(openId === row.id ? null : row.id)}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openId === row.id
                                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                                        : 'bg-white dark:bg-zinc-900 text-slate-400 dark:text-zinc-500 shadow-sm border border-slate-100 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700'
                                        }`}
                                >
                                    <HugeiconsIcon icon={MoreIcon} size={20} />
                                </button>

                                {openId === row.id && (
                                    <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] dark:shadow-black/50 p-3 z-50 animate-in fade-in slide-in-from-top-4 duration-500 transition-colors">
                                        <div className="grid grid-cols-1 gap-1">
                                            {actions.map((act, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setOpenId(null)}
                                                    className={`w-full flex items-center justify-between px-5 py-2 rounded-xl transition-all text-slate-500 dark:text-zinc-400 ${act.color} group/item hover:bg-slate-50 dark:hover:bg-zinc-800`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <HugeiconsIcon icon={act.icon} size={18} className="text-slate-300 dark:text-zinc-700 group-hover/item:text-inherit transition-colors" />
                                                        <div className="text-left leading-none">
                                                            <div className="text-[10px] font-black uppercase tracking-widest mb-0.5 transition-colors">{act.label}</div>
                                                            <div className="text-[8px] font-bold text-slate-400 dark:text-zinc-600 uppercase tracking-widest transition-colors">{act.tip}</div>
                                                        </div>
                                                    </div>
                                                    <HugeiconsIcon icon={Tick} size={14} className="opacity-0 group-hover/item:opacity-100 text-slate-200 dark:text-zinc-700 transition-all" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const TableActions = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(tableActionsCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Table Actions</h2>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Power Feature</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A contextual command hub for row-level operations.
                    Uses high-contrast popovers to provide deep functionality without overwhelming the layout.
                </p>
            </div>

            <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-colors duration-700">
                <div className="h-[600px] bg-[#f8fafc] dark:bg-zinc-950/50 relative flex items-center justify-center border-b border-slate-100 dark:border-zinc-800 overflow-visible transition-colors duration-700">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(var(--pattern-color, #e2e8f0) 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <style>{`
                        .dark .h-\\[600px\\] { --pattern-color: #3f3f46; }
                    `}</style>
                    <ActionsPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Action Dispatchers</span>
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
                            {tableActionsCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('isOpen') ? 'text-emerald-400' :
                                            line.includes('onAction') || line.includes('View Details') ? 'text-amber-300' :
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
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 transition-colors">Architecture Tip</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium leading-relaxed transition-colors">
                        Use <strong>React Portals</strong> for the action menus if they are used inside tables with <code>overflow: hidden</code> or <code>scrollbar-gutter: stable</code> to avoid clipping issues.
                    </p>
                </div>
            </div>
        </div>
    );
};
