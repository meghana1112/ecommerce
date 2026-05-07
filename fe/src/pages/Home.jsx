import React from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../utils/dummyData';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { BsArrowRight } from 'react-icons/bs';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="position-relative d-flex align-items-center justify-content-center text-white" style={{ 
        minHeight: '80vh', 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=2000)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container text-center text-md-start position-relative z-1">
          <div className="row">
            <div className="col-md-8 col-lg-6">
              <span className="badge bg-light text-dark mb-3 px-3 py-2 rounded-pill fw-semibold">New Collection Available</span>
              <h1 className="display-3 fw-bold mb-4 shadow-sm" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                Handcrafted Resin Art Elegance
              </h1>
              <p className="lead mb-5 fs-4" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                Discover unique, bespoke pieces that bring a touch of magic to your everyday spaces.
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                <Link to="/products" className="btn btn-gradient btn-lg px-5 shadow">Shop Now</Link>
                <Link to="/about" className="btn btn-outline-light btn-lg px-5 glass-card text-white border-0">Our Story</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-5 bg-light" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <h2 className="fw-bold mb-0">Shop by Category</h2>
              <p className="text-muted mb-0">Explore our diverse range of resin creations</p>
            </div>
            <Link to="/products" className="text-decoration-none fw-semibold" style={{ color: 'var(--primary-color)' }}>
              View All <BsArrowRight />
            </Link>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {categories.slice(0, 4).map((category, idx) => (
              <div className="col" key={idx}>
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2">Featured Masterpieces</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Handpicked selections of our most stunning and popular resin art pieces, crafted with meticulous attention to detail.
            </p>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
            {featuredProducts.map(product => (
              <div className="col" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-white" style={{ background: 'linear-gradient(45deg, var(--secondary-color), var(--primary-color))' }}>
        <div className="container py-5 text-center">
          <h2 className="fw-bold mb-3">Custom Orders Available</h2>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: '700px' }}>
            Have a specific vision in mind? We love creating custom pieces tailored perfectly to your style and space.
          </p>
          <Link to="/contact" className="btn btn-light btn-lg text-dark fw-bold rounded-pill px-5 shadow">
            Request a Custom Piece
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
