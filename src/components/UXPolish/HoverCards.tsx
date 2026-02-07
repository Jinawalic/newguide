import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    UserCircleIcon as User
} from '@hugeicons/core-free-icons';

const hoverCardCode = `import React, { useState } from 'react';

const HoverCard = ({ children, profile }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <span className="font-bold underline cursor-help">{children}</span>
      
      {isVisible && (
        <div className="absolute top-full mt-2 left-0 w-80 bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden" />
              <div className="flex-1">
                  <h4 className="text-sm font-black tracking-tight">{profile.name}</h4>
                  <p className="text-xs text-slate-500 font-bold">{profile.handle}</p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {profile.bio}
                  </p>
                  <div className="mt-4 flex gap-4 text-[10px] font-black uppercase text-slate-400">
                      <span><strong>{profile.following}</strong> Following</span>
                      <span><strong>{profile.followers}</strong> Followers</span>
                  </div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverCard;`;

const HoverCardPreview = () => {
    return (
        <div className="w-full flex items-center justify-center p-12 bg-white rounded-xl border border-slate-100 shadow-sm mx-5 relative z-[100]">
            <p className="text-slate-500 font-bold leading-relaxed max-w-md text-center">
                Check out the latest contributions from our founding engineer, <br />
                <span className="group relative inline-block">
                    <span className="text-slate-900 underline decoration-slate-200 decoration-2 underline-offset-4 cursor-help hover:decoration-slate-900 transition-all">@davidkostas</span>

                    <div className="absolute top-full my-4 left-1/2 -translate-x-1/2 w-80 bg-white border border-slate-50 rounded-xl shadow-sm p-8 z-[110] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-[32px] bg-slate-900 shadow-xl mb-6 flex items-center justify-center text-white overflow-hidden relative">
                                <HugeiconsIcon icon={User} size={40} />
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent" />
                            </div>

                            <h4 className="text-lg font-black text-slate-900 tracking-tight leading-none mb-1">David Kostas</h4>
                            <p className="text-[11px] font-bold text-slate-400 lowercase tracking-widest mb-6 leading-none">@davidkostas</p>

                            <p className="text-[11px] font-bold text-slate-500 capitalize tracking-tight leading-relaxed mb-3">
                                Building the core engine behind <br />
                                <span className="text-slate-900 underline-offset-2">Ekonty Design</span>
                            </p>

                            <div className="grid grid-cols-2 gap-4 w-full pt-8 border-t border-slate-50">
                                <div className="text-center">
                                    <p className="text-sm font-bold text-slate-900 tracking-tighter">12.4k</p>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Followers</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm font-bold text-slate-900 tracking-tighter">2.1k</p>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Posts</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-t border-l border-slate-50 rotate-45" />
                    </div>
                </span>
                <br /> who lead our recent architecture migration.
            </p>
        </div>
    );
};

export const HoverCards = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(hoverCardCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Hover Cards</h2>
                    <span className="bg-indigo-100 text-indigo-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">UX Polish</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    High-density previews for links or mentions. Ideal for
                    user profiles, organization summaries, and rich media previews without leaving the current view.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm]">
                <div className="h-[750px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden text-center">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <HoverCardPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Preview Latency</span>
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
                            {hoverCardCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('import') ? 'text-emerald-400' :
                                            line.includes('isVisible') || line.includes('profile') ? 'text-amber-300' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Performance Insight</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        To prevent accidental triggers, implement a <strong>short delay (200-400ms)</strong> before showing the card. This ensures the user intent is to view the card, not just quickly moving the mouse across the page.
                    </p>
                </div>
            </div>
        </div>
    );
};
