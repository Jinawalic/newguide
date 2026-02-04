import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const kanbanBoardSourceCode = `import React, { useState } from 'react';

const KanbanBoard = () => {
  const [columns, setColumns] = useState([
    {
      id: 'todo',
      title: 'To Do',
      tasks: [
        { id: '1', title: 'System Architecture', tag: 'Core', priority: 'High' },
        { id: '2', title: 'User Interviews', tag: 'UX', priority: 'Medium' }
      ]
    },
    {
      id: 'progress',
      title: 'In Progress',
      tasks: [
        { id: '3', title: 'API Integration', tag: 'Dev', priority: 'High' }
      ]
    },
    {
      id: 'done',
      title: 'Done',
      tasks: [
        { id: '4', title: 'Brand Guidelines', tag: 'Design', priority: 'Low' }
      ]
    }
  ]);

  return (
    <div className="flex gap-6 overflow-x-auto pb-4">
      {columns.map(col => (
        <div key={col.id} className="min-w-[300px] bg-slate-50 p-4 rounded-3xl border border-slate-100 flex flex-col h-fit">
          <div className="flex items-center justify-between mb-4 px-2">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">{col.title}</h3>
            <span className="bg-white px-2 py-0.5 rounded-lg text-[10px] font-black text-slate-400 border border-slate-100">{col.tasks.length}</span>
          </div>
          
          <div className="space-y-3">
            {col.tasks.map(task => (
              <div key={task.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-grab active:cursor-grabbing group">
                <div className="flex justify-between items-start mb-2">
                   <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase tracking-wider rounded-md">{task.tag}</span>
                   <div className="text-slate-200 group-hover:text-slate-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                   </div>
                </div>
                <p className="text-sm font-bold text-slate-700 leading-tight">{task.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;`;

// --- THE PREVIEW COMPONENT ---
const KanbanPreview = () => {
    return (
        <div className="w-full h-full flex items-center justify-center p-8 relative z-[100] animate-in fade-in duration-700">
            <div className="flex gap-6 w-full max-w-4xl h-full">
                {[
                    { title: 'In Planning', count: 3, tasks: [{ t: 'Design Prototype', p: 'priority' }, { t: 'Market Research', p: 'low' }] },
                    { title: 'Work in Progress', count: 1, tasks: [{ t: 'API Development', p: 'critical' }] },
                    { title: 'Testing / QA', count: 0, tasks: [] }
                ].map((col, i) => (
                    <div key={i} className={`flex-1 min-w-[260px] bg-slate-50/50 p-5 rounded-[32px] border border-slate-100/50 backdrop-blur-sm flex flex-col h-fit transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50`}>
                        <div className="flex items-center justify-between mb-6 px-1">
                            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">{col.title}</h3>
                            <span className="w-6 h-6 rounded-lg bg-white flex items-center justify-center text-[10px] font-black text-slate-900 shadow-sm border border-slate-100">{col.count}</span>
                        </div>

                        <div className="space-y-4">
                            {col.tasks.map((task, j) => (
                                <div key={j} className="bg-white p-5 rounded-3xl border border-slate-50 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`w-8 h-1 rounded-full ${task.p === 'critical' ? 'bg-rose-500' : 'bg-emerald-500'}`} />
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white" />
                                            <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white" />
                                        </div>
                                    </div>
                                    <p className="text-[13px] font-bold text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors leading-tight">{task.t}</p>
                                    <div className="flex items-center gap-4 text-slate-300">
                                        <div className="flex items-center gap-1.5">
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
                                            <span className="text-[10px] font-bold">4</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.414a4 4 0 00-5.656-5.656l-6.415 6.414a6 6 0 108.486 8.486L20.5 13" /></svg>
                                            <span className="text-[10px] font-bold">2</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {col.tasks.length === 0 && (
                                <div className="py-20 flex flex-col items-center justify-center border-2 border-dashed border-slate-100 rounded-[32px] text-slate-300 grayscale animate-pulse">
                                    <svg className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span className="text-[10px] font-black uppercase tracking-widest">No Tasks</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const KanbanBoard = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(kanbanBoardSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight font-heading">Kanban Board</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Workflow</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">
                    Agile project management interface for tracking tasks across stages.
                    Includes support for drag-and-drop, task prioritizing, and team assignment.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[600px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-x-auto custom-scrollbar">
                    <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <KanbanPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Column Layout</span>
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
                            {kanbanBoardSourceCode.split('\n').map((line, i) => (
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

            <div className="mt-8 flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-emerald-600 mt-0.5">
                    <HugeiconsIcon icon={Info} size={20} />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Interactive Pattern</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        For production-grade drag and drop, we recommend using <strong>dnd-kit</strong> or <strong>react-beautiful-dnd</strong> to handle complex sorting logic and accessibility.
                    </p>
                </div>
            </div>
        </div>
    );
};
