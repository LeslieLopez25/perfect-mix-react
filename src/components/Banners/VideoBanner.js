import React from "react";
import "../Banners/BannersElements.css";
import Video1 from "../../video/video.mp4";

export default function VideoBanner() {
  return (
    <>
    <div className="video-container">
      <video src={Video1} autoPlay loop muted />
      </div>
    </>
  );
}
