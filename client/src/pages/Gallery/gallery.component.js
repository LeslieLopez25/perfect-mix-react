import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../App.css";
import "../Gallery/gallery.styles.css";

const apiURL = process.env.REACT_APP_API_URL;

export default function Gallery() {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const [images, setImages] = useState([]);

  // Scrolls to top and fetches gallery images when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${apiURL}/api/gallery`)
      .then((response) => setImages(response.data))
      .catch((error) => console.error("Error fetching gallery images:", error));
  }, []);

  // Opens the modal with the selected image
  const getImg = (imgSrc) => {
    setTempImgSrc(`${apiURL}${imgSrc}`);
    setModel(true);
  };

  return (
    <>
      <h2 className="gallery-heading">Gallery</h2>
      {/* Modal image viewer */}
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="" />
        <i className="fa-solid fa-xmark" onClick={() => setModel(false)} />
      </div>
      {/* Display all gallery images */}
      <div className="gallery">
        {images.map((img, id) => (
          <div className="pics" key={id} onClick={() => getImg(img.imgSrc)}>
            <img src={`${apiURL}${img.imgSrc}`} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
