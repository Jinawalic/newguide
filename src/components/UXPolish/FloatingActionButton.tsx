import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    PlusSignIcon as Plus,
    Note01Icon as Write,
    Folder01Icon as Folder,
    Image01Icon as Image
} from '@hugeicons/core-free-icons';

const fabCode = `import React, { useState } from 'react';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { label: 'New Post', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5" /><path d="M18.385 2.122a2.828 2.828 0 114 4L12.714 15.8a1 1 0 01-.393.287l-4.2 1.4a1 1 0 01-1.266-1.266l1.4-4.2a1 1 0 01.287-.393L18.385 2.122z" /></svg> },
    { label: 'Upload', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" /></svg> }
  ];

  return (
    <div className="fixed bottom-10 right-10 flex flex-col items-end gap-4">
      {isOpen && (
        <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4">
          {actions.map((action, i) => (
            <button key={i} className="flex items-center gap-3 group">
               <span className="bg-white px-3 py-1.5 rounded-lg shadow-xl text-xs font-black text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">{action.label}</span>
               <div className="w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors">
                  {action.icon}
               </div>
            </button>
          ))}
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={\`w-16 h-16 rounded-3xl bg-slate-900 text-white shadow-2xl flex items-center justify-center transition-all duration-500 \${isOpen ? 'rotate-45 bg-rose-600' : ''}\`}
      >
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v16m8-8H4" strokeWidth={2.5} /></svg>
      </button>
    </div>
  );
};

export default FloatingActionButton;`;

const FABPreview = () => {
    const [open, setOpen] = useState(false);

    const actions = [
        { label: 'Create Project', icon: Folder, color: 'emerald' },
        { label: 'Import Assets', icon: Image, color: 'indigo' },
        { label: 'Quick Note', icon: Write, color: 'amber' }
    ];

    return (
        <div className="w-full h-full flex items-end justify-center p-20 bg-slate-50 dark:bg-zinc-950 rounded-xl border border-slate-100 dark:border-zinc-800 relative overflow-hidden group/canvas transition-colors">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-xl shadow-sm p-2 overflow-hidden transition-colors">
                <div className="space-y-4 opacity-10">
                    <div className="h-8 w-full bg-slate-100 dark:bg-zinc-800 rounded-2xl" />
                    <div className="h-40 w-full bg-slate-100 dark:bg-zinc-800 rounded-[32px]" />
                    <div className="h-32 w-full bg-slate-100 dark:bg-zinc-800 rounded-[32px]" />
                </div>

                <div className="absolute bottom-6 right-6 flex flex-col items-end gap-3">
                    {open && (
                        <div className="flex flex-col items-end gap-2 mb-2">
                            {actions.map((a, i) => (
                                <button
                                    key={i}
                                    className="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300"
                                    style={{ transitionDelay: `${i * 50}ms` }}
                                >
                                    <span className="px-3 py-1 bg-slate-900/10 dark:bg-white/10 backdrop-blur-md rounded-xl text-[9px] font-black text-slate-900 dark:text-white uppercase tracking-widest leading-none transition-colors">
                                        {a.label}
                                    </span>
                                    <div className={`w-8 h-8 rounded-2xl bg-${a.color}-500 text-white shadow-lg flex items-center justify-center active:scale-90 transition-transform`}>
                                        <HugeiconsIcon icon={a.icon} size={18} />
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                    <button
                        onClick={() => setOpen(!open)}
                        className={`w-10 h-10 rounded-xl bg-emerald-800 text-white shadow-sm flex items-center justify-center transition-all duration-500 transform ${open ? 'rotate-[180deg] bg-rose-600' : 'hover:scale-110 active:scale-90'}`}
                    >
                        <HugeiconsIcon icon={Plus} size={28} />
                    </button>
                </div>
            </div>

            <div className="absolute top-10 right-10 flex items-center gap-2">
                <span className="text-[10px] font-black text-slate-300 dark:text-zinc-600 uppercase tracking-widest transition-colors">Action Pivot V1</span>
            </div>
        </div>
    );
};

export const FloatingActionButton = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(fabCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Floating Action Button</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">UX Polish</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A high-visibility primary action button with an expandable speed dial.
                    Perfect for mobile-first interfaces where key actions need to be accessible with one thumb.
                </p>
            </div>

            <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-colors duration-700">
                <div className="h-[600px] bg-[#f8fafc] dark:bg-zinc-950/50 relative flex items-center justify-center border-b border-slate-100 dark:border-zinc-800 overflow-hidden text-center transition-colors duration-700">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(var(--pattern-color, #e2e8f0) 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <style>{`
                        .dark .h-\\[600px\\] { --pattern-color: #3f3f46; }
                    `}</style>
                    <FABPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Speed Dial Effects</span>
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
                            {fabCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('import') ? 'text-emerald-400' :
                                            line.includes('isOpen') || line.includes('actions') ? 'text-amber-300' :
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
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 transition-colors">Mobile Optimization</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium leading-relaxed transition-colors">
                        FABs should be placed in the bottom right corner for <strong>right-hand thumb accessibility</strong>. Ensure there is enough vertical space for the menu to expand without covering other critical UI elements.
                    </p>
                </div>
            </div>
        </div>
    );
};
