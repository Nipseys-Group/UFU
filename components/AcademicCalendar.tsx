
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icons';

const AcademicCalendar: React.FC = () => {
  const navigate = useNavigate();

  const calendarData = [
    {
      month: 'Janeiro 2026',
      events: [
        { date: '01', day: 'Qui', desc: 'Confraternização Universal', type: 'Feriado' },
        { date: '05', day: 'Seg', desc: 'Início do período de matrícula online', type: 'Acadêmico' },
        { date: '20', day: 'Ter', desc: 'Início do Semestre Letivo 2026/1', type: 'Acadêmico' },
      ]
    },
    {
      month: 'Fevereiro 2026',
      events: [
        { date: '16', day: 'Seg', desc: 'Recesso Escolar', type: 'Recesso' },
        { date: '17', day: 'Ter', desc: 'Carnaval', type: 'Feriado' },
        { date: '18', day: 'Qua', desc: 'Cinzas (ponto facultativo até 14h)', type: 'Recesso' },
      ]
    },
    {
      month: 'Março 2026',
      events: [
        { date: '14', day: 'Sáb', desc: 'Sábado letivo referente à segunda-feira', type: 'Acadêmico' },
        { date: '28', day: 'Sáb', desc: 'Término do 1º bimestre letivo', type: 'Acadêmico' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <div className="bg-ufu-blue h-14 flex items-center px-2 shadow-md sticky top-0 z-40">
        <button onClick={() => navigate('/')} className="flex items-center text-white px-2 active:opacity-80 gap-1 absolute left-2">
          <Icon name="ChevronLeft" size={26} />
        </button>
        <h1 className="text-white text-lg font-bold tracking-wide mx-auto">CALENDÁRIO</h1>
        <button className="absolute right-2 text-white p-2">
          <Icon name="CalendarDays" size={22} />
        </button>
      </div>

      <div className="flex-1 max-w-2xl mx-auto w-full">
        {calendarData.map((monthBlock, idx) => (
          <div key={idx} className="mb-6">
            <div className="sticky top-14 z-30 bg-gray-100 px-4 py-2 border-b border-gray-200 font-bold text-gray-700 text-sm uppercase tracking-wider flex items-center gap-2">
              <Icon name="Calendar" size={16} />
              {monthBlock.month}
            </div>
            <div className="bg-white divide-y divide-gray-100">
              {monthBlock.events.map((evt, i) => (
                <div key={i} className="flex p-4 items-center gap-4 hover:bg-gray-50">
                   <div className={`flex flex-col items-center min-w-[3rem] ${evt.type === 'Feriado' ? 'text-red-500' : 'text-gray-800'}`}>
                      <span className="text-xl font-bold leading-none">{evt.date}</span>
                      <span className="text-[10px] font-medium uppercase">{evt.day}</span>
                   </div>
                   <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">{evt.desc}</p>
                      <span className={`text-[10px] px-2 rounded-full inline-block mt-1 
                        ${evt.type === 'Feriado' ? 'bg-red-100 text-red-700' : 
                          evt.type === 'Recesso' ? 'bg-orange-100 text-orange-700' : 
                          'bg-blue-100 text-blue-700'}`}>
                        {evt.type}
                      </span>
                   </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="p-4 flex justify-center">
            <button className="text-ufu-blue font-bold text-sm flex items-center gap-1">
                Baixar PDF Oficial <Icon name="ChevronRight" size={16} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
