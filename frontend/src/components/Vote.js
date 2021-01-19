import "./Vote.css";
import React, { Component } from "react";

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      choice: "",
      check: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.iframe =
      '<iframe src="https://formfacade.com/headless/113331629213605270902/home/form/1FAIpQLSeuQDIo7F8fkmPOrLPKG99_YE2A8StafRFByk-AAwQwkDD5Lg" scrolling="no" frameBorder="0" width="100%" style="height:400px; /*change height as required*/ overflow-y:hidden;"></iframe>';
  }

  componentDidMount() {
    const script = document.createElement("script");

    script.src =
      "https://formfacade.com/include/113331629213605270902/form/1FAIpQLSeuQDIo7F8fkmPOrLPKG99_YE2A8StafRFByk-AAwQwkDD5Lg/bootstrap.js?div=ff-compose";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);
  }

  handleChange(event) {
    if (event.target.name == "source" && event.target.value == "other")
      this.setState({ other: true });
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    let name_flag = this.state.name == "";
    let choice_flag = this.state.choice == "";
    let check_flag = this.state.check == "";

    if (name_flag) {
      alert("Please fill your name.");
      event.preventDefault();
      return;
    } else if (choice_flag) {
      alert("Please fill your choice.");
      event.preventDefault();
      return;
    } else if (check_flag) {
      alert("Please check the aggrement.");
      event.preventDefault();
      return;
    } else {
      const newVoter = {
        name: this.state.name,
        birth: this.state.birth,
        email: this.state.email,
      };
      this.sendRequest(newVoter);
    }

    event.preventDefault();
  }

  render() {
    return (
      <div class="Vote">
        <div className="first-page">
          <div className="mb-5 container">
            <div className="vote-title-div">
              <a>Vote Test</a>
            </div>
            <div className="vote-main-div">
              <a>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </a>
            </div>
            <div class="d-flex justify-content-center row">
              <a href="#main">
                <button className="main-btn-join mx-3 mb-3">
                  Start Voting
                </button>
              </a>
            </div>
          </div>
        </div>
        <div id="main">
          <div className="padding"></div>
          <div class="second-page py-4">
            <div class="container">
              {/* <div className="vote-title mb-1">Voting for Round I</div>
              <div className="vote-subtitle mb-3">Pandemic</div>
              <form>
                <div class="form-name mb-3">
                  <label for="inputName">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputName"
                    aria-describedby="nameHelp"
                    placeholder="Enter your name"
                    onChange={this.handleChange}
                  />
                  <small id="nameHelp" class="form-text text-muted">
                    Please enter your code that you've provided via email.
                  </small>
                </div>
                <div class="form-vote mb-3">
                  <label for="inputVote">Vote for</label>
                  <select
                    class="form-control"
                    id="inputVote"
                    onChange={this.handleChange}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                    onChange={this.handleChange}
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Are you sure with your vote? The vote cannot be changed
                    after submission.
                  </label>
                </div>
                <button
                  type="submit"
                  class="btn custom-btn mt-3"
                  value="Submit"
                >
                  Submit
                </button>
              </form> */}

              <div class="container" id="ff-compose" iframe={this.iframe}></div>
            </div>
          </div>
        </div>
        <div class="padding"></div>
      </div>
    );
  }
}

export default Vote;
