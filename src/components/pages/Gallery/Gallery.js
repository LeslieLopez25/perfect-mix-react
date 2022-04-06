import React, { useState, useEffect } from "react";
import imgData from "../../pages/Gallery/imgData"
import "../Gallery/GalleryElements.css"
import "../../../App.css";

export default function Gallery() {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h2 className="gallery-heading">Gallery</h2>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt={""} />
        <i class="fa-solid fa-xmark" onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {imgData.map((img, id) => {
          return (
            <div className="pics"
              key={id}
              onClick={() => getImg(img.imgSrc)}>
              <img src={img.imgSrc} alt={""} />
        </div>
          )
        })}
        </div>
    </>
  );
}
