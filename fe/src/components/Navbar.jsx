import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart3, BsHeart, BsMoonStars, BsSun, BsPerson, BsSearch } from 'react-icons/bs';
import { useApp } from '../context/AppContext';

const Navbar = () => {
  const { cart, wishlist, theme, toggleTheme, user } = useApp();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-glass py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" style={{ color: 'var(--primary-color)' }} to="/">
          Megsy
        </Link>
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Shop</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
          
          <div className="d-flex align-items-center gap-3">
            <form className="d-flex position-relative me-2">
              <input className="form-control rounded-pill pe-5 shadow-none" type="search" placeholder="Search..." aria-label="Search" />
              <BsSearch className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
            </form>
            
            <button onClick={toggleTheme} className="btn btn-link text-reset p-0 shadow-none fs-5">
              {theme === 'light' ? <BsMoonStars /> : <BsSun />}
            </button>
            
            <Link to="/wishlist" className="text-reset position-relative text-decoration-none fs-5">
              <BsHeart />
              {wishlist.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>
                  {wishlist.length}
                </span>
              )}
            </Link>
            
            <Link to="/cart" className="text-reset position-relative text-decoration-none fs-5">
              <BsCart3 />
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" style={{ fontSize: '0.6rem' }}>
                  {cartCount}
                </span>
              )}
            </Link>
            
            <Link to={user ? "/profile" : "/login"} className="text-reset text-decoration-none fs-5 ms-1">
              <BsPerson />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
