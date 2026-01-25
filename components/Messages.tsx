
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icons';
import { MOCK_MESSAGES } from '../constants';

const Messages: React.FC = () => {
  const navigate = useNavigate();

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
        <h1 className="text-white text-lg font-bold tracking-wide mx-auto">MENSAGENS</h1>
        <button className="absolute right-2 text-white p-2">
           <Icon name="Mail" size={22} />
        </button>
      </div>

      <div className="flex-1 max-w-2xl mx-auto w-full">
        {MOCK_MESSAGES.map((msg) => (
          <div 
            key={msg.id} 
            className={`border-b border-gray-100 p-4 active:bg-blue-50 transition-colors cursor-pointer bg-white ${!msg.isRead ? 'border-l-4 border-l-ufu-blue' : ''}`}
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className={`text-sm ${!msg.isRead ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>
                {msg.sender}
              </h3>
              <span className={`text-xs whitespace-nowrap ${!msg.isRead ? 'text-ufu-blue font-bold' : 'text-gray-500'}`}>
                {msg.date}
              </span>
            </div>
            
            <h4 className={`text-xs mb-1 ${!msg.isRead ? 'font-bold text-gray-800' : 'text-gray-600'}`}>
              {msg.subject}
            </h4>
            
            <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
              {msg.preview}
            </p>

            {msg.tag && (
              <div className="mt-2">
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide">
                  {msg.tag}
                </span>
              </div>
            )}
          </div>
        ))}
        
        <div className="p-8 text-center text-gray-400 text-sm">
          Fim das mensagens
        </div>
      </div>
    </div>
  );
};

export default Messages;
