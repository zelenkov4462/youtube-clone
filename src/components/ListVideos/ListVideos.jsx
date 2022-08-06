import React from "react";

import styles from "./ListVideos.module.scss";
import SideItemVideo from "../SideItemVedeo/SideItemVideo";
import { useSelector } from "react-redux";

const ListVideos = () => {
  const videos = useSelector((state) => state.videos.videos);

  const videoList = videos.slice(1);
  return (
    <div>
      {videoList.map((video) => (
        <div>
          <SideItemVideo
            url={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            videoId={video.id.videoId}
          />
        </div>
      ))}
    </div>
  );
};

export default ListVideos;
