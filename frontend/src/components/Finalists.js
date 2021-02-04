import "./Team.css";
import React, { Component } from "react";
import PosterUi from "./PosterUi";

import Poster from "../images/posters/poster_example.png";

class Finalists extends Component {
  render() {
    return (
      <div className="Team">
        <div className="container">
          <div className="team-title-div">
            <a>Finalists</a>
          </div>
          <div>
            <div className="team-category">
              <a>Society Made of Burnt Fuels</a>
            </div>
            <div class="row justify-content-md-center mb-5">
              <div class="col">
                <PosterUi
                  imgUrl={Poster}
                  name="OKAI"
                  designation="Chaeyoung Jung<br/>Hyunyoung Jung<br/>Sanghoon Lee<br/>Seungwon Ok<br/>Sihyun Yoo<br/>Sujae Jeon"
                  color="#fc766a"
                  title="Finalist"
                  link="https://www.naver.com"
                />
              </div>
              <div class="col">
                <PosterUi
                  imgUrl={Poster}
                  name="OKAI"
                  designation="Chaeyoung Jung<br/>Hyunyoung Jung<br/>Sanghoon Lee<br/>Seungwon Ok<br/>Sihyun Yoo<br/>Sujae Jeon"
                  color="#fc766a"
                  title="Finalist"
                />
              </div>
              <div class="col">
                <PosterUi
                  imgUrl={Poster}
                  name="OKAI"
                  designation="Chaeyoung Jung<br/>Hyunyoung Jung<br/>Sanghoon Lee<br/>Seungwon Ok<br/>Sihyun Yoo<br/>Sujae Jeon"
                  color="#fc766a"
                  title="Finalist"
                />
              </div>
            </div>
            <div className="team-category">
              <a>The World With the Invisible Threat</a>
            </div>
            <div class="row justify-content-md-center mb-5">
              <div>
                <PosterUi
                  imgUrl={Poster}
                  name="OKAI"
                  designation="Chaeyoung Jung<br/>Hyunyoung Jung<br/>Sanghoon Lee<br/>Seungwon Ok<br/>Sihyun Yoo<br/>Sujae Jeon"
                  color="#008ecc"
                  title="Finalist"
                  link="https://www.naver.com"
                />
              </div>
            </div>
            <div className="team-category">
              <a>The World of an "Intelligent" Mind</a>
            </div>
            <div class="row justify-content-md-center mb-5">
              <div class="col">
                <PosterUi
                  imgUrl={Poster}
                  name="OKAI"
                  designation="Chaeyoung Jung<br/>Hyunyoung Jung<br/>Sanghoon Lee<br/>Seungwon Ok<br/>Sihyun Yoo<br/>Sujae Jeon"
                  color="#3caea3"
                  title="Finalist"
                  link="https://www.naver.com"
                />
              </div>
              <div class="col">
                <PosterUi
                  imgUrl={Poster}
                  name="OKAI"
                  designation="Chaeyoung Jung<br/>Hyunyoung Jung<br/>Sanghoon Lee<br/>Seungwon Ok<br/>Sihyun Yoo<br/>Sujae Jeon"
                  color="#3caea3"
                  title="Finalist"
                />
              </div>
              <div class="col">
                <PosterUi
                  imgUrl={Poster}
                  name="OKAI"
                  designation="Chaeyoung Jung<br/>Hyunyoung Jung<br/>Sanghoon Lee<br/>Seungwon Ok<br/>Sihyun Yoo<br/>Sujae Jeon"
                  color="#3caea3"
                  title="Finalist"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Finalists;
