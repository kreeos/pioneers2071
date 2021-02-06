import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="main-background">
        <div className="container mb-5">
          <div className="page-title">About Pioneers 2071</div>
          <div className="category-div">
            <div className="category-title">Purpose</div>
            <div className="category-text">
              The main purpose of the conference is to provide students with the
              opportunity to research and think about potential crises that can
              happen in the next 50 years and propose possible solutions along
              with policies, technology, and new innovative ideas.
            </div>
          </div>
          <div className="category-div">
            <div className="category-title">Description</div>
            <div className="category-text">
              We will present three scenarios of potential crises as follows,
              and applicants will choose a topic they would like to explore:
              <br />
              <br />
              Environment: Pollution and Climate Change
              <br />
              The Next Outbreak: Pandemic
              <br />
              Education, Economics, and AI
              <br />
              <br />
              Applicants form a group of four to eight participants and register
              as a team. Each team must come up with original ideology,
              policies, and innovative ideas that they think will resolve the
              issues described in the scenario in preparation for the
              conference. Teams then present their ideas and debate how each
              other’s proposals may or may not be effective in resolving the
              crisis and making the world a better place.
            </div>
          </div>
          <div className="category-div">
            <div className="category-title">
              Operating Procedures of the Conference
            </div>
            <div className="category-text">
              The conference will be conducted{" "}
              <span className="font-weight-bold font-italic">online </span>
              for <span className="font-weight-bold font-italic">six days</span>
              . During the conference, teams present their ideas and debate how
              each other’s proposals may or may not be effective in resolving
              the crisis and making the world a better place. The purpose of the
              debate is to promote the collections of policies and products of
              each team and verify and improve the validity and rationality of
              the results derived from other teams.
              <br />
              <br />
              Anyone, including non-participants, can register as a voter
              online. Once you are given a code via email, which you can insert
              <a
                style={{ color: "white", textDecoration: "underline" }}
                className="font-weight-bold mx-1"
                href="/register/vote"
              >
                here
              </a>
              to proceed with voting. You can vote for one of the three teams
              participating in the ongoing debate.
              <br />
              <br />
              Teams to advance to the final are selected based on the results of
              public voting and the evaluation of other participants and judges.
              Voters receive different points based on the status of the team
              that they support being advanced to the final or receiving a
              reward.
            </div>
          </div>
          <div className="category-div">
            <div className="category-title">Award</div>
            <div className="category-text">
              Once a team wins in their division, the board of judges will
              select one best team to receive the Grand Award. The other
              division winners receive the Gold Award.
              <br />
              Grand Award (Top 1 team in total): $3000
              <br />
              Gold Award (2 teams in total): $2000
              <br /> <br />
              The second-place winners of each division are given the silver
              award.
              <br />
              Silver (2 teams): $1000
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
