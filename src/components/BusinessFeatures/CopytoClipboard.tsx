import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    Link01Icon as LinkIcon
} from '@hugeicons/core-free-icons';

const copyToClipboardCode = `import React, { useState } from 'react';

const CopyToClipboard = ({ value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={\`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all \${
        copied 
          ? 'bg-emerald-50 text-emerald-600 border-emerald-200' 
          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
      }\`}
    >
      {copied ? (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
           <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
           <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      <span className="text-xs font-bold uppercase tracking-widest">
        {copied ? 'Copied' : 'Copy link'}
      </span>
    </button>
  );
};

export default CopyToClipboard;`;

const CopyPreview = () => {
    const [copied, setCopied] = useState(false);
    const link = "https://ekonty.design/v1/auth/token_93x2";

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full flex flex-col items-center gap-8 relative z-[100]">
            <div className="w-full max-w-sm bg-white px-8 py-4 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group">
                <div className="mb-8">
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4">API Endpoint</p>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 relative group/box">
                        <div className="flex items-center gap-3 mb-2">
                            <HugeiconsIcon icon={LinkIcon} size={16} className="text-blue-500" />
                            <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none">Access Link</span>
                        </div>
                        <p className="text-xs font-bold text-slate-400 truncate pr-10">{link}</p>

                        <button
                            onClick={handleCopy}
                            className={`absolute top-1/2 -translate-y-1/2 right-4 w-8 h-8 rounded-2xl flex items-center justify-center transition-all duration-500 ${copied ? 'bg-emerald-500 text-white scale-110 shadow-lg shadow-emerald-500/30' : 'bg-white text-slate-400 border border-slate-100 hover:text-slate-900'
                                }`}
                        >
                            <HugeiconsIcon icon={copied ? Tick : Copy} size={20} />
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100" />
                        ))}
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Shared with 12 others</span>
                </div>

                {copied && (
                    <div className="absolute inset-x-0 bottom-0 bg-emerald-500 py-3 text-center animate-in slide-in-from-bottom-full duration-500">
                        <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Successfully Copied!</span>
                    </div>
                )}
            </div>

            <div className="flex gap-2 opacity-20 transform rotate-12">
                <div className="w-8 h-2 bg-slate-900 rounded-full" />
                <div className="w-2 h-2 bg-slate-900 rounded-full" />
            </div>
        </div>
    );
};

export const CopyToClipboard = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(copyToClipboardCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Copy to Clipboard</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Utility</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A streamlined copy utility with immediate visual confirmation.
                    Reduces friction in workflows involving links, tokens, or configuration strings.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[450px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <CopyPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Confirm Animation</span>
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
                            {copyToClipboardCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('import') ? 'text-emerald-400' :
                                            line.includes('navigator') ? 'text-amber-300' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Confirmation UX</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Visual feedback should last between <strong>1.5 to 3 seconds</strong>. Any shorter might be missed, and any longer might interfere with subsequent interactions.
                    </p>
                </div>
            </div>
        </div>
    );
};
