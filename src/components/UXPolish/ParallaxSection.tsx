import { useState, useRef } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    Image01Icon as ImageIcon
} from '@hugeicons/core-free-icons';

const parallaxCode = `import React, { useState, useEffect } from 'react';

const ParallaxSection = ({ image, children }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: \`url(\${image})\`,
          transform: \`translateY(\${offset * 0.5}px)\` 
        }}
      />
      <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;`;

const ParallaxPreview = () => {
    const [offset, setOffset] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        setOffset(e.currentTarget.scrollTop);
    };

    return (
        <div className="w-full h-full flex items-center justify-center p-8 lg:p-12 relative z-[100]">
            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="w-full max-w-2xl h-[400px] bg-white rounded-xl border border-slate-100 shadow-sm relative overflow-y-auto custom-scrollbar group"
            >
                <div className="relative h-[600px] overflow-hidden">
                    <div
                        className="absolute inset-0 w-full h-[800px] -top-20 transition-transform duration-100 ease-out"
                        style={{ transform: `translateY(${offset * 0.4}px)` }}
                    >
                        <div className="absolute inset-0 bg-zinc-950">
                            <div className="absolute inset-0 opacity-20" style={{
                                backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)',
                                backgroundSize: '40px 40px'
                            }} />
                            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-transparent to-emerald-500/20" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                            <HugeiconsIcon icon={ImageIcon} size={120} className="text-white/10" />
                        </div>
                    </div>

                    <div className="relative z-10 h-[600px] flex flex-col items-center justify-center text-center p-12">
                        <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.5em] mb-4">Deep Layer Interaction</p>
                        <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tighter italic mb-6">PARALLAX<br />JOURNEY</h3>
                        <div className="w-12 h-1 bg-white/20 rounded-full" />
                    </div>
                </div>

                <div className="relative z-20 bg-white p-12 text-center h-[400px]">
                    <h4 className="text-xl font-black text-slate-900 tracking-tight mb-4 uppercase">Surface Layer</h4>
                    <p className="text-slate-500 font-bold leading-relaxed max-w-sm mx-auto mb-10">
                        As you scroll, notice how the background moves at a slower pace compared to the foreground text. This creates a sense of spatial depth.
                    </p>
                    <div className="inline-flex gap-2 p-1.5 bg-slate-50 rounded-2xl border border-slate-100">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100" />
                        ))}
                    </div>
                </div>

                <div className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 z-30">
                    <span className="text-[9px] font-black text-white uppercase tracking-widest">Scroll to witness depth</span>
                </div>
            </div>
        </div>
    );
};

export const ParallaxSection = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(parallaxCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Parallax Section</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">UX Polish</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    A visual effect where background imagery moves at a different speed than the foreground content.
                    Creates an immersive 3D illusion that adds character and premium feel to landing pages.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[600px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <ParallaxPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Depth Factor</span>
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
                            {parallaxCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('offset') ? 'text-emerald-400' :
                                            line.includes('translateY') || line.includes('image') ? 'text-amber-300' :
                                                line.includes('return') || line.includes('useEffect') ? 'text-purple-400' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Performance Tip</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Always use <code>transform: translate3d()</code> or <code>will-change: transform</code> to trigger hardware acceleration. This ensures the parallax effect remains smooth on lower-end devices.
                    </p>
                </div>
            </div>
        </div>
    );
};
