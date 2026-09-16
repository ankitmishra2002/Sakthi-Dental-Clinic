import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#fff0f5', padding: '12px 0', borderBottom: '1px solid #fbcfe8', fontSize: '0.85rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b' }}>
          <Link to="/" style={{ color: '#334155' }}>Home</Link>
          <ChevronRight size={14} />
          <span style={{ color: '#e8397a', fontWeight: 700 }}>Privacy Policy</span>
        </div>
      </div>

      <section style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#fff0f5', color: '#e8397a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>
              <ShieldCheck size={26} />
            </div>
            <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
              Last updated: September 2026 • Sakthi Dental Clinic, Hosur
            </p>
          </div>

          <div style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.8 }} className="privacy-body">
            <p style={{ marginBottom: '20px' }}>
              At Sakthi Dental Clinic, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, store, and disclose information from visitors and users of our website.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginTop: '30px', marginBottom: '12px' }}>
              Information We Collect
            </h2>
            <p style={{ marginBottom: '12px' }}>
              We may collect personal identification information from users in several ways, including when users:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
              <li>Visit our website</li>
              <li>Fill out forms (e.g. contact or appointment requests)</li>
              <li>Engage with features, services, or resources on our site</li>
            </ul>
            <p style={{ marginBottom: '12px' }}>Types of information we may collect include:</p>
            <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
            </ul>
            <p style={{ marginBottom: '20px' }}>
              Users can visit our site anonymously. We only collect personal data when it is voluntarily submitted by users. Refusing to provide certain personal information may limit access to some site features or services.
            </p>
            <p style={{ marginBottom: '12px' }}>We may also gather non-personal identification information, such as:</p>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
              <li>Browser type</li>
              <li>Device details</li>
              <li>Operating system</li>
              <li>Internet service provider</li>
              <li>Technical data related to user interaction with the site</li>
            </ul>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginTop: '30px', marginBottom: '12px' }}>
              Cookies
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Our website may use “cookies” to enhance the user experience. Cookies are small files stored on a user’s device for record-keeping purposes and to track preferences or site activity. Users can set their browser to refuse cookies or alert them when cookies are being used. Please note that disabling cookies may affect some site functionality.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginTop: '30px', marginBottom: '12px' }}>
              How We Use Your Information
            </h2>
            <p style={{ marginBottom: '12px' }}>Collected information may be used for the following purposes:</p>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
              <li><strong>To operate and manage the website:</strong> Ensuring content displays properly and services run smoothly.</li>
              <li><strong>To improve customer service:</strong> Helping us respond to inquiries more efficiently.</li>
              <li><strong>To enhance the website experience:</strong> Feedback provided may help us improve content, usability, and performance.</li>
              <li><strong>To communicate via email:</strong> We may use the email address to respond to inquiries, appointments, or service updates.</li>
            </ul>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginTop: '30px', marginBottom: '12px' }}>
              Data Security
            </h2>
            <p style={{ marginBottom: '24px' }}>
              We implement appropriate security measures for data collection, storage, and processing to safeguard your personal information from unauthorized access, alteration, or destruction.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginTop: '30px', marginBottom: '12px' }}>
              Information Sharing
            </h2>
            <p style={{ marginBottom: '12px' }}>
              We do not sell, trade, or rent personal identification information to third parties.
            </p>
            <p style={{ marginBottom: '24px' }}>
              We may share general demographic data (not linked to any personal information) with trusted partners or affiliates to improve service delivery and site performance.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginTop: '30px', marginBottom: '12px' }}>
              Children’s Privacy
            </h2>
            <p style={{ marginBottom: '24px' }}>
              In compliance with the Children’s Online Privacy Protection Act (COPPA), we do not knowingly collect any personal information from children under the age of 13. Our site is not intended to attract users below this age group.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginTop: '30px', marginBottom: '12px' }}>
              Changes to This Policy
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Sakthi Dental Clinic may update this Privacy Policy from time to time. We encourage users to review this page periodically to stay informed about how we protect your information.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginTop: '30px', marginBottom: '12px' }}>
              Acceptance of Terms
            </h2>
            <p style={{ marginBottom: '24px' }}>
              By using this website, you agree to this policy. If you do not accept our Privacy Policy, please do not use our website. Continued use of the site following any updates will be deemed as your acceptance of the revised policy.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginTop: '30px', marginBottom: '12px' }}>
              Contact Us
            </h2>
            <p style={{ marginBottom: '12px' }}>
              If you have any questions about this Privacy Policy or your interactions with our site, please contact us:
            </p>
            <div style={{ backgroundColor: '#fff0f5', border: '1px solid #fbcfe8', padding: '20px', borderRadius: '14px', fontSize: '0.92rem' }}>
              <div>📍 <strong>Address:</strong> B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India</div>
              <div>📧 <strong>Email:</strong> info@sakthidentalclinic.in</div>
              <div>📞 <strong>Phone:</strong> +91 9862890897 / +91 9363298118</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
