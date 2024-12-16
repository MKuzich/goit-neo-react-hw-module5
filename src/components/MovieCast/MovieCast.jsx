import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";
import { getMovieCast } from "../../services/movies";
import { useEffect, useState } from "react";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCast(movieId).then((cast) => setCast(cast));
  }, [movieId]);
  return (
    <ul className={css.list}>
      {cast &&
        cast.map(({ id, profile_path, name, character }) => (
          <li key={id} className={css.item}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : defaultImg
              }
              alt={name}
              width={100}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
};

export default MovieCast;
