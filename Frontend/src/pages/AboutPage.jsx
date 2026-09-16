import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Award, ShieldCheck, Sparkles, Users, ChevronRight } from 'lucide-react';

const AboutPage = ({ onOpenAppointment }) => {
  const doctorsList = [
    { name: 'Dr. Anupriya', spec: 'Founder & Senior Dental Surgeon', exp: '20+ Years Exp', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop&q=80' },
    { name: 'Dr. Ananya Iyer', spec: 'Prosthodontist', exp: 'Full Mouth Specialist', img: 'data:image/jpeg;base64,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' },
    { name: 'Dr. Meera Subramanian', spec: 'Endodontist', exp: 'Root Canal Specialist', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80' },
    { name: 'Dr. Arvind Kumar', spec: 'Dental Surgeon', exp: 'General & Cosmetic Dentistry', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&auto=format&fit=crop&q=80' },
    { name: 'Dr. Sneha N', spec: 'Orthodontist', exp: 'Braces & Smile Alignment', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80' },
    { name: 'Dr. Srinivas Rohit Ramanujam', spec: 'Implantologist', exp: 'Titanium Dental Implants', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&auto=format&fit=crop&q=80' },
    { name: 'Dr. Balu', spec: 'Laser Surgeon', exp: 'Minimally Invasive Dentistry', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80' },
    { name: 'Dr. Vikram Raj Kishore', spec: 'Aligners Partner', exp: 'Clear Aligner Specialist', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80' },
    { name: 'Dr. Ajay Jumar', spec: 'Oral & Maxillofacial Surgeon', exp: 'Jaw & Wisdom Surgery', img: 'https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg' },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#fff0f5', padding: '12px 0', borderBottom: '1px solid #fbcfe8', fontSize: '0.85rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b' }}>
          <Link to="/" style={{ color: '#334155' }}>Home</Link>
          <ChevronRight size={14} />
          <span style={{ color: '#e8397a', fontWeight: 700 }}>About Us</span>
        </div>
      </div>

      {/* 1. HERO HEADER */}
      <section style={{ backgroundColor: '#fff0f5', paddingTop: '40px', paddingBottom: '50px' }}>
        <div className="container about-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', alignItems: 'center' }}>
          <div>
            <span className="section-label">ABOUT US</span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: '16px' }}>
              Caring Smiles for a <span style={{ color: '#e8397a' }}>Healthier Tomorrow</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
              At Sakthi Dental Clinic, we are committed to providing compassionate, high-quality dental care for women, children and families in a comfortable and modern environment.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <span className="badge-item"><Users size={16} color="#e8397a" /> Trusted by Families</span>
              <span className="badge-item"><Award size={16} color="#8b5cf6" /> Experienced Dentists</span>
              <span className="badge-item"><Sparkles size={16} color="#0284c7" /> A Healthier Smile</span>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&auto=format&fit=crop&q=80"
                alt="Sakthi Dental Clinic Reception"
                style={{ width: '100%', height: '320px', objectFit: 'cover' }}
              />
            </div>
            <div className="font-handwriting" style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              backgroundColor: 'rgba(255,255,255,0.92)',
              padding: '8px 16px',
              borderRadius: '12px',
              fontSize: '1.3rem',
              color: '#e8397a',
            }}>
              Good Dental Care Brings Brighter Smiles ♡
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
        <div className="container story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'center' }}>
          <div>
            <span className="section-label">OUR STORY</span>
            <h2 className="section-heading">Get to Know Dr. Anupriya</h2>
            <h3 style={{ fontSize: '1.15rem', color: '#e8397a', fontWeight: 700, marginBottom: '16px' }}>
              Your Trusted Partner in Dental Care
            </h3>

            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
              Bringing over 20 years of expertise, Dr. Anupriya stands as a leading figure in modern dentistry at Hosur. She began her professional journey after graduating in 2000. Her passion for delivering exceptional dental care was further nurtured during six impactful years at Mathura Clinic, where she refined her clinical skills and deepened her commitment to patient wellbeing.
            </p>

            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
              In 2004, Dr. Anupriya established Sakthi Dental Clinic in Hosur with a clear vision to make high-quality dental care accessible to all. Her dedication extends beyond private practice, reflected in her long-standing service with the Primary Health Center at Chandara Hospital, where she has been a trusted dental consultant for over a decade.
            </p>

            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7 }}>
              At Sakthi Dental Clinic, we believe that a healthy smile is a gateway to confidence and wellbeing. Our clinic blends advanced dental technology with a warm, patient-friendly environment to ensure every visit is comfortable and stress-free.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80"
                alt="Dr. Anupriya Founder Sakthi Dental Clinic"
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>
            <div style={{
              backgroundColor: '#fff0f5',
              border: '1px solid #fbcfe8',
              borderRadius: '16px',
              padding: '16px',
              marginTop: '-40px',
              position: 'relative',
              zIndex: 10,
              maxWidth: '90%',
              margin: '-40px auto 0 auto',
            }}>
              <p style={{ fontSize: '0.9rem', color: '#334155', fontStyle: 'italic', margin: 0 }}>
                "Our goal is to make every patient feel comfortable and cared for, while delivering the best dental solutions."
              </p>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#e8397a', marginTop: '6px' }}>— Dr. Anupriya (Founder)</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section style={{ padding: '60px 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {/* Mission Card */}
            <div style={{ backgroundColor: '#fff0f5', border: '1px solid #fbcfe8', borderRadius: '20px', padding: '32px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', backgroundColor: '#e8397a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Target size={26} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>Our Mission</h3>
              <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6 }}>
                At Sakthi Dental Clinic, our mission is to redefine oral healthcare by delivering personalized, compassionate, and advanced dental services. We are committed to creating a welcoming environment where patients feel comfortable and confident in taking charge of their dental health.
              </p>
            </div>

            {/* Vision Card */}
            <div style={{ backgroundColor: '#e8f4fd', border: '1px solid #bae6fd', borderRadius: '20px', padding: '32px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', backgroundColor: '#0284c7', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Eye size={26} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>Our Vision</h3>
              <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6 }}>
                Our vision is to be a leading force in modern dentistry, known for setting new standards in patient care, innovation, and community engagement. We aspire to not only deliver exceptional dental outcomes but also to contribute positively to the community through awareness initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES */}
      <section style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">OUR VALUES</span>
          <h2 className="section-heading">Guided by Integrity & Care</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '36px' }}>
            {[
              { title: 'Compassion', desc: 'We care for every patient with kindness and respect.', icon: Heart, color: '#e8397a' },
              { title: 'Excellence', desc: 'We strive for the highest standards in dental care.', icon: Award, color: '#8b5cf6' },
              { title: 'Trust', desc: 'We believe in transparent and honest communication.', icon: ShieldCheck, color: '#16a34a' },
              { title: 'Innovation', desc: 'We embrace modern technology for better care.', icon: Sparkles, color: '#0284c7' },
            ].map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="feature-card" style={{ textAlign: 'center' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: '#f8fafc', color: val.color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>{val.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b' }}>{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. TEAM OF DOCTORS */}
      <section style={{ padding: '60px 0', backgroundColor: '#faf5f8' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">MEET OUR TEAM</span>
          <h2 className="section-heading">Our Expert Doctors & Specialists</h2>
          <p className="section-subtext">
            Committed to providing comprehensive dental care tailored to your family's needs.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', textAlign: 'left' }}>
            {doctorsList.map((doc, idx) => (
              <div key={idx} style={{ backgroundColor: '#ffffff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
                <img src={doc.img} alt={doc.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '16px' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>{doc.name}</h3>
                  <div style={{ fontSize: '0.85rem', color: '#e8397a', fontWeight: 700, marginBottom: '4px' }}>{doc.spec}</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{doc.exp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STATS & CTA */}
      <section style={{ padding: '40px 0', backgroundColor: '#0b2545', color: '#fff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f472b6' }}>5,000+</div>
            <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Happy Patients</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f472b6' }}>20+</div>
            <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Years of Experience</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f472b6' }}>100%</div>
            <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Modern Equipment</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f472b6' }}>9+</div>
            <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Specialist Doctors</div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 900px) {
          .about-hero-grid { grid-template-columns: 1.1fr 0.9fr !important; }
          .story-grid { grid-template-columns: 1.1fr 0.9fr !important; }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
