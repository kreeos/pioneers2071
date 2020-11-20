import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class TabLinkR extends Component {


	render() {
		const tab = this.props.tab;
		// console.log('/research#'+tab);
		const addr = '/'
		return (
			<div>
            	<Link target="_self" style={{ height: '100%' }} to={{
					pathname: addr,
					search: tab
            	}}>
				<div className='sidebar-tab-cont'>{this.props.children}</div>
				</Link>
				{/*
            	<a href={addr} target="_self">
				<div className='sidebar-tab-cont'>{this.props.children}</div>
				</a>
            	*/}
			</div>
		);
	}

}

export default TabLinkR;
