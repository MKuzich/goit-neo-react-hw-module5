import { NavLink, useParams, Outlet } from "react-router-dom";
import { getMovieById } from "../../services/movies";
import { useEffect, useState } from "react";
import GoBack from "../../components/GoBack/GoBack";
import css from "./MovieDetailsPage.module.css";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  return (
    <div className={css.wrapper}>
      <GoBack />
      {movie && (
        <div className={css.card}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultImg
            }
            alt={movie.title}
            width={400}
          />
          <div className={css.attributes}>
            <h2>{movie.title}</h2>
            <p>User score: {movie.vote_average}</p>
            <h3>Overview</h3>
            <p className={css.overview}>{movie.overview}</p>
            <h3>Genres</h3>
            <ul className={css.genres}>
              {movie.genres.map(({ id, name }) => (
                <li className={css.genre} key={id}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <h3>Additional information</h3>
      <div className={css.genres}>
        <NavLink className={css.link} to={`/movies/${movieId}/cast`}>
          Cast
        </NavLink>
        <NavLink className={css.link} to={`/movies/${movieId}/reviews`}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
