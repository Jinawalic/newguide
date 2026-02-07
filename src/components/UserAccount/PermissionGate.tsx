import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    AiSecurity01Icon as Lock,
    CheckmarkCircle01Icon as Check,
    AlertCircleIcon as Alert
} from '@hugeicons/core-free-icons';

const permissionGateCode = `import React from 'react';

const PermissionGate = ({ hasPermission, children, fallback }) => {
  if (hasPermission) {
    return <>{children}</>;
  }

  return (
    <div className="p-8 border-2 border-dashed border-slate-200 rounded-3xl text-center bg-slate-50/50">
      {fallback || (
        <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 mb-4">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2-2v6a2 2 0 00-2 2v6zM7 11V7a5 5 0 0110 0v4" />
                 </svg>
            </div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2">Access Restricted</h4>
            <p className="max-w-xs text-[11px] font-bold text-slate-400 leading-relaxed uppercase tracking-widest">
                You do not have the required permissions to view this content. Contact an admin to upgrade your role.
            </p>
        </div>
      )}
    </div>
  );
};

export default PermissionGate;`;

const GatePreview = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <div className="w-full flex flex-col items-center gap-10 relative z-[100]">
            {/* Toggle Control */}
            <div className="bg-white p-2 rounded-full border border-slate-100 shadow-xl flex items-center gap-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-4">Simulate Admin</span>
                <button
                    onClick={() => setIsAdmin(!isAdmin)}
                    className={`w-14 h-8 rounded-full p-1 transition-all duration-500 ${isAdmin ? 'bg-emerald-500' : 'bg-slate-200'}`}
                >
                    <div className={`w-6 h-6 bg-white rounded-full shadow-lg transition-transform duration-500 transform ${isAdmin ? 'translate-x-6' : 'translate-x-0'}`} />
                </button>
            </div>

            <div className="w-full max-w-md relative group">
                <div className={`transition-all duration-700 ${isAdmin ? 'blur-0 opacity-100' : 'blur-xl opacity-30 select-none pointer-events-none'}`}>
                    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-xl space-y-1">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-sm">
                                <HugeiconsIcon icon={Check} size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest leading-none mb-1">Financial Report</h4>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Confidential Data</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-6 w-full bg-slate-50 rounded-xl" />
                            <div className="h-6 w-3/4 bg-slate-50 rounded-xl" />
                            <div className="h-24 w-full bg-slate-50 rounded-[28px] border border-dashed border-slate-100" />
                        </div>
                    </div>
                </div>

                {!isAdmin && (
                    <div className="absolute inset-0 flex items-center justify-center animate-in zoom-in-95 duration-500">
                        <div className="bg-white p-7 rounded-xl border border-slate-100 shadow-sm text-center max-w-[280px]">
                            <div className="w-10 h-10 bg-rose-50 text-rose-500 rounded-3xl flex items-center justify-center mb-6 mx-auto rotate-12 shadow-sm">
                                <HugeiconsIcon icon={Lock} size={25} />
                            </div>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">Locked View</h3>
                            <p className="text-[10px] font-bold text-slate-400 leading-relaxed uppercase tracking-widest mb-8">Role Upgrade Required</p>
                            <button className="w-full h-11 bg-rose-600 text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-rose-900/10 active:scale-95 transition-all">
                                Request Access
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex items-center gap-2 opacity-30">
                <HugeiconsIcon icon={Alert} size={16} className="text-amber-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Security Protocol Active</span>
            </div>
        </div>
    );
};

export const PermissionGate = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(permissionGateCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Permission Gate</h2>
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Security</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A multi-layered wrapper component that handles conditional rendering
                    based on user traits. Essential for RBAC (Role-Based Access Control) systems.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[600px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <GatePreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Blur Intensity</span>
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
                            {permissionGateCode.split('\n').map((line, i) => (
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Logic Pattern</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Always prefer <strong>server-side validation</strong> in addition to client-side gates. Client-side gates are for UX purposes only and cannot prevent tech-savvy users from seeing protected data in the network tab.
                    </p>
                </div>
            </div>
        </div>
    );
};
