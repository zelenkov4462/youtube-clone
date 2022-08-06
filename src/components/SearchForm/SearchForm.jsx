import React, { useState } from "react";

import styles from "./SearchForm.module.scss";
import { useDispatch } from "react-redux";
import {
  getVideosAsync,
  searchVideosAsync,
} from "../../ReduxToolkit/Slices/videoSlice";

const SearchForm = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(searchVideosAsync(searchQuery));
      setSearchQuery("");
    }
  };

  return (
    <div className={styles.searchForm_container}>
      <input
        type="text"
        placeholder="Введите запрос"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <button
        type="submit"
        onClick={() => dispatch(searchVideosAsync(searchQuery))}
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
