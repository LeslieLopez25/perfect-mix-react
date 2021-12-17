import React from "react";
import "../../App.css";
import { Button } from "../Button";
import "../SpecialsSection/SpecialArea2.css";

function Specials2Section() {
  return (
    <div className="specials-container">
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="specials-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default Specials2Section;
