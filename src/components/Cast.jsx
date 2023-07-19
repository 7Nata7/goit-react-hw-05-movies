// import React from 'react';

// export const Cast = ({ cast }) => {
//   return (
//     <div>
//       <h4>Cast</h4>
//       <ul>
//         {cast.slice(0, 5).map(actor => (
//           <li key={actor.id}>{actor.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

import React from 'react';

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
