import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBaritem.css';
class NavBaritem extends Component {
	render() {
		const login = (this.props.login == "true")
		return (
		<div>
			<div style={{
				display: 'inline-block', 
				marginRight: 0, 
				marginBottom: "15px",
				paddingTop: this.props.hover ? "20px" : '3vw', 
				float: 'left',
				}}>
				<NavLink style={{textDecoration: 'none'}} to={this.props.link}>
					<span className='hre'>
						<span className='menu_div'>
							{	
								login ? 
								<button className="menu-btn-login"> {this.props.children} </button>
								:
								this.props.children
							}
						</span>
					</span>
				</NavLink>
			</div>
		</div>
		);
	}
}

export default NavBaritem;
