import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTY1ZDFmODVlZTNjMTFkYzNiMWZhY2U5NzUxZTFkYyIsIm5iZiI6MTY1Nzc4NzEyMy43OCwic3ViIjoiNjJjZmQyZjMwY2UxYmMwMDRjMzMwMjk1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.qn1nb4eG5CSuXBm02rkTlI0UdOgip7at17xkc9LMiy8`;

export const getPouplarMovies = async () => {
  try {
    const response = await axios.get("/trending/movie/day");
    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getMovieeBySearch = async (query) => {
  try {
    const response = await axios.get(`/search/movie?query=${query}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getMovieById = async (movieId) => {
  try {
    const response = await axios.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getMovieCast = async (movieId) => {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`);
    return response.data.cast;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`/movie/${movieId}/reviews`);
    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};
