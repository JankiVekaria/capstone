import React from 'react'

export default function Login() {
  return (
    <div className="login">
      <p className="login__nav">Home > login</p>
      <h1 className="login__headerOne">Login</h1>
      <h3 className="login__headerThreee">Login in to your account</h3>

      <div className="login__card">
        <form className="login__form">
          <div className="login__card--email">
            <span className="login__card--atSymbol"><i className="fas fa-at"></i></span>
            <input type="text" className="login__card--emailInput" placeholder="Enter your email..." />
          </div>

          <div className="login__card--password">
            <span className="login__card--lockSymbol"><i className="fas fa-lock"></i></span>
            <input type="password" className="login__card--passwordInput" placeholder="Enter your password..." />
          </div>

          <input type="submit" value="Login" className="login__card--btn" />
        </form>
      </div>
    </div>
  )
}
