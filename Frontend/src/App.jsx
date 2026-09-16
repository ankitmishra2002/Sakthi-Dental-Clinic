import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TreatmentsPage from './pages/TreatmentsPage';
import AmenitiesPage from './pages/AmenitiesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FAQsPage from './pages/FAQsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const handleOpenAppointment = () => {
    setIsAppointmentOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentOpen(false);
  };

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar onOpenAppointment={handleOpenAppointment} />
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/about" element={<AboutPage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/treatments" element={<TreatmentsPage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/amenities" element={<AmenitiesPage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/testimonials" element={<TestimonialsPage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/faqs" element={<FAQsPage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<HomePage onOpenAppointment={handleOpenAppointment} />} />
          </Routes>
        </main>

        <Footer />

        <AppointmentModal
          isOpen={isAppointmentOpen}
          onClose={handleCloseAppointment}
        />
      </div>
    </Router>
  );
}

export default App;
