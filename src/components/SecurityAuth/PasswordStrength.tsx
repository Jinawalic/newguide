import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    ViewIcon as View,
    ViewOffIcon as ViewOff,
    CheckmarkCircle01Icon as Check,
    CancelCircleIcon as Cross
} from '@hugeicons/core-free-icons';

const pwdStrengthCode = `import React, { useState } from 'react';

const PasswordStrength = ({ password }) => {
  const getStrength = (pwd) => {
    let strength = 0;
    if (pwd.length > 8) strength += 25;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength += 25;
    if (/[0-9]/.test(pwd)) strength += 25;
    if (/[^a-zA-Z0-9]/.test(pwd)) strength += 25;
    return strength;
  };

  const strength = getStrength(password);
  
  const colors = {
    0: 'bg-slate-200',
    25: 'bg-rose-500',
    50: 'bg-amber-500',
    75: 'bg-blue-500',
    100: 'bg-emerald-500'
  };

  return (
    <div className="space-y-2">
      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
        <div 
          className={\`h-full transition-all duration-500 \${colors[strength]}\`}
          style={{ width: \`\${strength}%\` }}
        />
      </div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        Strength: <span className="text-slate-900">{strength === 100 ? 'Secure' : 'Weak'}</span>
      </p>
    </div>
  );
};

export default PasswordStrength;`;

const StrengthPreview = () => {
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const requirements = [
        { label: "8+ characters", met: password.length >= 8 },
        { label: "Uppercase & Lowercase", met: /[a-z]/.test(password) && /[A-Z]/.test(password) },
        { label: "At least one number", met: /[0-9]/.test(password) },
        { label: "Special character", met: /[^a-zA-Z0-9]/.test(password) }
    ];

    const strength = requirements.filter(r => r.met).length;
    const colors = ["bg-slate-100", "bg-rose-500", "bg-amber-500", "bg-indigo-500", "bg-emerald-500"];
    const labels = ["Very Weak", "Weak", "Medium", "Strong", "Unbreakable"];

    return (
        <div className="w-full flex flex-col items-center gap-10 relative z-[100]">
            <div className="w-full max-w-sm bg-white p-10 rounded-xl border border-slate-100 shadow-sm relative group overflow-hidden">
                <div className="mb-8">
                    <p className="text-[10px] font-black text-slate-300 capitalize tracking-[0.4em] mb-4">Account Security</p>
                    <h3 className="text-base font-black text-slate-900 tracking-tight leading-none">Create Password</h3>
                </div>

                <div className="relative mb-8">
                    <input
                        type={show ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full h-12 bg-slate-50 border border-slate-100 rounded-xl px-6 text-slate-900 font-bold outline-none focus:bg-white focus:border-indigo-500 transition-all placeholder:text-slate-300"
                    />
                    <button
                        onClick={() => setShow(!show)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 transition-colors"
                    >
                        <HugeiconsIcon icon={show ? ViewOff : View} size={20} />
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-end mb-1">
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{labels[strength]}</span>
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{strength * 25}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-50 rounded-full flex gap-1">
                        {[1, 2, 3, 4].map(i => (
                            <div
                                key={i}
                                className={`h-full flex-1 rounded-full transition-all duration-700 ${i <= strength ? colors[strength] : 'bg-slate-100'}`}
                            />
                        ))}
                    </div>

                    <div className="pt-6 grid grid-cols-1 gap-3">
                        {requirements.map((req, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className={`w-5 h-5 rounded-lg flex items-center justify-center transition-colors ${req.met ? 'bg-emerald-500 text-white' : 'bg-slate-50 text-slate-300 border border-slate-100'}`}>
                                    <HugeiconsIcon icon={req.met ? Check : Cross} size={12} strokeWidth={3} />
                                </div>
                                <span className={`text-[11px] font-black capitalize tracking-tight transition-colors ${req.met ? 'text-slate-900' : 'text-slate-400'}`}>
                                    {req.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const PasswordStrength = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(pwdStrengthCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight font-heading">Password Strength</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Security</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">
                    A visual feedback system for password complexity. Encourages users
                    to create stronger credentials through immediate validation of security requirements.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[600px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <StrengthPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Entropy Scales</span>
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
                            {pwdStrengthCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('strength') ? 'text-emerald-400' :
                                            line.includes('test') || line.includes('password') ? 'text-amber-300' :
                                                line.includes('return') || line.includes('function') ? 'text-purple-400' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">UX Pattern</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Avoid showing error messages until the user has finished typing. Visual indicators should be <strong>encouraging</strong> rather than punitive to improve conversion on signup forms.
                    </p>
                </div>
            </div>
        </div>
    );
};
