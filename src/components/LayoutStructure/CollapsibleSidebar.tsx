import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const sidebarSourceCode = `import React, { useState } from 'react';

const CollapsibleSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { label: 'Projects', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' },
    { label: 'Messages', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }
  ];

  return (
    <div className={\`flex h-screen bg-slate-50 transition-all duration-300 \${isCollapsed ? 'w-20' : 'w-64'}\`}>
      <aside className="flex flex-col flex-1 bg-white border-r border-slate-200 shadow-sm relative">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-10 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 shadow-sm z-10"
        >
          <svg className={\`w-4 h-4 text-slate-500 transition-transform \${isCollapsed ? 'rotate-180' : ''}\`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="p-6 flex items-center gap-3 overflow-hidden">
          <div className="w-8 h-8 flex-shrink-0 bg-slate-900 rounded-lg" />
          {!isCollapsed && <span className="font-black text-slate-900">SYSTEM</span>}
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {menuItems.map((item) => (
            <button key={item.label} className="w-full h-10 flex items-center gap-3 px-3 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all group overflow-hidden">
              <svg className="w-5 h-5 flex-shrink-0 group-hover:text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              {!isCollapsed && <span className="text-sm font-bold truncate">{item.label}</span>}
            </button>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default CollapsibleSidebar;`;

// --- THE PREVIEW COMPONENT ---
const SidebarPreview = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="w-full h-full bg-slate-100 flex items-center justify-center p-7 rounded-xl border border-slate-200 overflow-hidden relative z-[100]">
            <div className={`h-[400px] border border-slate-200 rounded-xl bg-white shadow-2xl transition-all duration-500 flex relative overflow-hidden ${collapsed ? 'w-24' : 'w-72'}`}>
                <div className="flex flex-col flex-1 border-r border-slate-100">
                    <div className="p-6 border-b border-slate-50 flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-900 rounded-2xl flex-shrink-0 shadow-lg shadow-slate-900/10 flex items-center justify-center text-white">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </div>
                        {!collapsed && <span className="font-black text-slate-900 tracking-tighter text-xl">LGI</span>}
                    </div>

                    <div className="p-4 space-y-2 flex-1">
                        {[
                            { l: 'Analytics', i: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', c: 'blue' },
                            { l: 'Customer Feed', i: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z', c: 'purple' },
                            { l: 'Team Access', i: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', c: 'orange' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 px-3 py-2 rounded-xl hover:bg-slate-100 group cursor-pointer transition-all overflow-hidden whitespace-nowrap">
                                <div className={`w-8 h-8 rounded-xl bg-${item.c}-50 flex items-center justify-center text-${item.c}-600 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d={item.i} /></svg>
                                </div>
                                {!collapsed && <span className="text-sm font-black text-slate-500 group-hover:text-slate-900 transition-colors uppercase tracking-widest">{item.l}</span>}
                            </div>
                        ))}
                    </div>

                    <div className="p-4 border-t border-slate-50">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex-shrink-0 border-2 border-white shadow-sm" />
                            {!collapsed && (
                                <div className="overflow-hidden">
                                    <p className="text-xs font-black text-slate-900 truncate uppercase tracking-widest leading-none mb-1">Jinawa Titus</p>
                                    <p className="text-[10px] font-bold text-slate-400 truncate uppercase tracking-widest">Admin</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-2xl bg-emerald-800/50 flex items-center justify-center text-white shadow-lg active:scale-90 transition-all z-20 group hover:w-16"
                >
                    <svg className={`w-5 h-5 transition-transform duration-500 ${collapsed ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M15 19l-7-7 7-7" /></svg>
                </button>
            </div>

            <div className="absolute top-10 right-10 text-right">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Space Mode</p>
                <div className="w-24 h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-slate-900 transition-all duration-700 ${collapsed ? 'w-1/3' : 'w-full'}`} />
                </div>
            </div>
        </div>
    );
};

export const CollapsibleSidebar = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(sidebarSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Collapsible Sidebar</h2>
                    <span className="bg-purple-100 text-purple-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Navigation</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A flexible navigation container that can be toggled to maximize content area.
                    Includes smooth width transitions, icon-only modes, and responsive behaviors.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[600px] bg-[#f8fafc] relative p-4 border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}></div>
                    <SidebarPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Animation Curves</span>
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
                            {sidebarSourceCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('import') ? 'text-emerald-400' :
                                            line.includes('transition') || line.includes('flex') ? 'text-amber-300' :
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
                        Always include a <strong>Tooltip</strong> for sidebar items when in collapsed mode, so users can identify navigation links without text labels.
                    </p>
                </div>
            </div>
        </div>
    );
};
