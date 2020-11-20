import './Register.css';
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Logo from '../images/logo_temp.png';

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Register">
        <div className="register-title-div">
          <a>
            Register
          </a>
        </div>
        <div className="register-container">
          <p className="register-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br/>
            nisi ut aliquip ex ea commodo consequat. <br/>
          </p>
        </div>
        <a href="/register/event" className="btn-join">Register</a>
      </div>
    );
  }
}

export default Register;
