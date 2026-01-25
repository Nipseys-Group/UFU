
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import DigitalID from './components/DigitalID';
import Login from './components/Login';
import Schedule from './components/Schedule';
import Grades from './components/Grades';
import Messages from './components/Messages';
import Comunica from './components/Comunica';
import Events from './components/Events';
import AcademicCalendar from './components/AcademicCalendar';
import Restaurants from './components/Restaurants';
import Tickets from './components/Tickets';
import Intercampi from './components/Intercampi';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/id-digital" element={<DigitalID />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/messages" element={<Messages />} />
        
        {/* New Routes */}
        <Route path="/comunica" element={<Comunica />} />
        <Route path="/events" element={<Events />} />
        <Route path="/calendar" element={<AcademicCalendar />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/intercampi" element={<Intercampi />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
