import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBaritem.css';
class NavBaritem extends Component {
	render() {
		let nested = this.props.hover;
		return (
		<div>
			<div style={{
				display: 'inline-block', 
				marginRight: 0, 
				marginBottom: "15px",
				paddingTop: this.props.hover ? "0px !important" : '3vw',
				marginTop: this.props.hover ? "2vw" : '0',
				float: 'left',
				}}>
				<NavLink style={{textDecoration: 'none'}} to={this.props.link}>
					<span style={{
						paddingTop: this.props.hover ? '0px' : '30px',
						paddingBottom: "10px",
						paddingLeft: '10px',
						paddingRight: '10px',
					}} className="hre">
						<span className='menu_div'>
							{this.props.children}
						</span>
					</span>
				</NavLink>
			</div>
		</div>
		);
	}
}

export default NavBaritem;
