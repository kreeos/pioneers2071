import "./Main.css";
import React, { Component } from "react";
import Footer from "./common/Footer";
import "reactjs-popup/dist/index.css";
import Planet from "../images/Main.png";
import Timeline from "./Timeline";
import TimelineEvent from "./TimelineEvent";
import { Link } from "react-router-dom";
import MobileTimeline from "./MobileTimeline";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag_one: false,
      flag_two: false,
      flag_three: false,
      flag_four: false,
    };
    let width = window.innerWidth;
    if (width > 768) {
      this.state.renderComponent = (
        <Timeline minEvents={4} varient="small" placeholder>
          <TimelineEvent numEvents={4} init={true} />
          <TimelineEvent
            initial={true}
            numEvents={4}
            color="#C4C4C4"
            title="Registration Opens"
            subtitle="Registration for Pioneers 2071 opens"
            // subtitle='Friday, December 18th 2020'
            date="Dec. 14th"
            flag_cur={this.state.flag_one}
            flag_prev={true}
          />
          <TimelineEvent
            numEvents={4}
            color="#C4C4C4"
            title="Registration Closes"
            subtitle="Registration for Pioneers 2071 closes"
            // subtitle='Friday, January 1st 2021'
            date="Jan. 15th"
            flag_cur={this.state.flag_two}
            flag_prev={this.state.flag_one}
          />
          <TimelineEvent
            numEvents={4}
            color="#C4C4C4"
            title="Proposal Submission"
            subtitle="Proposal submitted by participants"
            // subtitle='Monday, January 18th 2021'
            date="Jan. 22nd"
            flag_cur={this.state.flag_four}
            flag_prev={this.state.flag_three}
          />
          <TimelineEvent
            numEvents={4}
            color="#C4C4C4"
            title="Announcement"
            subtitle="Result of Round 1 Announced"
            // subtitle='Friday, January 22th 2021'
            date="Jan. 25th"
            flag_cur={false || this.state.flag_four}
            flag_prev={this.state.flag_four}
          />
          <TimelineEvent
            numEvents={4}
            end={true}
            flag_cur={this.state.flag_four}
          />
        </Timeline>
      );
    } else {
      this.state.renderComponent = <MobileTimeline />;
    }
  }

  componentDidMount() {
    let now = Date.now();
    let flag_one = now > 1609491600000;
    let flag_two = now > 1609750800000;
    let flag_three = now > 1610960400000;
    let flag_four = now > 1611306000000;
    this.setState({
      flag_one: flag_one,
      flag_two: flag_two,
      flag_three: flag_three,
      flag_four: flag_four,
    });
  }

  render() {
    return (
      <div className="Main">
        <div className="container" style={{ marginTop: "20vh" }}>
          <div className="main-content row">
            <div className="col-sm-8">
              <div style={{ textAlign: "left" }} className="mb-5">
                <div style={{ fontSize: "2.5rem", fontWeight: "800" }}>
                  Pioneers 2071:
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: "800" }}>
                  Questioning the Next 50 Years
                </div>
              </div>
              <div style={{ textAlign: "left" }} className="body-text">
                <div>
                  We provide you with future scenarios that describe the 3
                  global challenges for the next 50 years:
                  <br />
                  <br />
                  Climate Change, Pandemic, and Artificial Intelligence.
                  <br />
                  <br />
                  Choose a topic, come up with ideology, policies, and
                  innovative ideas to resolve the issues, and present your ideas
                  to the world!
                </div>
                <br />
                <p>Feb 3th, 2021 - Feb 7th, 2021 (GMT+9)</p>
              </div>
            </div>
            <div className="col-sm-4">
              <img src={Planet} className="logo-main" />
            </div>
          </div>
          <div class="d-flex justify-content-center row">
            {/* <Link to="/register">
              <button className="main-btn-join mx-3 mb-3">Register Now</button>
            </Link> */}
            <Link to="/guide/voters">
              <button className="main-btn-join mx-3 mb-3">
                Register as Voter
              </button>
            </Link>
          </div>
        </div>
        <div style={{ marginTop: "100px" }}>
          <div className="timeline-title">
            <a>
              Timeline
              <br />
            </a>
          </div>
          <div className="timeline-line mb-5">{this.state.renderComponent}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
