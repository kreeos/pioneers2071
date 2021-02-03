import "./Team.css";
import React, { Component } from "react";
import ProfileUi from "./ProfileUi";

import Subin from "../images/profiles/Subin.jpeg";
import Jaewook from "../images/profiles/Jaewook.jpeg";
import Chaeyoun from "../images/profiles/Chaeyoun.jpeg";
import Hojung from "../images/profiles/Hojung.jpeg";
import Mingyu from "../images/profiles/Mingyu.jpeg";
import Jiheon from "../images/profiles/Jiheon.jpeg";
import Yoonho from "../images/profiles/Yoonho.jpeg";
import Jisung from "../images/profiles/Jisung.jpeg";
import Yooseung from "../images/profiles/Yooseung.jpeg";
import Daeun from "../images/profiles/Daeun.jpeg";
import Seonghwan from "../images/profiles/Seonghwan.jpeg";
import Kyungbin from "../images/profiles/Kyungbin.jpeg";

class Team extends Component {
  render() {
    return (
      <div className="Team">
        <div className="container">
          <div className="team-title-div">
            <a>Team</a>
          </div>
          <div>
            <div className="team-category">
              <a>Student Committee</a>
            </div>
            <div class="row justify-content-md-center mb-5">
              <div class="col">
                <ProfileUi
                  imgUrl={Kyungbin}
                  name="Kyungbin Koh"
                  designation="Head of the Committee"
                />
              </div>
              <div class="col">
                <ProfileUi
                  imgUrl={Chaeyoun}
                  name="Chaeyoun Kim"
                  designation="Scenario Team<br/>Multimedia Team"
                />
              </div>
              <div class="col">
                <ProfileUi
                  imgUrl={Seonghwan}
                  name="Seonghwan Seo"
                  designation="Executive Secretary"
                />
              </div>
              <div class="col">
                <ProfileUi
                  imgUrl={Subin}
                  name="Subeen Lee"
                  designation="Planning Team<br/>Design Team"
                />
              </div>
              <div class="col">
                <ProfileUi
                  imgUrl={Yoonho}
                  name="Yoonho Lee"
                  designation="Scenario Team<br/>Multimedia Team"
                />
              </div>
              <div class="col">
                <ProfileUi
                  imgUrl={Jaewook}
                  name="Jaewook Lee"
                  designation="Scenario Team<br/>Debate Team"
                />
              </div>
              <div class="col">
                <ProfileUi
                  imgUrl={Mingyu}
                  name="Mingyu Jo"
                  designation="Leader of<br/>General Affairs"
                />
              </div>
              <div class="col">
                <ProfileUi
                  imgUrl={Hojung}
                  name="Hojung Cho"
                  designation="Leader of<br/>Multimedia Team"
                />
              </div>
              <div class="col">
                <ProfileUi
                  imgUrl={Daeun}
                  name="DaEun Choi"
                  designation="Leader of<br/>Design·Website Team"
                />
              </div>
              <div class="col">
                <ProfileUi
                  imgUrl={Jiheon}
                  name="Jiheon Choi"
                  designation="Leader of<br/>Planning Team"
                />
              </div>
              <div class="col">
                <ProfileUi
                  imgUrl={Yooseung}
                  name="Youseung Hong"
                  designation="Leader of<br/>PR Team"
                />
              </div>
              <div class="col">
                <ProfileUi
                  imgUrl={Jisung}
                  name="Jisung Hwang"
                  designation="Leader of<br/>Scenario Team"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
