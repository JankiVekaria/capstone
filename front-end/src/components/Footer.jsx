import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer__list">
        <Link to={"/"}>
          <li className="footer__list--item">Home</li>
        </Link>

        <Link to="/about">
          <li className="footer__list--item">About Us</li>
        </Link>

        <Link to={"/contact"}>
          <li className="footer__list--item">Contact Us</li>
        </Link>
        <li className="footer__list--agreement">&copy; 2019 Toronto Rental Agency</li>
      </ul>

      <ul className="footer__icons">
        <a className="footer__icons--icon" href="http://facebook.com" target="blank"><li><i className="fab fa-facebook-square"></i></li></a>
        <a className="footer__icons--icon" href="http://twitter.com" target="blank"><li><i className="fab fa-twitter-square"></i></li></a>
        <a className="footer__icons--icon" href="http://instagram.com" target="blank"><li><i className="fab fa-instagram">
        </i></li></a>
      </ul>
    </div>
  )
}
