import "./VotePage.css";
import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";

import Climate from "../images/Climate.gif";
import AI from "../images/AI.gif";

class Vote extends Component {
  render() {
    return (
      <div className="Vote">
        <div className="container mb-5">
          <div className="vote-title-div">
            <a>About Pioneers 2071</a>
          </div>
          <div className="vote-main-div">
            <div className="d-flex justify-content-center row">
              <Card
                style={{
                  width: "30%",
                  border: "none",
                  backgroundColor: "rgba(0,0,0,0)",
                }}
              >
                <Card.Img variant="top" src={Climate} />
                <Card.Body>
                  <Card.Title>Society Made of Burnt Fuels</Card.Title>
                  <button
                    type="submit"
                    class="btn custom-btn mt-3"
                    value="Submit"
                  >
                    Vote
                    <FaAngleRight />
                  </button>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "30%",
                  border: "none",
                  backgroundColor: "rgba(0,0,0,0)",
                }}
              >
                <Card.Img variant="top" src={AI} />
                <Card.Body>
                  <Card.Title>The World of an "Intelligent" Mind</Card.Title>
                  <Button variant="primary">Vote</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Vote;
