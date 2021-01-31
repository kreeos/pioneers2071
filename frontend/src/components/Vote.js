import "./VotePage.css";
import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Climate from "../images/Climate.gif";
import AI from "../images/AI.gif";

class Vote extends Component {
  render() {
    return (
      <div className="Vote">
        <div className="container mb-5">
          <div className="vote-title-div">
            <a>Semi-Final Vote</a>
          </div>
          <div className="vote-main-div">
            <div className="vote-cards-container">
              <Card className="vote-card">
                <Card.Img variant="top" src={Climate} />
                <div className="vote-card-title">
                  Society Made of
                  <br /> Burnt Fuels
                </div>
                <Link to="/vote/semi/env">
                  <button className="vote-btn-join mb-3">Vote</button>
                </Link>
              </Card>
              <Card className="vote-card">
                <Card.Img variant="top" src={AI} />
                <div className="vote-card-title">
                  The World of an <br /> "Intelligent" Mind
                </div>
                <Link to="/vote/semi/ai">
                  <button className="vote-btn-join mb-3">Vote</button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Vote;
