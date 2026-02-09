
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TaskProgress: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-24 animate-in slide-in-from-right duration-500">
      <header className="flex items-center justify-between p-4 bg-white/90 backdrop-blur-md sticky top-0 z-30 border-b border-slate-50">
        <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full active:bg-slate-50">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-black text-slate-900">智能体任务进度</h1>
        <button className="size-10 flex items-center justify-center rounded-full active:bg-slate-50">
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
      </header>

      <div className="px-4 pt-4 sticky top-[68px] bg-white/50 backdrop-blur-sm z-20">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-3">
          <TabButton icon="travel_explore" label="商机猎手" />
          <TabButton icon="verified_user" label="尽调助手" active />
          <TabButton icon="credit_score" label="授信专家" />
        </div>
      </div>

      <main className="px-4 py-4 space-y-4">
        <TaskCard 
          status="需经理介入" 
          company="上海拓界实业有限公司" 
          task="#8921" 
          passRate="92%" 
          time="5分钟前"
          desc="检测到该企业近期存在高频大额跨行转账，AI风控引擎标记为异常，需客户经理人工核实资金用途。"
          progress={65}
          urgent
          onDetail={() => navigate('/expert')}
        />
        <TaskCard 
          status="自动执行中" 
          company="北京科润科技有限公司" 
          task="#8915" 
          passRate="85%" 
          time="2小时前"
          desc="正在抓取企业最新工商信息及涉诉记录..."
          progress={40}
          onDetail={() => navigate('/expert')}
        />
        <TaskCard 
          status="即将完成" 
          company="深圳华信供应链管理" 
          task="#8892" 
          passRate="98%" 
          time="3小时前"
          desc="所有风控指标审核已完成，正在生成最终尽调报告。"
          progress={95}
          onDetail={() => navigate('/expert')}
        />
      </main>

      <div className="fixed bottom-24 left-4 right-4 z-40">
        <button className="w-full h-14 bg-[#137fec] text-white rounded-2xl font-black text-sm shadow-xl shadow-[#137fec]/30 flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
          <span className="material-symbols-outlined text-[20px]">cloud_sync</span>
          一键同步智慧对公
        </button>
      </div>
    </div>
  );
};

const TabButton: React.FC<{icon: string, label: string, active?: boolean}> = ({icon, label, active}) => (
  <button className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all ${active ? 'bg-[#137fec] text-white border-[#137fec] shadow-lg shadow-[#137fec]/20' : 'bg-white border-slate-200 text-slate-500'}`}>
    <span className="material-symbols-outlined text-[18px]">{icon}</span>
    <span className="text-sm font-bold">{label}</span>
  </button>
);

const TaskCard: React.FC<{status: string, company: string, task: string, passRate: string, time: string, desc: string, progress: number, urgent?: boolean, onDetail?: () => void}> = ({status, company, task, passRate, time, desc, progress, urgent, onDetail}) => (
  <div className={`bg-white rounded-[2rem] p-5 shadow-sm border ${urgent ? 'border-red-100 ring-2 ring-red-50' : 'border-slate-100'}`}>
    <div className="flex justify-between items-start mb-4">
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className={`px-2 py-0.5 text-[9px] font-black rounded uppercase ${urgent ? 'bg-red-500 text-white' : 'bg-slate-100 text-slate-500'}`}>{status}</span>
          <span className="text-xs font-black text-slate-900">{company}</span>
        </div>
        <h3 className="text-sm font-bold text-slate-800">对公尽调任务 {task}</h3>
      </div>
      <div className="text-right">
        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-full border border-emerald-100 flex items-center gap-1">
          <span className="material-symbols-outlined text-[12px]">analytics</span> {passRate}
        </span>
        <p className="text-[10px] text-slate-400 mt-1.5">{time}</p>
      </div>
    </div>
    <p className="text-xs text-slate-500 leading-relaxed mb-4">{desc}</p>
    <div className="mb-5">
      <div className="flex justify-between text-[10px] font-bold mb-2">
        <span className="text-slate-400">任务进度</span>
        <span className="text-[#137fec]">{progress}%</span>
      </div>
      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
        <div className="bg-[#137fec] h-full rounded-full transition-all duration-1000" style={{width: `${progress}%`}}></div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3">
      <button 
        onClick={onDetail}
        className="py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold active:bg-slate-100"
      >
        查看详情
      </button>
      {urgent ? (
        <button className="py-2.5 rounded-xl bg-red-500 text-white text-xs font-bold shadow-lg shadow-red-500/20 active:scale-95">立即决策</button>
      ) : (
        <button className="py-2.5 rounded-xl bg-[#137fec] text-white text-xs font-bold shadow-lg shadow-[#137fec]/20 active:scale-95">查看进度</button>
      )}
    </div>
  </div>
);

export default TaskProgress;
