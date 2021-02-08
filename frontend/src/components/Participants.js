import React, { Component } from "react";
import PosterUi from "./PosterUi";

import GreedyGreen from "../images/posters/GreedyGreen.png";
import Kerdizo from "../images/posters/Kerdizo.png";
import PlanetEarth from "../images/posters/PlanetEarth.png";
import Alive from "../images/posters/Alive.jpg";
import Okai from "../images/posters/Okai.png";
import MissingSemester from "../images/posters/MissingSemester.jpg";
import GooseBrain from "../images/posters/GooseBrain.png";
import Pionair from "../images/posters/Pionair.png";
import Justintime from "../images/posters/Justintime.png";
import Aware from "../images/posters/Aware.jpg";
import Nussu from "../images/posters/Nussu.png";
import Raceagainstthefuels from "../images/posters/Raceagainstthefuels.png";
import Sulifa from "../images/posters/Sulifa.png";
import Eanomics from "../images/posters/Eanomics.png";
import Timemachine from "../images/posters/Timemachine.png";
import Alniyo from "../images/posters/Alniyo.png";

class Participants extends Component {
  render() {
    return (
      <div className="main-background">
        <div className="container mb-5">
          <div className="page-title-small">Participants</div>
          <div>
            <div id="env" className="category-title-center">
              Society Made of Burnt Fuels
            </div>
            <div class="row justify-content-md-center mb-5">
              <div class="col">
                <PosterUi
                  imgUrl={PlanetEarth}
                  name="Planet Earth"
                  designation="Adela Dorothy<br/>Adeline Calista Wijaya<br/>Britney Laurence Santoso<br/>Felicia Diparahardja<br/>Felicia Wulandari<br/>Feodeera Nerya Sondach<br/>Joshua Orren<br/>Marina Tandarto"
                  color="#e4a86f"
                  title="Gold Award"
                  link="https://drive.google.com/drive/u/6/folders/1BTKo27RsLHqvY9W2-nyPCJ-LBd2u8zt3"
                />
              </div>
              <div class="col">
                <PosterUi
                  imgUrl={Kerdizo}
                  name="Kerdizo"
                  designation="Adeeb Mohammed Islam<br/>Cheyenne Sharona Knijnenburg<br/>Chrysan Angela Piarso<br/>Dhammiko Arya Gandamana<br/>Shaurish Das Gupta<br/>Shiban Atif Khan"
                  color="#e4a86f"
                  title="Silver Award"
                  link="https://drive.google.com/drive/u/6/folders/1C_ygyGBwydLsmrkds7hIQaPgb-Bzj68y"
                />
              </div>
              <div class="col w-auto">
                <PosterUi
                  imgUrl={GreedyGreen}
                  name="Greedy Green"
                  designation="Jaeyub Song<br/>Yewon Kim<br/>Chanhee Lee<br/>Kyunghae Hur<br/>Dayoung Lim<br/>Dongwhee Kim<br/>Minkyung Kang<br/>Sohyun Song"
                  color="#e4a86f"
                  title="Finalist"
                  link="https://drive.google.com/drive/u/6/folders/1mntyv91pIbsfoB2W1KUIKdhvogrpdHLi"
                />
              </div>
              <div class="col w-auto">
                <PosterUi
                  imgUrl={Pionair}
                  name="PionAir"
                  designation="Brickey Chen<br/>Emily Shaw<br/>Rebecca Kung<br/>Siti Aminah Mohd Ali<br/>Sofia Chelsea Balingit<br/>Xinran Sun<br/>Zhejun Carol Xu"
                  color="#e4a86f"
                  title="Semi-Finalist"
                  link="https://drive.google.com/drive/u/2/folders/1lplhCyKPOZZ2QbjJLaAGf2hcwI8Qg74a"
                />
              </div>
              <div class="col w-auto">
                <PosterUi
                  imgUrl={Justintime}
                  name="Just in Time"
                  designation="Joel Lee Sheng Yuan<br/>Mathena A Kattar<br/>Muhammad Iskandar B Salaman<br/>Ng Hsin Yee Carolyn<br/>Rustam Shariq Mujtaba<br/>Wong Yao-An Justin"
                  color="#e4a86f"
                  title="Semi-Finalist"
                  link="https://drive.google.com/drive/u/2/folders/1X40Ce--_P6EgXJ2zSLnH9Oxy1Bpo3UFs"
                />
              </div>
              <div class="col w-auto">
                <PosterUi
                  imgUrl={Aware}
                  name="AWARE"
                  designation="Dike ZHENG<br/>Ran CHU<br/>Sheng HONG<br/>Yurui KANG"
                  color="#e4a86f"
                  title="Semi-Finalist"
                  link="https://drive.google.com/drive/u/2/folders/1f2QljPQXLPKEdVN-xruijMAdL43vWJxq"
                />
              </div>
              <div class="col w-auto">
                <PosterUi
                  imgUrl={Nussu}
                  name="NUSSU"
                  designation="Ananya Sinha<br/>Chiam Yeng Heeng<br/>Kieron Tang Jin Wei<br/>Kimberly Chee Yu Xuan<br/>Neo Wen Hong<br/>Song Yuh Huei"
                  color="#e4a86f"
                  title="Semi-Finalist"
                  link="https://drive.google.com/drive/u/2/folders/1qbwEJc6AEwRXzqD7ecRVhgnd0SSIJCBI"
                />
              </div>
              <div class="col w-auto">
                <PosterUi
                  imgUrl={Raceagainstthefuels}
                  name="Race against the fuels"
                  designation="Anggita Andrea Larasati<br/>Crescencia Melissa Valentina<br/>Elzi Sirkan Muhammad<br/>Gilbert Lesmana<br/>Gusaimas Matahachiro Hanggoro Himawan Akbar<br/>Maurice Efroza Handi<br/>Muhammad Farhan Firdaus Trouerbach<br/>Nadya Myesha"
                  color="#e4a86f"
                  title="Semi-Finalist"
                  link="https://drive.google.com/drive/u/2/folders/1XY2L4RGZPXqogRCr97F9a8PwCP3Cj0im"
                />
              </div>
              <div class="col w-auto">
                <PosterUi
                  imgUrl={Sulifa}
                  name="Sulifa"
                  designation="Anggita Andrea Larasati<br/>Crescencia Melissa Valentina<br/>Elzi Sirkan Muhammad<br/>Gilbert Lesmana<br/>Gusaimas Matahachiro Hanggoro Himawan Akbar<br/>Maurice Efroza Handi<br/>Muhammad Farhan Firdaus Trouerbach<br/>Nadya Myesha"
                  color="#e4a86f"
                  title="Semi-Finalist"
                  link="https://drive.google.com/drive/u/2/folders/1D5ahkbFAxeGF7_5L4ofG_M07ax-I0UeN"
                />
              </div>
            </div>
            <div className="category-title-center">
              The World With the Invisible Threat
            </div>
            <div class="row justify-content-md-center mb-5">
              <div class="col">
                <PosterUi
                  imgUrl={Alive}
                  name="ALIVE"
                  designation="Seonmin Won<br/>Hanbin Kim<br/>You Jin Jung<br/>Seyon Park"
                  color="#e4a86f"
                  title="Silver Award"
                  link="https://drive.google.com/drive/u/6/folders/1uAC5mz8qZqweGav6FGNJUUTUaSj2NQQS"
                />
              </div>
            </div>
            <div id="eea" className="category-title-center">
              The World of an "Intelligent" Mind
            </div>
            <div class="row justify-content-md-center mb-5">
              <div class="col">
                <PosterUi
                  imgUrl={GooseBrain}
                  name="Goose Brain"
                  designation="Ada Carpenter<br/>Adil Hassan Khan<br/>DERESA CHALA ADANE<br/>Fuad Samadov<br/>Hanbit Lee<br/>Justin Jae Young Kim<br/>Xaviera Putri Ardianingsih Listyo"
                  color="#e4a86f"
                  title="Grand Award"
                  link="https://drive.google.com/drive/u/6/folders/19E4wGOAY9C-lBj9YtJF8AXJYkRq9KTAg"
                />
              </div>
              <div class="col">
                <PosterUi
                  imgUrl={MissingSemester}
                  name="Missing Semester"
                  designation="Minhye Shin<br/>Gu Hong Min<br/>Heeju Choi<br/>Taeyang Yoon<br/>To Hong Min"
                  color="#e4a86f"
                  title="Silver Award"
                  link="https://drive.google.com/drive/u/6/folders/1T1VE2FYQ4_luxyIqmprHo9k_vQbLWF9P"
                />
              </div>
              <div class="col">
                <PosterUi
                  imgUrl={Okai}
                  name="OKAI"
                  designation="Chaeyoung Jung<br/>Hyunyoung Jung<br/>Sanghoon Lee<br/>Seungwon Ok<br/>Sihyun Yoo<br/>Sujae Jeon"
                  color="#e4a86f"
                  title="Finalist"
                  link="https://drive.google.com/drive/u/6/folders/1MxHOEYk2mQd6pGT7NvHBsyUKFOXURMG-"
                />
              </div>
              <div class="col">
                <PosterUi
                  imgUrl={Eanomics}
                  name="EAnomics"
                  designation="Brendan Chow<br/>Elisa Nguyen<br/>Jasmine Johnson<br/>Yijun Zhou"
                  color="#e4a86f"
                  title="Semi-Finalist"
                  link="https://drive.google.com/drive/u/2/folders/1UKI3gTjAaki7_FVH5bHthKX_YdcK9yuy"
                />
              </div>
              <div class="col">
                <PosterUi
                  imgUrl={Timemachine}
                  name="Time Machine(2071) Crews"
                  designation="Hyewon Jeon<br/>Hyunsu Kim<br/>Kyoung Wan Min<br/>Taewon Kim"
                  color="#e4a86f"
                  title="Semi-Finalist"
                  link="https://drive.google.com/drive/u/2/folders/13xT5ElESMaET4nMSEKvNXmdVTxjurz30"
                />
              </div>
              <div class="col">
                <PosterUi
                  imgUrl={Alniyo}
                  name="Alniyo"
                  designation="Abdirakhman<br/>Anmol Agrawal<br/>Azamat Atabayev<br/>Jonathan Willianto<br/>Rafsan Rahman Raayan<br/>Washik Uddin Ahmed Mollah"
                  color="#e4a86f"
                  title="Semi-Finalist"
                  link="https://drive.google.com/drive/u/2/folders/1dj9TICgG3EE8Bcjbs_y-Bw3CFRLicw6D"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Participants;
