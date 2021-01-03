import "./Guide.css";
import React, { Component } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Logo from "../images/logo_temp.png";
import { Link } from "react-router-dom";
class GuideVoters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Guide">
        <div className="mb-5 container">
          <div className="guide-title-div">
            <a>Guide for Voters</a>
          </div>
          <div className="guide-container">
            <div className="guide-category">
              <a>
                Voting <br />
                Procedure
              </a>
            </div>
            <div className="guide-text">
              <a>
                Anyone can participate in the voting process. Voters can enter
                the voting page during the conference. Once you are given a code
                via email, you can insert it to proceed with voting. You can
                vote for one of the three teams participating in the ongoing
                debate.
                <br />
              </a>
            </div>
          </div>
          <div className="guide-container">
            <div className="guide-category">
              <a>
                Items Reflected <br />
                in Voting <br />
                (Effects of Votes)
              </a>
            </div>
            <div className="guide-text">
              <a>
                Teams to advance to the final are selected based on the results
                of public voting and peer evaluation according to a 7:3 ratio.
                Voters receive different points according to the status of the
                team that they support being advanced to the final or receiving
                a reward. Voters can cast only one vote per debate. As 12
                debates are performed over six days, voters can vote a maximum
                of 12 times. Voting can be performed until the corresponding
                debate is over. Voters who gain the highest points at the time
                of the award ceremony receive gifts.
              </a>
            </div>
          </div>
          <div className="guide-button-div">
            <Link to="/register/vote">
              <button className="btn-join">Register as Voter</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GuideVoters;
