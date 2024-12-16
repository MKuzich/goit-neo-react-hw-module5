import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
