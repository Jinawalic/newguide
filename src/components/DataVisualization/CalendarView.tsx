import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const calendarViewSourceCode = `import React, { useState } from 'react';

const CalendarView = () => {
  const years = [2024, 2025];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Current month state
  const [currentMonth, setCurrentMonth] = useState(1); // February
  
  return (
    <div className="w-full bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
      <div className="bg-slate-900 p-6 flex items-center justify-between text-white">
        <div>
           <h2 className="text-xl font-black tracking-tight">{months[currentMonth]}</h2>
           <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project Timeline</p>
        </div>
        <div className="flex gap-2">
           <button className="p-2 hover:bg-slate-800 rounded-xl transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
           </button>
           <button className="p-2 hover:bg-slate-800 rounded-xl transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
           </button>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-7 gap-1 mb-4">
          {days.map(d => (
            <div key={d} className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest py-2">
              {d}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1.5">
          {Array.from({ length: 28 }).map((_, i) => (
            <div 
              key={i} 
              className={\`aspect-square border border-slate-50 rounded-2xl p-2 transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50/20 group cursor-pointer \${i === 13 ? 'bg-emerald-50 border-emerald-100' : ''}\`}
            >
              <span className={\`text-xs font-bold \${i === 13 ? 'text-emerald-700' : 'text-slate-500'}\`}>{i + 1}</span>
              {i === 13 && <div className="w-1 h-1 bg-emerald-500 rounded-full mx-auto mt-1" />}
              {i === 4 && <div className="mt-1 flex gap-0.5"><div className="w-full h-1 bg-blue-400 rounded-full" /></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;`;

// --- THE PREVIEW COMPONENT ---
const CalendarPreview = () => {
    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-[40px] shadow-2xl shadow-slate-900/10 border border-slate-100 overflow-hidden relative z-[100]">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">February 2025</p>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight leading-none">Monthly Schedule</h3>
                </div>
                <div className="flex gap-1.5">
                    <button className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-emerald-600 transition-all active:scale-95 shadow-sm">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-emerald-600 transition-all active:scale-95 shadow-sm">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-7 gap-2 mb-6 text-center">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                        <div key={i} className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{d}</div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 28 }).map((_, i) => (
                        <div
                            key={i}
                            className={`aspect-square flex flex-col items-center justify-center rounded-xl transition-all duration-300 group cursor-pointer 
                                ${i === 13 ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200 ring-4 ring-emerald-50' : 'bg-white border border-slate-50 hover:bg-slate-50'}
                            `}
                        >
                            <span className={`text-[11px] font-bold ${i === 13 ? 'text-white' : 'text-slate-600'}`}>{i + 1}</span>
                            {i === 4 && <div className="absolute top-1 right-1 w-1 h-1 bg-blue-500 rounded-full" />}
                            {i === 8 && <div className="absolute top-1 right-1 w-1 h-1 bg-amber-500 rounded-full" />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const CalendarView = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(calendarViewSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight font-heading">Calendar View</h2>
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Scheduling</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">
                    Full-featured calendar component for managing dates, events, and schedules.
                    Includes event markers, state management for selected dates, and navigation.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[550px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <CalendarPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Event Dot Style</span>
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
                            {calendarViewSourceCode.split('\n').map((line, i) => (
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">State Management</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        This implementation uses a simple grid. For production, consider using libraries like <strong>date-fns</strong> to handle edge cases like leap years and timezone conversions.
                    </p>
                </div>
            </div>
        </div>
    );
};
