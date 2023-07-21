import css from './App.module.css';
import { Suspense, lazy } from 'react';
import { Loader } from '../Loader/Loader';

import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import { Cast } from '../Cast';
import { Reviews } from '../Reviews';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/movies/" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
