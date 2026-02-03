import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const dragDropListSourceCode = `import React, { useState } from 'react';

const DragDropList = () => {
  const [items, setItems] = useState([
    { id: '1', title: 'User Dashboard', description: 'React, Tailwind, Framer Motion', status: 'In Progress' },
    { id: '2', title: 'Payment Integration', description: 'Stripe API, Webhooks', status: 'Completed' },
    { id: '3', title: 'Auth System', description: 'Firebase Auth, OAuth 2.0', status: 'Backlog' },
    { id: '4', title: 'Profile Page', description: 'Avatar upload, Social links', status: 'Review' }
  ]);
  const [draggedItem, setDraggedItem] = useState(null);

  const onDragStart = (e, index) => {
    setDraggedItem(items[index]);
    e.dataTransfer.effectAllowed = "move";
  };

  const onDragOver = (index) => {
    const draggedOverItem = items[index];

    if (draggedItem === draggedOverItem) return;

    const newItems = items.filter(item => item !== draggedItem);
    newItems.splice(index, 0, draggedItem);
    setItems(newItems);
  };

  const onDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-2">
      {items.map((item, index) => (
        <div
          key={item.id}
          onDragOver={() => onDragOver(index)}
          className="group relative"
        >
          <div
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDragEnd={onDragEnd}
            className={\`
              flex items-center gap-4 p-4 bg-white border rounded-2xl cursor-grab active:cursor-grabbing transition-all duration-200
              \${draggedItem?.id === item.id ? 'opacity-40 border-emerald-500 scale-95' : 'border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200/50'}
            \`}
          >
            <div className="text-slate-300 group-hover:text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
            
            <div className="flex-1">
              <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
              <p className="text-[11px] text-slate-400 font-medium">{item.description}</p>
            </div>
            
            <span className={\`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider 
              \${item.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-400'}
            \`}>
              {item.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DragDropList;`;

// --- THE PREVIEW COMPONENT ---
const DragDropListPreview = () => {
    interface Item {
        id: string;
        title: string;
        description: string;
        status: string;
    }

    const [items, setItems] = useState<Item[]>([
        { id: '1', title: 'User Dashboard', description: 'React, Tailwind, Framer Motion', status: 'In Progress' },
        { id: '2', title: 'Payment Integration', description: 'Stripe API, Webhooks', status: 'Completed' },
        { id: '3', title: 'Auth System', description: 'Firebase Auth, OAuth 2.0', status: 'Backlog' },
        { id: '4', title: 'Profile Page', description: 'Avatar upload, Social links', status: 'Review' }
    ]);
    const [draggedItem, setDraggedItem] = useState<Item | null>(null);

    const onDragStart = (e: React.DragEvent, index: number) => {
        setDraggedItem(items[index]);
        e.dataTransfer.effectAllowed = "move";
    };

    const onDragOver = (index: number) => {
        const currentDraggedItem = draggedItem;
        if (!currentDraggedItem) return;

        const draggedOverItem = items[index];
        if (currentDraggedItem === draggedOverItem) return;

        const newItems = items.filter(item => item !== currentDraggedItem);
        newItems.splice(index, 0, currentDraggedItem);
        setItems(newItems);
    };

    const onDragEnd = () => {
        setDraggedItem(null);
    };

    return (
        <div className="w-full max-w-sm mx-auto space-y-2 relative z-[100]">
            {items.map((item, index) => (
                <div
                    key={item.id}
                    onDragOver={() => onDragOver(index)}
                    className="group relative"
                >
                    <div
                        draggable
                        onDragStart={(e) => onDragStart(e, index)}
                        onDragEnd={onDragEnd}
                        className={`
                            flex items-center gap-3 p-3.5 bg-white border rounded-2xl cursor-grab active:cursor-grabbing transition-all duration-200
                            ${draggedItem?.id === item.id ? 'opacity-40 border-emerald-500 scale-95 shadow-inner' : 'border-slate-100 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-slate-200/50'}
                        `}
                    >
                        <div className="text-slate-300 group-hover:text-emerald-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>

                        <div className="flex-1 overflow-hidden">
                            <h4 className="text-[13px] font-bold text-slate-800 truncate">{item.title}</h4>
                            <p className="text-[10px] text-slate-400 font-bold truncate tracking-tight">{item.description}</p>
                        </div>

                        <span className={`px-2 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-widest whitespace-nowrap
                            ${item.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}
                        `}>
                            {item.status}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const DragDropListReorder = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(dragDropListSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 tracking-tight font-heading">List Reordering</h2>
                    <span className="bg-purple-100 text-purple-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Interactive</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">
                    Intuitive drag-and-drop list reordering with smooth transitions and visual feedback.
                    Ideal for task management, menu sorting, and customizable dashboards.
                </p>
            </div>

            {/* Design Card */}
            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[450px] bg-[#f8fafc] relative flex items-center justify-center overflow-visible border-b border-slate-100 p-8">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <div className="relative z-10 w-full">
                        <DragDropListPreview />
                    </div>
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Animation Settings</span>
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
                            {dragDropListSourceCode.split('\n').map((line, i) => (
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">State Management</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        This component uses the native <strong>HTML5 Drag and Drop API</strong>. For complex animations and touch support, consider using <strong>Framer Motion</strong> or <strong>dnd-kit</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
};
