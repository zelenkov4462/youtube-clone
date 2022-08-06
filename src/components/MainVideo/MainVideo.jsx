import React, { useEffect, useMemo, useState } from "react";

import styles from "./MainVideo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedVideo,
  getLikesAsync,
  getRatingAsync,
  getVideosAsync,
} from "../../ReduxToolkit/Slices/videoSlice";

const MainVideo = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.videos);
  const selectedVideo = useSelector((state) => state.videos.selectedVideo);
  const mainVideo = useSelector((state) => state.videos.mainVideo);

  // const state = store.getState();

  const statistics = useSelector((state) => state.videos.statistics);
  const rating = useSelector((state) => state.videos.rating);

  useEffect(() => {
    dispatch(getVideosAsync());
  }, []);

  const getFirstVideoId = (videos) => {
    if (videos.length) {
      dispatch(addSelectedVideo(videos[0].id.videoId));
    }
  };

  useEffect(() => {
    getFirstVideoId(videos);
  }, [videos]);

  useEffect(() => {
    console.log(rating);
  }, [mainVideo]);

  useEffect(() => {
    dispatch(getLikesAsync(selectedVideo));
    dispatch(getRatingAsync(selectedVideo));
  }, [selectedVideo]);

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

      {videos.length && (
        <div className={styles.videoInfo}>
          <h1 className={styles.titleVideo}>{mainVideo[0].snippet?.title}</h1>
          <h3 className={styles.channelTitle}>
            {mainVideo[0].snippet?.channelTitle}
          </h3>
          <h1 className={styles.descriptionVideo}>
            {mainVideo[0].snippet?.description}
          </h1>
        </div>
      )}
      {videos.length && (
        <div>
          <h2>LikeCount: {statistics?.statistics?.likeCount}</h2>
          <h2>commentCount: {statistics?.statistics?.commentCount}</h2>
          <h2>favoriteCount:{statistics?.statistics?.favoriteCount}</h2>
          <h2>viewCount: {statistics?.statistics?.viewCount}</h2>
        </div>
      )}
    </>
  );
};

export default MainVideo;
