import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { showToast } from '../../components/ToastNotification';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/profile';

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    showToast('Logged in successfully!');
    navigate(from, { replace: true });
  };

  return (
    <div className="container py-5 fade-in d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      <div className="glass-card p-5" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="fw-bold mb-4 text-center">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-gradient w-100 py-2 mb-3">Sign In</button>
        </form>
        <p className="text-center text-muted mb-0">
          Don't have an account? <Link to="/signup" style={{ color: 'var(--primary-color)' }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
