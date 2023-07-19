import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const apiKey = '11144b71e142cd1f6ec8753ecdd5b102';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${baseURL}/trending/movie/day?api_key=${apiKey}`
  );

  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(
    `${baseURL}/movie/${movieId}?api_key=${apiKey}&append_to_response=credits,reviews`
  );

  return data;
};

export const searchMovies = async (query, page = 1) => {
  const { data } = await axios.get(
    `${baseURL}/search/movie?query=${query}&page=${page}&api_key=${apiKey}`
  );

  return data.results;
};

export const getMovieCredits = async movieId => {
  const { data } = await axios.get(
    `${baseURL}/movie/${movieId}/credits?api_key=${apiKey}`
  );

  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${baseURL}/movie/${movieId}/reviews?api_key=${apiKey}`
  );

  return data;
};
