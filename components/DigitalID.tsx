import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icons';
import { STUDENT_GEO } from '../constants';
import { StudentInfo } from '../types';

const DigitalID: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [isReloading, setIsReloading] = useState(false);
  const [student, setStudent] = useState<StudentInfo>(STUDENT_GEO);

  // Load user from session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        setStudent(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user data", e);
      }
    }
  }, []);

  const handleQrClick = () => {
    setIsLoading(true);
    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);
      setShowError(true);
    }, 2000);
  };

  const handleReload = () => {
    if (isReloading) return;
    setIsReloading(true);
    // Simulate reload delay
    setTimeout(() => {
      setIsReloading(false);
    }, 800);
  };

  const closeError = () => {
    setShowError(false);
  };

  // Helper component for details rows
  const DetailRow = ({ label, value, isLast = false }: { label: string, value: React.ReactNode, isLast?: boolean }) => (
    <div className={`flex flex-col py-1.5 px-3 ${!isLast ? 'border-b border-blue-200' : ''}`}>
      <span className="text-ufu-blue font-bold text-base leading-tight mb-0.5 select-none">{label}</span>
      <span className="text-gray-800 text-lg font-normal leading-tight break-all select-text">{value}</span>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-white flex flex-col font-sans relative">
      {/* Header App Bar - Sticky */}
      <div className="bg-ufu-blue h-14 flex items-center justify-between px-2 shadow-md sticky top-0 z-40 flex-shrink-0 pt-[env(safe-area-inset-top)] select-none">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-white px-2 active:opacity-80 gap-1"
        >
          <Icon name="ChevronLeft" size={26} />
          <span className="text-lg font-normal">Back</span>
        </button>
        
        <h1 className="text-white text-lg font-bold tracking-wide absolute left-1/2 transform -translate-x-1/2 pt-[env(safe-area-inset-top)]">ID DIGITAL</h1>
        
        <div className="flex items-center gap-4 px-2">
          <button 
            onClick={handleReload}
            className={`text-white active:opacity-70 outline-none ${isReloading ? 'animate-spin' : ''}`}
            disabled={isReloading}
          >
            <Icon name="RotateCw" size={22} strokeWidth={2.5} />
          </button>
          <button 
            onClick={() => setShowInfoModal(true)}
            className="text-white active:opacity-70 outline-none"
          >
            <Icon name="Info" size={24} />
          </button>
        </div>
      </div>

      {/* Main Content Area - Full Page Watermark */}
      <div className={`flex-1 w-full flex flex-col items-center watermark-pattern transition-opacity duration-300 ease-in-out pb-[env(safe-area-inset-bottom)] ${isReloading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        
        {/* Main Card Wrapper - Full width/height, max-width for larger screens */}
        <div className="w-full max-w-md relative flex flex-col min-h-full">
          
          {/* Section 1: University Header */}
          <div className="relative pt-4 pb-4 px-4 flex items-center justify-center border-b-[4px] border-ufu-blue select-none">
             
             <div className="relative z-10 flex items-center justify-between w-full">
                {/* Left Group: Logo + UFU Text */}
                <div className="flex items-center gap-2">
                  {/* Logo UFU - Image */}
                  <div className="h-12 w-12 flex-shrink-0">
                     <img src="https://i.imgur.com/DgkXxrg.png" alt="Logo UFU" className="w-full h-full object-contain" />
                  </div>
                  
                  {/* UFU Big Text */}
                  <span className="text-ufu-blue font-black text-5xl tracking-tighter leading-none select-none">UFU</span>
                </div>
                
                {/* Right Group: University Name */}
                <div className="text-ufu-blue font-bold text-xs xs:text-sm leading-tight text-left ml-2">
                   Universidade<br/>
                   Federal de<br/>
                   Uberlândia
                </div>
             </div>
          </div>

          {/* Section 2: Profile (Photo + Info) */}
          <div className="relative px-4 py-6 flex items-center gap-4 border-b-[4px] border-ufu-blue">
             
             {/* Photo Circle */}
             <div className="relative z-10 flex-shrink-0 ml-2">
               <div className="w-24 h-24 xs:w-28 xs:h-28 rounded-full border-[4px] border-ufu-blue overflow-hidden shadow-sm bg-gray-200">
                  <img src={student.photoUrl} alt="Student" className="w-full h-full object-cover" />
               </div>
             </div>

             {/* Text Info */}
             <div className="relative z-10 flex-1 min-w-0 flex flex-col justify-center h-full pr-1">
               <h2 className="text-black font-black text-base xs:text-lg leading-tight uppercase mb-1 break-words">
                 {student.name}
               </h2>
               <p className="text-black text-[10px] xs:text-[11px] font-medium leading-snug uppercase tracking-wide">
                 {student.course}
               </p>
             </div>
          </div>

          {/* Section 3: Details List Container */}
          <div className="relative p-5 pb-28 flex-1">
             
             {/* The details list box - Semi-transparent white background to show pattern through */}
             <div className="relative z-10 bg-white/80 border border-blue-300 rounded-xl overflow-hidden shadow-sm backdrop-blur-[1px]">
               
               <DetailRow label="Matrícula:" value={student.matricula} />
               <DetailRow label="CPF:" value={student.cpf} />
               <DetailRow label="R.G. / Org. Exp.:" value={student.rg} />
               <DetailRow label="Naturalidade:" value={student.naturalidade} />
               
               {/* Filiacao - custom row to handle array */}
               <div className="flex flex-col py-1.5 px-3 border-b border-blue-200">
                  <span className="text-ufu-blue font-bold text-base leading-tight mb-0.5 select-none">Filiação:</span>
                  <div className="flex flex-col">
                      {student.filiacao.map((p, i) => (
                        <span key={i} className="text-gray-800 text-lg font-normal leading-tight break-all select-text">{p}</span>
                      ))}
                  </div>
               </div>

               <DetailRow label="Data de Nascimento:" value={student.birthDate} />
               
               {/* Last Row - No border bottom */}
               <div className="flex flex-col py-1.5 px-3 pb-3">
                  <span className="text-ufu-blue font-bold text-base leading-tight mb-0.5 select-none">Data de Validade:</span>
                  <span className="text-gray-800 text-lg font-normal leading-tight select-text">{student.validity}</span>
               </div>
               
             </div>

             {/* QR Code Floating - Bottom Right - Overlapping the container */}
             <button 
                onClick={handleQrClick}
                className="absolute bottom-6 right-5 z-20 transition-transform active:scale-95 outline-none pb-[env(safe-area-inset-bottom)]"
             >
                <div className="bg-ufu-blue p-2 rounded-lg shadow-lg flex items-center justify-center">
                    <Icon name="QrCode" className="text-white" size={48} />
                </div>
             </button>

          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center backdrop-blur-[2px]">
            <div className="bg-white px-8 py-6 rounded-xl shadow-2xl flex flex-col items-center gap-4 animate-pulse">
                <div className="animate-spin rounded-full h-10 w-10 border-[4px] border-ufu-blue border-t-transparent"></div>
                <span className="text-ufu-blue font-bold text-lg tracking-wide">Buscando...</span>
            </div>
        </div>
      )}

      {/* Error Modal */}
      {showError && (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center backdrop-blur-[2px] p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-[320px] overflow-hidden transform transition-all animate-bounce-in">
                <div className="p-6 flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Erro</h3>
                    <p className="text-gray-600 leading-relaxed mb-1">
                        Ocorreu um erro interno no sistema.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Tente novamente mais tarde.
                    </p>
                </div>
                <div className="bg-gray-50 p-4 border-t border-gray-100">
                    <button 
                        onClick={closeError}
                        className="w-full bg-ufu-blue text-white py-3 rounded-lg font-bold text-base shadow hover:bg-ufu-blue/90 active:opacity-90 transition-all"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
      )}

      {/* Info Modal (Replica of the image) */}
      {showInfoModal && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-6 backdrop-blur-sm">
            <div className="bg-white rounded shadow-2xl w-full max-w-sm overflow-hidden flex flex-col max-h-[90vh]">
                <div className="pt-5 pb-3 px-4">
                    <h3 className="text-center font-bold text-lg text-gray-900">Informações</h3>
                </div>
                
                <div className="px-6 py-4 overflow-y-auto text-gray-700 text-sm space-y-4 border-t border-gray-200">
                     {/* Instability Warning */}
                    <div className="text-red-600 font-bold text-center border-b border-red-100 pb-3">
                        Atenção: O sistema está enfrentando instabilidades e pode não funcionar corretamente no momento.
                    </div>

                    <p>
                        O QRCode deve ser lido para verificar a autenticidade do documento.
                    </p>
                    <div className="border-t border-gray-200 pt-3">
                        Para alteração da foto ou dos dados o aluno deve entrar contato com um dos postos de atendimento listados <span className="font-bold text-blue-700 underline">AQUI</span> e o servidor deve procurar a DICOT, divisão da PROGEP.
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                        A data de validade é renovada automaticamente desde que o vínculo do aluno com a UFU seja mantido.
                    </div>
                </div>

                <div className="bg-ufu-blue p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
                    <button 
                        onClick={() => setShowInfoModal(false)}
                        className="w-full py-2 bg-ufu-blue text-white font-bold text-base uppercase tracking-wide hover:bg-blue-900 transition-colors"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
      )}

    </div>
  );
};

export default DigitalID;