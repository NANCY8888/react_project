import React from 'react';
import './Footer.css';
//import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons'
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 My Website. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className="social-icons">
              <li><SocialIcon url="https://twitter.com" /></li>
              <li><SocialIcon url="https://facebook.com" /></li>
              <li><SocialIcon url="https://instagram.com" /></li>
              <li><SocialIcon url="https://youtube.com" /></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
