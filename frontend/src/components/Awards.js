import React, { Component } from "react";
import PosterUi from "./PosterUi";

import GreedyGreen from "../images/posters/GreedyGreen.png";
import Kerdizo from "../images/posters/Kerdizo.png";
import PlanetEarth from "../images/posters/PlanetEarth.png";
import Alive from "../images/posters/Alive.jpg";
import Okai from "../images/posters/Okai.png";
import MissingSemester from "../images/posters/MissingSemester.jpg";
import GooseBrain from "../images/posters/GooseBrain.png";

class Awards extends Component {
  render() {
    return (
      <div className="main-background">
        <div className="container mb-5">
          <div className="page-title-small">Awards</div>
          <div>
            <div class="row justify-content-md-center">
              <div class="col">
                <div className="category-title-center">Grand Award</div>
                <div class="row justify-content-md-center mb-5">
                  <div class="col w-auto">
                    <PosterUi
                      imgUrl={GooseBrain}
                      name="Goose Brain"
                      designation="Ada Carpenter<br/>Adil Hassan Khan<br/>DERESA CHALA ADANE<br/>Fuad Samadov<br/>Hanbit Lee<br/>Justin Jae Young Kim<br/>Xaviera Putri Ardianingsih Listyo"
                      color="#e4a86f"
                      title="Grand Award"
                      link="https://drive.google.com/drive/u/6/folders/19E4wGOAY9C-lBj9YtJF8AXJYkRq9KTAg"
                    />
                  </div>
                </div>
              </div>
              <div class="col">
                <div className="category-title-center">Gold Award</div>
                <div class="row justify-content-md-center mb-5">
                  <div class="col">
                    <PosterUi
                      imgUrl={PlanetEarth}
                      name="Planet Earth"
                      designation="Adela Dorothy<br/>Adeline Calista Wijaya<br/>Britney Laurence Santoso<br/>Felicia Diparahardja<br/>Felicia Wulandari<br/>Feodeera Nerya Sondach<br/>Joshua Orren<br/>Marina Tandarto"
                      color="#d3ae36"
                      title="Gold Award"
                      link="https://drive.google.com/drive/u/6/folders/1BTKo27RsLHqvY9W2-nyPCJ-LBd2u8zt3"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="category-title-center">Silver Award</div>
            <div class="row justify-content-md-center mb-5">
              <div class="col">
                <PosterUi
                  imgUrl={Kerdizo}
                  name="Kerdizo"
                  designation="Adeeb Mohammed Islam<br/>Cheyenne Sharona Knijnenburg<br/>Chrysan Angela Piarso<br/>Dhammiko Arya Gandamana<br/>Shaurish Das Gupta<br/>Shiban Atif Khan"
                  color="#a6a6a6"
                  title="Silver Award"
                  link="https://drive.google.com/drive/u/6/folders/1C_ygyGBwydLsmrkds7hIQaPgb-Bzj68y"
                />
              </div>
              <div class="col">
                <PosterUi
                  imgUrl={Alive}
                  name="ALIVE"
                  designation="Seonmin Won<br/>Hanbin Kim<br/>You Jin Jung<br/>Seyon Park"
                  color="#a6a6a6"
                  title="Silver Award"
                  link="https://drive.google.com/drive/u/6/folders/1uAC5mz8qZqweGav6FGNJUUTUaSj2NQQS"
                />
              </div>
              <div class="col">
                <PosterUi
                  imgUrl={MissingSemester}
                  name="Missing Semester"
                  designation="Minhye Shin<br/>Gu Hong Min<br/>Heeju Choi<br/>Taeyang Yoon<br/>To Hong Min"
                  color="#a6a6a6"
                  title="Silver Award"
                  link="https://drive.google.com/drive/u/6/folders/1T1VE2FYQ4_luxyIqmprHo9k_vQbLWF9P"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Awards;
