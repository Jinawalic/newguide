import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    Wifi01Icon as WifiOnline,
    WifiOffIcon as WifiOffline,
    Time01Icon as Away
} from '@hugeicons/core-free-icons';

const statusIndicatorCode = `import React from 'react';

const StatusIndicator = ({ status = 'online', showLabel = true }) => {
  const configs = {
    online: { color: 'bg-emerald-500', shadow: 'shadow-emerald-500/50', label: 'Online' },
    offline: { color: 'bg-slate-400', shadow: 'shadow-slate-400/50', label: 'Offline' },
    away: { color: 'bg-amber-500', shadow: 'shadow-amber-500/50', label: 'Away' },
    busy: { color: 'bg-rose-500', shadow: 'shadow-rose-500/50', label: 'Do not disturb' }
  };

  const config = configs[status];

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex h-2 w-2">
        <span className={\`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 \${config.color}\`}></span>
        <span className={\`relative inline-flex rounded-full h-2 w-2 shadow-lg \${config.color} \${config.shadow}\`}></span>
      </div>
      {showLabel && (
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
          {config.label}
        </span>
      )}
    </div>
  );
};

export default StatusIndicator;`;

const StatusPreview = () => {
    const statuses = [
        { key: 'online', name: 'Active Now', icon: WifiOnline, color: 'emerald' },
        { key: 'away', name: 'Idle - 5m', icon: Away, color: 'amber' },
        { key: 'busy', name: 'In Meeting', icon: Info, color: 'rose' },
        { key: 'offline', name: 'Last seen 2h', icon: WifiOffline, color: 'slate' }
    ];

    return (
        <div className="w-full h-full flex items-center justify-center p-8 bg-slate-50 dark:bg-zinc-950/20 rounded-xl border border-slate-200 dark:border-zinc-800 relative z-[100] overflow-hidden transition-colors">
            <div className="flex flex-col gap-4 w-full max-w-sm">
                {statuses.map((s, i) => (
                    <div key={i} className="bg-white dark:bg-zinc-900 px-4 py-2 rounded-xl border border-slate-100 dark:border-zinc-800 shadow-xl shadow-slate-900/5 dark:shadow-black/20 flex items-center justify-between group hover:-translate-x-1 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="w-10 h-10 bg-slate-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-slate-400 dark:text-zinc-600 transition-colors">
                                    <HugeiconsIcon icon={s.icon} size={24} />
                                </div>
                                <div className={`absolute -bottom-1 -right-1 w-4 h-4 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center border-2 border-white dark:border-zinc-900 transition-colors`}>
                                    <div className={`w-2 h-2 rounded-full bg-${s.color}-500 ${s.key === 'online' ? 'animate-pulse' : ''}`} />
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-900 dark:text-white tracking-tight uppercase leading-none mb-1 transition-colors">{s.name}</p>
                                <p className={`text-[10px] font-bold text-${s.color}-500 uppercase tracking-widest transition-colors`}>{s.key}</p>
                            </div>
                        </div>
                        <div className="flex gap-1 opacity-50">
                            <div className="w-1 h-1 rounded-full bg-slate-200 dark:bg-zinc-700" />
                            <div className="w-1 h-1 rounded-full bg-slate-200 dark:bg-zinc-700" />
                            <div className="w-1 h-1 rounded-full bg-slate-200 dark:bg-zinc-700" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute top-10 left-10 transform -rotate-12">
                <div className="bg-slate-900 dark:bg-zinc-800 text-white dark:text-zinc-100 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl transition-colors">Presence Sync</div>
            </div>
        </div>
    );
};

export const OnlineOfflineStatus = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(statusIndicatorCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Online Status Indicator</h2>
                    <span className="bg-rose-100 text-rose-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Presence</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    Dynamic connectivity markers used to surface user availability. Includes support
                    for multiple states (Online, Away, Busy, Offline) with subtle ping animations.
                </p>
            </div>

            <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-colors duration-700">
                <div className="h-[550px] bg-[#f8fafc] dark:bg-zinc-950/50 relative flex items-center justify-center border-b border-slate-100 dark:border-zinc-800 overflow-hidden transition-colors duration-700">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(var(--pattern-color, #e2e8f0) 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <style>{`
                        .dark .h-\\[550px\\] { --pattern-color: #3f3f46; }
                    `}</style>
                    <StatusPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Animation Speeds</span>
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
                            {statusIndicatorCode.split('\n').map((line, i) => (
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

            <div className="mt-8 flex items-start gap-3 p-4 bg-slate-50 dark:bg-zinc-900/50 rounded-2xl border border-slate-100 dark:border-zinc-800 transition-colors">
                <div className="text-emerald-600 dark:text-emerald-400 mt-0.5 transition-colors">
                    <HugeiconsIcon icon={Info} size={20} />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 transition-colors">Privacy Insight</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium leading-relaxed transition-colors">
                        Always provide users with an option to <strong>"Appear Offline"</strong> or disable presence sharing entirely. Real-time tracking can be a sensitive concern for some users.
                    </p>
                </div>
            </div>
        </div>
    );
};
