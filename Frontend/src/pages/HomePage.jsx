import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, PhoneCall, Heart, Award, Cpu, ShieldCheck, Sparkles, ArrowRight, Car, Accessibility, Bus, Building2 } from 'lucide-react';
import AssuranceBanner from '../components/AssuranceBanner';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

const HomePage = ({ onOpenAppointment }) => {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <section style={{
        backgroundColor: '#fff0f5',
        backgroundImage: 'radial-gradient(#fbcfe8 0.75px, transparent 0.75px)',
        backgroundSize: '24px 24px',
        paddingTop: '40px',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="container hero-grid">
          {/* Left Column: Content */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#ffffff',
              border: '1px solid #fbcfe8',
              padding: '6px 16px',
              borderRadius: '9999px',
              color: '#e8397a',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.5px',
              marginBottom: '16px',
              boxShadow: '0 2px 8px rgba(232, 57, 122, 0.1)',
            }}>
              <Sparkles size={14} /> WELCOME TO SAKTHI DENTAL CLINIC
            </div>

            <h1 style={{
              fontSize: '2.8rem',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.15,
              marginBottom: '20px',
            }} className="hero-title">
              Specialized Dental Care for{' '}
              <span style={{ color: '#e8397a' }}>Women, Children & Families</span>
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: '#475569',
              lineHeight: 1.6,
              marginBottom: '32px',
              maxWidth: '560px',
            }}>
              Experience compassionate, expert-led dental services tailored to your needs, all in a modern and welcoming environment.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <button onClick={onOpenAppointment} className="btn-primary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
                <Calendar size={18} /> Fix an Appointment
              </button>

              <Link to="/contact" className="btn-secondary" style={{ padding: '13px 26px', fontSize: '1rem' }}>
                <PhoneCall size={18} /> Emergency Support
              </Link>
            </div>

            {/* Trust Badges Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
              {[
                { label: 'Trusted by Families', icon: Heart, color: '#e8397a' },
                { label: 'Expert Dentists', icon: Award, color: '#8b5cf6' },
                { label: 'Modern Technology', icon: Cpu, color: '#0284c7' },
                { label: 'Safe & Hygienic', icon: ShieldCheck, color: '#16a34a' },
              ].map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="badge-item">
                    <Icon size={16} color={badge.color} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Hero Graphic Image */}
          <div style={{ position: 'relative', textAlign: 'center' }}>

            {/* Main Image frame */}
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
              border: '6px solid #ffffff',
              backgroundColor: '#fff',
            }}>
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80"
                alt="Female Dentist treating smiling child patient"
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>

            {/* Floating pill badge */}
            <div className="animate-float" style={{
              position: 'absolute',
              bottom: '-20px',
              left: '20px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '12px 20px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              border: '1px solid #fbcfe8',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#fff0f5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e8397a' }}>
                <Sparkles size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a' }}>Gentle Care</div>
                <div style={{ fontSize: '0.78rem', color: '#e8397a', fontWeight: 600 }}>for Brighter Tomorrows</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WELCOME / ASSURANCE BANNER */}
      <AssuranceBanner />

      {/* 3. WHY CHOOSE SAKTHI DENTAL CLINIC? */}
      <section style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">WHY CHOOSE SAKTHI DENTAL CLINIC?</span>
          <h2 className="section-heading">Care Beyond Treatment</h2>
          <p className="section-subtext">
            We go the extra mile to make your dental experience comfortable, safe and stress-free.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            textAlign: 'left',
          }}>
            {[
              {
                title: 'All-in-One Care',
                desc: 'From general dentistry to specialized treatments, everything under one roof.',
                icon: Heart,
              },
              {
                title: 'Experienced Doctors',
                desc: 'Our dentists are professionally trained and committed to personalized patient care.',
                icon: Award,
              },
              {
                title: 'Patient-Centric Approach',
                desc: 'We prioritize comfort, safety, and transparency in every treatment we offer.',
                icon: ShieldCheck,
              },
              {
                title: 'Technology-Driven Services',
                desc: 'Modern tools and equipment ensure precision and safety.',
                icon: Cpu,
              },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="feature-card" style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    backgroundColor: '#fff0f5',
                    color: '#e8397a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                    boxShadow: '0 4px 10px rgba(232, 57, 122, 0.15)',
                  }}>
                    <IconComponent size={26} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OUR CORE TREATMENTS */}
      <section style={{ padding: '60px 0', backgroundColor: '#faf5f8' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">OUR CORE TREATMENTS</span>
          <h2 className="section-heading">Explore Our Services</h2>
          <p className="section-subtext">
            Comprehensive dental care for a healthier, brighter smile.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
            textAlign: 'left',
          }}>
            {[
              {
                name: 'Tooth Extraction',
                desc: 'Safe and painless removal of impacted or decayed teeth.',
                img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&auto=format&fit=crop&q=80',
              },
              {
                name: 'Artificial Complete Denture',
                desc: 'Full mouth replacement to restore confidence and function.',
                img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&auto=format&fit=crop&q=80',
              },
              {
                name: 'Tooth Filling',
                desc: 'Composite fillings for cavity treatment and tooth restoration.',
                img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500&auto=format&fit=crop&q=80',
              },
              {
                name: 'Teeth Cleaning / Scaling',
                desc: 'Preventive care to remove plaque and protect gums.',
                img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop&q=80',
              },
              {
                name: 'Bleaching',
                desc: 'Cosmetic whitening treatments for a brighter smile.',
                img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=500&auto=format&fit=crop&q=80',
              },
              {
                name: 'Orthodontic Treatment',
                desc: 'Braces and aligners to straighten and align teeth.',
                img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=500&auto=format&fit=crop&q=80',
              },
            ].map((t, idx) => (
              <div key={idx} className="treatment-card" style={{ display: 'flex', gap: '16px', padding: '16px', alignItems: 'center' }}>
                <img
                  src={t.img}
                  alt={t.name}
                  style={{ width: '90px', height: '90px', borderRadius: '12px', objectFit: 'cover', flexShrink: 0 }}
                />
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                    {t.name}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.4, marginBottom: '8px' }}>
                    {t.desc}
                  </p>
                  <Link to="/treatments" style={{ fontSize: '0.82rem', fontWeight: 700, color: '#e8397a', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <Link to="/treatments" className="btn-primary" style={{ padding: '14px 32px' }}>
            View Full List of Treatments <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">TESTIMONIALS</span>
          <h2 className="section-heading">What Our Patients Say</h2>
          <p className="section-subtext">
            Real stories. Real smiles. Here's what our patients have to say about their experience at Sakthi Dental Clinic.
          </p>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* 6. AMENITIES PREVIEW */}
      <section style={{ padding: '60px 0', backgroundColor: '#f8fafc' }}>
        <div className="container amenities-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'center' }}>
          <div>
            <span className="section-label">OUR AMENITIES</span>
            <h2 className="section-heading" style={{ textAlign: 'left' }}>
              A Comfortable Experience for Every Patient
            </h2>
            <p className="section-subtext" style={{ textAlign: 'left', margin: '0 0 28px 0' }}>
              We strive to make your visit as convenient and comfortable as possible with facilities designed for all age groups.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {[
                { title: 'Ample Parking Space', desc: 'Spacious parking facility for your convenience.', icon: Car },
                { title: 'Wheelchair Access', desc: 'Easy access for differently-abled patients.', icon: Accessibility },
                { title: 'Transportation Support', desc: 'Assistance with local transportation facilities.', icon: Bus },
                { title: 'Clean & Modern Facilities', desc: 'Hygienic and well-maintained clinic environment.', icon: Building2 },
              ].map((a, idx) => {
                const Icon = a.icon;
                return (
                  <div key={idx} style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#fff0f5', color: '#e8397a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                      <Icon size={20} />
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>{a.title}</div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.4 }}>{a.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=700&auto=format&fit=crop&q=80"
                alt="Sakthi Dental Clinic Reception Area"
                style={{ width: '100%', height: '380px', objectFit: 'cover' }}
              />
            </div>
            <div className="font-handwriting" style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              backgroundColor: 'rgba(255,255,255,0.95)',
              padding: '10px 20px',
              borderRadius: '12px',
              fontSize: '1.4rem',
              color: '#e8397a',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}>
              Your Smile Our Priority ♡
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRE-FOOTER CTA */}
      <section style={{ padding: '40px 0', backgroundColor: '#fff0f5', borderTop: '1px solid #fbcfe8' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '14px', backgroundColor: '#e8397a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calendar size={26} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>Your Smile, Our Priority</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0 }}>Book your appointment today and take the first step towards a healthier smile.</p>
            </div>
          </div>
          <button onClick={onOpenAppointment} className="btn-primary" style={{ padding: '12px 28px' }}>
            Fix an Appointment
          </button>
        </div>
      </section>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1.1fr 0.9fr !important; }
          .amenities-grid { grid-template-columns: 1.1fr 0.9fr !important; }
        }
        @media (max-width: 640px) {
          .hero-title { font-size: 2.1rem !important; }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
