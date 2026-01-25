
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icons';

const Tickets: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <div className="bg-ufu-blue h-14 flex items-center px-2 shadow-md sticky top-0 z-40">
        <button onClick={() => navigate('/')} className="flex items-center text-white px-2 active:opacity-80 gap-1 absolute left-2">
          <Icon name="ChevronLeft" size={26} />
        </button>
        <h1 className="text-white text-lg font-bold tracking-wide mx-auto">TÍQUETES RU</h1>
      </div>

      <div className="flex-1 p-4 max-w-md mx-auto w-full flex flex-col gap-6">
        
        {/* Balance Card */}
        <div className="bg-gradient-to-br from-ufu-blue to-blue-800 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="relative z-10">
                <span className="text-blue-200 text-sm font-medium uppercase tracking-wider">Saldo Atual</span>
                <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-xl font-medium">R$</span>
                    <span className="text-5xl font-bold">15,00</span>
                </div>
                <div className="mt-4 text-sm text-blue-200">
                    Equivalente a <span className="text-white font-bold">5 refeições</span>
                </div>
            </div>
        </div>

        {/* QR Code Action */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
            <div className="bg-gray-900 p-4 rounded-xl mb-4">
                 <Icon name="QrCode" className="text-white" size={120} />
            </div>
            <p className="text-gray-600 text-sm mb-4">Aproxime este código do leitor na catraca do restaurante.</p>
            <div className="text-xs text-gray-400 font-mono bg-gray-100 px-3 py-1 rounded">
                Token: 8493-AF32-9901
            </div>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-2 gap-4">
            <button className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center gap-2 active:bg-gray-50">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Icon name="CreditCard" size={20} />
                </div>
                <span className="font-bold text-gray-700 text-sm">Recarregar</span>
            </button>
            <button className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center gap-2 active:bg-gray-50">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Icon name="RotateCw" size={20} />
                </div>
                <span className="font-bold text-gray-700 text-sm">Transferir</span>
            </button>
        </div>

        {/* History Snippet */}
        <div className="mt-2">
            <h3 className="font-bold text-gray-500 text-xs uppercase tracking-wider mb-2">Últimos Usos</h3>
            <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-100">
                <div className="p-3 flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="font-bold text-sm text-gray-800">Almoço - Santa Mônica</span>
                        <span className="text-xs text-gray-500">Hoje, 12:15</span>
                    </div>
                    <span className="text-red-600 font-bold text-sm">- R$ 3,00</span>
                </div>
                <div className="p-3 flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="font-bold text-sm text-gray-800">Recarga PIX</span>
                        <span className="text-xs text-gray-500">Ontem, 20:30</span>
                    </div>
                    <span className="text-green-600 font-bold text-sm">+ R$ 30,00</span>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Tickets;
