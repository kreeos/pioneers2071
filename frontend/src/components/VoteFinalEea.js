import "./VotePage.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import LaunchIcon from "@material-ui/icons/Launch";

import Arrow from "./Arrow";

class Vote extends Component {
  constructor(props) {
    super(props);

    this.iframe =
      '<iframe src="https://formfacade.com/headless/113331629213605270902/home/form/1FAIpQLSdUfnGAvE5-hbxiJgRiyt8lnbJKFnYuPMUlcgNXq-js7R2zag" scrolling="no" frameBorder="0" width="100%" style="height:400px; /*change height as required*/ overflow-y:hidden;"></iframe>';
  }

  componentDidMount() {
    const script = document.createElement("script");

    script.src =
      "https://formfacade.com/include/113331629213605270902/form/1FAIpQLSdUfnGAvE5-hbxiJgRiyt8lnbJKFnYuPMUlcgNXq-js7R2zag/bootstrap.js?div=ff-compose";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div class="Vote">
        <div>
          <div className="mb-5 container">
            <div className="vote-title-div">
              <a>Education, Economics, and AI</a>
            </div>
            <div className="vote-main-div">
              <a>
                Final round voting for "Education, Economics, and AI" Division
                is now open!
                <br />
                Please vote based on the teams' written solutions, posters, and
                highlight videos of debates.
              </a>
            </div>
            <div className="w-100 d-flex justify-content-center button-guide mb-3">
              Click the button below to check out finalists!
            </div>
            <div className="w-100 d-flex justify-content-center">
              <Link target="_blank" to="/finalists#eea">
                <button className="btn-long mx-3 mb-3">
                  Find your favorite team! <LaunchIcon className="ml-1 mb-1" />
                </button>
              </Link>
            </div>
            <div class="w-100">
              <Arrow />
            </div>
          </div>
        </div>
        <div id="main">
          <div class="second-page py-4">
            <div class="container">
              <div class="container" id="ff-compose" iframe={this.iframe}></div>
            </div>
          </div>
        </div>
        <div class="padding"></div>
      </div>
    );
  }
}

export default Vote;
