import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import { BsHeartPulse } from 'react-icons/bs';

const Wishlist = () => {
  const { wishlist } = useApp();

  return (
    <div className="container py-5 fade-in">
      <h1 className="fw-bold mb-4 d-flex align-items-center gap-3">
        Your Wishlist <BsHeartPulse className="text-danger" />
      </h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-5 glass-card" style={{ minHeight: '40vh' }}>
          <h3 className="text-muted mb-4 mt-5">Your wishlist is empty</h3>
          <p className="text-muted mb-4">Save your favorite resin pieces here while you decide.</p>
          <Link to="/products" className="btn btn-outline-primary">Browse Collection</Link>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {wishlist.map(product => (
            <div className="col" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
