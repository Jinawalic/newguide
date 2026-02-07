import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    Shield01Icon as Shield,
    UserCircleIcon as User,
    Edit01Icon as Editor,
    EyeIcon as Viewer
} from '@hugeicons/core-free-icons';

const roleBadgeCode = `import React from 'react';

const RoleBadge = ({ role = 'member' }) => {
  const styles = {
    admin: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    editor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    viewer: 'bg-blue-50 text-blue-700 border-blue-100',
    member: 'bg-slate-50 text-slate-700 border-slate-100'
  };

  const icons = {
    admin: <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeWidth={2.5} /></svg>,
    editor: <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeWidth={2.5} /></svg>,
    viewer: <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth={2.5} /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth={2.5} /></svg>,
    member: <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeWidth={2.5} /></svg>
  };

  return (
    <div className={\`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest \${styles[role]}\`}>
      {icons[role]}
      {role}
    </div>
  );
};

export default RoleBadge;`;

const BadgePreview = () => {
    const roles = [
        { name: 'Admin', icon: Shield, color: 'indigo', desc: 'Full System Access' },
        { name: 'Editor', icon: Editor, color: 'emerald', desc: 'Content Management' },
        { name: 'Viewer', icon: Viewer, color: 'blue', desc: 'Read-only Access' },
        { name: 'Member', icon: User, color: 'slate', desc: 'Standard Profile' }
    ];

    return (
        <div className="w-full flex flex-col items-center gap-8 relative z-[100]">
            <div className="grid grid-cols-2 gap-4">
                {roles.map((role, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm shadow-slate-900/5 flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300">
                        <div className={`w-10 h-10 rounded-2xl bg-${role.color}-50 flex items-center justify-center text-${role.color}-600 mb-4 group-hover:scale-110 transition-transform`}>
                            <HugeiconsIcon icon={role.icon} size={24} />
                        </div>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 bg-${role.color}-50 text-${role.color}-700 border border-${role.color}-100 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-3`}>
                            <div className={`w-1 h-1 rounded-full bg-${role.color}-600 animate-pulse`} />
                            {role.name}
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{role.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const RoleBadge = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(roleBadgeCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Role Badge</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Permission Visuals</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    Distinct visual markers for user classification. Uses specialized color palettes
                    to indicate different levels of system authority at a glance.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[500px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <BadgePreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Color Palettes</span>
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
                            {roleBadgeCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('import') ? 'text-emerald-400' :
                                            line.includes('const') || line.includes('export') ? 'text-blue-400' :
                                                line.includes('return') ? 'text-purple-400' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Consistency Check</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Avoid using standard "Success/Error/Warning" colors for roles to prevent confusion with system feedback. Use high-contrast, unique colors like Indigo or Purple for high-privileged roles.
                    </p>
                </div>
            </div>
        </div>
    );
};
