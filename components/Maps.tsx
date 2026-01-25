
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icons';

const Maps: React.FC = () => {
  const navigate = useNavigate();

  const locations = [
    { name: 'Campus Santa Mônica', address: 'Av. João Naves de Ávila, 2121', image: 'https://picsum.photos/400/200?random=20' },
    { name: 'Campus Umuarama', address: 'Av. Pará, 1720', image: 'https://picsum.photos/400/200?random=21' },
    { name: 'Campus Glória', address: 'Rod. BR 050, km 78', image: 'https://picsum.photos/400/200?random=22' },
    { name: 'Campus Educação Física', address: 'R. Benjamin Constant, 1286', image: 'https://picsum.photos/400/200?random=23' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <div className="bg-ufu-blue h-14 flex items-center px-2 shadow-md sticky top-0 z-40">
        <button onClick={() => navigate('/')} className="flex items-center text-white px-2 active:opacity-80 gap-1 absolute left-2">
          <Icon name="ChevronLeft" size={26} />
        </button>
        <h1 className="text-white text-lg font-bold tracking-wide mx-auto">MAPAS</h1>
      </div>

      <div className="flex-1 p-4 max-w-2xl mx-auto w-full">
        <div className="bg-white p-2 rounded-lg shadow-sm mb-4 flex items-center gap-2 border border-gray-200">
            <Icon name="Search" className="text-gray-400 ml-2" size={20} />
            <input 
                type="text" 
                placeholder="Buscar bloco, setor ou sala..." 
                className="w-full p-2 outline-none text-sm text-gray-700"
            />
        </div>

        <div className="grid grid-cols-1 gap-4">
            {locations.map((loc, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                    <div className="h-32 bg-gray-200 relative">
                        <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <div className="bg-white/90 p-2 rounded-full shadow-lg">
                                <Icon name="MapPin" className="text-red-600" size={24} />
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold text-gray-900 text-lg">{loc.name}</h3>
                        <p className="text-gray-500 text-sm mb-3">{loc.address}</p>
                        <button className="w-full py-2 bg-blue-50 text-blue-700 font-bold rounded text-sm hover:bg-blue-100 transition-colors flex items-center justify-center gap-2">
                            <Icon name="Navigation" size={16} />
                            Navegar
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Maps;
