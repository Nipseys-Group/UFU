import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icons';
import { STUDENT_GEO, STUDENT_BRUNO } from '../constants';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Login logic for GeoUFU
    if (username === 'GeoUFU' && password === '050527') {
      setError('');
      // Save user session
      localStorage.setItem('currentUser', JSON.stringify(STUDENT_GEO));
      navigate('/id-digital');
    } 
    // Login logic for BrunoMUFU
    else if (username === 'BrunoMUFU' && password === '050527') {
      setError('');
      // Save user session
      localStorage.setItem('currentUser', JSON.stringify(STUDENT_BRUNO));
      navigate('/id-digital');
    }
    else {
      setError('Usuário ou senha incorreto');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Header with Logo and Back Button */}
      <header className="bg-white border-b border-gray-200 py-3 px-4 shadow-sm flex items-center justify-between pt-[env(safe-area-inset-top,12px)]">
        <div className="w-10 h-10">
            <img src="https://i.imgur.com/DgkXxrg.png" alt="Logo UFU" className="w-full h-full object-contain" />
        </div>
        
        <button 
          onClick={() => navigate('/')}
          className="text-gray-500 hover:text-ufu-blue p-1 -mr-1 active:opacity-70 transition-colors"
          aria-label="Voltar"
        >
           <Icon name="ChevronLeft" size={32} />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-start justify-center pt-8 px-4 sm:px-6 overflow-y-auto">
        <div className="w-full max-w-md bg-white rounded shadow-lg border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-normal text-gray-800 mb-6 text-center sm:text-left">
            Entrar com conta UFU
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username Input */}
            <div className="space-y-1">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Usuário
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Usuário"
                className="w-full px-3 py-3 bg-white border border-gray-400 rounded text-gray-900 placeholder:italic placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 appearance-none rounded-none"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
                className="w-full px-3 py-3 bg-white border border-gray-400 rounded text-gray-900 placeholder:italic placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 appearance-none rounded-none"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-600 text-sm font-medium">
                {error}
              </div>
            )}

            {/* Actions Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-sm active:bg-blue-900"
              >
                Entrar
              </button>
              
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                Esqueceu sua senha?
              </a>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            {/* Gov.br Button */}
            <div>
              <button
                type="button"
                className="w-full sm:w-auto px-6 py-2.5 border border-blue-700 text-blue-700 rounded-full font-medium hover:bg-blue-50 transition-colors flex items-center gap-1 justify-center mx-auto"
              >
                Entrar com <span className="font-black">gov.br</span>
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f1d3a] text-white py-4 px-4 text-center mt-auto pb-[env(safe-area-inset-bottom,16px)]">
        <p className="text-[10px] sm:text-xs leading-relaxed opacity-90">
          ©2022 - 2026 | Acesso UFU (v0.18.0) | <span className="font-bold">Desenvolvido pelo CTIC</span> |
          <br />
          Universidade Federal de Uberlândia
        </p>
      </footer>
    </div>
  );
};

export default Login;