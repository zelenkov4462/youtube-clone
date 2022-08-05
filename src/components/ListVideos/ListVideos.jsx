import React from "react";

import styles from "./ListVideos.module.scss";
import SideItemVideo from "../SideItemVedeo/SideItemVideo";

const ListVideos = () => {
  return (
    <div>
      <SideItemVideo />
      <SideItemVideo />
      <SideItemVideo />
      <SideItemVideo />
    </div>
  );
};

export default ListVideos;
