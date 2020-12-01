import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo-menu.png';

class NavLogo extends Component {
	render() {
		return (
		<div>
			<NavLink to={this.props.link}>
				<img link="/" style={{maxWidth: 250, marginTop: 20}} src={Logo}/>
			</NavLink>
		</div>
		);
	}
}

export default NavLogo;
