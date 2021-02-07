import "./VotePage.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class VoteFin extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div class="main-background">
        <div>
          <div className="mb-5 container">
            <div className="page-title">Final Round Voting</div>
            <div className="page-center-text mb-5 pb-3 w-75 mx-auto">
              The final round voting period is over.
              <br />
              The award ceremony will be held at 4:40 pm on February 7th
              (GMT+9). <br />
              We will announce the final voters' ranking and the winners by
              registered email as soon as the results are counted.
            </div>
            <div className="w-100 d-flex justify-content-center">
              <Link to="/finalists">
                <button className="btn-long mx-3 mb-3">
                  Check out the finalists
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VoteFin;
