import React, { useState } from 'react';
import { Loader } from '../Loader/Loader';
import css from './Movies.module.css';
import { Link } from 'react-router-dom';

import { searchMovies } from 'components/service/Api';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const toastConfig = {
  position: 'top-center',
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;

    if (searchValue.trim() === '') {
      toast.warn('Please fill out a request', toastConfig);
      return;
    }

    try {
      setIsLoading(true);
      const moviesData = await searchMovies(searchValue);

      if (moviesData.length === 0) {
        toast.warn('No movie', toastConfig);
      }

      if (moviesData.length > 0) {
        toast.success("Wow! It's success", toastConfig);
      }

      setMovies(moviesData);
    } catch (error) {
      toast.error('Something went wrong. Please try again', toastConfig);
    } finally {
      setIsLoading(false);
    }
  };

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
