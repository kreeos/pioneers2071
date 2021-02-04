import "./VotePage.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class VoteFin extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div class="Vote">
        <div>
          <div className="mb-5 container">
            <div className="vote-title-div">
              <a>Semi-Final Round Voting</a>
            </div>
            <div className="vote-main-div">
              <a>
                The semi-final round voting period is over.
                <br />
                The final round voting period will open at 0:00 KST on February
                6th.
              </a>
            </div>
            {/* <div className="w-100 d-flex justify-content-center">
              <Link to="/finalists">
                <button className="btn-long mx-3 mb-3">
                  Check out the finalists
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default VoteFin;
