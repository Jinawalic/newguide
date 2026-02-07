import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const errorStateSourceCode = `import React from 'react';

const ErrorState = ({ code = '404', title = 'Page not found', description = 'The page you are looking for doesn\\'t exist.', onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 bg-white rounded-[48px] border border-slate-100 shadow-sm overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-rose-300 to-rose-500 opacity-20" />
      
      <div className="relative mb-8">
        <h1 className="text-[120px] font-black text-rose-500/10 leading-none">{code}</h1>
        <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-20 h-20 bg-rose-50 rounded-[32px] flex items-center justify-center text-rose-500 shadow-xl shadow-rose-900/5 rotate-12">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
             </div>
        </div>
      </div>

      <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-2">{title}</h2>
      <p className="max-w-xs text-slate-400 font-bold text-[13px] leading-relaxed mb-10">{description}</p>
      
      <div className="flex flex-col gap-3 w-full max-w-[200px]">
        <button 
          onClick={onRetry}
          className="h-12 bg-rose-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-rose-900/10 hover:bg-rose-700 transition-all active:scale-95"
        >
          Try Again
        </button>
        <button className="h-12 bg-slate-50 text-slate-400 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ErrorState;`;

// --- THE PREVIEW COMPONENT ---
const ErrorStatePreview = () => {
    return (
        <div className="w-full max-w-sm mx-auto p-12 bg-white rounded-xl shadow-sm shadow-slate-900/10 border border-slate-100 text-center relative z-[100] animate-in zoom-in-95 duration-500">
            <div className="relative mb-10 flex justify-center">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center opacity-[0.03]">
                    <span className="text-[150px] font-black text-rose-900 leading-none">500</span>
                </div>
                <div className="w-12 h-12 bg-rose-50 rounded-[32px] flex items-center justify-center text-rose-500 shadow-xl shadow-rose-900/5 rotate-12 relative z-10 transition-transform duration-700 hover:rotate-0">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
            </div>

            <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-3">Server Malfunction</h3>
            <p className="text-[13px] text-slate-400 font-bold leading-relaxed mb-10 max-w-[240px] mx-auto">Something went wrong on our end. Our engineering team has been notified and is on it.</p>

            <div className="flex flex-col gap-3">
                <button className="h-12 bg-rose-600 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-rose-900/20 active:scale-[0.98] transition-all">Reload Page</button>
                <button className="h-12 bg-slate-50 text-slate-400 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-[0.98]">System Status</button>
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-500/5 rounded-full blur-[60px]" />
        </div>
    );
};

export const ErrorStatePage = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(errorStateSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Error State Page</h2>
                    <span className="bg-rose-100 text-rose-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">UX Polish</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    Dedicated screen designs for handling 404, 500, or network connection errors.
                    Reduces user frustration by providing clear explanations and recovery paths.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[600px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <ErrorStatePreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Error Variants</span>
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
                            {errorStateSourceCode.split('\n').map((line, i) => (
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Humanizing Errors</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Avoid technical jargon (like "Uncaught Type Error") in the user-facing UI. Use friendly, empathetic language and always provide a "Go Back" or "Try Again" option.
                    </p>
                </div>
            </div>
        </div>
    );
};
