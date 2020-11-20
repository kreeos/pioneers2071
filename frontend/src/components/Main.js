import './Main.css';
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Logo from '../images/logo_temp.png';
import axios from 'axios'
import Timeline from './Timeline'
import TimelineEvent from './TimelineEvent'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  sendRequest = async (newSubscriber) => {
      try {
          const resp = await axios.post('http://aria.sparcs.org:55554/api/landing/post', newSubscriber);
          // console.log(resp.data);
          alert("Successfully Subscribed with an address : " + resp.data);
          window.location.reload(false);
      } catch (err) {
          // Handle Error Here
          alert("Unknown error has occured. Please try again.");
          // console.error(err);
      }

  };

  handleSubmit(event) {
    let cond = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let validity = cond.test(this.state.value);
    if (!(validity)) 
      alert('Your email address is in a wrong format. Please check again');
    else {
      const newSubscriber = {
        email: this.state.value
      };
      console.log(newSubscriber)
      this.sendRequest(newSubscriber);
    }

    event.preventDefault();
  }

  render() {
    return (
      <div className="Main">
        <div className="main-container">
          <div className="slogan-div">
            <a>
              Pioneers 2071: <br/>
              Questioning the Next 50 Years     
            </a>
          </div>
          <div className="main-welcome-div">
            <a>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br/>
            </a>
          </div>
          <div className="Popup-container">
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
                initial={true}
                numEvents={5}
                color='#FFFFFF'
                title='Registration Open'
                subtitle='Registration for Pioneers 2071 opens'
                // subtitle='Friday, December 18th 2020'
                date='Dec. 18th, 2020'
              />
              <TimelineEvent
                numEvents={5}
                color='#FFFFFF'
                title='Registration Close'
                subtitle='Registration for Pioneers 2071 closes'
                // subtitle='Friday, January 1st 2021'
                date='Jan. 1st, 2021'
              />
              <TimelineEvent
                numEvents={5}
                color='#FFFFFF'
                title="Information Distribution"
                subtitle='Notifications, Documents, and Resources sent to Participants'
                // subtitle='Monday, January 4th 2021'
                date='Jan. 4th, 2021'
              />
              <TimelineEvent
                numEvents={5}
                color='#FFFFFF'
                title="Proposal Submission"
                subtitle='Proposal submitted by participants'
                // subtitle='Monday, January 18th 2021'
                date='Jan. 18th, 2021'
              />
              <TimelineEvent
                numEvents={5}
                color='#FFFFFF'
                title="Announcement"
                subtitle='Result of Round 1 Announced'
                // subtitle='Friday, January 22th 2021'
                date='Jan. 22th, 2021'
              />
            </Timeline>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
