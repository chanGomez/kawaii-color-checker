import React from "react";
import "./Slider.css";

function Slider({ toggleActive, setToggleActive }) {

  function hangleChange(){
    setToggleActive(!toggleActive)
  }
  return (
    <div class="slider-container">
      <div>
        <label>
          <input
            type="radio"
            name="radio"
            checked={toggleActive}
            onClick={() => setToggleActive(!toggleActive)}
          />
          <span>Elements</span>
        </label>
        <label>
          <input
            type="radio"
            name="radio"
            checked={!toggleActive}
            onClick={() => setToggleActive(!toggleActive)}
          />
          <span>Site</span>
        </label>
      </div>
    </div>
  );
}

export default Slider;
