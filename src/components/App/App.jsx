import css from './App.module.css';

import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
import { Cast } from '../Cast';
import { Reviews } from '../Reviews';

export const App = () => {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.mainLink}>
          <NavLink className={css.current} to="/">
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </main>
    </div>
  );
};
