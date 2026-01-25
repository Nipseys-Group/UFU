
export interface NewsItem {
  id: number;
  title: string;
  imageUrl: string;
  timeAgo: string;
}

export interface QuickAccessItem {
  id: string;
  label: string;
  icon: string;
  route?: string;
}

export interface DiningMenu {
  meal: 'Almoço' | 'Jantar';
  dish: string;
}

export interface StudentInfo {
  name: string;
  course: string;
  matricula: string;
  cpf: string;
  rg: string;
  naturalidade: string;
  filiacao: string[];
  birthDate: string;
  validity: string;
  photoUrl: string;
}

export interface ScheduleItem {
  id: string;
  day: string;
  subject: string;
  code: string;
  startTime: string;
  endTime: string;
  location: string;
  professor: string;
}

export interface GradeSubject {
  id: string;
  code: string;
  name: string;
  semester: string;
  absences: number;
  totalClasses: number;
  grades: {
    [key: string]: number;
  };
  finalGrade?: number;
  status: 'Aprovado' | 'Reprovado' | 'Cursando' | 'Exame';
}

export interface Message {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  date: string;
  isRead: boolean;
  tag?: string;
}
