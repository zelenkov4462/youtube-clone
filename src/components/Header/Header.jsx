import React from "react";
import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <SearchForm />
    </div>
  );
};

export default Header;
