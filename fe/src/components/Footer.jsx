import React from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram, BsFacebook, BsTwitter, BsPinterest } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="mt-auto py-5 border-top" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3" style={{ color: 'var(--primary-color)' }}>Megsy</h5>
            <p className="text-muted">
              Handcrafted resin art pieces designed to bring beauty and elegance to your everyday life.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-muted fs-5"><BsInstagram /></a>
              <a href="#" className="text-muted fs-5"><BsFacebook /></a>
              <a href="#" className="text-muted fs-5"><BsTwitter /></a>
              <a href="#" className="text-muted fs-5"><BsPinterest /></a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Shop</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/products" className="text-muted text-decoration-none">All Products</Link></li>
              <li><Link to="/products?category=Jewelry" className="text-muted text-decoration-none">Jewelry</Link></li>
              <li><Link to="/products?category=HomeDecor" className="text-muted text-decoration-none">Home Decor</Link></li>
              <li><Link to="/products?category=Accessories" className="text-muted text-decoration-none">Accessories</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/about" className="text-muted text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="text-muted text-decoration-none">Contact</Link></li>
              <li><Link to="#" className="text-muted text-decoration-none">Privacy Policy</Link></li>
              <li><Link to="#" className="text-muted text-decoration-none">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold mb-3">Newsletter</h6>
            <p className="text-muted">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="d-flex gap-2">
              <input type="email" className="form-control rounded-pill shadow-none" placeholder="Enter your email" />
              <button type="button" className="btn btn-gradient rounded-pill">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="text-center text-muted mt-5 pt-3 border-top">
          <small>&copy; {new Date().getFullYear()} Megsy Resin Art. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
