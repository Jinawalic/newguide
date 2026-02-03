import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Copy01Icon as Copy,
  InformationCircleIcon as Info,
  Settings02Icon as Styles,
  Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const tourSourceCode = `import React, { useState } from 'react';

const OnboardingTour = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const steps = [
    {
      title: 'Welcome to Ekonty',
      content: 'Let\\'s take a quick tour to explore the features of your new dashboard.',
      target: 'center'
    },
    {
      title: 'Quick Search',
      content: 'Use Cmd+K to quickly find components and documentation anywhere in the app.',
      target: 'search'
    },
    {
      title: 'Active Projects',
      content: 'View and manage your recent projects and their status updates here.',
      target: 'sidebar'
    }
  ];

  if (!isVisible) return (
     <button 
        onClick={() => { setIsVisible(true); setActiveStep(0); }}
        className="px-4 py-2 bg-emerald-800 text-white rounded-xl text-xs font-bold"
     >
       Restart Tour
     </button>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-sm bg-white rounded-[32px] shadow-2xl p-8 border border-slate-100 overflow-hidden relative animate-in zoom-in-95 duration-200">
        {/* Progress Dots */}
        <div className="flex gap-1.5 mb-6">
          {steps.map((_, idx) => (
            <div 
              key={idx} 
              className={\`h-1 rounded-full transition-all duration-300 \${activeStep === idx ? 'w-8 bg-emerald-500' : 'w-2 bg-slate-100'}\`} 
            />
          ))}
        </div>

        <h3 className="text-xl font-black text-slate-800 tracking-tight mb-2">{steps[activeStep].title}</h3>
        <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
          {steps[activeStep].content}
        </p>

        <div className="flex items-center justify-between">
          <button 
            onClick={() => setIsVisible(false)}
            className="text-slate-400 hover:text-slate-600 text-xs font-black uppercase tracking-widest"
          >
            Skip Tour
          </button>
          
          <div className="flex gap-2">
            {activeStep > 0 && (
              <button 
                onClick={() => setActiveStep(prev => prev - 1)}
                className="px-4 py-2 text-slate-600 font-bold text-xs"
              >
                Back
              </button>
            )}
            <button 
              onClick={() => {
                if (activeStep < steps.length - 1) setActiveStep(prev => prev + 1);
                else setIsVisible(false);
              }}
              className="px-6 py-2.5 bg-emerald-800 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-900/10 active:scale-95 transition-all"
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next Step'}
            </button>
          </div>
        </div>

        {/* Decorative corner element */}
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-500/5 rounded-full" />
      </div>
    </div>
  );
};

export default OnboardingTour;`;

// --- THE PREVIEW COMPONENT ---
const TourPreview = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [step, setStep] = useState(0);
  const tourSteps = [
    { title: 'Global Search', text: 'Press ⌘K to search everything instantly.', icon: '🔍' },
    { title: 'Dark Mode', text: 'Customize your view with dark and light themes.', icon: '🌙' },
    { title: 'Collaboration', text: 'Invite teammates and work together in real-time.', icon: '👥' }
  ];

  if (!isVisible) return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-2xl">
        ✨
      </div>
      <button
        onClick={() => { setIsVisible(true); setStep(0); }}
        className="px-6 py-2.5 rounded-2xl bg-emerald-800 text-white font-black text-[10px] uppercase tracking-widest shadow-xl shadow-emerald-900/10 hover:bg-emerald-900 transition-all"
      >
        Start Onboarding Tour
      </button>
    </div>
  );

  return (
    <div className="w-full max-w-sm mx-auto p-8 bg-white rounded-[40px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] border border-slate-100 relative z-[100] animate-in zoom-in-95 duration-500">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-1.5">
          {tourSteps.map((_, idx) => (
            <div key={idx} className={`h-1.5 rounded-full transition-all duration-500 ${step === idx ? 'w-10 bg-emerald-600 shadow-[0_0_10px_rgba(5,150,105,0.3)]' : 'w-2 bg-slate-100'}`} />
          ))}
        </div>
        <button onClick={() => setIsVisible(false)} className="text-[10px] font-black text-slate-300 hover:text-rose-500 transition-colors uppercase tracking-[0.2em]">Skip</button>
      </div>

      <div className="mb-10 min-h-[140px]">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl mb-4 animate-[bounce_2s_infinite]">
          {tourSteps[step].icon}
        </div>
        <h3 className="text-xl font-black text-slate-800 tracking-tight mb-2">{tourSteps[step].title}</h3>
        <p className="text-slate-400 font-bold text-sm leading-[1.6]">{tourSteps[step].text}</p>
      </div>

      <div className="flex gap-3">
        {step > 0 && (
          <button
            onClick={() => setStep(prev => prev - 1)}
            className="flex-1 h-12 rounded-2xl bg-slate-50 text-slate-600 font-bold text-xs hover:bg-slate-100 transition-all"
          >
            Back
          </button>
        )}
        <button
          onClick={() => {
            if (step < tourSteps.length - 1) setStep(prev => prev + 1);
            else setIsVisible(false);
          }}
          className="flex-[1.5] h-12 rounded-2xl bg-emerald-800 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-900/10 hover:bg-emerald-900 transition-all transform active:scale-95"
        >
          {step === tourSteps.length - 1 ? 'Get Started' : 'Continue'}
        </button>
      </div>

      <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-emerald-500/5 rounded-full -z-10 blur-2xl" />
    </div>
  );
};

export const Tour = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(tourSourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-xl font-black text-slate-900 tracking-tight font-heading">Onboarding Tour</h2>
          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Retention</span>
        </div>
        <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">
          Educate new users about your application features with a guided walkthrough.
          Reduces churn and accelerates product activation.
        </p>
      </div>

      <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
        <div className="h-[450px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px'
          }}></div>
          <TourPreview />
        </div>

        <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
              <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
              <span>Step Triggers</span>
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
              {tourSourceCode.split('\n').map((line, i) => (
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
          <h4 className="text-sm font-bold text-slate-900 mb-1">User Psychology</h4>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Keep tours short (3-5 steps). Always provide a "Skip" option and ensure the tour can be restarted from the settings or help menu.
          </p>
        </div>
      </div>
    </div>
  );
};
