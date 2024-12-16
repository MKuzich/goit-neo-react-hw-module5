import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";
import { getMovieReviews } from "../../services/movies";
import { useEffect, useState } from "react";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then((reviews) => setReviews(reviews));
  }, [movieId]);
  return (
    <ul className={css.list}>
      {reviews && reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id} className={css.item}>
            <h3 className={css.title}>{author}</h3>
            <p className={css.text}>{content}</p>
          </li>
        ))
      ) : (
        <li className={css.item}>
          <p>{"We don't have any reviews for this movie."}</p>
        </li>
      )}
    </ul>
  );
};

export default MovieReviews;
