import React from "react";

import styles from "./SideItemVideo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedVideo } from "../../ReduxToolkit/Slices/videoSlice";

const SideItemVideo = ({ url, title, videoId }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        onClick={() => dispatch(addSelectedVideo(videoId))}
        className={styles.videoItems}
      >
        <img src={url} alt="1" />
        <div className={styles.titleVideo}>
          <b>{title}</b>
        </div>
      </div>
    </>
  );
};

export default SideItemVideo;
