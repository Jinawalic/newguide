import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const heatmapSourceCode = `import React from 'react';

const Heatmap = ({ data, rows = 7, cols = 12 }) => {
  // Mock data generation if none provided
  const grid = data || Array.from({ length: rows * cols }, () => Math.floor(Math.random() * 100));

  const getColor = (val) => {
    if (val === 0) return 'bg-slate-50';
    if (val < 25) return 'bg-emerald-50';
    if (val < 50) return 'bg-emerald-200';
    if (val < 75) return 'bg-emerald-400';
    return 'bg-emerald-600';
  };

  return (
    <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm overflow-x-auto">
      <div 
        className="grid gap-1.5"
        style={{ gridTemplateColumns: \`repeat(\${cols}, minmax(14px, 1fr))\` }}
      >
        {grid.map((val, i) => (
          <div
            key={i}
            className={\`w-3.5 h-3.5 rounded-sm transition-all duration-300 hover:scale-125 hover:z-10 cursor-pointer \${getColor(val)}\`}
            title={\`Value: \${val}\`}
          />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
         <span>Less</span>
         <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-sm bg-slate-50" />
            <div className="w-2.5 h-2.5 rounded-sm bg-emerald-50" />
            <div className="w-2.5 h-2.5 rounded-sm bg-emerald-200" />
            <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
            <div className="w-2.5 h-2.5 rounded-sm bg-emerald-600" />
         </div>
         <span>More</span>
      </div>
    </div>
  );
};

export default Heatmap;`;

// --- THE PREVIEW COMPONENT ---
const HeatmapPreview = () => {
    const grid = [
        10, 45, 20, 80, 5, 30, 90, 15, 60, 25, 100, 40, 70, 50, 20, 35, 85, 12, 55, 30,
        15, 65, 30, 95, 10, 40, 80, 25, 75, 45, 20, 55, 90, 35, 60, 25, 10, 85, 40, 70,
        20, 50, 40, 70, 15, 60, 35, 90, 25, 80, 10, 45, 65, 30, 95, 20, 55, 40, 75, 15,
        30, 85, 25, 60, 40, 90, 15, 70, 20, 55, 10, 45, 80, 35, 65, 25, 95, 20, 50, 40,
        45, 20, 80, 5, 30, 90, 15, 60, 25, 100, 40, 70, 50, 20, 35, 85, 12, 55, 30, 15,
        65, 30, 95, 10, 40, 80, 25, 75, 45, 20, 55, 90, 35, 60, 25, 10, 85, 40, 70, 20,
        50, 40, 70, 15, 60, 35, 90, 25, 80, 10, 45, 65, 30, 95, 20, 55, 40, 75, 15, 30
    ];

    const getColorClass = (val: number) => {
        if (val < 20) return 'bg-slate-50';
        if (val < 40) return 'bg-emerald-100/50';
        if (val < 60) return 'bg-emerald-300/80';
        if (val < 80) return 'bg-emerald-500';
        return 'bg-emerald-700 shadow-lg shadow-emerald-200';
    };

    return (
        <div className="w-full max-w-sm mx-auto p-10 bg-white rounded-[40px] shadow-2xl shadow-slate-900/10 border border-slate-100 relative z-[100]">
            <div className="mb-8">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Commit History</h4>
                <p className="text-xl font-black text-slate-900 tracking-tight">Active Contributions</p>
            </div>

            <div className="grid grid-cols-20 gap-1.5 mb-8">
                {grid.map((val, i) => (
                    <div
                        key={i}
                        className={`aspect-square rounded-sm transition-all duration-300 hover:ring-2 hover:ring-emerald-500 hover:scale-150 hover:z-10 cursor-crosshair ${getColorClass(val)}`}
                    />
                ))}
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Nov</span>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Dec</span>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Jan</span>
                </div>
                <div className="flex items-center gap-1.5 opacity-60">
                    <div className="w-2 h-2 rounded-sm bg-slate-50" />
                    <div className="w-2 h-2 rounded-sm bg-emerald-100" />
                    <div className="w-2 h-2 rounded-sm bg-emerald-300" />
                    <div className="w-2 h-2 rounded-sm bg-emerald-500" />
                    <div className="w-2 h-2 rounded-sm bg-emerald-700" />
                </div>
            </div>

            <style>{`
                .grid-cols-20 { grid-template-columns: repeat(20, minmax(0, 1fr)); }
            `}</style>
        </div>
    );
};

export const Heatmap = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(heatmapSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight font-heading">Data Heatmap</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Performance</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">
                    Visualize data density across two dimensions. Commonly used for contribution graphs,
                    server load monitoring, and user activity patterns.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[450px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <HeatmapPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Intensity Mapping</span>
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
                            {heatmapSourceCode.split('\n').map((line, i) => (
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Grid System</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Uses CSS Grid for the layout. For very large datasets, consider using <strong>HTML5 Canvas</strong> to avoid excessive DOM nodes and improve rendering performance.
                    </p>
                </div>
            </div>
        </div>
    );
};
