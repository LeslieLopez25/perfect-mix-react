import React from "react";
import Video from "../../assets/video/video.mp4";

import "../Banners/banners.styles.css";

export default function VideoBanner() {
  return (
    <div className="video-container">
      <video src={Video} autoPlay loop muted />
    </div>
  );
}
