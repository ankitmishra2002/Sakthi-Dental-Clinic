import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronRight, ArrowRight, ShieldCheck, Users } from 'lucide-react';

const treatmentsData = [
  {
    id: 'teeth-cleaning',
    title: 'Teeth Cleaning & Scaling',
    category: 'Preventive Care',
    desc: 'At Sakthi Dental Clinic, we offer advanced, non-surgical gum care using modern LASER technology for precise and effective treatment. Scaling is advised for moderate cases to remove plaque and tartar buildup, while more severe periodontal issues may require deep cleaning procedures like root planing, supported by LASER treatment.',
    icon: '✨',
  },
  {
    id: 'tooth-filling',
    title: 'Tooth Filling',
    category: 'Restorative Care',
    desc: 'We specialize in restoring smiles through expert tooth filling services. Whether tooth damage is caused by cavities, trauma, or wear from habits like teeth grinding, our team uses high-quality composite materials and the latest techniques to repair and protect your teeth.',
    icon: '🦷',
  },
  {
    id: 'tooth-extraction',
    title: 'Tooth Extraction',
    category: 'Surgical Care',
    desc: 'When a tooth is beyond repair, Sakthi Dental Clinic ensures that the extraction process is handled with the utmost care and comfort. Our experienced dental team evaluates every option before recommending removal, using gentle techniques to minimize discomfort.',
    icon: '🩺',
  },
  {
    id: 'artificial-denture',
    title: 'Artificial Complete Denture',
    category: 'Prosthodontics',
    desc: 'We craft high-quality complete dentures to restore both function and aesthetics for patients with missing teeth. Our dentures are designed with precision using durable materials, providing a natural look and a comfortable fit.',
    icon: '😁',
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    category: 'Implantology',
    desc: 'Dental implants offer a modern and reliable solution for replacing missing teeth. Using biocompatible materials like titanium, we securely place artificial roots into the jawbone, creating a stable foundation for prosthetic teeth.',
    icon: '🛠️',
  },
  {
    id: 'laser-dentistry',
    title: 'Laser Dentistry',
    category: 'Advanced Care',
    desc: 'We utilize advanced laser technology to perform precise, minimally invasive dental treatments. From soft tissue surgeries to gum care, laser procedures offer faster healing, reduced discomfort, and enhanced accuracy.',
    icon: '⚡',
  },
  {
    id: 'root-canal',
    title: 'Root Canal Therapy',
    category: 'Endodontics',
    desc: 'When tooth infections reach deep into the pulp, root canal treatment becomes essential. We carefully remove infected tissue, clean the area thoroughly, and seal the tooth to prevent future issues and preserve your natural tooth structure.',
    icon: '🔬',
  },
  {
    id: 'wisdom-tooth',
    title: 'Wisdom Tooth Extraction',
    category: 'Surgical Care',
    desc: 'If impacted or problematic, wisdom teeth can cause discomfort and oral health risks. We specialize in gentle and effective wisdom tooth removal, using modern techniques and anesthesia options to ensure a smooth, pain-free experience.',
    icon: '🦷',
  },
  {
    id: 'fixed-bridge',
    title: 'Fixed Partial Denture (Bridge)',
    category: 'Prosthodontics',
    desc: 'Our expertly crafted fixed partial dentures offer a secure solution for replacing missing teeth by anchoring prosthetic teeth to adjacent natural teeth or implants, improving chewing function and maintaining oral stability.',
    icon: '🌉',
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening (Bleaching)',
    category: 'Cosmetic Dentistry',
    desc: 'Brighten your smile with professional teeth whitening services. We treat both external and internal stains, using safe bleaching agents to lighten your teeth by several shades and restore your smile\'s natural radiance.',
    icon: '🌟',
  },
  {
    id: 'veneers',
    title: 'Veneers',
    category: 'Cosmetic Dentistry',
    desc: 'Transform your smile with dental veneers, thin, custom-made shells designed to cover imperfections such as chips, gaps, or discoloration, giving you a flawless and natural-looking smile.',
    icon: '💎',
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    category: 'Children Dentistry',
    desc: 'We provide gentle and comprehensive dental care for children. Our friendly team creates a welcoming environment, ensuring young patients feel safe and comfortable during routine check-ups and preventive treatments.',
    icon: '👶',
  },
  {
    id: 'flap-surgery',
    title: 'Flap Surgery',
    category: 'Periodontics',
    desc: 'For advanced gum disease, flap surgery may be necessary. Our skilled team performs this procedure by lifting the gum tissue to remove deep-seated plaque and bacteria, then repositioning it for optimal healing.',
    icon: '🏥',
  },
  {
    id: 'orthodontic-braces',
    title: 'Orthodontic Braces',
    category: 'Orthodontics',
    desc: 'Correct misaligned teeth with customized orthodontic treatments. We offer a variety of braces (metal, ceramic, or lingual) to achieve improved alignment, better bite function, and a confident smile.',
    icon: '😬',
  },
  {
    id: 'clear-aligners',
    title: 'Clear Aligners',
    category: 'Orthodontics',
    desc: 'For a discreet alternative to traditional braces, we offer clear aligners. These transparent, removable trays gradually shift your teeth into perfect alignment with maximum comfort and flexibility.',
    icon: '✨',
  },
];

