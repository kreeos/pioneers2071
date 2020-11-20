import React, { Component } from 'react';
import './common.css';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from '../../redux/modules/base';

import TopBarPanel from './TopBarPanel';
import Logo from "../../images/logo_temp.png"

class TopBar extends Component {
	state = { width: 0 };
    componentWillMount() {
		this.setState({width: window.screen.width});

        if(800 >= window.screen.width){
            this.props.BaseActions.setTopBarVisibility(true);
        }else{
            this.props.BaseActions.setTopBarVisibility(false);
        }
    }

	render() {
		return (
			<div style = {{ height: 'calc(50px + 1vmax)' }}>
            	<div style = {{ height: 'auto', width: '100%', position: 'absolute', zIndex: 9999}}>
					<div className='top-bar'>
						<div className='top-bar-left'>
							<NavLink to="/">
								<img className='top-bar-left-img' src={Logo}/>
							</NavLink>
						</div>
						<div className='top-bar-right'>
							<TopBarPanel />
						</div>
					</div>
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
)(TopBar);
