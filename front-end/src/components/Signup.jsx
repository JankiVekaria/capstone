import React from 'react'

export default function Signup() {
  return (
    <>
      <div className="signup" id="signup">
        <p className="signup__nav">Home > signup</p>
        <h1 className="signup__headerOne">Sign Up</h1>
        <h3 className="signup__headerThreee">Enter your details here</h3>

        <div className="signup__card">
          <p className="signup__card--top">Account</p>
          <form className="signup__card--form">
            <div className="signup__card--username">
              <label htmlFor="username">Username</label>
              <input type="text" className="signup__card--usernameInput" id="username" />
            </div>

            <div className="signup__card--email">
              <label htmlFor="email">Email</label>
              <input type="email" className="signup__card--emailInput" id="email" />
            </div>

            <div className="signup__card--phone">
              <label htmlFor="phone">Phone</label>
              <input type="phone" className="signup__card--phoneInput" id="phone" />
            </div>

            <div className="signup__card--password">
              <label htmlFor="password">Password</label>
              <input type="password" className="signup__card--passwordInput" id="password" />
            </div>

            <div className="signup__card--password">
              <label htmlFor="confirm-password" className="signup__card--label">Confirm password</label>
              <input type="password" className="signup__card--passwordInput" id="confirm-password" />
            </div>

            <div className="signup__card--terms">
              <input type="checkbox" name="terms" id="terms" />
              <span htmlFor="terms">Accept <a href="#popup" id="terms">terms & conditions</a></span>
            </div>

            <div className="signup__card--submit">
              <button className="signup__card--submitBtn">Register</button>
            </div>
          </form>
        </div>
      </div>

      <div className="popup" id="popup">
        <div className="popup__content">
          <div style={{ border: '1px solid #ccc', padding: '20px' }}>
            <a href="#signup" className="popup__content--close"><i className="far fa-times-circle"></i></a>
            <div className="popup__content--text">
              <h1 className="popup__content--header">Terms and Conditions</h1>
              <h3 className="popup__content--headerTwo">About the new rent control exemption and the standard lease</h3>
              <p className="popup__content--paragraph">New buildings, additions to existing buildings and most new basement apartments that are occupied for the first time for residential purposes after November 15, 2018 are exempt from rent control. </p>

              <h3 className="popup__content--headerTwo">Wha`t landlords must know</h3>
              <p className="popup__content--paragraph">Landlords of exempt units must still use the standard lease. Nothing in a lease agreement can take away a right under the RTA.  </p>

              <h3 className="popup__content--headerTwo">Including rent control exemption in the standard lease</h3>
              <p className="popup__content--paragraph">Landlords of exempt units may include an additional term under section 15 of the lease stating that the unit is exempt from the rent increase guideline because it meets the exemption set out in section 6.1 of the Residential Tenancies Act, 2006. </p>

              <h3 className="popup__content--headerTwo">Purpose of the standard lease</h3>
              <p className="popup__content--paragraph">The standard lease uses easy-to-understand language to help:

              landlords and renters understand their rights and responsibilities
              reduce illegal terms in leases and misunderstandings caused by verbal tenancy agreements
              reduce the need for Landlord and Tenant Board hearings to resolve disputes </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

