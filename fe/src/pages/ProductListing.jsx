import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { products, categories } from '../utils/dummyData';
import ProductCard from '../components/ProductCard';

const ProductListing = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = products;
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    switch (sortBy) {
      case 'price-low':
        return [...result].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...result].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...result].sort((a, b) => b.rating - a.rating);
      default:
        return result;
    }
  }, [selectedCategory, sortBy]);

  return (
    <div className="container py-5 fade-in">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h1 className="fw-bold mb-3">Our Collection</h1>
          <p className="text-muted">Browse our full range of handcrafted resin masterpieces.</p>
        </div>
      </div>

      <div className="row g-4">
        {/* Filter Sidebar */}
        <div className="col-lg-3">
          <div className="glass-card p-4 sticky-top" style={{ top: '100px', zIndex: 1 }}>
            <h5 className="fw-bold mb-4 border-bottom pb-2">Categories</h5>
            <ul className="list-unstyled mb-4 d-flex flex-column gap-2">
              <li>
                <button 
                  className={`btn btn-link text-decoration-none text-start p-0 w-100 ${selectedCategory === 'All' ? 'fw-bold' : 'text-muted'}`}
                  style={{ color: selectedCategory === 'All' ? 'var(--primary-color)' : 'inherit' }}
                  onClick={() => setSelectedCategory('All')}
                >
                  All Products
                </button>
              </li>
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    className={`btn btn-link text-decoration-none text-start p-0 w-100 ${selectedCategory === cat ? 'fw-bold' : 'text-muted'}`}
                    style={{ color: selectedCategory === cat ? 'var(--primary-color)' : 'inherit' }}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>

            <h5 className="fw-bold mb-3 border-bottom pb-2 mt-4">Sort By</h5>
            <select 
              className="form-select shadow-none glass-card" 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="col-lg-9">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <span className="text-muted">Showing {filteredProducts.length} results</span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
              {filteredProducts.map(product => (
                <div className="col" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5 glass-card">
              <h4 className="text-muted mb-3">No products found</h4>
              <button className="btn btn-outline-primary" onClick={() => setSelectedCategory('All')}>Clear Filters</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
