import React from 'react'
import "./CardSix.css"

function CardSix({textColor, backgroundColor}) {
  return (
    <form className="card-six-form card-six-card" style={{ background: backgroundColor }}>
  <div className="card-six-card_header"> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path fill={textColor} d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
    </svg>
    <h1 className="card-six-form_heading" style={{ color: textColor }}>Sign in</h1>
  </div>
  <div className="card-six-field">
    <label for="card-six-username" style={{ color: textColor }}>Username</label>
    <input className="card-six-input" name="username" type="text" placeholder="Username" id="username"/>
  </div>
  <div className="card-six-field">
    <label for="card-six-password" style={{ color: textColor }}>Password</label>
    <input className="card-six-input" name="user_password" type="password" placeholder="Password" id="password"/>
  </div>
  <div className="card-six-field">
    <button className="card-six-button" style={{ color: backgroundColor, background: textColor }}>Login</button>
  </div>
</form>
  )
}

export default CardSix