import React from 'react'
import "./CardFive.css"

function CardFive() {
  return (
    <div className="card-five">
    <div className="card-five__wrapper">
        <div className="card-five___wrapper-acounts">
            <div className="card-five__score">+3</div>
        </div>
        <div className="card-five__menu"><svg xmlns="http://www.w3.org/2000/svg" width="4" viewBox="0 0 4 20" height="20" fill="none"><g fill="#000"><path d="m2 4c1.10457 0 2-.89543 2-2s-.89543-2-2-2-2 .89543-2 2 .89543 2 2 2z"></path><path d="m2 12c1.10457 0 2-.8954 2-2 0-1.10457-.89543-2-2-2s-2 .89543-2 2c0 1.1046.89543 2 2 2z"></path><path d="m2 20c1.10457 0 2-.8954 2-2s-.89543-2-2-2-2 .8954-2 2 .89543 2 2 2z"></path></g></svg></div>
    </div>
    <div className="card-five__title">Design Course</div>
    <div className="card-five__subtitle">Building projects to elevate your dsgn skills</div>
    <div className="card-five__indicator"><span className="card-five__indicator-amount">135</span> Works / <span className="card-five__indicator-percentage">45%</span></div>
    <div className="card-five__progress"><progress max="100" value="40"></progress></div>
</div>
  )
}

export default CardFive