
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icons';

const Events: React.FC = () => {
  const navigate = useNavigate();

  const mockEvents = [
    {
      id: 1,
      day: '25',
      month: 'JAN',
      title: 'Semana da Estatística 2026',
      location: 'Bloco 5O - Campus Santa Mônica',
      time: '08:00 - 18:00',
      category: 'Acadêmico'
    },
    {
      id: 2,
      day: '28',
      month: 'JAN',
      title: 'Recepção aos Calouros',
      location: 'Centro de Convivência',
      time: '14:00',
      category: 'Institucional'
    },
    {
      id: 3,
      day: '05',
      month: 'FEV',
      title: 'Workshop de Data Science',
      location: 'Laboratório 1B - Bloco 1B',
      time: '19:00',
      category: 'Workshop'
    },
    {
      id: 4,
      day: '12',
      month: 'FEV',
      title: 'Cine UFU: Exibição "O Jogo da Imitação"',
      location: 'Anfiteatro A',
      time: '18:30',
      category: 'Cultura'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <div className="bg-ufu-blue h-14 flex items-center px-2 shadow-md sticky top-0 z-40">
        <button onClick={() => navigate('/')} className="flex items-center text-white px-2 active:opacity-80 gap-1 absolute left-2">
          <Icon name="ChevronLeft" size={26} />
        </button>
        <h1 className="text-white text-lg font-bold tracking-wide mx-auto">EVENTOS</h1>
        <button className="absolute right-2 text-white p-2">
          <Icon name="Filter" size={22} />
        </button>
      </div>

      <div className="flex-1 p-4 max-w-2xl mx-auto w-full">
        <h2 className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Próximos Eventos</h2>
        
        <div className="space-y-4">
          {mockEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex gap-4">
              <div className="flex flex-col items-center justify-center min-w-[3.5rem] bg-ufu-blue/5 rounded p-2 text-ufu-blue">
                <span className="text-2xl font-black leading-none">{event.day}</span>
                <span className="text-xs font-bold uppercase">{event.month}</span>
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide border border-gray-200 px-1.5 rounded">{event.category}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-base mt-1 mb-1">{event.title}</h3>
                
                <div className="flex flex-col gap-1 text-xs text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <Icon name="Clock" size={14} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon name="MapPin" size={14} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
