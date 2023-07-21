import React, { useState, useEffect } from 'react';
import { Loader } from '../Loader/Loader';
import css from './Movies.module.css';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { searchMovies } from 'components/service/Api';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export const toastConfig = {
  position: 'top-center',
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('query');
  console.log(searchTerm);

  const handleSubmit = async e => {
    e.preventDefault();
    const searchValue = e.target.children.search.value;
    setSearchParams({
      query: searchValue,
    });
  };

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        if (!searchTerm) return;

        setIsLoading(true);

        const moviesData = await searchMovies(searchTerm);

        if (moviesData.length === 0) {
          toast.warn('No movie', toastConfig);
        } else {
          toast.success("Wow! It's success", toastConfig);
        }

        setMovies(moviesData);
      } catch (error) {
        toast.error('Something went wrong. Please try again', toastConfig);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesData();
  }, [searchTerm]);

  return (
    <div>
      {isLoading && <Loader />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          className={css.input}
          placeholder="Search movie"
        />
        <button className={css.buttonSearch} type="submit">
          Search
        </button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
