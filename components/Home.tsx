
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from './Navigation';
import { NEWS_ITEMS, QUICK_ACCESS, DINING_MENUS } from '../constants';
import { Icon } from './Icons';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const nextIndex = (activeSlide + 1) % NEWS_ITEMS.length;
        const width = scrollRef.current.clientWidth;
        
        scrollRef.current.scrollTo({
          left: nextIndex * width,
          behavior: 'smooth'
        });
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [activeSlide]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const slideWidth = e.currentTarget.clientWidth;
    const scrollLeft = e.currentTarget.scrollLeft;
    // Calculate index based on scroll position
    const index = Math.round(scrollLeft / slideWidth);
    
    // Only update state if index actually changed to avoid unnecessary re-renders
    if (index !== activeSlide) {
      setActiveSlide(index);
    }
  };

  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: index * width,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero / News Carousel */}
      <div className="relative w-full h-64 bg-gray-900 overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex w-full h-full overflow-x-auto snap-x snap-mandatory no-scrollbar"
          onScroll={handleScroll}
        >
          {NEWS_ITEMS.map((news) => (
            <div key={news.id} className="min-w-full h-full relative snap-start flex-shrink-0">
              <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover opacity-70" />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h2 className="text-white text-lg font-bold leading-tight mb-6 line-clamp-3">
                  {news.title}
                </h2>
                <span className="absolute bottom-4 right-4 text-white/80 text-xs">
                  {news.timeAgo}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {NEWS_ITEMS.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => scrollToSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === activeSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Quick Access Icons */}
      <div className="grid grid-cols-4 gap-y-6 gap-x-2 px-4 py-8 bg-white shadow-sm mb-4">
        {QUICK_ACCESS.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => item.route ? navigate(item.route) : null}
          >
            <div className="w-14 h-14 rounded-full bg-ufu-blue flex items-center justify-center text-white shadow-lg active:scale-95 transition-transform">
              <Icon name={item.icon} size={28} />
            </div>
            <span className="text-xs text-center text-ufu-blue font-medium leading-tight max-w-[80px]">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Dining Section (RU) */}
      <div className="bg-white p-4 mb-4 shadow-sm relative">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <Icon name="Utensils" className="text-ufu-blue" size={24} />
            <h3 className="text-ufu-blue font-bold text-lg">Hoje no RU Santa Mônica</h3>
          </div>
          <Icon name="Settings" className="text-ufu-blue/70" size={20} />
        </div>

        <div className="space-y-3">
          {DINING_MENUS.map((menu) => (
            <div key={menu.meal} className="rounded overflow-hidden border border-gray-200 shadow-sm">
              <div className="bg-gray-600 text-white text-xs px-2 py-0.5 inline-block rounded-br">
                {menu.meal}
              </div>
              <div className="bg-ufu-blue p-3">
                <p className="text-white font-medium">{menu.dish}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-end items-center gap-1 text-sm text-gray-800 font-medium">
          <span>Ver cardápio completo</span>
          <Icon name="ChevronRight" size={16} />
        </div>
      </div>

      {/* Events Section */}
      <div className="bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-5 bg-ufu-blue rounded-full"></div>
          <h3 className="text-ufu-blue font-bold text-lg">Eventos em andamento</h3>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4 flex items-center gap-4 shadow-sm">
             {/* Mock Event Content */}
             <div className="w-full">
                <h4 className="font-serif text-2xl text-purple-900 leading-none mb-1">I Workshop <span className="font-bold text-ufu-blue">AINET</span></h4>
                <h5 className="font-bold text-lg leading-none mb-1">Brazil - Netherlands</h5>
                <p className="text-[10px] uppercase tracking-wider text-gray-500">Artificial and Machine Intelligence in Networks</p>
             </div>
        </div>
      </div>
      
      {/* Simple Footer/Copyright */}
      <div className="mt-auto bg-gray-100 p-4 border-t border-gray-200 flex items-center justify-between text-[10px] text-ufu-blue font-bold">
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 border-2 border-ufu-blue flex items-center justify-center rounded transform rotate-45">
                <div className="w-2 h-2 bg-ufu-blue transform"></div>
            </div>
            <div className="leading-tight">
                CTIC - Centro de Tecnologia<br/>
                da Informação e Comunicação
            </div>
        </div>
        <div className="text-right">
            Fale Conosco ✉️<br/>
            <span className="text-gray-400 font-normal">versão 13</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
