import React, { Component } from "react";
import "./Footer.css";
// import Logos from "../../images/logos.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import DraftsIcon from "@material-ui/icons/Drafts";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col">
              {/* <div className="w-100 text-center mb-3">Contact Us</div> */}
              <div className="d-flex justify-content-center">
                <div class="icon-outline">
                  <a
                    href="https://www.instagram.com/pioneers.2071/"
                    style={{ color: "white" }}
                  >
                    <InstagramIcon className="link-icon" />
                  </a>
                </div>
                <div class="icon-outline">
                  <a
                    href={`mailto:${"kaistua@gmail.com"}`}
                    style={{ color: "white" }}
                  >
                    <DraftsIcon className="link-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
