import React from "react";
import "./button.styles.css";

// Button sizes
const SIZES = ["btn--medium", "btn--large"];

// Button props
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  // Button size
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <div className="btn-mobile">
      <button
        className={`btn ${buttonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};
