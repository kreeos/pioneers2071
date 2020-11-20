import React, { Component } from 'react';
import './common.css';
import { Link } from 'react-router-dom'; 
import TabLinkR from './tabs/TabLinkR';
import TabLinkM from './tabs/TabLinkM';
import TabLinkP from './tabs/TabLinkP';
import TopbarImg from "../../images/topbar.png"
class TopBarPanel extends Component {
	state = { sidebarOpen: false };

	handleViewSidebar = (sidebarOpen) => {
		this.setState({ sidebarOpen : !this.state.sidebarOpen });
	}


	render() {
		return (
			<div>
				<Header onClick={this.handleViewSidebar} />
				<SideBar onClick={this.handleViewSidebar} isOpen={this.state.sidebarOpen} />			
			</div>
		);
	}
}

class Header extends Component {
	render() {
		return (
				<div onClick={this.props.onClick}>
					<img onClick={this.handleViewSidebar} className='top-bar-right-img' src={TopbarImg}/>
				</div>
		);
	}
}

class SideBar extends Component {
	render() {
		var sidebarClass = this.props.isOpen ? 'sidebar open' : 'sidebar';
		return (
			<div id="hamburger" condition="1" className={sidebarClass} onClick={this.props.onClick}>
				<div className='sidebar-header'>
					<div><Link to="/">HOME</Link></div>
				</div>
				<div className='sidebar-tab'>
					<div className='sidebar-tab-name'><Link to="/research/">RESEARCH</Link></div>
					<TabLinkR tab="rtm" link="/research">- Radiation tolerant material</TabLinkR>
					<TabLinkR tab="rebs" link="/research">- Radiation effects on bioogical system</TabLinkR>
					<TabLinkR tab="sn" link="/research">- Structural Nanomechanics</TabLinkR>
					<TabLinkR tab="fn" link="/research">- Functional Nanomechanics</TabLinkR>
				</div>
				<div className='sidebar-tab'>
					<div className='sidebar-tab-name'><Link to="/members">MEMBERS</Link></div>
					<TabLinkM value="professor" link="/members">- Professor</TabLinkM>
					<TabLinkM value="postdoc" link="/members">- Post Doctor</TabLinkM>
					<TabLinkM value="student" link="/members">- Student</TabLinkM>
					<TabLinkM value="alumni" link="/members">- Alumni</TabLinkM>
				</div>
				<div className='sidebar-tab'>
					<div className='sidebar-tab-name'><Link to="/publication">PUBLICATIONS</Link></div>
					<TabLinkP value="paper" link="/publication">- Paper</TabLinkP>
					<TabLinkP value="conference" link="/publication">- Conference</TabLinkP>
					<TabLinkP value="patent" link="/publication">- Patent</TabLinkP>
				</div>
				<div className='sidebar-tab-just-name'><Link to="/lecture/">LECTURES</Link></div>
				<div className='sidebar-tab-just-name'><Link to="/instruments/">INSTRUMENTS</Link></div>
				<div className='sidebar-tab-just-name'><Link to="/news/">NEWS</Link></div>	
			</div>
		);
	}
}

{/*
class Content extends Component { 
	render() {
		var contentClass = this.props.isOpen ? 'content open' : 'content';
		return(
			<div className={contentClass}></div>
		);
	}
}
*/}

export default TopBarPanel;
