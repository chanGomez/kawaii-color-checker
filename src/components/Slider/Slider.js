import React from "react";
import "./Slider.css";

function Slider() {
  return (
    <div className="slider-radio-inputs">
      <label className="slider-radio">
        <input type="slider-radio" name="radio" checked="" id="slider-radio-input" />
        <span className="slider-name">HTML</span>
      </label>
      <label className="slider-radio">
        <input type="radio" name="radio" id="slider-radio-input"/>
        <span className="slider-name">React</span>
      </label>
    </div>
  );
}

export default Slider;
