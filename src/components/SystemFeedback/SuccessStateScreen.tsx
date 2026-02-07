import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const successStateSourceCode = `import React from 'react';

const SuccessScreen = ({ title, message, onDone }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 bg-white rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-emerald-50/50 -z-10" />
      
      <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-emerald-500/30 mb-8 animate-in zoom-in duration-500">
         <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
         </svg>
      </div>

      <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-2">{title}</h2>
      <p className="max-w-xs text-slate-400 font-bold text-[13px] leading-relaxed mb-10">{message}</p>
      
      <button 
        onClick={onDone}
        className="w-full max-w-[240px] h-12 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl active:scale-95 transition-all"
      >
        Continue to Feed
      </button>
    </div>
  );
};

export default SuccessScreen;`;

// --- THE PREVIEW COMPONENT ---
const SuccessStatePreview = () => {
    return (
        <div className="w-full max-w-sm mx-auto p-12 bg-white rounded-xl shadow-sm shadow-slate-900/10 border border-slate-100 text-center relative z-[100] animate-in zoom-in-95 duration-500">
            <div className="relative mb-6 flex justify-center">
                <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white relative z-10 transition-transform hover:scale-110">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
            </div>

            <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-3">All Set!</h3>
            <p className="text-[13px] text-slate-400 font-bold leading-relaxed mb-10 max-w-[200px] mx-auto">Your configuration has been updated successfully. Everything is running smoothly.</p>

            <div className="space-y-3">
                <button className="w-full h-12 bg-emerald-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl active:scale-[0.98] transition-all">Go to Workspace</button>
                <button className="w-full h-12 bg-white text-slate-400 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all border border-slate-50">View Details</button>
            </div>

            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-[60px]" />
        </div>
    );
};

export const SuccessStateScreen = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(successStateSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Success State Screen</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Delight</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    Final confirmation screens that reward users for completing a multi-step task or significant action.
                    Uses bold typography and celebratory micro-animations to enhance the UX.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[600px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <SuccessStatePreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Vfx Intensity</span>
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
                            {successStateSourceCode.split('\n').map((line, i) => (
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Dopamine Hack</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Success screens are the perfect place to add subtle delightful animations or confetti. It rewards the user for their effort and makes the product feel "premium".
                    </p>
                </div>
            </div>
        </div>
    );
};
