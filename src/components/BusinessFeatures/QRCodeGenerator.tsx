import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    QrCode01Icon as QrIcon,
    Download01Icon as Download
} from '@hugeicons/core-free-icons';

const qrCodeSystemCode = `import React, { useState } from 'react';

const QRCodeGenerator = () => {
  const [value, setValue] = useState('https://ekonty.tech');

  return (
    <div className="flex flex-col items-center gap-6 p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
      <div className="w-48 h-48 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center relative group">
          <svg className="w-32 h-32 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zm-3 0h2v2h-2v-2zm3 3h3v2h-3v-2zm-3 0h2v2h-2v-2zm3 3h3v2h-3v-2zm-3 0h2v2h-2v-2z" />
          </svg>
          <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
               <button className="bg-white p-2 rounded-lg shadow-sm text-xs font-bold">Download SVG</button>
          </div>
      </div>
      
      <input 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-sm font-medium"
        placeholder="Enter URL or data..."
      />
    </div>
  );
};

export default QRCodeGenerator;`;

const QRPreview = () => {
    const [input, setInput] = useState('https://ekonty.design');

    return (
        <div className="w-full flex flex-col items-center gap-10 relative z-[100]">
            <div className="w-full max-w-sm bg-white dark:bg-zinc-900 p-10 rounded-[48px] border border-slate-100 dark:border-zinc-800 shadow-2xl dark:shadow-black/50 relative group transition-colors">
                <div className="mb-8 text-center">
                    <p className="text-[10px] font-black text-slate-300 dark:text-zinc-600 uppercase tracking-[0.4em] mb-2 transition-colors">Digital Pass</p>
                    <h3 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight transition-colors">Generate QR Code</h3>
                </div>

                <div className="aspect-square bg-slate-50 dark:bg-zinc-950 rounded-[40px] border border-slate-100 dark:border-zinc-800 p-8 flex items-center justify-center relative overflow-hidden group/qr transition-colors">
                    <div className="w-full h-full text-slate-900 dark:text-zinc-100 relative z-10 transition-colors">
                        <HugeiconsIcon icon={QrIcon} size={160} />
                    </div>

                    {/* Logo Overlay */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl flex items-center justify-center z-20 border border-slate-100 dark:border-zinc-800 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-zinc-900 text-[10px] font-black italic transition-colors">Ek</div>
                    </div>

                    <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-sm opacity-0 group-hover/qr:opacity-100 transition-all duration-500 flex items-center justify-center z-30">
                        <button className="bg-slate-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl active:scale-95 transition-all">
                            <HugeiconsIcon icon={Download} size={16} />
                            Export PNG
                        </button>
                    </div>
                </div>

                <div className="mt-10">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full h-14 bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-700 rounded-3xl px-8 outline-none text-[13px] font-bold text-slate-600 dark:text-zinc-300 focus:ring-4 focus:ring-slate-900/5 dark:focus:ring-white/5 focus:border-slate-300 dark:focus:border-zinc-600 transition-all placeholder:uppercase transition-colors"
                        placeholder="Paste Link here..."
                    />
                </div>
            </div>

            <div className="flex gap-4">
                <div className="px-6 py-2 bg-slate-900 dark:bg-zinc-100 text-amber-400 dark:text-amber-600 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors">v3.4 Engine</div>
                <div className="px-6 py-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-400 dark:text-zinc-500 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors">Vector Ready</div>
            </div>
        </div>
    );
};

export const QRCodeGenerator = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(qrCodeSystemCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">QR Code Generator</h2>
                    <span className="bg-rose-100 text-rose-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Connect</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    Dynamic QR generator for offline-to-online transitions. Supports custom
                    input values, central logo overlays, and vector-based export options.
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
                    <QRPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>EC Level Config</span>
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
                            {qrCodeSystemCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('import') ? 'text-emerald-400' :
                                            line.includes('value') || line.includes('setValue') ? 'text-amber-300' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Scanning Optimization</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Always maintain a <strong>"Quiet Zone"</strong> (white border) around the QR code. Ensure high contrast between the pattern and background to guarantee readability across all device cameras.
                    </p>
                </div>
            </div>
        </div>
    );
};
