import React from "react";
import "../Banners/banners.styles.css";
import Video from "../../video/video.mp4";

export default function VideoBanner() {
  return (
    <>
      <div className="video-container">
        <video src={Video} autoPlay loop muted />
      </div>
    </>
  );
}
