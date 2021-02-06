import "./Main.css";
import React, { Component } from "react";
import "reactjs-popup/dist/index.css";
import Planet from "../images/Main.png";
import Timeline from "./Timeline";
import TimelineEvent from "./TimelineEvent";
import { Link } from "react-router-dom";
import MobileTimeline from "./MobileTimeline";

import Arrow from "./Arrow";

import LiveTvIcon from "@material-ui/icons/LiveTv";
import EmojiEventsOutlinedIcon from "@material-ui/icons/EmojiEventsOutlined";
import HowToVoteIcon from "@material-ui/icons/HowToVote";

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
      <div className="main-background">
        <div className="container" style={{ marginTop: "20vh" }}>
          <div className="d-flex row mb-5">
            <div className="col-sm-8">
              <div className="mb-5">
                <div className="main-title">Pioneers 2071:</div>
                <div className="main-title" style={{ fontSize: "1.5rem" }}>
                  Questioning the Next 50 Years
                </div>
              </div>
              <div className="body-text">
                We provide you with future scenarios that describe the 3 global
                challenges for the next 50 years:
                <br />
                <br />
                Climate Change, Pandemic, and Artificial Intelligence.
                <br />
                <br />
                Choose a topic, come up with ideology, policies, and innovative
                ideas to resolve the issues, and present your ideas to the
                world!
                <br />
                <br />
                Feb 3rd, 2021 - Feb 7th, 2021 (GMT+9)
              </div>
            </div>
            <div className="col-sm-4">
              <img src={Planet} className="w-100" />
            </div>
          </div>
          <div class="d-flex justify-content-center row">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCNOqNdp9vcxEPR3PGib4paA"
            >
              <button className="btn-main mx-3 mb-3">
                Semi-Final Videos <LiveTvIcon className="mb-1" />
              </button>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/spreadsheets/d/1ZA8HD2zwJsBLPUgbvQ5qvbMKwaps6JYfKyti0w5i1Hs/edit#gid=1801011886"
            >
              <button className="btn-main mx-3 mb-3">
                Voters' Ranking <EmojiEventsOutlinedIcon className="mb-1" />
              </button>
            </a>
            <Link to="/vote">
              <button className="btn-main mx-3 mb-3">
                Final Round Vote <HowToVoteIcon className="mb-1" />
              </button>
            </Link>
          </div>
        </div>
        <div class="w-100">
          <Arrow />
        </div>
        <div class="container" style={{ marginTop: "100px" }}>
          <div className="subtitle-left">Official Video</div>
          <div className="d-flex justify-content-center">
            <iframe
              id="ytplayer"
              type="text/html"
              width="80%"
              height="500vh"
              src="https://www.youtube.com/embed/DD95jsLaWi8?autoplay=1&origin=http://pioneers.kaist.ac.kr"
              frameborder="0"
            ></iframe>
          </div>
        </div>
        <div style={{ marginTop: "100px" }}>
          <div className="container subtitle-left">Timeline</div>
          <div className="timeline-line mb-5">{this.state.renderComponent}</div>
        </div>
      </div>
    );
  }
}

export default Main;
