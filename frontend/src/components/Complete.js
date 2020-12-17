import "./Complete.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Complete extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Complete">
        <div className="complete-container-whole">
          <div className="complete-title-div">
            <a>Application</a>
          </div>
          <div className="complete-main-div">
            <a>
              Application Submitted!
              <br />
              If you want to edit your registration information,
              <br />
              Please contact us by E-mail (kaistua@gmail.com)
            </a>
          </div>
          <div className="complete-container">
            <Link to="/home">
              <button className="btn-join">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Complete;
