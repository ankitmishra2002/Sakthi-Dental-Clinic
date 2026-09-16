import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: 'Manisha M',
    role: 'Orthodontic Patient',
    rating: 5,
    quote: 'The doctors are extremely kind and attentive. My braces treatment is progressing really well. 5/5.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Priya S',
    role: 'Teeth Whitening Patient',
    rating: 5,
    quote: 'I got my teeth cleaned and whitened here, and the results were amazing. The staff is so humble and professional. Highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Rahul K',
    role: 'Pediatric Dentistry',
    rating: 5,
    quote: 'Very professional and friendly staff. My child felt comfortable throughout the appointment.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Mr. Arun Kumar',
    role: 'Scaling & Cleaning',
    rating: 5,
    quote: 'I’ve recommended Sakthi Dental Clinic to my entire family. The results are amazing and the doctors are so gentle.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    name: 'Mrs. Revathi S.',
    role: 'Pediatric Braces Patient Parent',
    rating: 5,
    quote: 'Their attention to detail is outstanding. My daughter needed braces and the entire process from consultation to regular follow ups has been so smooth.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= testimonialsData.length - 3 ? 0 : prev + 1));
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Testimonial Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        marginBottom: '32px',
      }}>
        {testimonialsData.slice(currentIndex, currentIndex + 3).map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #f1f5f9',
              borderRadius: '16px',
              padding: '28px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              transition: 'all 0.3s ease',
            }}
            className="testimonial-card-hover"
          >
            {/* Pink Quote Icon */}
            <div style={{ position: 'absolute', top: '24px', right: '24px', opacity: 0.15, color: '#e8397a' }}>
              <Quote size={36} />
            </div>

            <div>
              {/* Star Rating */}
              <div style={{ display: 'flex', gap: '4px', color: '#fbbf24', marginBottom: '16px' }}>
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>

              {/* Quote Text */}
              <p style={{ fontSize: '0.95rem', color: '#334155', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '20px' }}>
                "{item.quote}"
              </p>
            </div>

            {/* Author details */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
              <img
                src={item.avatar}
                alt={item.name}
                style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a' }}>{item.name}</div>
                <div style={{ fontSize: '0.8rem', color: '#e8397a', fontWeight: 600 }}>{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls & Dots */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
        <button
          onClick={prevSlide}
          aria-label="Previous testimonial"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid #cbd5e1',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#334155',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <ChevronLeft size={20} />
        </button>

        <div style={{ display: 'flex', gap: '8px' }}>
          {Array.from({ length: testimonialsData.length - 2 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: currentIndex === idx ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: currentIndex === idx ? '#e8397a' : '#cbd5e1',
                border: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next testimonial"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid #cbd5e1',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#334155',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <style>{`
        .testimonial-card-hover:hover {
          border-color: #fbcfe8 !important;
          box-shadow: 0 10px 25px rgba(232, 57, 122, 0.1) !important;
          transform: translateY(-4px);
        }
      `}</style>
    </div>
  );
};

export default TestimonialsCarousel;
