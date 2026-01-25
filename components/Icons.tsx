
import React from 'react';
import { 
  Menu, 
  LogIn, 
  Newspaper, 
  Users, 
  Utensils, 
  Calendar, 
  Bus, 
  IdCard, 
  ChevronRight, 
  Settings, 
  ChevronLeft,
  RotateCw,
  Info,
  QrCode,
  Home,
  Ticket,
  Map,
  CalendarDays,
  GraduationCap,
  Mail,
  X,
  Clock,
  MapPin,
  Search,
  Filter,
  CreditCard,
  AlertCircle,
  BusFront
} from 'lucide-react';

export const IconMap: Record<string, React.FC<any>> = {
  Menu, LogIn, Newspaper, Users, Utensils, Calendar, Bus, IdCard, 
  ChevronRight, Settings, ChevronLeft, RotateCw, Info, QrCode,
  Home, Ticket, Map, CalendarDays, GraduationCap, Mail, X,
  Clock, MapPin, Search, Filter, CreditCard, AlertCircle, BusFront
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const IconComponent = IconMap[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} />;
};
