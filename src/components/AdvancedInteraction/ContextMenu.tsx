import React, { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const contextMenuSourceCode = `import React, { useState, useEffect, useCallback } from 'react';

const ContextMenu = () => {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = useCallback((e) => {
    e.preventDefault();
    setShow(true);
    setPosition({ x: e.pageX, y: e.pageY });
  }, []);

  const handleClick = useCallback(() => {
    setShow(false);
  }, []);

  useEffect(() => {
    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('click', handleClick);
    };
  }, [handleContextMenu, handleClick]);

  if (!show) return null;

  return (
    <div 
      className="fixed z-[100] w-64 bg-white border border-slate-100 rounded-2xl shadow-2xl py-2 animate-in zoom-in-95 duration-200"
      style={{ top: position.y, left: position.x }}
    >
      <div className="px-2 space-y-0.5">
        <button className="w-full flex items-center justify-between px-3 py-2 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 rounded-xl transition-all group">
          <div className="flex items-center gap-3">
             <svg className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
             </svg>
             <span className="text-sm font-bold">Edit Item</span>
          </div>
          <span className="text-[10px] text-slate-400 font-bold uppercase">⌘E</span>
        </button>
        
        <button className="w-full flex items-center justify-between px-3 py-2 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 rounded-xl transition-all group">
          <div className="flex items-center gap-3">
             <svg className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
             </svg>
             <span className="text-sm font-bold">Duplicate</span>
          </div>
          <span className="text-[10px] text-slate-400 font-bold uppercase">⌘D</span>
        </button>

        <div className="h-px bg-slate-100 my-1 mx-2" />

        <button className="w-full flex items-center justify-between px-3 py-2 hover:bg-rose-50 text-slate-700 hover:text-rose-600 rounded-xl transition-all group">
          <div className="flex items-center gap-3">
             <svg className="w-4 h-4 text-slate-400 group-hover:text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
             </svg>
             <span className="text-sm font-bold">Move to Trash</span>
          </div>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest whitespace-nowrap">DEL</span>
        </button>
      </div>
    </div>
  );
};

export default ContextMenu;`;

// --- THE PREVIEW COMPONENT ---
const ContextMenuPreview = () => {
    const [show, setShow] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setShow(true);
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <div
            className="w-full h-full flex flex-col items-center justify-center relative cursor-default group"
            onContextMenu={handleContextMenu}
            onClick={() => setShow(false)}
        >
            <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl flex items-center justify-center mx-auto border border-slate-100 dark:border-zinc-800 group-hover:scale-110 transition-all duration-500">
                    <svg className="w-10 h-10 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M18.757 17.243l-1.591-1.591m-6.25 2.098c-1.135-.694-2.526-1.077-4.058-1.077a6.731 6.731 0 0 0-3.133.772m3.133-3.046c-1.61 0-3.086.622-4.185 1.638m1.23-1.011a6.733 6.733 0 0 1 2.955-1.127m3.974 5.07c.049.52.072 1.047.072 1.575 0 1.133-.105 2.24-.307 3.313m0-11.13a6.733 6.733 0 0 1 4.625-2.483" />
                    </svg>
                </div>
                <div>
                    <p className="text-sm font-black text-slate-800 dark:text-zinc-200 tracking-tight uppercase transition-colors">Right-click here</p>
                    <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-bold uppercase tracking-widest mt-1 transition-colors">To trigger context menu</p>
                </div>
            </div>

            {show && (
                <div
                    className="absolute z-[110] w-56 bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-slate-100 dark:border-zinc-800 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-black/50 py-2 animate-in zoom-in-95 duration-200 transition-colors"
                    style={{ top: position.y, left: position.x }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="px-1.5 space-y-0.5">
                        {['Edit Item', 'Duplicate', 'Share Link', 'Archive'].map((item, idx) => (
                            <React.Fragment key={item}>
                                {idx === 3 && <div className="h-px bg-slate-100 dark:bg-zinc-800 my-1.5 mx-2" />}
                                <button className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-[12px] font-bold transition-all
                                    ${idx === 3 ? 'hover:bg-rose-50 dark:hover:bg-rose-500/10 text-rose-600 dark:text-rose-400' : 'hover:bg-emerald-50 dark:hover:bg-emerald-500/10 text-slate-700 dark:text-zinc-300 hover:text-emerald-800 dark:hover:text-emerald-400'}
                                `}>
                                    {item}
                                    <span className="text-[9px] text-slate-400 dark:text-zinc-600 font-black opacity-0 group-hover:opacity-100">
                                        {['⌘E', '⌘D', '⌘S', 'DEL'][idx]}
                                    </span>
                                </button>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export const ContextMenu = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(contextMenuSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Context Menu</h2>
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">UX Polish</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    Replace generic browser menus with custom, app-specific context menus.
                    Perfect for data grids, file managers, and rich canvas interfaces.
                </p>
            </div>

            <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-colors duration-700">
                <div className="h-[400px] bg-[#f8fafc] dark:bg-zinc-950/50 relative overflow-hidden border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(var(--pattern-color, #e2e8f0) 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <style>{`
                        .dark .h-\\[400px\\] { --pattern-color: #3f3f46; }
                    `}</style>
                    <ContextMenuPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Interaction Mode</span>
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
                            {contextMenuSourceCode.split('\n').map((line, i) => (
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Positioning Logic</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        This implementation uses <strong>e.pageX</strong> and <strong>e.pageY</strong> for positioning. For production, you should add logic to ensure the menu doesn't overflow the viewport edges.
                    </p>
                </div>
            </div>
        </div>
    );
};
