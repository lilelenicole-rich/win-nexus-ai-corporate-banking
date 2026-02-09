
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DailyReview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-32 bg-slate-50/50 min-h-screen animate-in fade-in duration-500">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-slate-100">
        <div className="flex items-center justify-between p-4 px-5">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/')} className="size-9 flex items-center justify-center rounded-full active:bg-slate-100 transition-colors">
              <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
            </button>
            <div>
              <h1 className="text-base font-black text-slate-900 leading-tight">每日经营回顾</h1>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">AI Assistant</p>
            </div>
          </div>
          <div className="px-2.5 py-1 bg-blue-50 rounded-lg border border-blue-100">
            <span className="text-[10px] font-black text-[#137fec] flex items-center gap-1.5 uppercase">
              <div className="size-1.5 bg-[#137fec] rounded-full animate-pulse"></div> Online
            </span>
          </div>
        </div>
      </header>

      <div className="p-5 space-y-8 max-w-lg mx-auto">
        <div className="flex gap-4">
          <div className="size-9 rounded-xl bg-[#137fec] flex items-center justify-center shrink-0 shadow-lg shadow-[#137fec]/30 mt-1">
            <span className="material-symbols-outlined text-white text-[20px]">smart_toy</span>
          </div>
          <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm max-w-[85%]">
            <p className="text-sm leading-relaxed text-slate-700">
              <span className="font-black text-slate-900">下午好！</span> 我是您的 Win-Nexus。今日工作已结束，为您整理了全天的<span className="text-[#137fec] font-black">业绩成果</span>，请查阅 👇
            </p>
          </div>
        </div>

        <section className="relative">
          <div className="absolute left-[17px] top-0 bottom-0 w-0.5 bg-slate-200/50 -z-10"></div>
          <div className="flex gap-4 mb-4">
            <div className="size-9 rounded-full bg-white border-2 border-white ring-1 ring-slate-100 flex items-center justify-center shrink-0 z-10 shadow-sm">
              <span className="material-symbols-outlined text-amber-500 text-[18px]">trophy</span>
            </div>
            <div className="bg-slate-100/50 px-4 py-2.5 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm">
              <p className="text-sm text-slate-600 font-bold">来看<span className="text-slate-900">今日业绩</span>亮点：</p>
            </div>
          </div>

          <div className="ml-12">
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 text-center">
              <div className="relative size-32 mx-auto mb-6">
                <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                  <circle className="stroke-slate-50" cx="18" cy="18" fill="none" r="16" strokeWidth="4" />
                  <circle className="stroke-[#137fec]" cx="18" cy="18" fill="none" r="16" strokeWidth="4" strokeDasharray="100" strokeDashoffset="50" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-slate-900">50%</span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Completion</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <MetricSmall label="Client Visit" val="50%" color="#137fec" />
                <MetricSmall label="Leads" val="20%" color="#60a5fa" />
              </div>
            </div>
          </div>
        </section>

        <section className="ml-12">
          <div className="bg-slate-900 rounded-[2rem] p-6 text-white shadow-xl shadow-slate-900/10">
            <div className="flex items-center gap-3 mb-5">
              <div className="size-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                <span className="material-symbols-outlined text-amber-400">lightbulb</span>
              </div>
              <div>
                <h3 className="font-black text-sm">AI 决策锦囊</h3>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">Strategic Insights</p>
              </div>
            </div>
            <div className="space-y-5">
              <InsightRow num="01" text="今日外勤效率极佳。明日建议向<span class='text-white font-bold underline decoration-blue-500'>授信报告</span>倾斜精力。" />
              <InsightRow num="02" text="商机“意向建立”环节耗时略长，建议使用<span class='text-blue-400 font-bold'>对比辅助工具</span>。" />
            </div>
            <button className="w-full mt-8 bg-white/10 hover:bg-white/20 rounded-xl py-3.5 text-xs font-black flex items-center justify-center gap-2 border border-white/5 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-[16px]">calendar_add_on</span> 添加到明日待办
            </button>
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 pb-8 bg-white/80 backdrop-blur-xl border-t border-slate-100 z-40">
        <div className="max-w-xl mx-auto flex gap-2">
          <div className="flex-1 bg-slate-100/80 rounded-full px-4 flex items-center border border-transparent focus-within:bg-white focus-within:border-[#137fec]/20 transition-all">
            <span className="material-symbols-outlined text-slate-400 text-[20px]">magic_button</span>
            <input type="text" placeholder="向 Win-Nexus 提问..." className="w-full bg-transparent border-none py-3 text-sm focus:ring-0 placeholder-slate-400" />
          </div>
          <button className="size-11 rounded-full bg-[#137fec] text-white flex items-center justify-center shadow-lg active:scale-90">
            <span className="material-symbols-outlined">arrow_upward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const MetricSmall: React.FC<{label: string, val: string, color: string}> = ({label, val, color}) => (
  <div className="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left">
    <div className="w-1 h-8 rounded-full" style={{backgroundColor: color}}></div>
    <div>
      <div className="text-[9px] text-slate-400 font-bold uppercase">{label}</div>
      <div className="text-sm font-black text-slate-800">{val}</div>
    </div>
  </div>
);

const InsightRow: React.FC<{num: string, text: string}> = ({num, text}) => (
  <div className="flex gap-3 items-start">
    <span className="text-amber-400 font-black text-sm">{num}</span>
    <p className="text-xs leading-relaxed text-slate-400" dangerouslySetInnerHTML={{__html: text}} />
  </div>
);

export default DailyReview;
