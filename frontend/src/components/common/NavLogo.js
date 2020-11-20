import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo_temp.png';

class NavLogo extends Component {
	render() {
		return (
		<div>
			<NavLink to={this.props.link}>
				<img link="/" style={{maxWidth: 50, marginLeft: 30, marginTop: 20}} src={Logo}/>
			</NavLink>
		</div>
		);
	}
}

export default NavLogo;
