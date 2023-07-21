import React from 'react';
import PropTypes from 'prop-types';

export const Cast = ({ cast }) => {
  return (
    <div>
      <h4>Cast</h4>
      <ul>
        {cast.slice(0, 5).map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};
