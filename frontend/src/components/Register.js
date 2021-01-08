import "./Register.css";
import React, { Component } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Logo from "../images/logo_temp.png";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
  }

  clickLink(props) {}

  render() {
    return (
      <div className="Register">
        <div className="container mb-5">
          <div className="register-title-div">
            <a>Registration</a>
          </div>
          <div className="register-container">
            <div className="register-category">
              <a>Eligibility</a>
            </div>
            <div className="register-text">
              <a>
                Applicants should be enrolled in universities at the time of the
                application.
              </a>
            </div>
          </div>
          <div className="register-container">
            <div className="register-category">
              <a>Application Deadlines</a>
            </div>
            <div className="register-text">
              <a>Dec 14th, 2020 – Jan 15th, 2021 (GMT+9)</a>
            </div>
          </div>
          <div className="register-container">
            <div className="register-category">
              <a>Application Instructions</a>
            </div>
            <div className="register-text">
              <a>
                Applicants should form a team consisting of four to eight
                members to apply for the conference. To confirm registration,
                every member of the team must complete registration. We will
                send you the full version of your scenario and other documents
                that you will need in preparation for the conference once your
                team's registration is completed and confirmed.
                <br />
                <br />
                We will send out notification emails to participants within a
                week after the registration closes. Please contact us via email
                at kaistua@gmail.com with any inquiries.
              </a>
            </div>
          </div>
          <div className="btn-container">
            <Link to="/register/event">
              <button
                onClick={() => this.clickLink("/register/event")}
                className="btn-join"
              >
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
