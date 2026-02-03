import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick
} from '@hugeicons/core-free-icons';

// --- THE ACTUAL COMPONENT CODE TO BE COPIED ---
const stepperSourceCode = `import React, { useState } from 'react';

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    { id: 1, title: 'Identity', description: 'Personal details' },
    { id: 2, title: 'Company', description: 'Business info' },
    { id: 3, title: 'Billing', description: 'Payment method' },
    { id: 4, title: 'Review', description: 'Final check' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex justify-between items-center relative mb-12">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0">
          <div 
            className="h-full bg-emerald-500 transition-all duration-500 ease-in-out"
            style={{ width: \`\${((currentStep - 1) / (steps.length - 1)) * 100}%\` }}
          />
        </div>

        {/* Steps */}
        {steps.map((step) => (
          <div key={step.id} className="relative z-10 flex flex-col items-center group">
            <button
              onClick={() => setCurrentStep(step.id)}
              className={\`
                w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300
                \${currentStep >= step.id 
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200' 
                  : 'bg-white border-2 border-slate-200 text-slate-400 hover:border-slate-300'}
              \`}
            >
              {currentStep > step.id ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : step.id}
            </button>
            <div className="absolute top-12 whitespace-nowrap text-center">
              <p className={\`text-xs font-black uppercase tracking-widest \${currentStep >= step.id ? 'text-slate-800' : 'text-slate-400'}\`}>
                {step.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 min-h-[200px] flex flex-col items-center justify-center text-center">
         <h3 className="text-xl font-black text-slate-800 mb-2">Step {currentStep}: {steps[currentStep-1].title}</h3>
         <p className="text-slate-500 font-medium">{steps[currentStep-1].description}</p>
         
         <div className="mt-8 flex gap-4">
           {currentStep > 1 && (
             <button 
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-white transition-all"
             >
               Previous
             </button>
           )}
           {currentStep < steps.length ? (
             <button 
                onClick={() => setCurrentStep(prev => prev + 1)}
                className="px-6 py-2.5 rounded-xl bg-emerald-800 text-white text-sm font-bold shadow-md hover:bg-emerald-900 transition-all"
             >
               Continue
             </button>
           ) : (
             <button className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-bold shadow-md hover:bg-black transition-all">
               Complete Setup
             </button>
           )}
         </div>
      </div>
    </div>
  );
};

export default Stepper;`;

// --- THE PREVIEW COMPONENT ---
const StepperPreview = () => {
    const [currentStep, setCurrentStep] = useState(2);
    const steps = [
        { id: 1, title: 'Account' },
        { id: 2, title: 'Profile' },
        { id: 3, title: 'Verification' },
        { id: 4, title: 'Finish' }
    ];

    return (
        <div className="w-full max-w-sm mx-auto relative z-[100]">
            <div className="flex justify-between items-center relative mb-16">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0 rounded-full">
                    <div
                        className="h-full bg-emerald-500 transition-all duration-700 ease-out rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                        style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                    />
                </div>

                {steps.map((step) => (
                    <div key={step.id} className="relative z-10 flex flex-col items-center">
                        <button
                            onClick={() => setCurrentStep(step.id)}
                            className={`
                                w-10.5 h-10.5 rounded-2xl flex items-center justify-center font-bold text-xs transition-all duration-500 transform
                                ${currentStep >= step.id
                                    ? 'bg-emerald-800 text-white shadow-xl shadow-emerald-100 scale-100'
                                    : 'bg-white border-2 border-slate-100 text-slate-300 hover:border-slate-200 scale-90'}
                            `}
                        >
                            {currentStep > step.id ? (
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <span>{step.id}</span>
                            )}
                        </button>
                        <div className="absolute top-14">
                            <p className={`text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-colors duration-300 ${currentStep >= step.id ? 'text-slate-800' : 'text-slate-400'}`}>
                                {step.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-3">
                <button
                    onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                    className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-emerald-800 hover:border-emerald-100 transition-all active:scale-95 shadow-sm"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button
                    onClick={() => setCurrentStep(prev => Math.min(steps.length, prev + 1))}
                    className="px-8 h-12 rounded-2xl bg-emerald-800 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-900/10 hover:bg-emerald-900 transition-all active:scale-95"
                >
                    {currentStep === steps.length ? 'Finalize' : 'Continue'}
                </button>
            </div>
        </div>
    );
};

export const Stepper = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(stepperSourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 tracking-tight font-heading">Interactive Stepper</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Guidance</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">
                    Break down complex processes into manageable sequential steps.
                    Visualizes progress and reduces cognitive load by focusing on one task at a time.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[400px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <StepperPreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Flow Settings</span>
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
                            {stepperSourceCode.split('\n').map((line, i) => (
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Navigation Note</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Allow users to navigate back to previous steps unless those steps involve irreversible actions (like submitting a payment).
                    </p>
                </div>
            </div>
        </div>
    );
};
