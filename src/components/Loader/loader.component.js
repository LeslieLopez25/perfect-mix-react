import React from "react";
import "./loader.styles.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner-overlay">
        <div className="spinner-container" />
      </div>
    </div>
  );
}

export default Loader;
