import React, { useEffect, useState } from "react";

import styles from "./SideItemVideo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedVideo,
  getMainVideo,
  getLikesAsync,
} from "../../ReduxToolkit/Slices/videoSlice";

const SideItemVideo = ({ url, title, videoId }) => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.videos);
  const selectedVideo = useSelector((state) => state.videos.selectedVideo);

  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (videoId === selectedVideo) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  }, [selectedVideo]);

  const choiceVideo = () => {
    dispatch(addSelectedVideo(videoId));
    dispatch(
      getMainVideo(videos.filter((video) => video.id.videoId === videoId))
    );
    dispatch(getLikesAsync(videoId));

    console.log(focus);
  };

  return (
    <>
      <div
        onClick={choiceVideo}
        className={focus ? styles.videoItemActive : styles.videoItems}
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
