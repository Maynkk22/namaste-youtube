import React from "react";

const VideoCard = ({ video }) => {
  console.log(video);

  // const { snippet, statistics } = video;

  return (
    <div className="p-2 m-2 w-1/5">
      <img
        className="rounded-lg"
        src={video?.snippet?.thumbnails?.maxres?.url}
      />
      <ul>
        <li className="font-bold">{video?.snippet?.title}</li>
        <li>{video?.snippet?.channelTitle}</li>
        <li>{video?.statistics?.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
