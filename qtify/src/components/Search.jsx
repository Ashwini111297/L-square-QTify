import React, { useState } from "react";
import styles from "./Search.module.css";
import searchIcon from "../assets/search-icon.png";
import { useNavigate } from "react-router-dom";

function Search({ searchData = [], placeholder }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredData = searchData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if (filteredData.length > 0) {
      navigate(`/album/${filteredData[0].slug}`);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <input
          className={styles.search}
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <img src={searchIcon} alt="search" />
        </button>
      </form>

      {query && (
        <ul className={styles.dropdown}>
          {filteredData.map((item) => (
            <li
              key={item.id}
              onClick={() => navigate(`/album/${item.slug}`)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
