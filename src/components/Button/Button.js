import React from "react";
import "./Button.css";

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  handleClick
}) => {
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];


  return (
    <div className="btn-mobile">
      <button
        className={`btn ${buttonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        handleClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
};
