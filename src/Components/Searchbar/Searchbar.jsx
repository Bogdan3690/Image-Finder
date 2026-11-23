import css from "./Searchbar.module.css"
import { useState } from "react"

export const Searchbar = ({onSubmit}) => {

  const [query, setQuery] = useState('')
  
  const onChange = (e) => {
    setQuery(e.currentTarget.value)
  }

  const handleSumbit = (e) => {
    e.preventDefault()
    onSubmit(query)
  }

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSumbit}>
        <button type="submit"  className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          value={query}
          onChange={onChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images"
        />
      </form>
    </header>
  );
};
