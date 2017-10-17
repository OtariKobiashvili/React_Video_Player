import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return (
      <div>Loading...</div>
    );
  };

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  console.log(video);
  return (
    <div className="video-detail col-lg-7">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="selected video" src={url} className="embed-responsive-item"></iframe>
      </div>

      <div className="details">
        <div className="title">{video.snippet.title}</div>
        <div className="small"><em>{video.snippet.channelTitle}</em></div>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
