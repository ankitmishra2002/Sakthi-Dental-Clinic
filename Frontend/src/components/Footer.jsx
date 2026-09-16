import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0b2545', color: '#f8fafc', paddingTop: '60px', paddingBottom: '30px' }}>
      <div className="container">
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '50px',
        }}>
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #e8397a, #d12969)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ffffff" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
                  Sakthi <span style={{ color: '#f472b6' }}>Dental Clinic</span>
                </div>
              </div>
            </div>

            <p className="font-handwriting" style={{ fontSize: '1.25rem', color: '#f472b6', marginBottom: '16px' }}>
              Healthy Smiles<br />Happier Lives
            </p>

            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6, maxWidth: '280px' }}>
              Specialized dental care for women, children & families in Hosur. Over 20 years of trusted clinical excellence.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '20px', position: 'relative' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              {['Home', 'About Us', 'Treatments', 'Amenities', 'Testimonials', 'FAQs', 'Contact', 'Privacy Policy'].map((item) => {
                const path = item === 'Home' ? '/' : item === 'About Us' ? '/about' : item === 'Privacy Policy' ? '/privacy-policy' : `/${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <Link to={path} style={{ color: '#cbd5e1', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#f472b6'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#cbd5e1' }}>
              <li><Link to="/treatments" style={{ color: '#cbd5e1' }}>General Dentistry</Link></li>
              <li><Link to="/treatments" style={{ color: '#cbd5e1' }}>Tooth Extraction</Link></li>
              <li><Link to="/treatments" style={{ color: '#cbd5e1' }}>Teeth Cleaning & Scaling</Link></li>
              <li><Link to="/treatments" style={{ color: '#cbd5e1' }}>Tooth Filling</Link></li>
              <li><Link to="/treatments" style={{ color: '#cbd5e1' }}>Bleaching & Whitening</Link></li>
              <li><Link to="/treatments" style={{ color: '#cbd5e1' }}>Orthodontics & Aligners</Link></li>
              <li><Link to="/treatments" style={{ color: '#cbd5e1' }}>Artificial Complete Dentures</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#f472b6" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} color="#f472b6" style={{ flexShrink: 0 }} />
                <span>+91 9862890897 / +91 9363298118</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} color="#f472b6" style={{ flexShrink: 0 }} />
                <span>info@sakthidentalclinic.in</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Clock size={18} color="#f472b6" style={{ marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <div><strong>Mon - Sat:</strong> 9:00 AM - 8:00 PM</div>
                  <div><strong>Sunday:</strong> 10:00 AM - 2:00 PM</div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div style={{ marginTop: '20px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#94a3b8', marginBottom: '10px' }}>Follow Us</div>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { icon: Facebook, href: 'https://facebook.com' },
                  { icon: Instagram, href: 'https://instagram.com' },
                  { icon: Youtube, href: 'https://youtube.com' },
                  { icon: Linkedin, href: 'https://linkedin.com' }
                ].map((s, idx) => {
                  const IconComp = s.icon;
                  return (
                    <a key={idx} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      transition: 'all 0.2s ease',
                    }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e8397a'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; }}>
                      <IconComp size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          fontSize: '0.85rem',
          color: '#94a3b8',
        }}>
          <div>
            © 2026 Sakthi Dental Clinic. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Designed with <Heart size={14} fill="#e8397a" color="#e8397a" /> for Healthier Smiles.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
