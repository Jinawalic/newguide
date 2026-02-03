import { useState, useEffect } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const hotkeySupportSourceCode = `import React, { useState, useEffect } from 'react';

const HotkeySupport = () => {
  const [lastAction, setLastAction] = useState('Wait for hotkey...');

  useEffect(() => {
    const handleKeyDown = (e) => {
      // CMD/CTRL + S (Save)
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        setLastAction('Document Saved! (⌘S)');
      }
      
      // CMD/CTRL + F (Search)
      if ((e.metaKey || e.ctrlKey) && e.key === 'f') {
        e.preventDefault();
        setLastAction('Searching... (⌘F)');
      }

      // Escape (Cancel)
      if (e.key === 'Escape') {
        setLastAction('Action Cancelled (ESC)');
      }

      // ALT + P (Profile)
      if (e.altKey && e.key === 'p') {
        setLastAction('Navigating to Profile (⌥P)');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-zinc-950 rounded-[32px] border border-white/5 text-white">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
           </svg>
        </div>
        <div>
           <h4 className="text-sm font-bold">Hotkey Monitor</h4>
           <div className="flex items-center gap-1.5 mt-0.5">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Listening...</span>
           </div>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center mb-8">
        <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Last Action Triggered</p>
        <p className="text-xl font-black text-white tracking-tight">{lastAction}</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
         {[
           { label: 'Save', key: '⌘S' },
           { label: 'Find', key: '⌘F' },
           { label: 'Cancel', key: 'ESC' },
           { label: 'Profile', key: '⌥P' }
         ].map(hk => (
           <div key={hk.label} className="bg-white/5 p-3 rounded-xl border border-white/5 flex flex-col gap-2">
             <span className="text-[10px] font-bold text-zinc-500 uppercase">{hk.label}</span>
             <span className="text-sm font-black text-emerald-400">{hk.key}</span>
           </div>
         ))}
      </div>
    </div>
  );
};

export default HotkeySupport;`;

// --- THE PREVIEW COMPONENT ---
const HotkeyPreview = () => {
    const [lastAction, setLastAction] = useState('Idle');
    const [press, setPress] = useState<string | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 's') { e.preventDefault(); setLastAction('Save'); setPress('⌘S'); }
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setLastAction('Search'); setPress('⌘K'); }
            if (e.key === 'Escape') { setLastAction('Cancel'); setPress('ESC'); }
            setTimeout(() => setPress(null), 500);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="w-full max-w-sm mx-auto p-8 bg-zinc-950 rounded-[40px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] border border-white/10 relative z-[100] animate-in zoom-in-95 duration-500">
            <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest leading-none">Status</p>
                    <p className="text-white text-sm font-black tracking-tight mt-1">{lastAction}</p>
                </div>
            </div>

            <div className="h-24 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center mb-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                {press ? (
                    <div className="flex flex-col items-center animate-in zoom-in-50 duration-200">
                        <span className="px-5 py-2.5 bg-white text-zinc-950 rounded-2xl font-black text-xl shadow-xl shadow-emerald-500/20">{press}</span>
                        <span className="text-[10px] font-black text-emerald-400 mt-3 uppercase tracking-widest">Shortcut Triggered</span>
                    </div>
                ) : (
                    <p className="text-zinc-500 text-xs font-bold italic">Try pressing ⌘K or ⌘S</p>
                )}
            </div>

            <div className="space-y-2">
                {[
                    { label: 'Global Search', key: '⌘ K', color: 'emerald' },
                    { label: 'Quick Save', key: '⌘ S', color: 'blue' },
                    { label: 'Close Panel', key: 'ESC', color: 'rose' }
                ].map(hk => (
                    <div key={hk.label} className="flex items-center justify-between p-3.5 bg-white/[0.03] border border-white/[0.05] rounded-2xl hover:bg-white/[0.06] transition-all">
                        <span className="text-xs font-bold text-zinc-400">{hk.label}</span>
                        <span className="px-2.5 py-1 bg-white/10 rounded-lg text-[11px] font-black text-white">{hk.key}</span>
                    </div>
                ))}
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />
        </div>
    );
};

export const HotkeySupport = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(hotkeySupportSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 tracking-tight font-heading">Hotkey Support</h2>
                    <span className="bg-slate-900 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Efficiency</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">
                    Implement keyboard shortcuts to empower power users.
                    Reduces reliance on mouse movement and enables lightning-fast workflow execution.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[450px] bg-[#0f172a] relative flex items-center justify-center border-b border-slate-800 overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                    <HotkeyPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Conflict Resolver</span>
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
                            {hotkeySupportSourceCode.split('\n').map((line, i) => (
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Standardization</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Always include a "Help" modal listing all available hotkeys. Respect system defaults (avoid overriding browser-reserved combinations like Ctrl+T or Ctrl+W).
                    </p>
                </div>
            </div>
        </div>
    );
};
