
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-24 animate-in fade-in duration-500">
      <header className="flex items-center justify-between px-5 pt-6 pb-2 sticky top-0 bg-[#FAFAFA]/80 backdrop-blur-md z-30">
        <div className="flex items-center gap-3">
          <div className="relative cursor-pointer">
            <img 
              src="https://picsum.photos/seed/manager/44/44"
              srcSet="https://picsum.photos/seed/manager/44/44 1x, https://picsum.photos/seed/manager/88/88 2x, https://picsum.photos/seed/manager/132/132 3x"
              sizes="44px"
              alt="李经理头像"
              className="h-11 w-11 rounded-full object-cover ring-2 ring-white shadow-md"
              loading="eager"
            />
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#10b981] border-2 border-white"></div>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-bold tracking-tight">WIN-NEXUS</p>
            <h1 className="text-lg font-bold leading-tight text-slate-900">李经理</h1>
          </div>
        </div>
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-100 shadow-sm active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-slate-500">notifications</span>
          <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>
      </header>

      <div className="px-5 py-3">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <span className="material-symbols-outlined text-slate-400">search</span>
          </div>
          <input 
            type="text" 
            placeholder="搜索客户、任务或洞察..." 
            className="block w-full rounded-2xl border-none bg-white py-4 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#137fec]/20 shadow-sm transition-shadow"
          />
        </div>
      </div>

      {/* Responsive Banner Section */}
      <section className="px-5 mt-4">
        <div className="relative h-32 rounded-3xl overflow-hidden shadow-lg shadow-blue-500/10">
          <picture>
            <source media="(min-width: 400px)" srcSet="https://picsum.photos/seed/banner/800/256 2x, https://picsum.photos/seed/banner/400/128 1x" />
            <img 
              src="https://picsum.photos/seed/banner/400/128" 
              alt="企业贷款推广" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent flex flex-col justify-center px-6">
            <h3 className="text-white font-bold text-lg">普惠金融·智慧贷款</h3>
            <p className="text-white/80 text-xs mt-1">AI 助力，秒级审批，最高额度 500 万</p>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="px-5 flex justify-between items-end mb-3">
          <h2 className="text-xl font-bold text-slate-900">关键指标</h2>
          <span className="text-xs text-[#137fec] font-bold flex items-center cursor-pointer">
            查看全部 <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          </span>
        </div>
        <div className="flex overflow-x-auto px-5 gap-4 no-scrollbar pb-2">
          <MetricCard title="管户规模" value="324" change="+12 本月" progress={75} color="blue" />
          <MetricCard title="转化率" value="30%" change="目标 35%" progress={85} color="green" />
          <MetricCard title="不良率" value="0.8%" change="控制线 <1.0%" progress={20} color="red" />
        </div>
      </section>

      <section className="mt-8 px-5">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-900">AI 待办事项</h2>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10b981]"></span>
              </span>
              <span className="text-[10px] font-bold text-[#10b981] uppercase tracking-wide">Live</span>
            </div>
          </div>
          <button className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400">
            <span className="material-symbols-outlined text-[20px]">tune</span>
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <AITodoItem 
            type="high-risk" 
            title="客户 A - KYC 资料更新" 
            time="刚刚" 
            content="AI 已自动填充 85% 表单。检测到税务文件缺失，建议立即联系。"
            progress={85}
            onClick={() => navigate('/tasks')}
          />
          <AITodoItem 
            type="opportunity" 
            title="客户 B - 理财产品到期" 
            time="2小时前" 
            content="资金将在一周内释放。AI 推荐 '稳盈宝 X 号'，匹配度 90%。"
            button="生成营销话术"
            onClick={() => navigate('/expert')}
          />
        </div>
      </section>
    </div>
  );
};

const MetricCard: React.FC<{title: string, value: string, change: string, progress: number, color: 'blue'|'green'|'red'}> = ({title, value, change, progress, color}) => {
  const colors = {
    blue: 'stroke-[#137fec] text-[#137fec]',
    green: 'stroke-[#10b981] text-[#10b981]',
    red: 'stroke-red-500 text-red-500'
  };

  return (
    <div className="shrink-0 w-36 h-40 bg-white rounded-2xl p-4 flex flex-col items-center justify-between shadow-sm border border-slate-50 relative overflow-hidden active:scale-95 transition-transform">
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{title}</span>
      <div className="relative size-20 flex items-center justify-center">
        <svg className="size-full -rotate-90" viewBox="0 0 36 36">
          <circle className="stroke-slate-100" cx="18" cy="18" fill="none" r="16" strokeWidth="3" />
          <circle 
            className={`${colors[color]} transition-all duration-700`} 
            cx="18" cy="18" fill="none" r="16" strokeWidth="3" 
            strokeDasharray="100" 
            strokeDashoffset={100 - progress} 
            strokeLinecap="round" 
          />
        </svg>
        <span className="absolute text-lg font-black text-slate-900">{value}</span>
      </div>
      <div className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${color === 'red' ? 'bg-red-50 text-red-500' : color === 'green' ? 'bg-[#10b981]/10 text-[#10b981]' : 'bg-blue-50 text-[#137fec]'}`}>
        {change}
      </div>
    </div>
  );
};

const AITodoItem: React.FC<{type: string, title: string, time: string, content: string, progress?: number, button?: string, onClick: () => void}> = ({type, title, time, content, progress, button, onClick}) => {
  const typeStyles: any = {
    'high-risk': 'border-l-red-500 bg-red-50/10',
    'opportunity': 'border-l-[#10b981] bg-[#10b981]/5',
  };

  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-2xl p-4 shadow-sm border border-slate-100 border-l-[4px] ${typeStyles[type] || 'border-l-slate-300'} cursor-pointer active:scale-[0.98] transition-all`}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <span className={`text-[9px] font-black px-2 py-0.5 rounded-full border tracking-wide uppercase ${type === 'high-risk' ? 'bg-red-50 text-red-500 border-red-100' : 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20'}`}>
            {type === 'high-risk' ? '高风险' : '商机'}
          </span>
          <span className="text-[10px] text-slate-400 font-medium">{time}</span>
        </div>
        <span className="material-symbols-outlined text-slate-300 text-[18px]">more_horiz</span>
      </div>
      <h3 className="text-[15px] font-bold text-slate-900 mb-2">{title}</h3>
      <div className="bg-slate-50/50 p-3 rounded-xl flex gap-3">
        <div className="shrink-0 size-8 bg-white rounded-lg flex items-center justify-center border border-slate-100 shadow-sm">
          <span className="material-symbols-outlined text-[#137fec] text-[20px]">smart_toy</span>
        </div>
        <div className="flex-1">
          <p className="text-xs text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{__html: content.replace(/(\d+%)/, '<span class="text-[#10b981] font-black">$1</span>')}} />
          {progress !== undefined && (
            <div className="mt-3 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#137fec] rounded-full transition-all" style={{width: `${progress}%`}}></div>
            </div>
          )}
          {button && (
            <button disabled className="mt-3 px-4 py-1.5 bg-slate-300 text-slate-500 text-[10px] font-bold rounded-lg shadow-md shadow-slate-200/20 flex items-center gap-1 cursor-not-allowed opacity-60">
              {button} <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
