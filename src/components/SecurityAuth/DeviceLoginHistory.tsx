import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    SmartPhone01Icon as Phone,
    DashboardSquare01Icon as Desktop,
    MapPinIcon as Location,
    Cancel01Icon as Remove,
    CheckmarkCircle01Icon as Verified
} from '@hugeicons/core-free-icons';

const loginHistoryCode = `import React from 'react';

const DeviceHistory = ({ sessions, onRevoke }) => {
  return (
    <div className="space-y-4">
      {sessions.map((session, i) => (
        <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
               {session.type === 'mobile' ? <PhoneSVG /> : <DesktopSVG />}
            </div>
            <div>
              <h4 className="font-bold text-sm">{session.browser} on {session.os}</h4>
              <p className="text-xs text-slate-500">{session.location} • {session.lastActive}</p>
            </div>
          </div>
          {session.isCurrent ? (
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">Current Session</span>
          ) : (
            <button onClick={() => onRevoke(session.id)} className="text-xs font-bold text-slate-400 hover:text-rose-600">Revoke</button>
          )}
        </div>
      ))}
    </div>
  );
};

const PhoneSVG = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const DesktopSVG = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default DeviceHistory;`;

const HistoryPreview = () => {
    const [sessions, setSessions] = useState([
        { id: 1, browser: 'Chrome', os: 'macOS', location: 'San Francisco, US', lastActive: 'Active now', type: 'desktop', isCurrent: true },
        { id: 2, browser: 'Safari', os: 'iPhone 15 Pro', location: 'London, UK', lastActive: '2 hours ago', type: 'mobile', isCurrent: false },
        { id: 3, browser: 'Firefox', os: 'Windows 11', location: 'Berlin, DE', lastActive: '3 days ago', type: 'desktop', isCurrent: false }
    ]);

    const handleRevoke = (id: number) => {
        setSessions(prev => prev.filter(s => s.id !== id));
    };

    return (
        <div className="w-full flex flex-col items-center gap-10 relative z-[100]">
            <div className="w-full max-w-lg bg-white dark:bg-zinc-900/50 backdrop-blur-md p-10 rounded-xl border border-slate-100 dark:border-zinc-800 shadow-sm relative group overflow-hidden transition-colors duration-700">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h3 className="text-base font-black text-slate-900 dark:text-white tracking-tight leading-none mb-2 uppercase transition-colors">Device History</h3>
                        <p className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest leading-none transition-colors">Manage active sessions</p>
                    </div>
                    <button className="px-5 py-2.5 bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-rose-100 dark:hover:bg-rose-500/20 transition-colors">Terminate All</button>
                </div>

                <div className="space-y-4">
                    {sessions.map((session) => (
                        <div key={session.id} className={`group/item flex items-center justify-between px-5 py-4 rounded-xl border transition-all duration-500 ${session.isCurrent ? 'bg-indigo-50/30 dark:bg-indigo-500/10 border-indigo-100 dark:border-indigo-500/20' : 'bg-slate-50/50 dark:bg-zinc-800/30 border-slate-100 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-xl'}`}>
                            <div className="flex items-center gap-5">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover/item:scale-110 ${session.isCurrent ? 'bg-indigo-500 text-white shadow-sm shadow-indigo-500/20' : 'bg-white dark:bg-zinc-800 text-slate-400 dark:text-zinc-500 shadow-sm border border-slate-100 dark:border-zinc-800 transition-colors'}`}>
                                    <HugeiconsIcon icon={session.type === 'mobile' ? Phone : Desktop} size={24} />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <h4 className="text-sm font-black text-slate-900 dark:text-zinc-100 uppercase tracking-tight transition-colors">{session.browser} on {session.os}</h4>
                                        {session.isCurrent && (
                                            <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500 text-white rounded-full">
                                                <HugeiconsIcon icon={Verified} size={8} strokeWidth={3} />
                                                <span className="text-[7px] font-black uppercase tracking-[0.2em]">Active</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-400 dark:text-zinc-500">
                                        <div className="flex items-center gap-1">
                                            <HugeiconsIcon icon={Location} size={10} />
                                            <span className="text-[9px] font-bold uppercase tracking-widest">{session.location}</span>
                                        </div>
                                        <span className="text-slate-200 dark:text-zinc-800">|</span>
                                        <span className="text-[9px] font-bold uppercase tracking-widest">{session.lastActive}</span>
                                    </div>
                                </div>
                            </div>

                            {!session.isCurrent && (
                                <button
                                    onClick={() => handleRevoke(session.id)}
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 dark:text-zinc-600 hover:bg-rose-50 dark:hover:bg-rose-500/10 hover:text-rose-600 dark:hover:text-rose-400 transition-all opacity-0 group-hover/item:opacity-100"
                                >
                                    <HugeiconsIcon icon={Remove} size={18} />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const DeviceLoginHistory = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(loginHistoryCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Device Login History</h2>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Security</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A transparency interface for account activity. Allows users to
                    monitor active sessions across different browsers and locations, providing remote revocation capabilities.
                </p>
            </div>

            <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-colors duration-700">
                <div className="h-[650px] bg-[#f8fafc] dark:bg-zinc-950/50 relative flex items-center justify-center border-b border-slate-100 dark:border-zinc-800 overflow-hidden transition-colors duration-700">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(var(--pattern-color, #e2e8f0) 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <style>{`
                        .dark .h-\\[650px\\] { --pattern-color: #3f3f46; }
                    `}</style>
                    <HistoryPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Geo-IP Engine</span>
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
                            {loginHistoryCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('session') ? 'text-emerald-400' :
                                            line.includes('browser') || line.includes('location') ? 'text-amber-300' :
                                                line.includes('return') || line.includes('map') ? 'text-purple-400' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">User Trust</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Always include a <strong>"Logout from all other devices"</strong> option. This is the fastest way for a user to secure their account if they suspect a credential leak.
                    </p>
                </div>
            </div>
        </div>
    );
};
