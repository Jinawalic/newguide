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
            <div className="w-full max-w-lg bg-white p-10 rounded-xl border border-slate-100 shadow-sm relative group overflow-hidden">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h3 className="text-base font-black text-slate-900 tracking-tight leading-none mb-2 uppercase">Device History</h3>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Manage active sessions</p>
                    </div>
                    <button className="px-5 py-2.5 bg-rose-50 text-rose-600 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-rose-100 transition-colors">Terminate All</button>
                </div>

                <div className="space-y-4">
                    {sessions.map((session) => (
                        <div key={session.id} className={`group/item flex items-center justify-between px-5 py-4 rounded-xl border transition-all duration-500 ${session.isCurrent ? 'bg-indigo-50/30 border-indigo-100' : 'bg-slate-50/50 border-slate-100 hover:bg-white hover:shadow-xl'}`}>
                            <div className="flex items-center gap-5">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover/item:scale-110 ${session.isCurrent ? 'bg-indigo-500 text-white shadow-sm shadow-indigo-500/20' : 'bg-white text-slate-400 shadow-sm border border-slate-100'}`}>
                                    <HugeiconsIcon icon={session.type === 'mobile' ? Phone : Desktop} size={24} />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{session.browser} on {session.os}</h4>
                                        {session.isCurrent && (
                                            <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500 text-white rounded-full">
                                                <HugeiconsIcon icon={Verified} size={8} strokeWidth={3} />
                                                <span className="text-[7px] font-black uppercase tracking-[0.2em]">Active</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-400">
                                        <div className="flex items-center gap-1">
                                            <HugeiconsIcon icon={Location} size={10} />
                                            <span className="text-[9px] font-bold uppercase tracking-widest">{session.location}</span>
                                        </div>
                                        <span className="text-slate-200">|</span>
                                        <span className="text-[9px] font-bold uppercase tracking-widest">{session.lastActive}</span>
                                    </div>
                                </div>
                            </div>

                            {!session.isCurrent && (
                                <button
                                    onClick={() => handleRevoke(session.id)}
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:bg-rose-50 hover:text-rose-600 transition-all opacity-0 group-hover/item:opacity-100"
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
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight font-heading">Device Login History</h2>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Security</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">
                    A transparency interface for account activity. Allows users to
                    monitor active sessions across different browsers and locations, providing remote revocation capabilities.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[650px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <HistoryPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Geo-IP Engine</span>
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
