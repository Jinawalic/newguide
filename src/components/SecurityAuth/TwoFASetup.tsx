import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    QrCode01Icon as QrCode,
    SmartPhone01Icon as Mobile,
    Key01Icon as Key,
    Shield01Icon as SecurityShield
} from '@hugeicons/core-free-icons';

const twoFACode = `import React, { useState } from 'react';

const TwoFASetup = ({ qrCodeUrl, backupCodes }) => {
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");

  return (
    <div className="max-w-md bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
      {step === 1 ? (
        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">Scan QR Code</h3>
          <div className="w-48 h-48 bg-slate-100 mx-auto mb-6 flex items-center justify-center p-4">
             <img src={qrCodeUrl} alt="2FA QR" className="w-full h-full" />
          </div>
          <p className="text-sm text-slate-500 mb-6 font-medium">Scan this with your authenticator app like Google Authenticator or Authy.</p>
          <button onClick={() => setStep(2)} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold">I have scanned it</button>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">Verify Code</h3>
          <input 
            type="text" 
            placeholder="000000" 
            className="w-full h-12 text-center text-xl bg-slate-50 border border-slate-200 rounded-xl mb-6"
            onChange={(e) => setCode(e.target.value)}
          />
          <button className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold">Complete Setup</button>
        </div>
      )}
    </div>
  );
};

export default TwoFASetup;`;

const TwoFAPreview = () => {
    const [step, setStep] = useState(1);

    return (
        <div className="w-full flex flex-col items-center justify-center gap-10 relative z-[100] transition-colors">
            <div className="w-full max-w-md bg-white dark:bg-zinc-900 p-10 rounded-xl border border-slate-100 dark:border-zinc-800 shadow-sm relative group overflow-hidden transition-colors">
                <div className="flex items-center gap-3 mb-10">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex-1 h-1.5 rounded-full bg-slate-50 dark:bg-zinc-800 overflow-hidden relative transition-colors">
                            <div className={`absolute inset-0 bg-blue-500 transition-all duration-700 ${i <= step ? 'w-full' : 'w-0'}`} />
                        </div>
                    ))}
                </div>

                {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                        <div className="mb-10 text-center">
                            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-6 transition-colors">
                                <HugeiconsIcon icon={QrCode} size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-3 transition-colors">Scan QR Code</h3>
                            <p className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest leading-relaxed px-6 transition-colors">Open your authenticator app and scan the code below</p>
                        </div>

                        <div className="relative group/qr mb-10">
                            <div className="w-56 h-56 bg-white dark:bg-zinc-800 border-2 border-slate-100 dark:border-zinc-700 rounded-[40px] shadow-xl p-4 mx-auto relative overflow-hidden transition-all duration-500 group-hover/qr:scale-105 group-hover/qr:border-blue-200 dark:group-hover/qr:border-blue-500/50">
                                <div className="w-full h-full bg-slate-900 dark:bg-zinc-950 rounded-[28px] flex items-center justify-center group-hover/qr:rotate-2 transition-transform duration-700">
                                    <HugeiconsIcon icon={Mobile} size={120} className="text-white opacity-20" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center border-4 border-slate-900 dark:border-zinc-950 transition-colors">
                                        <HugeiconsIcon icon={SecurityShield} size={20} className="text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100/50 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                        </div>

                        <button
                            onClick={() => setStep(2)}
                            className="w-full h-12 bg-emerald-800 dark:bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.3em] shadow-sm hover:bg-emerald-900 dark:hover:bg-emerald-500 transition-all transform hover:translate-y-[-2px] active:translate-y-0"
                        >
                            Continue Setup
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                        <div className="mb-10 text-center">
                            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto mb-6 transition-colors">
                                <HugeiconsIcon icon={Key} size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-3 transition-colors">Verify Identity</h3>
                            <p className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest leading-relaxed px-6 transition-colors">Enter the 6-digit code shown in your app</p>
                        </div>

                        <div className="flex justify-center gap-3 mb-10">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className="w-10 lg:w-11 h-12 bg-slate-50 dark:bg-zinc-950 border-2 border-slate-100 dark:border-zinc-800 rounded-xl flex items-center justify-center transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-zinc-800" />
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setStep(3)}
                            className="w-full h-14 bg-emerald-800 dark:bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.3em] shadow-sm hover:bg-emerald-900 dark:hover:bg-emerald-500 transition-all transform hover:translate-y-[-2px] active:translate-y-0"
                        >
                            Confirm Code
                        </button>
                    </div>
                )}

                {step === 3 && (
                    <div className="animate-in fade-in zoom-in-95 duration-500 text-center">
                        <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm shadow-emerald-500/20">
                            <HugeiconsIcon icon={Tick} size={38} />
                        </div>
                        <p className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-10 px-8 transition-colors">Two-factor authentication is now active on your account</p>

                        <div className="bg-slate-50 dark:bg-zinc-950 rounded-3xl p-6 border border-slate-100 dark:border-zinc-800 mb-10 transition-colors">
                            <div className="flex items-center gap-2 mb-4 justify-center">
                                <HugeiconsIcon icon={Key} size={14} className="text-slate-400 dark:text-zinc-600" />
                                <span className="text-[10px] font-black text-slate-500 dark:text-zinc-500 uppercase tracking-widest leading-none">Backup Codes Generated</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {['932-AX-32', '124-RT-90', '441-QP-11', '882-MK-00'].map(code => (
                                    <div key={code} className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-xl py-2 px-3 text-[10px] font-mono font-bold text-slate-900 dark:text-white transition-colors">{code}</div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => setStep(1)}
                            className="w-full h-14 bg-emerald-800 dark:bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.3em] shadow-sm hover:bg-emerald-900 dark:hover:bg-emerald-500 transition-all transform hover:translate-y-[-2px] active:translate-y-0"
                        >
                            Go to Dashboard
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export const TwoFASetup = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(twoFACode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">2FA Setup</h2>
                    <span className="bg-indigo-100 text-indigo-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Security</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl transition-colors">
                    A multi-step configuration wizard for Two-Factor Authentication.
                    Guides users through QR scanning, verification, and backup code storage using modern UX patterns.
                </p>
            </div>

            <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-colors duration-700">
                <div className="h-[750px] bg-[#f8fafc] dark:bg-zinc-950/50 relative flex items-center justify-center border-b border-slate-100 dark:border-zinc-800 overflow-hidden transition-colors duration-700">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(var(--pattern-color, #e2e8f0) 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <style>{`
                        .dark .h-\\[750px\\] { --pattern-color: #3f3f46; }
                    `}</style>
                    <TwoFAPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Wizard Engine</span>
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
                            {twoFACode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('setStep') ? 'text-emerald-400' :
                                            line.includes('qrCodeUrl') || line.includes('backupCodes') ? 'text-amber-300' :
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
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 transition-colors">Implementation Note</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium leading-relaxed transition-colors">
                        Once 2FA is enabled, generate and force the user to download <strong>one-time recovery codes</strong>. This is critical for users who lose access to their authenticator device.
                    </p>
                </div>
            </div>
        </div>
    );
};
