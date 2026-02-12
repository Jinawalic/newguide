import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    Sorting05Icon as SortIcon,
    ArrowUp01Icon as SortUp,
    ArrowDown01Icon as SortDown,
    FilterIcon as FilterIcon
} from '@hugeicons/core-free-icons';

const tableSortingCode = `import React, { useState } from 'react';

const SortableHeader = ({ label, field, sortConfig, onSort }) => {
  const isSorted = sortConfig?.field === field;
  const direction = sortConfig?.direction;

  return (
    <th 
      onClick={() => onSort(field)}
      className="px-6 py-4 cursor-pointer hover:bg-slate-50 transition-colors"
    >
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-slate-900">{label}</span>
        <div className="flex flex-col text-slate-300">
           <svg 
             className={\`w-2.5 h-2.5 \${isSorted && direction === 'asc' ? 'text-blue-600' : ''}\`} 
             fill="currentColor" viewBox="0 0 20 20"
           >
             <path d="M10 3l-7 7h14l-7-7z" />
           </svg>
           <svg 
             className={\`w-2.5 h-2.5 \${isSorted && direction === 'desc' ? 'text-blue-600' : ''}\`} 
             fill="currentColor" viewBox="0 0 20 20"
           >
             <path d="M10 17l7-7H3l7 7z" />
           </svg>
        </div>
      </div>
    </th>
  );
};

export default SortableHeader;`;

const SortingPreview = () => {
    const [sort, setSort] = useState<{ field: string, dir: 'asc' | 'desc' }>({ field: 'rev', dir: 'desc' });
    const [data] = useState([
        { id: 1, name: 'Project Alpha', rev: 45000, date: '2024-03-01', growth: '+12.5%' },
        { id: 2, name: 'Beta Systems', rev: 12000, date: '2024-01-15', growth: '-2.4%' },
        { id: 3, name: 'Gamma Corp', rev: 89000, date: '2024-02-20', growth: '+45.1%' },
        { id: 4, name: 'Delta Logic', rev: 31000, date: '2023-12-05', growth: '+5.8%' }
    ]);

    const handleSort = (field: string) => {
        setSort(prev => ({
            field,
            dir: prev.field === field && prev.dir === 'asc' ? 'desc' : 'asc'
        }));
    };

    const sortedData = [...data].sort((a, b) => {
        const valA = a[sort.field as keyof typeof a];
        const valB = b[sort.field as keyof typeof b];
        if (sort.dir === 'asc') return valA > valB ? 1 : -1;
        return valA < valB ? 1 : -1;
    });

    return (
        <div className="w-full flex flex-col items-center gap-10 relative z-[100]">
            <div className="w-full max-w-2xl bg-white dark:bg-zinc-900/50 backdrop-blur-md p-10 rounded-xl border border-slate-100 dark:border-zinc-800 shadow-sm relative group overflow-hidden transition-colors duration-700">
                <div className="flex items-center justify-between mb-10 px-4">
                    <div>
                        <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none mb-2 transition-colors">Revenue Analytics</h3>
                        <p className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest leading-none transition-colors">Ordered view</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="w-10 h-10 bg-slate-50 dark:bg-zinc-800 rounded-xl flex items-center justify-center text-slate-400 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-zinc-100 transition-colors">
                            <HugeiconsIcon icon={FilterIcon} size={18} />
                        </button>
                        <div className="w-10 h-10 bg-blue-50 dark:bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <HugeiconsIcon icon={SortIcon} size={24} />
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-[#fcfdfe] dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-xl transition-colors duration-700">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-800/50">
                                {[
                                    { id: 'name', label: 'Entity Name' },
                                    { id: 'rev', label: 'Rev ($)' },
                                    { id: 'date', label: 'Date' }
                                ].map(col => (
                                    <th
                                        key={col.id}
                                        onClick={() => handleSort(col.id)}
                                        className="px-8 py-6 cursor-pointer group/th transition-colors hover:bg-white dark:hover:bg-zinc-800"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className={`text-[10px] font-black uppercase tracking-widest ${sort.field === col.id ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-zinc-400'}`}>{col.label}</span>
                                            <div className="flex flex-col -space-y-1 transition-all">
                                                <HugeiconsIcon
                                                    icon={SortUp}
                                                    size={10}
                                                    className={`transition-all ${sort.field === col.id && sort.dir === 'asc' ? 'text-blue-600 dark:text-blue-400 scale-125' : 'text-slate-200 dark:text-zinc-700 opacity-0 group-hover/th:opacity-100'}`}
                                                />
                                                <HugeiconsIcon
                                                    icon={SortDown}
                                                    size={10}
                                                    className={`transition-all ${sort.field === col.id && sort.dir === 'desc' ? 'text-blue-600 dark:text-blue-400 scale-125' : 'text-slate-200 dark:text-zinc-700 opacity-0 group-hover/th:opacity-100'}`}
                                                />
                                            </div>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.map((row, i) => (
                                <tr key={row.id} className={`group/tr transition-all duration-500 border-b border-slate-50 dark:border-zinc-800/50 last:border-0 hover:bg-white dark:hover:bg-zinc-800 ${i % 2 === 1 ? 'bg-slate-50/30 dark:bg-zinc-800/20' : ''}`}>
                                    <td className="px-8 py-5 text-[11px] font-black text-slate-900 dark:text-zinc-100 uppercase tracking-tight">{row.name}</td>
                                    <td className="px-8 py-5 text-[11px] font-mono font-bold text-slate-500 dark:text-zinc-400">
                                        {row.rev.toLocaleString()}
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest">{row.date}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export const TableSorting = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(tableSortingCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Table Sorting</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Power Feature</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A data orchestration pattern for interactive tables. Allows users to
                    alphabetize or rank data instantly without reloading the page.
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
                    <SortingPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Generic Sorters</span>
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
                            {tableSortingCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('sortConfig') ? 'text-emerald-400' :
                                            line.includes('onSort') || line.includes('direction') ? 'text-amber-300' :
                                                line.includes('return') || line.includes('onClick') ? 'text-purple-400' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Accessibility Check</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Use <code>aria-sort="ascending"</code> or <code>descending</code> on table headers to notify users with visual impairments about the current data order.
                    </p>
                </div>
            </div>
        </div>
    );
};
