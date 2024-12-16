import css from "./SearchForm.module.css";
import { useState } from "react";

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit(query);
  };
  return (
    <form onSubmit={submitHandler} className={css.form}>
      <input
        className={css.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
