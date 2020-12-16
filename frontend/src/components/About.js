import './About.css';
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Logo from '../images/logo_temp.png';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="About">
        <div className="about-title-div">
          <a>
            About Pioneers 2071
          </a>
        </div>
        <div className="about-main-div">
          <div className="about-container">
            <div className="about-category">
              <a>
                Purpose
              </a>
            </div>
            <div className="about-text">
              <a>
                The main purpose of the conference is to provide students with 
                the opportunity to research and think about potential crises 
                that can happen in the next 50 years and propose possible solutions 
                along with policies, technology, and new innovative ideas. 
              </a>
            </div>
          </div>
          <div className="about-container">
            <div className="about-category">
              <a>
                Description
              </a>
            </div>
            <div className="about-text">
              <a>
                We will present three scenarios of potential crises as follows, 
                and applicants will choose a topic they would like to explore:
                <br/><br/>
                Environment: Pollution and Climate Change
                <br/>
                The Next Outbreak: Pandemic
                <br/>
                Education, Economics, and AI
                <br/><br/>
                Applicants form a group of four to eight participants and register 
                as a team. Each team must come up with original ideology, policies, 
                and innovative ideas that they think will resolve the issues described 
                in the scenario in preparation for the conference. Teams then present 
                their ideas and debate how each other’s proposals may or may not be 
                effective in resolving the crisis and making the world a better place.

              </a>
            </div>
          </div>
          <div className="about-container">
            <div className="about-category">
              <a>
                Operating Procedures of the Conference
              </a>
            </div>
            <div className="about-text">
              <a>
                The conference will be conducted <b className="bold-italic">online</b> 
                for <b className="bold-italic">six days</b>. 
                During the conference, teams present their ideas and debate 
                how each other’s proposals may or may not be effective in resolving 
                the crisis and making the world a better place. 
                The purpose of the debate is to promote the collections of policies 
                and products of each team and verify and improve the validity and 
                rationality of the results derived from other teams. 
                <br/><br/>
                Anyone can participate in the voting process. 
                Please read the guide for voters, register, and get a code. 
                Once you are given a code via email, which you can insert  
                <a className="link-in-text" href="/vote">here</a>   
                to proceed with voting. You can vote for one of the three teams 
                participating in the ongoing debate.
                <br/><br/>
                Teams to advance to the final are selected based on the results of 
                public voting and peer evaluation according to a 7:3 ratio. 
                Voters receive different points based on the status of the team that 
                they support being advanced to the final or receiving a reward. 
              </a>
            </div>
          </div><div className="about-container">
            <div className="about-category">
              <a>
                Award
              </a>
            </div>
            <div className="about-text">
              <a>
              The winners of each division are given the following awards: 
              <br/>
              Grand Award (Top 1 team): $3000 
              <br/>
              Gold (2 teams): $2000
              <br/>
              <br/>
              The second-place winners of each division are given the silver award: 
              <br/>
              Silver (3 teams): $1000
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
