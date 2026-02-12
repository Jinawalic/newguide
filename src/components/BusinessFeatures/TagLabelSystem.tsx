import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    Cancel01Icon as Close,
    PlusSignIcon as Plus
} from '@hugeicons/core-free-icons';

const tagSystemCode = `import React, { useState } from 'react';

const TagSystem = () => {
  const [tags, setTags] = useState(['Productivity', 'Design', 'Development']);
  const [inputValue, setInputValue] = useState('');

  const addTag = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-wrap gap-2 p-4 border border-slate-200 rounded-2xl bg-white">
      {tags.map((tag, i) => (
        <div key={i} className="flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold">
          <span>{tag}</span>
          <button onClick={() => removeTag(i)} className="hover:text-rose-500 transition-colors">
             <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      ))}
      <input 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={addTag}
        placeholder="Add tag..."
        className="outline-none text-xs font-medium text-slate-600 px-2 flex-1 min-w-[100px]"
      />
    </div>
  );
};

export default TagSystem;`;

const TagPreview = () => {
    const [tags, setTags] = useState(['AI Strategy', 'User Growth', 'Retention']);
    const [input, setInput] = useState('');

    const handleAdd = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && input.trim()) {
            setTags([...tags, input.trim()]);
            setInput('');
        }
    };

    return (
        <div className="w-full flex flex-col items-center gap-10 relative z-[100]">
            <div className="w-full max-w-md bg-white dark:bg-zinc-900 p-8 rounded-xl border border-slate-100 dark:border-zinc-800 shadow-2xl dark:shadow-black/50 relative transition-colors">
                <div className="mb-6">
                    <h4 className="text-[10px] font-bold text-slate-400 dark:text-zinc-600 uppercase tracking-[0.3em] mb-2 transition-colors">Category Tags</h4>
                    <p className="text-sm font-bold text-slate-900 dark:text-zinc-100 tracking-tight transition-colors">Project Metadata</p>
                </div>

                <div className="flex flex-wrap gap-3 p-2 bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-800 rounded-xl focus-within:ring-4 focus-within:ring-blue-500/10 focus-within:border-blue-500/30 transition-all">
                    {tags.map((tag, i) => (
                        <div key={i} className="flex items-center gap-2 pl-4 pr-1.5 py-1.5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-100 rounded-2xl text-[11px] font-black uppercase tracking-tight shadow-sm hover:shadow-md transition-all group">
                            <span>{tag}</span>
                            <button
                                onClick={() => setTags(tags.filter((_, idx) => idx !== i))}
                                className="w-6 h-6 rounded-xl flex items-center justify-center hover:bg-rose-50 dark:hover:bg-rose-500/20 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
                            >
                                <HugeiconsIcon icon={Close} size={14} />
                            </button>
                        </div>
                    ))}
                    <div className="flex-1 flex items-center min-w-[120px] px-3">
                        <HugeiconsIcon icon={Plus} size={16} className="text-slate-300 dark:text-zinc-600" />
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleAdd}
                            placeholder="Type and enter..."
                            className="w-full bg-transparent outline-none text-[11px] font-bold text-slate-600 dark:text-zinc-400 px-2 placeholder:text-slate-300 dark:placeholder:text-zinc-600 placeholder:uppercase"
                        />
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 rounded-xl text-[10px] font-black uppercase tracking-widest border border-indigo-100 dark:border-indigo-500/20 transition-colors">Batch Tagging</div>
                <div className="px-4 py-2 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-xl text-[10px] font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-500/20 transition-colors">{tags.length} Active</div>
            </div>
        </div>
    );
};

export const TagLabelSystem = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(tagSystemCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Tag / Label System</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Metadata</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    An interactive chip management system for categorization.
                    Includes support for dynamic input, keyboard shortcuts, and semantic deletions.
                </p>
            </div>

            <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-colors duration-700">
                <div className="h-[450px] bg-[#f8fafc] dark:bg-zinc-950/50 relative flex items-center justify-center border-b border-slate-100 dark:border-zinc-800 overflow-hidden transition-colors duration-700">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(var(--pattern-color, #e2e8f0) 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <style>{`
                        .dark .h-\\[450px\\] { --pattern-color: #3f3f46; }
                    `}</style>
                    <TagPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Chip Aesthetics</span>
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
                            {tagSystemCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('import') ? 'text-emerald-400' :
                                            line.includes('tags') || line.includes('map') ? 'text-amber-300' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Interaction Tip</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Always include <strong>clear hover and focus states</strong> for input fields. For batch removal, consider adding a "Clear All" button if the tag list exceeds 10 items.
                    </p>
                </div>
            </div>
        </div>
    );
};
