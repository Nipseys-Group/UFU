
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icons';

const Intercampi: React.FC = () => {
  const navigate = useNavigate();
  const [direction, setDirection] = useState<'SM_UMU' | 'UMU_SM'>('SM_UMU');

  const schedules = {
    'SM_UMU': [
        { time: '06:50', bus: 'Linha 1', status: 'Saiu' },
        { time: '07:10', bus: 'Linha 2', status: 'Embarcando' },
        { time: '07:30', bus: 'Linha 1', status: 'No Horário' },
        { time: '08:00', bus: 'Linha 3', status: 'No Horário' },
        { time: '09:00', bus: 'Linha 2', status: 'No Horário' },
        { time: '11:15', bus: 'Linha 1', status: 'No Horário' },
    ],
    'UMU_SM': [
        { time: '07:00', bus: 'Linha 1', status: 'Saiu' },
        { time: '07:20', bus: 'Linha 2', status: 'Atrasado (5min)' },
        { time: '07:50', bus: 'Linha 3', status: 'No Horário' },
        { time: '08:20', bus: 'Linha 1', status: 'No Horário' },
        { time: '09:30', bus: 'Linha 2', status: 'No Horário' },
    ]
  };

  const currentSchedule = schedules[direction];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <div className="bg-ufu-blue h-14 flex items-center px-2 shadow-md sticky top-0 z-40">
        <button onClick={() => navigate('/')} className="flex items-center text-white px-2 active:opacity-80 gap-1 absolute left-2">
          <Icon name="ChevronLeft" size={26} />
        </button>
        <h1 className="text-white text-lg font-bold tracking-wide mx-auto">INTERCAMPI</h1>
      </div>

      <div className="flex-1 p-4 max-w-2xl mx-auto w-full">
        
        {/* Route Selector */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">Selecione o Sentido</label>
            <div className="flex flex-col gap-2">
                <button 
                    onClick={() => setDirection('SM_UMU')}
                    className={`flex items-center justify-between p-3 rounded border transition-all ${direction === 'SM_UMU' ? 'bg-blue-50 border-ufu-blue text-ufu-blue' : 'bg-white border-gray-200 text-gray-600'}`}
                >
                    <span className="font-bold text-sm">Santa Mônica ➔ Umuarama</span>
                    {direction === 'SM_UMU' && <div className="w-2 h-2 rounded-full bg-ufu-blue"></div>}
                </button>
                <button 
                    onClick={() => setDirection('UMU_SM')}
                    className={`flex items-center justify-between p-3 rounded border transition-all ${direction === 'UMU_SM' ? 'bg-blue-50 border-ufu-blue text-ufu-blue' : 'bg-white border-gray-200 text-gray-600'}`}
                >
                    <span className="font-bold text-sm">Umuarama ➔ Santa Mônica</span>
                    {direction === 'UMU_SM' && <div className="w-2 h-2 rounded-full bg-ufu-blue"></div>}
                </button>
            </div>
        </div>

        {/* Schedule List */}
        <h2 className="text-sm font-bold text-gray-500 uppercase mb-3 tracking-wider flex items-center gap-2">
            <Icon name="Clock" size={16} /> Próximas Saídas
        </h2>
        
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm divide-y divide-gray-100">
            {currentSchedule.map((item, index) => (
                <div key={index} className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="bg-gray-100 p-2 rounded text-gray-700">
                            <Icon name="BusFront" size={20} />
                        </div>
                        <div>
                            <span className="text-xl font-bold text-gray-900 block leading-none mb-1">{item.time}</span>
                            <span className="text-xs text-gray-500">{item.bus}</span>
                        </div>
                    </div>
                    <div className={`text-xs font-bold px-2 py-1 rounded 
                        ${item.status === 'Saiu' ? 'bg-gray-100 text-gray-500' : 
                          item.status === 'Embarcando' ? 'bg-green-100 text-green-700 animate-pulse' : 
                          item.status.includes('Atrasado') ? 'bg-red-100 text-red-700' : 
                          'bg-blue-50 text-blue-700'}`}>
                        {item.status}
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-4 p-3 bg-yellow-50 text-yellow-800 text-xs rounded border border-yellow-100 flex gap-2 items-start">
            <Icon name="AlertCircle" size={16} className="flex-shrink-0 mt-0.5" />
            <p>Os horários podem sofrer alterações devido ao trânsito. Chegue com antecedência ao ponto de embarque.</p>
        </div>

      </div>
    </div>
  );
};

export default Intercampi;
