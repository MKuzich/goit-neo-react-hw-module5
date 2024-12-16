import { useEffect, useState } from "react";
import { getPouplarMovies } from "../../services/movies";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPouplarMovies().then((movies) => setMovies(movies));
  }, []);

  return <MovieList movies={movies} />;
};

export default HomePage;
