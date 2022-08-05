import React, { useState } from "react";

import styles from "./SearchForm.module.scss";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className={styles.searchForm_container}>
      <input
        type="text"
        placeholder="Введите запрос"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchForm;
