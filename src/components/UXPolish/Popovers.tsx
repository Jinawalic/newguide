import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    Settings01Icon as SettingsGear,
    Notification01Icon as Bell,
    CheckmarkCircle01Icon as Check
} from '@hugeicons/core-free-icons';

const popoverCode = `import React, { useState } from 'react';

const Popover = ({ content, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {children}
      </div>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
             {content}
             <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-slate-200 rotate-45" />
          </div>
        </>
      )}
    </div>
  );
};

export default Popover;`;

const PopoverPreview = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full flex flex-col items-center justify-center relative z-[100] h-full mb-[100px] transition-colors">
            <div className="relative">
                <button
                    onClick={() => setOpen(!open)}
                    className="w-14 h-14 rounded-[24px] bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 shadow-sm flex items-center justify-center text-slate-900 dark:text-white hover:scale-105 active:scale-95 transition-all group"
                >
                    <HugeiconsIcon icon={SettingsGear} size={28} className="group-hover:rotate-90 transition-transform duration-500" />
                </button>

                {open && (
                    <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-80 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-xl shadow-sm p-6 z-[110] animate-in fade-in slide-in-from-top-6 duration-500 transition-colors">
                        <div className="mb-6 text-left">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest leading-none mb-1">Quick Settings</h4>
                            <p className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">Update preferences</p>
                        </div>

                        <div className="space-y-3">
                            {[
                                { label: 'Push Notifications', icon: Bell, active: true },
                                { label: 'Auto Saving', icon: Check, active: false }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-zinc-950 border border-slate-100 dark:border-zinc-800 rounded-2xl transition-colors">
                                    <div className="flex items-center gap-3">
                                        <HugeiconsIcon icon={item.icon} size={16} className="text-slate-400 dark:text-zinc-600" />
                                        <span className="text-[11px] font-bold text-slate-700 dark:text-zinc-300 uppercase tracking-tight">{item.label}</span>
                                    </div>
                                    <div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${item.active ? 'bg-emerald-500' : 'bg-slate-200 dark:bg-zinc-800'}`}>
                                        <div className={`w-3 h-3 bg-white dark:bg-zinc-400 rounded-full transition-transform ${item.active ? 'translate-x-4' : 'translate-x-0'}`} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full h-10 bg-slate-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl text-[10px] font-black uppercase tracking-widest mt-6 shadow-xl shadow-slate-900/10 dark:shadow-black/20 hover:bg-zinc-800 dark:hover:bg-white transition-all">
                            Save Changes
                        </button>
                    </div>
                )}
            </div>
            {open && <div className="fixed inset-0 z-[105]" onClick={() => setOpen(false)} />}
        </div>
    );
};

export const Popovers = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(popoverCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Popovers</h2>
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">UX Polish</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    Rich content overlays that appear on click. Unlike tooltips,
                    popovers can contain interactive elements like switches, buttons, and forms.
                </p>
            </div>

            <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-colors duration-700">
                <div className="h-[550px] bg-[#f8fafc] dark:bg-zinc-950/50 relative flex items-center justify-center border-b border-slate-100 dark:border-zinc-800 overflow-hidden mb-5 transition-colors duration-700">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(var(--pattern-color, #e2e8f0) 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <style>{`
                        .dark .h-\\[550px\\] { --pattern-color: #3f3f46; }
                    `}</style>
                    <PopoverPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Dismiss Logic</span>
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
                            {popoverCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('import') ? 'text-emerald-400' :
                                            line.includes('isOpen') || line.includes('content') ? 'text-amber-300' :
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
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 transition-colors">UX Pattern</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium leading-relaxed transition-colors">
                        Popovers should follow the <strong>"Outside Click to Dismiss"</strong> pattern. Adding a subtle backdrop or shadow helps separate the popover from the background content.
                    </p>
                </div>
            </div>
        </div>
    );
};
