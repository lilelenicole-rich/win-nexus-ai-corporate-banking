
import React from 'react';
import { useNavigate } from 'react-router-dom';

const VoiceAssistant: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden animate-in fade-in duration-500">
      <header className="flex items-center justify-between px-6 py-6">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full text-slate-400 active:bg-slate-50">
          <span className="material-symbols-outlined text-[28px]">close</span>
        </button>
        <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">安全连接</span>
        </div>
        <button className="p-2 -mr-2 rounded-full text-slate-400">
          <span className="material-symbols-outlined text-[28px]">more_vert</span>
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center">
        <div className="h-48 flex items-center justify-center gap-2 w-full mb-12">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="w-2.5 rounded-full bg-gradient-to-t from-blue-100 to-[#137fec]"
              style={{
                height: `${20 + Math.random() * 80}%`,
                animation: `voiceWave ${0.8 + Math.random() * 0.5}s ease-in-out infinite alternate`
              }}
            ></div>
          ))}
        </div>

        <p className="text-[#137fec] font-black tracking-[0.2em] text-xs mb-8 animate-pulse uppercase">正在聆听...</p>
        
        <div className="space-y-4 max-w-xs">
          <p className="text-slate-400 text-sm font-bold">您可以说：</p>
          <h2 className="text-3xl font-medium text-slate-900 leading-tight tracking-tight">
            “显示高优先级商机”
          </h2>
        </div>
      </main>

      <footer className="py-12 flex flex-col items-center gap-10">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#137fec]/20 scale-[1.6] animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-[#137fec]/10 scale-[2.2] animate-ping"></div>
          <button className="relative z-10 size-24 rounded-full bg-[#137fec] text-white shadow-2xl shadow-[#137fec]/30 flex items-center justify-center active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-[42px]">mic</span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-16 w-full">
          <button className="flex flex-col items-center gap-2 group">
            <div className="size-11 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-[20px]">keyboard</span>
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">输入</span>
          </button>
          <div className="w-px h-6 bg-slate-100"></div>
          <button className="flex flex-col items-center gap-2 group">
            <div className="size-11 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-[20px]">help</span>
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">帮助</span>
          </button>
        </div>
      </footer>

      <style>{`
        @keyframes voiceWave {
          from { height: 20%; opacity: 0.4; }
          to { height: 100%; opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default VoiceAssistant;
