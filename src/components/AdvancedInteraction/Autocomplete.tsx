import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Link01Icon as ExternalLink,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const autocompleteSourceCode = `import React, { useState } from 'react';

const Autocomplete = ({ options = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'] }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  const filteredOptions = options.filter(opt => 
    opt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-xs">
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setIsOpen(true); }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search fruits..."
          className="w-full px-4 py-2.5 pl-11 bg-white border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all placeholder:text-slate-400 group-hover:border-slate-300"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
             <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
           </svg>
        </div>
      </div>
      
      {isOpen && filteredOptions.length > 0 && (
        <ul className="absolute z-50 w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/50 max-h-60 overflow-hidden py-1">
          {filteredOptions.map((opt) => (
            <li
              key={opt}
              onClick={() => { setQuery(opt); setIsOpen(false); }}
              className="px-4 py-2.5 hover:bg-emerald-50 cursor-pointer text-[13px] text-slate-600 font-bold transition-colors"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;`;

// --- THE PREVIEW COMPONENT ---
const AutocompletePreview = () => {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
    const filteredOptions = options.filter(opt => opt.toLowerCase().includes(query.toLowerCase()));

    return (
        <div className="relative w-full max-w-xs relative z-[100]">
            <div className="relative group">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); setIsOpen(true); }}
                    onFocus={() => setIsOpen(true)}
                    placeholder="Search fruits..."
                    className="w-full px-4 py-2.5 pl-11 bg-white border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all placeholder:text-slate-400 group-hover:border-slate-300 shadow-sm"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>

            {isOpen && filteredOptions.length > 0 && (
                <ul className="absolute z-[110] w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl shadow-slate-900/10 max-h-60 overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    {filteredOptions.map((opt) => (
                        <li
                            key={opt}
                            onClick={() => { setQuery(opt); setIsOpen(false); }}
                            className="px-4 py-2.5 hover:bg-emerald-50 cursor-pointer text-[13px] text-slate-600 font-bold transition-colors"
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
            {isOpen && (
                <div className="fixed inset-0 z-[-1]" onClick={() => setIsOpen(false)} />
            )}
        </div>
    );
};

export const Autocomplete = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(autocompleteSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 tracking-tight font-heading">Default</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Stable</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">
                    Use default autocomplete for most search and select actions where the user knows roughly what they are looking for.
                    It provides instant feedback and reduces typing effort.
                </p>
            </div>

            {/* Design Card */}
            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                {/* Preview Area */}
                <div className="h-[300px] bg-[#f8fafc] relative flex items-center justify-center overflow-visible border-b border-slate-100">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(#e2e8f0 1.5px, transparent 1.5px)`,
                        backgroundSize: '24px 24px'
                    }}></div>
                    <div className="relative z-10 w-full flex justify-center">
                        <AutocompletePreview />
                    </div>
                </div>

                {/* Toolbar */}
                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Styles</span>
                            <HugeiconsIcon icon={Styles} size={14} className="opacity-50" />
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
                        <button className="flex items-center gap-2 hover:text-slate-900 text-slate-500 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={ExternalLink} size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                            <span>Edit in code sandbox</span>
                        </button>
                    </div>
                </div>

                {/* Code Area */}
                <div className="bg-[#0f172a] p-8 overflow-auto max-h-[500px] custom-scrollbar">
                    <pre className="text-[13px] font-mono leading-relaxed group">
                        <code className="text-slate-200">
                            {autocompleteSourceCode.split('\n').map((line, i) => (
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Implementation Note</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        This component uses <strong>Tailwind CSS</strong> for all styling and <strong>SVG</strong> for icons. No external icon libraries are required for the copied code.
                    </p>
                </div>
            </div>
        </div>
    );
};
