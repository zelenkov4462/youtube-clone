import React, { useEffect, useState } from "react";

import styles from "./SideItemVideo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedVideo,
  getMainVideo,
  getLikesAsync,
} from "../../ReduxToolkit/Slices/videoSlice";

const SideItemVideo = ({ url, title, videoId, channelTitle, data }) => {
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

  const dataCreate = (data) => {
    // const now = new Date();
    const create = new Date(data);
    // const different = now - create;
    const year = create.getFullYear();
    const month = create.getMonth();
    const date = create.getDate();

    console.log(create);
    return { year, month, date };
  };
  const dataVideo = dataCreate(data);

  const choiceVideo = () => {
    dispatch(addSelectedVideo(videoId));
    dispatch(
      getMainVideo(videos.filter((video) => video.id.videoId === videoId))
    );
    dispatch(getLikesAsync(videoId));

    console.log(focus);
  };

  const arr = title.split("");
  const arr1 = [];
  for (let i = 0; i < 34; i++) {
    arr1.push(arr[i]);
  }

  return (
    <>
      <div
        onClick={choiceVideo}
        className={focus ? styles.videoItemActive : styles.videoItems}
      >
        <div>
          <img width="190" height="110" src={url} alt="1" />
        </div>
        <div className={styles.videoItemInfo}>
          <div className={styles.titleVideo}>
            <b>{arr1.join("") + "..."}</b>
          </div>
          <div className={styles.info}>
            <div className={styles.channel}>{channelTitle}</div>
            <div className={styles.view}>просмотры</div>
            <div className={styles.dataCreate}>
              Добавлено: {dataVideo.year}-{dataVideo.month + 1}-{dataVideo.date}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideItemVideo;
