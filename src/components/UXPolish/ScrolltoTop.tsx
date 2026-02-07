import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    ArrowUp01Icon as ArrowUp
} from '@hugeicons/core-free-icons';

const scrollToTopCode = `import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-50 animate-in fade-in slide-in-from-bottom-4"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path d="M5 11l7-7m0 0l7 7m-7-7v14" />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;`;

const ScrollPreview = () => {
    const [scrolled, setScrolled] = useState(false);

    return (
        <div className="w-full flex flex-col items-center gap-10 relative z-[100]">
            <div className="w-full max-w-sm bg-white p-6 rounded-[44px] border border-slate-100 shadow-2xl relative overflow-hidden h-96 flex flex-col group">
                <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6" onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 50)}>
                    <div className="h-10 w-32 bg-slate-900 rounded-xl mb-8" />
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <div key={i} className="space-y-3">
                            <div className="h-4 w-full bg-slate-100 rounded-full" />
                            <div className="h-4 w-2/3 bg-slate-50 rounded-full" />
                        </div>
                    ))}
                </div>

                {scrolled && (
                    <button
                        onClick={() => { }}
                        className="absolute bottom-6 right-6 w-14 h-14 bg-emerald-500 text-white rounded-3xl shadow-2xl shadow-emerald-500/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all animate-in fade-in slide-in-from-bottom-4 duration-500"
                    >
                        <HugeiconsIcon icon={ArrowUp} size={24} />
                    </button>
                )}
            </div>

            <div className="flex flex-col items-center gap-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Scroll inside the box</p>
                <div className="w-1 h-6 bg-slate-200 rounded-full relative overflow-hidden">
                    <div className="absolute inset-x-0 h-1/2 bg-slate-900 animate-bounce" />
                </div>
            </div>
        </div>
    );
};

export const ScrollToTop = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(scrollToTopCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Scroll to Top</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">UX Polish</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A navigation utility that appears only when needed.
                    Helps users return to the beginning of long pages with a single click, improving site navigation efficiency.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[550px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <ScrollPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Progress Curve</span>
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
                            {scrollToTopCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('window') ? 'text-emerald-400' :
                                            line.includes('isVisible') || line.includes('toggleVisibility') ? 'text-amber-300' :
                                                line.includes('return') || line.includes('useEffect') ? 'text-purple-400' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Smooth Scrolling</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Always use <code>behavior: 'smooth'</code> for scroll actions. It provides a more natural feel compared to the default jumpy behavior.
                    </p>
                </div>
            </div>
        </div>
    );
};
