import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Menu, X, Heart, Phone, Clock } from 'lucide-react';

const Navbar = ({ onOpenAppointment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setMobileMenuOpen(false), 0);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : '#ffffff',
      backdropFilter: 'blur(10px)',
      boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : '0 1px 3px rgba(0,0,0,0.05)',
      transition: 'all 0.3s ease',
    }}>
      {/* Top Bar for Phone / Hours / Emergency */}
      <div style={{
        backgroundColor: '#fff0f5',
        borderBottom: '1px solid #fce7f3',
        padding: '6px 0',
        fontSize: '0.8rem',
        color: '#475569',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Phone size={13} color="#e8397a" /> +91 9862890897 / +91 9363298118
            </span>
            <span style={{ display: 'none', alignItems: 'center', gap: '5px' }} className="hidden-mobile">
              <Clock size={13} color="#e8397a" /> Mon - Sun: 9:00 AM - 9:00 PM
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600 }}>
            <span style={{ color: '#e8397a', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Heart size={12} fill="#e8397a" /> Dental Care for Women & Children
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 20px',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #e8397a, #d12969)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: '0 4px 10px rgba(232, 57, 122, 0.3)',
          }}>
            {/* Tooth + Heart Combo Logo */}
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 2 9 4 12 1 .5 2 .5 2 0 2-3 4-8.5 4-12 0-3.5-2.5-6-6-6z" fill="#ffffff" fillOpacity="0.2"/>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.3px', lineHeight: 1.1 }}>
              Sakthi <span style={{ color: '#e8397a' }}>Dental Clinic</span>
            </div>
            <div className="font-handwriting" style={{ fontSize: '0.95rem', color: '#e8397a', marginTop: '-2px' }}>
              Healthy Smiles Happier Lives
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '24px' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? '#e8397a' : '#334155',
                  padding: '6px 0',
                  position: 'relative',
                  transition: 'color 0.2s ease',
                }}
              >
                {link.name}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#e8397a',
                    borderRadius: '2px',
                  }} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onOpenAppointment}
            className="btn-primary"
            style={{
              padding: '10px 20px',
              fontSize: '0.88rem',
            }}
          >
            <Calendar size={16} />
            <span>Fix an Appointment</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              padding: '8px',
              borderRadius: '8px',
              color: '#334155',
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#ffffff',
          borderBottom: '2px solid #fbcfe8',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                fontSize: '1rem',
                fontWeight: location.pathname === link.path ? 700 : 500,
                color: location.pathname === link.path ? '#e8397a' : '#1e293b',
                padding: '8px 12px',
                borderRadius: '8px',
                backgroundColor: location.pathname === link.path ? '#fff0f5' : 'transparent',
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* Inline styles for media queries */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
          .hidden-mobile { display: inline-flex !important; }
        }
        @media (max-width: 899px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
