import React, { Component } from "react";
import "reactjs-popup/dist/index.css";

class Contact extends Component {
  render() {
    return (
      <div className="main-background">
        <div className="container mb-5">
          <div className="page-title">Contact</div>
          <div className="page-center-text mb-5 pb-3">
            Please feel free to contact us <br /> if you have any questions
            about the conference.
            <br />
            <br />
            E-mail | kaistua@gmail.com <br />
            Instagram | @pioneers.2071
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
