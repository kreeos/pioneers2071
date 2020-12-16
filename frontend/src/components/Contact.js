import './Committee.css';
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Instagram from '../images/icon-instagram.png';
import Mail from '../images/icon-mail.png';

class Contact extends Component {
  constructor(props) {
    super(props);

  }

  clickLink(props) {
    if (props == "insta")
      window.open('https://www.instagram.com/pioneers.2071');
    if (props == "mail")
      window.open('mailto:kaistua@kaist.ac.kr')
  }

  render() {
    return (
      <div className="Contact">
        <div className="contact-container-whole">
          <div className="contact-title-div">
            <a>
              Contact
            </a>
          </div>
          <div className="contact-main-div">
            <a>
              Please feel free to contact us if you have any questions about the conference. 
            </a>
          </div>
          <div className="contact-container">
            <div className="contact">
              <div className="contact-text">
               E-mail | kaistua@gmail.com <br/>
               Instagram | @pioneers.2071
              </div>
            </div>
            <div className="contact-logo-div">
              <img onClick={() => this.clickLink("mail")} src={Mail} className="contact-logo-mail"/>
              <img onClick={() => this.clickLink("insta")} src={Instagram} className="contact-logo-instagram"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
