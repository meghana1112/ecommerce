import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { showToast } from '../../components/ToastNotification';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate signup
    login(email, password);
    showToast('Account created successfully!');
    navigate('/profile');
  };

  return (
    <div className="container py-5 fade-in d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      <div className="glass-card p-5" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="fw-bold mb-4 text-center">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-muted">Full Name</label>
            <input 
              type="text" 
              className="form-control shadow-none" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-muted">Email address</label>
            <input 
              type="email" 
              className="form-control shadow-none" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="mb-4">
            <label className="form-label text-muted">Password</label>
            <input 
              type="password" 
              className="form-control shadow-none" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="btn btn-gradient w-100 py-2 mb-3">Sign Up</button>
        </form>
        <p className="text-center text-muted mb-0">
          Already have an account? <Link to="/login" style={{ color: 'var(--primary-color)' }}>Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
