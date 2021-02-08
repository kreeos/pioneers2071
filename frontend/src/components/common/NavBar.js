import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../../images/logo-menu.png";
import Logo50 from "../../images/logos.png";
import "./Navbar.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from "../../redux/modules/base";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleAboutHover = this.handleAboutHover.bind(this);
    this.handleConferenceHover = this.handleConferenceHover.bind(this);
    this.handleParticipateHover = this.handleParticipateHover.bind(this);
    this.state = {
      AboutHovering: false,
      ConferenceHovering: false,
      ParticipateHovering: false,
    };
  }

  componentWillMount() {
    if (800 <= window.screen.width) {
      this.props.BaseActions.setNavBarVisibility(true);
    } else {
      this.props.BaseActions.setNavBarVisibility(false);
    }
  }

  handleAboutHover(props) {
    if (props != true) this.setState(this.toggleAboutState);
  }

  handleConferenceHover(props) {
    if (props != true) this.setState(this.toggleConferenceState);
  }

  handleParticipateHover(props) {
    if (props != true) this.setState(this.toggleParticipateState);
  }

  toggleAboutState(state) {
    return {
      AboutHovering: !state.AboutHovering,
    };
  }

  toggleConferenceState(state) {
    return {
      ConferenceHovering: !state.ConferenceHovering,
    };
  }

  toggleParticipateState(state) {
    return {
      ParticipateHovering: !state.ParticipateHovering,
    };
  }

  render() {
    return (
      <Navbar
        fixed="top"
        variant="dark"
        expand="lg"
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      >
        <div className="container">
          <Navbar.Brand href="/main">
            <Nav.Link href="/main">
              <img link="/" style={{ maxHeight: 50 }} src={Logo} />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto Navbar-custom">
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="/about">Pioneer 2071</NavDropdown.Item>
                <NavDropdown.Item href="/team">Planning Team</NavDropdown.Item>
                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Conference" id="basic-nav-dropdown">
                <NavDropdown.Item href="/scenario">Scenario</NavDropdown.Item>
                <NavDropdown.Item href="/schedule">Schedule</NavDropdown.Item>
                <NavDropdown.Item href="/awards">Awards</NavDropdown.Item>
                <NavDropdown.Item href="/participants">
                  Participants
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Participation" id="basic-nav-dropdown">
                <NavDropdown.Item href="/guide/participants">
                  Guide for Participants
                </NavDropdown.Item>
                <NavDropdown.Item href="/guide/voters">
                  Guide for Voters
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="/register/vote">Registration</Nav.Link> */}
              <Nav.Link href="/vote">Vote</Nav.Link>
            </Nav>
            <a href="https://kaist.ac.kr" style={{ color: "white" }}>
              <img link="/" style={{ maxHeight: 40 }} src={Logo50} />
            </a>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  })
)(NavBar);
