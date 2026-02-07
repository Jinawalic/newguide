import { useState, useRef, useEffect } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    Shield01Icon as Shield,
    Clock01Icon as Clock
} from '@hugeicons/core-free-icons';

const otpInputCode = `import React, { useState, useRef } from 'react';

const OTPInput = ({ length = 6, onComplete }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.value !== "" && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex gap-3">
      {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          ref={(el) => { if (el) inputRefs.current[index] = el; }}
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-12 h-14 text-center text-xl font-bold bg-white border-2 border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-all text-slate-800"
        />
      ))}
    </div>
  );
};

export default OTPInput;`;

const OTPPreview = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [timer, setTimer] = useState(59);
    const [verifying, setVerifying] = useState(false);
    const [success, setSuccess] = useState(false);
    const inputRefs = useRef<HTMLInputElement[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleChange = (val: string, index: number) => {
        if (isNaN(Number(val))) return;
        const newOtp = [...otp];
        newOtp[index] = val;
        setOtp(newOtp);

        if (val !== "" && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
        if (e.key === "Backspace" && otp[index] === "" && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        setVerifying(true);
        setTimeout(() => {
            setVerifying(false);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        }, 1500);
    };

    return (
        <div className="w-full flex flex-col items-center gap-10 relative z-[100]">
            <div className="w-full max-w-md bg-white p-10 rounded-xl border border-slate-100 shadow-sm relative group overflow-hidden">
                <div className="mb-10 text-center">
                    <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                        <HugeiconsIcon icon={Shield} size={20} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-3">Check your email</h3>
                    <p className="text-[11px] font-bold text-slate-400 capitalize tracking-widest">We sent a verification code to your inbox</p>
                </div>

                <div className="flex justify-center gap-3 mb-10">
                    {otp.map((digit, i) => (
                        <input
                            key={i}
                            ref={(el) => { if (el) inputRefs.current[i] = el; }}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, i)}
                            onKeyDown={(e) => handleKeyDown(e, i)}
                            className={`w-10 lg:w-12 h-12 text-center text-2xl font-black rounded-xl border-2 transition-all outline-none ${digit ? 'border-blue-500 bg-blue-50/20 text-blue-900 shadow-lg shadow-blue-500/10' : 'border-slate-100 text-slate-400 bg-slate-50 focus:border-blue-500'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleVerify}
                    disabled={otp.some(d => !d) || verifying}
                    className={`w-full h-12 rounded-xl flex items-center justify-center text-[10px] font-black uppercase tracking-[0.3em] transition-all relative overflow-hidden ${success ? 'bg-emerald-800 text-white' :
                        verifying ? 'bg-slate-100 text-slate-400' :
                            otp.every(d => d) ? 'bg-emerald-900 text-white shadow-sm hover:bg-emerald-800' : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                        }`}
                >
                    {success ? (
                        <div className="flex items-center gap-2 animate-in zoom-in-95 duration-300">
                            <HugeiconsIcon icon={Tick} size={20} />
                            <span>Verified</span>
                        </div>
                    ) : verifying ? (
                        <div className="w-6 h-6 border-4 border-slate-300 border-t-slate-900 rounded-full animate-spin" />
                    ) : (
                        <span>Verify Account</span>
                    )}
                </button>

                <div className="mt-10 flex flex-col items-center gap-4">
                    <p className="text-[10px] font-black text-slate-400 capitalize tracking-widest flex items-center gap-2">
                        <HugeiconsIcon icon={Clock} size={14} className="text-slate-300" />
                        Code expires in <span className="text-slate-900">{timer}s</span>
                    </p>
                    <button className="text-[10px] font-black text-blue-600 capitalize tracking-widest hover:underline decoration-2 underline-offset-4">Resend Code</button>
                </div>
            </div>
        </div>
    );
};

export const OTPInput = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(otpInputCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight font-heading">OTP Input</h2>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Security</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">
                    A multi-field input system for verification codes. Features auto-focus
                    on subsequent fields, backspace navigation, and paste support.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[600px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <OTPPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Input States</span>
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
                            {otpInputCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('import') ? 'text-emerald-400' :
                                            line.includes('otp') || line.includes('inputRefs') ? 'text-amber-300' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Security Best Practice</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Prevent auto-fill suggestions for sensitive codes and ensure the timer matches your backend expiration policy. Use <code>inputMode="numeric"</code> for better mobile keyboard support.
                    </p>
                </div>
            </div>
        </div>
    );
};
