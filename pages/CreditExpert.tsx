
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreditExpert: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-32">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-3 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full hover:bg-slate-50">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-black text-slate-900 tracking-tight">授信专家模式</h1>
        <button className="size-10 flex items-center justify-center rounded-full text-red-500">
          <span className="material-symbols-outlined filled">security</span>
        </button>
      </header>

      <main className="pt-[80px] p-4 space-y-5 animate-in slide-in-from-bottom duration-500">
        <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-black text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#137fec]">grid_view</span>
              风险分布热力图
            </h2>
            <span className="text-[10px] font-black text-[#137fec] bg-blue-50 px-2.5 py-1 rounded-full">LIVE</span>
          </div>
          <div className="grid grid-cols-5 gap-1.5 aspect-[5/2]">
            {[...Array(15)].map((_, i) => (
              <div key={i} className={`rounded-lg ${i % 7 === 0 ? 'bg-red-500/80' : i % 3 === 0 ? 'bg-amber-400/60' : 'bg-blue-100/50'}`}></div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 text-[10px] font-bold text-slate-400">
            <div className="flex items-center gap-1.5"><div className="size-2 bg-blue-100 rounded-full"></div> 低风险</div>
            <div className="flex items-center gap-1.5"><div className="size-2 bg-amber-400/60 rounded-full"></div> 中风险</div>
            <div className="flex items-center gap-1.5"><div className="size-2 bg-red-500/80 rounded-full"></div> 高危</div>
          </div>
        </div>

        <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
            <div>
              <h2 className="font-black text-slate-900 text-sm">AI 博弈报告完整内容</h2>
              <p className="text-[10px] text-slate-400 font-bold">Simulation: Approver vs Auditor</p>
            </div>
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1 rounded-full">
              <div className="size-2 bg-emerald-500 rounded-full"></div>
              <span className="text-[10px] font-black text-slate-600">完成优化</span>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-0 top-3 w-full h-0.5 bg-slate-100 -z-10"></div>
              <Step num="1" label="初审" done />
              <Step num="2" label="辩论" done />
              <Step num="3" label="终审" active />
            </div>

            <div className="space-y-4">
              <DebateItem 
                round="第一轮：初审逻辑" 
                approver="基于近三年复合增长率 22% 及行业地位，建议通过。现金流稳健，核心资产质量优异。" 
                auditor="质疑！资产负债率由 45% 陡增至 68%，存在关联方往来异常，需穿透审查。"
              />
              <div className="bg-slate-900 rounded-2xl p-5 text-white shadow-xl shadow-slate-900/10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-[#137fec] text-sm">verified</span>
                  <span className="text-xs font-black">最终优化结论</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-4">报告已通过 142 个风险维度检测，补全了“关联方穿透”及“跨周期偿债敏感度分析”。</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="text-[10px] font-bold text-slate-500">报告综合质量评分</span>
                  <span className="text-sm font-black text-[#137fec]">92%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4 px-1">
            <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-red-500">warning</span> 待处理预警
            </h2>
            <button className="text-xs text-[#137fec] font-bold">查看全部</button>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm border-l-4 border-l-red-500 relative">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className="size-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
                  <span className="material-symbols-outlined">domain</span>
                </div>
                <div>
                  <h3 className="font-black text-slate-900">智流科技 (TechFlow)</h3>
                  <p className="text-[10px] text-slate-400 font-bold">授信额度: ¥5,000,000</p>
                </div>
              </div>
              <span className="px-2 py-0.5 bg-red-50 text-red-500 rounded text-[9px] font-black border border-red-100">高风险</span>
            </div>
            <div className="bg-slate-50 rounded-xl p-3 mb-4 text-[11px] text-slate-600 leading-relaxed">
              <span className="font-black text-slate-800">触发原因:</span> 资产负债率激增，严重违反财务契约条款。
            </div>
            <div className="grid grid-cols-3 gap-3">
              <ExpertButton icon="tune" label="调整额度" />
              <ExpertButton icon="video_camera_front" label="访谈" />
              <ExpertButton icon="summarize" label="生成报告" primary />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const Step: React.FC<{num: string, label: string, active?: boolean, done?: boolean}> = ({num, label, active, done}) => (
  <div className="flex flex-col items-center gap-2 bg-white px-2">
    <div className={`size-6 rounded-full flex items-center justify-center text-[10px] font-bold ${active ? 'bg-[#137fec] text-white' : done ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
      {num}
    </div>
    <span className={`text-[10px] ${active ? 'text-[#137fec] font-black' : 'text-slate-400 font-bold'}`}>{label}</span>
  </div>
);

const DebateItem: React.FC<{round: string, approver: string, auditor: string}> = ({round, approver, auditor}) => (
  <div className="space-y-3">
    <span className="text-[10px] font-black bg-blue-50 text-[#137fec] px-2.5 py-1 rounded-lg inline-block">{round}</span>
    <div className="bg-blue-50/50 border-l-2 border-[#137fec] p-4 rounded-r-2xl">
      <p className="text-[10px] font-black text-blue-900 mb-1">AI 审批 (Approver):</p>
      <p className="text-[11px] text-slate-600 leading-relaxed">{approver}</p>
    </div>
    <div className="bg-red-50/50 border-l-2 border-red-400 p-4 rounded-r-2xl">
      <p className="text-[10px] font-black text-red-900 mb-1">AI 风控 (Auditor):</p>
      <p className="text-[11px] text-slate-600 leading-relaxed">{auditor}</p>
    </div>
  </div>
);

const ExpertButton: React.FC<{icon: string, label: string, primary?: boolean}> = ({icon, label, primary}) => (
  <button className={`flex flex-col items-center gap-1.5 py-2.5 rounded-xl transition-all active:scale-95 ${primary ? 'bg-blue-50 text-[#137fec]' : 'bg-slate-50 text-slate-500'}`}>
    <span className="material-symbols-outlined text-[18px]">{icon}</span>
    <span className="text-[9px] font-black uppercase">{label}</span>
  </button>
);

export default CreditExpert;
