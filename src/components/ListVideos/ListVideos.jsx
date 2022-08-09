import React, { useState } from "react";

import styles from "./ListVideos.module.scss";
import SideItemVideo from "../SideItemVedeo/SideItemVideo";
import { useSelector } from "react-redux";

const ListVideos = () => {
  const videos = useSelector((state) => state.videos.videos);
  const statistics = useSelector((state) => state.videos.videos);
  console.log(videos);
  console.log(statistics);
  // const videoList = videos.slice(1);
  return (
    <div>
      {videos.map((video) => (
        <div className={styles.sideItemVideo} key={video.id.videoId}>
          <SideItemVideo
            url={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            videoId={video.id.videoId}
            channelTitle={video.snippet.channelTitle}
            data={video.snippet.publishTime}
            // veiwCount={}
          />
        </div>
      ))}
    </div>
  );
};

export default ListVideos;
