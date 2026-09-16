import React from 'react';
import { Heart, ShieldCheck, Building2, Users } from 'lucide-react';

const AssuranceBanner = () => {
  return (
    <div style={{
      backgroundColor: '#fff0f5',
      borderTop: '1px solid #fbcfe8',
      borderBottom: '1px solid #fbcfe8',
      padding: '24px 0',
      margin: '40px 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px',
      }}>
        {/* Left Side: Assurance Message */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '520px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            backgroundColor: '#e8397a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 6px 16px rgba(232, 57, 122, 0.3)',
            flexShrink: 0,
          }}>
            <Heart size={30} fill="#ffffff" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.25, marginBottom: '4px' }}>
              You are always in safe hands.
            </h3>
            <p style={{ fontSize: '1rem', color: '#e8397a', fontWeight: 600 }}>
              We are ready to help, anytime.
            </p>
          </div>
        </div>

        {/* Vertical Divider */}
        <div style={{
          width: '1px',
          height: '48px',
          backgroundColor: '#fbcfe8',
          display: 'none',
        }} className="divider-desktop"></div>

        {/* Right Side: Key Highlights */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 700, color: '#334155' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e8397a', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
              <ShieldCheck size={18} />
            </div>
            <span>Compassionate Care</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 700, color: '#334155' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e8397a', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
              <Building2 size={18} />
            </div>
            <span>Modern Facilities</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 700, color: '#334155' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e8397a', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
              <Users size={18} />
            </div>
            <span>For All Age Groups</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .divider-desktop { display: block !important; }
        }
      `}</style>
    </div>
  );
};

export default AssuranceBanner;
