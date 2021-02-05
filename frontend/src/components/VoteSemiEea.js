import "./VotePage.css";
import React, { Component } from "react";
import LaunchIcon from "@material-ui/icons/Launch";

import Arrow from "./Arrow";

class Vote extends Component {
  constructor(props) {
    super(props);

    this.iframe =
      '<iframe src="https://formfacade.com/headless/113331629213605270902/home/form/1FAIpQLSd44bVJ2ohW_2PcyVseqOQvyc5K_3_xGGzLb85pqix7XXEoyw" scrolling="no" frameBorder="0" width="100%" style="height:400px; /*change height as required*/ overflow-y:hidden;"></iframe>';
  }

  componentDidMount() {
    const script = document.createElement("script");

    script.src =
      "https://formfacade.com/include/113331629213605270902/form/1FAIpQLSd44bVJ2ohW_2PcyVseqOQvyc5K_3_xGGzLb85pqix7XXEoyw/bootstrap.js?div=ff-compose";
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
                Voting for "Education, Economics, and AI" Division is now open!
                <br />
                Please vote based on the teams' written solutions, posters, and
                highlight videos of debates.
              </a>
            </div>
            <div className="w-100 d-flex justify-content-center button-guide mb-3">
              Click the button below for more information!
            </div>
            <div className="w-100 d-flex justify-content-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/drive/folders/1uLXquQb3gevRf1B5kcW5ZV1394cfdgHq"
              >
                <button className="btn-long mx-3 mb-3">
                  Find your favorite teams! <LaunchIcon className="ml-1 mb-1" />
                </button>
              </a>
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
