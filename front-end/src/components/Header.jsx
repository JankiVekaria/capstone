import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import Auth from './Auth';

export default class Header extends Component {

  state = {
    isHovered: false,
    language: ''
  }

  hoverHandler = () => {
    this.setState({
      isHovered: true
    })
  }

  unhoverHandler = () => {
    this.setState({
      isHovered: false
    })
  }


  languageEnglish = () => {
    this.setState({
      language: 'English'
    })
  }

  languageFrench = () => {
    this.setState({
      language: 'French'
    })
  }

  render() {
    return (
      <>
        <header className="header">
          <div className="header__container">
            <Link to={"/"}>
              <img src="../assets/icons/deal.svg" alt="House rental logo" className="header__container--logo" />
              <span className="header__container--textTop">TORONTO </span>
              <span className="header__container--textBottom">RENT A HOUSE </span>
            </Link>

            <nav className="header__nav">
              <ul className="header__nav--list">
                <Link onClick={() => Auth.login()} to={"/advertisement_upload"}>
                  <li className="header__nav--item" title="upload your ad">List your rental advertisement <i className="header__nav--upload fas fa-upload"></i></li>
                </Link>

                <Link to={"/search"}>
                  <li className="header__nav--item" title="Search for property" style={{ paddingBottom: '21px' }}>Search<i className="fas fa-search" style={{ marginLeft: '4px' }}></i></li>
                </Link>

                <Link to={"/login"}>
                  <li className="header__nav--item" title="login to your account">Login <i className="header__nav--login fas fa-sign-in-alt"></i></li>
                </Link>

                <Link to={"/signup"}>
                  <li className="header__nav--item" title="Create an account">Sign Up <i className="header__nav--signup fas fa-user-plus"></i></li>
                </Link>

                <li className="header__nav--item header__nav--lastItem" title="Create an account" style={{ marginTop: '6px' }} onMouseEnter={this.hoverHandler} onMouseLeave={this.unhoverHandler}>
                  <span><i className={this.state.language === "French" ? "header__nav--frFlag" : "header__nav--ukFlag"}></i></span>
                  <i className={this.state.isHovered ? "fas fa-angle-up" : "fas fa-angle-down"} style={{ position: 'relative', top: '-5px', left: '4px' }}></i>

                  <ul className="header__nav--language">

                    <li onClick={this.languageEnglish}><i className="header__nav--ukFlag"></i><span>EN</span></li>

                    <li onClick={this.languageFrench}><i className="header__nav--frFlag"></i><span>FR</span></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    )
  }
}








