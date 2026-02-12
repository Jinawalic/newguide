import { useState, useEffect } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    Moon02Icon as Moon,
    Sun01Icon as Sun,
    ComputerIcon as SystemIcon
} from '@hugeicons/core-free-icons';

const themeSwitcherCode = `import React, { useState, useEffect } from 'react';


const ThemeSwitcherCard = () => {
  const [theme, setTheme] = useState('light');
  const isDark = theme === 'dark';

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);


  const themes = [
    { id: 'light', label: 'Light', icon: 'Sun' },
    { id: 'dark', label: 'Dark', icon: 'Moon' },
    { id: 'system', label: 'System', icon: 'System' }
  ];

  return (
    <div className={\`w-full max-w-4xl mx-auto rounded-3xl border overflow-hidden shadow-2xl transition-all duration-700 relative \${
      isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-slate-200'
    }\`}>
       {/* Top Right Controls */}
       <div className="absolute top-6 right-6 z-20 flex gap-1 p-1 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 shadow-lg">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={\`relative px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 \${
                theme === t.id
                  ? (isDark ? 'bg-zinc-800 text-white shadow-md' : 'bg-white text-slate-900 shadow-md')
                  : (isDark ? 'text-zinc-400 hover:text-zinc-200' : 'text-slate-500 hover:text-slate-800')
              }\`}
            >
              {t.label}
            </button>
          ))}
       </div>

      <div className={\`h-[500px] relative flex items-center justify-center transition-all duration-700 \${
        isDark ? 'bg-zinc-950' : 'bg-[#f8fafc]'
      }\`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: \`radial-gradient(\${isDark ? '#3f3f46' : '#e2e8f0'} 1.5px, transparent 1.5px)\`,
            backgroundSize: '24px 24px'
        }}></div>

        {/* Main Content (Centered Theme Text) */}
        <div className="relative z-10 text-center">
            <span className={\`text-8xl font-black tracking-tighter opacity-10 transition-colors duration-700 select-none \${
                isDark ? 'text-white' : 'text-slate-900'
            }\`}>
                {theme.toUpperCase()}
            </span>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcherCard;`;

interface ThemePreviewProps {
    theme: string;
    setTheme: (theme: string) => void;
}

const ThemePreview = ({ theme, setTheme }: ThemePreviewProps) => {
    const isDark = theme === 'dark';

    const themes = [
        { id: 'light', label: 'Light', icon: Sun },
        { id: 'dark', label: 'Dark', icon: Moon },
        { id: 'system', label: 'System', icon: SystemIcon }
    ];

    return (
        <div className="w-full flex items-center justify-center p-8 relative z-[100]">
            <div className={`w-full max-w-4xl mx-auto rounded-3xl border overflow-hidden shadow-2xl transition-all duration-700 relative ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-slate-200'
                }`}>
                {/* Top Right Controls */}
                <div className="absolute top-6 right-6 z-20 flex gap-1 p-1 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 shadow-lg">
                    {themes.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => setTheme(t.id)}
                            className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 ${theme === t.id
                                ? (isDark ? 'bg-zinc-800 text-white shadow-md' : 'bg-white text-slate-900 shadow-md')
                                : (isDark ? 'text-zinc-400 hover:text-zinc-200' : 'text-slate-500 hover:text-slate-800')
                                }`}
                        >
                            <HugeiconsIcon icon={t.icon} size={14} />
                            <span>{t.label}</span>
                        </button>
                    ))}
                </div>

                <div className={`h-[500px] relative flex items-center justify-center transition-all duration-700 ${isDark ? 'bg-zinc-950' : 'bg-[#f8fafc]'
                    }`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: `radial-gradient(${isDark ? '#3f3f46' : '#e2e8f0'} 1.5px, transparent 1.5px)`,
                        backgroundSize: '24px 24px'
                    }}></div>

                    {/* Main Content (Centered Theme Text) */}
                    <div className="relative z-10 text-center">
                        <span className={`text-8xl font-black tracking-tighter opacity-10 transition-colors duration-700 select-none ${isDark ? 'text-white' : 'text-slate-900'
                            }`}>
                            {theme.toUpperCase()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ThemeSwitcher = () => {
    const [copied, setCopied] = useState(false);
    const [theme, setTheme] = useState('light');
    const isDark = theme === 'dark';

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);


    const handleCopy = () => {
        navigator.clipboard.writeText(themeSwitcherCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Theme Switcher</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Power Feature</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A toggle system for UI personalization. Supports Light, Dark, and System Preference
                    with smooth transitions and state persistence.
                </p>
            </div>

            <div className={`border rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-all duration-700 ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-slate-200'
                }`}>
                <div className={`h-[600px] relative flex items-center justify-center border-b overflow-hidden transition-all duration-700 ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-[#f8fafc] border-slate-100'
                    }`}>
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: `radial-gradient(${isDark ? '#3f3f46' : '#e2e8f0'} 1.5px, transparent 1.5px)`,
                        backgroundSize: '24px 24px'
                    }}></div>
                    <ThemePreview theme={theme} setTheme={setTheme} />
                </div>

                <div className={`px-6 py-4 flex items-center justify-between transition-colors duration-700 ${isDark ? 'bg-zinc-900 border-zinc-800 text-slate-400' : 'bg-white border-slate-100 text-slate-400'}`}>
                    <div className="flex items-center gap-4">
                        <button className={`flex items-center gap-2 font-bold text-xs transition-colors group ${isDark ? 'text-zinc-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Theme Tokens</span>
                        </button>
                    </div>
                    <div className="flex items-center gap-6">
                        <button
                            onClick={handleCopy}
                            className={`flex items-center gap-2 font-bold text-xs transition-all ${copied ? 'text-emerald-600' : (isDark ? 'text-zinc-400 hover:text-zinc-100' : 'text-slate-500 hover:text-slate-900')}`}
                        >
                            <HugeiconsIcon icon={copied ? Tick : Copy} size={16} />
                            <span>{copied ? 'Copied' : 'Copy code'}</span>
                        </button>
                    </div>
                </div>

                <div className="bg-[#0f172a] p-8 overflow-auto max-h-[500px] custom-scrollbar text-white">
                    <pre className="text-[13px] font-mono leading-relaxed group">
                        <code className="text-slate-200">
                            {themeSwitcherCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('theme') ? 'text-emerald-400' :
                                            line.includes('setTheme') || line.includes('themes') ? 'text-amber-300' :
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
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 transition-colors">State Sync</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium leading-relaxed transition-colors">
                        Always include a <code>useEffect</code> to apply the theme class to the <code>document.documentElement</code> for consistent styling across the shadow DOM and portals.
                    </p>
                </div>
            </div>
        </div>
    );
};
