import React, { Component } from "react";
import { Link } from "react-router-dom";

class Complete extends Component {
  render() {
    return (
      <div className="main-background">
        <div className="container mb-5">
          <div className="page-title">Application</div>
          <div className="page-center-text mb-5">
            Application Submitted!
            <br />
            If you want to edit your registration information,
            <br />
            Please contact us by E-mail (kaistua@gmail.com)
          </div>
          <div className="text-center pt-3 mb-3">
            <Link to="/home">
              <button className="btn-main">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Complete;
