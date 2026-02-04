import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const donutChartSourceCode = `import React from 'react';

const DonutChart = ({ data = [
  { label: 'Direct', value: 400, color: '#10b981' },
  { label: 'Referral', value: 300, color: '#3b82f6' },
  { label: 'Social', value: 300, color: '#f59e0b' }
] }) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  let cumulativeValue = 0;

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative w-48 h-48">
        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
          {data.map((item, i) => {
            const startAngle = (cumulativeValue / total) * 360;
            const percentage = (item.value / total) * 100;
            cumulativeValue += item.value;
            
            return (
              <circle
                key={i}
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke={item.color}
                strokeWidth="20"
                strokeDasharray={\`\${percentage} \${100 - percentage}\`}
                strokeDashoffset={-startAngle / 3.6}
                pathLength="100"
                className="transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            );
          })}
          <circle cx="50" cy="50" r="30" fill="white" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
           <span className="text-xl font-black text-slate-800">{total}</span>
           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-xs font-bold text-slate-600">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;`;

// --- THE PREVIEW COMPONENT ---
const DonutChartPreview = () => {
    const data = [
        { label: 'Mobile', value: 65, color: '#10b981' },
        { label: 'Desktop', value: 25, color: '#3b82f6' },
        { label: 'Tablet', value: 10, color: '#f59e0b' }
    ];

    return (
        <div className="w-full max-w-sm mx-auto p-10 bg-white rounded-[40px] shadow-2xl shadow-slate-900/10 border border-slate-100 flex flex-col items-center relative z-[100]">
            <div className="relative group w-48 h-48 mb-8">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="40" stroke="#f1f5f9" strokeWidth="18" fill="none" />
                    {data.map((item, i) => {
                        let offset = 0;
                        for (let j = 0; j < i; j++) offset += data[j].value;
                        return (
                            <circle
                                key={i}
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke={item.color}
                                strokeWidth="18"
                                strokeDasharray={`${item.value} ${100 - item.value}`}
                                strokeDashoffset={-offset}
                                pathLength="100"
                                className="transition-all duration-500 hover:opacity-80"
                            />
                        );
                    })}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black text-slate-900">1.2k</span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Visitors</span>
                </div>
            </div>

            <div className="grid grid-cols-1 w-full gap-2">
                {data.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-[12px] font-bold text-slate-600">{item.label}</span>
                        </div>
                        <span className="text-[12px] font-black text-slate-900">{item.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const DonutChart = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(donutChartSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight font-heading">Donut Chart</h2>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Analytics</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">
                    A variation of the pie chart with a blank center.
                    Uses SVG circular segments with path lengths and stroke-dash metrics for rendering.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[500px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <DonutChartPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Legend Spacing</span>
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
                            {donutChartSourceCode.split('\n').map((line, i) => (
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Visual Design Tip</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Don't exceed 5-6 categories in a single donut chart as it becomes difficult to interpret. Use legends to label small segments that might not fit text.
                    </p>
                </div>
            </div>
        </div>
    );
};
