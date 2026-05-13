import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../utils/dummyData';
import { useApp } from '../context/AppContext';
import { showToast } from '../components/ToastNotification';
import RatingStars from '../components/RatingStars';
import { BsCartPlus, BsHeart, BsHeartFill, BsArrowLeft } from 'react-icons/bs';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, wishlist, toggleWishlist } = useApp();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container py-5 text-center fade-in">
        <h2 className="mb-4">Product Not Found</h2>
        <Link to="/products" className="btn btn-gradient">Return to Shop</Link>
      </div>
    );
  }

  const isWishlisted = wishlist.some(item => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showToast(`${quantity} x ${product.name} added to cart!`);
  };

  return (
    <div className="container py-5 fade-in">
      <Link to="/products" className="text-decoration-none text-muted mb-4 d-inline-block">
        <BsArrowLeft /> Back to Shop
      </Link>
      
      <div className="row g-5">
        {/* Product Image */}
        <div className="col-md-6">
          <div className="glass-card p-2 h-100 d-flex align-items-center justify-content-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="img-fluid rounded-4 shadow-sm w-100 object-fit-cover" 
              style={{ maxHeight: '600px' }}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <div className="d-flex flex-column h-100 justify-content-center">
            <span className="badge bg-secondary text-uppercase align-self-start mb-2">{product.category}</span>
            <h1 className="fw-bold mb-3">{product.name}</h1>
            
            <div className="d-flex align-items-center gap-3 mb-4">
              <RatingStars rating={product.rating} count={product.reviews} />
            </div>
            
            <h2 className="fw-bold mb-4" style={{ color: 'var(--primary-color)' }}>
              ₹{product.price.toFixed(2)}
            </h2>
            
            <p className="lead text-muted mb-5">
              {product.description}
            </p>

            <div className="d-flex align-items-center gap-4 mb-4">
              <div className="d-flex align-items-center border rounded-pill glass-card p-1">
                <button className="btn btn-link text-decoration-none text-dark shadow-none" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span className="px-3 fw-bold">{quantity}</span>
                <button className="btn btn-link text-decoration-none text-dark shadow-none" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <p className="mb-0 text-muted small">Only a few left in stock!</p>
            </div>

            <div className="d-flex gap-3">
              <button 
                onClick={handleAddToCart}
                className="btn btn-gradient btn-lg flex-grow-1 d-flex align-items-center justify-content-center gap-2 shadow"
              >
                <BsCartPlus fs-4 /> Add to Cart
              </button>
              <button 
                onClick={() => toggleWishlist(product)}
                className="btn btn-light btn-lg glass-card text-danger d-flex align-items-center justify-content-center"
                style={{ width: '60px' }}
              >
                {isWishlisted ? <BsHeartFill /> : <BsHeart />}
              </button>
            </div>

            {/* Extra Info Accordion */}
            <div className="accordion mt-5 glass-card" id="productAccordion">
              <div className="accordion-item bg-transparent border-bottom border-0">
                <h2 className="accordion-header">
                  <button className="accordion-button shadow-none bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    Details & Care
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#productAccordion">
                  <div className="accordion-body text-muted small">
                    Keep away from direct prolonged sunlight to prevent yellowing. Wipe clean with a soft, damp microfiber cloth. Do not use harsh chemicals.
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-transparent border-0">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed shadow-none bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                    Shipping & Returns
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#productAccordion">
                  <div className="accordion-body text-muted small">
                    Free shipping on orders over ₹10000. Due to the custom handmade nature of these products, returns are accepted within 14 days of delivery only for defective items.
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
