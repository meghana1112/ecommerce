import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const RatingStars = ({ rating, count }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="d-flex align-items-center gap-1 text-warning">
      {[...Array(fullStars)].map((_, i) => (
        <BsStarFill key={`full-${i}`} />
      ))}
      {hasHalfStar && <BsStarHalf />}
      {[...Array(emptyStars)].map((_, i) => (
        <BsStar key={`empty-${i}`} />
      ))}
      {count !== undefined && (
        <span className="text-muted ms-1 small">({count})</span>
      )}
    </div>
  );
};

export default RatingStars;
