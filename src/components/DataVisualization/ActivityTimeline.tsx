import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const activityTimelineSourceCode = `import React from 'react';

const TimelineItem = ({ title, time, content, type, isLast }) => {
  const colors = {
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    info: 'bg-blue-500',
    error: 'bg-rose-500'
  };

  return (
    <div className="flex gap-4 group">
      <div className="flex flex-col items-center">
        <div className={\`w-3 h-3 rounded-full \${colors[type] || 'bg-slate-300'} z-10 transition-transform group-hover:scale-125\`} />
        {!isLast && <div className="w-[2px] h-full bg-slate-100 -mt-1 z-0" />}
      </div>
      <div className="pb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{time}</span>
          <span className={\`w-1 h-1 rounded-full \${colors[type] || 'bg-slate-300'}\`} />
          <span className="text-xs font-bold text-slate-900">{title}</span>
        </div>
        <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl group-hover:bg-white group-hover:shadow-lg group-hover:shadow-slate-200/50 transition-all duration-300">
           <p className="text-[13px] text-slate-500 leading-relaxed font-medium">{content}</p>
        </div>
      </div>
    </div>
  );
};

const ActivityTimeline = () => {
  const activities = [
    { title: 'Project Deployed', time: '2 hours ago', content: 'Version 2.4.0 successfully deployed to production server.', type: 'success' },
    { title: 'New User Registered', time: '5 hours ago', content: 'A new user from Germany has joined the platform.', type: 'info' },
    { title: 'Database Backup', time: 'Yesterday', content: 'Daily automated backup completed successfully.', type: 'success' },
    { title: 'Security Alert', time: '2 days ago', content: 'Unusual login attempts detected from a new IP address.', type: 'warning' }
  ];

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-8 rounded-[40px] border border-slate-100">
       <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Recent Activity</h4>
       <div className="space-y-0">
          {activities.map((act, i) => (
            <TimelineItem key={i} {...act} isLast={i === activities.length - 1} />
          ))}
       </div>
    </div>
  );
};

export default ActivityTimeline;`;

// --- THE PREVIEW COMPONENT ---
const TimelinePreview = () => {
    const items = [
        { title: 'Payment Received', time: '10:30 AM', desc: 'Subscription for "Pro Plan" renewed.', color: 'emerald', icon: '💰' },
        { title: 'Bug Fixed', time: '09:15 AM', desc: 'Resolved issue #402 in the auth flow.', color: 'blue', icon: '🐛' },
        { title: 'Capacity Warning', time: 'Yesterday', desc: 'Server load exceeded 85% for 12 minutes.', color: 'amber', icon: '⚠️' }
    ];

    return (
        <div className="w-full max-w-sm mx-auto bg-white p-8 rounded-xl shadow-2xl shadow-slate-900/10 border border-slate-100 relative z-[100]">
            <div className="flex items-center justify-between mb-8">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Activity Feed</h4>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="space-y-0 relative">
                <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-slate-100 -z-0" />
                {items.map((item, i) => (
                    <div key={i} className="flex gap-6 pb-8 group relative z-10 last:pb-0">
                        <div className={`w-8 h-8 rounded-xl bg-${item.color}-50 flex items-center justify-center text-sm border-2 border-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                            {item.icon}
                        </div>
                        <div className="flex-1 transition-all duration-300 group-hover:translate-x-1">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{item.time}</span>
                                <span className={`text-[9px] font-black uppercase text-${item.color}-600 tracking-tighter`}>{item.color}</span>
                            </div>
                            <h5 className="text-[13px] font-bold text-slate-800 mb-1">{item.title}</h5>
                            <p className="text-[11px] text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const ActivityTimeline = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(activityTimelineSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Activity Timeline</h2>
                    <span className="bg-purple-100 text-purple-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Tracking</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    Chronological list of events or status updates. Perfect for audit logs, project history, or social feeds.
                    Includes support for different event types and responsive layouts.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[500px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden p-8">
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}></div>
                    <TimelinePreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Condensed View</span>
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
                            {activityTimelineSourceCode.split('\n').map((line, i) => (
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Visual Hierarchy</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Use different icon background colors (Emerald for success, Blue for info, Amber for warning) to help users scan the timeline faster.
                    </p>
                </div>
            </div>
        </div>
    );
};
