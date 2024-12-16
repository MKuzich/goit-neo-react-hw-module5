import { useEffect, useState } from "react";
import { getMovieeBySearch } from "../../services/movies";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchParams.get("query")) {
      return;
    }

    getMovieeBySearch(searchParams.get("query")).then((data) => {
      setMovies(data);
    });
  }, [searchParams]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <div className="">
      <SearchForm onSubmit={handleSubmit} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
