import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    Share01Icon as Share,
    LinkedinIcon,
    TwitterIcon,
    FacebookIcon,
    Mail01Icon as Mail
} from '@hugeicons/core-free-icons';

const shareButtonCode = `import React, { useState } from 'react';

const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const platforms = [
    { name: 'LinkedIn', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
    ) },
    { name: 'Twitter', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
    ) }
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-full text-sm font-bold shadow-lg"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" strokeWidth={2} /></svg>
        Share Content
      </button>

      {isOpen && (
        <div className="absolute top-full mt-4 left-0 w-48 bg-white border border-slate-100 rounded-3xl shadow-2xl p-2 z-50">
           {platforms.map((p, idx) => (
             <button key={idx} className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-slate-50 transition-colors text-slate-600">
                {p.icon}
                <span className="text-sm font-bold">{p.name}</span>
             </button>
           ))}
        </div>
      )}
    </div>
  );
};

export default ShareButton;`;

const SharePreview = () => {
    const [open, setOpen] = useState(false);

    const apps = [
        { name: 'LinkedIn', icon: LinkedinIcon, color: 'blue' },
        { name: 'Twitter', icon: TwitterIcon, color: 'slate' },
        { name: 'Facebook', icon: FacebookIcon, color: 'indigo' },
        { name: 'Email Link', icon: Mail, color: 'emerald' }
    ];

    return (
        <div className="w-full flex flex-col items-center justify-center relative z-[100] h-full mb-[190px]">
            <div className="relative">
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-4 px-4 py-2 bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 rounded-full shadow-sm dark:shadow-black/50 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] hover:-translate-y-2 active:scale-95 transition-all duration-500 group"
                >
                    <div className="w-7 h-7 rounded-[22px] bg-slate-900 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-zinc-900 group-hover:rotate-[360deg] transition-transform duration-1000">
                        <HugeiconsIcon icon={Share} size={18} />
                    </div>
                    <span className="text-sm font-black text-slate-900 dark:text-zinc-100 capitalize tracking-widest leading-none transition-colors">Share</span>
                </button>

                {open && (
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-80 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-xl shadow-xl dark:shadow-black/50 p-2 z-[110] animate-in fade-in slide-in-from-top-6 duration-500 transition-colors">
                        <div className="p-4 mb-2">
                            <p className="text-[10px] font-bold text-slate-300 dark:text-zinc-600 uppercase tracking-[0.4em] mb-6 text-center transition-colors">Select Channel</p>
                            <div className="grid grid-cols-2 gap-3">
                                {apps.map((app, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setOpen(false)}
                                        className="flex flex-col items-center gap-3 px-4 py-2 rounded-[32px] transition-all group/app"
                                    >
                                        <div className={`w-9 h-9 rounded-2xl bg-${app.color}-50 dark:bg-${app.color}-500/10 flex items-center justify-center text-${app.color}-600 dark:text-${app.color}-400 group-hover/app:scale-110 group-hover/app:bg-${app.color}-600 dark:group-hover/app:bg-${app.color}-500 group-hover/app:text-white transition-all duration-300`}>
                                            <HugeiconsIcon icon={app.icon} size={18} />
                                        </div>
                                        <span className="text-[10px] font-black text-slate-600 dark:text-zinc-400 uppercase tracking-tight transition-colors">{app.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="bg-slate-50 dark:bg-zinc-800/50 rounded-xl p-2 flex items-center gap-3 transition-colors">
                            <div className="p-2 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-transparent dark:border-zinc-700 transition-colors"><HugeiconsIcon icon={Copy} size={16} className="text-slate-400 dark:text-zinc-500" /></div>
                            <span className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest flex-1 transition-colors">ekonty.tech/blog...</span>
                            <button className="text-[9px] font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest pr-2 transition-colors">Copy</button>
                        </div>
                    </div>
                )}
            </div>
            {open && <div className="fixed inset-0 z-[105]" onClick={() => setOpen(false)} />}
        </div>
    );
};

export const ShareButton = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(shareButtonCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Share Button</h2>
                    <span className="bg-indigo-100 text-indigo-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Growth</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A comprehensive social sharing utility. Supports native browser share API
                    integrated with a custom modal fallback for desktop browsers.
                </p>
            </div>

            <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-colors duration-700">
                <div className="h-[550px] bg-[#f8fafc] dark:bg-zinc-950/50 relative flex items-center justify-center border-b border-slate-100 dark:border-zinc-800 overflow-hidden transition-colors duration-700">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(var(--pattern-color, #e2e8f0) 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <style>{`
                        .dark .h-\\[550px\\] { --pattern-color: #3f3f46; }
                    `}</style>
                    <SharePreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Modal Themes</span>
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
                            {shareButtonCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('import') ? 'text-emerald-400' :
                                            line.includes('platforms') ? 'text-amber-300' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Modern Best Practice</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Where possible, use <strong>navigator.share()</strong> for a true native experience on mobile devices. Custom modals should served as a fallback for browsers that don't support it.
                    </p>
                </div>
            </div>
        </div>
    );
};
