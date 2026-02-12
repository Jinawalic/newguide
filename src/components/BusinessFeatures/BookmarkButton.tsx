import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    FavouriteIcon as Bookmark
} from '@hugeicons/core-free-icons';

const bookmarkButtonCode = `import React, { useState } from 'react';

const BookmarkButton = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <button 
      onClick={() => setIsBookmarked(!isBookmarked)}
      className={\`group flex items-center gap-2 px-4 py-2 rounded-xl transition-all \${
        isBookmarked 
          ? 'bg-amber-50 text-amber-600 border border-amber-200' 
          : 'bg-white text-slate-400 border border-slate-200 hover:border-slate-300'
      }\`}
    >
      <svg 
        className={\`w-5 h-5 \${isBookmarked ? 'fill-current' : 'fill-none'}\`} 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={2}
      >
        <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
      </svg>
      <span className="text-xs font-black uppercase tracking-widest">
        {isBookmarked ? 'Saved' : 'Save for later'}
      </span>
    </button>
  );
};

export default BookmarkButton;`;

const BookmarkPreview = () => {
    const [bookmarked, setBookmarked] = useState(false);

    return (
        <div className="w-full flex flex-col items-center gap-8 relative z-[100]">
            <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-4 rounded-xl shadow-2xl dark:shadow-black/50 flex flex-col items-center transition-colors">
                <div className="w-8 h-8 p-4 rounded-3xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center text-slate-300 dark:text-zinc-600 mb-8 border border-slate-100 dark:border-zinc-800 italic font-black text-sm transition-colors">
                    Ag
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 tracking-tight text-center mb-5 transition-colors">
                    The Future of Agentic Workflows
                </h3>

                <button
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`group relative flex items-center gap-4 px-8 py-2 rounded-[32px] transition-all duration-500 overflow-hidden ${bookmarked
                        ? 'bg-slate-900 dark:bg-zinc-100 text-amber-400 dark:text-amber-600 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]'
                        : 'bg-white dark:bg-zinc-900 text-slate-400 dark:text-zinc-500 border border-slate-300 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800/50'
                        } active:scale-95`}
                >
                    <div className={`transition-transform duration-500 ${bookmarked ? 'scale-125 rotate-[360deg]' : ''}`}>
                        <HugeiconsIcon icon={Bookmark} size={18} className={bookmarked ? 'fill-current' : ''} />
                    </div>
                    <span className="text-[11px] font-black capitalize tracking-[0.2em]">
                        {bookmarked ? 'Bookmark Saved' : 'Add to Collection'}
                    </span>

                    {bookmarked && (
                        <div className="absolute inset-0 bg-white/5 pointer-events-none animate-in fade-in duration-500" />
                    )}
                </button>
            </div>
        </div>
    );
};

export const BookmarkButton = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(bookmarkButtonCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Bookmark Button</h2>
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Utility</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A toggleable bookmark component that persists state.
                    Optimized for content-heavy applications where users need to save resources for later.
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
                    <BookmarkPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Animation Presets</span>
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
                            {bookmarkButtonCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('import') ? 'text-emerald-400' :
                                            line.includes('isBookmarked') ? 'text-amber-300' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">State Persistence</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Always include a loading state if connecting to an API. Users should receive visual confirmation (like a spinner or color change) immediately after clicking.
                    </p>
                </div>
            </div>
        </div>
    );
};
