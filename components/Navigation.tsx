import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icons';
import { STUDENT_GEO } from '../constants';
import { StudentInfo } from '../types';

interface NavigationProps {
  onLoginClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [student, setStudent] = useState<StudentInfo>(STUDENT_GEO);

  // Load user data on mount (or whenever sidebar opens)
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        setStudent(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user data", e);
      }
    }
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (path?: string) => {
    if (path) {
      navigate(path);
      setSidebarOpen(false);
    }
  };

  // Sidebar Menu Items based on the image provided
  const menuItems = [
    { label: 'Início', icon: 'Home', path: '/' },
    { label: 'Id Digital', icon: 'IdCard', path: '/id-digital' },
    { label: 'Comunica', icon: 'Newspaper', path: '/comunica' },
    { label: 'Eventos', icon: 'Users', path: '/events' },
    { label: 'Calendário Acadêmico', icon: 'Calendar', path: '/calendar' },
    { label: 'Restaurantes', icon: 'Utensils', path: '/restaurants' },
    { label: 'Tíquetes RU', icon: 'Ticket', path: '/tickets' },
    { label: 'Intercampi', icon: 'Bus', path: '/intercampi' },
  ];

  const academicItems = [
    { label: 'Grade Horária', icon: 'CalendarDays', path: '/schedule' },
    { label: 'Notas e Faltas', icon: 'GraduationCap', path: '/grades' },
    { label: 'Mensagens', icon: 'Mail', path: '/messages' },
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="bg-ufu-blue h-14 flex items-center justify-between px-4 shadow-md sticky top-0 z-50 pt-[env(safe-area-inset-top)] select-none">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar}
            className="text-white active:opacity-70 outline-none"
          >
            <Icon name="Menu" size={28} />
          </button>
        </div>
        
        <div className="flex items-center gap-2">
           {/* Logo Image */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden p-1">
             <img src="https://i.imgur.com/DgkXxrg.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-white text-xl font-bold tracking-wide">UFU</span>
        </div>

        <button 
          onClick={() => navigate('/login')}
          className="bg-white text-ufu-blue px-3 py-1 rounded shadow text-sm font-bold flex items-center gap-2 active:bg-gray-100 transition-colors"
        >
          <Icon name="LogIn" size={16} />
          ENTRAR
        </button>
      </nav>

      {/* Sidebar Overlay (Backdrop) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] transition-opacity backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-ufu-blue z-[70] transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col pt-[env(safe-area-inset-top)] ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Profile Header */}
        <div className="px-5 py-8 flex items-center gap-4 border-b border-white/20 select-none">
          <div className="w-16 h-16 rounded-full border-2 border-white overflow-hidden bg-gray-300 flex-shrink-0">
             <img src={student.photoUrl} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col text-white">
            <h2 className="font-bold text-base leading-tight mb-0.5 break-words line-clamp-2">{student.name}</h2>
            <span className="text-sm text-white/80 font-normal">Aluno</span>
            <span className="text-sm text-white/80 font-normal">{student.matricula}</span>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto py-2 no-scrollbar pb-[env(safe-area-inset-bottom)]">
          <ul className="flex flex-col">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button 
                  onClick={() => handleNavigation(item.path)}
                  className="w-full flex items-center gap-4 px-6 py-3.5 text-white hover:bg-white/10 active:bg-white/20 transition-colors select-none"
                >
                  <Icon name={item.icon} size={26} className="text-white" />
                  <span className="text-base font-normal tracking-wide">{item.label}</span>
                </button>
              </li>
            ))}
            
            {/* Divider */}
            <div className="h-px bg-white/20 mx-4 my-2"></div>

            {academicItems.map((item, index) => (
              <li key={`ac-${index}`}>
                <button 
                  onClick={() => handleNavigation(item.path)}
                  className="w-full flex items-center gap-4 px-6 py-3.5 text-white hover:bg-white/10 active:bg-white/20 transition-colors select-none"
                >
                  <Icon name={item.icon} size={26} className="text-white" />
                  <span className="text-base font-normal tracking-wide">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};