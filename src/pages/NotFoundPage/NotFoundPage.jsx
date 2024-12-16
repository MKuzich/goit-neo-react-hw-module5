import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.wrapper}>
      <h1>404 - Not Found</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFoundPage;
