import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// import NavBaritem from "./NavBaritem";
import Logo from "../../images/logo-menu.png";
import Logo50 from "../../images/logos.png";
import { Link } from "react-router-dom";
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
                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Conference" id="basic-nav-dropdown">
                <NavDropdown.Item href="/scenario">Scenario</NavDropdown.Item>
                <NavDropdown.Item href="/schedule">Schedule</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Participation" id="basic-nav-dropdown">
                <NavDropdown.Item href="/guide/participants">
                  Guide for Participants
                </NavDropdown.Item>
                <NavDropdown.Item href="/guide/voters">
                  Guide for Voters
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/register">Registration</Nav.Link>
            </Nav>
            <a href="https://kaist.ac.kr" style={{ color: "white" }}>
              <img link="/" style={{ maxHeight: 40 }} src={Logo50} />
            </a>
          </Navbar.Collapse>
        </div>
      </Navbar>
      // <div style = {{ height:100, width:'100%', position: 'fixed', zIndex: '95',
      // 	background: this.props.top ? '' : 'rgba(0, 0, 0, 0.75)' ,
      // 	boxShadow: this.props.top ? '' : '0 1px 2px rgba(0, 0, 0, 0.12)',
      // }}>
      // 	<div className="Navbar-container">
      // 		<div className="Navbar-logo">
      // 			<NavLogo title link="/main" top={this.props.top} />
      // 		</div>
      // 	{/*
      // 		<NavBaritem login="true" link="/login/" top={this.props.top}>Login</NavBaritem>
      // 	*/}
      // 		<div
      // 			className="Navbar-about"
      // 			onMouseEnter={this.handleAboutHover}
      // 			onMouseLeave={this.handleAboutHover}
      // 		>
      // 			<NavBaritem link="/about" top={this.props.top}>About</NavBaritem>
      // 			{
      // 				this.state.AboutHovering ?
      // 				<div className="dropdown" onMouseEnter={this.handleAboutHover(true)}>
      // 					<NavBaritem hover={true} link="/about" top={this.props.top}>Pioneer 2071</NavBaritem>
      // 					<NavBaritem hover={true} link="/contact" top={this.props.top}>Contact</NavBaritem>
      // 				</div>
      // 				:
      // 				null
      // 			}
      // 		</div>
      // 		<div
      // 			className="Navbar-conference"
      // 			onMouseEnter={this.handleConferenceHover}
      // 			onMouseLeave={this.handleConferenceHover}
      // 		>
      // 			<NavBaritem link="/scenario" top={this.props.top}>Conference</NavBaritem>
      // 			{
      // 				this.state.ConferenceHovering ?
      // 				<div className="dropdown" onMouseEnter={this.handleConferenceHover(true)}>
      // 					<NavBaritem hover={true} link="/scenario" top={this.props.top}>Scenario</NavBaritem>
      // 					<NavBaritem hover={true} link="/schedule" top={this.props.top}>Schedule</NavBaritem>
      // 				</div>
      // 				:
      // 				null
      // 			}
      // 		</div>
      // 		<div
      // 			className="Navbar-participate"
      // 			onMouseEnter={this.handleParticipateHover}
      // 			onMouseLeave={this.handleParticipateHover}
      // 		>
      // 			<NavBaritem link="/guide/participants" top={this.props.top}>Participation</NavBaritem>
      // 			{
      // 				this.state.ParticipateHovering ?
      // 				<div className="dropdown" onMouseEnter={this.handleParticipateHover(true)}>
      // 					<NavBaritem hover={true} link="/guide/participants" top={this.props.top}>Guide for Participants</NavBaritem>
      // 					<NavBaritem hover={true} link="/guide/voters" top={this.props.top}>Guide for Voters</NavBaritem>
      // 				</div>
      // 				:
      // 				null
      // 			}
      // 		</div>
      // 		<div className="Navbar-single">
      // 			<NavBaritem link="/register" top={this.props.top}>Registration</NavBaritem>
      // 		</div>
      // 		<div style={{clear: 'both'}}></div>
      // 	</div>
      // </div>
    );
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  })
)(NavBar);
