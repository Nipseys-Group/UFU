
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icons';
import { NEWS_ITEMS } from '../constants';

const Comunica: React.FC = () => {
  const navigate = useNavigate();

  // Extending news items locally for a fuller page
  const fullNews = [
    ...NEWS_ITEMS,
    {
      id: 4,
      title: "UFU abre inscrições para cursos de línguas estrangeiras no CLEC",
      imageUrl: "https://picsum.photos/800/600?random=10",
      timeAgo: "6 dias atrás",
      tag: "Extensão"
    },
    {
      id: 5,
      title: "Pesquisadores da UFU desenvolvem nova tecnologia de filtragem de água",
      imageUrl: "https://picsum.photos/800/600?random=11",
      timeAgo: "1 semana atrás",
      tag: "Ciência"
    },
    {
      id: 6,
      title: "Comunicado: Manutenção programada nos sistemas acadêmicos",
      imageUrl: "https://picsum.photos/800/600?random=12",
      timeAgo: "1 semana atrás",
      tag: "CTIC"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <div className="bg-ufu-blue h-14 flex items-center px-2 shadow-md sticky top-0 z-40">
        <button onClick={() => navigate('/')} className="flex items-center text-white px-2 active:opacity-80 gap-1 absolute left-2">
          <Icon name="ChevronLeft" size={26} />
        </button>
        <h1 className="text-white text-lg font-bold tracking-wide mx-auto">COMUNICA UFU</h1>
        <button className="absolute right-2 text-white p-2">
          <Icon name="Search" size={22} />
        </button>
      </div>

      <div className="flex-1 p-4 max-w-2xl mx-auto w-full space-y-4">
        {fullNews.map((news) => (
          <div key={news.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col sm:flex-row cursor-pointer hover:shadow-md transition-shadow">
            <div className="h-40 sm:h-auto sm:w-1/3 bg-gray-200 relative">
               <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 sm:w-2/3 flex flex-col justify-between">
              <div>
                {(news as any).tag && (
                  <span className="text-[10px] font-bold text-ufu-blue bg-blue-100 px-2 py-0.5 rounded-full uppercase mb-2 inline-block">
                    {(news as any).tag}
                  </span>
                )}
                <h3 className="font-bold text-gray-800 leading-tight mb-2 line-clamp-3">
                  {news.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                 <Icon name="Clock" size={14} />
                 <span>{news.timeAgo}</span>
              </div>
            </div>
          </div>
        ))}
        
        <button className="w-full py-3 bg-gray-200 text-gray-600 font-bold rounded mt-4">
          Carregar mais notícias
        </button>
      </div>
    </div>
  );
};

export default Comunica;
