import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  // Placeholder images for categories based on name
  const getImage = (name) => {
    const images = {
      "Clocks": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400",
      "Coasters": "https://images.unsplash.com/photo-1610993302487-6e6900f07df5?w=400",
      "Jewelry": "https://images.unsplash.com/photo-1599643478524-fb66f7ca2bba?w=400",
      "Wall Decor": "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400",
      "Keychains": "https://images.unsplash.com/photo-1605021200674-638e0b672727?w=400",
      "Lamps": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400",
      "Photo Frames": "https://images.unsplash.com/photo-1544078751-58fee2a8a03b?w=400"
    };
    return images[name] || "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=400";
  };

  return (
    <Link to={`/products?category=${category}`} className="text-decoration-none text-reset">
      <div className="card text-bg-dark border-0 overflow-hidden rounded-4 glass-card h-100 category-card" style={{minHeight: '200px'}}>
        <img 
          src={getImage(category)} 
          className="card-img h-100 object-fit-cover opacity-75" 
          alt={category} 
          style={{ transition: 'transform 0.5s ease' }}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
          <h4 className="card-title text-white fw-bold shadow-sm">{category}</h4>
        </div>
      </div>
      <style>{`
        .category-card:hover img {
          transform: scale(1.1);
        }
      `}</style>
    </Link>
  );
};

export default CategoryCard;
