import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { BsPersonCircle, BsBoxSeam, BsHeart, BsGear } from 'react-icons/bs';

const Profile = () => {
  const { user, logout } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) return null; // handled by protected route

  return (
    <div className="container py-5 fade-in">
      <h1 className="fw-bold mb-5">My Account</h1>
      
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="glass-card p-4 text-center">
            <BsPersonCircle style={{ fontSize: '5rem', color: 'var(--primary-color)' }} className="mb-3" />
            <h4 className="fw-bold">{user.name}</h4>
            <p className="text-muted mb-4">{user.email}</p>
            <button className="btn btn-outline-danger w-100 rounded-pill" onClick={handleLogout}>Log Out</button>
          </div>

          <div className="glass-card p-0 mt-4 overflow-hidden">
            <div className="list-group list-group-flush bg-transparent">
              <button className="list-group-item list-group-item-action bg-transparent py-3 fw-semibold active border-0" style={{ color: 'var(--primary-color)' }}>
                <BsPersonCircle className="me-2" /> Profile Info
              </button>
              <button className="list-group-item list-group-item-action bg-transparent py-3 text-muted border-0">
                <BsBoxSeam className="me-2" /> Order History
              </button>
              <button className="list-group-item list-group-item-action bg-transparent py-3 text-muted border-0" onClick={() => navigate('/wishlist')}>
                <BsHeart className="me-2" /> Wishlist
              </button>
              <button className="list-group-item list-group-item-action bg-transparent py-3 text-muted border-0">
                <BsGear className="me-2" /> Settings
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="glass-card p-4 p-md-5 mb-4">
            <h4 className="fw-bold mb-4 border-bottom pb-2">Profile Information</h4>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label text-muted">Full Name</label>
                <input type="text" className="form-control shadow-none" defaultValue={user.name} />
              </div>
              <div className="col-md-6">
                <label className="form-label text-muted">Email</label>
                <input type="email" className="form-control shadow-none" defaultValue={user.email} />
              </div>
              <div className="col-12 mt-4">
                <button className="btn btn-gradient px-4">Update Profile</button>
              </div>
            </div>
          </div>

          <div className="glass-card p-4 p-md-5">
            <h4 className="fw-bold mb-4 border-bottom pb-2">Recent Orders</h4>
            <div className="text-center py-4">
              <BsBoxSeam style={{ fontSize: '3rem', color: 'var(--border-color)' }} className="mb-3" />
              <p className="text-muted">You haven't placed any orders yet.</p>
              <button className="btn btn-outline-primary mt-2" onClick={() => navigate('/products')}>Browse Products</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
