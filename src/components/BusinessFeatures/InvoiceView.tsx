import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Copy01Icon as Copy,
    InformationCircleIcon as Info,
    Settings02Icon as Styles,
    Tick01Icon as Tick,
    Download01Icon as Download,
    // ComputerVideoIcon as Print
} from '@hugeicons/core-free-icons';

const invoiceViewCode = `import React from 'react';

const InvoiceView = ({ data }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm max-w-2xl mx-auto">
      <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">INVOICE</h2>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">#INV-2024-042</p>
          </div>
          <div className="text-right">
              <div className="w-10 h-10 rounded-xl bg-slate-900 inline-flex items-center justify-center text-white text-xs font-black italic">Ek</div>
          </div>
      </div>
      
      <div className="p-8 grid grid-cols-2 gap-12">
          <div>
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-3">Billed To</p>
              <p className="text-sm font-black text-slate-900">{data.clientName}</p>
              <p className="text-xs font-medium text-slate-500 mt-1 leading-relaxed">{data.clientAddress}</p>
          </div>
          <div className="text-right">
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-3">Issued On</p>
              <p className="text-sm font-black text-slate-900">{data.date}</p>
          </div>
      </div>

      <div className="px-8 pb-8">
          <table className="w-full text-left">
              <thead>
                  <tr className="border-b border-slate-100">
                      <th className="py-4 text-[10px] font-black text-slate-300 uppercase tracking-widest">Description</th>
                      <th className="py-4 text-[10px] font-black text-slate-300 uppercase tracking-widest text-right">Amount</th>
                  </tr>
              </thead>
              <tbody>
                  {data.items.map((item, i) => (
                      <tr key={i} className="border-b border-slate-50">
                          <td className="py-4 text-xs font-bold text-slate-700">{item.name}</td>
                          <td className="py-4 text-xs font-black text-slate-900 text-right">$\${item.price}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
          
          <div className="mt-8 flex justify-end">
              <div className="w-48 bg-slate-900 text-white rounded-2xl p-6">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Due</p>
                  <p className="text-2xl font-black tracking-tighter">$\${data.total}</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default InvoiceView;`;

const InvoicePreview = () => {
    const data = {
        clientName: "Alex Rivier",
        clientAddress: "128 Innovation Way, Berlin\nGermany, 10115",
        date: "Oct 24, 2024",
        items: [
            { name: "Premium Design System", price: "599.00" },
            { name: "Frontend Development", price: "2,400.00" },
            { name: "Cloud Infrastructure Setup", price: "350.00" }
        ],
        total: "3,349.00"
    };

    return (
        <div className="w-full h-full flex items-center justify-center p-8 bg-slate-50 rounded-xl border border-slate-200 relative z-[100] overflow-y-auto custom-scrollbar">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-sm px-4 relative overflow-hidden flex flex-col group">
                {/* Header Bar */}
                <div className="px-10 py-10 bg-zinc-950 flex justify-between items-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-black text-white tracking-tighter leading-none mb-2 italic">Ekonty <span className="text-emerald-400">Design</span></h2>
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">Official Statement #88219</p>
                    </div>
                    <div className="flex gap-2 relative z-10">
                        <button className="w-8 h-8 rounded-2xl bg-emerald-500 text-slate-900 border border-emerald-400 flex items-center justify-center hover:bg-emerald-400 transition-all">
                            <HugeiconsIcon icon={Download} size={20} />
                        </button>
                    </div>
                </div>

                <div className="p-10">
                    <div className="grid grid-cols-2 gap-20 mb-12">
                        <div>
                            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-4">Customer Details</p>
                            <h4 className="text-lg font-black text-slate-900 truncate mb-1">{data.clientName}</h4>
                            <p className="text-[11px] font-bold text-slate-400 uppercase leading-relaxed tracking-widest">{data.clientAddress}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-4">Maturity Date</p>
                            <h4 className="text-lg font-black text-slate-900 mb-1">{data.date}</h4>
                            <p className="text-[11px] font-bold text-emerald-500 uppercase tracking-[0.2em]">Status: Paid</p>
                        </div>
                    </div>

                    <div className="space-y-2 mb-16">
                        <div className="grid grid-cols-12 gap-4 pb-4 border-b border-slate-50 text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
                            <div className="col-span-8">Product / Service</div>
                            <div className="col-span-4 text-right">Total USD</div>
                        </div>
                        {data.items.map((item, i) => (
                            <div key={i} className="grid grid-cols-12 gap-4 py-2 group/row">
                                <div className="col-span-8">
                                    <p className="text-sm font-black text-slate-900 tracking-tight leading-none mb-1">{item.name}</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Service Level Basic</p>
                                </div>
                                <div className="col-span-4 text-right">
                                    <p className="text-sm font-black text-slate-900 tracking-tighter italic">${item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-end bg-slate-50 p-10 rounded-xl border border-slate-100">
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Method</p>
                            <div className="flex gap-2">
                                <div className="w-8 h-5 bg-red-500/50 rounded-sm" />
                                <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest leading-none">Visa •••• 4242</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Grand Total Paid</p>
                            <p className="text-xl font-black text-slate-900 tracking-tighter italic">${data.total}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const InvoiceView = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(invoiceViewCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight font-heading">Invoice View</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Billing</span>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    Professional document layout for financial statements. Features clean
                    tables, status markers, and print-ready optimizations for business reports.
                </p>
            </div>

            <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="h-[750px] bg-[#f8fafc] relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <InvoicePreview />
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-xs transition-colors group">
                            <HugeiconsIcon icon={Styles} size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Letterhead Themes</span>
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
                            {invoiceViewCode.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
                                    <span className={
                                        line.includes('import') ? 'text-emerald-400' :
                                            line.includes('data') || line.includes('INV') ? 'text-amber-300' :
                                                line.includes('return') || line.includes('const') ? 'text-purple-400' :
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
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Print Optimization</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        When implementing a print feature, use standard CSS media queries <code>@media print</code> to hide navigation elements and ensure the invoice fills the entire A4/Letter page.
                    </p>
                </div>
            </div>
        </div>
    );
};
