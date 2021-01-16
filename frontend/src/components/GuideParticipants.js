import "./Guide.css";
import React, { Component } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Logo from "../images/logo_temp.png";
import { Link } from "react-router-dom";

class GuideParticipants extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Guide">
        <div className="container mb-5">
          <div className="guide-title-div">
            <a>Guide for Participants</a>
          </div>
          <div className="guide-container-participants">
            <p className="guide-text-participants">
              Human beings have encountered a significantly critical situation
              that might threaten their existence. To overcome such a crisis,
              develop policies and innovative ideas as competent policymakers
              and innovators.
            </p>
          </div>
          <div className="guide-container">
            <div className="guide-category">
              <a>Prior to the conference</a>
            </div>
            <div className="guide-text">
              <a>
                Participants submit three types of documents in preparation for
                the conference.
              </a>
              <p>
                <div className="guide-list-container">
                  <div>
                    <li></li>
                  </div>
                  <div>
                    During the preliminary round, participating teams should
                    present their collections of policies and product proposals
                    with regard to problems in the given scenario. The teams
                    should also submit links for their proposals in the form of
                    Google Presentation in advance.
                  </div>
                </div>
                <div className="guide-list-container">
                  <div>
                    <li></li>
                  </div>
                  <div>
                    A written solution is the most crucial document that
                    participants should develop for the conference. Prior to the
                    debates, other teams can review your team’s written solution
                    and ask questions about it. Voters also make their decisions
                    based mainly on each team’s written solution.
                  </div>
                </div>
                <div className="guide-list-container">
                  <div>
                    <li></li>
                  </div>
                  <div>
                    All the teams should submit posters for promoting their
                    collection of policies and products. Posters submitted by
                    each team will be uploaded to the conference website and
                    shown to all participants. Voters will refer to the uploaded
                    posters when voting. Content included in the posters can be
                    freely formed but must promote the collection of policies
                    and products of each team.
                  </div>
                </div>
              </p>
            </div>
          </div>
          <div className="guide-container">
            <div className="guide-category">
              <a>During the conference</a>
            </div>
            <div className="guide-text">
              <a>
                Teams present their ideas and debate how each other’s proposals
                may or may not be effective in resolving the crisis and making
                the world a better place. The purpose of the debate is to
                promote the collections of policies and products of each team
                and verify and improve the validity and rationality of the
                results derived from other teams. The master of ceremonies (MC)
                conducts the debates, and 2-4 teams that have chosen the same
                topic compete in the same session’s debate. Each team selects
                two free debaters to participate in the debate, and other
                members can also participate and express their opinions in the
                debate after the MC grants them the right to speak.
              </a>
            </div>
          </div>
          <div className="guide-button-div">
            <a
              target="blank"
              href="https://drive.google.com/drive/folders/1N4jsS9zycxCT-HiMgixxEvSh7xbMo7Am?usp=sharing"
            >
              <button className="btn-join">Download</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default GuideParticipants;
