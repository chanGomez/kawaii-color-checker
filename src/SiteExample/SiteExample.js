import React from "react";
import "./SiteExample.css";
import headshotOne from "../Images/headShotOne.png"
import headshotTwo from "../Images/headshotTwo.png"
import headshotThree from "../Images/headshotThree.png"

function SiteExample({textColor, backgroundColor}) {
  
  return (
    <div className="site-example-container" style={{background: backgroundColor}}>
      <div className="site-example-nav-top-half"   style={{background: backgroundColor, color: textColor}} id="page1">
        <div id="site-example-nav" style={{ borderBottom:`2px solid ${textColor}`}}>
          <h1>Canvas</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <h2>Sign Up</h2>
        </div>

        <div className="site-example-home-container">
          <div id="site-example-left">
            <h1>unlimited</h1>
            <h1>pretendious</h1>
            <h1>
              <span>
                <img
                  className="circle-img"
                  style={{border:`7px solid ${textColor}`}}
                  src={headshotThree}
                  alt=""
                />
              </span>
              <span>
                <img
                  className="circle-img"
                  style={{border:`7px solid ${textColor}`}}
                  src={headshotTwo}
                  alt=""
                />
              </span>
              <span>
                <img
                  className="circle-img"
                  style={{border:`7px solid ${textColor}`}}
                  src={headshotOne}
                  alt=""
                />
              </span>
              ideas
            </h1>
          </div>
          <div id="site-example-right"></div>
        </div>
      </div>
      <div className="site-example-row">
        <div className="site-example-box" style={{background: backgroundColor, color: textColor, border:`2px solid ${textColor}`}}>
          <h2>Creative Studio</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae in
            perferendis.
          </p>
        </div>
        <div className="site-example-box" style={{background: backgroundColor, color: textColor, border:`2px solid ${textColor}`}}>
          <h2>Featured Panelists</h2>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae in
            perferendis.
          </p>
        </div>
        <div className="site-example-box" style={{background: backgroundColor, color: textColor, border:`2px solid ${textColor}`}}>
          <h2>Trending Topics</h2>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae in
            perferendis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SiteExample;
