import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const masonrySourceCode = `import React from 'react';

const MasonryGrid = ({ items, columns = 3 }) => {
  return (
    <div className={\`grid grid-cols-1 md:grid-cols-\${columns} gap-6\`}>
      {Array.from({ length: columns }).map((_, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-6">
          {items.filter((_, i) => i % columns === colIndex).map((item, i) => (
            <div key={i} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
               {item.image && <img src={item.image} alt="" className="w-full h-auto" />}
               <div className="p-6">
                  <h4 className="text-sm font-black text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.content}</p>
               </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;`;

// --- THE PREVIEW COMPONENT ---
const MasonryPreview = () => {
    const columns = 2;
    const items = [
        { h: 'h-48', c: 'emerald', t: 'Visual Branding', d: 'Design guidelines for the next decade.' },
        { h: 'h-64', c: 'blue', t: 'System Arch', d: 'The backbone of our distributed cloud.' },
        { h: 'h-32', c: 'rose', t: 'UX Audit', d: 'Weekly reviews.' },
        { h: 'h-72', c: 'amber', t: 'Product Strategy', d: 'Looking beyond the current roadmap and planning for future expansion.' },
        { h: 'h-40', c: 'purple', t: 'Data Viz', d: 'Making information beautiful and understandable.' }
    ];

    return (
        <div className="w-full h-full flex items-center justify-center p-8 bg-slate-50 rounded-xl border border-slate-200 relative z-[100] overflow-y-auto custom-scrollbar">
            <div className={`grid grid-cols-${columns} gap-6 w-full max-w-2xl`}>
                {Array.from({ length: columns }).map((_, colIdx) => (
                    <div key={colIdx} className="flex flex-col gap-3">
                        {items.slice(colIdx * 3, (colIdx + 1) * 3).map((item, i) => (
                            <div key={i} className="bg-white rounded-xl border border-slate-100 shadow-xl shadow-slate-900/5 overflow-hidden group hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                                <div className={`${item.h} bg-${item.c}-50 flex items-center justify-center text-${item.c}-600/20 group-hover:scale-105 transition-transform duration-700`}>
                                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>
                                <div className="p-6">
                                    <div className={`w-8 h-1 bg-${item.c}-500 rounded-full mb-4`} />
                                    <h4 className="text-[13px] font-black text-slate-900 tracking-tight uppercase mb-2">{item.t}</h4>
                                    <p className="text-[11px] font-bold text-slate-400 leading-relaxed">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </div>
    );
};

export const MasonryGrid = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(masonrySourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Masonry Grid</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Growth</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A multi-column layout that avoids gaps between items of different heights.
                    Commonly used for Pinterest-style boards, image galleries, and social feeds.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[600px] bg-[#f8fafc] relative p-4 border-b border-slate-100 overflow-hidden">
                    <MasonryPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Gutter Spacing</span>
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
                            {masonrySourceCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('import') ? 'text-emerald-400' :
                                            line.includes('filter') || line.includes('map') ? 'text-amber-300' :
                                                line.includes('return') || line.includes('const') ? 'text-purple-400' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Architecture Tip</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        While CSS columns are easiest to implement, using a multi-column flex approach (as shown in the code) allows for <strong>ordering items correctly</strong> (Left to Right, then Top to Bottom) across columns.
                    </p>
                </div>
            </div>
        </div>
    );
};