const TreatmentsPage = ({ onOpenAppointment }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Preventive Care', 'Cosmetic Dentistry', 'Orthodontics', 'Surgical Care', 'Prosthodontics', 'Endodontics', 'Children Dentistry'];

  const filteredTreatments = activeCategory === 'All'
    ? treatmentsData
    : treatmentsData.filter((t) => t.category === activeCategory);

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#fff0f5', padding: '12px 0', borderBottom: '1px solid #fbcfe8', fontSize: '0.85rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b' }}>
          <Link to="/" style={{ color: '#334155' }}>Home</Link>
          <ChevronRight size={14} />
          <span style={{ color: '#e8397a', fontWeight: 700 }}>Treatments</span>
        </div>
      </div>

      {/* 1. HERO BANNER */}
      <section style={{ backgroundColor: '#fff0f5', paddingTop: '40px', paddingBottom: '50px' }}>
        <div className="container treatment-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', alignItems: 'center' }}>
          <div>
            <span className="section-label">OUR SERVICES</span>
            <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '16px' }}>
              Comprehensive <span style={{ color: '#e8397a' }}>Dental Treatments</span> for Whole Family
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
              From preventive care to advanced procedures, we offer a wide range of dental treatments tailored to your needs. Our goal is to help you achieve a healthy, confident and beautiful smile.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <span className="badge-item"><ShieldCheck size={16} color="#e8397a" /> Expert Care</span>
              <span className="badge-item"><Sparkles size={16} color="#8b5cf6" /> Safe & Hygienic</span>
              <span className="badge-item"><Users size={16} color="#0284c7" /> For All Age Groups</span>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&auto=format&fit=crop&q=80"
                alt="Modern Dental Care"
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
              A Healthier Smile A Brighter You ♡
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTERS & TREATMENTS GRID */}
      <section style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-label">FULL TREATMENT MENU</span>
            <h2 className="section-heading">Explore All Dental Services</h2>
            <p className="section-subtext">Click on any category to filter our specialized treatments.</p>

            {/* Category Filter Tabs */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '36px' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    border: '1px solid',
                    borderColor: activeCategory === cat ? '#e8397a' : '#cbd5e1',
                    backgroundColor: activeCategory === cat ? '#e8397a' : '#ffffff',
                    color: activeCategory === cat ? '#ffffff' : '#475569',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Treatments Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {filteredTreatments.map((t) => (
              <div
                key={t.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                }}
                className="treatment-card"
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div style={{ fontSize: '2rem' }}>{t.icon}</div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '9999px', backgroundColor: '#fff0f5', color: '#e8397a' }}>
                      {t.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                    {t.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginBottom: '20px' }}>
                    {t.desc}
                  </p>
                </div>

                <button
                  onClick={onOpenAppointment}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#e8397a',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: 0,
                    cursor: 'pointer',
                  }}
                >
                  Book Consultation <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TREATMENT PROCESS */}
      <section style={{ padding: '60px 0', backgroundColor: '#fff0f5' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">YOUR JOURNEY TO A HEALTHIER SMILE</span>
          <h2 className="section-heading">Our Treatment Process</h2>
          <p className="section-subtext">A simple and comfortable experience, every step of the way.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '30px' }}>
            {[
              { step: '1', title: 'Consultation', desc: 'Discuss your concerns and get a detailed check-up.' },
              { step: '2', title: 'Treatment Plan', desc: 'Personalized plan tailored to your needs.' },
              { step: '3', title: 'Treatment', desc: 'Safe, comfortable and effective care.' },
              { step: '4', title: 'Healthy Smile', desc: 'Enjoy a brighter and healthier you!' },
            ].map((p, idx) => (
              <div key={idx} style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #fbcfe8', textAlign: 'center', position: 'relative' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#e8397a', color: '#ffffff', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>
                  {p.step}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>{p.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#64748b' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '40px 0', backgroundColor: '#0b2545', color: '#fff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '12px' }}>Looking for a Specific Treatment?</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '24px' }}>Book a consultation with Dr. Anupriya and our expert team today.</p>
          <button onClick={onOpenAppointment} className="btn-primary">
            Fix an Appointment
          </button>
        </div>
      </section>

      <style>{`
        @media (min-width: 900px) {
          .treatment-hero-grid { grid-template-columns: 1.1fr 0.9fr !important; }
        }
      `}</style>
    </div>
  );
};

export default TreatmentsPage;
