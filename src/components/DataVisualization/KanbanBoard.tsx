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
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Market research', status: 'todo' },
    { id: '2', title: 'Write projects', status: 'in-progress' },
    { id: '3', title: 'Set up repository', status: 'in-progress' },
    { id: '4', title: 'test3', status: 'done' },
    { id: '5', title: 'Design UI mockups', status: 'done' }
  ]);
  
  const [draggedTaskId, setDraggedTaskId] = useState(null);
  const [newTask, setNewTask] = useState(null);

  const columns = [
    { id: 'todo', title: 'To Do', color: 'bg-blue-600' },
    { id: 'in-progress', title: 'In Progress', color: 'bg-amber-500' },
    { id: 'done', title: 'Done', color: 'bg-emerald-500' }
  ];

  const handleDragStart = (e, taskId) => {
    setDraggedTaskId(taskId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    if (draggedTaskId) {
      setTasks(tasks.map(t => 
        t.id === draggedTaskId ? { ...t, status } : t
      ));
      setDraggedTaskId(null);
    }
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const handleAddTask = () => {
    if (newTask?.title.trim()) {
      setTasks([...tasks, { 
        id: Date.now().toString(), 
        title: newTask.title, 
        status: newTask.status 
      }]);
      setNewTask(null);
    }
  };

  return (
    <div className="w-full bg-white p-8 overflow-x-auto min-h-[600px] text-zinc-100 font-sans">
      <div className="flex gap-2 min-w-max items-start">
        {columns.map(col => {
          const colTasks = tasks.filter(t => t.status === col.id);
          return (
            <div 
              key={col.id} 
              className="w-[300px] flex flex-col gap-0 group/col relative"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, col.id)}
            >
              {/* Column Header */}
              <div className={\`\${col.color} p-4 rounded-t-xl flex items-center justify-between shadow-lg relative z-10\`}>
                <div className="flex items-center gap-3">
                  <h3 className="text-white font-bold text-lg">{col.title}</h3>
                  <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs font-bold ring-1 ring-white/10">
                    {colTasks.length}
                  </span>
                </div>
              </div>

              {/* Tasks Container */}
              <div className="bg-zinc-900/50 p-3 flex flex-col gap-3 min-h-[150px] rounded-b-xl border border-zinc-900 border-t-0">
                {colTasks.map(task => (
                  <div 
                    key={task.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task.id)}
                    className="bg-zinc-800 p-4 rounded-xl shadow-sm border border-zinc-700/50 hover:border-zinc-600 cursor-grab active:cursor-grabbing group/task relative transition-all hover:shadow-md hover:-translate-y-1"
                  >
                    <p className="text-zinc-300 text-sm font-medium pr-6">{task.title}</p>
                    <button 
                      onClick={() => handleDelete(task.id)}
                      className="absolute top-2 right-2 text-zinc-500 hover:text-rose-500 opacity-0 group-hover/task:opacity-100 transition-all p-1 hover:bg-zinc-700 rounded"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
                
                {colTasks.length === 0 && (
                   <div className="h-24 border-2 border-dashed border-zinc-800 rounded-xl flex items-center justify-center text-zinc-600 text-xs uppercase tracking-widest font-bold">
                     Drop here
                   </div>
                )}
              </div>

               {/* Add Task Button (Visible on Hover) */}
               <div className="mt-3 opacity-0 group-hover/col:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover/col:translate-y-0">
                 {newTask?.status === col.id ? (
                   <div className="bg-zinc-800 p-2 rounded-xl border border-zinc-700 shadow-xl flex gap-2 animate-in slide-in-from-top-2">
                     <input 
                       autoFocus
                       type="text" 
                       value={newTask.title}
                       onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                       onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
                       onBlur={() => !newTask.title && setNewTask(null)}
                       placeholder="Task title..."
                       className="bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none flex-1 px-2"
                     />
                     <button 
                       onClick={() => handleAddTask()}
                       className="p-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors"
                     >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path d="M5 12h14M12 5v14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </button>
                   </div>
                 ) : (
                   <button 
                     onClick={() => setNewTask({ status: col.id, title: '' })}
                     className="w-full py-2 flex items-center justify-center gap-2 text-zinc-500 hover:text-white bg-zinc-900/50 hover:bg-zinc-800 rounded-xl border border-transparent hover:border-zinc-700 transition-all cursor-pointer"
                   >
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                     <span className="text-xs font-bold uppercase tracking-wider">Add Task</span>
                   </button>
                 )}
               </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KanbanBoard;`;

// --- THE PREVIEW COMPONENT ---
const KanbanPreview = () => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Market research', status: 'todo' },
    { id: '2', title: 'Write projects', status: 'in-progress' },
    { id: '3', title: 'Set up repository', status: 'in-progress' },
    { id: '4', title: 'test3', status: 'done' },
    { id: '5', title: 'Design UI mockups', status: 'done' }
  ]);

  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);
  const [newTask, setNewTask] = useState<{ status: string, title: string } | null>(null);

  const columns = [
    { id: 'todo', title: 'To Do', color: 'bg-blue-600' },
    { id: 'in-progress', title: 'In Progress', color: 'bg-amber-500' },
    { id: 'done', title: 'Done', color: 'bg-emerald-500' }
  ];

  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    setDraggedTaskId(taskId);
    e.dataTransfer.effectAllowed = 'move';
    // Transparent drag image or default
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, status: string) => {
    e.preventDefault();
    if (draggedTaskId) {
      setTasks(tasks.map(t =>
        t.id === draggedTaskId ? { ...t, status } : t
      ));
      setDraggedTaskId(null);
    }
  };

  const handleDelete = (taskId: string) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const handleAddTask = () => {
    if (newTask?.title.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), title: newTask.title, status: newTask.status }]);
      setNewTask(null);
    }
  };

  return (
    <div className="w-full h-[500px] bg-white dark:bg-zinc-950 p-4 relative z-[100] animate-in fade-in duration-700 font-sans transition-colors">
      <div className="flex gap-2 min-w-max h-full items-start">
        {columns.map(col => {
          const colTasks = tasks.filter(t => t.status === col.id);
          return (
            <div
              key={col.id}
              className="w-[300px] flex flex-col gap-0 group/col relative"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, col.id)}
            >
              {/* Column Header */}
              <div className={`${col.color} p-4 rounded-t-xl flex items-center justify-between shadow-lg relative z-10`}>
                <div className="flex items-center gap-3">
                  <h3 className="text-white font-bold text-lg">{col.title}</h3>
                  <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs font-bold ring-1 ring-white/10">
                    {colTasks.length}
                  </span>
                </div>
              </div>

              {/* Tasks Container */}
              <div className="bg-zinc-900/50 p-3 flex flex-col gap-3 min-h-[150px] rounded-b-xl border border-zinc-900 border-t-0">
                {colTasks.map(task => (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task.id)}
                    className="bg-zinc-800 p-4 rounded-xl shadow-sm border border-zinc-700/50 hover:border-zinc-600 cursor-grab active:cursor-grabbing group/task relative transition-all hover:shadow-md hover:-translate-y-1"
                  >
                    <p className="text-zinc-300 text-sm font-medium pr-6">{task.title}</p>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="absolute top-2 right-2 text-zinc-500 hover:text-rose-500 opacity-0 group-hover/task:opacity-100 transition-all p-1 hover:bg-zinc-700 rounded"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}

                {colTasks.length === 0 && (
                  <div className="h-24 border-2 border-dashed border-zinc-800 rounded-xl flex items-center justify-center text-zinc-600 text-xs uppercase tracking-widest font-bold">
                    Drop here
                  </div>
                )}
              </div>

              {/* Add Task Button (Visible on Hover) */}
              <div className="mt-3 opacity-0 group-hover/col:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover/col:translate-y-0">
                {newTask?.status === col.id ? (
                  <div className="bg-zinc-800 p-2 rounded-xl border border-zinc-700 shadow-xl flex gap-2 animate-in slide-in-from-top-2">
                    <input
                      autoFocus
                      type="text"
                      value={newTask.title}
                      onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                      onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
                      onBlur={() => !newTask.title && setNewTask(null)}
                      placeholder="Task title..."
                      className="bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none flex-1 px-2"
                    />
                    <button
                      onClick={() => handleAddTask()}
                      className="p-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path d="M5 12h14M12 5v14" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setNewTask({ status: col.id, title: '' })}
                    className="w-full py-2 flex items-center justify-center gap-2 text-zinc-500 hover:text-white bg-zinc-900/50 hover:bg-zinc-800 rounded-xl border border-transparent hover:border-zinc-700 transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xs font-bold uppercase tracking-wider">Add Task</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
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
          <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Kanban Board</h2>
          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Workflow</span>
        </div>
        <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
          Agile project management interface for tracking tasks across stages.
          Includes support for drag-and-drop, task prioritizing, and team assignment.
        </p>
      </div>

      <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-colors duration-700">
        <div className="h-[600px] bg-[#f8fafc] dark:bg-zinc-950/50 relative flex items-center justify-center border-b border-slate-100 dark:border-zinc-800 overflow-x-auto custom-scrollbar transition-colors duration-700">
          <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(var(--pattern-color, #e2e8f0) 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px'
          }}></div>
          <style>{`
                        .dark .h-\\[600px\\] { --pattern-color: #3f3f46; }
                    `}</style>
          <KanbanPreview />
        </div>

        <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
              <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
              <span>Column Layout</span>
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

      <div className="mt-8 flex items-start gap-3 p-4 bg-slate-50 dark:bg-zinc-900/50 rounded-2xl border border-slate-100 dark:border-zinc-800 transition-colors">
        <div className="text-emerald-600 dark:text-emerald-400 mt-0.5 transition-colors">
          <HugeiconsIcon icon={Info} size={20} />
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 transition-colors">Interactive Pattern</h4>
          <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium leading-relaxed transition-colors">
            For production-grade drag and drop, we recommend using <strong>dnd-kit</strong> or <strong>react-beautiful-dnd</strong> to handle complex sorting logic and accessibility.
          </p>
        </div>
      </div>
    </div>
  );
};
