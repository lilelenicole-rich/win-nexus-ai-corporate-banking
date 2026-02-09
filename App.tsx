
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TaskProgress from './pages/TaskProgress';
import CustomerList from './pages/CustomerList';
import FinancialAnalysis from './pages/FinancialAnalysis';
import VoiceAssistant from './pages/VoiceAssistant';
import DailyReview from './pages/DailyReview';
import CreditExpert from './pages/CreditExpert';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-slate-100 flex items-center justify-around py-3 px-2 z-50 pb-8 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] max-w-[430px] mx-auto">
      <button 
        onClick={() => navigate('/')}
        className={`flex flex-col items-center gap-1 w-14 transition-colors ${isActive('/') ? 'text-[#137fec]' : 'text-slate-400'}`}
      >
        <span className={`material-symbols-outlined ${isActive('/') ? 'filled' : ''} text-[26px]`}>home</span>
        <span className="text-[10px] font-medium">首页</span>
      </button>

      <button 
        onClick={() => navigate('/tasks')}
        className={`flex flex-col items-center gap-1 w-14 transition-colors ${isActive('/tasks') ? 'text-[#137fec]' : 'text-slate-400'}`}
      >
        <span className={`material-symbols-outlined ${isActive('/tasks') ? 'filled' : ''} text-[26px]`}>psychology</span>
        <span className="text-[10px] font-medium">智能体</span>
      </button>

      <div className="relative -top-6">
        <button 
          onClick={() => navigate('/voice')}
          className="h-14 w-14 rounded-full bg-gradient-to-br from-[#137fec] to-blue-600 flex items-center justify-center shadow-[0_8px_16px_rgba(19,127,236,0.3)] border-[3px] border-white active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-white text-[28px]">mic</span>
        </button>
      </div>

      <button 
        onClick={() => navigate('/customers')}
        className={`flex flex-col items-center gap-1 w-14 transition-colors ${isActive('/customers') || isActive('/analysis') ? 'text-[#137fec]' : 'text-slate-400'}`}
      >
        <span className={`material-symbols-outlined ${isActive('/customers') || isActive('/analysis') ? 'filled' : ''} text-[26px]`}>group</span>
        <span className="text-[10px] font-medium">客户</span>
      </button>

      <button 
        onClick={() => navigate('/review')}
        className={`flex flex-col items-center gap-1 w-14 transition-colors ${isActive('/review') ? 'text-[#137fec]' : 'text-slate-400'}`}
      >
        <span className={`material-symbols-outlined ${isActive('/review') ? 'filled' : ''} text-[26px]`}>assignment_turned_in</span>
        <span className="text-[10px] font-medium">回顾</span>
      </button>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="max-w-[430px] mx-auto min-h-screen bg-[#FAFAFA] relative overflow-x-hidden shadow-2xl border-x border-slate-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<TaskProgress />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/analysis" element={<FinancialAnalysis />} />
          <Route path="/voice" element={<VoiceAssistant />} />
          <Route path="/review" element={<DailyReview />} />
          <Route path="/expert" element={<CreditExpert />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
};

export default App;
