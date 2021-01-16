import "./Scenario.css";
import React, { Component } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Pandemic from "../images/Pandemic.gif";
import Climate from "../images/Climate.gif";
import AI from "../images/AI.gif";
import PolicyMaker from "../images/icon-policymaker.png";
import Innovator from "../images/icon-innovator.png";

class Scenario extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Scenario">
        <div className="container">
          <div className="scenario-main-container">
            <div className="scenario-title-div">
              <a>Scenario</a>
            </div>
            <div className="scenario-popup-container">
              <div className="each-popup">
                <Popup
                  trigger={<img src={Climate} className="scenario-icon" />}
                  modal
                  nested
                  className="scenario-popup-content no-padding"
                >
                  {(close) => (
                    <div
                      className="modal-background"
                      style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
                    >
                      <div className="custom-modal-header">
                        Society Made of Burnt Fuels
                      </div>
                      <div className="custom-modal-subtitle">
                        Environment: Pollution and Climate Change
                      </div>
                      <div className="custom-modal-content">
                        <div className="custom-modal-text">
                          <p>
                            A country called Grainland gained independence just
                            after a global war ended, and struggled with extreme
                            poverty. Over time, other countries repaired
                            themselves from the scars of the war and boosted
                            development through the massive operation of
                            factories that constantly emit smoke. In contrast,
                            the people of Grainland have barely made ends meet
                            by farming and breeding livestock in difficult
                            conditions without electrical facilities and
                            waterworks. While other countries have achieved a
                            high level of national growth, Grainland just began
                            stepping forward with national development.
                          </p>
                          <p>
                            Over several decades, emissions that were discharged
                            from the numerous factories in other countries have
                            elevated the temperature of the Earth and worsened
                            the air quality, which is causing the plants to
                            wither. Countries around the world are only now
                            aware of the crisis. However, Grainland has become a
                            developing country with a rapid growth rate. The
                            smoke that is being emitted from factories in this
                            country is constantly mixing with the murky air and
                            covering the world. International treaties have been
                            drawn up to prevent smoke from being generated, and
                            other countries are expressing their discontent over
                            Grainland.
                          </p>
                          <p>
                            Grainland was slow in entering the race of national
                            growth. It can now actively operate industries, but
                            this process is causing air pollutant emissions.
                            Other countries accomplished considerable
                            development through large-scale operation of
                            factories in the past, whereas Grainland is only now
                            engaging in national development. Although Grainland
                            can advance itself at present, issues with its
                            economic development are colliding with global
                            environmental issues. Besides, developed countries
                            are trying to apply universal conditions to the
                            small country of Grainland in terms of environmental
                            issues. People in Grainland are also suffering from
                            the air that is full of smoke, and this country has
                            met with difficulty in making its decisions.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
                <div className="scenario-icon-title">
                  <a>
                    {" "}
                    Society Made of
                    <br /> Burnt Fuels{" "}
                  </a>
                </div>
              </div>
              <div className="each-popup">
                <Popup
                  trigger={<img src={Pandemic} className="scenario-icon" />}
                  modal
                  nested
                  className="scenario-popup-content no-padding"
                >
                  {(close) => (
                    <div
                      className="modal-background"
                      style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
                    >
                      <div className="custom-modal-header">
                        The World With the Invisible Threat
                      </div>
                      <div className="custom-modal-subtitle">
                        The Next Outbreak: Pandemic
                      </div>
                      <div className="custom-modal-content">
                        <div className="custom-modal-text">
                          <p>
                            A new infectious disease breaks out in 2031.
                            Scientists estimate that this disease is a type of
                            coronavirus that has not been observed on the Earth
                            for hundreds of years. In particular, the
                            contagiousness of this disease is analyzed to be the
                            highest among other infectious diseases that have
                            recently spread on the Earth. As it has a long
                            incubation period, people cannot easily be aware
                            that they have the disease when they are already
                            infected. Moreover, people face a risk of infection
                            even in less-populated areas given that the virus
                            can be transmitted from person to person through
                            both respiratory droplets and aerosols in the air.
                            The spread of this disease finally reaches a city
                            named “Mountwest”, in which many people reside.
                            Although a case of a group infection has not yet
                            been observed, confirmed cases of the virus have
                            been intermittently reported. The government is
                            deeply concerned about this city, and rumor has it
                            that a full-scale lockdown is being considered due
                            to the high contagiousness of the disease.
                          </p>
                          <p>
                            People living in Mountwest are extremely scared
                            about the outbreak of the new infectious disease.
                            This city had seen the outbreak of another
                            infectious disease in the past. The disease
                            infection cycle has shortened over time, and a new
                            type of disease has developed in 2031. People have
                            become exhausted by repeated infectious diseases.
                            People are experiencing a high level of fatigue and
                            depression due to social distancing. The spread of
                            an infectious disease might threaten the lives of
                            some people and significantly shrink economic
                            activities. Consequently, some people could have
                            difficulties due to reduced incomes, while others
                            could be at risk of losing their jobs. This is not a
                            simple problem of getting infected or not.
                          </p>
                          <p>
                            As described above, an infectious disease is one of
                            the greatest threats latent in a modern society that
                            includes numerous people. What measures can enable
                            people in Mountwest to maintain decent human lives
                            despite the danger of infectious disease?
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
                <div className="scenario-icon-title">
                  <a>
                    {" "}
                    The World With the
                    <br /> Invisible Threat{" "}
                  </a>
                </div>
              </div>
              <div className="each-popup">
                <Popup
                  trigger={<img src={AI} className="scenario-icon" />}
                  modal
                  nested
                  className="scenario-popup-content no-padding"
                >
                  {(close) => (
                    <div
                      className="modal-background"
                      style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
                    >
                      <div className="custom-modal-header">
                        The World of an "Intelligent" Mind
                      </div>
                      <div className="custom-modal-subtitle">
                        Education, Economics, and AI
                      </div>
                      <div className="custom-modal-content">
                        <div className="custom-modal-text">
                          <p>
                            In the year 2071, a completely new era of
                            technological development has come. Artificial
                            intelligence (AI) has evolved to outperform humans
                            in various fields, and companies and countries with
                            the best AI technology, including the country Aerok,
                            have created massive amounts of wealth. Gradually,
                            AI has replaced more and more people’s jobs, and
                            Aerok has introduced a universal basic income system
                            that allows people to live a sufficiently plentiful
                            life without any additional income. However, many
                            people still crave wealth and desire to take the
                            remaining few jobs, which has caused an intensive
                            education fever in Aerok. In response to the
                            situation, the government has introduced a new
                            education policy called the “TITLE” (Test of
                            Intelligence: Technology & Linguistics Examination)
                            to control the excessive education fever.
                          </p>
                          <p>
                            “TITLE” has successfully selected the optimal number
                            of best students, but still, it has failed to reduce
                            excessively competitive atmospheres in schools.
                            Students dreaming of entering the top-ranking
                            universities have to study day and night, which is
                            putting them under considerable amounts of academic
                            stress. Moreover, the few aristocracies of the
                            society and the largest, wealthiest companies have
                            started to “kick away the ladder.” The flow of
                            wealth into the AI industry has increased year after
                            year, and this has intensified not only education
                            fever but also the conflict between the privileged
                            class and the rest of the society. Aerok is
                            currently facing a complicated, problematic
                            situation wherein both education and careers face
                            substantial problems in the society, requiring
                            careful yet adequate solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
                <div className="scenario-icon-title-last">
                  <a>
                    {" "}
                    The World of an
                    <br /> "Intelligent" Mind{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="scenario-half">
            <div className="scenario-half-info">
              <a>
                Each team of pioneers comprises <b>four to eight members </b>
                who attempt to solve problems with the same ideology and goal.
                Their roles are classified into that of policymakers and
                innovators. Prior to preparing for the conference, roles should
                be assigned to members of each team.
              </a>
            </div>
          </div>
          <div className="scenario-container">
            <div className="scenario-image-div-left">
              <img className="scenario-image" src={PolicyMaker} />
            </div>
            <div className="scenario-text-container-left">
              <div className="scenario-text-title">Policy Maker</div>
              <div className="scenario-text">
                <a>
                  Human beings have encountered a significantly critical
                  situation that might threaten their existence. As a competent
                  policymaker, you should implement appropriate policies to
                  solve this problem.
                  <br />
                  Policies should be proposed as a complete collection that
                  satisfies all the evaluation standards indicated below:
                  <br />
                  <br />
                  <br />
                  - Has the given situation been analyzed thoroughly?
                  <br />
                  - Do the policies consider various fields, including history,
                  society, and culture based on the given scenario?
                  <br />
                  - Has the policy implementation result been presented
                  logically?
                  <br />
                  - Can the policies be practically implemented?
                  <br />
                  - What problems are expected to occur when the policies are
                  executed?
                  <br />- What are the differences between the proposed policies
                  and other policies?
                </a>
              </div>
            </div>
          </div>
          <div className="scenario-container">
            <div className="scenario-image-div-right">
              <img className="scenario-image" src={Innovator} />
            </div>
            <div className="scenario-text-container-right">
              <div className="scenario-text-title-right">Innovators</div>
              <div className="scenario-text">
                <a>
                  Human beings have encountered a significantly critical
                  situation that might threaten their existence. As a competent
                  innovator, you should design an appropriate product to
                  overcome the crisis. You can manufacture the product using the
                  entire medium, regardless of tangible and intangible forms, or
                  submit a proposal for the product. In both cases, one of the
                  following evaluation standards should be considered.
                  <br />
                  <br />
                  - Does the product reflect the direction or emphasis of the
                  collection of policies developed by the policymakers?
                  <br />
                  - Is the product useful for supporting policy implementation
                  or directly related to such support?
                  <br />
                  - Is the product both creative and practical?
                  <br />
                  - Have the expected effects of the product been reasonably
                  evaluated through quantitative and qualitative evaluation?
                  <br />
                  <br />
                  The product can be manufactured using all kinds of media and
                  forms. Examples of applicable forms are as follows.
                  <br />
                  <br />
                  - An actual item
                  <br />
                  - Propaganda
                  <br />
                  - A website
                  <br />
                  - An application
                  <br />- A business item
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Scenario;
