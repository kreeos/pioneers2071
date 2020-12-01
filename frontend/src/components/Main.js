import './Main.css';
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Logo from '../images/logo-main.png';
import Planet from '../images/icon-planet.png'
import axios from 'axios'
import Timeline from './Timeline'
import TimelineEvent from './TimelineEvent'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag_one: false, 
      flag_two: false, 
      flag_three: false, 
      flag_four: false,
    };
  }

  componentDidMount() {
    console.log(Date.now())
    let now = Date.now()
    let flag_one = now > 1609491600000
    let flag_two = now > 1609750800000
    let flag_three = now > 1610960400000
    let flag_four = now > 1611306000000
    this.setState({
      flag_one: flag_one,
      flag_two: flag_two,
      flag_three: flag_three,
      flag_four: flag_four,
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="Main">
        <div className="main-container">
          <div className="main-content">
            <div className="main-text-div">
              <div className="slogan-div">
                <div className="title-div">
                  Pioneers 2071:
                </div>
                <div className="subtitle-div">
                  Questioning the Next 50 Years     
                </div>
              </div>
              <div className="main-welcome-div">
                <a>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br/>
                </a>
                <br/>
                <p>
                  Feb 9th, 2021 - Feb 14th, 2021 (KST) 
                </p>
              </div>
            </div>
            <div className="main-logo-div">
              <img src={Planet} className="logo"/ >
            </div>
          </div>
          <div className="button-div">
            <a href="/register/event" className="main-btn-join"> Join Now </a>
          </div>
        </div>
        <div className="timeline-container">
          <div className="timeline-title">
            Timeline<br/>
          </div> 
          <div className="timeline-line">
            <Timeline minEvents={5} varient="small" placeholder>
              <TimelineEvent
                numEvents={5}
                init={true}
              />
              <TimelineEvent
                initial={true}
                numEvents={5}
                color='#C4C4C4'
                title='Registration Open'
                subtitle='Registration for Pioneers 2071 opens'
                // subtitle='Friday, December 18th 2020'
                date='Dec. 18th'
                flag_cur={this.state.flag_one}
                flag_prev={true}              
              />
              <TimelineEvent
                numEvents={5}
                color='#C4C4C4'
                title='Registration Close'
                subtitle='Registration for Pioneers 2071 closes'
                // subtitle='Friday, January 1st 2021'
                date='Jan. 1st'
                flag_cur={this.state.flag_two}
                flag_prev={this.state.flag_one}
              />
              <TimelineEvent
                numEvents={5}
                color='#C4C4C4'
                title="Information Distribution"
                subtitle='Notifications, Documents, and Resources sent to Participants'
                // subtitle='Monday, January 4th 2021'
                date='Jan. 4th'
                flag_cur={this.state.flag_three}
                flag_prev={this.state.flag_two}
              />
              <TimelineEvent
                numEvents={5}
                color='#C4C4C4'
                title="Proposal Submission"
                subtitle='Proposal submitted by participants'
                // subtitle='Monday, January 18th 2021'
                date='Jan. 18th'
                flag_cur={this.state.flag_four}
                flag_prev={this.state.flag_three}
              />
              <TimelineEvent
                numEvents={5}
                color='#C4C4C4'
                title="Announcement"
                subtitle='Result of Round 1 Announced'
                // subtitle='Friday, January 22th 2021'
                date='Jan. 22nd'
                flag_cur={false||this.state.flag_four}
                flag_prev={this.state.flag_four}
              />
              <TimelineEvent
                numEvents={5}
                end={true}
                flag_cur={this.state.flag_four}
              />
            </Timeline>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
