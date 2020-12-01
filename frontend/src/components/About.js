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
                The UN's Future Report said, "Why do we predict the future? 
                Running without knowing the future is like running with your eyes closed." 
                We can live without knowing the future, 
                but if we draw and prepare for the future, 
                we will surely be able to create a better future society. 
                <br/>
                <br/>
                The main focus of the conference is to provide students 
                with the possibility to search and think about potential issues 
                in the next 50 years, technology, and new information.
                We look forward to having students think and discuss 
                'What kind of society is a good society?' 
                <br/>
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
                Let's say that when humans could no longer live on Earth, 
                they sought habitable planets. 
                They have found three planets like Earth, 
                each of which has three global issues that can happen over the next 50 years: 
                <br/>
                <br/>
                1. Pandemic 
                <br/>
                2. Education/Economy 
                <br/>
                3. Environment 
                <br/>
                <br/>
                The participant will choose which planet to live on. 
                We need to solve the planet's challenges now 
                so that we don't repeat what happened decades ago. 
                <br/>
              </a>
            </div>
          </div>
          <div className="about-container">
            <div className="about-category">
              <a>
                Conference<br/>
                Process
              </a>
            </div>
            <div className="about-text">
              <a>
                Before the conference begins, each team will receive a scenario and 
                default data on the planet they live on. 
                They do a social and scientific analysis of 
                what kind of society is formed on this planet, 
                and how to solve the biggest challenges that mankind is facing today. 
                They will work together to discuss and discuss what ideologies, policies, 
                technologies, and ideas we should lead this society to.
                <br/><br/>
                The Pioneers on this planet can only be one team. 
                To that end, we need to come up with good ideas, 
                policies, and Innovative Ideas. 
                There will be discussions with other candidates for Pioneers, 
                and elections for Pioneers will take place. 
                <br/><br/>
                Be a pioneer to save the people living on this planet!
                <br/>
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
                Before the conference begins, each team will receive a scenario and 
                default data on the planet they live on. 
                They do a social and scientific analysis of 
                what kind of society is formed on this planet, 
                and how to solve the biggest challenges that mankind is facing today. 
                They will work together to discuss and discuss what ideologies, policies, 
                technologies, and ideas we should lead this society to.
                <br/><br/>
                The Pioneers on this planet can only be one team. 
                To that end, we need to come up with good ideas, 
                policies, and Innovative Ideas. 
                There will be discussions with other candidates for Pioneers, 
                and elections for Pioneers will take place. 
                <br/><br/>
                Be a pioneer to save the people living on this planet!
                <br/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
