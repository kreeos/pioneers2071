import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class TabLinkP extends Component {
	render() {
		return (
			<div>
            	<Link style={{ height: '100%' }} to={{
					pathname: '/publication',
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

export default TabLinkP;
