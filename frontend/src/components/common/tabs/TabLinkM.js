import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class TabLinkM extends Component {
	render() {
		return (
			<div>
            	<Link style={{ height: '100%' }} to={{
					pathname: '/members',
              		state: {
              			value: this.props.value
              		}
            	}}>
					<div className='sidebar-tab-cont'>{this.props.children}</div>
				</Link>
			</div>
		);
	}

}

export default TabLinkM;
