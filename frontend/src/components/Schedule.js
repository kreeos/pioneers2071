import React, { Component } from "react";
import Daily from "../images/schedule_daily.png";
import Calendar from "../images/schedule_calendar.png";

class Schedule extends Component {
  render() {
    return (
      <div className="main-background">
        <div className="container mb-5">
          <div className="page-title-small">Schedule</div>
          <div className="category-div">
            <div className="category-title">Calendar</div>
            <div className="category-text text-center">
              <img style={{ width: "90%" }} src={Calendar} />
            </div>
          </div>
          <div className="category-div">
            <div className="category-title">Conference Timetable</div>
            <div className="category-text text-center">
              <img style={{ width: "100%" }} src={Daily} />
            </div>
          </div>
          <div className="category-div">
            <div className="category-title">
              Operating Procedures of the Conference
            </div>
            <div className="category-text">
              The conference will be conducted online for{" "}
              <b className="font-italic">six days</b>. Prior to the conference,
              each team must prepare their policies, technology, and new
              innovative ideas. As Zoom will be used for presentation,
              progression, and debates during the conference, participants
              should prepare in advance. The conference will be streamed on
              YouTube to facilitate voting by general voters.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule;
