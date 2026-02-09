
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FinancialAnalysis: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-32 animate-in fade-in duration-500">
      <header className="flex items-center justify-between px-5 py-4 sticky top-0 bg-white/95 backdrop-blur-md z-30 border-b border-slate-50">
        <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full active:bg-slate-50 transition-colors">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h1 className="text-lg font-black text-slate-900">分析师看板</h1>
        <button className="size-10 flex items-center justify-center rounded-full text-[#137fec]">
          <span className="material-symbols-outlined">insights</span>
        </button>
      </header>

      <main className="p-4 space-y-4">
        <section className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-6 overflow-hidden">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-xl overflow-hidden shadow-lg shadow-blue-500/20 ring-1 ring-slate-100 bg-white">
                <img 
                  src="https://picsum.photos/seed/corp-1/48/48"
                  srcSet="https://picsum.photos/seed/corp-1/48/48 1x, https://picsum.photos/seed/corp-1/96/96 2x"
                  sizes="48px"
                  alt="公司 Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">宏达建设集团</h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="px-1.5 py-0.5 bg-blue-50 text-[#137fec] text-[10px] font-black rounded">战略级</span>
                  <span className="text-[10px] text-slate-400 font-medium">SH.600123</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">信用评分</span>
              <span className="text-2xl font-black text-[#137fec]">AA+</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <FinancialMetric label="年度总营收 (RMB)" value="12.4B" change="+14.2%" trend="up" />
            <FinancialMetric label="净利润率 (Margin)" value="8.5%" change="-0.4%" trend="down" />
            <FinancialMetric label="现金流量 (Cash)" value="842M" change="+5.8%" trend="up" />
            <FinancialMetric label="资产负债率" value="62.1%" change="均值 58%" trend="neutral" />
          </div>

          <div className="space-y-4">
            <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px]">receipt_long</span> 近期财务动态
            </h4>
            <div className="bg-slate-50/50 rounded-2xl overflow-hidden border border-slate-100">
              <table className="w-full text-[11px]">
                <thead className="bg-slate-100/50 text-slate-400">
                  <tr>
                    <th className="px-4 py-2.5 text-left font-bold uppercase">日期</th>
                    <th className="px-4 py-2.5 text-left font-bold uppercase">摘要</th>
                    <th className="px-4 py-2.5 text-right font-bold uppercase">金额(M)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <FinancialRow date="10-24" title="项目款入账" value="+142.50" color="green" />
                  <FinancialRow date="10-22" title="短期债务偿还" value="-80.00" color="red" />
                  <FinancialRow date="10-18" title="股权融资拨付" value="+200.00" color="blue" />
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 mt-6">
            <button className="col-span-3 h-12 bg-[#137fec] text-white rounded-2xl text-xs font-black shadow-lg shadow-[#137fec]/20 flex items-center justify-center gap-2 active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-[18px]">analytics</span> 生成深度报告
            </button>
            <button className="h-12 bg-white border border-slate-200 text-slate-400 rounded-2xl flex items-center justify-center active:bg-slate-50">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </section>

        <section className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-black flex items-center gap-2 text-emerald-600">
              <span className="material-symbols-outlined">hub</span> 多级关系图谱
            </h3>
            <span className="px-2 py-0.5 bg-slate-50 text-slate-400 text-[10px] font-black rounded-full">3层穿透</span>
          </div>
          
          <div className="space-y-4">
            <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-3 bg-[#137fec] rounded-full"></span>
                <span className="text-xs font-bold text-slate-900">控股子公司 & 关联方</span>
              </div>
              <div className="space-y-2.5">
                <RelationItem icon="domain" name="宏达置业投资有限公司" detail="100% | 集团核心" score={92} />
                <RelationItem icon="account_tree" name="上海科创装饰工程中心" detail="65% | 子公司" score={68} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const FinancialMetric: React.FC<{label: string, value: string, change: string, trend: 'up'|'down'|'neutral'}> = ({label, value, change, trend}) => (
  <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-50/50">
    <p className="text-[10px] font-bold text-slate-400 mb-1">{label}</p>
    <div className="flex items-end justify-between">
      <span className="text-lg font-black text-slate-900">{value}</span>
      <span className={`text-[10px] font-black ${trend === 'up' ? 'text-emerald-500' : trend === 'down' ? 'text-red-500' : 'text-slate-400'}`}>
        {trend === 'up' && '↑'} {trend === 'down' && '↓'} {change}
      </span>
    </div>
  </div>
);

const FinancialRow: React.FC<{date: string, title: string, value: string, color: 'green'|'red'|'blue'}> = ({date, title, value, color}) => (
  <tr>
    <td className="px-4 py-3 text-slate-400 font-medium">{date}</td>
    <td className="px-4 py-3 font-bold text-slate-800">{title}</td>
    <td className={`px-4 py-3 text-right font-black ${color === 'green' ? 'text-emerald-500' : color === 'red' ? 'text-red-500' : 'text-[#137fec]'}`}>{value}</td>
  </tr>
);

const RelationItem: React.FC<{icon: string, name: string, detail: string, score: number}> = ({icon, name, detail, score}) => (
  <div className="bg-white p-3 rounded-xl border border-slate-100 flex items-center justify-between shadow-sm">
    <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-[#137fec] text-lg">{icon}</span>
      <div>
        <h4 className="text-[11px] font-bold text-slate-900">{name}</h4>
        <p className="text-[9px] text-slate-400 font-medium">{detail}</p>
      </div>
    </div>
    <div className={`px-2 py-0.5 rounded text-[9px] font-black ${score > 80 ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
      Score: {score}
    </div>
  </div>
);

export default FinancialAnalysis;
