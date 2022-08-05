import React from "react";

import styles from "./Main.module.scss";
import MainVideo from "../MainVideo/MainVideo";
import ListVideos from "../ListVideos/ListVideos";

const Main = () => {
  return (
    <div className={styles.videoMain_container}>
      <div className={styles.videoSec}>
        <MainVideo />
      </div>
      <div className={styles.videoLists}>
        <ListVideos />
      </div>
    </div>
  );
};

export default Main;
