import { useState, useRef } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const resizableSourceCode = `import React, { useState, useRef, useEffect } from 'react';

const ResizablePanels = () => {
  const [leftWidth, setLeftWidth] = useState(300);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const startResizing = (e) => {
    isDragging.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', stopResizing);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newWidth = e.clientX - containerRect.left;
    if (newWidth > 100 && newWidth < 800) {
      setLeftWidth(newWidth);
    }
  };

  const stopResizing = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
  };

  return (
    <div ref={containerRef} className="flex h-[500px] border border-slate-200 rounded-2xl overflow-hidden bg-white">
      <div style={{ width: leftWidth }} className="bg-slate-50 p-6 flex-shrink-0">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">Sidebar</h3>
        <p className="text-xs text-slate-500 leading-relaxed font-medium">Resize me by dragging the handle on the right.</p>
      </div>
      
      <div 
        onMouseDown={startResizing}
        className="w-1 bg-slate-200 hover:bg-blue-500 cursor-col-resize transition-colors relative"
      >
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 12h.01M12 12h.01M16 12h.01" />
            </svg>
         </div>
      </div>

      <div className="flex-1 p-8">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">Main Content</h3>
        <p className="text-xs text-slate-500 leading-relaxed font-medium">This panel automatically occupies the remaining space.</p>
      </div>
    </div>
  );
};

export default ResizablePanels;`;

// --- THE PREVIEW COMPONENT ---
const ResizablePreview = () => {
    const [leftWidth, setLeftWidth] = useState(240);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const onMouseDown = () => {
        isDragging.current = true;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!isDragging.current || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const newWidth = e.clientX - rect.left;
        if (newWidth > 80 && newWidth < 450) {
            setLeftWidth(newWidth);
        }
    };

    const onMouseUp = () => {
        isDragging.current = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

    return (
        <div className="w-full h-full flex items-center justify-center p-8 bg-slate-50 dark:bg-zinc-950/20 rounded-xl border border-slate-200 dark:border-zinc-800 relative z-[100] transition-colors">
            <div
                ref={containerRef}
                className="w-full max-w-2xl h-80 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl overflow-hidden flex shadow-2xl shadow-slate-900/10 transition-colors"
            >
                <div style={{ width: leftWidth }} className="flex-shrink-0 bg-slate-50 dark:bg-zinc-800/50 p-6 flex flex-col border-r border-slate-100 dark:border-zinc-800 transition-colors">
                    <div className="flex items-center gap-2 mb-6 opacity-30">
                        <div className="w-6 h-6 rounded-lg bg-slate-900 dark:bg-zinc-100" />
                        <div className="w-16 h-2 bg-slate-900 dark:bg-zinc-100 rounded-full" />
                    </div>
                    <div className="space-y-4">
                        <div className="h-4 w-full bg-slate-200 dark:bg-zinc-700 rounded-lg animate-pulse" />
                        <div className="h-4 w-3/4 bg-slate-200 dark:bg-zinc-700 rounded-lg animate-pulse" />
                        <div className="h-4 w-5/6 bg-slate-200 dark:bg-zinc-700 rounded-lg animate-pulse" />
                    </div>
                </div>

                <div
                    onMouseDown={onMouseDown}
                    className="w-1 bg-slate-100 dark:bg-zinc-800 hover:bg-emerald-500 dark:hover:bg-emerald-500 cursor-col-resize transition-colors relative z-10 group"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-10 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-500/10 transition-all opacity-0 group-hover:opacity-100 delay-75">
                        <div className="flex flex-col gap-1">
                            <div className="w-0.5 h-0.5 rounded-full bg-slate-300 dark:bg-zinc-600" />
                            <div className="w-0.5 h-0.5 rounded-full bg-slate-300 dark:bg-zinc-600" />
                            <div className="w-0.5 h-0.5 rounded-full bg-slate-300 dark:bg-zinc-600" />
                        </div>
                    </div>
                </div>

                <div className="flex-1 p-8 space-y-6 transition-colors">
                    <div className="flex items-center justify-between">
                        <div className="h-6 w-32 bg-slate-100 dark:bg-zinc-800 rounded-full animate-pulse" />
                        <div className="flex gap-2">
                            <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-zinc-800 animate-pulse" />
                            <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-zinc-800 animate-pulse" />
                        </div>
                    </div>
                    <div className="h-32 w-full bg-slate-50 dark:bg-zinc-800/20 rounded-[28px] border border-dashed border-slate-200 dark:border-zinc-700 animate-pulse transition-colors" />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-12 bg-slate-50 dark:bg-zinc-800/40 rounded-2xl animate-pulse transition-colors" />
                        <div className="h-12 bg-slate-50 dark:bg-zinc-800/40 rounded-2xl animate-pulse transition-colors" />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 mb-3 left-10 flex flex-col items-start gap-1">
                <span className="text-[10px] font-black text-slate-300 dark:text-zinc-700 uppercase tracking-widest transition-colors">Panel Width</span>
                <span className="text-xl font-bold text-emerald-500 dark:text-emerald-400 tracking-tighter transition-colors">{Math.round(leftWidth)}px</span>
            </div>
        </div>
    );
};

export const ResizablePanels = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(resizableSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Resizable Panels</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Utility</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    Dynamic layout partitions that users can adjust manually.
                    Perfect for dashboards, IDE-style editors, or complex multi-view applications.
                </p>
            </div>

            <div className="border border-slate-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-950 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-colors duration-700">
                <div className="h-[500px] bg-[#f8fafc] dark:bg-zinc-950/50 relative p-4 border-b border-slate-100 dark:border-zinc-800 overflow-hidden transition-colors duration-700">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(var(--pattern-color, #e2e8f0) 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <style>{`
                        .dark .h-\\[500px\\] { --pattern-color: #3f3f46; }
                    `}</style>
                    <ResizablePreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Handle Aesthetics</span>
                        </button>
                    </div>
                    <div className="flex items-center gap-6 text-slate-400">
                        <button
                            onClick={handleCopy}
                            className={`flex items-center gap-2 font-bold text-xs transition-all ${copied ? 'text-emerald-600' : 'hover:text-slate-900 dark:hover:text-white text-slate-500 dark:text-zinc-400'}`}
                        >
                            <HugeiconsIcon icon={copied ? Tick : Copy} size={16} />
                            <span>{copied ? 'Copied' : 'Copy code'}</span>
                        </button>
                    </div>
                </div>

                <div className="bg-[#0f172a] p-8 overflow-auto max-h-[500px] custom-scrollbar text-white">
                    <pre className="text-[13px] font-mono leading-relaxed group">
                        <code className="text-slate-200">
                            {resizableSourceCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('import') ? 'text-emerald-400' :
                                            line.includes('Width') || line.includes('ClientRect') ? 'text-amber-300' :
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
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 transition-colors">Implementation Note</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium leading-relaxed transition-colors">
                        Ensure you handle <strong>iframes</strong> and <strong>text selection</strong> correctly during resize. Adding a temporary overlay or setting <code>user-select: none</code> on <code>document.body</code> improves the experience.
                    </p>
                </div>
            </div>
        </div>
    );
};
