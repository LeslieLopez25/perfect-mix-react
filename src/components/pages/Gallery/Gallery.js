import React, { useState } from "react";
import imgData from "../../pages/Gallery/imgData"
import "../../../App.css";

export default function Gallery() {
  const [model, setModel] = useState(false);
  const [tempingSrc, setTempingSrc] = useState('');

  const getImg = (img) => {
    setTempingSrc(img);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempingSrc} alt={""} />
      </div>
      <div className="gallery">
        {imgData.map((img, id) => {
          return (
            <div className="pics" key={id} onClick={() => getImg(img.imgSrc)}>
              <img src={img.imgSrc} alt={img.title} style={{ width: "100%" }} />
        </div>
          )
        })}
        </div>
    </>
  );
}
