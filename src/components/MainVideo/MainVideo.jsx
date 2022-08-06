import React, { useEffect, useState } from "react";

import styles from "./MainVideo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedVideo,
  getVideosAsync,
} from "../../ReduxToolkit/Slices/videoSlice";

const MainVideo = () => {
  // const [selectedVideo, setSelectedVideo] = useState("");
  const [mainVideo, setMainVideo] = useState(null);

  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.videos);
  const selectedVideo = useSelector((state) => state.videos.selectedVideo);
  const statistics = useSelector((state) => state.videos.statistics);

  console.log(statistics);

  useEffect(() => {
    dispatch(getVideosAsync());
  }, []);

  const getFirstVideoId = (videos) => {
    if (videos.length) {
      dispatch(addSelectedVideo(videos[0].id.videoId));
    }
    // videos.map((video) => dispatch(getLikesAsync(video.id.videoId)));
  };

  useEffect(() => {
    getFirstVideoId(videos);
    console.log(videos);
  }, [videos]);

  return (
    <>
      <div className={styles.videoIframe}>
        {videos.length ? (
          <iframe
            frameBorder="0"
            allowFullScreen
            title="Video player"
            src={`https://www.youtube.com/embed/${selectedVideo}`}
          />
        ) : (
          <div>No result</div>
        )}
      </div>
      {selectedVideo && (
        <div className={styles.videoInfo}>
          <h1 className={styles.titleVideo}>{videos[0].snippet.title}</h1>
          <h3 className={styles.channelTitle}>
            {videos[0].snippet.channelTitle}
          </h3>
          <h1 className={styles.descriptionVideo}>
            {videos[0].snippet.description}
          </h1>
        </div>
      )}
    </>
  );
};

export default MainVideo;
