
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerList: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('全部');

  const tabs = ['全部', '战略客户', '授信客户', '普惠客户'];

  return (
    <div className="pb-24 animate-in fade-in duration-500">
      <header className="flex items-center justify-between px-5 py-4 sticky top-0 bg-white/95 backdrop-blur-md z-30 border-b border-slate-50">
        <button onClick={() => navigate('/')} className="size-10 flex items-center justify-center rounded-full active:bg-slate-50 transition-colors">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h1 className="text-lg font-black text-slate-900">客户管理列表</h1>
        <button className="size-10 flex items-center justify-center rounded-full active:bg-slate-50">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <div className="px-5 pt-4 pb-2 bg-white sticky top-[65px] z-20">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <span className="material-symbols-outlined text-slate-400">search</span>
          </div>
          <input 
            type="text" 
            placeholder="搜索对公客户名称、统一信用代码..." 
            className="block w-full rounded-2xl bg-slate-50 border-none py-3.5 pl-11 pr-11 text-sm focus:bg-white focus:ring-2 focus:ring-[#137fec]/20 transition-all"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#137fec]">
            <span className="material-symbols-outlined">mic</span>
          </div>
        </div>

        <div className="flex gap-2.5 mt-4 overflow-x-auto no-scrollbar pb-1">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-5 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === tab ? 'bg-[#137fec] text-white shadow-lg shadow-[#137fec]/20' : 'bg-white border border-slate-200 text-slate-500'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 space-y-4 mt-4">
        <CustomerCard 
          id="1"
          name="宏达建设集团股份有限公司" 
          code="91310115MA1K..." 
          location="上海" 
          tag="战略" 
          credit="5,000.0" 
          used="3,240.0" 
          risk="低风险"
          onDetail={() => navigate('/analysis')}
        />
        <CustomerCard 
          id="2"
          name="科流信息科技有限公司" 
          code="91440300MA5F..." 
          location="深圳" 
          tag="授信" 
          credit="2,800.0" 
          used="1,150.0" 
          risk="正常"
          onDetail={() => navigate('/analysis')}
        />
      </div>

      <button className="fixed bottom-28 right-6 size-14 bg-[#137fec] text-white rounded-full shadow-xl flex items-center justify-center active:scale-90 transition-all z-40">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
};

const CustomerCard: React.FC<{id: string, name: string, code: string, location: string, tag: string, credit: string, used: string, risk: string, onDetail: () => void}> = ({id, name, code, location, tag, credit, used, risk, onDetail}) => {
  return (
    <article className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden active:scale-[0.99] transition-transform" onClick={onDetail}>
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3.5">
            <div className={`w-14 h-14 rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-100`}>
              <img 
                src={`https://picsum.photos/seed/corp-${id}/56/56`}
                srcSet={`https://picsum.photos/seed/corp-${id}/56/56 1x, https://picsum.photos/seed/corp-${id}/112/112 2x`}
                sizes="56px"
                alt={name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-[15px] font-bold text-slate-900 leading-tight">{name}</h3>
                <span className={`px-1.5 py-0.5 text-[10px] font-black rounded ${tag === '战略' ? 'bg-blue-50 text-[#137fec]' : 'bg-emerald-50 text-emerald-600'}`}>{tag}</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1 font-medium">代码: {code} | {location}</p>
            </div>
          </div>
          <button className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
            <span className="material-symbols-outlined text-[20px]">more_horiz</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-slate-50/50 p-3.5 rounded-2xl border border-slate-50">
            <p className="text-[10px] text-slate-400 font-bold mb-1 uppercase tracking-wider">授信总额</p>
            <div className="text-base font-black text-slate-900">¥{credit} <span className="text-[10px] font-medium text-slate-400">万</span></div>
          </div>
          <div className="bg-slate-50/50 p-3.5 rounded-2xl border border-slate-50">
            <p className="text-[10px] text-slate-400 font-bold mb-1 uppercase tracking-wider">当前已用</p>
            <div className="text-base font-black text-slate-900">¥{used} <span className="text-[10px] font-medium text-slate-400">万</span></div>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1 flex items-center gap-2 bg-blue-50/50 px-3 py-2 rounded-xl border border-blue-100/50">
            <span className="material-symbols-outlined text-[#137fec] text-sm">verified_user</span>
            <span className="text-[10px] text-blue-700 font-bold">风险评级：{risk}</span>
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <button className="flex-1 h-11 bg-[#137fec] text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-[#137fec]/10 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[18px]">call</span> 联系客户
          </button>
          <button className="w-11 h-11 border border-slate-100 text-slate-400 rounded-2xl flex items-center justify-center active:bg-slate-50">
            <span className="material-symbols-outlined text-[20px]">chat</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default CustomerList;
