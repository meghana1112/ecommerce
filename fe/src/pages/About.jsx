import React from 'react';

const About = () => {
  return (
    <div className="container py-5 fade-in">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <div className="position-relative">
            <img 
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800" 
              alt="Resin Art Making" 
              className="img-fluid rounded-4 shadow-lg object-fit-cover"
              style={{ minHeight: '500px' }}
            />
            <div className="position-absolute bottom-0 end-0 glass-card p-4 m-4 rounded-4 shadow d-none d-md-block" style={{ maxWidth: '250px' }}>
              <h5 className="fw-bold mb-1" style={{ color: 'var(--primary-color)' }}>Handcrafted</h5>
              <p className="text-muted small mb-0">Every piece is made with love and precision.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h6 className="text-uppercase fw-bold mb-2" style={{ color: 'var(--primary-color)', letterSpacing: '2px' }}>Our Story</h6>
          <h1 className="display-4 fw-bold mb-4">Art that Flows, Beauty that Lasts.</h1>
          <p className="lead text-muted mb-4">
            Welcome to Megsy, where imagination meets epoxy resin to create stunning, one-of-a-kind functional art pieces for your life and home.
          </p>
          <p className="text-muted mb-4">
            Started in 2021 as a small passion project, Megsy has grown into a premier destination for high-quality, handcrafted resin art. We believe that everyday objects should be beautiful. From ocean-inspired wall clocks to delicate floral jewelry, every item we create is a unique masterpiece that cannot be exactly replicated.
          </p>
          <div className="row g-4 mt-2">
            <div className="col-sm-6">
              <div className="glass-card p-4 h-100 text-center">
                <h3 className="fw-bold" style={{ color: 'var(--primary-color)' }}>Premium</h3>
                <p className="text-muted small mb-0">Materials & UV resistant epoxy</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="glass-card p-4 h-100 text-center">
                <h3 className="fw-bold" style={{ color: 'var(--primary-color)' }}>Unique</h3>
                <p className="text-muted small mb-0">No two pieces are exactly alike</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
