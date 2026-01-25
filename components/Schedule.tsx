
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icons';
import { MOCK_SCHEDULE } from '../constants';

const Schedule: React.FC = () => {
  const navigate = useNavigate();
  const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const [activeDay, setActiveDay] = useState('Segunda');

  const filteredSchedule = MOCK_SCHEDULE.filter(item => item.day === activeDay).sort((a, b) => a.startTime.localeCompare(b.startTime));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header */}
      <div className="bg-ufu-blue h-14 flex items-center px-2 shadow-md sticky top-0 z-40">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-white px-2 active:opacity-80 gap-1 absolute left-2"
        >
          <Icon name="ChevronLeft" size={26} />
        </button>
        <h1 className="text-white text-lg font-bold tracking-wide mx-auto">GRADE HORÁRIA</h1>
      </div>

      {/* Days Tabs */}
      <div className="bg-white shadow-sm sticky top-14 z-30 overflow-x-auto no-scrollbar">
        <div className="flex px-2 min-w-max">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${
                activeDay === day 
                  ? 'border-ufu-blue text-ufu-blue' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 max-w-2xl mx-auto w-full">
        {filteredSchedule.length > 0 ? (
          <div className="space-y-4">
            {filteredSchedule.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm border-l-4 border-ufu-blue p-4 flex gap-4">
                <div className="flex flex-col items-center justify-center min-w-[3.5rem] border-r border-gray-100 pr-4">
                  <span className="text-lg font-bold text-gray-800 leading-none">{item.startTime}</span>
                  <span className="text-xs text-gray-400 my-1">até</span>
                  <span className="text-gray-600 font-medium leading-none">{item.endTime}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-ufu-blue text-sm uppercase mb-1 line-clamp-2">{item.subject}</h3>
                  <div className="text-xs text-gray-500 font-mono mb-2">{item.code}</div>
                  
                  <div className="flex flex-col gap-1 text-xs text-gray-700">
                    <div className="flex items-center gap-1.5">
                      <Icon name="Map" size={14} className="text-gray-400" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="Users" size={14} className="text-gray-400" />
                      <span>Prof. {item.professor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-gray-400">
            <Icon name="Calendar" size={48} className="mb-2 opacity-20" />
            <p>Sem aulas nesta data.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
