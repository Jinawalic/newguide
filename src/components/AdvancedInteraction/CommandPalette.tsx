import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Copy01Icon as Copy,
  InformationCircleIcon as Info,
  Settings02Icon as Styles,
  Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const commandPaletteSourceCode = `import React, { useState, useEffect } from 'react';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  
  const commands = [
    { id: '1', name: 'Search Projects...', shortcut: '⌘P', category: 'General' },
    { id: '2', name: 'Create New Task', shortcut: '⌘N', category: 'General' },
    { id: '3', name: 'Go to Settings', shortcut: '⌘,', category: 'System' },
    { id: '4', name: 'View Profile', shortcut: '⌘U', category: 'User' },
    { id: '5', name: 'Toggle Dark Mode', shortcut: '⌘D', category: 'Appearance' },
    { id: '6', name: 'Logout', shortcut: '⌥L', category: 'System' }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredCommands = commands.filter(cmd => 
    cmd.name.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
        <div className="relative group p-4 border-b border-slate-100">
          <svg className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            type="text"
            autoFocus
            placeholder="Type a command or search..."
            className="w-full pl-10 pr-4 py-3 text-base font-medium outline-none placeholder:text-slate-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        
        <div className="max-h-[350px] overflow-y-auto p-2 scrollbar-hide">
          {filteredCommands.length > 0 ? (
            <div className="space-y-4">
              {['General', 'User', 'Appearance', 'System'].map(category => {
                const categoryCmds = filteredCommands.filter(c => c.category === category);
                if (categoryCmds.length === 0) return null;
                return (
                  <div key={category}>
                    <h3 className="px-4 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">{category}</h3>
                    <div className="space-y-1">
                      {categoryCmds.map(cmd => (
                        <button
                          key={cmd.id}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 transition-all group"
                        >
                          <span className="text-sm font-bold">{cmd.name}</span>
                          <span className="px-2 py-1 bg-slate-100 text-[10px] font-black text-slate-500 rounded-lg group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
                            {cmd.shortcut}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-8 text-center text-sm font-bold text-slate-400">
              No results found for "{query}"
            </div>
          )}
        </div>
        
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-wider">
           <div className="flex items-center gap-1">
             <span className="px-1.5 py-0.5 bg-white border border-slate-200 rounded shadow-sm text-[9px]">ENTER</span>
             <span>to select</span>
           </div>
           <div className="flex items-center gap-1">
             <span className="px-1.5 py-0.5 bg-white border border-slate-200 rounded shadow-sm text-[9px]">ESC</span>
             <span>to close</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;`;

// --- THE PREVIEW COMPONENT ---
const CommandPalettePreview = () => {
  const [query, setQuery] = useState('');

  const commands = [
    { id: '1', name: 'Settings', shortcut: '⌘,', category: 'System', icon: '⚙️' },
    { id: '2', name: 'Search Users', shortcut: '⌘U', category: 'General', icon: '👤' },
    { id: '3', name: 'New Document', shortcut: '⌘N', category: 'General', icon: '📄' },
    { id: '4', name: 'Dark Mode', shortcut: '⌘D', category: 'Theme', icon: '🌙' },
    { id: '5', name: 'Help Center', shortcut: '⌘H', category: 'System', icon: '❓' }
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100 relative z-[100] animate-in zoom-in-95 duration-500">
      <div className="relative group p-3 border-b border-slate-100">
        <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-500 transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input
          type="text"
          placeholder="Search commands..."
          className="w-full pl-9 pr-4 py-2 text-[13px] font-bold outline-none placeholder:text-slate-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="max-h-[280px] overflow-y-auto p-2 scrollbar-hide">
        {filteredCommands.length > 0 ? (
          <div className="space-y-4">
            {['General', 'Theme', 'System'].map(category => {
              const categoryCmds = filteredCommands.filter(c => c.category === category);
              if (categoryCmds.length === 0) return null;
              return (
                <div key={category}>
                  <h3 className="px-3 py-1.5 text-[9px] font-black text-slate-400 uppercase tracking-widest">{category}</h3>
                  <div className="space-y-0.5">
                    {categoryCmds.map(cmd => (
                      <button
                        key={cmd.id}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs grayscale group-hover:grayscale-0 transition-all">{cmd.icon}</span>
                          <span className="text-[12px] font-bold">{cmd.name}</span>
                        </div>
                        <span className="px-1.5 py-0.5 bg-slate-100 text-[9px] font-black text-slate-500 rounded-lg group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
                          {cmd.shortcut}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-8 text-center italic">
            <p className="text-xs font-bold text-slate-400">Nothing found...</p>
          </div>
        )}
      </div>

      <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex justify-center gap-4 text-[9px] font-black text-slate-400 uppercase tracking-wider">
        <span>Search via <span className="text-emerald-600">⌘+K</span> anywhere</span>
      </div>
    </div>
  );
};

export const CommandPalette = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(commandPaletteSourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Command Palette</h2>
          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Power Tool</span>
        </div>
        <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
          Supercharge user productivity with a keyboard-first command interface.
          Search features, trigger actions, and navigate your app without leaving the keyboard.
        </p>
      </div>

      {/* Design Card */}
      <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
        <div className="h-[500px] bg-[#0f172a] relative flex items-center justify-center border-b border-slate-800 p-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #334155 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}></div>
          <div className="relative z-10 w-full max-w-sm">
            <CommandPalettePreview />
          </div>
          {/* Shadow decor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        </div>

        <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
              <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
              <span>Global Shortcut</span>
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
              {commandPaletteSourceCode.split('\n').map((line, i) => (
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
          <h4 className="text-sm font-bold text-slate-900 mb-1">UX Pattern</h4>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Commonly triggered via <strong>Ctrl+K</strong> or <strong>Cmd+K</strong>. Ensure the palette is globally accessible but doesn't conflict with browser defaults.
          </p>
        </div>
      </div>
    </div>
  );
};
