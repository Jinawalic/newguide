import { useState, useCallback } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    // Link01Icon as ExternalLink,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const dragDropUploadSourceCode = `import React, { useState, useCallback } from 'react';

const DragDropUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);

  const onDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
  }, []);

  const removeFile = (name) => {
    setFiles(prev => prev.filter(f => f.name !== name));
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={\`
          relative border-3 border-dashed rounded-3xl p-12 transition-all duration-300 flex flex-col items-center justify-center gap-4 text-center
          \${isDragging 
            ? 'border-emerald-500 bg-emerald-50/50 scale-[1.02]' 
            : 'border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100/50'
          }
        \`}
      >
        <div className={\`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors \${isDragging ? 'bg-emerald-500 text-white' : 'bg-white text-slate-400 shadow-sm'}\`}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
           </svg>
        </div>
        
        <div>
          <p className="text-lg font-bold text-slate-800">Drop files here or click to upload</p>
          <p className="text-sm text-slate-400 font-medium mt-1">Maximum file size 10MB (PDF, PNG, JPG)</p>
        </div>

        <input 
          type="file" 
          multiple 
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
          onChange={(e) => setFiles(prev => [...prev, ...Array.from(e.target.files)])}
        />
      </div>

      {files.length > 0 && (
        <div className="mt-6 space-y-3">
          {files.map(file => (
            <div key={file.name} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm animate-in slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                   </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-700">{file.name}</p>
                  <p className="text-[10px] text-slate-400 font-bold">{(file.size / 1024).toFixed(1)} KB • Completed</p>
                </div>
              </div>
              <button 
                onClick={() => removeFile(file.name)}
                className="p-2 hover:bg-slate-50 text-slate-400 hover:text-rose-500 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DragDropUpload;`;

// --- THE PREVIEW COMPONENT ---
const DragDropUploadPreview = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState<{ name: string, size: number }[]>([]);

    const onDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const onDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const onDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files).map(f => ({ name: f.name, size: f.size }));
        setFiles(prev => [...prev, ...droppedFiles]);
    }, []);

    const removeFile = (name: string) => {
        setFiles(prev => prev.filter(f => f.name !== name));
    };

    return (
        <div className="w-full max-w-sm mx-auto relative z-[100]">
            <div
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                className={`
                    relative border-[3px] border-dashed rounded-[32px] p-8 transition-all duration-300 flex flex-col items-center justify-center gap-4 text-center
                    ${isDragging
                        ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-500/10 scale-[1.02]'
                        : 'border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm'
                    }
                `}
            >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${isDragging ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200' : 'bg-slate-50 dark:bg-zinc-800 text-slate-400 dark:text-zinc-600 group-hover:bg-white shadow-inner'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                </div>

                <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-800 dark:text-zinc-100 tracking-tight transition-colors">Drop files here</p>
                    <p className="text-[11px] text-slate-400 dark:text-zinc-500 font-bold uppercase tracking-widest transition-colors">Or click to select</p>
                </div>

                <input
                    type="file"
                    multiple
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => {
                        const newFiles = Array.from(e.target.files || []).map(f => ({ name: f.name, size: f.size }));
                        setFiles(prev => [...prev, ...newFiles]);
                    }}
                />
            </div>

            {files.length > 0 && (
                <div className="mt-4 space-y-2 max-h-[120px] overflow-y-auto px-1 custom-scrollbar">
                    {files.map((file, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-2xl shadow-sm animate-in slide-in-from-top-2 duration-300 transition-colors">
                            <div className="flex items-center gap-2 overflow-hidden">
                                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0 text-xs font-bold border border-emerald-100/50 dark:border-emerald-500/20">
                                    DOC
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-[12px] font-bold text-slate-700 dark:text-zinc-100 truncate transition-colors">{file.name}</p>
                                    <p className="text-[9px] text-slate-400 dark:text-zinc-500 font-bold tracking-tight transition-colors">{(file.size / 1024).toFixed(0)} KB</p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFile(file.name)}
                                className="p-1.5 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-400 dark:text-zinc-600 hover:text-rose-500 dark:hover:text-rose-400 rounded-lg transition-all flex-shrink-0"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export const DragDropUpload = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(dragDropUploadSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">File Upload</h2>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Enhanced UX</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A modern, interactive drag-and-drop file uploader with real-time feedback and file management.
                    Designed to provide a seamless uploading experience with visual drag states.
                </p>
            </div>

            {/* Design Card */}
            <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-colors duration-700">
                <div className="h-[450px] bg-[#f8fafc] dark:bg-zinc-950/50 relative flex items-center justify-center overflow-visible border-b border-slate-100 dark:border-zinc-800 p-8 transition-colors duration-700">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(var(--pattern-color, #e2e8f0) 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <style>{`
                        .dark .h-\\[450px\\] { --pattern-color: #3f3f46; }
                    `}</style>
                    <div className="relative z-10 w-full">
                        <DragDropUploadPreview />
                    </div>
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Configuration</span>
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
                            {dragDropUploadSourceCode.split('\n').map((line, i) => (
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

            {/* Bottom Info */}
            <div className="mt-8 flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-emerald-600 mt-0.5">
                    <HugeiconsIcon icon={Info} size={20} />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Modern Patterns</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        This component implements a <strong>"Drop Region"</strong> pattern that scales slightly when active to provide clear feedback. All icons are pure SVG for maximum portability.
                    </p>
                </div>
            </div>
        </div>
    );
};
