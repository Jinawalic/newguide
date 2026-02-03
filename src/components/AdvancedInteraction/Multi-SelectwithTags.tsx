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
const multiSelectSourceCode = `import React, { useState } from 'react';

const MultiSelect = ({ options = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Remix', 'Nuxt'] }) => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(['React', 'Next.js']);
  const [isOpen, setIsOpen] = useState(false);
  
  const filteredOptions = options.filter(opt => 
    opt.toLowerCase().includes(query.toLowerCase()) && !selected.includes(opt)
  );

  const toggleOption = (opt) => {
    if (selected.includes(opt)) {
      setSelected(selected.filter(i => i !== opt));
    } else {
      setSelected([...selected, opt]);
    }
    setQuery('');
  };

  return (
    <div className="relative w-full max-w-md">
      <div 
        className="min-h-[48px] p-1.5 flex flex-wrap gap-2 items-center bg-white border border-slate-200 rounded-2xl focus-within:ring-4 focus-within:ring-emerald-500/10 focus-within:border-emerald-500 transition-all cursor-text"
        onClick={() => setIsOpen(true)}
      >
        {selected.map(item => (
          <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-xl border border-emerald-100 animate-in zoom-in-95 duration-200">
            {item}
            <button 
                onClick={(e) => { e.stopPropagation(); toggleOption(item); }}
                className="hover:bg-emerald-200/50 p-0.5 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        ))}
        <input
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setIsOpen(true); }}
          onFocus={() => setIsOpen(true)}
          placeholder={selected.length === 0 ? "Select technologies..." : ""}
          className="flex-1 min-w-[120px] px-2 py-1 text-sm font-medium focus:outline-none bg-transparent placeholder:text-slate-400"
        />
        <div className="pr-2 text-slate-400">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
             </svg>
        </div>
      </div>
      
      {isOpen && (
        <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <ul className="absolute z-20 w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl shadow-slate-900/10 max-h-60 overflow-y-auto py-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {filteredOptions.length > 0 ? (
                filteredOptions.map((opt) => (
                    <li
                    key={opt}
                    onClick={() => toggleOption(opt)}
                    className="px-4 py-2.5 hover:bg-emerald-50 cursor-pointer text-[13px] text-slate-600 font-bold transition-colors flex items-center justify-between group"
                    >
                    {opt}
                    <div className="w-5 h-5 rounded-lg border-2 border-slate-200 group-hover:border-emerald-500 transition-colors" />
                    </li>
                ))
            ) : (
                <li className="px-4 py-6 text-center text-xs font-bold text-slate-400 italic">No options found</li>
            )}
            </ul>
        </>
      )}
    </div>
  );
};

export default MultiSelect;`;

// --- THE PREVIEW COMPONENT ---
const MultiSelectPreview = () => {
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState(['React', 'Next.js']);
    const [isOpen, setIsOpen] = useState(false);
    const options = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Remix', 'Nuxt', 'Gatsby', 'SolidJS', 'Preact'];

    const filteredOptions = options.filter(opt =>
        opt.toLowerCase().includes(query.toLowerCase()) && !selected.includes(opt)
    );

    const toggleOption = (opt: string) => {
        if (selected.includes(opt)) {
            setSelected(selected.filter(i => i !== opt));
        } else {
            setSelected([...selected, opt]);
        }
        setQuery('');
    };

    return (
        <div className="relative w-full max-w-md relative z-[100]">
            <div
                className="min-h-[48px] p-1.5 flex flex-wrap gap-2 items-center bg-white border border-slate-200 rounded-2xl focus-within:ring-4 focus-within:ring-emerald-500/10 focus-within:border-emerald-500 transition-all cursor-text shadow-sm"
                onClick={() => setIsOpen(true)}
            >
                {selected.map(item => (
                    <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-xl border border-emerald-100 animate-in zoom-in-95 duration-200">
                        {item}
                        <button
                            onClick={(e) => { e.stopPropagation(); toggleOption(item); }}
                            className="hover:bg-emerald-200/50 p-0.5 rounded-lg transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </span>
                ))}
                <input
                    type="text"
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); setIsOpen(true); }}
                    onFocus={() => setIsOpen(true)}
                    placeholder={selected.length === 0 ? "Select technologies..." : ""}
                    className="flex-1 min-w-[120px] px-2 py-1 text-sm font-medium focus:outline-none bg-transparent placeholder:text-slate-400"
                />
                <div className="pr-2 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>

            {isOpen && (
                <ul className="absolute z-[110] w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl shadow-slate-900/10 max-h-60 overflow-y-auto py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((opt) => (
                            <li
                                key={opt}
                                onClick={() => toggleOption(opt)}
                                className="px-4 py-2.5 hover:bg-emerald-50 cursor-pointer text-[13px] text-slate-600 font-bold transition-colors flex items-center justify-between group"
                            >
                                {opt}
                                <div className="w-5 h-5 rounded-lg border-2 border-slate-200 group-hover:border-emerald-500 transition-colors" />
                            </li>
                        ))
                    ) : (
                        <li className="px-4 py-10 text-center text-xs font-bold text-slate-400 italic">No options found</li>
                    )}
                </ul>
            )}
            {isOpen && (
                <div className="fixed inset-0 z-[-1]" onClick={() => setIsOpen(false)} />
            )}
        </div>
    );
};

export const MultiSelectTags = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(multiSelectSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 tracking-tight font-heading">Multi-Select Tags</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Premium</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">
                    Powerful selection component that allows users to pick multiple items from a list and manage them as interactive tags.
                    Highly accessible with keyboard support and responsive tagging.
                </p>
            </div>

            {/* Design Card */}
            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                {/* Preview Area */}
                <div className="h-[400px] bg-[#f8fafc] relative flex items-center justify-center overflow-visible border-b border-slate-100">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(#e2e8f0 1.5px, transparent 1.5px)`,
                        backgroundSize: '24px 24px'
                    }}></div>
                    <div className="relative z-10 w-full flex justify-center">
                        <MultiSelectPreview />
                    </div>
                </div>

                {/* Toolbar */}
                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Customizable</span>
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
                            <span>Documentation</span>
                        </button>
                    </div>
                </div>

                {/* Code Area */}
                <div className="bg-[#0f172a] p-8 overflow-auto max-h-[500px] custom-scrollbar text-white">
                    <pre className="text-[13px] font-mono leading-relaxed group">
                        <code className="text-slate-200">
                            {multiSelectSourceCode.split('\n').map((line, i) => (
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Accessibility Tip</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        The Multi-Select component uses <strong>aria-expanded</strong> and <strong>role="listbox"</strong> for screen readers. Ensure you add keyboard navigation for the best user experience.
                    </p>
                </div>
            </div>
        </div>
    );
};
