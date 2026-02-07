import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    StarIcon as Star
} from '@hugeicons/core-free-icons';

const ratingStarsCode = `import React, { useState } from 'react';

const RatingStars = ({ totalStars = 5, onRate }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, i) => {
        const starIdx = i + 1;
        return (
          <button
            key={i}
            className={\`p-1 transition-all \${starIdx <= (hover || rating) ? 'text-amber-400 scale-110' : 'text-slate-200'}\`}
            onMouseEnter={() => setHover(starIdx)}
            onMouseLeave={() => setHover(0)}
            onClick={() => {
              setRating(starIdx);
              if (onRate) onRate(starIdx);
            }}
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

export default RatingStars;`;

const RatingPreview = () => {
    const [rating, setRating] = useState(4);
    const [hover, setHover] = useState(0);

    return (
        <div className="w-full flex flex-col items-center gap-8 relative z-[100]">
            <div className="bg-white p-10 rounded-xl dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 shadow-2xl flex flex-col items-center">
                <div className="mb-8 text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-2">Customer Feedback</p>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100 tracking-tight ">Rate your experience</h3>
                </div>

                <div className="flex gap-2 mb-10">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <button
                            key={s}
                            onMouseEnter={() => setHover(s)}
                            onMouseLeave={() => setHover(0)}
                            onClick={() => setRating(s)}
                            className={`p-2 rounded-2xl transition-all duration-300 ${s <= (hover || rating) ? 'bg-amber-50 text-amber-500 scale-110 rotate-12' : 'bg-slate-50 text-slate-200'} active:scale-90`}
                        >
                            <HugeiconsIcon icon={Star} size={28} />
                        </button>
                    ))}
                </div>

                <div className="w-full h-1 bg-slate-100 rounded-full relative overflow-hidden">
                    <div
                        className="absolute inset-y-0 left-0 bg-amber-400 transition-all duration-1000 ease-out"
                        style={{ width: `${(rating / 5) * 100}%` }}
                    />
                </div>
                <div className="mt-4 text-[11px] font-black text-amber-600 uppercase tracking-widest leading-none">
                    {rating === 5 ? 'Exceptional' : rating === 4 ? 'Very Good' : rating === 3 ? 'Neutral' : rating === 2 ? 'Poor' : 'Unsatisfactory'}
                </div>
            </div>

            <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-slate-900" />
                <div className="w-4 h-4 rounded-full bg-slate-200" />
                <div className="w-4 h-4 rounded-full bg-slate-200" />
            </div>
        </div>
    );
};

export const RatingStars = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(ratingStarsCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight font-heading">Rating Stars</h2>
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Feedback</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">
                    A highly interactive rating system with hover previews and active states.
                    Essential for product reviews, user testimonials, and satisfaction surveys.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[450px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <RatingPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Star Count Config</span>
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
                            {ratingStarsCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('import') ? 'text-emerald-400' :
                                            line.includes('rating') || line.includes('hover') ? 'text-amber-300' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Micro-Interaction Note</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Small visual flourishes (like the 12-degree rotation on hover) make the interface feel more responsive and alive, encouraging user interaction.
                    </p>
                </div>
            </div>
        </div>
    );
};
