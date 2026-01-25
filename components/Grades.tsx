
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icons';
import { MOCK_GRADES } from '../constants';

const Grades: React.FC = () => {
  const navigate = useNavigate();

  const getAttendanceColor = (absences: number, total: number) => {
    const percentage = ((total - absences) / total) * 100;
    if (percentage < 75) return 'text-red-600';
    if (percentage < 85) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Aprovado': return 'bg-green-100 text-green-800';
      case 'Reprovado': return 'bg-red-100 text-red-800';
      case 'Exame': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const formatGradeKey = (key: string) => {
    if (key.toLowerCase() === 'work' || key.toLowerCase() === 'trabalho') return 'Trabalho';
    if (key.toLowerCase().startsWith('lista')) return `Lista ${key.replace(/\D/g, '')}`;
    if (key.toLowerCase().includes('quiz')) return 'Quiz';
    if (key.toLowerCase().includes('pratico')) return 'Prática';
    return key.toUpperCase();
  };

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
        <h1 className="text-white text-lg font-bold tracking-wide mx-auto">NOTAS E FALTAS</h1>
      </div>

      <div className="flex-1 p-4 max-w-2xl mx-auto w-full space-y-4">
        {MOCK_GRADES.map((subject) => (
          <div key={subject.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            {/* Subject Header */}
            <div className="p-4 border-b border-gray-100 bg-gray-50/50">
              <div className="flex justify-between items-start gap-2 mb-2">
                <h3 className="font-bold text-ufu-blue text-sm uppercase leading-tight">{subject.name}</h3>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide flex-shrink-0 ${getStatusColor(subject.status)}`}>
                  {subject.status}
                </span>
              </div>
              <p className="text-xs text-gray-500 font-mono">{subject.code} • {subject.semester}</p>
            </div>

            {/* Stats */}
            <div className="p-4 grid grid-cols-2 gap-4">
              {/* Grades */}
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Notas</span>
                <div className="space-y-1">
                  {Object.keys(subject.grades).length > 0 ? (
                    Object.entries(subject.grades).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-600 capitalize">{formatGradeKey(key)}:</span>
                        <span className="font-bold text-gray-800">{value}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-gray-400 italic py-1">Nenhuma nota lançada</div>
                  )}
                  
                  {subject.finalGrade && (
                    <div className="flex justify-between text-sm pt-1 mt-1 border-t border-gray-100">
                      <span className="font-bold text-ufu-blue">Final:</span>
                      <span className="font-bold text-ufu-blue">{subject.finalGrade}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Attendance */}
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Frequência</span>
                <div className="flex flex-col items-center justify-center h-full pb-2">
                  <div className="text-3xl font-bold text-gray-800 mb-1">
                    {Math.round(((subject.totalClasses - subject.absences) / subject.totalClasses) * 100)}%
                  </div>
                  <div className={`text-xs font-medium ${getAttendanceColor(subject.absences, subject.totalClasses)}`}>
                    {subject.absences} faltas / {subject.totalClasses} aulas
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${subject.status === 'Reprovado' ? 'bg-red-500' : 'bg-green-500'}`}
                      style={{ width: `${((subject.totalClasses - subject.absences) / subject.totalClasses) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grades;
