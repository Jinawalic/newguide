import { useState, useRef } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    Download01Icon as ImportIcon,
    File01Icon as SheetIcon,
    Cancel01Icon as Remove,
    CheckmarkCircle01Icon as Success
} from '@hugeicons/core-free-icons';

const importCode = `import React, { useState } from 'react';

const DataImport = ({ onImport }) => {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        onImport(text);
      };
      reader.readAsText(selected);
    }
  };

  return (
    <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center bg-slate-50">
      <input type="file" onChange={handleFile} className="hidden" id="fileImport" />
      <label htmlFor="fileImport" className="cursor-pointer">
        <svg className="w-12 h-12 mx-auto text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
        <p className="font-bold text-slate-900 mb-1">Upload CSV or JSON</p>
        <p className="text-xs text-slate-500">Max file size 10MB</p>
      </label>
      {file && <p className="mt-4 text-xs font-bold text-blue-600">Selected: {file.name}</p>}
    </div>
  );
};

export default DataImport;`;

const ImportPreview = () => {
    const [file, setFile] = useState<{ name: string, size: string } | null>(null);
    const [uploading, setUploading] = useState(false);
    const [done, setDone] = useState(false);
    const fileRef = useRef<HTMLInputElement>(null);

    const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.files?.[0];
        if (selected) {
            setFile({ name: selected.name, size: (selected.size / 1024).toFixed(1) + ' KB' });
            setUploading(true);
            setTimeout(() => {
                setUploading(false);
                setDone(true);
            }, 2500);
        }
    };

    const reset = () => {
        setFile(null);
        setUploading(false);
        setDone(false);
    };

    return (
        <div className="w-full flex flex-col items-center gap-10 relative z-[100]">
            <div className="w-full max-w-sm bg-white p-10 rounded-xl border border-slate-100 shadow-sm relative group overflow-hidden">
                <div className="mb-10 text-center">
                    <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mx-auto mb-3 transform group-hover:rotate-10 transition-transform duration-700">
                        <HugeiconsIcon icon={ImportIcon} size={40} />
                    </div>
                </div>

                <div className="relative">
                    {!file ? (
                        <div
                            onClick={() => fileRef.current?.click()}
                            className="border-2 border-dashed border-slate-100 rounded-[30px] p-10 bg-slate-50 text-center cursor-pointer hover:bg-white hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500/10 transition-all duration-500 group/drop"
                        >
                            <input type="file" ref={fileRef} onChange={handleSelect} className="hidden" />
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-300 mx-auto mb-6 transition-all group-hover/drop:scale-110 group-hover/drop:text-emerald-500">
                                <HugeiconsIcon icon={SheetIcon} size={32} />
                            </div>
                            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2 leading-none">Drop Your File</h4>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">CSV, PDF or XLSX</p>
                        </div>
                    ) : (
                        <div className="bg-slate-50 rounded-xl p-8 animate-in zoom-in-95 duration-500">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm">
                                        <HugeiconsIcon icon={SheetIcon} size={24} />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[11px] font-black text-slate-900 uppercase tracking-widest leading-none mb-1 truncate max-w-[120px]">{file.name}</div>
                                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{file.size}</div>
                                    </div>
                                </div>
                                <button onClick={reset} className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-rose-600 hover:bg-rose-50 transition-all">
                                    <HugeiconsIcon icon={Remove} size={18} />
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                    <div className={`h-full bg-emerald-500 transition-all duration-[2.5s] ease-out ${uploading ? 'w-full' : done ? 'w-full' : 'w-0'}`} />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[9px] font-black text-slate-900 uppercase tracking-[0.2em]">
                                        {done ? 'Validation Complete' : uploading ? 'Ingesting Data...' : 'Waiting'}
                                    </span>
                                    {done && (
                                        <HugeiconsIcon icon={Success} size={16} className="text-emerald-500" />
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-10 px-6 py-4 bg-slate-900 rounded-xl flex items-center justify-between group/status overflow-hidden relative">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest relative z-10">Queue Status</span>
                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest relative z-10">Optimized</span>
                    <div className="absolute inset-y-0 left-0 bg-emerald-500/10 animate-pulse w-full" />
                </div>
            </div>
        </div>
    );
};

export const ImportData = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(importCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Import Data</h2>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Power Feature</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A heavy-duty data ingestion pipeline. Optimized for bulk uploads
                    with large file support, validation feedback, and multi-format parsing.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[650px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <ImportPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>FileReader API</span>
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
                            {importCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('handleFile') ? 'text-emerald-400' :
                                            line.includes('FileReader') || line.includes('Blob') ? 'text-amber-300' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Security Enforcement</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Always validate file mime-types on the client, but <strong>re-validate on the server</strong>. Never trust client-side parsing for sensitive business data ingestion.
                    </p>
                </div>
            </div>
        </div>
    );
};
