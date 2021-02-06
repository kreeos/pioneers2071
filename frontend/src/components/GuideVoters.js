import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
class GuideVoters extends Component {
  render() {
    return (
      <div className="main-background">
        <div className="mb-5 container">
          <div className="page-title-small">Guide for Voters</div>
          <div className="category-div">
            <div className="category-title">Voting Procedure</div>
            <div className="category-text">
              Anyone, including non-participants, can register as a voter
              online. Voters can enter the voting page during the conference.
              Once you are given a code via email, you can insert it to proceed
              with voting.
            </div>
          </div>
          <div className="category-div">
            <div className="category-title">
              Items Reflected in Voting (Effects of Votes)
            </div>
            <div className="category-text">
              Teams to advance to the final are selected based on the results of
              public voting and the evaluation of other participants and judges.
            </div>
          </div>
          <div className="category-div">
            <div className="category-title">Scoring System</div>
            <div className="category-text">
              Top 10 voters in each division (scenario) receive gifts. The
              scoring system is illustrated below.
              <br />
              <br />
              <b>Semi Final</b> <br />
              You can vote for three teams per scenario in the semi-final round.
              The top three teams for each scenario advance to the finals. You
              get points based on the number of teams that advance to the finals
              out of the number of teams that you have supported.
              <Table striped bordered size="sm" className="mt-3">
                <thead>
                  <tr>
                    <th>
                      Number of teams that you have supported advancing to the
                      finals
                    </th>
                    <th>Points received</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0 team</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>1 team</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>2 teams</td>
                    <td>72</td>
                  </tr>
                  <tr>
                    <td>3 teams</td>
                    <td>120</td>
                  </tr>
                </tbody>
              </Table>
              If you do not vote, you will receive 0 points.
              <br />
              <br />
              <b>Final</b> <br />
              You will be giving scores (1, 2, 3) to the teams competing in the
              finals (highest score given to the best team). You will get points
              according to the final rankings of the teams.
              <Table striped bordered size="sm" className="mt-3">
                <thead>
                  <tr>
                    <th class="tg-qjz7">Teams</th>
                    <th class="tg-qjz7">Scores you have given</th>
                    <th class="tg-qjz7">Points received</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="tg-qjz7" rowspan="3">
                      1st place winner
                    </td>
                    <td class="tg-qjz7">1</td>
                    <td class="tg-qjz7">0</td>
                  </tr>
                  <tr>
                    <td class="tg-qjz7">2</td>
                    <td class="tg-qjz7">44</td>
                  </tr>
                  <tr>
                    <td class="tg-xuzy">3</td>
                    <td class="tg-qjz7">75</td>
                  </tr>
                  <tr>
                    <td class="tg-qjz7" rowspan="3">
                      2nd place winner
                    </td>
                    <td class="tg-qjz7">1</td>
                    <td class="tg-qjz7">25</td>
                  </tr>
                  <tr>
                    <td class="tg-xuzy">2</td>
                    <td class="tg-qjz7">45</td>
                  </tr>
                  <tr>
                    <td class="tg-qjz7">3</td>
                    <td class="tg-qjz7">25</td>
                  </tr>
                  <tr>
                    <td class="tg-qjz7" rowspan="3">
                      3rd place winner
                    </td>
                    <td class="tg-xuzy">1</td>
                    <td class="tg-qjz7">40</td>
                  </tr>
                  <tr>
                    <td class="tg-qjz7">2</td>
                    <td class="tg-qjz7">27</td>
                  </tr>
                  <tr>
                    <td class="tg-qjz7">3</td>
                    <td class="tg-qjz7">0</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="text-center">
            <Link to="/register/vote">
              <button className="btn-main">Register as Voter</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GuideVoters;
