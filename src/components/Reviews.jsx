import React from 'react';
import PropTypes from 'prop-types';

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h4>Reviews</h4>
      {reviews && reviews.results.length > 0 ? (
        <ul>
          {reviews.results.slice(0, 3).map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};
