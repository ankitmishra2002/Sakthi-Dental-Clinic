import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Accessibility, Bus, Building2, Smile, Droplets, Sparkles, Sofa, ShieldCheck, Heart, Users, ChevronRight, Calendar } from 'lucide-react';

const AmenitiesPage = ({ onOpenAppointment }) => {
  const amenitiesList = [
    { title: 'Ample Parking Space', desc: 'Spacious parking facility for your convenience.', icon: Car, img: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400&auto=format&fit=crop&q=80' },
    { title: 'Wheelchair Access', desc: 'Easy access ramps for differently-abled patients.', icon: Accessibility, img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&auto=format&fit=crop&q=80' },
    { title: 'Transportation Support', desc: 'Assistance with local transportation facilities.', icon: Bus, img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop&q=80' },
    { title: 'Clean & Modern Facilities', desc: 'Hygienic and well-maintained clinic environment.', icon: Building2, img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&auto=format&fit=crop&q=80' },
    { title: 'Child-Friendly Environment', desc: 'A friendly and comfortable space for children.', icon: Smile, img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&auto=format&fit=crop&q=80' },
    { title: 'Drinking Water Facility', desc: 'Clean and safe drinking water for all visitors.', icon: Droplets, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-4vFe41aPe5b9mX1NPRVRbr9t9YrnakvMoFCouyI3Q&s=10' },
    { title: 'Clean Restrooms', desc: 'Well-maintained and hygienic restroom facilities.', icon: Sparkles, img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&auto=format&fit=crop&q=80' },
    { title: 'Comfortable Waiting Area', desc: 'Spacious and relaxing waiting lounge for patients.', icon: Sofa, img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&auto=format&fit=crop&q=80' },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#fff0f5', padding: '12px 0', borderBottom: '1px solid #fbcfe8', fontSize: '0.85rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b' }}>
          <Link to="/" style={{ color: '#334155' }}>Home</Link>
          <ChevronRight size={14} />
          <span style={{ color: '#e8397a', fontWeight: 700 }}>Amenities</span>
        </div>
      </div>

      {/* 1. HERO HEADER */}
      <section style={{ backgroundColor: '#fff0f5', paddingTop: '40px', paddingBottom: '50px' }}>
        <div className="container amenities-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', alignItems: 'center' }}>
          <div>
            <span className="section-label">OUR AMENITIES</span>
            <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '16px' }}>
              A Comfortable Experience for <span style={{ color: '#e8397a' }}>Every Patient</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
              We strive to make your visit as convenient and comfortable as possible with modern facilities designed for all age groups. Your comfort is our top priority.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <span className="badge-item"><ShieldCheck size={16} color="#e8397a" /> Safe & Hygienic</span>
              <span className="badge-item"><Users size={16} color="#8b5cf6" /> For All Age Groups</span>
              <span className="badge-item"><Heart size={16} color="#0284c7" /> Comfortable Experience</span>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=700&auto=format&fit=crop&q=80"
                alt="Clinic Interior Waiting Lounge"
                style={{ width: '100%', height: '320px', objectFit: 'cover' }}
              />
            </div>
            <div className="font-handwriting" style={{
              position: 'absolute',
              bottom: '15px',
              right: '15px',
              backgroundColor: 'rgba(255,255,255,0.95)',
              padding: '8px 16px',
              borderRadius: '12px',
              fontSize: '1.3rem',
              color: '#e8397a',
            }}>
              Care Comfort Confidence Always ♡
            </div>
          </div>
        </div>
      </section>

      {/* 2. FACILITIES GRID */}
      <section style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">OUR AMENITIES</span>
          <h2 className="section-heading">Facilities Designed Around You</h2>
          <p className="section-subtext">From easy access to a child-friendly environment, we've got everything covered.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', textAlign: 'left', marginTop: '36px' }}>
            {amenitiesList.map((a, idx) => {
              const IconComp = a.icon;
              return (
                <div key={idx} className="feature-card" style={{ padding: 0, overflow: 'hidden' }}>
                  <img src={a.img} alt={a.title} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                  <div style={{ padding: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#fff0f5', color: '#e8397a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconComp size={20} />
                      </div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>{a.title}</h3>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5 }}>{a.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. YOUR COMFORT MATTERS CTA */}
      <section style={{ padding: '40px 0', backgroundColor: '#fff0f5', borderTop: '1px solid #fbcfe8', borderBottom: '1px solid #fbcfe8' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>Your Comfort Matters</h3>
            <p style={{ fontSize: '0.95rem', color: '#475569', margin: 0 }}>Because a comfortable visit leads to a healthier smile.</p>
          </div>
          <button onClick={onOpenAppointment} className="btn-primary">
            <Calendar size={18} /> Fix an Appointment
          </button>
        </div>
      </section>

      {/* 4. WHY OUR AMENITIES MAKE A DIFFERENCE */}
      <section style={{ padding: '60px 0', backgroundColor: '#f8fafc' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">WHY OUR AMENITIES MAKE A DIFFERENCE</span>
          <h2 className="section-heading">More Than Just Dental Care</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginTop: '36px', textAlign: 'left' }}>
            {[
              { title: 'Hassle-Free Visits', desc: 'Convenient facilities make your visit smooth and stress-free.', icon: Calendar },
              { title: 'Inclusive Care', desc: 'Accessibility for all, including senior citizens and differently-abled patients.', icon: Accessibility },
              { title: 'A Welcoming Environment', desc: 'Designed to make every patient feel comfortable and at ease.', icon: Heart },
              { title: 'Family-Friendly', desc: 'Facilities and spaces tailored for both children and adults.', icon: Users },
            ].map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <div key={idx} style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#fff0f5', color: '#e8397a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>{diff.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748b' }}>{diff.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 900px) {
          .amenities-hero-grid { grid-template-columns: 1.1fr 0.9fr !important; }
        }
      `}</style>
    </div>
  );
};

export default AmenitiesPage;
