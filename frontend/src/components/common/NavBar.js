import React, { Component } from 'react';
import NavBaritem from "./NavBaritem";
import NavLogo from './NavLogo';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from '../../redux/modules/base';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.handleAboutHover = this.handleAboutHover.bind(this);
		this.handleProgramHover = this.handleProgramHover.bind(this);
		this.state = {
			AboutHovering: false,
			ProgramHovering: false,
		};
	}

    componentWillMount() {
        if(800 <= window.screen.width){
            this.props.BaseActions.setNavBarVisibility(true);
        }else{
            this.props.BaseActions.setNavBarVisibility(false);
        }
    }

	handleAboutHover() {
		this.setState(this.toggleAboutState);
	}

	handleProgramHover() {
		this.setState(this.toggleProgramState);
	}

	toggleAboutState(state) {
		return {
			AboutHovering: !state.AboutHovering,
		};
	}

	toggleProgramState(state) {
		return {
			ProgramHovering: !state.ProgramHovering,
		};
	}

	render() {
		// console.log(window.scrollY);
		return (
			<div style = {{ height:100, width: '100%', position: 'fixed', zIndex: '9999',
				background: this.props.top ? '' : 'rgba(0, 0, 0, 0.25)' ,
				boxShadow: this.props.top ? '' : '0 1px 2px rgba(0, 0, 0, 0.12)',
			}}>
				<div className="Navbar-container">
					<div className="Navbar-logo">
						<NavLogo title link="/main" top={this.props.top} />
					</div>
				{/*
					<NavBaritem login="true" link="/login/" top={this.props.top}>Login</NavBaritem>
				*/}	
					<div className="Navbar-single">
						<NavBaritem link="/" top={this.props.top}>Home</NavBaritem>
					</div>
					<div 
						className="Navbar-about"
						onMouseEnter={this.handleAboutHover}
						onMouseLeave={this.handleAboutHover}
					>	
						<NavBaritem link="/about" top={this.props.top}>About</NavBaritem>
						{
							this.state.AboutHovering ? 
							<div className="dropdown">
								<NavBaritem hover={true} link="/about" top={this.props.top}>Conference</NavBaritem>
								<NavBaritem hover={true} link="/committee" top={this.props.top}>Committee</NavBaritem>
							</div>
							:
							null
						}
					</div>
					<div 
						className="Navbar-program"
						onMouseEnter={this.handleProgramHover}
						onMouseLeave={this.handleProgramHover}
					>	
						<NavBaritem link="/concept" top={this.props.top}>Program</NavBaritem>
						{
							this.state.ProgramHovering ? 
							<div className="dropdown">
								<NavBaritem hover={true} link="/concept" top={this.props.top}>Concept</NavBaritem>
								<NavBaritem hover={true} link="/concept" top={this.props.top}>Participation</NavBaritem>
							</div>
							:
							null
						}
					</div>
					<div className="Navbar-single">
						<NavBaritem link="/register" top={this.props.top}>Registration</NavBaritem>
					</div>
					<div className="Navbar-single">
						<NavBaritem link="/contact" top={this.props.top}>Contact</NavBaritem>
					</div>
					<div style={{clear: 'both'}}></div>
				</div>
			</div>
		);
	}
}

export default connect(
    (state) => ({

    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(NavBar);
