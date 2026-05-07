import React, { useState } from 'react';
import { showToast } from '../components/ToastNotification';
import { BsEnvelope, BsTelephone, BsGeoAlt } from 'react-icons/bs';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('Message sent! We will get back to you soon.', 'success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container py-5 fade-in">
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Get in Touch</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
          Have a question about a piece, want to request a custom order, or just want to say hi? We'd love to hear from you.
        </p>
      </div>

      <div className="row g-5">
        <div className="col-lg-4">
          <div className="glass-card p-4 h-100 d-flex flex-column gap-4">
            <h4 className="fw-bold mb-2">Contact Info</h4>
            
            <div className="d-flex align-items-center gap-3 text-muted">
              <div className="rounded-circle p-3 glass-card d-flex align-items-center justify-content-center" style={{ color: 'var(--primary-color)' }}>
                <BsEnvelope fs-5 />
              </div>
              <div>
                <p className="mb-0 fw-bold text-reset">Email</p>
                <small>hello@megsyresin.art</small>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3 text-muted">
              <div className="rounded-circle p-3 glass-card d-flex align-items-center justify-content-center" style={{ color: 'var(--primary-color)' }}>
                <BsTelephone fs-5 />
              </div>
              <div>
                <p className="mb-0 fw-bold text-reset">Phone</p>
                <small>+1 (555) 123-4567</small>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3 text-muted">
              <div className="rounded-circle p-3 glass-card d-flex align-items-center justify-content-center" style={{ color: 'var(--primary-color)' }}>
                <BsGeoAlt fs-5 />
              </div>
              <div>
                <p className="mb-0 fw-bold text-reset">Studio</p>
                <small>123 Art Lane, Creativity City, CA 90210</small>
              </div>
            </div>
            
            <div className="mt-auto pt-4 border-top" style={{ borderColor: 'var(--border-color)' }}>
              <p className="text-muted small mb-0">Our studio is currently open by appointment only. Please contact us to schedule a visit.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="glass-card p-4 p-md-5">
            <h4 className="fw-bold mb-4">Send us a Message</h4>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label text-muted">Your Name</label>
                  <input type="text" name="name" className="form-control shadow-none" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted">Your Email</label>
                  <input type="email" name="email" className="form-control shadow-none" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="col-12">
                  <label className="form-label text-muted">Subject</label>
                  <input type="text" name="subject" className="form-control shadow-none" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="col-12">
                  <label className="form-label text-muted">Message</label>
                  <textarea name="message" className="form-control shadow-none" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <div className="col-12 mt-4">
                  <button type="submit" className="btn btn-gradient px-5 py-2 w-100 w-md-auto">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
