
import { DiningMenu, NewsItem, QuickAccessItem, StudentInfo, ScheduleItem, GradeSubject, Message } from './types';

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: "Prefeitura de Uberlândia anuncia medidas para regularizar parceria com Hospital Veterinário da UFU",
    imageUrl: "https://picsum.photos/800/600?random=1",
    timeAgo: "2 dias atrás"
  },
  {
    id: 2,
    title: "Semana de Tecnologia e Inovação atrai milhares de estudantes",
    imageUrl: "https://picsum.photos/800/600?random=2",
    timeAgo: "3 dias atrás"
  },
  {
    id: 3,
    title: "Novo edital de intercâmbio para 2027 já está disponível",
    imageUrl: "https://picsum.photos/800/600?random=3",
    timeAgo: "5 dias atrás"
  }
];

export const QUICK_ACCESS: QuickAccessItem[] = [
  { id: 'comunica', label: 'Comunica', icon: 'Newspaper', route: '/comunica' },
  { id: 'eventos', label: 'Eventos', icon: 'Users', route: '/events' },
  { id: 'restaurantes', label: 'Restaurantes', icon: 'Utensils', route: '/restaurants' },
  { id: 'calendario', label: 'Calendário Acadêmico', icon: 'Calendar', route: '/calendar' },
  { id: 'intercampi', label: 'Intercampi', icon: 'Bus', route: '/intercampi' },
  { id: 'id_digital', label: 'ID Digital', icon: 'IdCard', route: '/login' },
];

export const DINING_MENUS: DiningMenu[] = [
  { meal: 'Almoço', dish: 'Frango ao Molho de Açafrão' },
  { meal: 'Jantar', dish: 'Bife Bovino ao Molho Madeira' },
];

export const STUDENT_GEO: StudentInfo = {
  name: 'GEOVANNA BATISTA DOS SANTOS',
  course: 'CURSO DE GRADUAÇÃO EM ESTATÍSTICA',
  matricula: '45197JKM247',
  cpf: '164.370.016-23',
  rg: '24.958.734 - PC/MG',
  naturalidade: 'Uberaba',
  filiacao: ['Jorge Damiao dos Santos', 'Nayara Batista da Silva'],
  birthDate: '20/02/2008',
  validity: '10/12/2028',
  photoUrl: 'https://i.imgur.com/NmZvMrP.png'
};

export const STUDENT_BRUNO: StudentInfo = {
  name: 'Bruno Muryllo Sena Monteiro',
  course: 'CURSO DE GRADUAÇÃO EM ESTATÍSTICA',
  matricula: '14562EST367',
  cpf: '703.725.886-54',
  rg: 'MG-24.126.913 - PC/MG',
  naturalidade: 'Uberaba',
  filiacao: ['Edmilson Monteiro da Fonseca', 'Aline Sena de Oliveira'],
  birthDate: '05/05/2007',
  validity: '05/12/2028',
  photoUrl: 'https://i.imgur.com/IN4ErGd.png'
};

// Default export for fallback
export const STUDENT_MOCK = STUDENT_GEO;

export const MOCK_SCHEDULE: ScheduleItem[] = [
  { id: '1', day: 'Segunda', subject: 'Inferência Estatística I', code: 'EST3201', startTime: '08:50', endTime: '10:30', location: 'Bloco 3Q - Sala 101', professor: 'João Mendes' },
  { id: '2', day: 'Segunda', subject: 'Análise de Regressão Linear', code: 'EST3202', startTime: '10:40', endTime: '12:20', location: 'Bloco 3Q - Sala 101', professor: 'Maria Oliveira' },
  { id: '3', day: 'Terça', subject: 'Processos Estocásticos', code: 'EST3203', startTime: '14:00', endTime: '15:40', location: 'Bloco 5R - Sala 203', professor: 'Pedro Santos' },
  { id: '4', day: 'Quarta', subject: 'Inferência Estatística I', code: 'EST3201', startTime: '08:50', endTime: '10:30', location: 'Bloco 3Q - Sala 101', professor: 'João Mendes' },
  { id: '5', day: 'Quarta', subject: 'Análise de Regressão Linear', code: 'EST3202', startTime: '10:40', endTime: '12:20', location: 'Bloco 3Q - Sala 101', professor: 'Maria Oliveira' },
  { id: '6', day: 'Quinta', subject: 'Estatística Computacional I', code: 'EST3204', startTime: '14:00', endTime: '17:30', location: 'Bloco 1B - Lab Estatística', professor: 'Ana Costa' },
  { id: '7', day: 'Sexta', subject: 'Amostragem', code: 'EST3205', startTime: '08:00', endTime: '11:30', location: 'Bloco 3Q - Sala 105', professor: 'Lucas Pereira' },
];

export const MOCK_GRADES: GradeSubject[] = [
  { 
    id: '1', 
    code: 'EST3201', 
    name: 'Inferência Estatística I', 
    semester: '2026/1', 
    absences: 0, 
    totalClasses: 72, 
    grades: { lista1: 95, quiz: 80 }, 
    status: 'Cursando' 
  },
  { 
    id: '2', 
    code: 'EST3202', 
    name: 'Análise de Regressão Linear', 
    semester: '2026/1', 
    absences: 2, 
    totalClasses: 72, 
    grades: { trab_pratico: 90 }, 
    status: 'Cursando' 
  },
  { 
    id: '3', 
    code: 'EST3204', 
    name: 'Estatística Computacional I', 
    semester: '2026/1', 
    absences: 0, 
    totalClasses: 60, 
    grades: {}, 
    status: 'Cursando' 
  },
  { 
    id: '4', 
    code: 'EST3103', 
    name: 'Probabilidade II', 
    semester: '2025/2', 
    absences: 6, 
    totalClasses: 60, 
    grades: { p1: 75, p2: 85, trabalho: 90 }, 
    finalGrade: 82,
    status: 'Aprovado' 
  },
  { 
    id: '5', 
    code: 'FAMAT31023', 
    name: 'Álgebra Linear', 
    semester: '2025/2', 
    absences: 8, 
    totalClasses: 72, 
    grades: { p1: 60, p2: 70 }, 
    finalGrade: 65,
    status: 'Aprovado' 
  },
];

export const MOCK_MESSAGES: Message[] = [
  { id: '1', sender: 'Coordenação Estatística', subject: 'Boas vindas ao semestre 2026/1', preview: 'Prezados alunos, sejam bem-vindos ao novo semestre letivo. As aulas terão início no dia...', date: '20 Jan', isRead: false, tag: 'Importante' },
  { id: '2', sender: 'Prof. João Mendes', subject: 'Plano de Ensino - Inferência I', preview: 'Olá turma, disponibilizei o plano de ensino da disciplina no Moodle. Por favor, leiam antes da primeira aula.', date: '18 Jan', isRead: true },
  { id: '3', sender: 'DIRAC', subject: 'Confirmação de Matrícula 2026/1', preview: 'Sua solicitação de matrícula para o semestre 2026/1 foi processada com sucesso. Confira o comprovante no portal.', date: '15 Jan', isRead: true },
  { id: '4', sender: 'Biblioteca UFU', subject: 'Devolução de livros - Férias', preview: 'Lembramos que o prazo para devolução de livros retirados antes das férias se encerra na próxima semana.', date: '10 Jan', isRead: true },
  { id: '5', sender: 'PROGRAD', subject: 'Calendário Acadêmico 2026', preview: 'O calendário acadêmico para o ano letivo de 2026 já está disponível para consulta no site da PROGRAD.', date: '05 Jan', isRead: true },
];
