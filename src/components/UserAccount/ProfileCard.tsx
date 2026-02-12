import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    Mail01Icon as Mail,
    Location01Icon as Location,
    Calendar03Icon as Calendar,
    UserCircleIcon as Profile,
    Settings01Icon as Settings
} from '@hugeicons/core-free-icons';

const profileCardCode = `import React from 'react';

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm max-w-sm">
      <div className="h-32 bg-slate-900 overflow-hidden relative">
         <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent" />
      </div>
      <div className="px-6 pb-6 relative">
          <div className="absolute -top-12 left-6">
              <div className="w-24 h-24 rounded-full border-4 border-white bg-slate-100 shadow-xl overflow-hidden">
                   <svg className="w-full h-full text-slate-300 p-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeWidth={1.5} /></svg>
              </div>
          </div>
          <div className="pt-16">
              <h3 className="text-xl font-black text-slate-900 tracking-tight">{user.name}</h3>
              <p className="text-sm font-bold text-slate-500">{user.handle}</p>
              
              <div className="mt-4 flex flex-wrap gap-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {user.location}
                  </div>
              </div>

              <div className="mt-6 flex gap-3">
                  <button className="flex-1 h-11 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-slate-900/10 active:scale-95 transition-all">
                      View Profile
                  </button>
                  <button className="w-11 h-11 border border-slate-200 text-slate-400 rounded-2xl flex items-center justify-center hover:bg-slate-50 transition-all">
                       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth={2} /></svg>
                  </button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ProfileCard;`;

const ProfileCardPreview = () => {
    return (
        <div className="w-full h-full flex items-center justify-center p-8 bg-slate-50 dark:bg-zinc-950/20 rounded-xl border border-slate-200 dark:border-zinc-800 relative z-[100] overflow-hidden transition-colors">
            <div className="w-full max-w-sm bg-white dark:bg-zinc-900/50 backdrop-blur-md rounded-xl border border-slate-100 dark:border-zinc-800 shadow-2xl overflow-hidden relative group transition-colors">
                {/* Header/Cover */}
                <div className="h-40 bg-zinc-950 overflow-hidden relative">
                    <div className="absolute inset-0 opacity-20 grayscale" style={{
                        backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                    <div className="absolute top-4 right-4 flex gap-2">
                        <button className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md text-white border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                            <HugeiconsIcon icon={Settings} size={18} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="px-8 pb-8 relative">
                    {/* Avatar */}
                    <div className="absolute -top-14 left-8">
                        <div className="w-20 h-20 rounded-full border-4 border-white dark:border-zinc-900 bg-slate-50 dark:bg-zinc-800 shadow-2xl shadow-zinc-950/20 overflow-hidden relative group-hover:scale-105 transition-all duration-500">
                            <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-indigo-600 p-6 flex items-center justify-center text-white">
                                <HugeiconsIcon icon={Profile} size={38} />
                            </div>
                        </div>
                    </div>

                    <div className="pt-10">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tighter transition-colors">David Kostas</h3>
                            <div className="px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-[9px] font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-500/20 transition-colors">Verified</div>
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 capitalize tracking-widest leading-none mb-6 transition-colors">Founding Engineer</p>

                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-3 text-slate-500 dark:text-zinc-400 transition-colors">
                                <HugeiconsIcon icon={Location} size={16} className="text-slate-300 dark:text-zinc-600" />
                                <span className="text-[10px] font-bold capitalize tracking-widest">Berlin, Germany</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-500 dark:text-zinc-400 transition-colors">
                                <HugeiconsIcon icon={Calendar} size={16} className="text-slate-300 dark:text-zinc-600" />
                                <span className="text-[10px] font-bold capitalize tracking-widest">Joined Oct 2024</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 py-4 border-y border-slate-50 dark:border-zinc-800 transition-colors">
                            <div className="text-center">
                                <p className="text-sm font-bold text-slate-900 dark:text-white tracking-tighter transition-colors">242</p>
                                <p className="text-[9px] font-bold text-slate-400 dark:text-zinc-500 capitalize tracking-widest transition-colors">Followers</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-bold text-slate-900 dark:text-white tracking-tighter transition-colors">1.2k</p>
                                <p className="text-[9px] font-bold text-slate-400 dark:text-zinc-500 capitalize tracking-widest transition-colors">Following</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-bold text-slate-900 dark:text-white tracking-tighter transition-colors">18</p>
                                <p className="text-[9px] font-bold text-slate-400 dark:text-zinc-500 capitalize tracking-widest transition-colors">Posts</p>
                            </div>
                        </div>

                        <div className="mt-3 flex gap-3">
                            <button className="flex-1 h-12 bg-emerald-800 dark:bg-emerald-500/20 text-white dark:text-emerald-400 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-slate-900/20 dark:shadow-emerald-500/10 active:scale-95 hover:bg-emerald-900 dark:hover:bg-emerald-500/30 transition-all border border-transparent dark:border-emerald-500/20">
                                Send Message
                            </button>
                            <button className="w-12 h-12 bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-700 text-slate-400 dark:text-zinc-500 rounded-2xl flex items-center justify-center hover:bg-slate-100 dark:hover:bg-zinc-700 active:scale-95 transition-all">
                                <HugeiconsIcon icon={Mail} size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 right-10 flex gap-1 transform rotate-90 origin-right">
                <span className="text-[9px] font-black text-slate-300 dark:text-zinc-700 uppercase tracking-[0.5em] transition-colors">Identity Profile V4</span>
            </div>
        </div>
    );
};

export const ProfileCard = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(profileCardCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">User Profile Card</h2>
                    <span className="bg-purple-100 text-purple-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Social UX</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    High-density user summary card featuring cover images, stat counters,
                    and integrated action triggers. Perfect for directories and team pages.
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
                    <ProfileCardPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors duration-700">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Stats Density</span>
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
                            {profileCardCode.split('\n').map((line, i) => (
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Privacy Check</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Always include a way for users to hide specific data points (like location or join date) from their public profile cards to respect user privacy.
                    </p>
                </div>
            </div>
        </div>
    );
};
