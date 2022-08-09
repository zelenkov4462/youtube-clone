import React from "react";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";

import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <a href="https://www.youtube.com/" target="_blank">
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <div className={styles.logoName}>YouTube</div>
      </div>
    </a>
  );
};

export default Logo;
