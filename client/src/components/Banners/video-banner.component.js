import React from "react";
import Video from "../../assets/video/video.mp4";

import "../Banners/banners.styles.css";

// VideoBanner renders a video element that plays automatically,
// loops continuously, and is muted
export default function VideoBanner() {
  return (
    <div className="video-container">
      <video src={Video} autoPlay loop muted />
    </div>
  );
}
