import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    MouseIcon as Mouse,
    CursorIcon as Cursor
} from '@hugeicons/core-free-icons';

const tooltipCode = `import React, { useState } from 'react';

const Tooltip = ({ text, children, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  };

  const arrows = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-slate-900',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-slate-900',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-slate-900',
    right: 'right-full top-1/2 -translate-y-1/2 border-r-slate-900'
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={\`absolute z-50 whitespace-nowrap px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold rounded-lg shadow-xl animate-in fade-in zoom-in-95 duration-200 \${positions[position]}\`}>
          {text}
          <div className={\`absolute border-4 border-transparent \${arrows[position]}\`} />
        </div>
      )}
    </div>
  );
};

export default Tooltip;`;

const TooltipPreview = () => {
    return (
        <div className="w-full flex flex-col items-center gap-12 relative z-[100] transition-colors">
            <div className="grid grid-cols-2 gap-20 p-12 bg-white dark:bg-zinc-900 rounded-xl border border-slate-100 dark:border-zinc-800 shadow-2xl transition-colors">
                <div className="group relative">
                    <button className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
                        <HugeiconsIcon icon={Mouse} size={24} />
                    </button>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-zinc-900 text-[10px] font-black uppercase tracking-widest rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 pointer-events-none transition-colors">
                        Top Tooltip
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-slate-900 dark:border-t-white transition-colors" />
                    </div>
                </div>

                <div className="group relative">
                    <button className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all transition-colors">
                        <HugeiconsIcon icon={Cursor} size={24} />
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-4 py-2 bg-emerald-600 dark:bg-emerald-500 text-white dark:text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 transition-all duration-300 pointer-events-none transition-colors">
                        Bottom Info
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-b-emerald-600 dark:border-b-emerald-500 transition-colors" />
                    </div>
                </div>

                <div className="group relative">
                    <button className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-500 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all transition-colors">
                        <HugeiconsIcon icon={Styles} size={24} />
                    </button>
                    <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white dark:text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 pointer-events-none transition-colors">
                        Left Tip
                        <div className="absolute left-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-indigo-600 dark:border-l-indigo-500 transition-colors" />
                    </div>
                </div>

                <div className="group relative">
                    <button className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-500 border border-rose-100 dark:border-rose-500/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all transition-colors">
                        <HugeiconsIcon icon={Info} size={24} />
                    </button>
                    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-4 py-2 bg-rose-600 dark:bg-rose-500 text-white dark:text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300 pointer-events-none transition-colors">
                        Right Label
                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-rose-600 dark:border-r-rose-500 transition-colors" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Tooltips = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(tooltipCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Tooltips</h2>
                    <span className="bg-indigo-100 text-indigo-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">UX Polish</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    Informative floating labels that appear on hover. Essential for
                    UI clarity, providing context for icon-only buttons and complex controls.
                </p>
            </div>

            <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-colors duration-700">
                <div className="h-[450px] bg-[#f8fafc] dark:bg-zinc-950/50 relative flex items-center justify-center border-b border-slate-100 dark:border-zinc-800 overflow-hidden transition-colors duration-700">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(var(--pattern-color, #e2e8f0) 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <style>{`
                        .dark .h-\\[450px\\] { --pattern-color: #3f3f46; }
                    `}</style>
                    <TooltipPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Animation Modes</span>
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
                            {tooltipCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('import') ? 'text-emerald-400' :
                                            line.includes('text') || line.includes('position') ? 'text-amber-300' :
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
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 transition-colors">Accessibility Note</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium leading-relaxed transition-colors">
                        Always include <strong>aria-describedby</strong> attributes or <strong>role="tooltip"</strong> to ensure that assistive technologies can read tooltip content to users.
                    </p>
                </div>
            </div>
        </div>
    );
};
