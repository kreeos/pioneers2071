import './About.css';
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Logo from '../images/logo_temp.png';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="About">
        <div className="about-title-div">
          <a>
            About
          </a>
        </div>
        <div className="about-main-div">
          <div className="about-container">
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br/>
              nisi ut aliquip ex ea commodo consequat. <br/>
            </p>
          </div>
          <div className="about-imagediv">
            <img src={Logo} className="about-portrait"/>
            <p className="about-text">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,<br/>
              sed do eiusmod tempor incididunt <br/>
              ut labore et dolore magna aliqua.<br/>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
