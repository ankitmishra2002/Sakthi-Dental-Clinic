import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Plus, Minus, Search, HelpCircle, Calendar } from 'lucide-react';

const faqsData = [
  {
    q: 'Can medication completely relieve tooth pain?',
    a: 'Not entirely. While medications may offer short-term relief, long-lasting relief requires identifying and treating the root cause of the pain through professional dental care.',
    category: 'General',
  },
  {
    q: 'Does teeth scaling cause enamel damage, sensitivity, or gaps between teeth?',
    a: 'No. Scaling safely removes plaque and tartar from teeth and below the gum line. It doesn’t damage enamel or create gaps. Some temporary sensitivity may occur, but it usually subsides as gums heal and reattach to the teeth.',
    category: 'Cleaning',
  },
  {
    q: 'Can fluorosis stains be removed through scaling?',
    a: 'Scaling can remove surface (extrinsic) stains but not fluorosis, which is an internal (intrinsic) stain. Fluorosis may require treatments like bleaching, veneers, or crowns for cosmetic improvement.',
    category: 'Cleaning',
  },
  {
    q: 'Can painful teeth be treated with fillings?',
    a: 'Not always. If the cavity has reached the pulp, the innermost layer of the tooth, simple filling won’t help. In such cases, root canal treatment or tooth extraction might be necessary. Fillings are effective only when the damage is limited to the outer layers (enamel and dentin).',
    category: 'Fillings',
  },
  {
    q: 'Is placing a cap or crown necessary after root canal treatment (RCT)?',
    a: 'Yes. A crown is recommended after RCT to protect the treated tooth, which may be weaker due to decay. It prevents fractures and adds durability, especially during chewing.',
    category: 'Root Canal',
  },
  {
    q: 'Can milk teeth need root canal treatment (RCT)?',
    a: 'Yes. If a milk tooth has a deep cavity and is likely to remain in the mouth for some time, an RCT can preserve it and prevent infection or early loss.',
    category: 'Pediatric',
  },
  {
    q: 'How can I maintain good oral hygiene?',
    a: 'Brush your teeth twice daily with proper technique, rinse after meals, floss regularly, and schedule routine check-ups with your dentist to maintain healthy teeth and gums.',
    category: 'General',
  },
  {
    q: 'What is the best age to get braces?',
    a: 'Braces are most effective between ages 12 and 14, when the jaw and teeth are still developing. However, some cases may benefit from earlier intervention depending on the condition.',
    category: 'Orthodontics',
  },
  {
    q: 'Do all wisdom teeth need to be removed?',
    a: 'No. Wisdom teeth only require removal if they are impacted, infected, or causing pain due to crowding or damage to adjacent teeth.',
    category: 'Surgery',
  },
  {
    q: 'Is it important to replace missing teeth after extraction?',
    a: 'Yes. Replacing extracted teeth helps maintain proper bite alignment and prevents adjacent teeth from shifting, which can affect chewing and overall oral function.',
    category: 'Prosthodontics',
  },
  {
    q: 'What are the benefits of dental implants?',
    a: 'Dental implants restore both the appearance and functionality of missing teeth. They provide a stable, natural-looking solution that can improve confidence and overall quality of life.',
    category: 'Implants',
  },
  {
    q: 'Which type of toothbrush and toothpaste should I use?',
    a: 'Use a soft or medium-bristled toothbrush with a small head for better reach. Choose a non-abrasive fluoride toothpaste and replace your toothbrush every three months for optimal hygiene.',
    category: 'General',
  },
  {
    q: 'What causes tooth sensitivity?',
    a: 'Tooth sensitivity can result from enamel wear (due to attrition or abrasion), tooth decay, exposed tooth roots, or hairline cracks in the teeth.',
    category: 'General',
  },
  {
    q: 'How often should I see a dentist?',
    a: 'Visiting your dentist every six months is recommended for routine check-ups, professional cleaning, and preventive care to maintain good oral health.',
    category: 'General',
  },
];

const FAQsPage = ({ onOpenAppointment }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'General', 'Cleaning', 'Fillings', 'Root Canal', 'Pediatric', 'Orthodontics', 'Surgery', 'Implants'];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqsData.filter((item) => {
    const matchesSearch = item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#fff0f5', padding: '12px 0', borderBottom: '1px solid #fbcfe8', fontSize: '0.85rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b' }}>
          <Link to="/" style={{ color: '#334155' }}>Home</Link>
          <ChevronRight size={14} />
          <span style={{ color: '#e8397a', fontWeight: 700 }}>FAQs</span>
        </div>
      </div>

      {/* Hero Header */}
      <section style={{ backgroundColor: '#fff0f5', paddingTop: '40px', paddingBottom: '50px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label">FREQUENTLY ASKED QUESTIONS</span>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
            Got Questions? <span style={{ color: '#e8397a' }}>We Have Answers</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '640px', margin: '0 auto 28px auto' }}>
            Find clear, expert answers to common questions about dental health, procedures, and clinic practices.
          </p>

          {/* Search Input */}
          <div style={{ maxWidth: '520px', margin: '0 auto', position: 'relative' }}>
            <Search size={20} color="#94a3b8" style={{ position: 'absolute', left: '16px', top: '16px' }} />
            <input
              type="text"
              placeholder="Search your dental query (e.g. root canal, braces, sensitivity)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px 14px 48px',
                borderRadius: '9999px',
                border: '1px solid #cbd5e1',
                fontSize: '0.95rem',
                outline: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
              }}
            />
          </div>
        </div>
      </section>

      {/* Category Tabs & FAQ List */}
      <section style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          {/* Category Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '36px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? '#e8397a' : '#cbd5e1',
                  backgroundColor: selectedCategory === cat ? '#e8397a' : '#ffffff',
                  color: selectedCategory === cat ? '#ffffff' : '#475569',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          {filteredFaqs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
              No matching questions found for "{searchQuery}". Try a different keyword!
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      border: '1px solid',
                      borderColor: isOpen ? '#fbcfe8' : '#e2e8f0',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      backgroundColor: isOpen ? '#fff0f5' : '#ffffff',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      style={{
                        width: '100%',
                        padding: '20px 24px',
                        textAlign: 'left',
                        backgroundColor: 'transparent',
                        border: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '16px',
                        cursor: 'pointer',
                      }}
                    >
                      <span style={{ fontSize: '1.05rem', fontWeight: 700, color: isOpen ? '#e8397a' : '#0f172a', lineHeight: 1.4 }}>
                        {faq.q}
                      </span>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: isOpen ? '#e8397a' : '#f1f5f9',
                        color: isOpen ? '#ffffff' : '#64748b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div style={{ padding: '0 24px 20px 24px', fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, borderTop: '1px solid #fce7f3', paddingTop: '16px' }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section style={{ padding: '50px 0', backgroundColor: '#fff0f5', borderTop: '1px solid #fbcfe8', textAlign: 'center' }}>
        <div className="container">
          <HelpCircle size={40} color="#e8397a" style={{ marginBottom: '12px' }} />
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>Have More Questions?</h2>
          <p style={{ color: '#475569', marginBottom: '24px' }}>Our dental experts are ready to assist you anytime.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
            <button onClick={onOpenAppointment} className="btn-primary">
              <Calendar size={18} /> Fix an Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;
