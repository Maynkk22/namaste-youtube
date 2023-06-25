import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/Constant";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  async function getYoutubeVideos() {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json.items);
    setVideoData(json?.items);
  }

  return (
    <div className="flex flex-wrap">
      {videoData.map((video) => (
        <Link key={video?.id} to={"/watch?v=" + video.id}>
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
