import './Committee.css';
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Logo from '../images/logo_temp.png';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Contact">
        <div className="contact-title-div">
          <a>
            Contact Us
          </a>
        </div>
        <div className="contact-main-div">
          <a>
            Some words here<br/>
            and More here
          </a>
        </div>
        <div className="contact-container">
          <div className="contact">
            <img src={Logo} className="contact-logo"/>
            <div className="contact-text">
              <span>Example@kaist.ac.kr</span>
            </div>
          </div>
          <div className="contact">
            <img src={Logo} className="contact-logo"/>
            <div className="contact-text">
              <a>010-1234-5678</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
