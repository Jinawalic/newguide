import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const lineChartSourceCode = `import React from 'react';

const LineChart = ({ points = [20, 45, 28, 65, 50, 80, 40] }) => {
  const width = 400;
  const height = 150;
  const max = Math.max(...points);
  
  const path = points.map((p, i) => {
    const x = (i / (points.length - 1)) * width;
    const y = height - (p / max) * height;
    return \`\${i === 0 ? 'M' : 'L'} \${x} \${y}\`;
  }).join(' ');

  return (
    <div className="w-full bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest">Revenue Growth</h4>
        <div className="flex items-center gap-1 text-emerald-600">
           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
           </svg>
           <span className="text-xs font-black">+24%</span>
        </div>
      </div>
      
      <div className="relative">
        <svg viewBox={\`0 0 \${width} \${height}\`} className="w-full h-auto overflow-visible">
          <path
            d={path}
            fill="none"
            stroke="#10b981"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ strokeDasharray: 1000, strokeDashoffset: 1000, animation: 'draw 2s forwards' }}
          />
          <style>{\`
            @keyframes draw { to { strokeDashoffset: 0; } }
          \`}</style>
          {points.map((p, i) => (
            <circle
              key={i}
              cx={(i / (points.length - 1)) * width}
              cy={height - (p / max) * height}
              r="4"
              fill="white"
              stroke="#10b981"
              strokeWidth="2"
              className="hover:r-6 cursor-pointer transition-all"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default LineChart;`;

// --- THE PREVIEW COMPONENT ---
const LineChartPreview = () => {
    const points = [15, 30, 25, 45, 40, 60, 55, 80, 75, 95];
    const width = 400;
    const height = 120;
    const max = 100;

    const pathData = points.map((p, i) => {
        const x = (i / (points.length - 1)) * width;
        const y = height - (p / max) * height;
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');

    const areaData = `${pathData} L ${width} ${height} L 0 ${height} Z`;

    return (
        <div className="w-full max-w-sm mx-auto p-10 bg-white rounded-xl shadow-2xl shadow-slate-900/10 border border-slate-100 relative z-[100]">
            <div className="mb-10">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Weekly Trends</p>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">Analytics</h3>
            </div>

            <div className="h-32 mb-6">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path d={areaData} fill="url(#gradient)" className="animate-in fade-in duration-1000" />
                    <path
                        d={pathData}
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="animate-in slide-in-from-left duration-1000"
                    />
                    {points.map((p, i) => (
                        i % 3 === 0 && (
                            <circle
                                key={i}
                                cx={(i / (points.length - 1)) * width}
                                cy={height - (p / max) * height}
                                r="4"
                                fill="white"
                                stroke="#3b82f6"
                                strokeWidth="2.5"
                                className="animate-in zoom-in duration-500"
                            />
                        )
                    ))}
                </svg>
            </div>

            <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
            </div>
        </div>
    );
};

export const LineChart = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(lineChartSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Line Chart</h2>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Trends</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    Dynamic line charts for visualizing data over time.
                    Built with pure SVG path commands for high performance and full CSS customizability.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[450px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <LineChartPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Curve Tension</span>
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
                            {lineChartSourceCode.split('\n').map((line, i) => (
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Path Optimization</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        This example uses <strong>linear interpolations</strong> (M and L commands). For smooth curves, replace these with <strong>C (Bézier curves)</strong> commands.
                    </p>
                </div>
            </div>
        </div>
    );
};
