import React from "react";

import "./button.styles.css";

// Predefined button sizes classes
const SIZES = ["btn--medium", "btn--large"];

// Button component renders a customizable button.
// Props:
// - children: the content inside the button
// - type: the HTML button type (e.g., "submit", "button")
// - onClick: function to call when the button is clicked
// - buttonStyle: custom class for styling
// - buttonSize: determines button size class
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  // Check if provided size is valid; otherwise default to medium
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${buttonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
