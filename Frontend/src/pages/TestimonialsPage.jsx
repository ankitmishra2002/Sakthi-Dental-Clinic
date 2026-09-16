import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, ChevronRight, Heart, Award, Smile } from 'lucide-react';

const reviewsData = [
  {
    name: 'Manisha M',
    treatment: 'Orthodontic Treatment',
    rating: 5,
    quote: 'The doctors are extremely kind and attentive. My braces treatment is progressing really well. 5/5.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
  },
  {
    name: 'Priya S',
    treatment: 'Teeth Cleaning & Bleaching',
    rating: 5,
    quote: 'I got my teeth cleaned and whitened here, and the results were amazing. Highly recommend!',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  },
  {
    name: 'Rahul K',
    treatment: 'Pediatric Dentistry',
    rating: 5,
    quote: 'Very professional and friendly staff. My child felt comfortable throughout the appointment.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
  {
    name: 'Sneha R',
    treatment: 'Tooth Filling',
    rating: 5,
    quote: 'A clean and modern clinic with a caring team. I felt very comfortable during my treatment.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
  },
  {
    name: 'Arun V',
    treatment: 'Tooth Extraction',
    rating: 5,
    quote: 'Excellent care and guidance. The doctor explained everything clearly and made the process easy.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
  },
  {
    name: 'Lakshmi P',
    treatment: 'General Dentistry',
    rating: 5,
    quote: 'I highly recommend this clinic for families. The staff is polite and the environment is so welcoming.',
    img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80',
  },
  {
    name: 'Divya S',
    treatment: 'Pediatric Dentistry',
    rating: 5,
    quote: 'My daughter\'s dental check-up was a great experience. The staff is very patient with children.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  },
  {
    name: 'Karthik M',
    treatment: 'General Treatment',
    rating: 5,
    quote: 'State-of-the-art equipment and a very professional team. Truly a great experience!',
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
  },
  {
    name: 'Anitha R',
    treatment: 'Complete Dentures',
    rating: 5,
    quote: 'From appointment booking to treatment, everything was smooth. Thank you for the wonderful care!',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
  },
];

const TestimonialsPage = ({ onOpenAppointment }) => {
  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#fff0f5', padding: '12px 0', borderBottom: '1px solid #fbcfe8', fontSize: '0.85rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b' }}>
          <Link to="/" style={{ color: '#334155' }}>Home</Link>
          <ChevronRight size={14} />
          <span style={{ color: '#e8397a', fontWeight: 700 }}>Testimonials</span>
        </div>
      </div>

      {/* 1. HERO HEADER */}
      <section style={{ backgroundColor: '#fff0f5', paddingTop: '40px', paddingBottom: '50px' }}>
        <div className="container testimonials-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', alignItems: 'center' }}>
          <div>
            <span className="section-label">TESTIMONIALS</span>
            <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '16px' }}>
              What Our <span style={{ color: '#e8397a' }}>Patients Say</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
              Real stories. Real smiles. Here's what our patients have to say about their experience at Sakthi Dental Clinic.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <span className="badge-item"><Heart size={16} color="#e8397a" /> Trusted by Families</span>
              <span className="badge-item"><Award size={16} color="#8b5cf6" /> Quality Treatment</span>
              <span className="badge-item"><Smile size={16} color="#0284c7" /> Compassionate Care</span>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=700&auto=format&fit=crop&q=80"
                alt="Happy Patient Smiling"
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
              Happy Smiles Happy Families ♡
            </div>
          </div>
        </div>
      </section>

      {/* 2. REVIEWS GRID */}
      <section style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-label">PATIENT EXPERIENCES</span>
            <h2 className="section-heading">Stories That Inspire Us</h2>
            <p className="section-subtext">Every smile we create is a story of trust, care, and confidence.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {reviewsData.map((rev, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #f1f5f9',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
              >
                <div style={{ position: 'absolute', top: '20px', right: '20px', color: '#e8397a', opacity: 0.15 }}>
                  <Quote size={32} />
                </div>

                <div>
                  <div style={{ display: 'flex', gap: '4px', color: '#fbbf24', marginBottom: '14px' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>

                  <p style={{ fontSize: '0.92rem', color: '#334155', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '20px' }}>
                    "{rev.quote}"
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #f1f5f9', paddingTop: '14px' }}>
                  <img src={rev.img} alt={rev.name} style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a' }}>{rev.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#e8397a', fontWeight: 600 }}>{rev.treatment}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. REVIEWS COUNTER STATS */}
      <section style={{ padding: '40px 0', backgroundColor: '#fff0f5', borderTop: '1px solid #fbcfe8', borderBottom: '1px solid #fbcfe8' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#e8397a' }}>5,000+</div>
            <div style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 600 }}>Happy Patients</div>
          </div>
          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#e8397a' }}>4.9/5</div>
            <div style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 600 }}>Average Rating</div>
          </div>
          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#e8397a' }}>10+</div>
            <div style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 600 }}>Years of Trust</div>
          </div>
          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#e8397a' }}>Hundreds</div>
            <div style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 600 }}>of Positive Reviews</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '50px 0', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>Be a Part of Our Happy Stories</h2>
          <p style={{ color: '#64748b', marginBottom: '24px' }}>Book your appointment today and experience the difference.</p>
          <button onClick={onOpenAppointment} className="btn-primary">
            Fix an Appointment
          </button>
        </div>
      </section>

      <style>{`
        @media (min-width: 900px) {
          .testimonials-hero-grid { grid-template-columns: 1.1fr 0.9fr !important; }
        }
      `}</style>
    </div>
  );
};

export default TestimonialsPage;
