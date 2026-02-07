import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const barChartSourceCode = `import React from 'react';

const BarChart = ({ data = [
  { label: 'Jan', value: 45 },
  { label: 'Feb', value: 52 },
  { label: 'Mar', value: 38 },
  { label: 'Apr', value: 65 },
  { label: 'May', value: 48 },
  { label: 'Jun', value: 72 }
] }) => {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="w-full bg-white p-6 rounded-3xl border border-slate-100">
      <div className="flex items-end justify-between h-48 gap-2">
        {data.map((item, i) => (
          <div key={i} className="flex-1 flex flex-col items-center group">
            <div 
              style={{ height: \`\${(item.value / maxValue) * 100}%\` }}
              className="w-full max-w-[40px] bg-emerald-500 rounded-t-xl transition-all duration-500 group-hover:bg-emerald-600 relative"
            >
               <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                 {item.value}
               </div>
            </div>
            <span className="text-[10px] font-black text-slate-400 mt-4 uppercase tracking-widest">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;`;

// --- THE PREVIEW COMPONENT ---
const BarChartPreview = () => {
    const data = [
        { label: 'Mon', value: 32 },
        { label: 'Tue', value: 45 },
        { label: 'Wed', value: 58 },
        { label: 'Thu', value: 92 },
        { label: 'Fri', value: 75 },
        { label: 'Sat', value: 42 },
        { label: 'Sun', value: 28 }
    ];
    const maxValue = 100;

    return (
        <div className="w-full max-w-sm mx-auto p-10 bg-white rounded-xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border border-slate-100 relative z-[100]">
            <div className="flex items-center justify-between mb-10">
                <div>
                    <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">User Engagement</h4>
                    <p className="text-xl font-black text-slate-900 tracking-tight">Daily Traffic</p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                </div>
            </div>

            <div className="flex items-end justify-between h-40 gap-3">
                {data.map((item, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center group">
                        <div
                            style={{ height: `${(item.value / maxValue) * 100}%` }}
                            className={`w-full bg-emerald-500 rounded-t-xl transition-all duration-700 delay-[${i * 100}ms] group-hover:bg-emerald-600 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] relative`}
                        />
                        <span className="text-[10px] font-black text-slate-300 mt-3 group-hover:text-emerald-500 transition-colors">{item.label}</span>
                    </div>
                ))}
            </div>

            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl" />
        </div>
    );
};

export const BarChart = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(barChartSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Interactive Bar Chart</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Growth</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    Standard bar chart for comparing discrete categories.
                    Uses pure Tailwind CSS for height mapping and transitions, no heavy charting libraries required.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[500px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <BarChartPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Animation Modes</span>
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
                            {barChartSourceCode.split('\n').map((line, i) => (
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Scale Calculation</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        This implementation calculates height based on <strong>Math.max()</strong> of the dataset. For multiple charts that need shared scaling, use a fixed "maxBound" property.
                    </p>
                </div>
            </div>
        </div>
    );
};
