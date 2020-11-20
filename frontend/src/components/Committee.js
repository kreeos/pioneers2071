import './Contact.css';
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Logo from '../images/logo_temp.png';

class Committee extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Committee">
        <div className="committee-title-div">
          <a>
            Committee
          </a>
        </div>
        <div className="committee-main-div">
          <div className="committee-container-left">
            <img src={Logo} className="committee-portrait"/>
            <p className="committee-text">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,<br/>
              sed do eiusmod tempor incididunt <br/>
              ut labore et dolore magna aliqua.<br/>
            </p>
          </div>
          <div className="committee-container-right">
            <p className="committee-text">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,<br/>
              sed do eiusmod tempor incididunt <br/>
              ut labore et dolore magna aliqua.<br/>
            </p>
            <img src={Logo} className="committee-portrait"/>
          </div>
          <div className="committee-container-left">
            <img src={Logo} className="committee-portrait"/>
            <p className="committee-text">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,<br/>
              sed do eiusmod tempor incididunt <br/>
              ut labore et dolore magna aliqua.<br/>
            </p>
          </div>
          <div className="committee-container-right">
            <p className="committee-text">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,<br/>
              sed do eiusmod tempor incididunt <br/>
              ut labore et dolore magna aliqua.<br/>
            </p>
            <img src={Logo} className="committee-portrait"/>
          </div>
          <div className="committee-container-left">
            <img src={Logo} className="committee-portrait"/>
            <p className="committee-text">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,<br/>
              sed do eiusmod tempor incididunt <br/>
              ut labore et dolore magna aliqua.<br/>
            </p>
          </div>
          <div className="committee-container-right">
            <p className="committee-text">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,<br/>
              sed do eiusmod tempor incididunt <br/>
              ut labore et dolore magna aliqua.<br/>
            </p>
            <img src={Logo} className="committee-portrait"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Committee;
