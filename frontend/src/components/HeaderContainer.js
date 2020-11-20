import React, { Component } from 'react';
import NavBar from './common/NavBar.js';
import { connect } from 'react-redux';

class HeaderContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
        top:true,
    };
  }
  // 일정 스크롤 이하로 내리면 네비게이션바  화면 변화
  componentWillMount() {
    document.addEventListener( 'scroll', () => {
        if(window.scrollY < 30) {
            this.setState( {
                top:true,
            });
        } else {
            this.setState( {
                top:false,
            });
        }
    });
  }
    render() {

        const { navbar_visible } = this.props;
        if(!navbar_visible) return ( <NavBar top={this.state.top} />); 
		return ( <NavBar top={this.state.top} /> );
    }
}

export default connect(
    (state) => ({
        navbar_visible: state.base.getIn(['header', 'navbar_visible']),
    }),
    (dispatch) => ({

    })
)(HeaderContainer);