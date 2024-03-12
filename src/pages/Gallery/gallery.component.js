import React, { useState, useEffect } from "react";
import imgData from "./imgData";
import "../Gallery/gallery.styles.css";
import "../../App.css";

export default function Gallery() {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  // To determine if the image is clicked to open the model and close the model when the xmark is clicked
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  // To have the page start at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h2 className="gallery-heading">Gallery</h2>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt={""} />
        <i className="fa-solid fa-xmark" onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {imgData.map((img, id) => {
          return (
            <div className="pics" key={id} onClick={() => getImg(img.imgSrc)}>
              <img src={img.imgSrc} alt={""} />
            </div>
          );
        })}
      </div>
    </>
  );
}
