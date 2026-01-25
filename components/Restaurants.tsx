
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icons';

const Restaurants: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'Santa Monica' | 'Umuarama'>('Santa Monica');

  const menu = {
    'Santa Monica': {
      lunch: {
        main: 'Frango ao Molho de Açafrão',
        veg: 'Omelete de Forno',
        garnish: 'Macarrão Alho e Óleo',
        salad: 'Alface, Tomate e Pepino',
        dessert: 'Laranja'
      },
      dinner: {
        main: 'Bife Bovino ao Molho Madeira',
        veg: 'Proteína de Soja Refogada',
        garnish: 'Farofa de Couve',
        salad: 'Repolho e Beterraba',
        dessert: 'Doce de Leite'
      },
      status: 'Aberto',
      queue: 'Média'
    },
    'Umuarama': {
       lunch: {
        main: 'Lombo Suíno Assado',
        veg: 'Grão de Bico Ensopado',
        garnish: 'Purê de Batata',
        salad: 'Mix de Folhas',
        dessert: 'Banana'
      },
      dinner: {
        main: 'Strogonoff de Frango',
        veg: 'Legumes Salté',
        garnish: 'Batata Palha',
        salad: 'Tomate e Cebola',
        dessert: 'Gelatina'
      },
      status: 'Aberto',
      queue: 'Curta'
    }
  };

  const currentMenu = menu[activeTab];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <div className="bg-ufu-blue h-14 flex items-center px-2 shadow-md sticky top-0 z-40">
        <button onClick={() => navigate('/')} className="flex items-center text-white px-2 active:opacity-80 gap-1 absolute left-2">
          <Icon name="ChevronLeft" size={26} />
        </button>
        <h1 className="text-white text-lg font-bold tracking-wide mx-auto">RESTAURANTES</h1>
      </div>

      {/* Tabs */}
      <div className="bg-white flex shadow-sm">
        <button 
            onClick={() => setActiveTab('Santa Monica')}
            className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'Santa Monica' ? 'border-ufu-blue text-ufu-blue' : 'border-transparent text-gray-500'}`}
        >
            Santa Mônica
        </button>
        <button 
            onClick={() => setActiveTab('Umuarama')}
            className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'Umuarama' ? 'border-ufu-blue text-ufu-blue' : 'border-transparent text-gray-500'}`}
        >
            Umuarama
        </button>
      </div>

      <div className="flex-1 p-4 max-w-2xl mx-auto w-full space-y-4">
        
        {/* Status Card */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold text-gray-800">Status: {currentMenu.status}</span>
            </div>
            <div className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">
                Fila: <span className={currentMenu.queue === 'Longa' ? 'text-red-600' : 'text-green-600'}>{currentMenu.queue}</span>
            </div>
        </div>

        {/* Lunch Menu */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-orange-100 p-3 border-b border-orange-200 flex items-center gap-2">
                <Icon name="Utensils" className="text-orange-600" size={18} />
                <h3 className="font-bold text-orange-800 text-sm uppercase">Almoço (11:00 - 13:30)</h3>
            </div>
            <div className="p-4 space-y-3 text-sm">
                <div><span className="font-bold text-gray-500 block text-xs">Prato Principal</span>{currentMenu.lunch.main}</div>
                <div><span className="font-bold text-gray-500 block text-xs">Opção Vegetariana</span>{currentMenu.lunch.veg}</div>
                <div><span className="font-bold text-gray-500 block text-xs">Guarnição</span>{currentMenu.lunch.garnish}</div>
                <div><span className="font-bold text-gray-500 block text-xs">Salada</span>{currentMenu.lunch.salad}</div>
                <div><span className="font-bold text-gray-500 block text-xs">Sobremesa</span>{currentMenu.lunch.dessert}</div>
            </div>
        </div>

        {/* Dinner Menu */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-100 p-3 border-b border-blue-200 flex items-center gap-2">
                <Icon name="Utensils" className="text-blue-600" size={18} />
                <h3 className="font-bold text-blue-800 text-sm uppercase">Jantar (17:30 - 19:00)</h3>
            </div>
            <div className="p-4 space-y-3 text-sm">
                <div><span className="font-bold text-gray-500 block text-xs">Prato Principal</span>{currentMenu.dinner.main}</div>
                <div><span className="font-bold text-gray-500 block text-xs">Opção Vegetariana</span>{currentMenu.dinner.veg}</div>
                <div><span className="font-bold text-gray-500 block text-xs">Guarnição</span>{currentMenu.dinner.garnish}</div>
                <div><span className="font-bold text-gray-500 block text-xs">Salada</span>{currentMenu.dinner.salad}</div>
                <div><span className="font-bold text-gray-500 block text-xs">Sobremesa</span>{currentMenu.dinner.dessert}</div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Restaurants;
