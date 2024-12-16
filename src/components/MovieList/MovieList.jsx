import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id}>
          <Link className={css.link} to={`/movies/${id}`} state={location}>
            <img
              className={css.img}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultImg
              }
              alt={title}
            />
            <div className={css.overlay}>
              <h3 className={css.title}>{title}</h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
