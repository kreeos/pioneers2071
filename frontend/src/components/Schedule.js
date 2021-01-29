import "./Schedule.css";
import React, { Component } from "react";
import Daily from "../images/schedule_daily.png";
import Calendar from "../images/schedule_calendar.png";

class Schedule extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Schedule">
        <div className="container mb-5">
          <div className="schedule-title-div">
            <a>Schedule</a>
          </div>
          <div className="schedule-main-div">
            <div className="schedule-container">
              <div className="schedule-category">
                <a>Calendar</a>
              </div>
              <div className="schedule-text d-flex justify-content-center">
                <div style={{ width: "90%" }}>
                  <img className="schedule-calendar w-100" src={Calendar} />
                </div>
              </div>
            </div>
            <div className="schedule-container">
              <div className="schedule-category">
                <a>Conference Timetable</a>
              </div>
              <div className="schedule-text">
                <img className="schedule-calendar mb-3" src={Daily} />
              </div>
            </div>
            <div className="schedule-container">
              <div className="schedule-category">
                <a>Operating Procedures of the Conference</a>
              </div>
              <div className="schedule-text">
                <a>
                  The conference will be conducted online for{" "}
                  <b className="bold-italic">six days</b>. Prior to the
                  conference, each team must prepare their policies, technology,
                  and new innovative ideas. As Zoom will be used for
                  presentation, progression, and debates during the conference,
                  participants should prepare in advance. The conference will be
                  streamed on YouTube to facilitate voting by general voters.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule;
