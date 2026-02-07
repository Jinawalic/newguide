import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    CheckmarkCircle01Icon as Check,
    Clock01Icon as Pending,
    Cancel01Icon as Cancelled,
    DeliveryTruck01Icon as Shipped
} from '@hugeicons/core-free-icons';

const statusBadgeCode = `import React from 'react';

const StatusBadge = ({ status = 'pending' }) => {
  const configs = {
    paid: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-100', icon: (
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" /></svg>
    ) },
    pending: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-100', icon: (
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8v4l3 3" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" /></svg>
    ) },
    shipped: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-100', icon: (
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011 1v2a1 1 0 01-1 1h-1m-4 0H4a1 1 0 01-1-1v-2a1 1 0 011-1" strokeWidth={2} /></svg>
    ) },
    failed: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-100', icon: (
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" /></svg>
    ) }
  };

  const config = configs[status];

  return (
    <div className={\`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest \${config.bg} \${config.text} \${config.border}\`}>
      {config.icon}
      {status}
    </div>
  );
};

export default StatusBadge;`;

const StatusBadgePreview = () => {
    const statuses = [
        { id: 'paid', label: 'Payment Received', icon: Check, color: 'emerald' },
        { id: 'pending', label: 'Under Review', icon: Pending, color: 'amber' },
        { id: 'shipped', label: 'Out for Delivery', icon: Shipped, color: 'blue' },
        { id: 'failed', label: 'Transaction Failed', icon: Cancelled, color: 'rose' }
    ];

    return (
        <div className="w-full flex flex-col items-center gap-4 relative z-[100]">
            <div className="grid grid-cols-2 gap-4">
                {statuses.map((s, i) => (
                    <div key={i} className="bg-white p-3 rounded-xl border border-slate-100 shadow-xl shadow-slate-900/5 flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300">
                        <div className={`w-9 h-9 rounded-2xl bg-${s.color}-50 flex items-center justify-center text-${s.color}-600 mb-4 group-hover:scale-110 transition-transform`}>
                            <HugeiconsIcon icon={s.icon} size={24} />
                        </div>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 bg-${s.color}-50 text-${s.color}-700 border border-${s.color}-100 rounded-full text-[10px] font-black capitalize tracking-[0.2em] mb-2`}>
                            {s.id}
                        </div>
                        <p className="text-[11px] font-bold text-slate-400 capitalize tracking-widest leading-none">{s.label}</p>
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-2 opacity-30 mt-4">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">Order Flow States</span>
            </div>
        </div>
    );
};

export const StatusBadge = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(statusBadgeCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Status Badge</h2>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Workflow</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    Dynamic indicators for business processes and transactional states.
                    Uses semantic colors to communicate progress and outcomes instantly.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[450px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <StatusBadgePreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Visual Density</span>
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
                            {statusBadgeCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('Paid') || line.includes('Paid') ? 'text-emerald-400' :
                                            line.includes('const') || line.includes('export') ? 'text-blue-400' :
                                                line.includes('return') ? 'text-purple-400' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Design Guideline</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Limit the number of statuses to 5-7 distinct types. Too many status colors can overwhelm users and lead to communication fatigue.
                    </p>
                </div>
            </div>
        </div>
    );
};
