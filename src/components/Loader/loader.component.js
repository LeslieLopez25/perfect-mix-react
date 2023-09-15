import React from "react";
import eater from "../../assets/images/eater.gif";
import "./loader.styles.css";

function Loader() {
  return (
    <div className="loader-container">
      <img src={eater} alt="Loading..." />
    </div>
  );
}

export default Loader;
