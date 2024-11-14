import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../App.css";
import "../Gallery/gallery.styles.css";

export default function Gallery() {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const [images, setImages] = useState([]);

  // To have the page start at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
    // Fetch gallery images from backend
    axios
      .get("/api/gallery")
      .then((response) => setImages(response.data))
      .catch((error) => console.error("Error fetching gallery images:", error));
  }, []);

  // To determine if the image is clicked to open the model and close the model when the xmark is clicked
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <h2 className="gallery-heading">Gallery</h2>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="" />
        <i className="fa-solid fa-xmark" onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {images.map((img, id) => (
          <div className="pics" key={id} onClick={() => getImg(img.imgSrc)}>
            <img src={img.imgSrc} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
