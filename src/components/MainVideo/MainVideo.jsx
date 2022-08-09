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
  const user = useSelector((state) => state.user.user);

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
  console.log(videos);

  useEffect(() => {
    getFirstVideoId(videos);
  }, [videos]);

  useEffect(() => {
    console.log(rating);
  }, [mainVideo]);

  useEffect(() => {
    dispatch(getLikesAsync(selectedVideo));
    // dispatch(getRatingAsync(selectedVideo));
  }, [selectedVideo]);

  useEffect(() => {
    dispatch(getRatingAsync(selectedVideo));
  }, [user]);

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
          {/*<h3 className={styles.channelTitle}>*/}
          {/*  {mainVideo[0].snippet?.channelTitle}*/}
          {/*</h3>*/}
          <div className={styles.descriptionBlock}>
            <span className={styles.viewCountVideo}>
              {statistics?.statistics?.viewCount} просмотров
            </span>

            <span className={styles.dateCreateVideo}>
              {mainVideo[0].snippet.publishTime.slice(0, 10)}
            </span>

            <span className={styles.descriptionVideo}>
              {mainVideo[0].snippet?.description}
            </span>
          </div>
        </div>
      )}
      {videos.length && (
        <div>
          <h2>Количество лайков: {statistics?.statistics?.likeCount}</h2>
          <h2>
            Количество коментариев: {statistics?.statistics?.commentCount}
          </h2>
          <h2>viewCount: {statistics?.statistics?.viewCount}</h2>
        </div>
      )}
    </>
  );
};

export default MainVideo;
