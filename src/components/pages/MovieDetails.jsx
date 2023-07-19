// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { getMovieDetails } from 'components/service/Api';
// import { Reviews } from '../Reviews';
// import { Cast } from '../Cast';

// import css from './MovieDetails.module.css';

// export const MovieDetails = () => {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [showCast, setShowCast] = useState(false);
//   const [showReviews, setShowReviews] = useState(false);

//   useEffect(() => {
//     if (!movieId) return;

//     const fetchMovieDetails = async () => {
//       const movieDetails = await getMovieDetails(movieId);
//       setMovie(movieDetails);
//     };

//     fetchMovieDetails();
//   }, [movieId]);

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   const {
//     title,
//     poster_path,
//     vote_average,
//     reviews,
//     overview,
//     genres,
//     credits,
//   } = movie;

//   return (
//     <div>
//       <div>
//         <Link to="/movies">
//           <div className={css.back}>
//             <span>&#8592; </span>
//             Go back
//           </div>
//         </Link>
//         <div className={css.mainInfo}>
//           <img
//             alt={title}
//             src={`https://image.tmdb.org/t/p/w300${poster_path}`}
//           ></img>
//           <div className={css.mainInfoText}>
//             <h1>{title}</h1>
//             <p>User Score: {vote_average * 10}%</p>
//             <h2>Overview</h2>
//             <p>{overview}</p>
//             <h3>Genres</h3>
//             <p>{genres.map(genre => genre.name).join(', ')}</p>
//           </div>
//         </div>
//       </div>

//       <div>
//         <h4>Additional information</h4>

//         <ul>
//           <li>
//             <Link
//               to={`/movies/${movieId}/cast`}
//               onClick={() => setShowCast(!showCast)}
//             >
//               Cast
//             </Link>
//           </li>
//           <li>
//             <Link
//               to={`/movies/${movieId}/reviews`}
//               onClick={() => setShowReviews(!showReviews)}
//             >
//               Reviews
//             </Link>
//           </li>
//         </ul>
//       </div>

//       <div>{showCast && <Cast cast={credits.cast} />}</div>

//       <div>{showReviews && <Reviews reviews={reviews} />}</div>
//     </div>

//     // {/* <Cast cast={credits.cast} />

//     // <Reviews reviews={reviews} /> */}
//     // </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovieDetails } from 'components/service/Api';
import { Reviews } from '../Reviews';
import { Cast } from '../Cast';

import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      const movieDetails = await getMovieDetails(movieId);
      setMovie(movieDetails);
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const {
    title,
    poster_path,
    vote_average,
    reviews,
    overview,
    genres,
    credits,
  } = movie;

  return (
    <div>
      <div>
        <Link to="/">
          <div className={css.back}>
            <span>&#8592; </span>
            Go back
          </div>
        </Link>
        <div className={css.mainInfo}>
          <img
            alt={title}
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          ></img>
          <div className={css.mainInfoText}>
            <h1>{title}</h1>
            <p>User Score: {vote_average * 10}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
      </div>

      <div>
        <h4>Additional information</h4>

        <ul>
          <li>
            <Link
              to={`/movies/${movieId}/cast`}
              onClick={() => setShowCast(!showCast)}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={`/movies/${movieId}/reviews`}
              onClick={() => setShowReviews(!showReviews)}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      {showCast && <Cast cast={credits.cast} />}
      {showReviews && <Reviews reviews={reviews} />}
    </div>
  );
};
