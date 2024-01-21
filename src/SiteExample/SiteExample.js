import React from "react";
import "./SiteExample.css";

function SiteExample({textColor, backgroundColor}) {
  
  return (
    <div className="site-example-container" style={{background: backgroundColor}}>
      <div class="site-example-nav-top-half"   style={{background: backgroundColor, color: textColor}} id="page1">
        <div id="site-example-nav" style={{ borderBottom:`2px solid ${textColor}`}}>
          <h1>Canvas</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <h2>Sign Up</h2>
        </div>

        <div class="site-example-home-container">
          <div id="site-example-left">
            <h1>unlimited</h1>
            <h1>pretendious</h1>
            <h1>
              <span>
                <img
                  class="circle-img"
                  style={{border:`7px solid ${textColor}`}}
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8Mg%3D%3D"
                  alt=""
                />
              </span>
              <span>
                <img
                  class="circle-img"
                  style={{border:`7px solid ${textColor}`}}
                  src="https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8Mg%3D%3D"
                  alt=""
                />
              </span>
              <span>
                <img
                  class="circle-img"
                  style={{border:`7px solid ${textColor}`}}
                  src="https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8fDI%3D"
                  alt=""
                />
              </span>
              ideas
            </h1>
          </div>
          <div id="site-example-right"></div>
        </div>
      </div>
      <div class="site-example-row">
        <div class="site-example-box" style={{background: backgroundColor, color: textColor, border:`2px solid ${textColor}`}}>
          <h2>Creative Studio</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae in
            perferendis.
          </p>
        </div>
        <div class="site-example-box" style={{background: backgroundColor, color: textColor, border:`2px solid ${textColor}`}}>
          <h2>Featured Panelists</h2>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae in
            perferendis.
          </p>
        </div>
        <div class="site-example-box" style={{background: backgroundColor, color: textColor, border:`2px solid ${textColor}`}}>
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
