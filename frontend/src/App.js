import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HeaderContainer from "./components/HeaderContainer";
import Footer from "./components/common/Footer";

import Main from "./components/Main";
import List from "./components/List";
import About from "./components/About";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Schedule from "./components/Schedule";
import Secnario from "./components/Scenario";
import Complete from "./components/Complete";
import Committee from "./components/Committee";
import RegisterVote from "./components/RegisterVote";
import RegisterEvent from "./components/RegisterEvent";
import GuideVoters from "./components/GuideVoters";
import GuideParticipants from "./components/GuideParticipants";
import Team from "./components/Team";
import Vote from "./components/Vote";
import VoteSemiEea from "./components/VoteSemiEea";
import VoteSemiEnv from "./components/VoteSemiEnv";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: true,
      landing: false,
    };
  }
  // 일정 스크롤 이하로 내리면 네비게이션바  화면 변화
  componentWillMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY < 30) {
        this.setState({
          top: true,
        });
      } else {
        this.setState({
          top: false,
        });
      }
    });
  }

  render() {
    return (
      <div style={{ overflowX: "hidden" }}>
        <BrowserRouter>
          {this.state.landing ? null : <HeaderContainer />}
          <Switch>
            <Route
              exact
              path="/"
              component={this.state.landing ? Landing : Main}
            />
            <Route exact path="/list" component={List} />
            <Route
              exact
              path="/main"
              component={this.state.landing ? Landing : Main}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="/scenario" component={Secnario} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/committee" component={Committee} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/complete" component={Complete} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/register/event" component={RegisterEvent} />
            <Route exact path="/register/vote" component={RegisterVote} />
            <Route exact path="/guide" component={GuideParticipants} />
            <Route
              exact
              path="/guide/participants"
              component={GuideParticipants}
            />
            <Route exact path="/team" component={Team} />
            <Route exact path="/guide/voters" component={GuideVoters} />
            <Route exact path="/vote" component={Vote} />
            <Route exact path="/vote/semi/env" component={VoteSemiEnv} />
            <Route exact path="/vote/semi/eea" component={VoteSemiEea} />
            <Redirect from="/vote" to="/vote" />
            <Redirect from="/" to="/" />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
