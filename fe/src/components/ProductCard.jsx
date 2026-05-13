import React from 'react';
import { Link } from 'react-router-dom';
import { BsCartPlus, BsHeart, BsHeartFill } from 'react-icons/bs';
import { useApp } from '../context/AppContext';
import RatingStars from './RatingStars';

const ProductCard = ({ product }) => {
  const { addToCart, wishlist, toggleWishlist } = useApp();
  const isWishlisted = wishlist.some(item => item.id === product.id);

  return (
    <div className="card h-100 glass-card border-0">
      <div className="position-relative product-img-container">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} className="card-img-top product-img" alt={product.name} />
        </Link>
        <button 
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className="btn btn-light rounded-circle position-absolute top-0 end-0 m-2 shadow-sm p-2 d-flex align-items-center justify-content-center"
          style={{ width: '35px', height: '35px' }}
        >
          {isWishlisted ? <BsHeartFill className="text-danger" /> : <BsHeart />}
        </button>
      </div>
      <div className="card-body d-flex flex-column">
        <div className="mb-2">
          <small className="text-muted text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>{product.category}</small>
        </div>
        <Link to={`/product/${product.id}`} className="text-decoration-none text-reset mb-2 flex-grow-1">
          <h5 className="card-title fw-semibold">{product.name}</h5>
        </Link>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fs-5 fw-bold" style={{ color: 'var(--primary-color)' }}>₹{product.price.toFixed(2)}</span>
          <RatingStars rating={product.rating} count={product.reviews} />
        </div>
        <button 
          onClick={() => addToCart(product)}
          className="btn btn-gradient w-100 d-flex justify-content-center align-items-center gap-2"
        >
          <BsCartPlus className="fs-5" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
