import { useState, useEffect } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    Clock01Icon as Clock,
    Logout01Icon as Logout,
    RefreshIcon as Refresh
} from '@hugeicons/core-free-icons';

const timeoutCode = `import React, { useState, useEffect } from 'react';

const SessionTimeout = ({ timeoutInSeconds = 30, onExtend, onLogout }) => {
  const [timeLeft, setTimeLeft] = useState(timeoutInSeconds);

  useEffect(() => {
    if (timeLeft === 0) {
      onLogout();
      return;
    }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onLogout]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl">
        <h3 className="text-xl font-bold mb-2">Session Expiring</h3>
        <p className="text-slate-500 mb-6">You will be logged out in {timeLeft}s due to inactivity.</p>
        <div className="flex gap-4">
          <button onClick={onExtend} className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold">Stay Logged In</button>
          <button onClick={onLogout} className="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default SessionTimeout;`;

const TimeoutPreview = () => {
    const [show, setShow] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        let timer: ReturnType<typeof setInterval> | undefined;
        if (show && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        setShow(false);
                        return 30;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            if (timer) clearInterval(timer);
        };
    }, [show, timeLeft]);

    return (
        <div className="w-full flex flex-col items-center gap-10 relative z-[100]">
            <div className="w-full h-[450px] bg-slate-100 rounded-[48px] border border-slate-200 relative overflow-hidden flex items-center justify-center p-8 group">
                <div className="flex flex-col items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={() => { setShow(true); setTimeLeft(30); }}
                        className="px-6 py-3 bg-emerald-800 text-white rounded-[24px] text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl hover:scale-105 active:scale-95 transition-all"
                    >
                        Simulate Inactivity
                    </button>
                </div>

                {show && (
                    <div className="absolute inset-0 z-[110] flex items-center justify-center p-6 animate-in fade-in zoom-in-95 duration-500">
                        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setShow(false)} />

                        <div className="bg-white w-full max-w-sm rounded-xl shadow-sm p-10 relative z-[120] border border-slate-50">
                            <div className="flex justify-center mb-8">
                                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500 relative overflow-hidden">
                                    <HugeiconsIcon icon={Clock} size={35} className="relative z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-transparent" />
                                    <div className="absolute bottom-0 left-0 w-full bg-amber-500/10 transition-all duration-1000" style={{ height: `${(timeLeft / 30) * 100}%` }} />
                                </div>
                            </div>

                            <div className="text-center mb-10">
                                <h4 className="text-xl font-black text-slate-900 tracking-tight leading-none mb-4 capitalize">Session Timeout</h4>
                                <p className="text-[11px] font-bold text-slate-400 capitalize tracking-widest leading-relaxed">
                                    Your session will automatically expire in <span className="text-rose-500">{timeLeft} Seconds</span>
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-3">
                                <button
                                    onClick={() => setShow(false)}
                                    className="w-full h-12 bg-emerald-800 text-white rounded-xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest hover:bg-emerald-900 transition-all transform hover:scale-[1.02] shadow-sm shadow-emerald-700/10"
                                >
                                    <HugeiconsIcon icon={Refresh} size={18} />
                                    Extend Session
                                </button>
                                <button
                                    onClick={() => setShow(false)}
                                    className="w-full h-14 bg-slate-50 text-slate-400 hover:text-rose-600 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest transition-all"
                                >
                                    <HugeiconsIcon icon={Logout} size={18} />
                                    Logout Now
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export const SessionTimeout = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(timeoutCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight font-heading">Session Timeout</h2>
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Security</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">
                    A critical security component that warns users before their session expires.
                    Protects sensitive data on shared devices by enforcing automatic logout during inactivity.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[550px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <TimeoutPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Idle Logic</span>
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
                            {timeoutCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('timeout') ? 'text-emerald-400' :
                                            line.includes('setInterval') || line.includes('timeLeft') ? 'text-amber-300' :
                                                line.includes('return') || line.includes('useEffect') ? 'text-purple-400' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Compliance Standard</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Most financial and healthcare regulations (like HIPAA or PCI-DSS) require session timeouts of <strong>15 to 30 minutes</strong> of inactivity. Always allow users to extend their session before logging out.
                    </p>
                </div>
            </div>
        </div>
    );
};
