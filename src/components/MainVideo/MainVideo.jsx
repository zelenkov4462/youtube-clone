import React, { useEffect, useState } from "react";

import styles from "./MainVideo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getVideosAsync } from "../../ReduxToolkit/async/getVideosAsync";

const MainVideo = () => {
  const [selectedVideo, setSelectedVideo] = useState("");

  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.videos);

  useEffect(() => {
    dispatch(getVideosAsync());
  }, []);

  const getFirstVideoId = (videos) => {
    if (videos.length) {
      console.log(videos[0].id.videoId);
      setSelectedVideo(videos[0].id.videoId);
    } else {
      setSelectedVideo("-hwCOhaOpQs");
    }
  };

  useEffect(() => {
    getFirstVideoId(videos);
    console.log(videos);
    console.log(selectedVideo);
  }, [videos]);

  return (
    <>
      <div className={styles.videoIframe}>
        <iframe
          frameBorder="0"
          allowFullScreen
          title="Video player"
          src={`https://www.youtube.com/embed/${selectedVideo}`}
        />
      </div>
      <div className={styles.videoInfo}>
        <h1 className={styles.titleVideo}>title</h1>
        <h3 className={styles.channelTitle}>channelTitle</h3>
        <h1 className={styles.descriptionVideo}>description</h1>
      </div>
    </>
  );
};

export default MainVideo;

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/-hwCOhaOpQs"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>;
