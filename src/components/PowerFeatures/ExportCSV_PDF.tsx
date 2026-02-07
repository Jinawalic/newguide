import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    Upload01Icon as ExportIcon,
    File02Icon as CSVIcon,
    FileAttachmentIcon as PDFIcon,
    Table01Icon as ExcelIcon
} from '@hugeicons/core-free-icons';

const exportCode = `import React from 'react';

const DataExport = ({ data, filename }) => {
  const exportToCSV = () => {
    const csvRows = [
      Object.keys(data[0]).join(','),
      ...data.map(row => Object.values(row).join(','))
    ].join('\\n');
    
    const blob = new Blob([csvRows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = \`\${filename}.csv\`;
    a.click();
  };

  return (
    <div className="flex gap-2">
      <button 
        onClick={exportToCSV}
        className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-500/20"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
           <path d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0l3 3m-3-3L9 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Export CSV
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-rose-500/20">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
           <path d="M7 21h10a2 2 0 002-2V9.414a2 2 0 00-.586-1.414l-5.414-5.414A2 2 0 0011.586 2H7a2 2 0 00-2 2v15a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Export PDF
      </button>
    </div>
  );
};

export default DataExport;`;

const ExportPreview = () => {
    const [exporting, setExporting] = useState<string | null>(null);

    const handleExport = (type: string) => {
        setExporting(type);
        setTimeout(() => setExporting(null), 2000);
    };

    const formats = [
        { id: 'csv', name: 'Raw Data', ext: '.csv', icon: CSVIcon, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { id: 'pdf', name: 'Document', ext: '.pdf', icon: PDFIcon, color: 'text-rose-500', bg: 'bg-rose-50' },
        { id: 'xls', name: 'Sheet', ext: '.xlsx', icon: ExcelIcon, color: 'text-blue-500', bg: 'bg-blue-50' }
    ];

    return (
        <div className="w-full flex flex-col items-center gap-10 relative z-[100]">
            <div className="w-full max-w-sm bg-white p-10 rounded-xl border border-slate-100 shadow-sm relative group overflow-hidden">
                <div className="mb-10 text-center">
                    <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                        <HugeiconsIcon icon={ExportIcon} size={30} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-3">Export Assets</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Select target format</p>
                </div>

                <div className="space-y-4">
                    {formats.map((f) => (
                        <button
                            key={f.id}
                            onClick={() => handleExport(f.id)}
                            disabled={exporting !== null}
                            className={`w-full group/item p-6 rounded-xl border transition-all duration-500 flex items-center justify-between ${exporting === f.id ? 'bg-slate-900 border-slate-900 scale-[0.98]' : 'bg-white border-slate-100 hover:border-slate-300 hover:shadow-xl'
                                }`}
                        >
                            <div className="flex items-center gap-5">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${exporting === f.id ? 'bg-white/10 text-white' : `${f.bg} ${f.color}`}`}>
                                    <HugeiconsIcon icon={f.icon} size={24} />
                                </div>
                                <div className="text-left">
                                    <div className={`text-[11px] font-black uppercase tracking-widest mb-1 ${exporting === f.id ? 'text-white' : 'text-slate-900'}`}>{f.name}</div>
                                    <div className={`text-[9px] font-bold uppercase tracking-widest ${exporting === f.id ? 'text-slate-500' : 'text-slate-400'}`}>{f.ext}</div>
                                </div>
                            </div>

                            <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500">
                                {exporting === f.id ? (
                                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <HugeiconsIcon icon={Tick} size={16} className="text-slate-200 group-hover/item:text-slate-900" />
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const ExportCSV_PDF = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(exportCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Export CSV/PDF</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Power Feature</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A universal data extractor for business reporting. Handles client-side
                    file generation and character encoding for seamless portable storage.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[650px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <ExportPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Client-Side Streams</span>
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
                            {exportCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('csvRows') ? 'text-emerald-400' :
                                            line.includes('Blob') || line.includes('URL') ? 'text-amber-300' :
                                                line.includes('return') || line.includes('click') ? 'text-purple-400' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Performance Tip</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        For large datasets (&gt;5,000 rows), move the export logic to a <strong>Web Worker</strong> to prevent main-thread blocking and UI freezing during CSV generation.
                    </p>
                </div>
            </div>
        </div>
    );
};
