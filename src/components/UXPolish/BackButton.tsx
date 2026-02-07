import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    ArrowLeft01Icon as ArrowLeft
} from '@hugeicons/core-free-icons';

const backButtonCode = `import React from 'react';

const BackButton = ({ label = 'Go Back', onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-bold text-sm"
    >
      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M11 17l-5-5m0 0l5-5m-5 5h12" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
      </div>
      <span className="uppercase tracking-widest text-[10px]">{label}</span>
    </button>
  );
};

export default BackButton;`;

const BackPreview = () => {
    return (
        <div className="w-full h-full flex items-center justify-center p-12 bg-white rounded-xl border border-slate-100 shadow-2xl relative z-[100] group/canvas">
            <div className="flex flex-col items-start gap-12 max-w-sm w-full">
                <button className="group flex items-center gap-4 transition-all active:scale-95">
                    <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/20 group-hover:-translate-x-2 transition-transform duration-500">
                        <HugeiconsIcon icon={ArrowLeft} size={20} />
                    </div>
                    <div className="flex flex-col items-start translate-x-0 group-hover:translate-x-2 transition-transform duration-500">
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.4em] mb-1">Return to</span>
                        <span className="text-sm font-black text-slate-900 tracking-tighter uppercase italic">Dashboard</span>
                    </div>
                </button>

                <div className="w-full h-px bg-slate-50" />

                <div className="flex gap-4">
                    {[1, 2].map(i => (
                        <button key={i} className="flex items-center gap-2 group/sm text-slate-400 hover:text-slate-900 transition-colors">
                            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover/sm:bg-emerald-500 group-hover/sm:text-white transition-all">
                                <HugeiconsIcon icon={ArrowLeft} size={14} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest">Previous Step</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="absolute top-10 left-10 text-[10px] font-black text-slate-200 uppercase tracking-widest">Navigation Primitives</div>
        </div>
    );
};

export const BackButton = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(backButtonCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Back Button</h2>
                    <span className="bg-rose-100 text-rose-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">UX Polish</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A contextual navigation component that provides clear exit paths.
                    Uses motion to emphasize directionality, ensuring users feel in control of their journey.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[500px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <BackPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Exit Animations</span>
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
                            {backButtonCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('return') ? 'text-purple-400' :
                                            line.includes('label') || line.includes('onClick') ? 'text-amber-300' :
                                                line.includes('const') || line.includes('function') ? 'text-emerald-400' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Navigation Clarity</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Avoid using ambiguous icons like a plain small arrow. A <strong>descriptive label</strong> alongside the icon significantly reduces cognitive load.
                    </p>
                </div>
            </div>
        </div>
    );
};
